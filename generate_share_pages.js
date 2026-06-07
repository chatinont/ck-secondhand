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
    if (id) return `https://lh3.googleusercontent.com/d/${id}`;
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
      return `https://lh3.googleusercontent.com/d/${data.files[0].id}`;
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
      
      let description = idxDescription !== -1 && row[idxDescription] ? row[idxDescription].trim() : "สินค้ามือสองสภาพดี คัดสรรพิเศษ";
      if (description === "-" || description === "") description = "สินค้ามือสองสภาพดี คัดสรรพิเศษ";
      
      const rawImage = row[idxImage].trim();
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

      // สร้างโฟลเดอร์สำหรับสินค้า ID นั้นๆ
      const prodDir = path.join(pDir, String(id));
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
  <meta property="og:url" content="../../p/${id}/">
  <meta property="og:site_name" content="CK SECONDHAND">
  
  <!-- Redirect ไปยังหน้าแรกพร้อม Hash ID ของสินค้า -->
  <script>
    window.location.replace("../../#product-${id}");
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

    console.log("------------------------------------------------------");
    console.log(`🎉 สร้างหน้าแชร์สำเร็จทั้งหมด ${successCount} รายการ!`);
    console.log("สามารถนำโฟลเดอร์ 'p' อัปโหลดขึ้นโฮสติ้งพร้อมตัวเว็บเพื่อใช้งานได้ทันที");
  } catch (error) {
    console.error("❌ เกิดข้อผิดพลาด:", error.message);
  }
}

run();
