import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { getAgents } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Our Agents',
    description: 'Meet our team of expert real estate agents specializing in luxury properties across Dubai.',
};

export default async function AgentsPage() {
    const agents = await getAgents();

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="bg-primary py-20">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-flex items-center gap-2 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-px bg-secondary" />
                            Our Experts
                        </span>
                        <h1 className="font-heading text-white mb-4">Meet Our Agents</h1>
                        <p className="font-body text-white/70 text-lg max-w-2xl">
                            Our team of experienced professionals is dedicated to helping you
                            find the perfect property in Dubai.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Agents Grid */}
            <section className="section-padding bg-accent">
                <div className="container-luxury">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {agents.map((agent) => (
                            <StaggerItem key={agent.id}>
                                <Link href={`/agents/${agent.slug}`}>
                                    <article className="group bg-white overflow-hidden transition-shadow hover:shadow-xl">
                                        {/* Image */}
                                        <div className="relative aspect-[4/5] overflow-hidden">
                                            <Image
                                                src={agent.photo.url}
                                                alt={agent.photo.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {agent.isFeatured && (
                                                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-text-main text-xs font-body font-semibold">
                                                    Featured Agent
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="font-heading text-xl text-text-main mb-1 group-hover:text-primary transition-colors">
                                                {agent.name}
                                            </h3>
                                            <p className="font-body text-sm text-secondary mb-4">
                                                {agent.title}
                                            </p>

                                            {/* Languages */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {agent.languages.map((lang) => (
                                                    <span
                                                        key={lang}
                                                        className="px-2 py-1 bg-accent text-xs font-body text-text-muted"
                                                    >
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between pt-4 border-t border-accent">
                                                <div>
                                                    <span className="block font-heading text-lg text-primary">
                                                        {agent.propertiesSold}
                                                    </span>
                                                    <span className="text-xs font-body text-text-muted">
                                                        Properties Sold
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block font-heading text-lg text-primary">
                                                        {agent.experience}
                                                    </span>
                                                    <span className="text-xs font-body text-text-muted">
                                                        Years Exp.
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                    <span className="font-heading text-lg text-primary">
                                                        {agent.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="section-padding bg-white">
                <div className="container-luxury">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedSection animation="fadeUp">
                            <h2 className="font-heading text-text-main mb-4">
                                Join Our Team
                            </h2>
                            <p className="font-body text-text-muted text-lg mb-8">
                                Are you a passionate real estate professional looking to work with
                                Dubai&apos;s premier luxury agency? We&apos;re always looking for talented
                                individuals to join our growing team.
                            </p>
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-medium hover:bg-primary-light transition-colors"
                            >
                                View Open Positions
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}

