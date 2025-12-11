'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const footerLinks = {
    properties: [
        { label: 'Buy Property', href: '/properties?type=sale' },
        { label: 'Rent Property', href: '/properties?type=rent' },
        { label: 'Off-Plan Projects', href: '/properties?type=off-plan' },
        { label: 'New Listings', href: '/properties?sort=newest' },
    ],
    services: [
        { label: 'Buying Services', href: '/services/buying' },
        { label: 'Selling Services', href: '/services/selling' },
        { label: 'Property Management', href: '/services/property-management' },
        { label: 'Investment Advisory', href: '/services/investment-advisory' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Our Agents', href: '/agents' },
        { label: 'Contact', href: '/contact' },
    ],
    neighborhoods: [
        { label: 'Palm Jumeirah', href: '/neighborhoods/palm-jumeirah' },
        { label: 'Downtown Dubai', href: '/neighborhoods/downtown-dubai' },
        { label: 'Dubai Hills', href: '/neighborhoods/dubai-hills' },
        { label: 'Emirates Hills', href: '/neighborhoods/emirates-hills' },
    ],
};

const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/971501234567',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="container-luxury py-16">
                    <AnimatedSection animation="fadeUp">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="font-heading text-3xl mb-4">
                                Stay Informed
                            </h3>
                            <p className="text-white/70 font-body mb-8">
                                Subscribe to receive exclusive property listings, market insights, and investment opportunities.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 font-body focus:outline-none focus:border-secondary transition-colors"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-8 py-4 bg-secondary text-text-main font-body font-medium hover:bg-secondary-light transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-luxury py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white flex items-center justify-center">
                                    <span className="font-heading font-bold text-xl text-primary">DP</span>
                                </div>
                                <div>
                                    <span className="font-heading text-xl font-semibold tracking-tight text-white">
                                        Dubai Prime
                                    </span>
                                    <span className="block text-xs font-body tracking-[0.2em] uppercase text-white/70">
                                        Estate
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                            The intersection of luxury homes and market intelligence. Elevating Dubai living since 2008.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-secondary transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-body font-semibold text-sm tracking-[0.1em] uppercase mb-6">
                            Properties
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.properties.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 font-body text-sm hover:text-secondary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-body font-semibold text-sm tracking-[0.1em] uppercase mb-6">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 font-body text-sm hover:text-secondary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-body font-semibold text-sm tracking-[0.1em] uppercase mb-6">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 font-body text-sm hover:text-secondary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-body font-semibold text-sm tracking-[0.1em] uppercase mb-6">
                            Neighborhoods
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.neighborhoods.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 font-body text-sm hover:text-secondary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-luxury py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 font-body text-sm">
                            © {new Date().getFullYear()} Dubai Prime Estate. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-white/50 font-body text-sm hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/50 font-body text-sm hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="text-white/50 font-body text-sm hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

