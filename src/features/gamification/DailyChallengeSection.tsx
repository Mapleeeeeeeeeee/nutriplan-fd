import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamification } from '../../hooks/useGamification';
import { Card } from '../../components/ui';

export function DailyChallengeSection() {
    const { gainXP } = useGamification();
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            gainXP('UPLOAD_PHOTO');
            // Reset input so the same file can be selected again if needed (though unlikely for this use case)
            e.target.value = '';
        }
    };

    return (
        <section>
            <div className="grid sm:grid-cols-2 gap-6">
                {/* Upload Challenge */}
                <Card hover className="cursor-pointer group relative overflow-hidden border-2 border-transparent hover:border-emerald-500 transition-all duration-300">
                    <button
                        className="w-full h-full text-left focus:outline-none"
                        onClick={handleUploadClick}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                <i className="fas fa-camera text-2xl"></i>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                                +100 XP
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">上傳飲食照片</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            紀錄今天的每一餐，讓 AI 幫你分析營養攝取狀況。
                        </p>

                        <div className="flex items-center text-emerald-600 font-medium text-sm">
                            <span>立即上傳</span>
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </button>
                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </Card>

                {/* Read Challenge */}
                <Card hover className="cursor-pointer group border-2 border-transparent hover:border-sky-500 transition-all duration-300">
                    <button
                        className="w-full h-full text-left focus:outline-none"
                        onClick={() => {
                            // gainXP('READ_ARTICLE'); // Moved to article scroll logic
                            navigate('/articles');
                        }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                                <i className="fas fa-book-open text-2xl"></i>
                            </div>
                            <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">
                                閱讀完畢 +50 XP
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">閱讀營養知識</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            每篇文章閱讀到底部後，即可獲得經驗值（每篇限一次）。
                        </p>

                        <div className="flex items-center text-sky-600 font-medium text-sm">
                            <span>開始閱讀</span>
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </button>
                </Card>
            </div>
        </section>
    );
}
