'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

const navLinks = [
    {
        label: 'Buy',
        href: '/properties?type=sale',
        megaMenu: true,
        sections: [
            {
                title: 'Property Types',
                links: [
                    { label: 'Apartments', href: '/properties?type=sale&property=apartment' },
                    { label: 'Villas', href: '/properties?type=sale&property=villa' },
                    { label: 'Penthouses', href: '/properties?type=sale&property=penthouse' },
                    { label: 'Townhouses', href: '/properties?type=sale&property=townhouse' },
                ],
            },
            {
                title: 'Popular Areas',
                links: [
                    { label: 'Palm Jumeirah', href: '/properties?area=palm-jumeirah' },
                    { label: 'Downtown Dubai', href: '/properties?area=downtown' },
                    { label: 'Dubai Hills', href: '/properties?area=dubai-hills' },
                    { label: 'Emirates Hills', href: '/properties?area=emirates-hills' },
                ],
            },
            {
                title: 'Price Range',
                links: [
                    { label: 'Under AED 5M', href: '/properties?max=5000000' },
                    { label: 'AED 5M - 15M', href: '/properties?min=5000000&max=15000000' },
                    { label: 'AED 15M - 50M', href: '/properties?min=15000000&max=50000000' },
                    { label: 'Above AED 50M', href: '/properties?min=50000000' },
                ],
            },
        ],
    },
    {
        label: 'Rent',
        href: '/properties?type=rent',
        megaMenu: true,
        sections: [
            {
                title: 'Property Types',
                links: [
                    { label: 'Apartments', href: '/properties?type=rent&property=apartment' },
                    { label: 'Villas', href: '/properties?type=rent&property=villa' },
                    { label: 'Penthouses', href: '/properties?type=rent&property=penthouse' },
                ],
            },
            {
                title: 'Popular Areas',
                links: [
                    { label: 'Dubai Marina', href: '/properties?type=rent&area=marina' },
                    { label: 'Downtown Dubai', href: '/properties?type=rent&area=downtown' },
                    { label: 'JBR', href: '/properties?type=rent&area=jbr' },
                ],
            },
        ],
    },
    {
        label: 'Off-Plan',
        href: '/properties?type=off-plan',
        megaMenu: false,
    },
    {
        label: 'Services',
        href: '/services',
        megaMenu: true,
        sections: [
            {
                title: 'Our Services',
                links: [
                    { label: 'Buying Services', href: '/services/buying' },
                    { label: 'Selling Services', href: '/services/selling' },
                    { label: 'Rental Services', href: '/services/rental' },
                    { label: 'Property Management', href: '/services/property-management' },
                    { label: 'Investment Advisory', href: '/services/investment-advisory' },
                ],
            },
        ],
    },
    { label: 'Agents', href: '/agents', megaMenu: false },
    { label: 'Team', href: '/team', megaMenu: false },
    { label: 'Contact', href: '/contact', megaMenu: false },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    // Only use transparent navbar on homepage hero
    const showTransparent = isHomePage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showTransparent
                        ? 'bg-transparent'
                        : 'bg-white shadow-lg'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <nav className="container-luxury">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="relative z-10">
                            <motion.div
                                className="flex items-center gap-3"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={`w-10 h-10 flex items-center justify-center transition-colors ${showTransparent ? 'bg-white' : 'bg-primary'
                                    }`}>
                                    <span className={`font-heading font-bold text-xl transition-colors ${showTransparent ? 'text-primary' : 'text-white'
                                        }`}>
                                        DP
                                    </span>
                                </div>
                                <div className="hidden sm:block">
                                    <span className={`font-heading text-xl font-semibold tracking-tight transition-colors ${showTransparent ? 'text-white' : 'text-primary'
                                        }`}>
                                        Dubai Prime
                                    </span>
                                    <span className={`block text-xs font-body tracking-[0.2em] uppercase transition-colors ${showTransparent ? 'text-white/70' : 'text-text-muted'
                                        }`}>
                                        Estate
                                    </span>
                                </div>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.label)}
                                    onMouseLeave={() => setActiveMegaMenu(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`px-4 py-2 font-body text-sm font-medium transition-colors relative group ${showTransparent
                                                ? 'text-white hover:text-secondary'
                                                : 'text-text-main hover:text-primary'
                                            }`}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${showTransparent ? 'bg-secondary' : 'bg-primary'
                                            }`} />
                                    </Link>

                                    {link.megaMenu && link.sections && (
                                        <MegaMenu
                                            isOpen={activeMegaMenu === link.label}
                                            sections={link.sections}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">
                            {/* Search Icon */}
                            <motion.button
                                className={`p-2 transition-colors ${showTransparent ? 'text-white hover:text-secondary' : 'text-text-main hover:text-primary'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </motion.button>

                            {/* Contact Button - Desktop */}
                            <div className="hidden md:block">
                                <Link
                                    href="/contact"
                                    className={`inline-flex items-center justify-center px-6 py-2.5 font-body font-semibold text-sm tracking-wide border-2 transition-all duration-300 ${showTransparent
                                            ? 'border-white text-white hover:bg-white hover:text-primary'
                                            : 'bg-primary text-white border-primary hover:bg-primary-light'
                                        }`}
                                >
                                    Get in Touch
                                </Link>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                className={`lg:hidden p-2 ${showTransparent ? 'text-white' : 'text-text-main'}`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <motion.span
                                        className={`w-full h-0.5 origin-left ${showTransparent ? 'bg-white' : 'bg-text-main'}`}
                                        animate={isMobileMenuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                                    />
                                    <motion.span
                                        className={`w-full h-0.5 ${showTransparent ? 'bg-white' : 'bg-text-main'}`}
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    />
                                    <motion.span
                                        className={`w-full h-0.5 origin-left ${showTransparent ? 'bg-white' : 'bg-text-main'}`}
                                        animate={isMobileMenuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-primary"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
                                <nav className="flex-1">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block py-4 text-xl font-heading text-white border-b border-white/10 hover:text-secondary transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <motion.div
                                    className="mt-8 space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Link
                                        href="/contact"
                                        className="block w-full px-8 py-4 bg-secondary text-text-main font-body font-semibold text-center hover:bg-secondary-light transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get in Touch
                                    </Link>

                                    {/* Contact Info */}
                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-white/60 text-sm font-body mb-2">Call us</p>
                                        <a href="tel:+97141234567" className="text-white font-body text-lg hover:text-secondary transition-colors">
                                            +971 4 123 4567
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
