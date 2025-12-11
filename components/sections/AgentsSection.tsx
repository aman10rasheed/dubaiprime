'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import type { Agent } from '@/types';

interface AgentsSectionProps {
    agents: Agent[];
}

export default function AgentsSection({ agents }: AgentsSectionProps) {
    const router = useRouter();

    const handleCardClick = (slug: string) => {
        router.push(`/agents/${slug}`);
    };

    const handleSocialClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="section-padding bg-accent">
            <div className="container-luxury">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mb-12 lg:mb-16">
                    <SectionHeader
                        label="Meet Our Experts"
                        title="Featured Agents"
                        subtitle="Work with the region's most accomplished real estate professionals."
                        align="left"
                        className="mb-0"
                    />

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <Button href="/agents" variant="outline" size="lg">
                            View All Agents
                        </Button>
                    </AnimatedSection>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {agents.map((agent) => (
                        <StaggerItem key={agent.id}>
                            <motion.article
                                className="group bg-white overflow-hidden cursor-pointer shadow-premium hover:shadow-premium-hover"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleCardClick(agent.slug)}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={agent.photo.url}
                                        alt={agent.photo.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Social Links on Hover */}
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 lg:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        {agent.socialLinks?.linkedin && (
                                            <motion.button
                                                onClick={(e) => handleSocialClick(e, agent.socialLinks!.linkedin!)}
                                                className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </motion.button>
                                        )}
                                        {agent.socialLinks?.instagram && (
                                            <motion.button
                                                onClick={(e) => handleSocialClick(e, agent.socialLinks!.instagram!)}
                                                className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </motion.button>
                                        )}
                                        <motion.button
                                            onClick={(e) => handleSocialClick(e, `mailto:${agent.email}`)}
                                            className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8">
                                    <h3 className="font-heading text-xl text-text-main mb-1.5 group-hover:text-primary transition-colors">
                                        {agent.name}
                                    </h3>
                                    <p className="font-body text-sm text-secondary mb-3 lg:mb-4 font-medium">
                                        {agent.title}
                                    </p>
                                    <p className="font-body text-text-muted text-sm mb-5 lg:mb-6 line-clamp-2 leading-relaxed">
                                        {agent.shortBio}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-5 lg:pt-6 border-t border-accent">
                                        <div className="text-center">
                                            <span className="block font-heading text-xl lg:text-2xl text-primary">
                                                {agent.propertiesSold}
                                            </span>
                                            <span className="text-xs font-body text-text-muted uppercase tracking-wider">
                                                Sold
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <span className="block font-heading text-xl lg:text-2xl text-primary">
                                                {agent.experience}
                                            </span>
                                            <span className="text-xs font-body text-text-muted uppercase tracking-wider">
                                                Years
                                            </span>
                                        </div>
                                        <div className="text-center flex items-center gap-1">
                                            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span className="font-heading text-xl lg:text-2xl text-primary">{agent.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
