import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button content */
    children: ReactNode;
    /** Button style variant */
    variant?: 'primary' | 'secondary' | 'cta' | 'outline';
    /** Button size */
    size?: 'sm' | 'md' | 'lg';
    /** Full width button */
    fullWidth?: boolean;
}

const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900',
    cta: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-xl hover:shadow-2xl font-bold',
    outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50',
};

const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        inline-flex items-center justify-center gap-2
        rounded-xl font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
