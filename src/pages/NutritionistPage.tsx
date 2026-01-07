import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { Card, Button, SEO } from '../components/ui';
import { getNutritionistById, getAllArticles } from '../data';
import { CTA_LINK } from '../constants';

export function NutritionistPage() {
    const { id } = useParams<{ id: string }>();
    const nutritionist = id ? getNutritionistById(id) : undefined;
    const articles = getAllArticles().filter((a) => a.authorId === id);
    const [isZoomed, setIsZoomed] = useState(false);

    if (!nutritionist) {
        return (
            <>
                <SEO title="找不到營養師" />
                <div className="min-h-screen bg-slate-50">
                    <Header />
                    <main className="pt-24 pb-16">
                        <div className="max-w-3xl mx-auto px-4 text-center">
                            <i className="fas fa-user-slash text-6xl text-gray-300 mb-4"></i>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">找不到營養師</h1>
                            <p className="text-gray-600 mb-6">這位營養師的頁面可能已被移除</p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
                            >
                                <i className="fas fa-home"></i>
                                返回首頁
                            </Link>
                        </div>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }

    // Separate highlighted credentials from regular ones
    const highlightedCreds = nutritionist.credentials.filter((c) => c.highlight);
    const regularCreds = nutritionist.credentials.filter((c) => !c.highlight);

    return (
        <>
            <SEO
                title={nutritionist.name}
                description={nutritionist.shortBio}
                type="profile"
                image={nutritionist.image}
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Profile Card */}
                        <Card className="mb-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Avatar */}
                                <div className="md:col-span-1 flex flex-col items-center">
                                    <div
                                        className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl mb-4 cursor-zoom-in overflow-hidden"
                                        onClick={() => setIsZoomed(true)}
                                    >
                                        {nutritionist.image ? (
                                            <img
                                                src={nutritionist.image}
                                                alt={nutritionist.name}
                                                className="w-full h-full object-cover rounded-2xl transition-transform hover:scale-105"
                                            />
                                        ) : (
                                            <i className="fas fa-user-tie text-6xl text-white/80"></i>
                                        )}
                                    </div>

                                    {/* Lightbox */}
                                    {isZoomed && nutritionist.image && (
                                        <div
                                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out animate-fade-in"
                                            onClick={() => setIsZoomed(false)}
                                        >
                                            <div className="relative max-w-4xl max-h-[90vh]">
                                                <img
                                                    src={nutritionist.image}
                                                    alt={nutritionist.name}
                                                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                                                />
                                                <button
                                                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsZoomed(false);
                                                    }}
                                                >
                                                    <i className="fas fa-times text-2xl"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Social Links */}
                                    {nutritionist.instagram && (
                                        <a
                                            href={nutritionist.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition mt-2"
                                        >
                                            <i className="fab fa-instagram text-xl"></i>
                                            追蹤 Instagram
                                        </a>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="md:col-span-2">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        {nutritionist.name}
                                    </h1>
                                    <p className="text-emerald-600 font-medium mb-4">
                                        {nutritionist.title}
                                    </p>

                                    {/* Highlighted Credentials - Prominent Display */}
                                    {highlightedCreds.length > 0 && (
                                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 mb-6">
                                            <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <i className="fas fa-award"></i>
                                                專業認證資格
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {highlightedCreds.map((cred, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white rounded-lg p-3 border border-amber-100 shadow-sm"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <i className={`fas ${cred.icon} text-amber-600`}></i>
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-gray-800 text-sm">{cred.label}</p>
                                                                {cred.description && (
                                                                    <p className="text-xs text-gray-500 mt-0.5">{cred.description}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Regular Credentials */}
                                    {regularCreds.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {regularCreds.map((cred, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5"
                                                    title={cred.description}
                                                >
                                                    <i className={`fas ${cred.icon}`}></i>
                                                    {cred.label}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Specialties */}
                                    <div className="mb-6">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                            專長領域
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {nutritionist.specialties.map((specialty) => (
                                                <span
                                                    key={specialty}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* CTA - Centered in Card */}
                            <div className="flex justify-center mt-10 pt-8 border-t border-gray-100">
                                <Button
                                    variant="cta"
                                    className="w-full sm:w-auto px-12 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                                    onClick={() => window.location.href = CTA_LINK}
                                >
                                    <i className="fas fa-calendar-check mr-2"></i>
                                    立即預約
                                </Button>
                            </div>
                        </Card>

                        {/* Bio Section */}
                        <Card className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                <i className="fas fa-user-circle text-emerald-500 mr-2"></i>
                                關於我
                            </h2>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {nutritionist.fullBio}
                            </div>
                        </Card>

                        {/* Quote */}
                        {nutritionist.quote && (
                            <div className="bg-emerald-50 rounded-2xl p-8 mb-8 text-center">
                                <i className="fas fa-quote-left text-3xl text-emerald-300 mb-4"></i>
                                <blockquote className="text-xl text-gray-700 italic mb-4">
                                    {nutritionist.quote}
                                </blockquote>
                                <p className="text-emerald-600 font-medium">— {nutritionist.name}</p>
                            </div>
                        )}

                        {/* Public Menus */}
                        {nutritionist.publicMenus && nutritionist.publicMenus.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    <i className="fas fa-utensils text-emerald-500 mr-2"></i>
                                    推薦菜單範例
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {nutritionist.publicMenus.map((menu) => (
                                        <Card key={menu.id} className="overflow-hidden">
                                            {/* Menu Header */}
                                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 -mx-6 -mt-6 px-6 py-4 mb-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                                                            {menu.targetAudience}
                                                        </span>
                                                        <h3 className="text-xl font-bold text-white mt-2">{menu.name}</h3>
                                                    </div>
                                                    <div className="text-right text-white">
                                                        <p className="text-2xl font-bold">{menu.calories}</p>
                                                        <p className="text-xs text-emerald-100">kcal / 天</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm mb-4">{menu.description}</p>

                                            {/* Meals */}
                                            <div className="space-y-3">
                                                {menu.meals.map((meal, index) => (
                                                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className={`w-6 h-6 rounded flex items-center justify-center text-xs ${meal.type === '早餐' ? 'bg-yellow-100 text-yellow-600' :
                                                                meal.type === '午餐' ? 'bg-orange-100 text-orange-600' :
                                                                    meal.type === '晚餐' ? 'bg-purple-100 text-purple-600' :
                                                                        'bg-blue-100 text-blue-600'
                                                                }`}>
                                                                <i className={`fas ${meal.type === '早餐' ? 'fa-sun' :
                                                                    meal.type === '午餐' ? 'fa-cloud-sun' :
                                                                        meal.type === '晚餐' ? 'fa-moon' :
                                                                            'fa-cookie-bite'
                                                                    }`}></i>
                                                            </span>
                                                            <span className="font-medium text-gray-800 text-sm">{meal.type}</span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {meal.dishes.map((dish, i) => (
                                                                <span key={i} className="bg-white text-gray-600 text-xs px-2 py-1 rounded border border-gray-200">
                                                                    {dish}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100">
                                                {menu.tags.map((tag) => (
                                                    <span key={tag} className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Articles by this nutritionist */}
                        {articles.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    <i className="fas fa-newspaper text-emerald-500 mr-2"></i>
                                    {nutritionist.name} 的文章
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {articles.map((article) => (
                                        <Link key={article.slug} to={`/articles/${article.slug}`}>
                                            <Card hover className="h-full">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                                                        {article.category}
                                                    </span>
                                                    <span className="text-gray-400 text-xs">
                                                        {article.readTime} 分鐘
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-gray-800 mb-2">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-gray-600">{article.excerpt}</p>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
