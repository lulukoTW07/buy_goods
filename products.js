// =============================================
// products.js — 商品資料
// 新增商品請在 PRODUCTS 陣列中新增物件
// 或直接使用網頁的「管理模式」新增
// =============================================

// 可用標籤（可在管理模式中新增/刪除）
var DEFAULT_TAGS = [
  "FGO", "二手", "全新", "手帳", "紙膠帶和貼紙","週邊","聯絡賣家plurk@fly811",
];

// 商品資料範例
var SAMPLE_PRODUCTS = [
    {
      "id": "p100",
      "name": "赤井秀一徽章 $30",
      "image": "https://images.plurk.com/7KUpmSRhHZinqvUsBnG7Ul.jpg",
      "description": "幾年前在藏壽司轉到的。\n商品很小，會用郵寄平信的給買家，運費約8-10元，總價會是30-40元，有需要請用噗浪聯絡我。",
      "origin": "",
      "purchaseDate": "忘了（？）",
      "damage": "近全新",
      "tags": [
        "二手","週邊",
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
      "id": "p001",
      "name": "聯絡賣家",
      "image": "https://images.plurk.com/caJaFRMFks5zfSx9FkICA.png",
      "description": "⭐所有在標題上的商品價格皆不含運。\n⭐請點選下方的按鈕連進噗浪，並用私噗聯繫我，感謝！\n⭐此賣場只為統合用，若需要購買證明須以第三方平台為主唷～",
      "origin": "臺灣",
      "purchaseDate": "-",
      "damage": "輕微使用痕跡",
      "tags": ["聯絡賣家plurk@fly811"],
      "dateAdded": "1900-01-01",
      "stores": [
        {
          "name": "噗浪",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
    {
      "id": "p002",
      "name": "明日方舟-朝隴山山兔毛絨玩偶-凱爾希",
      "image": "https://images.plurk.com/49k0cVqBlgQWhzAUcLJiKp.jpg",
      "description": "拆過一次，後來就放在袋子裡沒拿出來過了。",
      "origin": "中國",
      "purchaseDate": "2019年",
      "damage": "二手",
      "tags": [
        "二手","週邊",
      ],
      "dateAdded": "2026-3-29",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://shopee.tw",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p003",
      "name": "【全新】旅人筆記本（橄欖）$1000",
      "image": "https://images.plurk.com/39xzyFDj85hRQCCUyeZdeW.jpg",
      "description": "去年在成田機場多買的，賣貨便運費會加35請注意～",
      "origin": "日本",
      "purchaseDate": "2026-08",
      "damage": "近全新",
      "tags": [
        "手帳"
      ],
      "dateAdded": "2026-03-19",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://buy.line.me",
          "type": "convenient"
        }
      ]
    }
];
