'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
}

const animations: Record<AnimationType, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    stagger: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
};

export default function AnimatedSection({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    threshold = 0.2,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// Parallax effect component
interface ParallaxProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                willChange: 'transform',
            }}
            initial={{ y: 0 }}
            whileInView={{
                y: [-20 * speed, 20 * speed],
                transition: {
                    duration: 1,
                    ease: 'linear',
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Text reveal animation
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(' ');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

