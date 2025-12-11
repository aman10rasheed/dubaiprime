'use client';

import { useState, useMemo } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import PropertyCard from '@/components/properties/PropertyCard';
import Button from '@/components/ui/Button';
import type { Property, Neighborhood } from '@/types';

interface PropertiesPageClientProps {
    properties: Property[];
    neighborhoods: Neighborhood[];
}

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'area-desc';

export default function PropertiesPageClient({
    properties,
    neighborhoods,
}: PropertiesPageClientProps) {
    const [listingType, setListingType] = useState<string>('all');
    const [propertyType, setPropertyType] = useState<string>('all');
    const [neighborhood, setNeighborhood] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortOption>('newest');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredProperties = useMemo(() => {
        let result = [...properties];

        if (listingType !== 'all') {
            result = result.filter((p) => p.listingType === listingType);
        }

        if (propertyType !== 'all') {
            result = result.filter((p) => p.propertyType === propertyType);
        }

        if (neighborhood !== 'all') {
            result = result.filter((p) =>
                p.location.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
            );
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'area-desc':
                result.sort((a, b) => b.area - a.area);
                break;
            case 'newest':
            default:
                result.sort(
                    (a, b) =>
                        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
                );
        }

        return result;
    }, [properties, listingType, propertyType, neighborhood, sortBy]);

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-12 lg:py-16">
                <div className="container-luxury">
                    <AnimatedSection animation="fadeUp">
                        <span className="inline-flex items-center gap-3 text-secondary font-body text-sm font-medium tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-px bg-secondary" />
                            Discover
                        </span>
                        <h1 className="font-heading text-white mb-4 lg:mb-5">Our Properties</h1>
                        <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
                            Explore our curated collection of Dubai&apos;s finest properties,
                            from waterfront penthouses to gated community villas.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-white border-b border-accent sticky top-20 lg:top-24 z-30">
                <div className="container-luxury py-4 lg:py-6">
                    <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                        {/* Listing Type */}
                        <div className="flex items-center gap-1.5 lg:gap-2">
                            {[
                                { value: 'all', label: 'All' },
                                { value: 'sale', label: 'Buy' },
                                { value: 'rent', label: 'Rent' },
                                { value: 'off-plan', label: 'Off-Plan' },
                            ].map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setListingType(option.value)}
                                    className={`px-3 lg:px-4 py-2 font-body text-sm transition-colors ${listingType === option.value
                                        ? 'bg-primary text-white'
                                        : 'bg-accent text-text-main hover:bg-primary/10'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        <div className="w-px h-8 bg-accent hidden md:block" />

                        {/* Property Type */}
                        <div className="relative">
                            <select
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                className="px-4 py-2.5 pr-10 bg-accent font-body text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                            >
                                <option value="all">All Types</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>

                        {/* Neighborhood */}
                        <div className="relative">
                            <select
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                className="px-4 py-2.5 pr-10 bg-accent font-body text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                            >
                                <option value="all">All Areas</option>
                                {neighborhoods.map((n) => (
                                    <option key={n.id} value={n.name}>
                                        {n.name}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>

                        <div className="flex-grow" />

                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="px-4 py-2.5 pr-10 bg-accent font-body text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                            >
                                <option value="newest">Newest First</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="area-desc">Area: Largest First</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>

                        {/* View Toggle */}
                        <div className="hidden md:flex items-center gap-0.5 bg-accent">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-text-muted hover:text-text-main'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-text-muted hover:text-text-main'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="section-padding bg-accent">
                <div className="container-luxury">
                    {/* Results Count */}
                    <AnimatedSection animation="fadeUp">
                        <p className="font-body text-text-muted mb-8 lg:mb-10">
                            Showing <span className="text-text-main font-medium">{filteredProperties.length}</span> properties
                        </p>
                    </AnimatedSection>

                    {filteredProperties.length > 0 ? (
                        <StaggerContainer
                            className={`grid gap-6 lg:gap-8 ${viewMode === 'grid'
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                : 'grid-cols-1'
                                }`}
                        >
                            {filteredProperties.map((property) => (
                                <StaggerItem key={property.id}>
                                    <PropertyCard property={property} variant={viewMode === 'list' ? 'compact' : 'default'} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    ) : (
                        <div className="text-center py-16 lg:py-20">
                            <h3 className="font-heading text-2xl text-text-main mb-4">
                                No properties found
                            </h3>
                            <p className="font-body text-text-muted mb-8">
                                Try adjusting your filters to see more results.
                            </p>
                            <Button
                                onClick={() => {
                                    setListingType('all');
                                    setPropertyType('all');
                                    setNeighborhood('all');
                                }}
                                variant="outline"
                            >
                                Clear All Filters
                            </Button>
                        </div>
                    )}

                    {/* Load More */}
                    {filteredProperties.length > 0 && (
                        <AnimatedSection animation="fadeUp" delay={0.3}>
                            <div className="text-center mt-12 lg:mt-16">
                                <Button variant="outline" size="lg">
                                    Load More Properties
                                </Button>
                            </div>
                        </AnimatedSection>
                    )}
                </div>
            </section>
        </>
    );
}
