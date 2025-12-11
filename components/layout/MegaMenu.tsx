'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MenuLink {
    label: string;
    href: string;
}

interface MenuSection {
    title: string;
    links: MenuLink[];
}

interface MegaMenuProps {
    isOpen: boolean;
    sections: MenuSection[];
}

export default function MegaMenu({ isOpen, sections }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="bg-white shadow-2xl border border-accent min-w-[500px]">
                        <div className="grid grid-cols-3 gap-8 p-8">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-text-muted mb-4">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center text-sm font-body text-text-main hover:text-primary transition-colors"
                                                >
                                                    <span className="w-0 h-px bg-secondary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Featured Property Teaser */}
                        <div className="bg-accent p-6 border-t border-accent">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-secondary">
                                        Featured
                                    </span>
                                    <p className="text-sm font-body text-text-main mt-1">
                                        Discover our exclusive collection of luxury properties
                                    </p>
                                </div>
                                <Link
                                    href="/properties"
                                    className="text-sm font-body font-medium text-primary hover:text-primary-light flex items-center gap-2 transition-colors"
                                >
                                    View All
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

