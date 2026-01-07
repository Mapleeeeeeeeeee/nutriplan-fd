
import { Header, Footer } from '../components/layout';
import { SEO } from '../components/ui';
import { DailyChallengeSection } from '../features/gamification/DailyChallengeSection';

export function TasksPage() {
    return (
        <>
            <SEO
                title="每日任務專區"
                description="完成每日健康挑戰，累積經驗值，解鎖更多營養專屬圖卡！"
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                <i className="fas fa-tasks text-emerald-500 mr-2"></i>
                                任務專區
                            </h1>
                            <p className="text-gray-600">
                                累積經驗，讓健康成為一種好玩的習慣。
                            </p>
                        </div>

                        {/* Reuse the component but maybe styled slightly differently if needed via props? 
                            For now, just using it as is since it's section-based.
                            Currently it has its own section wrapper background. 
                            If we want it to blend in, we might want to refactor the component to acceptclassName or remove the section tag.
                            But for MVP, let's just render it. 
                        */}
                        {/* Daily Challenges */}
                        <div>
                            <DailyChallengeSection />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
