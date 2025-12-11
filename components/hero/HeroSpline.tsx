'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => null,
});

export default function HeroSpline() {
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

    return (
        <section className="relative h-screen min-h-[750px] lg:min-h-[850px] overflow-hidden">
            {/* Spline 3D Background */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={null}>
                    <Spline
                        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                        onLoad={() => setIsSplineLoaded(true)}
                    />
                </Suspense>

                {/* Fallback gradient background */}
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${isSplineLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{
                        background: 'linear-gradient(135deg, #064E3B 0%, #053f30 50%, #022c22 100%)',
                    }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80 z-10" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center container-luxury pt-20 lg:pt-24">
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-flex items-center gap-3 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase">
                            <span className="w-8 h-px bg-secondary" />
                            Dubai&apos;s Premier Real Estate
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="font-heading text-white mt-5 lg:mt-6 mb-5 lg:mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Elevating{' '}
                        <span className="text-secondary">Dubai</span>{' '}
                        Living
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="font-body text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        The intersection of luxury homes and market intelligence.
                        Discover exceptional properties in the world&apos;s most dynamic city.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 mt-8 lg:mt-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {[
                            { value: '500+', label: 'Luxury Properties' },
                            { value: 'AED 12B+', label: 'Portfolio Value' },
                            { value: '15+', label: 'Years of Excellence' },
                        ].map((stat, index) => (
                            <div key={index} className="text-white">
                                <span className="block font-heading text-2xl sm:text-3xl lg:text-4xl text-secondary">
                                    {stat.value}
                                </span>
                                <span className="text-xs sm:text-sm font-body text-white/60 tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Search Bar */}
                <motion.div
                    className="mt-10 lg:mt-12 max-w-4xl"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <SearchBar />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2 text-white/60"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
