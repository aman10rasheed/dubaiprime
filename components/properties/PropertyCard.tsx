'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Property } from '@/types';

interface PropertyCardProps {
    property: Property;
    variant?: 'default' | 'featured' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
    const isFeatured = variant === 'featured';
    const isCompact = variant === 'compact';

    return (
        <motion.article
            className={`group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl ${isFeatured ? 'aspect-[4/5]' : isCompact ? 'aspect-[16/9]' : 'aspect-[4/3]'
                }`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={`/properties/${property.slug}`} className="block h-full">
                {/* Image */}
                <div className="absolute inset-0">
                    <Image
                        src={property.featuredImage.url}
                        alt={property.featuredImage.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-2 z-10">
                    {property.isFeatured && (
                        <span className="px-4 py-1.5 bg-secondary text-text-main text-xs font-body font-semibold tracking-wide uppercase">
                            Featured
                        </span>
                    )}
                    {property.isNew && (
                        <span className="px-4 py-1.5 bg-primary text-white text-xs font-body font-semibold tracking-wide uppercase">
                            New
                        </span>
                    )}
                    <span className="px-4 py-1.5 bg-white/90 text-text-main text-xs font-body font-semibold tracking-wide uppercase">
                        {property.listingType === 'sale' ? 'For Sale' : property.listingType === 'rent' ? 'For Rent' : 'Off-Plan'}
                    </span>
                </div>

                {/* Favorite Button */}
                <motion.button
                    className="absolute top-6 right-6 w-12 h-12 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.preventDefault();
                        // Handle favorite toggle
                    }}
                >
                    <svg className="w-6 h-6 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </motion.button>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    {/* Price */}
                    <p className="font-heading text-3xl md:text-4xl text-white mb-3">
                        {property.priceFormatted}
                        {property.listingType === 'rent' && (
                            <span className="text-lg text-white/70 font-body">/year</span>
                        )}
                    </p>

                    {/* Title */}
                    <h3 className="font-heading text-xl text-white mb-3 line-clamp-2">
                        {property.title}
                    </h3>

                    {/* Location */}
                    <p className="flex items-center gap-2 text-white/70 font-body text-sm mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {property.location.neighborhood}, {property.location.city}
                    </p>

                    {/* Features */}
                    <div className="flex items-center gap-8 text-white/80">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="font-body text-sm font-medium">{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <span className="font-body text-sm font-medium">{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            <span className="font-body text-sm font-medium">{property.area.toLocaleString()} {property.areaUnit}</span>
                        </div>
                    </div>
                </div>

                {/* Hover View Details */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <motion.span
                        className="px-8 py-4 bg-white text-text-main font-body font-semibold tracking-wide"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                    >
                        View Details
                    </motion.span>
                </div>
            </Link>
        </motion.article>
    );
}
