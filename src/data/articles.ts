/**
 * 文章資料
 * 
 * 如何新增文章：
 * 1. 在 ARTICLES 陣列中新增一個物件
 * 2. 確保 slug 是唯一的 (用於 URL 路由，只能包含英文、數字和連字號)
 * 3. authorId 要對應 nutritionists.ts 中的營養師 id
 * 
 * 範例：
 * {
 *   slug: 'my-new-article',
 *   title: '新文章標題',
 *   ...
 * }
 */

import type { Article } from '../types';

export const ARTICLES: Article[] = [
    // {
    //     slug: 'balanced-diet-basics',
    //     title: '均衡飲食的基礎觀念',
    //     excerpt: '了解六大類食物如何搭配，建立健康飲食的第一步。',
    //     coverImage: '', // TODO: 替換為實際圖片
    //     authorId: 'mei-chen',
    //     publishedAt: '2024-12-15',
    //     readTime: 5,
    //     category: '營養知識',
    //     tags: ['均衡飲食', '六大類食物', '基礎觀念'],
    //     content: `...`,
    // },
    // ➕ 在這裡新增更多文章
];

/**
 * 取得文章 by slug
 */
export const getArticleBySlug = (slug: string): Article | undefined => {
    return ARTICLES.find((a) => a.slug === slug);
};

/**
 * 取得所有文章
 */
export const getAllArticles = (): Article[] => {
    return ARTICLES;
};

/**
 * 取得特定分類的文章
 */
export const getArticlesByCategory = (category: string): Article[] => {
    return ARTICLES.filter((a) => a.category === category);
};
