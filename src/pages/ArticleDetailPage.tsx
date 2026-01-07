import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { SEO, MarkdownRenderer } from '../components/ui';
import { getArticleBySlug, getNutritionistById } from '../data';
import { useGamification } from '../hooks/useGamification';

export function ArticleDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const { gainXP } = useGamification();
    const article = slug ? getArticleBySlug(slug) : undefined;
    const author = article ? getNutritionistById(article.authorId) : undefined;

    useEffect(() => {
        if (!article || !slug) return;

        const handleScroll = () => {
            // Check if user has scrolled to the bottom (with some buffer)
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            // Trigger when user is within 100px of the bottom
            if (scrollTop + windowHeight >= fullHeight - 100) {
                gainXP('READ_ARTICLE', slug);
                // Remove listener once triggered (optional optimization, but gainXP handles duplicates)
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [article, slug, gainXP]);

    if (!article) {
        return (
            <>
                <SEO title="找不到文章" />
                <div className="min-h-screen bg-slate-50">
                    <Header />
                    <main className="pt-24 pb-16">
                        <div className="max-w-3xl mx-auto px-4 text-center">
                            <i className="fas fa-file-circle-question text-6xl text-gray-300 mb-4"></i>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">找不到文章</h1>
                            <p className="text-gray-600 mb-6">這篇文章可能已被移除或網址錯誤</p>
                            <Link
                                to="/articles"
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
                            >
                                <i className="fas fa-arrow-left"></i>
                                返回文章列表
                            </Link>
                        </div>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <SEO
                title={article.title}
                description={article.excerpt}
                type="article"
                publishedAt={article.publishedAt}
                author={author?.name}
                image={article.coverImage}
            />
            <div className="min-h-screen bg-slate-50">
                <Header />
                <main className="pt-24 pb-16">
                    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Link */}
                        <Link
                            to="/articles"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition"
                        >
                            <i className="fas fa-arrow-left"></i>
                            返回文章列表
                        </Link>

                        {/* Cover Image */}
                        <div className="h-64 sm:h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-8 flex items-center justify-center">
                            {article.coverImage ? (
                                <img
                                    src={article.coverImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <i className="fas fa-book-open text-6xl text-white/60"></i>
                            )}
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                {article.category}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                <i className="fas fa-clock"></i>
                                {article.readTime} 分鐘閱讀
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                <i className="fas fa-calendar"></i>
                                {article.publishedAt}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {article.title}
                        </h1>

                        {/* Author Card */}
                        {author && (
                            <Link
                                to={`/nutritionist/${author.id}`}
                                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 hover:shadow-md transition"
                            >
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                                    {author.image ? (
                                        <img
                                            src={author.image}
                                            alt={author.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <i className="fas fa-user text-emerald-600 text-xl"></i>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800">{author.name}</p>
                                    <p className="text-sm text-gray-500">{author.title}</p>
                                </div>
                                <i className="fas fa-chevron-right text-gray-300"></i>
                            </Link>
                        )}

                        {/* Content - Markdown Rendered */}
                        <MarkdownRenderer content={article.content} />

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
