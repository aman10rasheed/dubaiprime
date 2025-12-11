import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { getServices } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Comprehensive real estate services including buying, selling, rental, property management, and investment advisory in Dubai.',
};

const iconComponents: Record<string, React.ReactNode> = {
    key: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
    ),
    home: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    users: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    building: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    settings: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    chart: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ),
};

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="bg-primary py-20">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-flex items-center gap-2 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-px bg-secondary" />
                            What We Offer
                        </span>
                        <h1 className="font-heading text-white mb-4">Our Services</h1>
                        <p className="font-body text-white/70 text-lg max-w-2xl">
                            Comprehensive real estate solutions tailored to meet your unique
                            needs, from property acquisition to investment management.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-luxury">
                    <StaggerContainer className="space-y-24">
                        {services.map((service, index) => (
                            <StaggerItem key={service.id}>
                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Image */}
                                    <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Image
                                            src={service.featuredImage.url}
                                            alt={service.featuredImage.alt}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/10" />
                                    </div>

                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <div className="w-20 h-20 bg-primary/5 flex items-center justify-center mb-6 text-primary">
                                            {iconComponents[service.icon] || iconComponents['home']}
                                        </div>

                                        <h2 className="font-heading text-3xl text-text-main mb-4">
                                            {service.title}
                                        </h2>

                                        <p className="font-body text-text-muted text-lg mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                            {service.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 font-body text-text-main"
                                                >
                                                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:text-primary-light transition-colors group"
                                        >
                                            Learn More
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary">
                <div className="container-luxury">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedSection animation="fadeUp">
                            <h2 className="font-heading text-white mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="font-body text-white/70 text-lg mb-8">
                                Contact our team today to discuss how we can help you achieve
                                your real estate goals in Dubai.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button href="/contact" variant="secondary" size="lg">
                                    Contact Us
                                </Button>
                                <Button
                                    href="/properties"
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-primary"
                                >
                                    Browse Properties
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}

