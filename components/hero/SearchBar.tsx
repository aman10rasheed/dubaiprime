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
        <div className="glass-dark rounded-none p-2">
            {/* Tabs */}
            <div className="flex gap-1 mb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-6 py-3 font-body text-sm font-medium transition-colors ${activeTab === tab.id
                            ? 'text-white'
                            : 'text-white/60 hover:text-white'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white/10 -z-10"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {/* Location Input */}
                    <div className="md:col-span-2 relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Location or Community"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-white/10 border border-white/10 text-white placeholder-white/50 font-body focus:outline-none focus:border-secondary transition-colors"
                        />
                    </div>

                    {/* Property Type */}
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="h-14 px-4 bg-white/10 border border-white/10 text-white font-body focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '16px',
                        }}
                    >
                        {propertyTypes.map((type) => (
                            <option key={type.value} value={type.value} className="bg-primary text-white">
                                {type.label}
                            </option>
                        ))}
                    </select>

                    {/* Price Range */}
                    <AnimatePresence mode="wait">
                        <motion.select
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="h-14 px-4 bg-white/10 border border-white/10 text-white font-body focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center',
                                backgroundSize: '16px',
                            }}
                        >
                            {priceRanges[activeTab].map((range) => (
                                <option key={range.value} value={range.value} className="bg-primary text-white">
                                    {range.label}
                                </option>
                            ))}
                        </motion.select>
                    </AnimatePresence>

                    {/* Bedrooms - Hidden on mobile, shown as part of search button on small screens */}
                    <div className="hidden md:block">
                        <select
                            value={bedroom}
                            onChange={(e) => setBedroom(e.target.value)}
                            className="w-full h-14 px-4 bg-white/10 border border-white/10 text-white font-body focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center',
                                backgroundSize: '16px',
                            }}
                        >
                            {bedrooms.map((bed) => (
                                <option key={bed.value} value={bed.value} className="bg-primary text-white">
                                    {bed.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <motion.button
                    type="submit"
                    className="w-full mt-2 h-14 bg-secondary text-text-main font-body font-semibold tracking-wide hover:bg-secondary-light transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Properties
                </motion.button>
            </form>
        </div>
    );
}

