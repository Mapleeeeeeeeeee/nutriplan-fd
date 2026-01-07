import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { Card, SEO } from '../components/ui';
import { getAllArticles, getNutritionistById } from '../data';

export function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <>
            <SEO
                title="精選文章"
                description="由專業營養師撰寫的營養知識與實用技巧，幫助你建立正確的飲食觀念。"
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <i className="fas fa-newspaper mr-2"></i>
                                精選文章
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                營養知識與實用技巧
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                由專業營養師撰寫，幫助你建立正確的飲食觀念
                            </p>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => {
                                const author = getNutritionistById(article.authorId);
                                return (
                                    <Link key={article.slug} to={`/articles/${article.slug}`}>
                                        <Card hover className="h-full flex flex-col">
                                            {/* Cover Image */}
                                            <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl mb-4 flex items-center justify-center">
                                                {article.coverImage ? (
                                                    <img
                                                        src={article.coverImage}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover rounded-xl"
                                                    />
                                                ) : (
                                                    <i className="fas fa-book-open text-4xl text-white/60"></i>
                                                )}
                                            </div>

                                            {/* Category & Read Time */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-400 text-xs flex items-center gap-1">
                                                    <i className="fas fa-clock"></i>
                                                    {article.readTime} 分鐘
                                                </span>
                                            </div>

                                            {/* Title & Excerpt */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                                {article.title}
                                            </h2>
                                            <p className="text-gray-600 text-sm flex-1">
                                                {article.excerpt}
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                                                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-user text-emerald-600 text-xs"></i>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-800">
                                                        {author?.name || '營養師'}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {article.publishedAt}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
