import { useState, useEffect } from 'react';
import { Button, Card } from '../../components/ui';
import { PRICING_PLANS, CTA_LINK } from '../../constants';

type Plan = typeof PRICING_PLANS[number];

export function PricingTable() {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedPlan) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedPlan]);

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <i className="fas fa-tag mr-2"></i>
                        方案價格
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        選擇最適合你的<span className="text-emerald-600">健康計畫</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        從入門診斷到專家陪跑，我們提供不同深度的服務滿足你的需求
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PRICING_PLANS.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`relative overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl ${plan.popular
                                ? 'border-2 border-emerald-500 shadow-emerald-100 transform md:scale-105'
                                : 'border border-gray-100'
                                }`}
                            padding="lg"
                            onClick={() => setSelectedPlan(plan)}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className={`absolute top-0 right-0 px-4 py-1 text-xs font-bold rounded-bl-lg ${plan.popular
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}>
                                    {plan.popular && <i className="fas fa-star mr-1"></i>}
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6 pt-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-1">{plan.duration}</p>
                                <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-sm text-gray-500">NT$</span>
                                    <span className="text-5xl font-bold text-gray-900">
                                        {plan.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {/* Target Audience */}
                            {plan.targetAudience && (
                                <div className="mb-4 pb-4 border-b border-gray-100">
                                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-center">
                                        <span className="text-xs text-gray-500 block mb-1">適合對象</span>
                                        <span className="text-sm text-gray-700 font-medium">
                                            {plan.targetAudience}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Features List */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <i className="fas fa-check text-emerald-600 text-xs"></i>
                                        </div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* View Details Button (Visual Cue) */}
                            <div className="text-center text-emerald-600 text-sm font-medium mb-4 group-hover:underline">
                                查看詳細內容 <i className="fas fa-arrow-right ml-1"></i>
                            </div>

                            {/* CTA Button */}
                            <Button
                                variant={plan.popular ? 'cta' : 'primary'}
                                fullWidth
                                size="lg"
                                onClick={(e) => {
                                    e.stopPropagation(); // Don't trigger card click
                                    window.open(CTA_LINK, '_blank');
                                }}
                            >
                                <i className="fas fa-calendar-check mr-2"></i>
                                立即預約
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 bg-gray-50 px-6 py-3 rounded-full">
                        <span className="flex items-center gap-2">
                            <i className="fas fa-shield-alt text-emerald-500"></i>
                            安全付款
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="fas fa-headset text-emerald-500"></i>
                            專人客服
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="fas fa-undo text-emerald-500"></i>
                            滿意保證
                        </span>
                    </div>
                </div>

                {/* Plan Detail Modal */}
                {selectedPlan && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedPlan(null)}></div>
                        <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">

                            {/* Left Column (Summary) - Only on Desktop */}
                            <div className="hidden md:flex md:w-1/3 bg-gray-50 p-8 flex-col justify-between border-r border-gray-100">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPlan.name}</h3>
                                    <div className="text-3xl font-bold text-emerald-600 mb-4">
                                        NT$ {selectedPlan.price.toLocaleString()}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white p-3 rounded-xl shadow-sm">
                                            <div className="text-xs text-gray-500 mb-1">適合對象</div>
                                            <div className="text-sm font-medium text-gray-800">{selectedPlan.targetAudience}</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm">
                                            <div className="text-xs text-gray-500 mb-1">執行時間</div>
                                            <div className="text-sm font-medium text-gray-800">{selectedPlan.duration}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Button fullWidth variant="cta" onClick={() => window.open(CTA_LINK, '_blank')}>
                                        立即預約
                                    </Button>
                                    <button
                                        onClick={() => setSelectedPlan(null)}
                                        className="w-full mt-3 py-2 text-gray-500 text-sm hover:text-gray-800"
                                    >
                                        關閉視窗
                                    </button>
                                </div>
                            </div>

                            {/* Right Column (Content) - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                {/* Mobile Header */}
                                <div className="md:hidden mb-6 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{selectedPlan.name}</h3>
                                        <div className="text-xl font-bold text-emerald-600">NT$ {selectedPlan.price.toLocaleString()}</div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPlan(null)}
                                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>

                                <div className="prose prose-emerald max-w-none">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                                            <i className="fas fa-info-circle text-emerald-500"></i>
                                            方案介紹
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedPlan.details?.longDescription || selectedPlan.description}
                                        </p>
                                    </div>

                                    {selectedPlan.details && (
                                        <>
                                            <div className="mb-8 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                                                    <i className="fas fa-gift text-emerald-500"></i>
                                                    包含內容
                                                </h4>
                                                <ul className="space-y-2 mb-0">
                                                    {selectedPlan.details.includes.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                            <i className="fas fa-check text-emerald-500 mt-1"></i>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mb-8">
                                                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                                                    <i className="fas fa-list-ol text-emerald-500"></i>
                                                    執行流程
                                                </h4>
                                                <div className="space-y-4">
                                                    {selectedPlan.details.process.map((step, idx) => (
                                                        <div key={idx} className="flex gap-4">
                                                            <div className="flex flex-col items-center">
                                                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                                                                    {idx + 1}
                                                                </div>
                                                                {idx !== selectedPlan.details!.process.length - 1 && (
                                                                    <div className="w-0.5 bg-gray-200 flex-1 my-1"></div>
                                                                )}
                                                            </div>
                                                            <div className="pt-1 pb-4">
                                                                <p className="font-medium text-gray-800">{step}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                                                    <i className="fas fa-box-open text-emerald-500"></i>
                                                    交付成果
                                                </h4>
                                                <ul className="grid sm:grid-cols-2 gap-3">
                                                    {selectedPlan.details.deliverables.map((item, idx) => (
                                                        <li key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-600 border border-gray-100 flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Mobile CTA - Sticky Bottom or just inline */}
                                <div className="md:hidden mt-8 pt-6 border-t border-gray-100">
                                    <Button fullWidth variant="cta" onClick={() => window.open(CTA_LINK, '_blank')}>
                                        立即預約
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
