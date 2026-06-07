const fs = require('fs');
const path = require('path');
const https = require('https');

// คัดลอกค่าตั้งค่ามาจาก app.js
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKyrr-YJXIiqLIpH4bwTFidXj56h96ZMQDcZZA6zvhwxHh1NigwcqUqvdWszS8EJ5ENP4dgygLQq/pub?gid=0&single=true&output=csv";
const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbwaM_b-3BVxcM2PfFpTbRH-CdYHbxffmXEm_n5FNfd3qlV5wJAtDkpmh1EKCNNzDZYqLA/exec";

// ฟังก์ชันดึงข้อมูลจาก URL (รองรับการตาม Redirect 301/302)
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    function get(currentUrl) {
      https.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => { resolve(data); });
      }).on('error', (err) => { reject(err); });
    }
    get(url);
  });
}

// ฟังก์ชันดาวน์โหลดและบันทึกไฟล์ภาพจาก URL ลงในเครื่อง (รองรับ Redirect)
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    function get(currentUrl) {
      https.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Status Code: ${res.statusCode}`));
          return;
        }
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      }).on('error', (err) => {
        reject(err);
      });
    }
    get(url);
  });
}

// ฟังก์ชันสร้าง slug จากชื่อสินค้าสำหรับลิงก์แชร์ภาษาไทยและอังกฤษ
function generateSlug(title) {
  if (!title) return "";
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\u0e00-\u0e7f\s-]/g, "") // เก็บเฉพาะอังกฤษ ตัวเลข อักษรไทย ช่องว่าง และขีดกลาง
    .replace(/[\s_]+/g, "-")                     // แปลงช่องว่างและ underscore เป็นขีดกลาง
    .replace(/-+/g, "-")                         // ยุบขีดกลางซ้ำ
    .replace(/^-+|-+$/g, "");                    // ตัดหัวท้ายที่เป็นขีดกลาง
}

// ฟังก์ชันแปลงลิงก์ Google Drive ให้เป็นลิงก์ตรงรูปภาพ
function convertDriveLink(url) {
  if (!url) return "";
  const trimmedUrl = url.trim();
  if (trimmedUrl.includes("drive.google.com")) {
    let id = "";
    const dMatch = trimmedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      id = dMatch[1];
    } else {
      const idMatch = trimmedUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        id = idMatch[1];
      }
    }
    if (id) return `https://lh3.googleusercontent.com/d/${id}=w1200`;
  }
  return trimmedUrl;
}

// ฟังก์ชันแปลง CSV
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push("");
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  return lines;
}

// ฟังก์ชันดึงรูปจาก Google Drive Folder (แบบย่อสั้น)
async function fetchFolderFirstImage(folderId) {
  if (!APPS_SCRIPT_API_URL || APPS_SCRIPT_API_URL.trim() === "") return "";
  try {
    const res = await fetchUrl(`${APPS_SCRIPT_API_URL}?id=${folderId}`);
    const data = JSON.parse(res);
    if (data.status === "success" && data.files && data.files.length > 0) {
      return `https://lh3.googleusercontent.com/d/${data.files[0].id}=w1200`;
    }
  } catch (e) {
    console.error(`Error fetching folder first image for ${folderId}:`, e.message);
  }
  return "";
}

async function run() {
  console.log("======================================================");
  console.log("   ระบบสร้างหน้ารองรับการแชร์รูปภาพสินค้า (Pre-render Shares)");
  console.log("======================================================");
  
  try {
    console.log("1. กำลังโหลดข้อมูลสินค้าล่าสุดจาก Google Sheets...");
    const csvText = await fetchUrl(GOOGLE_SHEET_CSV_URL);
    const csvLines = parseCSV(csvText);
    
    if (csvLines.length < 2) {
      console.error("❌ ไม่พบข้อมูลสินค้าใน CSV");
      return;
    }

    const headers = csvLines[0].map(h => h.trim().toLowerCase());
    const getHeaderIndex = (aliases) => {
      const exactIdx = headers.findIndex(h => aliases.some(alias => h === alias));
      if (exactIdx !== -1) return exactIdx;
      return headers.findIndex(h => aliases.some(alias => h.includes(alias)));
    };

    const idxId = getHeaderIndex(["id", "ไอดี"]);
    const idxTitle = getHeaderIndex(["title", "ชื่อสินค้า", "ชื่อ"]);
    const idxDescription = getHeaderIndex(["description", "รายละเอียดสินค้า", "รายละเอียดเพิ่มเติม", "รายละเอียด", "ข้อมูลสินค้า"]);
    const idxImage = getHeaderIndex(["image", "รูปหลัก", "รูปภาพ"]);
    const idxCategory = getHeaderIndex(["category", "หมวดหมู่", "ประเภท"]);
    const idxCondition = getHeaderIndex(["condition", "สภาพสินค้าภายนอก", "สภาพ"]);
    const idxUsage = getHeaderIndex(["usage", "การใช้งาน"]);
    const idxWarranty = getHeaderIndex(["warranty", "ประกัน"]);
    const idxAccessories = getHeaderIndex(["accessories", "อุปกรณ์ที่จะได้รับ", "อุปกรณ์"]);

    const categoryCovers = new Map();

    if (idxTitle === -1 || idxImage === -1) {
      console.error("❌ หัวข้อคอลัมน์ใน Google Sheets ไม่ถูกต้อง (ต้องมี ชื่อสินค้า และ รูปหลัก)");
      return;
    }

    // ล้างโฟลเดอร์ p เดิมหากมีอยู่เพื่ออัปเดตข้อมูลใหม่
    const pDir = path.join(__dirname, 'p');
    if (fs.existsSync(pDir)) {
      console.log("2. กำลังเคลียร์หน้าแชร์เก่า...");
      fs.rmSync(pDir, { recursive: true, force: true });
    }
    fs.mkdirSync(pDir);

    console.log("3. กำลังเริ่มสร้างหน้าแชร์สำหรับสินค้าแต่ละชิ้น...");
    let successCount = 0;

    for (let i = 1; i < csvLines.length; i++) {
      const row = csvLines[i];
      if (row.length < headers.length || !row[idxTitle]) continue;

      const rawId = idxId !== -1 && row[idxId] ? row[idxId].trim() : String(i);
      const id = parseInt(rawId.replace(/[^0-9]/g, "")) || i;
      const title = row[idxTitle].trim();
      
      const condition = idxCondition !== -1 && row[idxCondition] ? row[idxCondition].trim() : "";
      const usage = idxUsage !== -1 && row[idxUsage] ? row[idxUsage].trim() : "";
      const warranty = idxWarranty !== -1 && row[idxWarranty] ? row[idxWarranty].trim() : "";
      const accessories = idxAccessories !== -1 && row[idxAccessories] ? row[idxAccessories].trim() : "";
      const rawDesc = idxDescription !== -1 && row[idxDescription] ? row[idxDescription].trim() : "";

      // สร้างคำอธิบาย Meta Description แบบละเอียดเพื่อให้บอตแชร์ดึงรายละเอียดไปโชว์ใน Card พรีวิว
      let metaDescParts = [];
      if (condition && condition !== "-") metaDescParts.push(`สภาพ: ${condition}`);
      if (usage && usage !== "-") metaDescParts.push(`การใช้งาน: ${usage}`);
      if (warranty && warranty !== "-") metaDescParts.push(`ประกัน: ${warranty}`);
      if (accessories && accessories !== "-") metaDescParts.push(`อุปกรณ์: ${accessories}`);
      
      let description = metaDescParts.join(" | ");
      if (!description) {
        description = rawDesc && rawDesc !== "-" ? rawDesc : "สินค้ามือสองสภาพดี คัดสรรพิเศษ";
      } else if (rawDesc && rawDesc !== "-") {
        description = `${description} | ${rawDesc}`;
      }
      
      const rawImage = row[idxImage].trim();

      // เก็บรูปภาพแรกสุดที่เจอของหมวดหมู่นี้เพื่อนำไปดาวน์โหลดรูปหน้าปกหมวดหมู่แบบ Static
      const category = idxCategory !== -1 && row[idxCategory] ? row[idxCategory].trim() : "";
      if (category && rawImage && !rawImage.startsWith("data:")) {
        const keyCategory = category.toLowerCase();
        if (!categoryCovers.has(keyCategory)) {
          categoryCovers.set(keyCategory, { name: category, rawImage: rawImage });
        }
      }

      let imageLink = convertDriveLink(rawImage);

      // จัดการหากเป็นโฟลเดอร์ Google Drive
      if (rawImage.includes("drive.google.com/drive/folders/")) {
        const folderId = rawImage.match(/\/folders\/([a-zA-Z0-9_-]+)/);
        if (folderId && folderId[1]) {
          console.log(`- กำลังดึงรูปจาก Google Drive Folder สำหรับสินค้า ID ${id}: ${title}`);
          const fetchedImg = await fetchFolderFirstImage(folderId[1]);
          if (fetchedImg) {
            imageLink = fetchedImg;
          }
        }
      }

      // หากยังไม่มีรูป ให้ใช้รูป Placeholder จาก Unsplash
      if (!imageLink || imageLink.startsWith("data:")) {
        imageLink = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop";
      }

      // สร้างโฟลเดอร์สำหรับสินค้า โดยใช้ชื่อสินค้าแปลงเป็น Slug (หากชื่อไม่มีตัวอักษรที่แปลงได้จะใช้ ID แทน)
      const slug = generateSlug(title) || String(id);
      const prodDir = path.join(pDir, slug);
      fs.mkdirSync(prodDir, { recursive: true });

      // โค้ด HTML สำหรับทำหน้า Redirect และใส่ Meta OG Tags
      const htmlContent = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>${title} - CK Secondhand</title>
  <meta name="description" content="${description.substring(0, 150)}...">
  
  <!-- Open Graph / Facebook Share Preview -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description.substring(0, 150)}...">
  <meta property="og:image" content="${imageLink}">
  <meta property="og:url" content="../../p/${slug}/">
  <meta property="og:site_name" content="CK SECONDHAND">
  
  <!-- Redirect ไปยังหน้าแรกพร้อม Hash ID ของสินค้า -->
  <script>
    const base = window.location.href.split('/p/')[0];
    window.location.replace(base + '/#product-${id}');
  </script>
  <meta http-equiv="refresh" content="0;url=../../#product-${id}">
</head>
<body>
  กำลังนำคุณไปยังสินค้า ${title}...
</body>
</html>`;

      fs.writeFileSync(path.join(prodDir, 'index.html'), htmlContent);
      successCount++;
    }

    // === ส่วนของการดาวน์โหลดรูปหน้าปกหมวดหมู่มาเก็บในโฟลเดอร์แบบ Static ===
    console.log("\n4. กำลังดาวน์โหลดรูปหน้าปกหมวดหมู่มาเก็บในโฟลเดอร์แบบ Static...");
    const categoriesDir = path.join(__dirname, 'categories');
    if (!fs.existsSync(categoriesDir)) {
      fs.mkdirSync(categoriesDir, { recursive: true });
    }

    for (const [keyCategory, data] of categoryCovers.entries()) {
      let imageLink = convertDriveLink(data.rawImage);

      // จัดการหากเป็นโฟลเดอร์ Google Drive
      if (data.rawImage.includes("drive.google.com/drive/folders/")) {
        const folderId = data.rawImage.match(/\/folders\/([a-zA-Z0-9_-]+)/);
        if (folderId && folderId[1]) {
          console.log(`- กำลังดึงข้อมูลรูปภาพจากโฟลเดอร์หมวดหมู่ "${data.name}"...`);
          const fetchedImg = await fetchFolderFirstImage(folderId[1]);
          if (fetchedImg) {
            imageLink = fetchedImg;
          }
        }
      }

      if (imageLink && imageLink.startsWith("http")) {
        console.log(`- กำลังดาวน์โหลดรูปหน้าปกหมวดหมู่ "${data.name}"...`);
        const destFile = path.join(categoriesDir, `${keyCategory}.jpg`);
        try {
          await downloadImage(imageLink, destFile);
          console.log(`  ✅ บันทึกสำเร็จ: categories/${keyCategory}.jpg`);
        } catch (err) {
          console.error(`  ❌ ไม่สามารถดาวน์โหลดหน้าปกหมวดหมู่ "${data.name}":`, err.message);
        }
      } else {
        console.log(`- หมวดหมู่ "${data.name}" ไม่มีรูปภาพที่เหมาะสมสำหรับหน้าปก`);
      }
    }

    console.log("\n------------------------------------------------------");
    console.log(`🎉 สร้างหน้าแชร์สำเร็จทั้งหมด ${successCount} รายการ!`);
    console.log("สามารถนำโฟลเดอร์ 'p' และ 'categories' อัปโหลดขึ้นโฮสติ้งพร้อมตัวเว็บเพื่อใช้งานได้ทันที");
  } catch (error) {
    console.error("❌ เกิดข้อผิดพลาด:", error.message);
  }
}

run();
