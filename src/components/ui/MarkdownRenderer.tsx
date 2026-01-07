import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
    /** Markdown content string */
    content: string;
    /** Additional CSS classes */
    className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
    return (
        <div className={`prose prose-lg prose-emerald max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Headings
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">{children}</h4>
                    ),

                    // Paragraphs
                    p: ({ children }) => (
                        <p className="text-gray-700 my-4 leading-relaxed">{children}</p>
                    ),

                    // Lists
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-inside text-gray-700 my-4 space-y-2">{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="text-gray-700">{children}</li>
                    ),

                    // Strong/Bold
                    strong: ({ children }) => (
                        <strong className="font-bold text-gray-900">{children}</strong>
                    ),

                    // Emphasis/Italic
                    em: ({ children }) => (
                        <em className="italic text-gray-700">{children}</em>
                    ),

                    // Links
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-emerald-600 hover:text-emerald-700 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),

                    // Blockquote
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic text-gray-600 bg-emerald-50 py-2 rounded-r-lg">
                            {children}
                        </blockquote>
                    ),

                    // Code blocks
                    code: ({ className, children }) => {
                        const isInline = !className;
                        if (isInline) {
                            return (
                                <code className="bg-gray-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono">
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto my-4">
                                {children}
                            </code>
                        );
                    },

                    // Horizontal rule
                    hr: () => <hr className="border-gray-200 my-8" />,

                    // Tables (GFM)
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full border border-gray-200 rounded-lg">
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead className="bg-gray-50">{children}</thead>
                    ),
                    th: ({ children }) => (
                        <th className="px-4 py-2 text-left font-bold text-gray-800 border-b border-gray-200">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="px-4 py-2 text-gray-700 border-b border-gray-100">
                            {children}
                        </td>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
