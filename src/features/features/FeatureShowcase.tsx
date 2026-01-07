import { Card } from '../../components/ui';
import { FEATURES } from '../../constants';

export function FeatureShowcase() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        為什麼選擇我們
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        讓飲食規劃變得<span className="text-emerald-600">簡單又美味</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        不再是無聊的表格和複雜的營養計算，NutriPlan 讓健康飲食成為一種享受
                    </p>
                </div>

                {/* Comparison Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Traditional Way */}
                    <div className="relative">
                        <div className="absolute -top-3 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            傳統方式
                        </div>
                        <Card className="bg-gray-50 border-gray-200 h-full">
                            <div className="space-y-4 pt-4">
                                {/* Mock Traditional Table */}
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-100 text-gray-600">
                                            <tr>
                                                <th className="p-2 text-left">餐次</th>
                                                <th className="p-2 text-left">食物</th>
                                                <th className="p-2 text-right">熱量</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-500">
                                            <tr className="border-t">
                                                <td className="p-2">早餐</td>
                                                <td className="p-2">燕麥50g+牛奶200ml</td>
                                                <td className="p-2 text-right">280</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="p-2">午餐</td>
                                                <td className="p-2">雞胸肉100g+糙米飯...</td>
                                                <td className="p-2 text-right">450</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="p-2">晚餐</td>
                                                <td className="p-2">魚肉80g+地瓜100g...</td>
                                                <td className="p-2 text-right">380</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <i className="fas fa-times-circle text-red-400"></i>
                                    <span className="text-sm">密密麻麻看不清</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <i className="fas fa-times-circle text-red-400"></i>
                                    <span className="text-sm">需要自己計算份量</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <i className="fas fa-times-circle text-red-400"></i>
                                    <span className="text-sm">手機上難以閱讀</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* NutriPlan Way */}
                    <div className="relative">
                        <div className="absolute -top-3 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            NutriPlan 方式
                        </div>
                        <Card className="bg-emerald-50 border-emerald-200 h-full">
                            <div className="space-y-4 pt-4">
                                {/* Mock NutriPlan Card */}
                                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-emerald-100 text-xs">早餐</p>
                                            <p className="font-bold">元氣滿滿</p>
                                        </div>
                                        <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                                            280 kcal
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">燕麥</span>
                                        <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">牛奶</span>
                                        <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">香蕉</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <i className="fas fa-check-circle text-emerald-500"></i>
                                    <span className="text-sm">精美視覺設計</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <i className="fas fa-check-circle text-emerald-500"></i>
                                    <span className="text-sm">自動計算好營養素</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <i className="fas fa-check-circle text-emerald-500"></i>
                                    <span className="text-sm">手機一滑就能看</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-3 gap-8">
                    {FEATURES.map((feature) => (
                        <Card key={feature.title} hover className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <i className={`fas ${feature.icon} text-2xl text-emerald-600`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
