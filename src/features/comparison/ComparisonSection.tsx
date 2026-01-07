import { useState } from 'react';

interface ComparisonItem {
    text: string;
    sub?: string;
    icon?: string;
    color?: string;
    highlight?: boolean;
}

interface ComparisonRow {
    feature: string;
    ai: ComparisonItem;
    hospital: ComparisonItem;
    nutriplan: ComparisonItem;
}

export function ComparisonSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Slogan */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        為什麼選擇 NutriPlan？
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        別再問 AI 了，它不知道你家巷口 <span className="text-emerald-600">7-11 賣什麼</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        NutriPlan，最懂台灣外食族的飲食攻略。
                    </p>
                </div>

                {/* 1. Killer Comparison Table */}
                <div className="mb-24">
                    {/* Desktop View */}
                    <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
                        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                            <div className="p-6 font-bold text-gray-500"></div>
                            <div className="p-6 font-bold text-gray-600 text-center flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
                                    <i className="fas fa-robot"></i>
                                </div>
                                AI (如ChatGPT、Gemini)
                            </div>
                            <div className="p-6 font-bold text-gray-600 text-center flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl">
                                    <i className="fas fa-hospital"></i>
                                </div>
                                醫院營養門診
                            </div>
                            <div className="p-6 font-bold text-emerald-700 text-center bg-emerald-50 relative flex flex-col items-center gap-2">
                                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl shadow-sm">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                NutriPlan 營養計畫
                            </div>
                        </div>

                        {COMPARISON_DATA.map((row, idx) => (
                            <div key={idx} className={`grid grid-cols-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                                <div className="p-6 flex items-center font-bold text-gray-700 border-r border-gray-100">
                                    {row.feature}
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center border-r border-gray-100">
                                    {row.ai.icon && <i className={`fas ${row.ai.icon} mb-2 text-lg ${row.ai.color}`}></i>}
                                    <span className={`text-sm ${row.ai.highlight ? 'font-bold text-gray-800' : 'text-gray-500'}`}>
                                        {row.ai.text}
                                    </span>
                                    {row.ai.sub && <span className="text-xs text-gray-400 mt-1">{row.ai.sub}</span>}
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center border-r border-gray-100">
                                    {row.hospital.icon && <i className={`fas ${row.hospital.icon} mb-2 text-lg ${row.hospital.color}`}></i>}
                                    <span className={`text-sm ${row.hospital.highlight ? 'font-bold text-gray-800' : 'text-gray-500'}`}>
                                        {row.hospital.text}
                                    </span>
                                    {row.hospital.sub && <span className="text-xs text-gray-400 mt-1">{row.hospital.sub}</span>}
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center bg-emerald-50/30 relative">
                                    {row.nutriplan.icon && <i className={`fas ${row.nutriplan.icon} mb-2 text-lg text-emerald-500`}></i>}
                                    <span className="text-sm font-bold text-emerald-700">
                                        {row.nutriplan.text}
                                    </span>
                                    {row.nutriplan.sub && <span className="text-xs text-emerald-600/80 mt-1">{row.nutriplan.sub}</span>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-6">
                        {/* 1. NutriPlan Card (Hero) */}
                        <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-500 overflow-hidden">
                            <div className="bg-emerald-600 text-white p-4 text-center font-bold text-lg flex items-center justify-center gap-2">
                                <i className="fas fa-leaf"></i> NutriPlan 視覺計畫
                            </div>
                            <div className="p-4 space-y-4">
                                {COMPARISON_DATA.map((row, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                        <span className="text-gray-500 text-sm font-medium">{row.feature}</span>
                                        <div className="text-right">
                                            <div className="text-emerald-700 font-bold text-sm">{row.nutriplan.text}</div>
                                            {row.nutriplan.sub && <div className="text-xs text-emerald-600/70">{row.nutriplan.sub}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Competitors (Collapsed/Simplified) */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
                                <div className="flex items-center gap-2 font-bold text-gray-700 mb-3 pb-2 border-b">
                                    <i className="fas fa-robot text-gray-400"></i> 免費 AI
                                </div>
                                <ul className="space-y-3">
                                    {COMPARISON_DATA.map((row, idx) => (
                                        <li key={idx} className="text-xs flex justify-between">
                                            <span className="text-gray-400">{row.feature}</span>
                                            <span className="text-gray-600 text-right">{row.ai.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
                                <div className="flex items-center gap-2 font-bold text-gray-700 mb-3 pb-2 border-b">
                                    <i className="fas fa-hospital text-blue-400"></i> 傳統門診
                                </div>
                                <ul className="space-y-3">
                                    {COMPARISON_DATA.map((row, idx) => (
                                        <li key={idx} className="text-xs flex justify-between">
                                            <span className="text-gray-400">{row.feature}</span>
                                            <span className="text-gray-600 text-right">{row.hospital.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Direct Q&A */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
                        <span className="text-emerald-600">常見問題</span> 直球對決
                    </h3>
                    <div className="space-y-6">
                        {QA_DATA.map((qa, idx) => (
                            <FAQItem key={idx} question={qa.question} answer={qa.answer} points={qa.points} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, points }: { question: string; answer: string; points: { title: string; content: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
            >
                <h4 className="text-lg font-bold text-gray-800 leading-snug">
                    <span className="text-emerald-500 mr-2">Q:</span>
                    {question}
                </h4>
                <div className={`mt-1 text-emerald-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </button>

            <div className={`transition-all duration-300 ease-in-out border-t border-gray-100 bg-gray-50/50 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-6 pt-4">
                    <p className="font-bold text-emerald-800 mb-4 text-lg">
                        A: {answer}
                    </p>
                    <ul className="space-y-4">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-gray-600">
                                <div className="mt-1 min-w-[20px] text-emerald-500">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <strong className="text-gray-800 block mb-0.5">{point.title}</strong>
                                    {point.content}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const COMPARISON_DATA: ComparisonRow[] = [
    {
        feature: '核心體驗',
        ai: { text: '自行拼湊答案', icon: 'fa-puzzle-piece', color: 'text-gray-400' },
        hospital: { text: '像在看病', icon: 'fa-user-doctor', color: 'text-blue-400' },
        nutriplan: { text: '像在玩遊戲/拿攻略', icon: 'fa-gamepad' },
    },
    {
        feature: '準確度',
        ai: { text: '不確定是否正確', sub: '(熱量不正確、訓練資料過時)', icon: 'fa-triangle-exclamation', color: 'text-yellow-500', highlight: true },
        hospital: { text: '醫療級精準', icon: 'fa-check-circle', color: 'text-blue-500' },
        nutriplan: { text: '醫療級精準', sub: '(真人營養師把關)', icon: 'fa-check-circle' },
    },
    {
        feature: '在地化',
        ai: { text: '美式風格', sub: '(優格/羽衣甘藍)', icon: 'fa-earth-americas', color: 'text-gray-400' },
        hospital: { text: '僅大方向原則', sub: '(難以落實於外食)', icon: 'fa-user-md', color: 'text-blue-400' },
        nutriplan: { text: '超商/外食友善', sub: '(懂 7-11 賣什麼)', icon: 'fa-store' },
    },
    {
        feature: '交付成果',
        ai: { text: '一堆冰冷的文字', icon: 'fa-file-alt', color: 'text-gray-400' },
        hospital: { text: '滿滿字的 A4 衛教單', icon: 'fa-file-medical', color: 'text-blue-400' },
        nutriplan: { text: '精美手機圖卡 + 語音', icon: 'fa-mobile-screen-button' },
    },
    {
        feature: '心理感受',
        ai: { text: '沒人管我', sub: '(容易放棄)', icon: 'fa-user-slash', color: 'text-gray-400' },
        hospital: { text: '嚴肅拘謹', sub: '(像在上課)', icon: 'fa-clipboard-list', color: 'text-blue-400' },
        nutriplan: { text: '輕鬆、像跟朋友一樣聊聊天', icon: 'fa-face-smile-beam' },
    },
    {
        feature: '花費時間',
        ai: { text: '需自己下指令', sub: '(Prompt)', icon: 'fa-keyboard', color: 'text-gray-400' },
        hospital: { text: '固定時間預約', sub: '(需配合門診)', icon: 'fa-clock', color: 'text-blue-400' },
        nutriplan: { text: '彈性自由安排', sub: '(選擇適合你的時間)', icon: 'fa-user-clock' },
    },
];

const QA_DATA = [
    {
        question: '現在 ChatGPT 就能開菜單了，為什麼我要付錢買這個？',
        answer: 'AI 給你的是「資訊」，我們給你的是「可執行的策略」。',
        points: [
            { title: '安全與責任', content: 'AI 常常會一本正經地胡說八道（例如算錯熱量），若吃出問題 AI 不會負責。NutriPlan 由真人營養師親自審核，為你的健康把關。' },
            { title: '台灣在地化', content: 'AI 不知道你家樓下的全家便利商店賣什麼，但我們的營養師知道。我們開的菜單是「你走下樓就買得到的」，而不是要去進口超市才買得到的食材。' },
            { title: '儀式感與承諾', content: '免費的資訊通常不會被珍惜。當你獲得一份專屬於你的精美圖卡，這種「承諾感」會讓你的執行成功率大幅提升。' }
        ]
    },
    {
        question: '去醫院或診所掛號也很便宜，為什麼不去掛號就好？',
        answer: '去醫院是為了「治病」，來 NutriPlan 是為了「變強/變美」。',
        points: [
            { title: '拒絕藥水味', content: '我們相信飲食控制應該是種 Lifestyle，而不是一種治療。你不需要請假、不需要聞醫院的藥水味，也不用面對嚴肅的醫生。' },
            { title: '圖卡帶著走', content: '傳統門診通常給你一張 A4 衛教單，拿回家就丟在桌上了。NutriPlan 給你的是「手機專用圖卡」，去超商買午餐時，手機拿出來看一眼就知道吃什麼，既時尚又方便。' },
            { title: '無痛起步', content: '我們省略了繁瑣的掛號流程，填寫表單即可開始。適合忙碌、不想請假、只想快速開始的你。' }
        ]
    },
    {
        question: '$990 的方案沒有對談，這樣真的有效嗎？',
        answer: '對於 80% 的人來說，「不想動腦」比「有人陪聊」更重要。',
        points: [
            { title: '懶人外掛', content: '很多時候我們瘦不下來，不是因為不懂理論，而是因為「懶得想下一餐吃什麼」。$990 方案就是你的「懶人外掛」。營養師已經幫你把一週的決策都做好了，你只需要「照著圖、買來吃」。' },
            { title: '有溫度的聲音', content: '此外，每份計畫都會附上營養師親自錄製的 60秒語音導覽，讓你依然能感受到真人的溫度與叮嚀。' }
        ]
    }
];
