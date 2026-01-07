import type { ReactNode, MouseEventHandler } from 'react';

interface CardProps {
    /** Card content */
    children: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Card padding size */
    padding?: 'sm' | 'md' | 'lg';
    /** Whether to show hover effect */
    hover?: boolean;
    /** Click handler */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

export function Card({
    children,
    className = '',
    padding = 'md',
    hover = false,
    onClick,
}: CardProps) {
    return (
        <div
            className={`
        bg-white rounded-2xl shadow-lg border border-gray-100
        ${paddingStyles[padding]}
        ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
