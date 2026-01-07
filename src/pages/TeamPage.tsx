import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { Card, SEO } from '../components/ui';
import { getAllNutritionists } from '../data';

export function TeamPage() {
    const nutritionists = getAllNutritionists();

    return (
        <>
            <SEO
                title="專業團隊"
                description="認識 NutriPlan 的專業營養師團隊，每位都具備國家認證資格與豐富臨床經驗。"
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <i className="fas fa-users mr-2"></i>
                                專業團隊
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                認識我們的營養師
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                每位營養師都具備國家認證資格與豐富臨床經驗，用心為你規劃專屬飲食方案
                            </p>
                        </div>

                        {/* Nutritionists Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {nutritionists.map((nutritionist) => {
                                const highlightedCreds = nutritionist.credentials.filter(
                                    (c) => c.highlight
                                );

                                return (
                                    <Link key={nutritionist.id} to={`/nutritionist/${nutritionist.id}`}>
                                        <Card hover className="h-full flex flex-col text-center">
                                            {/* Avatar */}
                                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                                                {nutritionist.image ? (
                                                    <img
                                                        src={nutritionist.image}
                                                        alt={nutritionist.name}
                                                        className="w-full h-full object-cover rounded-2xl"
                                                    />
                                                ) : (
                                                    <i className="fas fa-user-tie text-4xl text-white/80"></i>
                                                )}
                                            </div>

                                            {/* Name & Title */}
                                            <h2 className="text-xl font-bold text-gray-900 mb-1">
                                                {nutritionist.name}
                                            </h2>
                                            <p className="text-emerald-600 text-sm font-medium mb-3">
                                                {nutritionist.title}
                                            </p>

                                            {/* Highlighted Credentials */}
                                            {highlightedCreds.length > 0 && (
                                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                                    {highlightedCreds.slice(0, 2).map((cred, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                                                        >
                                                            <i className={`fas ${cred.icon}`}></i>
                                                            {cred.label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Short Bio */}
                                            <p className="text-gray-600 text-sm flex-1">
                                                {nutritionist.shortBio}
                                            </p>

                                            {/* Specialties */}
                                            <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-4 border-t border-gray-100">
                                                {nutritionist.specialties.slice(0, 3).map((specialty) => (
                                                    <span
                                                        key={specialty}
                                                        className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* View Profile Link */}
                                            <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm mt-4">
                                                <span>查看完整介紹</span>
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Join Us CTA (optional) */}
                        <div className="mt-16 text-center">
                            <Card className="inline-block bg-emerald-50 border-emerald-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <i className="fas fa-handshake text-emerald-600 text-xl"></i>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-800">想加入我們的團隊？</p>
                                        <p className="text-sm text-gray-600">
                                            歡迎具有國家認證的營養師與我們聯繫
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
