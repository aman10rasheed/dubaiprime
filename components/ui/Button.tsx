'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'sand';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    type?: 'button' | 'submit' | 'reset';
}

const variants: Record<ButtonVariant, string> = {
    primary:
        'bg-primary text-white hover:bg-primary-light border-transparent',
    secondary:
        'bg-secondary text-text-main hover:bg-secondary-light border-transparent',
    outline:
        'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
    ghost:
        'bg-transparent text-primary hover:bg-primary/10 border-transparent',
    sand:
        'bg-sand-400 text-white hover:bg-sand-500 border-transparent',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
    xl: 'px-12 py-5 text-xl',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            href,
            isLoading,
            leftIcon,
            rightIcon,
            fullWidth,
            children,
            className = '',
            disabled,
            onClick,
            type = 'button',
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-body font-semibold tracking-wide
      border-2 transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
    `;

        const combinedStyles = `
      ${baseStyles}
      ${variants[variant]}
      ${sizes[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

        const content = (
            <>
                {isLoading && (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {leftIcon && !isLoading && <span>{leftIcon}</span>}
                {children}
                {rightIcon && <span>{rightIcon}</span>}
            </>
        );

        if (href) {
            return (
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={fullWidth ? 'w-full' : 'inline-block'}
                >
                    <Link
                        href={href}
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        className={combinedStyles}
                        onClick={onClick}
                    >
                        {content}
                    </Link>
                </motion.div>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                type={type}
                className={combinedStyles}
                whileHover={{ scale: disabled ? 1 : 1.02, boxShadow: disabled ? 'none' : '0 4px 20px rgba(6, 78, 59, 0.3)' }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                disabled={disabled || isLoading}
                onClick={onClick}
            >
                {content}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
