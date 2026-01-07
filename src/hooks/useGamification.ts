
import { useState, useEffect } from 'react';

const XP_PER_LEVEL_BASE = 100; // 基礎升級經驗值
const GROWTH_FACTOR = 1.2;     // 每級所需經驗值成長係數

// 定義可獲得經驗值的動作
export type ActionType = 'READ_ARTICLE' | 'UPLOAD_PHOTO' | 'DAILY_LOGIN';

interface XPAction {
    type: ActionType;
    xp: number;
    label: string;
}

const ACTIONS: Record<ActionType, XPAction> = {
    READ_ARTICLE: { type: 'READ_ARTICLE', xp: 50, label: '閱讀文章' },
    UPLOAD_PHOTO: { type: 'UPLOAD_PHOTO', xp: 100, label: '上傳飲食照片' }, // 上傳照片給較多獎勵，鼓勵核心行為
    DAILY_LOGIN: { type: 'DAILY_LOGIN', xp: 20, label: '每日登入' },
};



interface UserProgress {
    level: number;
    currentXP: number;
    totalXP: number;
    nextLevelXP: number;
    readArticles?: string[]; // IDs of read articles
}

export function useGamification() {
    const [progress, setProgress] = useState<UserProgress>({
        level: 1,
        currentXP: 0,
        totalXP: 0,
        nextLevelXP: XP_PER_LEVEL_BASE,
        readArticles: [],
    });

    const [notification, setNotification] = useState<{ message: string; visible: boolean } | null>(null);

    // Load and sync function
    const syncFromStorage = () => {
        const saved = localStorage.getItem('nutriplan_progress');
        if (saved) {
            setProgress(JSON.parse(saved));
        }
    };

    // Initial load and event listener
    useEffect(() => {
        syncFromStorage();

        // Listen for updates from other components
        window.addEventListener('gamification-update', syncFromStorage);

        // Listen for notification events (global toast)
        const handleNotification = (e: Event) => {
            const customEvent = e as CustomEvent;
            setNotification({ message: customEvent.detail, visible: true });
            setTimeout(() => setNotification(null), 3000);
        };
        window.addEventListener('gamification-toast', handleNotification);

        return () => {
            window.removeEventListener('gamification-update', syncFromStorage);
            window.removeEventListener('gamification-toast', handleNotification);
        };
    }, []);

    const calculateNextLevelXP = (level: number) => {
        return Math.floor(XP_PER_LEVEL_BASE * Math.pow(GROWTH_FACTOR, level - 1));
    };

    const gainXP = (actionType: ActionType, resourceId?: string) => {
        const action = ACTIONS[actionType];
        if (!action) return;

        // Read latest state from storage
        const saved = localStorage.getItem('nutriplan_progress');
        const currentProgress: UserProgress = saved ? JSON.parse(saved) : progress;

        // Check for duplicates if it's a read action
        if (actionType === 'READ_ARTICLE' && resourceId) {
            if (currentProgress.readArticles?.includes(resourceId)) {
                return; // Already read
            }
        }

        let newTotalXP = currentProgress.totalXP + action.xp;
        let newCurrentXP = currentProgress.currentXP + action.xp;
        let newLevel = currentProgress.level;
        let newNextLevelXP = currentProgress.nextLevelXP;
        let newReadArticles = currentProgress.readArticles || [];

        if (actionType === 'READ_ARTICLE' && resourceId) {
            newReadArticles = [...newReadArticles, resourceId];
        }

        // Handle Level Up
        while (newCurrentXP >= newNextLevelXP) {
            newCurrentXP -= newNextLevelXP;
            newLevel++;
            newNextLevelXP = calculateNextLevelXP(newLevel);

            // Dispatch Toast Event for Level Up
            window.dispatchEvent(new CustomEvent('gamification-toast', {
                detail: `恭喜升級！達到等級 ${newLevel}`
            }));
        }

        const newProgress: UserProgress = {
            level: newLevel,
            currentXP: newCurrentXP,
            totalXP: newTotalXP,
            nextLevelXP: newNextLevelXP,
            readArticles: newReadArticles,
        };

        // Save and Notify
        localStorage.setItem('nutriplan_progress', JSON.stringify(newProgress));

        // Dispatch Sync Event
        window.dispatchEvent(new Event('gamification-update'));

        // Dispatch Toast Event for XP Gain
        if (newLevel === currentProgress.level) {
            window.dispatchEvent(new CustomEvent('gamification-toast', {
                detail: `+${action.xp} XP (${action.label})`
            }));
        }
    };

    return {
        progress,
        gainXP,
        notification,
    };
}
