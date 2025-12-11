'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import type { TeamMember } from '@/types';

interface TeamSectionProps {
    members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-luxury">
                <SectionHeader
                    label="Our Leadership"
                    title="Meet the Team"
                    subtitle="The visionaries driving Dubai Prime Estate's success."
                />

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member) => (
                        <StaggerItem key={member.id}>
                            <motion.article
                                className="group text-center"
                                whileHover={{ y: -8 }}
                            >
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden mb-6">
                                    <Image
                                        src={member.photo.url}
                                        alt={member.photo.alt}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />

                                    {/* Social Links */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {member.socialLinks?.linkedin && (
                                            <motion.a
                                                href={member.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </motion.a>
                                        )}
                                        {member.email && (
                                            <motion.a
                                                href={`mailto:${member.email}`}
                                                className="w-10 h-10 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="font-heading text-xl text-text-main mb-1">
                                    {member.name}
                                </h3>
                                <p className="font-body text-sm text-secondary mb-2">
                                    {member.title}
                                </p>
                                <p className="font-body text-xs text-text-muted uppercase tracking-wider">
                                    {member.department}
                                </p>
                            </motion.article>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

