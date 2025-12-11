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
    const columnCount = sections.length;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute top-full left-0 pt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    {/* Arrow */}
                    <div className="absolute top-2 left-8 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100" />

                    <div className="relative bg-white shadow-2xl border border-gray-100 rounded-sm overflow-hidden">
                        {/* Main Content */}
                        <div
                            className={`grid gap-0 ${columnCount === 1 ? 'grid-cols-1 min-w-[280px]' :
                                    columnCount === 2 ? 'grid-cols-2 min-w-[480px]' :
                                        'grid-cols-3 min-w-[640px]'
                                }`}
                        >
                            {sections.map((section, sectionIndex) => (
                                <div
                                    key={section.title}
                                    className={`p-6 ${sectionIndex > 0 ? 'border-l border-gray-100' : ''}`}
                                >
                                    <h3 className="text-xs font-body font-bold tracking-[0.15em] uppercase text-primary mb-5">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-1">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center py-2 text-sm font-body text-text-main hover:text-primary transition-colors"
                                                >
                                                    <span className="w-0 h-px bg-secondary mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-200" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="bg-accent/50 px-6 py-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-body text-text-muted">
                                    Discover our exclusive collection
                                </p>
                                <Link
                                    href="/properties"
                                    className="inline-flex items-center gap-2 text-xs font-body font-semibold text-primary hover:text-primary-light transition-colors"
                                >
                                    View All Properties
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
