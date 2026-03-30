// =============================================
// products.js — 商品資料
// 新增商品請在 PRODUCTS 陣列中新增物件
// 或直接使用網頁的「管理模式」新增
// =============================================

// 可用標籤（可在管理模式中新增/刪除）
var DEFAULT_TAGS = [
  "FGO",　"驅魔",　"手帳",　"紙膠帶和貼紙",　"週邊",　"交換", "遊戲片",　"聯絡賣家plurk@fly811"
];

// 商品資料
var SAMPLE_PRODUCTS = [

   {
      "id": "mm01",
      "name": "神祕信使聯名框影咖啡V飯友 $100",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301101711675.jpg",
      "description": "",
      "origin": "未知",
      "purchaseDate": "2024年左右",
      "damage": "輕微使用痕跡",
      "tags": [
        "周邊"
      ],
      "dateAdded": "2026-03-30",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
  
   {
      "id": "p1774870339037",
      "name": "【純交換】星之子第二彈_光波紫換任一第一彈星之子",
      "image": "https://images.plurk.com/1tX0sJUrEmWxsWGlkYuQeW.jpg",
      "description": "第二彈光波紫換第一彈任一個～ 介紹：https://www.so-ta.com/products_detail/capsuletoy/hoshi_no_ko/ ",
      "origin": "日本",
      "purchaseDate": "2024年左右",
      "damage": "近全新",
      "tags": [
        "交換"
      ],
      "dateAdded": "2026-03-30",
      "stores": [
        {
          "name": "噗浪",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
    {
      "id": "p1774870088465",
      "name": "FGO嘉年華咖啡廳迷你立牌 $50",
      "image": "https://images.plurk.com/b4U52oc8ezGutfEzhyzoI.jpg",
      "description": "注意：商品的珠珠鍊和外包裝已遺失，有需要請思考後再下單。",
      "origin": "未知",
      "purchaseDate": "2022-05",
      "damage": "輕微使用痕跡",
      "tags": [
        "FGO","週邊"
      ],
      "dateAdded": "2026-03-30",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p1774870006197",
      "name": "FGO冠位時間殿X臺灣安美咖啡克羅塔only恩奇都 $50",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301101689921.jpg",
      "description": "漂亮ㄉ綠色的人",
      "origin": "未知",
      "purchaseDate": "2022-05",
      "damage": "近全新",
      "tags": [
        "FGO","週邊"
      ],
      "dateAdded": "2026-03-30",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p1774869934661",
      "name": "switch1刀劍亂舞無雙 $500",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301101679582.jpg",
      "description": "可以拍刀男的胯下的照片的遊戲",
      "origin": "日本",
      "purchaseDate": "2022-6",
      "damage": "輕微使用痕跡",
      "tags": [
        "遊戲片"
      ],
      "dateAdded": "2026-03-30",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p1774820497393",
      "name": "FGO轉蛋橡膠吊飾 $100",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100602011.jpg",
      "description": "伊絲塔跟安娜因為一直放在蛋殼裡因此凹損嚴重故不賣，有需要請私訊。",
      "origin": "？",
      "purchaseDate": "2019-12",
      "damage": "輕微使用痕跡",
      "tags": [
        "FGO",
        "週邊"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
      {
      "id": "DGM222",
      "name": "【純交換】驅魔少年のび猫壓克力牌交換",
      "image": "https://images.plurk.com/1jVl5RJP7ma6w63usUH8Yr.png ",
      "description": "莉娜利換羅特、亞連換涅亞、帝奇換師匠",
      "origin": "日本",
      "purchaseDate": "2025-12",
      "damage": "輕微使用痕跡",
      "tags": [
        "驅魔",
        "交換"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
          "name": "噗浪",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
    {
      "id": "p1774820367629",
      "name": "FGO2017年全特異點一番賞 $50、$62",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100600967.jpg",
      "description": "外盒默認有些微灰塵與痕跡，但沒有拆過，如果拆開發現內部有異常可向我進行退貨！\n注意：除了術閃價格為62元外，其餘皆為50元。",
      "origin": "？",
      "purchaseDate": "2017-08",
      "damage": "近全新",
      "tags": [
        "FGO",
        "週邊"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
         "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p1774820282874",
      "name": "2024京mafuSNS風格吊飾 $200/個",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100603172.jpg",
      "description": "保存良好，但因為開過所以皆默認有些微損傷。",
      "origin": "日本",
      "purchaseDate": "2024-12",
      "damage": "近全新",
      "tags": [
        "FGO",
        "週邊"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
         "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p1774820107614",
      "name": "FGO和三麗鷗合作第二彈軟膠吊飾only狂狗 $100",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100604305.jpg",
      "description": "臉部有黑點污漬，外包裝有些微損傷。",
      "origin": "日本",
      "purchaseDate": "忘了（？）",
      "damage": "有明顯損傷",
      "tags": [
        "FGO",
        "週邊"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
         "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }

      ]
    },
    {
      "id": "p1774819994462",
      "name": "驅魔少年JS眼睛鑰匙圈only林克 $100",
      "image": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100605521.jpg",
      "description": "26年3月初買的，只拆過一次。",
      "origin": "日本",
      "purchaseDate": "2026-03",
      "damage": "近全新",
      "tags": [
        "驅魔",
        "週邊"
      ],
      "dateAdded": "2026-03-29",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/general/detail/GM2506300653196",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p100",
      "name": "赤井秀一徽章 $30",
      "image": "https://images.plurk.com/7KUpmSRhHZinqvUsBnG7Ul.jpg",
      "description": "幾年前在藏壽司轉到的。\n商品很小，會用郵寄平信的給買家，運費約8-10元，總價會是30-40元，有需要請用噗浪聯絡我。",
      "origin": "？",
      "purchaseDate": "忘了（？）",
      "damage": "近全新",
      "tags": [
        "週邊"
      ],
      "dateAdded": "2026-03-27",
      "stores": [
        {
          "name": "噗浪",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
    {
      "id": "p001",
      "name": "聯絡賣家",
      "image": "https://images.plurk.com/caJaFRMFks5zfSx9FkICA.png",
      "description": "⭐所有在標題上的商品價格皆不含運。\n⭐請點選下方的按鈕連進噗浪，並用私噗聯繫我，感謝！\n⭐此賣場只為統整用，若需要購買證明須以第三方平台為主唷～",
      "origin": "臺灣",
      "purchaseDate": "-",
      "damage": "輕微使用痕跡",
      "tags": [
        "聯絡賣家plurk@fly811"
      ],
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
      "name": "明日方舟-朝隴山山兔毛絨玩偶-凱爾希 $300",
      "image": "https://images.plurk.com/49k0cVqBlgQWhzAUcLJiKp.jpg",
      "description": "拆過一次，後來就放在袋子裡沒拿出來過了。\n賣貨便有詳細說明。",
      "origin": "中國",
      "purchaseDate": "2019年",
      "damage": "有明顯損傷",
      "tags": [
        "週邊"
      ],
      "dateAdded": "2026-3-29",
      "stores": [
        {
          "name": "賣貨便",
          "url": "https://myship.7-11.com.tw/i/cgdm/GM2506300653196/2603301100606763.jpg",
          "type": "convenient"
        }
      ]
    },
    {
      "id": "p003",
      "name": "旅人筆記本（橄欖）$1000",
      "image": "https://images.plurk.com/39xzyFDj85hRQCCUyeZdeW.jpg",
      "description": "去年在成田機場多買的，尚未開賣場，有需要請噗浪私訊～",
      "origin": "日本",
      "purchaseDate": "2026-08",
      "damage": "近全新",
      "tags": [
        "手帳"
      ],
      "dateAdded": "2026-03-19",
      "stores": [
        {
          "name": "噗浪",
          "url": "https://www.plurk.com/fly811",
          "type": "default"
        }
      ]
    },
  ];
