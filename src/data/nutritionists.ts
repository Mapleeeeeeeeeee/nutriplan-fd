/**
 * 營養師資料
 * 
 * 如何新增營養師：
 * 1. 在 NUTRITIONISTS 陣列中新增一個物件
 * 2. 確保 id 是唯一的 (用於 URL 路由)
 * 3. 填寫所有必要欄位
 * 
 * 如何新增大眾化菜單：
 * 1. 在營養師物件的 publicMenus 陣列中新增菜單
 * 2. 每個菜單包含目標族群、熱量、餐點內容
 */

import type { Nutritionist } from '../types';
import yangImage from '../assets/images/nutritionists/yang-fu-lin.png';

export const NUTRITIONISTS: Nutritionist[] = [
    {
        id: 'liao-yue-chen',
        name: '廖悅辰',
        title: '國家高考合格營養師',
        shortBio: '專精於糖尿病與慢性病飲食調理，提供客製化的體重管理方案。',
        fullBio: `廖悅辰營養師擁有豐富的臨床經驗，曾任職於台北醫學大學附設醫院及衛生所，擅長將專業的醫療營養知識轉化為日常可執行的飲食計畫。`,
        image: '', // TODO: 替換為實際圖片路徑
        instagram: '', // TODO: 替換為實際 IG 連結
        credentials: [
            {
                icon: 'fa-certificate',
                label: '國家高考營養師',
                description: '中華民國專技高等考試及格',
                highlight: true
            },
            {
                icon: 'fa-user-md',
                label: '糖尿病共照網認證',
                description: '新北市政府衛生局認證',
                highlight: true
            },
            {
                icon: 'fa-heart-pulse',
                label: '慢性腎病照護',
                description: '台灣腎臟醫學會進階班認證',
                highlight: false
            },
            {
                icon: 'fa-hands-holding-circle',
                label: '長照 Level 1',
                description: '衛生福利部認證',
                highlight: false
            },
            {
                icon: 'fa-shield-halved',
                label: 'HACCP 食品安全',
                description: '衛福部食藥屬進階證照',
                highlight: false
            },
            {
                icon: 'fa-utensils',
                label: '中餐丙級技術士',
                description: '開出好吃又健康的餐點',
                highlight: true
            }
        ],
        specialties: ['糖尿病專科營養', '疾病飲食諮詢', '個人化體重管理'],
        suitableFor: ['糖尿病前期或確診患者', '有三高問題的族群', '想要健康減重不復胖'],
        quote: '飲食控制不是限制，而是為了更自由的享受生活。',
        publicMenus: [] // TODO: 新增預設菜單
    },
    {
        id: 'yang-fu-lin',
        name: '楊福臨',
        title: '國家高考合格營養師 / 運動科學碩士',
        shortBio: '結合運動科學與營養學，為你打造最科學的增肌減脂計畫。',
        fullBio: `楊福臨營養師擁有運動科學研究所學位，並具備豐富的職業球隊體能訓練經驗。他擅長整合「訓練」與「營養」，幫助健身族群與運動員突破瓶頸，達成理想體態。`,
        image: yangImage,
        instagram: '', // TODO: 替換為實際 IG 連結
        credentials: [
            {
                icon: 'fa-certificate',
                label: '國家高考合格營養師',
                description: '中華民國專技高等考試及格',
                highlight: true
            },
            {
                icon: 'fa-dumbbell',
                label: '體適能健身 C 級',
                description: '具備專業運動指導能力',
                highlight: true
            },
            {
                icon: 'fa-graduation-cap',
                label: '運動科學碩士',
                description: '台北市立大學',
                highlight: true
            }
        ],
        specialties: ['運動營養', '增肌減脂', '體能訓練狀況調整'],
        suitableFor: ['健身族與運動員', '想要增肌減脂遇到瓶頸', '追求極致體態表現'],
        quote: '訓練決定你的下限，營養決定你的上限。',
        publicMenus: [] // TODO: 新增預設菜單
    }
];

/**
 * 取得營養師 by ID
 */
export const getNutritionistById = (id: string): Nutritionist | undefined => {
    return NUTRITIONISTS.find((n) => n.id === id);
};

/**
 * 取得所有營養師
 */
export const getAllNutritionists = (): Nutritionist[] => {
    return NUTRITIONISTS;
};
