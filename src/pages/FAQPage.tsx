import { useState } from 'react';
import { Header, Footer } from '../components/layout';
import { Card, Button, SEO } from '../components/ui';
import { getAllFAQs } from '../data';
import { CTA_LINK } from '../constants';

export function FAQPage() {
    const faqs = getAllFAQs();
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    // Group FAQs by category
    const categories = [...new Set(faqs.map((f) => f.category))];

    return (
        <>
            <SEO
                title="常見問題"
                description="NutriPlan 常見問題解答：服務流程、方案差異、付款方式等，找不到答案歡迎直接聯繫我們。"
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <i className="fas fa-circle-question mr-2"></i>
                                常見問題
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                有任何疑問嗎？
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                這裡整理了大家最常問的問題，找不到答案的話歡迎直接聯繫我們
                            </p>
                        </div>

                        {/* FAQ Sections */}
                        {categories.map((category) => (
                            <div key={category} className="mb-10">
                                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                    {category}
                                </h2>
                                <Card padding="sm">
                                    <div className="divide-y divide-gray-100">
                                        {faqs
                                            .filter((f) => f.category === category)
                                            .map((faq) => (
                                                <div key={faq.id}>
                                                    <button
                                                        onClick={() => toggleFAQ(faq.id)}
                                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                                                    >
                                                        <span className="font-medium text-gray-800 pr-4">
                                                            {faq.question}
                                                        </span>
                                                        <i
                                                            className={`fas fa-chevron-down text-gray-400 transition-transform ${openId === faq.id ? 'rotate-180' : ''
                                                                }`}
                                                        ></i>
                                                    </button>
                                                    {openId === faq.id && (
                                                        <div className="px-4 pb-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                                            {faq.answer}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                </Card>
                            </div>
                        ))}

                        {/* CTA Section */}
                        <Card className="text-center bg-emerald-50 border-emerald-100 mt-12">
                            <i className="fas fa-comments text-4xl text-emerald-500 mb-4"></i>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                還有其他問題？
                            </h3>
                            <p className="text-gray-600 mb-6">
                                歡迎直接預約諮詢，營養師會親自為你解答
                            </p>
                            <Button
                                variant="cta"
                                onClick={() => window.open(CTA_LINK, '_blank')}
                            >
                                <i className="fas fa-calendar-check"></i>
                                預約諮詢
                            </Button>
                        </Card>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
