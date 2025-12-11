'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
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
    { label: 'Insights', href: '/insights', megaMenu: false },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // On non-home pages, always show solid background
    const showSolidBg = !isHomePage || isScrolled;

    return (
        <>
            {/* Navbar Spacer - pushes content below fixed navbar on non-home pages */}
            {!isHomePage && <div className="h-20 lg:h-24" />}

            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showSolidBg
                    ? 'bg-white shadow-lg'
                    : 'bg-gradient-to-b from-black/50 to-transparent'
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
                                <div className={`w-12 h-12 flex items-center justify-center ${showSolidBg ? 'bg-primary' : 'bg-white'
                                    }`}>
                                    <span className={`font-heading font-bold text-xl ${showSolidBg ? 'text-white' : 'text-primary'
                                        }`}>
                                        DP
                                    </span>
                                </div>
                                <div className="hidden sm:block">
                                    <span className={`font-heading text-xl font-semibold tracking-tight ${showSolidBg ? 'text-primary' : 'text-white'
                                        }`}>
                                        Dubai Prime
                                    </span>
                                    <span className={`block text-xs font-body tracking-[0.2em] uppercase ${showSolidBg ? 'text-text-muted' : 'text-white/80'
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
                                        className={`flex items-center gap-1 px-4 py-3 font-body text-sm font-semibold transition-all relative group ${showSolidBg
                                            ? 'text-text-main hover:text-primary'
                                            : 'text-white hover:text-secondary'
                                            }`}
                                    >
                                        {link.label}
                                        {link.megaMenu && (
                                            <svg className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                        <span className={`absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${showSolidBg ? 'bg-primary' : 'bg-secondary'
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
                                className={`p-2.5 rounded-full transition-all ${showSolidBg
                                    ? 'text-text-main hover:text-primary hover:bg-accent'
                                    : 'text-white hover:text-secondary hover:bg-white/10'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </motion.button>

                            {/* Contact Button */}
                            <div className="hidden md:block">
                                <Button
                                    href="/contact"
                                    variant={showSolidBg ? 'primary' : 'secondary'}
                                    size="sm"
                                    className="px-4 py-2.5"
                                >
                                    Contact Us
                                </Button>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                className={`lg:hidden p-2.5 rounded-full ${showSolidBg
                                    ? 'text-text-main hover:bg-accent'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <motion.span
                                        className={`w-full h-0.5 origin-left ${showSolidBg ? 'bg-text-main' : 'bg-white'}`}
                                        animate={isMobileMenuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                                    />
                                    <motion.span
                                        className={`w-full h-0.5 ${showSolidBg ? 'bg-text-main' : 'bg-white'}`}
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    />
                                    <motion.span
                                        className={`w-full h-0.5 origin-left ${showSolidBg ? 'bg-text-main' : 'bg-white'}`}
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
                            <div className="flex flex-col h-full pt-28 px-8 pb-8">
                                <nav className="flex-1 overflow-y-auto">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex items-center justify-between py-5 text-xl font-heading text-white border-b border-white/10 hover:text-secondary transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <div className="mt-8 space-y-4">
                                    <Button
                                        href="/contact"
                                        variant="secondary"
                                        size="lg"
                                        fullWidth
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Button>
                                    <p className="text-white/50 text-center text-sm font-body">
                                        +971 4 123 4567
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
