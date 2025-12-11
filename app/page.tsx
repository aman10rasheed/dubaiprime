import HeroSpline from '@/components/hero/HeroSpline';
import MarketPulse from '@/components/sections/MarketPulse';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import NeighborhoodGuides from '@/components/sections/NeighborhoodGuides';
import ServicesSection from '@/components/sections/ServicesSection';
import AgentsSection from '@/components/sections/AgentsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import {
  getProperties,
  getMarketInsights,
  getNeighborhoods,
  getServices,
  getAgents,
  getTestimonials,
} from '@/data/mockData';

export default async function HomePage() {
  // Fetch all data (ready for WordPress GraphQL swap)
  const [
    properties,
    marketInsights,
    neighborhoods,
    services,
    agents,
    testimonials,
  ] = await Promise.all([
    getProperties({ featured: true, limit: 5 }),
    getMarketInsights(),
    getNeighborhoods(4),
    getServices(6),
    getAgents({ featured: true, limit: 3 }),
    getTestimonials(),
  ]);

  return (
    <>
      {/* Hero Section with 3D Spline Background */}
      <HeroSpline />

      {/* Market Pulse - JLL Style Data Dashboard */}
      <MarketPulse insights={marketInsights} />

      {/* Featured Properties - Sotheby's Style */}
      <FeaturedProperties properties={properties} />

      {/* Neighborhood Guides Carousel */}
      <NeighborhoodGuides neighborhoods={neighborhoods} />

      {/* Our Services */}
      <ServicesSection services={services} />

      {/* Featured Agents */}
      <AgentsSection agents={agents} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
