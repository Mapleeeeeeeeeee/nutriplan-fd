// NutriPlan Landing Page Constants

export const SITE_CONFIG = {
    name: 'NutriPlan',
    tagline: '為你量身打造的科學飲食地圖',
    heroHeadline: '不想再吃無聊的水煮餐？',
    heroSubtitle: '為你量身打造的科學飲食地圖',
} as const;

export const FEATURES = [
    {
        icon: 'fa-mobile-alt',
        title: '手機好讀',
        description: '精美圖卡設計，隨時隨地查看你的飲食計畫',
    },
    {
        icon: 'fa-calculator',
        title: '不用算熱量',
        description: '系統自動計算，你只需要照著吃',
    },
    {
        icon: 'fa-utensils',
        title: '照著吃就好',
        description: '每餐詳細食材與份量，輕鬆執行',
    },
] as const;

export const PRICING_PLANS = [
    {
        id: 'starter',
        name: '入門診斷',
        price: 699,
        duration: '30 分鐘',
        description: '找出飲食盲區，開啟健康第一步',
        features: [
            '30 分鐘線上諮詢',
            '飲食習慣與生活作息診斷',
            '大方向調整建議',
            '簡單版一日飲食圖',
            '適合想改變但不知從何開始的你',
        ],
        popular: false,
        badge: '輕鬆入門',
        targetAudience: '一般大眾、初學者',
        details: {
            longDescription: '這是一個適合完全沒有經驗、或是不確定自己飲食哪裡出問題的入門方案。透過 30 分鐘的專業諮詢，營養師會像朋友一樣與您聊天，找出您的飲食盲區。',
            includes: [
                '飲食習慣深度訪談 (30min)',
                '生活作息分析',
                '外食選擇建議',
                '基礎營養觀念導正'
            ],
            process: [
                '填寫基本問卷',
                '預約諮詢時間',
                '線上視訊/語音諮詢',
                '獲得診斷報告'
            ],
            deliverables: [
                '個人化飲食診斷雷達圖',
                '一日飲食建議範例 (簡易版)',
                '專屬改善建議清單'
            ]
        }
    },
    {
        id: 'basic',
        name: '懶人攻略',
        price: 990,
        duration: '7 天菜單',
        description: '照著吃就會瘦，給你標準答案',
        features: [
            '7 天完整菜單規劃',
            '精美圖卡輸出',
            '60 秒語音/影片說明',
            '便利商店採購指南',
            '適合忙碌上班族與懶人',
        ],
        popular: true,
        badge: '最受歡迎',
        targetAudience: '忙碌上班族、懶人',
        details: {
            longDescription: '專為忙碌現代人設計的「無腦執行」方案。不用算熱量、不用煩惱吃什麼，營養師直接幫您安排好一週 7 天的三餐內容，並且全部都是超商或常見外食買得到的選項。',
            includes: [
                '7 天早中晚三餐菜單',
                '外食/超商替代方案',
                '熱量與營養素精算',
                '營養師親錄語音解說'
            ],
            process: [
                '填寫詳細飲食偏好問卷',
                '營養師規劃菜單 (約 1-2 工作天)',
                '收到專屬連結',
                '開始執行'
            ],
            deliverables: [
                '7 張精美手機專用菜單圖卡',
                '1 分鐘語音導覽 (重點提醒)',
                '超商採購清單',
                'Line 專屬客服 (方案期間內)'
            ]
        }
    },
    {
        id: 'pro',
        name: '專家陪跑',
        price: 1500,
        duration: '1 小時',
        description: '深度客製化，解決你的特殊需求',
        features: [
            '1 小時深度線上諮詢',
            '完整飲食與生活診斷',
            '精準熱量與營養素計算',
            '份數計算與替換教學',
            '適合有明確目標或特殊需求',
        ],
        popular: false,
        badge: '專業級',
        targetAudience: '健身族、運動員、特殊需求',
        details: {
            longDescription: '這是最高規格的客製化方案，適合有明確健身目標 (增肌/減脂/備賽) 或是特殊飲食需求 (素食/過敏/疾病) 的您。營養師將針對您的身體數值與目標，進行精密的計算與規劃。',
            includes: [
                '深度諮詢 + 完整菜單',
                '身體素質與目標分析',
                '精準熱量與三大營養素計算',
                '份數代換教學 (學會自己搭配)',
                '運動前後營養補充建議'
            ],
            process: [
                '填寫高階評估問卷',
                '1 小時深度諮詢',
                '方案規劃與調整',
                '一週後成效追蹤'
            ],
            deliverables: [
                '完整營養規劃報告書 (PDF)',
                '客製化一週菜單',
                '份數代換表',
                '運動營養策略建議'
            ]
        }
    },
] as const;

export const CTA_LINK = '#'; // TODO: Replace with Google Form link

export const NAV_ITEMS = [
    { label: '特色', href: '/#features' },
    { label: '方案', href: '/#pricing' },
    { label: '專業團隊', href: '/team' },
    { label: '任務專區', href: '/tasks' },
    { label: '常見問題', href: '/faq' },
    { label: '精選文章', href: '/articles' },
] as const;
