'use client';

import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

export default function HeroSpline() {
    return (
        <section className="relative h-screen min-h-[800px] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #064E3B 0%, #053f30 40%, #022c22 100%)',
                    }}
                />

                {/* Animated gradient orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
                        style={{
                            background: 'radial-gradient(circle, #D4A373 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                        style={{
                            background: 'radial-gradient(circle, #D4A373 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                            x: [0, -30, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
                        style={{
                            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>

                {/* Geometric pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/50 z-10" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

                {/* Floating lines */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                    animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center container-luxury">
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-flex items-center gap-2 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase">
                            <span className="w-8 h-px bg-secondary" />
                            Dubai&apos;s Premier Real Estate
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="font-heading text-white mt-6 mb-6"
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
                        className="font-body text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        The intersection of luxury homes and market intelligence.
                        Discover exceptional properties in the world&apos;s most dynamic city.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className="flex flex-wrap gap-8 md:gap-12 mt-10"
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
                                <span className="block font-heading text-3xl md:text-4xl text-secondary">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-body text-white/60 tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Search Bar */}
                <motion.div
                    className="mt-12 max-w-4xl"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <SearchBar />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
