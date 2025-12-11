import { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { getTeamMembers } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Our Team',
    description: 'Meet the leadership team behind Dubai Prime Estate, driving excellence in luxury real estate.',
};

export default async function TeamPage() {
    const teamMembers = await getTeamMembers();

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-12 lg:py-16">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-flex items-center gap-3 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-px bg-secondary" />
                            Our Leadership
                        </span>
                        <h1 className="font-heading text-white mb-4 lg:mb-5">Meet Our Team</h1>
                        <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
                            The visionaries and experts driving Dubai Prime Estate&apos;s success
                            in the luxury real estate market.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-white">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedSection animation="fadeUp">
                            <span className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
                                About Us
                            </span>
                            <h2 className="font-heading text-text-main mb-6">
                                A Legacy of Excellence
                            </h2>
                            <div className="space-y-4 lg:space-y-5 font-body text-text-muted leading-relaxed">
                                <p>
                                    Founded in 2008, Dubai Prime Estate has grown to become one of
                                    the most respected names in Dubai&apos;s luxury real estate market.
                                    Our journey began with a simple vision: to redefine the standard
                                    of excellence in property services.
                                </p>
                                <p>
                                    Today, we are proud to serve a discerning clientele that includes
                                    high-net-worth individuals, international investors, and royal
                                    families. Our success is built on a foundation of integrity,
                                    market expertise, and an unwavering commitment to client
                                    satisfaction.
                                </p>
                                <p>
                                    What sets us apart is our holistic approach to real estate. We
                                    don&apos;t just facilitate transactions; we build lasting relationships
                                    and provide comprehensive solutions that extend far beyond the
                                    closing table.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slideLeft" delay={0.2}>
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="space-y-4 lg:space-y-6">
                                    <div className="relative aspect-[3/4]">
                                        <Image
                                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop"
                                            alt="Dubai Prime Estate Office"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-primary p-5 lg:p-6 text-center">
                                        <span className="block font-heading text-3xl lg:text-4xl text-white">15+</span>
                                        <span className="text-sm font-body text-white/70 uppercase tracking-wide">
                                            Years of Excellence
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                                    <div className="bg-secondary p-5 lg:p-6 text-center">
                                        <span className="block font-heading text-3xl lg:text-4xl text-text-main">AED 12B+</span>
                                        <span className="text-sm font-body text-text-main/70 uppercase tracking-wide">
                                            Portfolio Value
                                        </span>
                                    </div>
                                    <div className="relative aspect-[3/4]">
                                        <Image
                                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop"
                                            alt="Luxury Property"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="section-padding bg-accent">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <div className="text-center mb-12 lg:mb-16">
                            <span className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
                                Leadership
                            </span>
                            <h2 className="font-heading text-text-main">
                                The People Behind Our Success
                            </h2>
                        </div>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {teamMembers.map((member) => (
                            <StaggerItem key={member.id}>
                                <article className="group bg-white overflow-hidden shadow-premium hover:shadow-premium-hover transition-shadow">
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden">
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
                                                <a
                                                    href={member.socialLinks.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </a>
                                            )}
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-10 h-10 bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 lg:p-6 text-center">
                                        <h3 className="font-heading text-lg lg:text-xl text-text-main mb-1.5">
                                            {member.name}
                                        </h3>
                                        <p className="font-body text-sm text-secondary mb-2 font-medium">
                                            {member.title}
                                        </p>
                                        <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-3 lg:mb-4">
                                            {member.department}
                                        </p>
                                        <p className="font-body text-sm text-text-muted line-clamp-3 leading-relaxed">
                                            {member.shortBio}
                                        </p>
                                    </div>
                                </article>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <div className="text-center mb-12 lg:mb-16">
                            <span className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
                                Our Values
                            </span>
                            <h2 className="font-heading text-text-main">
                                What Drives Us
                            </h2>
                        </div>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                title: 'Integrity',
                                description: 'We conduct business with the highest ethical standards, building trust through transparency and honesty in every interaction.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Excellence',
                                description: 'We strive for excellence in everything we do, continuously raising the bar and exceeding client expectations.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Innovation',
                                description: 'We embrace innovation and leverage cutting-edge technology to deliver superior service and market insights.',
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                            },
                        ].map((value, index) => (
                            <StaggerItem key={index}>
                                <div className="text-center p-8 lg:p-10 bg-accent h-full">
                                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/5 flex items-center justify-center mx-auto mb-5 lg:mb-6 text-primary">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-heading text-xl text-text-main mb-3 lg:mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="font-body text-text-muted leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
