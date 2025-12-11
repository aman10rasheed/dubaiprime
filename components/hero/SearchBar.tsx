'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

type SearchTab = 'buy' | 'rent' | 'off-plan';

const tabs: { id: SearchTab; label: string }[] = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'off-plan', label: 'Off-Plan' },
];

const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'townhouse', label: 'Townhouse' },
];

const priceRanges = {
    buy: [
        { value: '', label: 'Any Price' },
        { value: '0-5000000', label: 'Up to AED 5M' },
        { value: '5000000-10000000', label: 'AED 5M - 10M' },
        { value: '10000000-25000000', label: 'AED 10M - 25M' },
        { value: '25000000-50000000', label: 'AED 25M - 50M' },
        { value: '50000000+', label: 'AED 50M+' },
    ],
    rent: [
        { value: '', label: 'Any Price' },
        { value: '0-100000', label: 'Up to AED 100K/yr' },
        { value: '100000-250000', label: 'AED 100K - 250K/yr' },
        { value: '250000-500000', label: 'AED 250K - 500K/yr' },
        { value: '500000+', label: 'AED 500K+/yr' },
    ],
    'off-plan': [
        { value: '', label: 'Any Price' },
        { value: '0-2000000', label: 'Up to AED 2M' },
        { value: '2000000-5000000', label: 'AED 2M - 5M' },
        { value: '5000000-10000000', label: 'AED 5M - 10M' },
        { value: '10000000+', label: 'AED 10M+' },
    ],
};

const bedrooms = [
    { value: '', label: 'Bedrooms' },
    { value: '1', label: '1 Bed' },
    { value: '2', label: '2 Beds' },
    { value: '3', label: '3 Beds' },
    { value: '4', label: '4 Beds' },
    { value: '5+', label: '5+ Beds' },
];

export default function SearchBar() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<SearchTab>('buy');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [bedroom, setBedroom] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.set('type', activeTab === 'buy' ? 'sale' : activeTab);
        if (location) params.set('location', location);
        if (propertyType) params.set('property', propertyType);
        if (priceRange) params.set('price', priceRange);
        if (bedroom) params.set('beds', bedroom);

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <div className="glass-dark p-5 md:p-8">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-6 py-3 font-body text-sm font-semibold transition-colors ${activeTab === tab.id
                            ? 'text-white'
                            : 'text-white/60 hover:text-white'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white/15 -z-10"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Location Input */}
                    <div className="lg:col-span-2 relative flex items-center">
                        <span className="absolute left-4 text-white/50 pointer-events-none">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Location or Community"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-white/10 border border-white/20 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:border-secondary focus:bg-white/15 transition-all"
                        />
                    </div>

                    {/* Property Type */}
                    <div className="relative flex items-center">
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full h-14 px-4 pr-10 bg-white/10 border border-white/20 text-white font-body text-sm focus:outline-none focus:border-secondary focus:bg-white/15 transition-all appearance-none cursor-pointer"
                        >
                            {propertyTypes.map((type) => (
                                <option key={type.value} value={type.value} className="bg-primary text-white">
                                    {type.label}
                                </option>
                            ))}
                        </select>
                        <span className="absolute right-4 text-white/50 pointer-events-none">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>

                    {/* Price Range */}
                    <div className="relative flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.select
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full h-14 px-4 pr-10 bg-white/10 border border-white/20 text-white font-body text-sm focus:outline-none focus:border-secondary focus:bg-white/15 transition-all appearance-none cursor-pointer"
                            >
                                {priceRanges[activeTab].map((range) => (
                                    <option key={range.value} value={range.value} className="bg-primary text-white">
                                        {range.label}
                                    </option>
                                ))}
                            </motion.select>
                        </AnimatePresence>
                        <span className="absolute right-4 text-white/50 pointer-events-none">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>

                    {/* Bedrooms - Desktop */}
                    <div className="relative hidden lg:flex items-center">
                        <select
                            value={bedroom}
                            onChange={(e) => setBedroom(e.target.value)}
                            className="w-full h-14 px-4 pr-10 bg-white/10 border border-white/20 text-white font-body text-sm focus:outline-none focus:border-secondary focus:bg-white/15 transition-all appearance-none cursor-pointer"
                        >
                            {bedrooms.map((bed) => (
                                <option key={bed.value} value={bed.value} className="bg-primary text-white">
                                    {bed.label}
                                </option>
                            ))}
                        </select>
                        <span className="absolute right-4 text-white/50 pointer-events-none">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Mobile Bedrooms */}
                <div className="relative flex items-center mt-4 lg:hidden">
                    <select
                        value={bedroom}
                        onChange={(e) => setBedroom(e.target.value)}
                        className="w-full h-14 px-4 pr-10 bg-white/10 border border-white/20 text-white font-body text-sm focus:outline-none focus:border-secondary focus:bg-white/15 transition-all appearance-none cursor-pointer"
                    >
                        {bedrooms.map((bed) => (
                            <option key={bed.value} value={bed.value} className="bg-primary text-white">
                                {bed.label}
                            </option>
                        ))}
                    </select>
                    <span className="absolute right-4 text-white/50 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>

                {/* Search Button */}
                <motion.button
                    type="submit"
                    className="w-full mt-6 h-14 bg-secondary text-text-main font-body font-bold tracking-wide hover:bg-secondary-light transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Search Properties
                </motion.button>
            </form>
        </div>
    );
}
