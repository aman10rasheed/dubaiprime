'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import type { MarketInsight } from '@/types';

interface MarketPulseProps {
    insights: MarketInsight[];
}

const iconMap: Record<string, React.ReactNode> = {
    'trending-up': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    ),
    'chart-line': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
    ),
    'building': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    'dollar-sign': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

export default function MarketPulse({ insights }: MarketPulseProps) {
    return (
        <section className="section-padding bg-accent">
            <div className="container-luxury">
                <SectionHeader
                    label="Market Intelligence"
                    align='left'
                    title="Market Pulse"
                    subtitle="Real-time insights into Dubai's dynamic property market, powered by comprehensive data analysis."
                />

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {insights.map((insight) => (
                        <StaggerItem key={insight.id}>
                            <motion.div
                                className="bg-white p-8 lg:p-10 h-full border border-transparent hover:border-primary/10 transition-all duration-300 shadow-premium hover:shadow-premium-hover"
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/5 flex items-center justify-center mb-6 lg:mb-8 text-primary">
                                    {iconMap[insight.icon] || iconMap['trending-up']}
                                </div>

                                {/* Value */}
                                <p className="font-heading text-3xl lg:text-4xl text-text-main mb-2 lg:mb-3">
                                    {insight.value}
                                </p>

                                {/* Title */}
                                <h3 className="font-body font-semibold text-text-main mb-3 lg:mb-4 text-base lg:text-lg">
                                    {insight.title}
                                </h3>

                                {/* Change */}
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className={`flex items-center gap-1 text-sm font-body font-semibold ${insight.changeType === 'increase'
                                        ? 'text-emerald-600'
                                        : insight.changeType === 'decrease'
                                            ? 'text-red-500'
                                            : 'text-text-muted'
                                        }`}>
                                        {insight.changeType === 'increase' && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                        )}
                                        {insight.changeType === 'decrease' && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        )}
                                        {insight.change > 0 ? '+' : ''}{insight.change}%
                                    </span>
                                    <span className="text-sm font-body text-text-muted">
                                        {insight.period}
                                    </span>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* CTA */}
                <AnimatedSection animation="fadeUp" delay={0.4}>
                    <div className="mt-12 lg:mt-16 text-center">
                        <motion.a
                            href="/insights"
                            className="inline-flex items-center gap-3 text-primary font-body font-semibold hover:text-primary-light transition-colors group"
                            whileHover={{ x: 4 }}
                        >
                            View Full Market Report
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
