'use client';

import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    light?: boolean;
}

export default function SectionHeader({
    label,
    title,
    subtitle,
    align = 'center',
    light = false,
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <div className={`max-w-3xl mb-16 ${alignmentClasses[align]}`}>
            {label && (
                <AnimatedSection animation="fadeUp" delay={0}>
                    <span
                        className={`inline-block text-sm font-body font-semibold tracking-[0.2em] uppercase mb-4 ${light ? 'text-sand-300' : 'text-secondary'
                            }`}
                    >
                        {label}
                    </span>
                </AnimatedSection>
            )}

            <AnimatedSection animation="fadeUp" delay={0.1}>
                <h2
                    className={`font-heading font-semibold leading-tight ${light ? 'text-white' : 'text-text-main'
                        }`}
                >
                    {title}
                </h2>
            </AnimatedSection>

            {subtitle && (
                <AnimatedSection animation="fadeUp" delay={0.2}>
                    <p
                        className={`mt-4 text-lg font-body leading-relaxed ${light ? 'text-white/80' : 'text-text-muted'
                            }`}
                    >
                        {subtitle}
                    </p>
                </AnimatedSection>
            )}
        </div>
    );
}

