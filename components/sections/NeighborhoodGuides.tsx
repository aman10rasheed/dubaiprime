'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import type { Neighborhood } from '@/types';

interface NeighborhoodGuidesProps {
    neighborhoods: Neighborhood[];
}

export default function NeighborhoodGuides({ neighborhoods }: NeighborhoodGuidesProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollTo = (index: number) => {
        setActiveIndex(index);
        if (scrollRef.current) {
            const card = scrollRef.current.children[index] as HTMLElement;
            card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    };

    return (
        <section className="section-padding bg-primary overflow-hidden">
            <div className="container-luxury">
                <SectionHeader
                    label="Discover Dubai"
                    title="Neighborhood Guides"
                    subtitle="Explore the most sought-after communities and find your perfect location."
                    light
                />

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:-mx-8 lg:px-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {neighborhoods.map((neighborhood, index) => (
                        <motion.article
                            key={neighborhood.id}
                            className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[450px] snap-center group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setActiveIndex(index)}
                        >
                            <Link href={`/neighborhoods/${neighborhood.slug}`}>
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={neighborhood.featuredImage.url}
                                        alt={neighborhood.featuredImage.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                                            {neighborhood.name}
                                        </h3>
                                        <p className="font-body text-white/70 mb-5 lg:mb-6 line-clamp-2 text-sm lg:text-base">
                                            {neighborhood.shortDescription}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 lg:gap-6 mb-5 lg:mb-6">
                                            <div>
                                                <span className="block font-heading text-lg lg:text-xl text-secondary">
                                                    AED {neighborhood.averagePrice.toLocaleString()}
                                                </span>
                                                <span className="text-xs font-body text-white/50 uppercase tracking-wide">
                                                    Avg. per Sq.Ft
                                                </span>
                                            </div>
                                            <div className="w-px h-10 bg-white/20" />
                                            <div>
                                                <span className="block font-heading text-lg lg:text-xl text-secondary">
                                                    +{neighborhood.priceGrowth}%
                                                </span>
                                                <span className="text-xs font-body text-white/50 uppercase tracking-wide">
                                                    YoY Growth
                                                </span>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2">
                                            {neighborhood.highlights.slice(0, 3).map((highlight, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white/10 text-white text-xs font-body"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <motion.span
                                            className="flex items-center gap-2 px-4 py-2 bg-white text-text-main text-sm font-body font-medium"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Explore
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </motion.span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* Navigation Dots */}
                <AnimatedSection animation="fadeIn" delay={0.3}>
                    <div className="flex justify-center gap-3 mt-6 lg:mt-8">
                        {neighborhoods.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-3 transition-all duration-300 ${index === activeIndex
                                    ? 'bg-secondary w-8'
                                    : 'bg-white/30 hover:bg-white/50 w-3'
                                    }`}
                            />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
