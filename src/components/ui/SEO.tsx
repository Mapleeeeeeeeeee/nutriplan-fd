import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../constants';

interface SEOProps {
    /** Page title (will be appended with site name) */
    title?: string;
    /** Page description for search engines */
    description?: string;
    /** Open Graph image URL */
    image?: string;
    /** Canonical URL */
    url?: string;
    /** Page type (website, article, profile) */
    type?: 'website' | 'article' | 'profile';
    /** Article publish date (for article type) */
    publishedAt?: string;
    /** Article author name (for article type) */
    author?: string;
}

export function SEO({
    title,
    description = SITE_CONFIG.tagline,
    image,
    url,
    type = 'website',
    publishedAt,
    author,
}: SEOProps) {
    const fullTitle = title
        ? `${title} | ${SITE_CONFIG.name}`
        : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;

    return (
        <Helmet>
            {/* Basic Meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {url && <meta property="og:url" content={url} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:site_name" content={SITE_CONFIG.name} />
            <meta property="og:locale" content="zh_TW" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Article specific */}
            {type === 'article' && publishedAt && (
                <meta property="article:published_time" content={publishedAt} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}

            {/* Canonical URL */}
            {url && <link rel="canonical" href={url} />}
        </Helmet>
    );
}
