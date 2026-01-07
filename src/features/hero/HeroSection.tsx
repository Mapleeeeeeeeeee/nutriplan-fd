import { Button } from '../../components/ui';
import { SITE_CONFIG, CTA_LINK } from '../../constants';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 -z-10"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <i className="fas fa-user-nurse"></i>
                            專業營養師規劃
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            {SITE_CONFIG.heroHeadline}
                            <span className="block text-emerald-600 mt-2">
                                {SITE_CONFIG.heroSubtitle}
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            告別千篇一律的減脂餐，讓專業營養師為你打造美味又健康的個人化菜單。
                            <strong className="text-gray-800">照著吃就好，不用算熱量。</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button variant="cta" size="lg" onClick={() => window.location.href = CTA_LINK}>
                                <i className="fas fa-calendar-check"></i>
                                立即預約諮詢
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                                <i className="fas fa-arrow-down"></i>
                                了解更多
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-emerald-500"></i>
                                <span>專業認證營養師</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-emerald-500"></i>
                                <span>個人化定制</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image / Menu Card Preview */}
                    <div className="relative">
                        <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            {/* Mock Menu Card */}
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-emerald-100 text-sm">今日菜單</p>
                                        <h3 className="text-2xl font-bold">Day 1</h3>
                                    </div>
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <i className="fas fa-utensils text-2xl"></i>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-white/10 rounded-xl p-3">
                                        <p className="text-xs text-emerald-100">熱量</p>
                                        <p className="text-lg font-bold">1,450</p>
                                        <p className="text-xs text-emerald-200">kcal</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-3">
                                        <p className="text-xs text-emerald-100">蛋白質</p>
                                        <p className="text-lg font-bold">95</p>
                                        <p className="text-xs text-emerald-200">g</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-3">
                                        <p className="text-xs text-emerald-100">碳水</p>
                                        <p className="text-lg font-bold">140</p>
                                        <p className="text-xs text-emerald-200">g</p>
                                    </div>
                                </div>
                            </div>

                            {/* Meal Preview */}
                            <div className="space-y-3">
                                {['早餐', '午餐', '晚餐'].map((meal, index) => (
                                    <div key={meal} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${index === 0 ? 'bg-yellow-100 text-yellow-600' :
                                            index === 1 ? 'bg-orange-100 text-orange-600' :
                                                'bg-purple-100 text-purple-600'
                                            }`}>
                                            <i className={`fas ${index === 0 ? 'fa-sun' :
                                                index === 1 ? 'fa-cloud-sun' :
                                                    'fa-moon'
                                                }`}></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{meal}</p>
                                            <p className="text-sm text-gray-500">查看詳細餐點...</p>
                                        </div>
                                        <i className="fas fa-chevron-right text-gray-300"></i>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-12">
                            <i className="fas fa-star mr-1"></i>
                            精美圖卡設計
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
