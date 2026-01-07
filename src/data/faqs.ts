/**
 * 常見問題資料
 */

import type { FAQ } from '../types';

export const FAQS: FAQ[] = [
    {
        id: 'what-is-nutriplan',
        question: '什麼是 NutriPlan？',
        answer: 'NutriPlan 是由專業營養師提供的個人化飲食規劃服務。我們會根據您的身體狀況、目標和飲食偏好，設計專屬於您的精美菜單圖卡，讓健康飲食變得簡單又美味。',
        category: '服務介紹',
    },
    {
        id: 'how-it-works',
        question: '服務流程是什麼？',
        answer: '1. 填寫預約表單，提供基本資料\n2. 營養師與您進行初次諮詢\n3. 收到專屬的飲食規劃菜單圖卡\n4. 依照菜單執行，有問題隨時諮詢',
        category: '服務介紹',
    },
    {
        id: 'plan-difference',
        question: '7日方案和30日方案有什麼差別？',
        answer: '7日速效規劃適合想先嘗試的朋友，純菜單無額外諮詢。30日陪跑計畫則包含 Line 群組專屬諮詢，營養師會陪伴您整個月，隨時解答問題、調整菜單。',
        category: '方案說明',
    },
    {
        id: 'menu-customization',
        question: '菜單可以客製化嗎？',
        answer: '當然可以！我們會在初次諮詢時了解您的飲食偏好、過敏原、不吃的食物等，所有菜單都會根據您的需求量身打造。',
        category: '方案說明',
    },
    {
        id: 'delivery-time',
        question: '多久會收到菜單？',
        answer: '完成諮詢後，通常 3-5 個工作天內會收到您的專屬菜單。30日方案會分次提供，確保內容新鮮且符合您當下的狀態。',
        category: '服務流程',
    },
    {
        id: 'payment-methods',
        question: '付款方式有哪些？',
        answer: '我們支援銀行轉帳和信用卡付款。完成預約後會收到付款資訊，確認付款後即可開始服務。',
        category: '付款相關',
    },
    // ➕ 在這裡新增更多常見問題
];

/**
 * 取得所有 FAQ
 */
export const getAllFAQs = (): FAQ[] => {
    return FAQS;
};

/**
 * 依分類取得 FAQ
 */
export const getFAQsByCategory = (category: string): FAQ[] => {
    return FAQS.filter((f) => f.category === category);
};
