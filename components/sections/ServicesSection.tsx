'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import type { Service } from '@/types';

interface ServicesSectionProps {
    services: Service[];
}

const iconComponents: Record<string, React.ReactNode> = {
    key: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
    ),
    home: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    users: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    building: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    settings: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    chart: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ),
};

export default function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-luxury">
                <SectionHeader
                    label="What We Offer"
                    title="Our Services"
                    subtitle="Comprehensive real estate solutions tailored to your unique needs."
                />

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <StaggerItem key={service.id}>
                            <Link href={`/services/${service.slug}`}>
                                <motion.article
                                    className="group relative h-full bg-accent overflow-hidden"
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Background Image on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Image
                                            src={service.featuredImage.url}
                                            alt={service.featuredImage.alt}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/90" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-10 h-full flex flex-col min-h-[400px]">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-primary/5 group-hover:bg-white/10 flex items-center justify-center mb-8 text-primary group-hover:text-white transition-colors">
                                            {iconComponents[service.icon] || iconComponents['home']}
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-heading text-2xl text-text-main group-hover:text-white mb-4 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-body text-text-muted group-hover:text-white/80 mb-8 flex-grow transition-colors leading-relaxed">
                                            {service.shortDescription}
                                        </p>

                                        {/* Features Preview */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-3 text-sm font-body text-text-muted group-hover:text-white/70 transition-colors"
                                                >
                                                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Link */}
                                        <span className="inline-flex items-center gap-2 text-primary group-hover:text-secondary font-body font-semibold transition-colors">
                                            Learn More
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </motion.article>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
