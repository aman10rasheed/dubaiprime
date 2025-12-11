import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Dubai Prime Estate. Our team is ready to help you with all your luxury real estate needs in Dubai.',
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-12 lg:py-16">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-flex items-center gap-3 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-px bg-secondary" />
                            Get in Touch
                        </span>
                        <h1 className="font-heading text-white mb-4 lg:mb-5">Contact Us</h1>
                        <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
                            Have a question or ready to start your property journey? Our team
                            is here to help you every step of the way.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactSection />

            {/* Map Section */}
            <section className="h-[400px] lg:h-[500px] relative">
                <div className="absolute inset-0 bg-accent">
                    {/* Placeholder for Google Maps */}
                    <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <div className="text-center px-4">
                            <svg className="w-12 h-12 lg:w-16 lg:h-16 mx-auto text-primary/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="font-body text-text-muted">
                                Interactive map will be displayed here
                            </p>
                            <p className="font-body text-sm text-text-muted mt-2">
                                Level 42, Emirates Towers, Sheikh Zayed Road, Dubai
                            </p>
                        </div>
                    </div>
                </div>

                {/* Office Card Overlay */}
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-white p-6 lg:p-8 shadow-premium-hover max-w-sm">
                    <h3 className="font-heading text-lg lg:text-xl text-text-main mb-4">
                        Dubai Head Office
                    </h3>
                    <div className="space-y-3 font-body text-text-muted text-sm lg:text-base">
                        <p className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Level 42, Emirates Towers<br />
                            Sheikh Zayed Road, Dubai, UAE
                        </p>
                        <p className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +971 4 123 4567
                        </p>
                        <p className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@dubaiprimeestate.com
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <div className="text-center mb-12 lg:mb-16">
                            <span className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
                                FAQ
                            </span>
                            <h2 className="font-heading text-text-main">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto">
                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <div className="space-y-4 lg:space-y-6">
                                {[
                                    {
                                        question: 'What areas of Dubai do you specialize in?',
                                        answer: 'We specialize in Dubai\'s most prestigious neighborhoods including Palm Jumeirah, Downtown Dubai, Emirates Hills, Dubai Hills, and Dubai Marina. Our agents have in-depth knowledge of each area\'s unique characteristics and market dynamics.',
                                    },
                                    {
                                        question: 'Do you assist international buyers?',
                                        answer: 'Absolutely. We have extensive experience working with international clients and can guide you through the entire process, from property selection to legal documentation. Our team speaks multiple languages and understands the specific needs of overseas investors.',
                                    },
                                    {
                                        question: 'What are the costs involved in buying property in Dubai?',
                                        answer: 'The main costs include the property price, 4% Dubai Land Department registration fee, agency commission (typically 2%), and miscellaneous administrative fees. We provide a comprehensive breakdown of all costs during your initial consultation.',
                                    },
                                    {
                                        question: 'Can foreigners own property in Dubai?',
                                        answer: 'Yes, foreigners can own freehold property in designated areas of Dubai, which include most prime locations. We\'ll guide you through the ownership options and help you understand the legal framework.',
                                    },
                                    {
                                        question: 'How long does the buying process take?',
                                        answer: 'For ready properties, the process typically takes 2-4 weeks from offer acceptance to ownership transfer. Off-plan purchases may have different timelines based on project completion dates. We handle all paperwork to ensure a smooth transaction.',
                                    },
                                ].map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-accent p-5 lg:p-6 cursor-pointer"
                                    >
                                        <summary className="flex items-center justify-between font-heading text-base lg:text-lg text-text-main list-none">
                                            {faq.question}
                                            <svg
                                                className="w-5 h-5 text-primary transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <p className="mt-4 font-body text-text-muted leading-relaxed text-sm lg:text-base">
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
