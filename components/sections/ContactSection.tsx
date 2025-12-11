'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        propertyInterest: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className="section-padding bg-white">
            <div className="container-luxury">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Info */}
                    <div>
                        <SectionHeader
                            label="Get in Touch"
                            title="Let's Start a Conversation"
                            subtitle="Whether you're looking to buy, sell, or invest, our team is here to guide you every step of the way."
                            align="left"
                            className="mb-8 lg:mb-10"
                        />

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <div className="space-y-6 lg:space-y-8">
                                {/* Address */}
                                <div className="flex gap-4 lg:gap-5">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-text-main mb-1.5">Visit Our Office</h4>
                                        <p className="font-body text-text-muted leading-relaxed">
                                            Level 42, Emirates Towers<br />
                                            Sheikh Zayed Road, Dubai, UAE
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4 lg:gap-5">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-text-main mb-1.5">Call Us</h4>
                                        <p className="font-body text-text-muted leading-relaxed">
                                            +971 4 123 4567<br />
                                            +971 50 123 4567
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4 lg:gap-5">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-text-main mb-1.5">Email Us</h4>
                                        <p className="font-body text-text-muted leading-relaxed">
                                            info@dubaiprimeestate.com<br />
                                            sales@dubaiprimeestate.com
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4 lg:gap-5">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-text-main mb-1.5">Business Hours</h4>
                                        <p className="font-body text-text-muted leading-relaxed">
                                            Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Column - Form */}
                    <AnimatedSection animation="slideLeft" delay={0.3}>
                        <form onSubmit={handleSubmit} className="bg-accent p-6 sm:p-8 lg:p-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-body font-medium text-text-main mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Smith"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-body font-medium text-text-main mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-body font-medium text-text-main mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                {/* Interest */}
                                <div>
                                    <label htmlFor="propertyInterest" className="block text-sm font-body font-medium text-text-main mb-2">
                                        I&apos;m Interested In
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="propertyInterest"
                                            name="propertyInterest"
                                            value={formData.propertyInterest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 pr-10 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select an option</option>
                                            <option value="buying">Buying a Property</option>
                                            <option value="selling">Selling a Property</option>
                                            <option value="renting">Renting a Property</option>
                                            <option value="investing">Investment Opportunities</option>
                                            <option value="management">Property Management</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-body font-medium text-text-main mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-body font-medium text-text-main mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3.5 bg-white border border-transparent font-body text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us more about your requirements..."
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button type="submit" variant="primary" size="lg" fullWidth>
                                    Send Message
                                </Button>
                            </div>

                            <p className="mt-5 text-xs font-body text-text-muted text-center">
                                By submitting this form, you agree to our Privacy Policy and Terms of Service.
                            </p>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
