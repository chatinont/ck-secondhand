// --- รายการข้อมูลสินค้ามือสอง (Mock Database) ---
const mockProducts = [
  {
    id: 1,
    title: "Vintage Canon AE-1 Film Camera",
    category: "photography",
    price: 7900,
    condition: "9.5/10 (บอดี้แทบไม่มีรอยขีดข่วน หนังเดิมไม่บวม ช่องมองสะอาดมาก)",
    usage: "ทำงานเต็มระบบ วัดแสงตรง สปีดชัตเตอร์ปกติ เลนส์ใส ไร้รา ไร้ฝ้า",
    warranty: "ประกันร้านให้ 30 วันนับจากวันที่ได้รับ",
    accessories: "ตัวกล้อง Canon AE-1, เลนส์ FD 50mm f/1.4, ฝาปิดเลนส์แท้, สายคล้องหนังแท้",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available", // available, reserved, sold
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจกล้องฟิล์ม Canon AE-1 ครับ"
  },
  {
    id: 2,
    title: "Worn Leather Motorcycle Jacket",
    category: "apparel",
    price: 5800,
    condition: "9.0/10 (หนังวัวแท้หนานุ่มสีน้ำตาลเข้ม มีรอยเฟดตามการใช้งานธรรมชาติ)",
    usage: "ซิป YKK รูดลื่นปกติทุกจุด ซับในสะอาด ไม่มีรอยขาดหรือกลิ่นอับ",
    warranty: "ไม่มีประกัน (สินค้าแฟชั่นมือสอง)",
    accessories: "เสื้อแจ็คเก็ตหนังวินเทจ (ไซส์ L อก 42 นิ้ว)",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5ded1?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจแจ็คเก็ตหนังลายวินเทจครับ"
  },
  {
    id: 3,
    title: "A Stylish Classic Trench Coat",
    category: "apparel",
    price: 3900,
    condition: "9.8/10 (สภาพเสมือนมือหนึ่ง ไม่มีรอยตำหนิหรือคราบเปื้อน)",
    usage: "กระดุมครบทุกเม็ด สายรัดข้อมือใช้งานได้ปกติ ผ้าหนากันลมได้ดีมาก",
    warranty: "ไม่มีประกัน (สินค้าแฟชั่นมือสอง)",
    accessories: "เสื้อโค้ท Trench Coat (ไซส์ M) พร้อมเข็มขัดรัดเอวตรงรุ่น",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจเสื้อโค้ท Trench Coat ครับ"
  },
  {
    id: 4,
    title: "Apple Extended Keyboard M0115",
    category: "tech",
    price: 4900,
    condition: "8.5/10 (บอดี้ไม่เหลืองมาก คีย์สลักอักษรคมชัดปกติ มีริ้วรอยตามอายุ)",
    usage: "แปลงพอร์ตเป็น USB-C แล้ว สวิตช์ Alps Orange สัมผัสพิมพ์ Tactile นุ่มนวลปกติ",
    warranty: "ประกันความเสียหายในการจัดส่งและการใช้งานเบื้องต้น 7 วัน",
    accessories: "คีย์บอร์ด M0115, สายเชื่อมต่อ USB-C to USB-A ถักสีเทา",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop"
    ],
    status: "reserved",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจ Apple Extended Keyboard ที่จองไว้ครับ"
  },
  {
    id: 5,
    title: "Retro Wool Sweater",
    category: "apparel",
    price: 2200,
    condition: "9.2/10 (ผ้าถักไหมพรมขนแกะหนานุ่ม ไม่มีจุดขาดหรือเป็นขุยหนัก)",
    usage: "ให้ความอบอุ่นดีมาก เหมาะกับสวมใส่เที่ยวต่างประเทศหรือที่เย็น",
    warranty: "ไม่มีประกัน (สินค้าเสื้อผ้ามือสอง)",
    accessories: "เสื้อกันหนาวสเวตเตอร์ขนแกะวินเทจ (ไซส์ M)",
    image: "https://images.unsplash.com/photo-1574164904299-3a102b110380?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574164904299-3a102b110380?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจเสื้อกันหนาวไหมพรมขนแกะครับ"
  },
  {
    id: 6,
    title: "Mid-century Brass Desk Lamp",
    category: "home",
    price: 3200,
    condition: "9.6/10 (โคมทองเหลืองแท้ขัดเงาสวยงาม มีคราบออกไซด์บางๆ ตามวัย)",
    usage: "ขั้วไฟและสายเปลี่ยนใหม่แล้วปลอดภัย สวิตช์เปิดปิดปกติ ขั้ว E27",
    warranty: "ประกันระบบไฟฟ้าการใช้งานให้ 15 วัน",
    accessories: "โคมไฟตั้งโต๊ะทองเหลือง (ไม่รวมหลอดไฟ)",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจโคมไฟทองเหลืองตั้งโต๊ะครับ"
  },
  {
    id: 7,
    title: "Worn Raw Denim Jeans",
    category: "apparel",
    price: 1800,
    condition: "8.8/10 (ยีนส์ผ้าดิบริมแดง 15oz ปั้นเฟดสวยธรรมชาติ ไม่เคยตัดขาหรือแก้ทรง)",
    usage: "กระดุมและหมุดย้ำอยู่ครบถ้วน เนื้อผ้าหนาแข็งแรงทนทาน ซักน้ำไป 1 ครั้ง",
    warranty: "ไม่มีประกัน (สินค้าแฟชั่นมือสอง)",
    accessories: "กางเกงยีนส์ดิบริมแดง (เอวจริง 32 นิ้ว ยาว 30 นิ้ว)",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop"
    ],
    status: "sold",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจกางเกงยีนส์ริมแดงที่ขายแล้ว (เพื่อสอบถามรุ่นใกล้เคียง) ครับ"
  },
  {
    id: 8,
    title: "Collection of Classic Vinyl Records",
    category: "music",
    price: 1200,
    condition: "9.0/10 (แผ่นเสียงแจ๊สคลาสสิก ปลอกกระดาษมีรอยเก่าตามกาลเวลา ไวนิลไม่มีรอยลึก)",
    usage: "เล่นผ่านปกติทุกเพลง ไม่มีสะดุดตกร่อง ให้เสียงอบอุ่นสไตล์อนาล็อก",
    warranty: "ประกันการเล่นตกร่องภายใน 7 วัน (เปลี่ยนแผ่นหรือคืนเงิน)",
    accessories: "แผ่นเสียงไวนิล พร้อมปลอกใส่กระดาษดั้งเดิม",
    image: "https://images.unsplash.com/photo-1539625318637-3dd3a3cf6206?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539625318637-3dd3a3cf6206?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=600&auto=format&fit=crop"
    ],
    status: "available",
    contactLink: "https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจชุดแผ่นเสียงคลาสสิกครับ"
  }
];

// ใส่ Link CSV ของ Google Sheet ที่เผยแพร่แล้ว (Publish to the Web) ที่นี่
// วิธีทำ: ไปที่ Google Sheet > ไฟล์ (File) > แชร์ (Share) > เผยแพร่ทางเว็บ (Publish to web) > เลือกตารางแรกเป็น CSV > กด เผยแพร่ แล้วคัดลอกลิงก์มาใส่
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKyrr-YJXIiqLIpH4bwTFidXj56h96ZMQDcZZA6zvhwxHh1NigwcqUqvdWszS8EJ5ENP4dgygLQq/pub?gid=0&single=true&output=csv";

// ใส่ URL ของ Google Apps Script Web App ที่พัฒนาสำหรับอ่านโฟลเดอร์ Google Drive
const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbwaM_b-3BVxcM2PfFpTbRH-CdYHbxffmXEm_n5FNfd3qlV5wJAtDkpmh1EKCNNzDZYqLA/exec";

// ใส่ Facebook Page Username สำหรับลิงก์ Messenger (m.me/username)
const FACEBOOK_PAGE_USERNAME = "ck2hand";

// กำหนดรูปภาพหน้าปกหมวดหมู่แบบกำหนดเอง (ถ้าต้องการฟิกซ์รูปถาวร สามารถใส่ลิงก์รูปตรงที่นี่ได้ เช่น "https://example.com/image.jpg")
// หากเว้นว่างไว้เป็น "" ระบบจะดึงรูปสินค้าจริงชิ้นแรกสุดของหมวดหมู่นั้นๆ มาแสดงผลอัตโนมัติ
const CUSTOM_CATEGORY_IMAGES = {
  "งานพิมพ์": "",
  "ของใช้ในบ้าน": "",
  "เครื่องดนตรี": "",
  "สัตว์เลี้ยง": ""
};

// --- คีย์ในการจัดเก็บ Cache สำหรับ LocalStorage ---
const PRODUCTS_CACHE_KEY = "ck_products_data_cache";
const PRODUCTS_CACHE_TIME_KEY = "ck_products_data_cache_time";

let products = [];
let foldersToUpdateInBackground = [];

// ฟังก์ชันช่วยปิด Preloader
function dismissPreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
}

// ฟังก์ชันปิดหน้าต่างเลือกหมวดหมู่ตอนเริ่มต้น
function dismissLandingScreen(animate = true) {
  const screen = document.getElementById("landing-category-screen");
  if (!screen) return;
  if (animate) {
    screen.classList.add("fade-out");
    setTimeout(() => {
      screen.style.display = "none";
    }, 600);
  } else {
    screen.style.display = "none";
    screen.classList.add("fade-out");
  }
}

// ฟังก์ชันเปิดหน้าต่างเลือกหมวดหมู่
function showLandingScreen() {
  const screen = document.getElementById("landing-category-screen");
  if (!screen) return;
  screen.style.display = "flex";
  void screen.offsetHeight; // Force reflow
  screen.classList.remove("fade-out");
}

// ฟังก์ชันสร้างหน้าหมวดหมู่ที่หน้าแรกแบบไดนามิก
function renderLandingCategories() {
  const grid = document.getElementById("landing-categories-grid");
  if (!grid) return;

  const uniqueCategories = [];
  const seenCategories = new Set();

  products.forEach(product => {
    if (product.category && product.category.trim() !== "") {
      const displayCategory = product.category.trim();
      const keyCategory = displayCategory.toLowerCase();

      if (!seenCategories.has(keyCategory)) {
        seenCategories.add(keyCategory);

        // แผนที่ภาพหน้าปกพรีเมียมสำหรับการรอโหลดภาพจริงหรือใช้ทดแทน
        const premiumPlaceholders = {
          "งานพิมพ์": "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=600&auto=format&fit=crop", // high-end office/printer
          "ของใช้ในบ้าน": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", // luxury minimal room
          "เครื่องดนตรี": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop", // aesthetic instruments
          "สัตว์เลี้ยง": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop", // clean pet photography
          "photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
          "apparel": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
          "tech": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop",
          "home": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
          "music": "https://images.unsplash.com/photo-1539625318637-3dd3a3cf6206?q=80&w=600&auto=format&fit=crop"
        };

        // ตรวจสอบว่ามีการกำหนดรูปภาพหน้าปกแบบแมนนวลใน CUSTOM_CATEGORY_IMAGES หรือไม่
        const customImg = CUSTOM_CATEGORY_IMAGES[displayCategory] || CUSTOM_CATEGORY_IMAGES[keyCategory];
        let bgImg = "";

        if (customImg && customImg.trim() !== "") {
          bgImg = customImg.trim();
        } else {
          // ดึงรูปภาพแรกสุดของสินค้านั้นๆ มาเป็นพื้นหลังการ์ด (หากรูปยังเป็น placeholder จะใช้ภาพสต็อกหรูหราเป็นตัวรอโหลด)
          const firstProdWithImg = products.find(p => p.category && p.category.toLowerCase() === keyCategory && p.image && !p.image.startsWith("data:"));
          bgImg = firstProdWithImg ? firstProdWithImg.image : (premiumPlaceholders[keyCategory] || "linear-gradient(135deg, #EDEBE6 0%, #C5A880 100%)");
        }

        uniqueCategories.push({
          key: keyCategory,
          name: displayCategory,
          bgImage: bgImg
        });
      }
    }
  });

  grid.innerHTML = "";

  uniqueCategories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "landing-card";
    
    // พยายามโหลดรูปหน้าปกแบบ Local จากโฟลเดอร์ categories ก่อน (เช่น categories/เครื่องดนตรี.jpg)
    // หากยังไม่เคยดาวน์โหลดลงเครื่อง/โฮสต์ ให้ใช้ค่าดั้งเดิมจาก Google Drive/Unsplash/Gradient เป็นตัวสำรอง (Fallback)
    const localCoverUrl = `categories/${encodeURIComponent(cat.key)}.jpg`;
    let bgStyle = "";
    if (cat.bgImage.startsWith("http")) {
      bgStyle = `background-image: url('${localCoverUrl}'), url('${cat.bgImage}');`;
    } else {
      bgStyle = `background-image: url('${localCoverUrl}'), ${cat.bgImage};`;
    }

    card.innerHTML = `
      <div class="landing-card-bg" style="${bgStyle}"></div>
      <div class="landing-card-overlay">
        <div class="landing-card-label">${cat.name}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      dismissLandingScreen(true);
      activeCategory = cat.key;

      // อัปเดตสถานะ Active ของปุ่มฟิลเตอร์ในหน้า Shop
      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(btn => {
        if (btn.getAttribute("data-category") === cat.key) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      renderProducts();

      // เลื่อนหน้าไปที่ Shop
      const shopSection = document.getElementById("shop");
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    grid.appendChild(card);
  });
}

// ฟังก์ชันบันทึกข้อมูลสินค้าลง Cache
function saveProductsToCache(data) {
  try {
    localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(PRODUCTS_CACHE_TIME_KEY, Date.now().toString());
  } catch (e) {
    console.error("Failed to save products cache to localStorage:", e);
  }
}

let totalLoadSteps = 0;
let currentLoadStep = 0;

// อัปเดตตัวเลขเปอร์เซ็นต์ใน Preloader text
function updateLoadProgress() {
  if (totalLoadSteps === 0) return;
  currentLoadStep++;
  const pct = Math.min(100, Math.round((currentLoadStep / totalLoadSteps) * 100));
  const el = document.querySelector(".preloader-text");
  if (el) {
    el.textContent = `กำลังโหลดสินค้า... ${pct}%`;
  }
}

// ตัวแปรเก็บ SVG Placeholder เมื่อรูปอยู่ระหว่างโหลด หรือเมื่อโหลดรูปไม่สำเร็จ
const IMAGE_LOADING_PLACEHOLDER = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRUNFQUU0Ii8+PHBhdGggZD0iTTE3MCAxMjVoMTJsMy01aDMwbDMgNWgxMmMyLjggMCA1IDIuMiA1IDV2MzVjMCAyLjgtMi4yIDUtNSA1aC02MGMtMi44IDAtNS0yLjItNS01di0zNWMwLTIuOCAyLjItNSA1LTV6IiBzdHJva2U9IiNDNUE4ODAiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTQ4IiByPSIxNCIgc3Ryb2tlPSIjQzVBODgwIiBzdHJva2Utd2lkdGg9IjIuNSIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIyNCIgY3k9IjEzMyIgcj0iMiIgZmlsbD0iI0M1QTg4MCIvPjx0ZXh0IHg9IjUwJSIgeT0iMjA1IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJvbXB0Jywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZCNjk2NCIgZm9udC13ZWlnaHQ9IjUwMCI+4LiB4Liz4Lil4Lix4LiH4LmC4Lir4Lil4LiU4Lij4Li54Lib4Lig4Liy4LieLi4uPC90ZXh0Pjwvc3ZnPg==`;

const IMAGE_FAILED_PLACEHOLDER = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRUNFQUU0Ii8+PHBhdGggZD0iTTE3MCAxMjVoMTJsMy01aDMwbDMgNWgxMmMyLjggMCA1IDIuMiA1IDV2MzVjMCAyLjgtMi4yIDUtNSA1aC02MGMtMi44IDAtNS0yLjItNS01di0zNWMwLTIuOCAyLjItNSA1LTV6IiBzdHJva2U9IiNBMTlGOUEiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTQ4IiByPSIxNCIgc3Ryb2tlPSIjQTE5RjlBIiBzdHJva2Utd2lkdGg9IjIuNSIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIyNCIgY3k9IjEzMyIgcj0iMiIgZmlsbD0iI0ExOUY5QSIvPjxsaW5lIHgxPSIxODUiIHkxPSIxMzMiIHgyPSIyMTUiIHkyPSIxNjMiIHN0cm9rZT0iI0ExOUY5QSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48dGV4dCB4PSI1MCUiIHk9IjIwNSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1Byb21wdCcsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjY5NjQiIGZvbnQtd2VpZ2h0PSI1MDAiPuC5hOC4oeC5iOC4nuC4muC4o+C4ueC4m+C4oOC4suC4niAo4LmC4Lir4Lil4LiU4LmE4Lih4LmI4Liq4Liz4LmA4Lij4LmH4LiIKTwvdGV4dD48L3N2Zz4=`;

// ดึงข้อมูลรูปภาพจาก LocalStorage Cache (ถ้ามี)
function getCachedFolderImages(folderId) {
  const cacheKey = `gdrive_folder_${folderId}`;
  const cacheTimeKey = `${cacheKey}_time`;
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTime = localStorage.getItem(cacheTimeKey);

  if (cachedData && cachedTime) {
    try {
      const images = JSON.parse(cachedData);
      const age = Date.now() - parseInt(cachedTime);
      const isExpired = age >= 10 * 60 * 1000; // หมดอายุถ้าเกิน 10 นาที
      return { images, isExpired };
    } catch (e) {
      console.error("Error parsing cached images:", e);
    }
  }
  return null;
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

// ฟังก์ชันแปลงลิงก์โฟลเดอร์ Google Drive เพื่อหา Folder ID
function getDriveFolderId(url) {
  if (!url) return null;
  const trimmed = url.trim();
  const match = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

// ฟังก์ชัน fetch แบบกำหนดเวลาหมดเขต (Fetch with Timeout) เพื่อกันเว็บค้างกรณี API ช้า
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 3000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// ฟังก์ชันดึงรายการรูปภาพในโฟลเดอร์ Google Drive ผ่าน Web App API พร้อมระบบ Cache ในตัวเครื่องป้องกันการโดนบล็อก
async function fetchFolderImages(folderId) {
  if (!APPS_SCRIPT_API_URL || APPS_SCRIPT_API_URL.trim() === "") return [];

  const cacheKey = `gdrive_folder_${folderId}`;
  const cacheTimeKey = `${cacheKey}_time`;
  const cacheDuration = 10 * 60 * 1000; // Cache ไว้ 10 นาที เพื่อหลีกเลี่ยงการถูกจำกัดอัตราส่งข้อมูล (Rate Limit) ของ Google

  // ตรวจสอบข้อมูล Cache ในเครื่องผู้ใช้
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTime = localStorage.getItem(cacheTimeKey);

  if (cachedData && cachedTime) {
    const age = Date.now() - parseInt(cachedTime);
    if (age < cacheDuration) {
      try {
        console.log(`Using cached images for Google Drive folder: ${folderId}`);
        return JSON.parse(cachedData);
      } catch (e) {
        console.error("Error parsing cached images:", e);
      }
    }
  }

  try {
    // กำหนดเวลาหมดเขต 4 วินาทีเพื่อให้เวลาทำแอปสคริปต์ทำงานได้เสถียรขึ้น
    const response = await fetchWithTimeout(`${APPS_SCRIPT_API_URL}?id=${folderId}`, { timeout: 4000 });
    const data = await response.json();
    if (data.status === "success" && data.files) {
      // แปลงไฟล์ภาพทั้งหมดในโฟลเดอร์ให้เป็น direct link
      const folderImages = data.files.map(file => `https://lh3.googleusercontent.com/d/${file.id}`);

      // บันทึก Cache ลงเครื่อง
      localStorage.setItem(cacheKey, JSON.stringify(folderImages));
      localStorage.setItem(cacheTimeKey, Date.now().toString());

      return folderImages;
    }
  } catch (e) {
    console.error("Error fetching folder images:", e);
    // หากดึงข้อมูลล้มเหลว (เช่น Timeout) แต่มี Cache เก่าอยู่ ให้ใช้ของเดิมแก้ขัดไปก่อนเพื่อป้องกันรูปไม่ขึ้น
    if (cachedData) {
      console.warn(`Fetch failed. Falling back to expired cache for folder: ${folderId}`);
      try {
        return JSON.parse(cachedData);
      } catch (err) { }
    }
  }
  return [];
}

// ฟังก์ชันแปลงลิงก์ Google Drive ให้เป็นลิงก์รูปภาพโดยตรง (Direct Image URL)
function convertDriveLink(url) {
  if (!url) return "";
  const trimmedUrl = url.trim();
  if (trimmedUrl.includes("drive.google.com")) {
    let id = "";
    // ดึง ID รูปภาพจากลิงก์ /d/[ID]/
    const dMatch = trimmedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      id = dMatch[1];
    } else {
      // ดึง ID รูปภาพจากลิงก์ ?id=[ID]
      const idMatch = trimmedUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        id = idMatch[1];
      }
    }
    if (id) {
      return `https://lh3.googleusercontent.com/d/${id}`;
    }
  }
  return trimmedUrl;
}

// ฟังก์ชันจัดรูปแบบวันหมดประกัน ให้แสดงเป็นเดือนแบบข้อความภาษาไทย
function formatWarrantyDate(text) {
  if (!text || text.trim() === "" || text.trim() === "-") return "-";

  const trimmed = text.trim();

  // ตรวจจับตัวแยกวันที่ / หรือ -
  const parts = trimmed.split(/[\/\-]/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    let year = parts[2] ? parseInt(parts[2]) : null;

    // ตรวจสอบเบื้องต้นว่าเป็นค่าตัวเลขวันและเดือนที่ถูกต้อง
    if (!isNaN(day) && !isNaN(month) && day >= 1 && day <= 31 && month >= 1 && month <= 12) {
      const thaiMonths = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ];

      const monthName = thaiMonths[month - 1];

      if (year) {
        // จัดการกรณีปี ค.ศ. สองหลัก เช่น 26 -> 2026
        if (year < 100) {
          year += 2000;
        }
        return `${day} ${monthName} ${year}`;
      }
      return `${day} ${monthName}`;
    }
  }

  return trimmed; // คืนค่าเดิมหากไม่ได้เป็นรูปแบบวันที่ตัวเลข
}

// ฟังก์ชันการแปลงไฟล์ CSV (CSV Parser) แบบรองรับเครื่องหมายอัญประกาศและลูกน้ำ
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
      if (c === '\r' && next === '\n') {
        i++;
      }
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

// ฟังก์ชันแผนที่แถว CSV เข้ากับฟิลด์ของระบบ (รองรับทั้งภาษาไทยและอังกฤษ)
function mapCSVRows(csvLines) {
  if (csvLines.length < 2) return [];
  const headers = csvLines[0].map(h => h.trim().toLowerCase());

  const getHeaderIndex = (aliases) => {
    // ลองหาแบบตรงกันทั้งหมด (Exact Match) ก่อนเพื่อป้องกันคอลัมน์ชนกัน (เช่น 'ราคา' ชนกับ 'ราคาเต็ม')
    const exactIdx = headers.findIndex(h => aliases.some(alias => h === alias));
    if (exactIdx !== -1) return exactIdx;

    // หากไม่พบแบบตรงตัว จึงจะหาแบบครอบคลุมบางส่วน (Loose Match)
    return headers.findIndex(h => aliases.some(alias => h.includes(alias)));
  };

  const idxId = getHeaderIndex(["id", "ไอดี"]);
  const idxTitle = getHeaderIndex(["title", "ชื่อสินค้า", "ชื่อ"]);
  const idxCategory = getHeaderIndex(["category", "หมวดหมู่", "ประเภท"]);
  const idxPrice = getHeaderIndex(["price", "ราคา"]);
  const idxOriginalPrice = getHeaderIndex(["original price", "originalprice", "ราคาเต็ม", "ราคาปกติ", "ราคาเดิม"]);
  const idxCondition = getHeaderIndex(["condition", "สภาพสินค้าภายนอก", "สภาพ"]);
  const idxUsage = getHeaderIndex(["usage", "การใช้งาน"]);
  const idxWarranty = getHeaderIndex(["warranty", "ประกัน"]);
  const idxAccessories = getHeaderIndex(["accessories", "อุปกรณ์ที่จะได้รับ", "อุปกรณ์"]);
  const idxDescription = getHeaderIndex(["description", "รายละเอียดสินค้า", "รายละเอียดเพิ่มเติม", "รายละเอียด", "ข้อมูลสินค้า"]);
  const idxStatus = getHeaderIndex(["status", "สถานะ"]);
  const idxImage = getHeaderIndex(["image", "รูปหลัก", "รูปภาพ"]);
  const idxImages = getHeaderIndex(["images", "รูปเพิ่มเติม", "รูปอื่นๆ"]);
  const idxContact = getHeaderIndex(["contact", "ลิงก์ติดต่อ", "line"]);

  const mappedProducts = [];

  for (let i = 1; i < csvLines.length; i++) {
    const row = csvLines[i];
    if (row.length < headers.length || !row[idxTitle]) continue;

    const id = idxId !== -1 && row[idxId] ? parseInt(row[idxId]) || i : i;
    const title = row[idxTitle].trim();
    const category = idxCategory !== -1 && row[idxCategory] ? row[idxCategory].trim() : "All";
    const price = idxPrice !== -1 && row[idxPrice] ? parseFloat(row[idxPrice].replace(/[^0-9.]/g, "")) || 0 : 0;
    const originalPrice = idxOriginalPrice !== -1 && row[idxOriginalPrice] ? parseFloat(row[idxOriginalPrice].replace(/[^0-9.]/g, "")) || 0 : 0;
    const condition = idxCondition !== -1 && row[idxCondition] ? row[idxCondition].trim() : "-";
    const usage = idxUsage !== -1 && row[idxUsage] ? row[idxUsage].trim() : "-";
    const warranty = idxWarranty !== -1 && row[idxWarranty] ? row[idxWarranty].trim() : "-";
    const accessories = idxAccessories !== -1 && row[idxAccessories] ? row[idxAccessories].trim() : "-";
    const description = idxDescription !== -1 && row[idxDescription] ? row[idxDescription].trim() : "-";
    const status = idxStatus !== -1 && row[idxStatus] ? row[idxStatus].trim().toLowerCase() : "available";
    const rawImage = idxImage !== -1 && row[idxImage] ? row[idxImage].trim() : "";
    const rawImages = idxImages !== -1 && row[idxImages] ? row[idxImages].trim() : "";
    const contactLink = idxContact !== -1 && row[idxContact] && row[idxContact].trim() !== ""
      ? row[idxContact].trim()
      : `https://line.me/R/ti/p/@ck_secondhand?text=สวัสดีครับ สนใจ ${encodeURIComponent(title)} ครับ`;

    let mainImage = convertDriveLink(rawImage);
    let galleryImages = [];
    if (rawImages) {
      galleryImages = rawImages.split(",").map(url => convertDriveLink(url)).filter(url => url !== "");
    }

    // ตรวจสอบว่ารูปหลักเป็นลิงก์โฟลเดอร์ Google Drive หรือไม่
    const folderId = getDriveFolderId(rawImage);
    if (folderId && APPS_SCRIPT_API_URL) {
      const cached = getCachedFolderImages(folderId);
      if (cached && cached.images.length > 0) {
        mainImage = cached.images[0];
        galleryImages = cached.images;
        if (cached.isExpired) {
          foldersToUpdateInBackground.push({ productId: id, folderId });
        }
      } else {
        mainImage = IMAGE_LOADING_PLACEHOLDER;
        galleryImages = [IMAGE_LOADING_PLACEHOLDER];
        foldersToUpdateInBackground.push({ productId: id, folderId });
      }
    } else {
      if (mainImage && !galleryImages.includes(mainImage)) {
        galleryImages.unshift(mainImage);
      }
    }

    mappedProducts.push({
      id,
      title,
      category,
      price,
      originalPrice,
      condition,
      usage,
      warranty,
      accessories,
      description,
      status,
      image: mainImage,
      images: galleryImages,
      contactLink
    });
  }

  return mappedProducts;
}

// ฟังก์ชันช่วยโหลดรูปภาพล่วงหน้าเข้า cache ของ Browser (Image Preloading)
function preloadImage(url) {
  return new Promise((resolve) => {
    if (!url || url.startsWith("data:")) {
      resolve();
      return;
    }
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

// ฟังก์ชันโหลดรูปสินค้าทั้งหมดล่วงหน้าในเบื้องหลัง
function preloadAllProductImages() {
  if (!products || !Array.isArray(products)) return;
  products.forEach(product => {
    if (product.image && !product.image.startsWith("data:")) {
      preloadImage(product.image);
    }
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(imgUrl => {
        if (imgUrl && !imgUrl.startsWith("data:")) {
          preloadImage(imgUrl);
        }
      });
    }
  });
}

// ฟังก์ชันโหลดข้อมูลสินค้าจาก Google Sheets (รองรับระบบ LocalStorage Caching & Background update)
async function loadProductsData() {
  foldersToUpdateInBackground = []; // เคลียร์คิวเดิมทุกครั้งที่โหลดข้อมูลใหม่
  
  // 1. ลองอ่านข้อมูลจาก Cache ก่อนเพื่อความรวดเร็วในการแสดงผล (Stale-While-Revalidate)
  const cachedDataStr = localStorage.getItem(PRODUCTS_CACHE_KEY);
  const cachedTimeStr = localStorage.getItem(PRODUCTS_CACHE_TIME_KEY);
  let hasCache = false;
  
  if (cachedDataStr && cachedTimeStr) {
    try {
      const cachedProducts = JSON.parse(cachedDataStr);
      if (Array.isArray(cachedProducts) && cachedProducts.length > 0) {
        products = cachedProducts;
        hasCache = true;
        console.log("Loaded products from local cache:", products.length, "items.");
        
        // Render UI จาก Cache ทันทีเพื่อให้ผู้ใช้ไม่ต้องรอ
        renderCategoryFilters();
        renderLandingCategories();
        renderProducts();
        handleHashRoute();
        
        preloadAllProductImages();
        dismissPreloader();
      }
    } catch (e) {
      console.error("Error parsing cached products:", e);
    }
  }

  // 2. หากไม่ได้ตั้งค่า URL ของ Google Sheet หรือเป็นค่าว่าง ให้โหลดจาก Mock Data
  if (!GOOGLE_SHEET_CSV_URL || GOOGLE_SHEET_CSV_URL.trim() === "") {
    console.log("Using Mock Database fallback: Google Sheets URL is not configured yet.");
    products = [...mockProducts].filter(p => p.status !== "hide" && p.status !== "hidden" && p.status !== "ซ่อน");
    saveProductsToCache(products);
    
    renderCategoryFilters();
    renderLandingCategories();
    renderProducts();
    handleHashRoute();
    
    preloadAllProductImages();
    dismissPreloader();
    return;
  }

  // 3. ทำการดึงข้อมูลสดใหม่จาก Google Sheets
  try {
    const response = await fetchWithTimeout(GOOGLE_SHEET_CSV_URL, { timeout: 4000 });
    if (!response.ok) throw new Error("Failed to fetch Google Sheet CSV");
    const csvText = await response.text();
    const csvLines = parseCSV(csvText);
    const parsedProducts = mapCSVRows(csvLines);

    if (parsedProducts.length > 0) {
      const freshProducts = parsedProducts.filter(p => p.status !== "hide" && p.status !== "hidden" && p.status !== "ซ่อน");
      console.log("Successfully fetched fresh products list from Google Sheets:", freshProducts.length, "items.");
      
      // เปรียบเทียบเพื่อเช็คว่าข้อมูลเปลี่ยนไปจากแคชหรือไม่
      const hasChanged = JSON.stringify(products) !== JSON.stringify(freshProducts);
      
      if (!hasCache || hasChanged) {
        products = freshProducts;
        renderCategoryFilters();
        renderLandingCategories();
        renderProducts();
        handleHashRoute();
        
        preloadAllProductImages();
        
        // หากผู้ใช้เปิดดูรายละเอียด Modal อยู่ ให้อัปเดตรายละเอียดสินค้าใน Modal ด้วย
        if (currentProduct) {
          const updatedProduct = products.find(p => p.id === currentProduct.id);
          if (updatedProduct) {
            openProductModal(updatedProduct, false);
          }
        }
      }
      
      // บันทึก Cache ใหม่ลงเครื่อง
      saveProductsToCache(freshProducts);
      
      // อัปเดตรูปจากโฟลเดอร์ Google Drive ในเบื้องหลัง (ไม่ต้อง await เพื่อไม่ให้บล็อกการแสดงผลหน้าแรก)
      if (foldersToUpdateInBackground.length > 0) {
        updateFolderImagesBackground([...foldersToUpdateInBackground]);
      }
    } else {
      throw new Error("No products parsed from CSV");
    }
  } catch (error) {
    console.error("Error fetching fresh products data:", error);
    
    // หากดึงข้อมูลล้มเหลวและยังไม่มี Cache อยู่เลย ให้ตกไปใช้ Mock Database แก้ขัด
    if (!hasCache) {
      console.log("No cache available. Falling back to mock database.");
      products = [...mockProducts].filter(p => p.status !== "hide" && p.status !== "hidden" && p.status !== "ซ่อน");
      renderCategoryFilters();
      renderLandingCategories();
      renderProducts();
      handleHashRoute();
      
      preloadAllProductImages();
    }
  } finally {
    dismissPreloader();
  }
}

// ฟังก์ชันอัปเดตรูปจากโฟลเดอร์ Google Drive ในเบื้องหลัง แบบ staggered (ดีเลย์ระหว่างคอล)
async function updateFolderImagesBackground(updates) {
  console.log(`Starting background update for ${updates.length} folders...`);

  for (let i = 0; i < updates.length; i++) {
    const { productId, folderId } = updates[i];

    // หน่วงเวลา 200ms ในรอบถัดๆ ไป เพื่อไม่ให้ Google Apps Script โดน Concurrent Rate Limit
    if (i > 0) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    try {
      // fetchFolderImages มีการจัดการ cache และหมดอายุ in ตัวอยู่แล้ว
      const folderImages = await fetchFolderImages(folderId);

      // ค้นหาสินค้าตัวนั้นๆ
      const product = products.find(p => p.id === productId);
      if (product) {
        if (folderImages.length > 0) {
          product.image = folderImages[0];
          product.images = folderImages;
          
          // โหลดรูปภาพทั้งหมดในโฟลเดอร์นี้ล่วงหน้าเข้า cache เบื้องหลัง
          folderImages.forEach(imgUrl => preloadImage(imgUrl));
        } else if (product.image === IMAGE_LOADING_PLACEHOLDER) {
          // หากไม่มีรูปเลย และของเดิมยังเป็นตัวโหลด ให้เปลี่ยนเป็นรูป "ไม่พบรูปภาพ"
          product.image = IMAGE_FAILED_PLACEHOLDER;
          product.images = [IMAGE_FAILED_PLACEHOLDER];
        }

        // ค้นหาการ์ดสินค้าใน DOM และอัปเดตรูปหลัก
        const cardImg = document.querySelector(`#product-card-${product.id} .product-img`);
        if (cardImg) {
          cardImg.src = product.image;
        }

        // หาก Modal รายละเอียดกำลังเปิดและแสดงสินค้าชิ้นนี้อยู่ ให้อัปเดต Gallery ด้วย
        if (currentProduct && currentProduct.id === product.id) {
          buildGallery();
        }

        // อัปเดตรูปพื้นหลังในหน้าหมวดหมู่ที่หน้าแรกให้เป็นรูปสินค้าจริง
        renderLandingCategories();
      }
    } catch (error) {
      console.error(`Error background updating folder ${folderId}:`, error);

      const product = products.find(p => p.id === productId);
      if (product && product.image === IMAGE_LOADING_PLACEHOLDER) {
        product.image = IMAGE_FAILED_PLACEHOLDER;
        product.images = [IMAGE_FAILED_PLACEHOLDER];

        const cardImg = document.querySelector(`#product-card-${product.id} .product-img`);
        if (cardImg) {
          cardImg.src = IMAGE_FAILED_PLACEHOLDER;
        }

        if (currentProduct && currentProduct.id === product.id) {
          buildGallery();
        }

        // อัปเดตหน้าหมวดหมู่ที่หน้าแรกแม้โหลดไม่สำเร็จ (เพื่อเคลียร์สถานะ placeholder)
        renderLandingCategories();
      }
    } finally {
      // อัปเดตตัวนับโปรเกรสสำหรับแอป
      updateLoadProgress();
    }
  }
}

// --- ตัวแปรจัดการสถานะ App State ---
let activeCategory = "all";
let searchQuery = "";
let currentProduct = null;
let currentImageIndex = 0;

// --- ดักจับ DOM Elements ---
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const itemsCountEl = document.getElementById("items-count");
const activeFiltersInfo = document.getElementById("active-filters-info");

// Modal Elements
const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalProductImg = document.getElementById("modal-product-img");
const modalProductCategory = document.getElementById("modal-product-category");
const modalProductStatus = document.getElementById("modal-product-status");
const modalProductTitle = document.getElementById("modal-product-title");
const modalProductPrice = document.getElementById("modal-product-price");
const modalProductOriginalPrice = document.getElementById("modal-product-original-price");
const modalProductCondition = document.getElementById("modal-product-condition");
const modalProductUsage = document.getElementById("modal-product-usage");
const modalProductWarranty = document.getElementById("modal-product-warranty");
const modalProductAccessories = document.getElementById("modal-product-accessories");
const modalProductDescription = document.getElementById("modal-product-description");
const modalContactBuyBtn = document.getElementById("modal-contact-buy-btn");
const modalThumbnails = document.getElementById("modal-thumbnails");
const modalPrevBtn = document.getElementById("modal-prev-btn");
const modalNextBtn = document.getElementById("modal-next-btn");

// --- ฟังก์ชันการแสดงผลหมวดหมู่ฟิลเตอร์แบบไดนามิก (Render Category Filters) ---
function renderCategoryFilters() {
  const filterWrapper = document.getElementById("filter-wrapper");
  if (!filterWrapper) return;

  // หาหมวดหมู่ทั้งหมดที่ไม่ซ้ำกันจากรายการสินค้า (ลบค่าว่างออก และจัดรูปแบบ)
  const uniqueCategories = [];
  const seenCategories = new Set();

  products.forEach(product => {
    if (product.category && product.category.trim() !== "") {
      const displayCategory = product.category.trim();
      const keyCategory = displayCategory.toLowerCase();

      if (!seenCategories.has(keyCategory)) {
        seenCategories.add(keyCategory);
        uniqueCategories.push({
          key: keyCategory,
          name: displayCategory
        });
      }
    }
  });

  // สร้าง HTML สำหรับหมวดหมู่ "ทั้งหมด (All)" เป็นอันแรกสุด
  filterWrapper.innerHTML = `<button class="filter-btn ${activeCategory === "all" ? "active" : ""}" data-category="all">All</button>`;

  // สร้างปุ่มสำหรับหมวดหมู่อื่นๆ
  uniqueCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `filter-btn ${activeCategory === cat.key ? "active" : ""}`;
    btn.setAttribute("data-category", cat.key);
    btn.textContent = cat.name;

    filterWrapper.appendChild(btn);
  });

  // ผูก Event Listeners ให้กับปุ่มตัวกรองที่เพิ่งสร้างขึ้นใหม่
  const newFilterBtns = filterWrapper.querySelectorAll(".filter-btn");
  newFilterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      newFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });
}

// --- ฟังก์ชันการแสดงผลสินค้า (Render Products) ---
function renderProducts() {
  productsGrid.innerHTML = "";

  // กรองสินค้าตามหมวดหมู่และการค้นหา
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || (product.category && product.category.toLowerCase() === activeCategory);
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.condition && product.condition.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.usage && product.usage.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.accessories && product.accessories.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // แสดงผลจำนวนรายการสินค้า
  if (activeCategory !== "all" || searchQuery !== "") {
    activeFiltersInfo.style.display = "block";
    itemsCountEl.textContent = filteredProducts.length;
  } else {
    activeFiltersInfo.style.display = "none";
  }

  // หากไม่มีสินค้าที่พบ
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">ไม่พบสินค้าที่คุณกำลังค้นหา</p>
        <p style="font-size: 0.9rem; opacity: 0.7;">ลองเปลี่ยนคำค้นหาหรือหมวดหมู่ดูอีกครั้งนะครับ</p>
      </div>
    `;
    return;
  }

  // ลูปการสร้างการ์ดสินค้า
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = `product-card ${product.status === "sold" ? "sold-out" : ""}`;
    card.setAttribute("id", `product-card-${product.id}`);

    // สถานะ tag
    let statusText = "Available";
    if (product.status === "reserved") statusText = "Reserved";
    if (product.status === "sold") statusText = "Sold Out";

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="product-card-status status-${product.status}">${statusText}</span>
        <button class="card-share-btn" title="คัดลอกลิงก์เพื่อแชร์" aria-label="Share product">
          <svg class="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
          </svg>
        </button>
      </div>
      <div class="product-info-panel">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-meta-row">
          <div class="product-price-container">
            <span class="product-price">฿${product.price.toLocaleString()}</span>
            ${product.originalPrice && product.originalPrice > product.price
        ? `<span class="product-original-price">฿${product.originalPrice.toLocaleString()}</span>`
        : ''
      }
          </div>
          <button class="card-cta-btn" ${product.status === "sold" ? "disabled" : ""}>
            ${product.status === "sold" ? "Sold" : "View Details"}
          </button>
        </div>
      </div>
    `;

    // ดักจับปุ่มแชร์บนการ์ดสินค้า
    const cardShareBtn = card.querySelector(".card-share-btn");
    if (cardShareBtn) {
      cardShareBtn.addEventListener("click", async (e) => {
        e.stopPropagation(); // ป้องกันไม่ให้การกดปุ่มแชร์ไปทับซ้อนกับการคลิกการ์ดเพื่อเปิด Modal
        const slug = generateSlug(product.title) || String(product.id);
        const productUrl = `${window.location.origin}${window.location.pathname}p/${slug}/`;
        try {
          await navigator.clipboard.writeText(productUrl);
          showToast(`คัดลอกลิงก์ ${product.title} เรียบร้อยแล้ว!`);
        } catch (err) {
          console.error("Failed to copy link:", err);
        }
      });
    }

    // ดักจับการคลิกที่การ์ดเพื่อเปิดดู Modal รายละเอียดสินค้า
    card.addEventListener("click", (e) => {
      openProductModal(product);
    });

    productsGrid.appendChild(card);
  });
}

// --- ฟังก์ชันแสดงแจ้งเตือน (Toast Notification) ---
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    toast.innerHTML = `
      <svg class="toast-icon icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }
  toast.querySelector(".toast-message").textContent = message;
  // รีเซ็ตแอนิเมชันหากมีการกดซ้ำ
  toast.classList.remove("active");
  void toast.offsetWidth;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

// --- ฟังก์ชันดึงพารามิเตอร์ Hash ใน URL เพื่อควบคุมการเปิด Modal (Deep Linking / Hash Routing) ---
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith("#product-")) {
    const productIdStr = hash.replace("#product-", "");
    const productId = parseInt(productIdStr);
    if (!isNaN(productId)) {
      const product = products.find(p => p.id === productId);
      if (product) {
        openProductModal(product, false);
        dismissLandingScreen(false); // Bypass landing screen instantly
        return;
      }
    }
  }

  // ปิดหน้า Modal ถ้าไม่มีการคลิกเลือกสินค้าตาม hash
  if (currentProduct) {
    closeModal(false);
  }
}

// --- ฟังก์ชันการทำงานของ Modal ดูรายละเอียดสินค้า ---
function openProductModal(product, updateHash = true) {
  currentProduct = product;
  currentImageIndex = 0;

  modalProductCategory.textContent = product.category;
  modalProductTitle.textContent = product.title;
  modalProductPrice.textContent = `฿${product.price.toLocaleString()}`;

  if (product.originalPrice && product.originalPrice > product.price) {
    modalProductOriginalPrice.textContent = `฿${product.originalPrice.toLocaleString()}`;
    modalProductOriginalPrice.style.display = "inline";
  } else {
    modalProductOriginalPrice.style.display = "none";
  }

  modalProductCondition.textContent = product.condition || "-";
  modalProductUsage.textContent = product.usage || "-";
  modalProductWarranty.textContent = formatWarrantyDate(product.warranty || "-");
  modalProductAccessories.textContent = product.accessories || "-";
  modalProductDescription.textContent = product.description || "-";

  // ตั้งค่าสถานะ Badge ในหน้า Modal
  let statusText = "Available";
  modalProductStatus.className = `product-status-tag status-${product.status}`;
  if (product.status === "reserved") statusText = "Reserved";
  if (product.status === "sold") statusText = "Sold Out";
  modalProductStatus.textContent = statusText;

  // ตั้งค่าปุ่มติดต่อซื้อสินค้าไปยัง Facebook Messenger
  modalContactBuyBtn.href = `https://m.me/${FACEBOOK_PAGE_USERNAME}`;

  if (product.status === "sold") {
    modalContactBuyBtn.style.pointerEvents = "none";
    modalContactBuyBtn.style.opacity = "0.5";
    modalContactBuyBtn.querySelector("span").textContent = "ขายแล้ว (Sold Out)";
    modalContactBuyBtn.onclick = null;
  } else {
    modalContactBuyBtn.style.pointerEvents = "auto";
    modalContactBuyBtn.style.opacity = "1";
    modalContactBuyBtn.querySelector("span").textContent = "สนใจซื้อ / สอบถามเพิ่มเติม";

    modalContactBuyBtn.onclick = async (e) => {
      // คัดลอกรายละเอียดและลิงก์สินค้าลง Clipboard
      const productUrl = `${window.location.origin}${window.location.pathname}p/${product.id}/`;
      const textToCopy = `สวัสดีครับ สนใจสินค้าชิ้นนี้ครับ:\n${product.title}\nราคา: ฿${product.price.toLocaleString()}\nลิงก์สินค้า: ${productUrl}`;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast("คัดลอกข้อมูลสินค้าเรียบร้อย! สามารถวางส่งในแชทได้ทันที");
      } catch (err) {
        console.error("Failed to copy product details to clipboard:", err);
      }
    };
  }

  // สร้าง Product URL สำหรับใช้งานในปุ่มแชร์ โดยใช้ชื่อสินค้าเป็น Slug
  const slug = generateSlug(product.title) || String(product.id);
  const productUrl = `${window.location.origin}${window.location.pathname}p/${slug}/`;

  // จัดการปุ่มคัดลอกลิงก์
  const modalCopyLinkBtn = document.getElementById("modal-copy-link-btn");
  if (modalCopyLinkBtn) {
    modalCopyLinkBtn.onclick = async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(productUrl);
        showToast("คัดลอกลิงก์สินค้าเรียบร้อยแล้ว!");
      } catch (err) {
        console.error("Failed to copy link to clipboard:", err);
      }
    };
  }

  // จัดการปุ่มแชร์ลง Facebook
  const modalFacebookShareBtn = document.getElementById("modal-facebook-share-btn");
  if (modalFacebookShareBtn) {
    modalFacebookShareBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
  }

  // สร้างและจัดการแกลเลอรีรูปภาพ
  buildGallery();

  // แสดง Modal
  productModal.classList.add("active");
  document.body.style.overflow = "hidden"; // ปิดการเลื่อนหน้าเว็บพื้นหลัง

  if (updateHash) {
    window.location.hash = "product-" + product.id;
  }
}

function buildGallery() {
  const images = currentProduct.images && currentProduct.images.length > 0
    ? currentProduct.images
    : [currentProduct.image];

  modalThumbnails.innerHTML = "";

  if (images.length > 1) {
    // แสดงปุ่ม Prev / Next และ Thumbnails Row
    modalPrevBtn.style.display = "flex";
    modalNextBtn.style.display = "flex";
    modalThumbnails.style.display = "flex";

    // สร้างปุ่ม thumbnail
    images.forEach((imgUrl, idx) => {
      const thumb = document.createElement("img");
      thumb.className = "modal-thumb";
      thumb.src = imgUrl;
      thumb.alt = `${currentProduct.title} thumbnail ${idx + 1}`;
      if (idx === 0) thumb.classList.add("active");

      thumb.addEventListener("click", (e) => {
        e.stopPropagation();
        currentImageIndex = idx;
        updateGallery();
      });

      modalThumbnails.appendChild(thumb);
    });
  } else {
    // ซ่อนปุ่มและ thumbnails หากมีรูปเดียว
    modalPrevBtn.style.display = "none";
    modalNextBtn.style.display = "none";
    modalThumbnails.style.display = "none";
  }

  updateGallery();
}

function updateGallery() {
  const images = currentProduct.images && currentProduct.images.length > 0
    ? currentProduct.images
    : [currentProduct.image];

  modalProductImg.src = images[currentImageIndex];
  modalProductImg.alt = `${currentProduct.title} - Image ${currentImageIndex + 1}`;

  // ไฮไลต์ thumbnail ปัจจุบัน
  const thumbs = modalThumbnails.querySelectorAll(".modal-thumb");
  thumbs.forEach((thumb, idx) => {
    if (idx === currentImageIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function closeModal(clearHash = true) {
  productModal.classList.remove("active");
  document.body.style.overflow = "auto";
  currentProduct = null;
  if (clearHash && window.location.hash.startsWith("#product-")) {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }
}

// --- ฟังก์ชันผูก Event Listeners ต่างๆ ---
function setupEventListeners() {
  // การค้นหาสินค้า
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      searchClearBtn.style.display = "block";
    } else {
      searchClearBtn.style.display = "none";
    }
    renderProducts();
  });

  // ปุ่มล้างคำค้นหา
  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.style.display = "none";
    renderProducts();
  });

  // ปิด Modal รายละเอียดสินค้า
  modalCloseBtn.addEventListener("click", closeModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeModal();
  });

  // ปุ่มเปลี่ยนรูปภาพใน Gallery (ย้อนกลับ / ถัดไป)
  modalPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentProduct) return;
    const images = currentProduct.images && currentProduct.images.length > 0
      ? currentProduct.images
      : [currentProduct.image];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  modalNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentProduct) return;
    const images = currentProduct.images && currentProduct.images.length > 0
      ? currentProduct.images
      : [currentProduct.image];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
  });

  // ดักจับการเปลี่ยน Hash ใน URL สำหรับเปิดดูสินค้า (Deep Linking)
  window.addEventListener("hashchange", () => {
    handleHashRoute();
  });

  // จัดการปุ่มกด Search Toggle สำหรับหน้าจอเล็ก
  const searchToggleBtn = document.getElementById("search-toggle-btn");
  const searchWrapper = document.getElementById("search-wrapper");
  searchToggleBtn.addEventListener("click", () => {
    searchWrapper.classList.toggle("active-mobile");
    if (searchWrapper.classList.contains("active-mobile")) {
      searchInput.focus();
    }
  });

  // ปุ่ม Skip ในหน้า Category Selection
  const skipBtn = document.getElementById("landing-skip-btn");
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      dismissLandingScreen(true);
      activeCategory = "all";

      // รีเซ็ตปุ่มฟิลเตอร์
      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(btn => {
        if (btn.getAttribute("data-category") === "all") {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      renderProducts();
    });
  }

  // ลิงก์โลโก้และ Shop เพื่อเปิดหน้าต่างเลือกหมวดหมู่อีกครั้ง
  const logoLink = document.getElementById("logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      history.replaceState(null, null, window.location.pathname + window.location.search);
      showLandingScreen();
    });
  }

  const shopNavLinks = document.querySelectorAll('.nav-menu a[href="#shop"], .footer-links a[href="#shop"]');
  shopNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showLandingScreen();
    });
  });
}

// --- เริ่มต้นโหลดหน้าเว็บ (Initialization) ---
document.addEventListener("DOMContentLoaded", () => {
  // หากมี Hash ให้ข้ามหน้าเลือกหมวดหมู่ทันที
  if (window.location.hash && window.location.hash.startsWith("#product-")) {
    dismissLandingScreen(false);
  }
  loadProductsData();
  setupEventListeners();
});