'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-primary overflow-hidden">
            <div className="container-luxury">
                <SectionHeader
                    label="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Hear from those who've found their dream homes with Dubai Prime Estate."
                    light
                />

                <div className="max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <AnimatedSection animation="fadeIn">
                        <div className="text-center mb-8 lg:mb-10">
                            <svg className="w-14 h-14 lg:w-16 lg:h-16 mx-auto text-secondary/30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                    </AnimatedSection>

                    {/* Testimonial Content */}
                    <div className="relative min-h-[280px] lg:min-h-[320px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center px-4"
                            >
                                {/* Rating */}
                                <div className="flex justify-center gap-1.5 mb-6 lg:mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 lg:w-6 lg:h-6 ${i < testimonials[activeIndex].rating
                                                ? 'text-secondary'
                                                : 'text-white/20'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-8 lg:mb-10">
                                    &ldquo;{testimonials[activeIndex].content}&rdquo;
                                </blockquote>

                                {/* Client Info */}
                                <div>
                                    <p className="font-heading text-lg lg:text-xl text-secondary mb-1">
                                        {testimonials[activeIndex].clientName}
                                    </p>
                                    {testimonials[activeIndex].clientTitle && (
                                        <p className="font-body text-white/60 text-sm lg:text-base">
                                            {testimonials[activeIndex].clientTitle}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 lg:gap-6 mt-10 lg:mt-12">
                        <motion.button
                            onClick={prevTestimonial}
                            className="w-11 h-11 lg:w-12 lg:h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2.5">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2.5 transition-all duration-300 ${index === activeIndex
                                        ? 'bg-secondary w-7'
                                        : 'bg-white/30 hover:bg-white/50 w-2.5'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            className="w-11 h-11 lg:w-12 lg:h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
