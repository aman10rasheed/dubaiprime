'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import PropertyCard from '../properties/PropertyCard';
import Button from '../ui/Button';
import type { Property } from '@/types';

interface FeaturedPropertiesProps {
    properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
    return (
        <section className="section-padding bg-white">
            <div className="container-luxury">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                    <SectionHeader
                        label="Exclusive Collection"
                        title="Featured Properties"
                        subtitle="Handpicked luxury homes representing the finest in Dubai living."
                        align="left"
                    />

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <Button href="/properties" variant="outline" size="lg">
                            View All Properties
                        </Button>
                    </AnimatedSection>
                </div>

                {/* Masonry Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <StaggerItem
                            key={property.id}
                            className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                        >
                            <PropertyCard
                                property={property}
                                variant={index === 0 ? 'featured' : 'default'}
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom Stats */}
                <AnimatedSection animation="fadeUp" delay={0.3}>
                    <div className="mt-16 pt-16 border-t border-accent">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: 'AED 45M+', label: 'Highest Listing' },
                                { value: '12,500', label: 'Avg. Sq.Ft' },
                                { value: '98%', label: 'Client Satisfaction' },
                                { value: '24hrs', label: 'Avg. Response Time' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="block font-heading text-3xl md:text-4xl text-primary mb-2">
                                        {stat.value}
                                    </span>
                                    <span className="font-body text-sm text-text-muted tracking-wide uppercase">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

