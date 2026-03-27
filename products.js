// =============================================
// products.js — 商品資料
// 新增商品請在 PRODUCTS 陣列中新增物件
// 或直接使用網頁的「管理模式」新增
// =============================================

// 可用標籤（可在管理模式中新增/刪除）
var DEFAULT_TAGS = [
  "FGO", "二手", "全新", "手帳", "紙膠帶和貼紙"
];

// 商品資料範例
var SAMPLE_PRODUCTS = [
  {
    id: "p001",
    name: "Sony ZV-E10 相機（附 16-50mm 鏡頭）",
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=600&q=80",
    description: "使用約一年，機況良好，快門次數少，附原廠包裝盒、備用電池兩顆、充電器。",
    origin: "日本",
    purchaseDate: "2022-11",
    damage: "輕微使用痕跡",
    tags: ["FGO", "3C"],
    dateAdded: "2024-03-10",
    stores: [
      { name: "蝦皮賣場", url: "https://shopee.tw", type: "shopee" },
      { name: "賣貨便", url: "https://buy.line.me", type: "convenient" }
    ]
  },
  {
    id: "p002",
    name: "村上春樹《挪威的森林》精裝版",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    description: "全新未讀，書封完整，無劃線。2020年出版精裝版。",
    origin: "台灣",
    purchaseDate: "2023-05",
    damage: "全新未拆",
    tags: ["書籍"],
    dateAdded: "2024-03-12",
    stores: [
      { name: "蝦皮賣場", url: "https://shopee.tw", type: "shopee" }
    ]
  },
  {
    id: "p003",
    name: "Nike Air Force 1 白色 US10",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description: "穿過三次，鞋底無磨損，附原廠鞋盒。",
    origin: "越南",
    purchaseDate: "2023-08",
    damage: "近全新",
    tags: ["衣物", "運動"],
    dateAdded: "2024-03-15",
    stores: [
      { name: "蝦皮賣場", url: "https://shopee.tw", type: "shopee" },
      { name: "賣貨便", url: "https://buy.line.me", type: "convenient" }
    ]
  }
];
