// =============================================
// products.js — 商品資料
// 新增商品請在 PRODUCTS 陣列中新增物件
// 或直接使用網頁的「管理模式」新增
// =============================================

// 可用標籤（可在管理模式中新增/刪除）
var DEFAULT_TAGS = [
  "FGO", "手帳", "紙膠帶和貼紙", "二手", "沒拆過" 
];

// 商品資料範例
var SAMPLE_PRODUCTS = [
 {
      "id": "p001",
      "name": "赤井秀一徽章",
      "image": "https://images.plurk.com/7KUpmSRhHZinqvUsBnG7Ul.jpg",
      "description": "幾年前在藏壽司轉到的。\n商品很小，會用郵寄的給買家，有需要請用噗浪聯絡我。",
      "origin": "",
      "purchaseDate": "忘了（？）",
      "damage": "近全新",
      "tags": [
        "二手","沒拆過"
      ],
      "dateAdded": "2026-03-27",
      "stores": [
        {
          "name": "其他賣場",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
    {
      "id": "p002",
      "name": "【全新】旅人筆記本（橄欖）$1000",
      "image": "https://shoplineimg.com/5f2a6b5d2c1b620020264616/6443c30f89b2780001acdd1d/800x.jpg",
      "description": "去年在成田機場多買的",
      "origin": "日本",
      "purchaseDate": "2026-08",
      "damage": "近全新",
      "tags": [
        "手帳","沒拆過"
      ],
      "dateAdded": "2024-03-15",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://buy.line.me",
          "type": "convenient"
        }
      ]
    }
  ],
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
      { name: "賣貨便", url: "https://buy.line.me", type: "convenient"}
    ]
  }
];
