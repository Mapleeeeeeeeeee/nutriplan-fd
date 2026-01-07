import { useGamification } from '../../hooks/useGamification';

export function XPBar() {
    const { progress } = useGamification();
    const { level, currentXP, nextLevelXP } = progress;
    const levelProgress = nextLevelXP > 0 ? (currentXP / nextLevelXP) * 100 : 0;

    return (
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
            {/* Level Badge */}
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full text-white font-bold text-sm shadow-sm ring-2 ring-white">
                {level}
            </div>

            {/* Progress Bar Container */}
            <div className="flex flex-col w-20 sm:w-24">
                <div className="flex justify-between text-[10px] text-gray-500 font-medium mb-0.5">
                    <span>LV.{level}</span>
                    <span>{currentXP}/{nextLevelXP}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${levelProgress}%` }}
                    ></div>
                </div>
            </div>

            {/* XP Icon (Mobile Hidden) */}
            <div className="hidden sm:block text-xs text-emerald-600 font-bold">
                XP
            </div>
        </div>
    );
}
