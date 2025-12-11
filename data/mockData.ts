// ============================================
// Dubai Prime Estate - Mock Data
// Structured for easy WordPress GraphQL swap
// ============================================

import type {
  Property,
  Agent,
  BlogPost,
  Neighborhood,
  MarketInsight,
  Service,
  TeamMember,
  Testimonial,
} from '@/types';

// ============================================
// AGENTS
// ============================================
export const agents: Agent[] = [
  {
    id: 'agent-1',
    slug: 'sarah-al-maktoum',
    name: 'Sarah Al Maktoum',
    title: 'Senior Property Consultant',
    bio: 'With over 15 years of experience in Dubai\'s luxury real estate market, Sarah has helped countless clients find their dream homes in the most prestigious neighborhoods. Her deep understanding of the local market and exceptional client service has made her one of the top-performing agents in the region.',
    shortBio: 'Specializing in Palm Jumeirah and Emirates Hills luxury properties.',
    photo: {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      alt: 'Sarah Al Maktoum',
      width: 400,
      height: 400,
    },
    email: 'sarah@dubaiprimeestate.com',
    phone: '+971 50 123 4567',
    whatsapp: '+971501234567',
    languages: ['English', 'Arabic', 'French'],
    specializations: ['Luxury Villas', 'Waterfront Properties', 'Investment Advisory'],
    experience: 15,
    propertiesSold: 342,
    rating: 4.9,
    reviews: 128,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    isFeatured: true,
  },
  {
    id: 'agent-2',
    slug: 'james-richardson',
    name: 'James Richardson',
    title: 'International Sales Director',
    bio: 'James brings a wealth of international experience to Dubai Prime Estate, having previously worked with prestigious agencies in London and New York. His expertise lies in connecting global investors with premium Dubai properties.',
    shortBio: 'Expert in international investments and Downtown Dubai properties.',
    photo: {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      alt: 'James Richardson',
      width: 400,
      height: 400,
    },
    email: 'james@dubaiprimeestate.com',
    phone: '+971 50 234 5678',
    whatsapp: '+971502345678',
    languages: ['English', 'Spanish', 'Portuguese'],
    specializations: ['International Investments', 'Off-Plan Projects', 'Commercial Real Estate'],
    experience: 12,
    propertiesSold: 287,
    rating: 4.8,
    reviews: 96,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    isFeatured: true,
  },
  {
    id: 'agent-3',
    slug: 'fatima-hassan',
    name: 'Fatima Hassan',
    title: 'Luxury Rentals Specialist',
    bio: 'Fatima specializes in high-end rental properties, catering to executives and celebrities seeking premium temporary residences in Dubai. Her attention to detail and discretion make her the go-to agent for discerning clients.',
    shortBio: 'Specializing in executive and celebrity luxury rentals.',
    photo: {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      alt: 'Fatima Hassan',
      width: 400,
      height: 400,
    },
    email: 'fatima@dubaiprimeestate.com',
    phone: '+971 50 345 6789',
    whatsapp: '+971503456789',
    languages: ['English', 'Arabic', 'Hindi'],
    specializations: ['Luxury Rentals', 'Short-term Leases', 'Corporate Housing'],
    experience: 8,
    propertiesSold: 156,
    rating: 4.9,
    reviews: 74,
    socialLinks: {
      instagram: 'https://instagram.com',
    },
    isFeatured: true,
  },
  {
    id: 'agent-4',
    slug: 'omar-khalid',
    name: 'Omar Khalid',
    title: 'Off-Plan Investment Specialist',
    bio: 'Omar is a recognized expert in Dubai\'s off-plan market, with deep relationships with all major developers. He guides investors through the entire journey from project selection to handover.',
    shortBio: 'Your guide to Dubai\'s most promising off-plan developments.',
    photo: {
      id: 'photo-4',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      alt: 'Omar Khalid',
      width: 400,
      height: 400,
    },
    email: 'omar@dubaiprimeestate.com',
    phone: '+971 50 456 7890',
    whatsapp: '+971504567890',
    languages: ['English', 'Arabic', 'Urdu'],
    specializations: ['Off-Plan Projects', 'Developer Relations', 'Investment Analysis'],
    experience: 10,
    propertiesSold: 198,
    rating: 4.7,
    reviews: 82,
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
    isFeatured: false,
  },
];

// ============================================
// PROPERTIES
// ============================================
export const properties: Property[] = [
  {
    id: 'prop-1',
    slug: 'signature-penthouse-palm-jumeirah',
    title: 'Signature Penthouse at One Palm',
    description: 'Experience unparalleled luxury in this magnificent penthouse at One Palm, offering breathtaking views of the Dubai skyline and Arabian Gulf. This architectural masterpiece features floor-to-ceiling windows, a private infinity pool, and the finest Italian marble throughout.',
    shortDescription: 'Iconic penthouse with panoramic views and private pool',
    price: 45000000,
    priceFormatted: 'AED 45,000,000',
    currency: 'AED',
    propertyType: 'penthouse',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'One Palm, Palm Jumeirah',
      neighborhood: 'Palm Jumeirah',
      city: 'Dubai',
      country: 'UAE',
      coordinates: { lat: 25.1124, lng: 55.1390 },
    },
    bedrooms: 5,
    bathrooms: 7,
    parkingSpaces: 4,
    area: 12500,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-1',
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      alt: 'Luxury Penthouse at One Palm',
      width: 1200,
      height: 800,
    },
    gallery: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop', alt: 'Living Room', width: 1200, height: 800 },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop', alt: 'Master Bedroom', width: 1200, height: 800 },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop', alt: 'Kitchen', width: 1200, height: 800 },
    ],
    virtualTourUrl: 'https://example.com/virtual-tour',
    amenities: ['Private Pool', 'Smart Home', 'Wine Cellar', 'Private Elevator', 'Gym', 'Sauna', 'Home Cinema'],
    features: ['Sea View', 'Skyline View', 'High Ceiling', 'Walk-in Closet', 'Maids Room', 'Study'],
    isFeatured: true,
    isNew: false,
    publishedAt: '2024-01-15',
    updatedAt: '2024-03-01',
    agent: agents[0],
  },
  {
    id: 'prop-2',
    slug: 'contemporary-villa-emirates-hills',
    title: 'Contemporary Masterpiece in Emirates Hills',
    description: 'A stunning contemporary villa set within the exclusive Emirates Hills community. This architectural gem features clean lines, extensive use of glass, and seamlessly blends indoor and outdoor living spaces.',
    shortDescription: 'Modern architectural villa with golf course views',
    price: 75000000,
    priceFormatted: 'AED 75,000,000',
    currency: 'AED',
    propertyType: 'villa',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'Emirates Hills',
      neighborhood: 'Emirates Hills',
      city: 'Dubai',
      country: 'UAE',
    },
    bedrooms: 7,
    bathrooms: 9,
    parkingSpaces: 6,
    area: 25000,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-2',
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
      alt: 'Emirates Hills Villa',
      width: 1200,
      height: 800,
    },
    gallery: [],
    amenities: ['Private Pool', 'Tennis Court', 'Smart Home', 'Guest House', 'Landscaped Garden', 'BBQ Area'],
    features: ['Golf Course View', 'Lake View', 'Private Garden', 'Staff Quarters', 'Home Office'],
    isFeatured: true,
    isNew: true,
    publishedAt: '2024-02-20',
    updatedAt: '2024-02-20',
    agent: agents[1],
  },
  {
    id: 'prop-3',
    slug: 'sky-residence-downtown-dubai',
    title: 'Sky Residence at Address Downtown',
    description: 'Live at the heart of Dubai\'s most iconic address. This exquisite apartment offers direct views of Burj Khalifa and the Dubai Fountain, with world-class amenities and services at your doorstep.',
    shortDescription: 'Premier apartment with Burj Khalifa views',
    price: 18500000,
    priceFormatted: 'AED 18,500,000',
    currency: 'AED',
    propertyType: 'apartment',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'Address Downtown, Downtown Dubai',
      neighborhood: 'Downtown Dubai',
      city: 'Dubai',
      country: 'UAE',
    },
    bedrooms: 3,
    bathrooms: 4,
    parkingSpaces: 3,
    area: 4200,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-3',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      alt: 'Address Downtown Apartment',
      width: 1200,
      height: 800,
    },
    gallery: [],
    amenities: ['Concierge', 'Valet Parking', 'Spa Access', 'Gym', 'Pool', 'Business Center'],
    features: ['Burj Khalifa View', 'Fountain View', 'High Floor', 'Furnished', 'Brand New'],
    isFeatured: true,
    isNew: false,
    publishedAt: '2024-01-10',
    updatedAt: '2024-02-15',
    agent: agents[0],
  },
  {
    id: 'prop-4',
    slug: 'beachfront-villa-jumeirah-bay',
    title: 'Beachfront Estate at Jumeirah Bay Island',
    description: 'An exceptional beachfront villa on the exclusive Jumeirah Bay Island, offering complete privacy and unobstructed sea views. This estate represents the pinnacle of waterfront living in Dubai.',
    shortDescription: 'Ultra-luxury beachfront estate with private beach',
    price: 120000000,
    priceFormatted: 'AED 120,000,000',
    currency: 'AED',
    propertyType: 'villa',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'Jumeirah Bay Island',
      neighborhood: 'Jumeirah Bay',
      city: 'Dubai',
      country: 'UAE',
    },
    bedrooms: 8,
    bathrooms: 10,
    parkingSpaces: 8,
    area: 35000,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-4',
      url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
      alt: 'Jumeirah Bay Estate',
      width: 1200,
      height: 800,
    },
    gallery: [],
    amenities: ['Private Beach', 'Yacht Dock', 'Infinity Pool', 'Home Cinema', 'Wine Room', 'Spa'],
    features: ['Beachfront', 'Sea View', 'Private Dock', 'Landscaped Garden', 'Guest Villa'],
    isFeatured: true,
    isNew: true,
    publishedAt: '2024-03-01',
    updatedAt: '2024-03-01',
    agent: agents[1],
  },
  {
    id: 'prop-5',
    slug: 'luxury-apartment-dubai-hills',
    title: 'Golf Course Apartment at Dubai Hills',
    description: 'A beautifully designed apartment overlooking the Dubai Hills Golf Course, perfect for those seeking a balance of luxury and lifestyle. Modern finishes and premium amenities throughout.',
    shortDescription: 'Elegant apartment with stunning golf views',
    price: 4500000,
    priceFormatted: 'AED 4,500,000',
    currency: 'AED',
    propertyType: 'apartment',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'Golf Place, Dubai Hills Estate',
      neighborhood: 'Dubai Hills',
      city: 'Dubai',
      country: 'UAE',
    },
    bedrooms: 2,
    bathrooms: 3,
    parkingSpaces: 2,
    area: 2100,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-5',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      alt: 'Dubai Hills Apartment',
      width: 1200,
      height: 800,
    },
    gallery: [],
    amenities: ['Golf Club Access', 'Pool', 'Gym', 'Children Play Area', 'BBQ Area'],
    features: ['Golf Course View', 'Park View', 'Modern Kitchen', 'Built-in Wardrobes'],
    isFeatured: false,
    isNew: false,
    publishedAt: '2024-01-05',
    updatedAt: '2024-02-10',
    agent: agents[2],
  },
  {
    id: 'prop-6',
    slug: 'marina-penthouse-dubai-marina',
    title: 'Triple-Height Penthouse at Dubai Marina',
    description: 'A spectacular penthouse spanning three floors with 360-degree views of the marina and sea. Features include a private rooftop pool, entertaining terrace, and the finest finishes throughout.',
    shortDescription: 'Spectacular marina penthouse with private rooftop',
    price: 28000000,
    priceFormatted: 'AED 28,000,000',
    currency: 'AED',
    propertyType: 'penthouse',
    listingType: 'sale',
    status: 'available',
    location: {
      address: 'Dubai Marina',
      neighborhood: 'Dubai Marina',
      city: 'Dubai',
      country: 'UAE',
    },
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 4,
    area: 8500,
    areaUnit: 'sqft',
    featuredImage: {
      id: 'img-6',
      url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
      alt: 'Dubai Marina Penthouse',
      width: 1200,
      height: 800,
    },
    gallery: [],
    amenities: ['Private Rooftop Pool', 'Terrace', 'Smart Home', 'Private Elevator', 'Wine Cellar'],
    features: ['Marina View', 'Sea View', 'Triple Height Ceiling', 'Rooftop Access'],
    isFeatured: false,
    isNew: false,
    publishedAt: '2024-02-01',
    updatedAt: '2024-02-20',
    agent: agents[0],
  },
];

// ============================================
// NEIGHBORHOODS
// ============================================
export const neighborhoods: Neighborhood[] = [
  {
    id: 'nb-1',
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    description: 'The iconic Palm Jumeirah is a man-made archipelago that has become synonymous with Dubai luxury. Home to some of the world\'s most exclusive addresses, this engineering marvel offers waterfront living at its finest.',
    shortDescription: 'Iconic island living with world-famous addresses',
    featuredImage: {
      id: 'nb-img-1',
      url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop',
      alt: 'Palm Jumeirah Aerial View',
      width: 1200,
      height: 800,
    },
    gallery: [],
    highlights: ['Private Beaches', 'World-class Hotels', 'Iconic Architecture', 'Marina Living'],
    averagePrice: 3500,
    priceGrowth: 12.5,
    totalProperties: 156,
    lifestyle: ['Beach Living', 'Luxury Hotels', 'Fine Dining', 'Water Sports'],
    nearbyAmenities: ['Atlantis', 'Nakheel Mall', 'The Pointe', 'West Beach'],
  },
  {
    id: 'nb-2',
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    description: 'The center of now. Downtown Dubai is where the world\'s tallest building meets world-class entertainment, shopping, and dining. Living here means being at the heart of everything Dubai has to offer.',
    shortDescription: 'The vibrant heart of modern Dubai',
    featuredImage: {
      id: 'nb-img-2',
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=800&fit=crop',
      alt: 'Downtown Dubai Skyline',
      width: 1200,
      height: 800,
    },
    gallery: [],
    highlights: ['Burj Khalifa', 'Dubai Mall', 'Dubai Fountain', 'Opera District'],
    averagePrice: 2800,
    priceGrowth: 15.2,
    totalProperties: 243,
    lifestyle: ['Urban Living', 'Entertainment', 'Shopping', 'Dining'],
    nearbyAmenities: ['Dubai Mall', 'Dubai Opera', 'Souk Al Bahar', 'DIFC'],
  },
  {
    id: 'nb-3',
    slug: 'dubai-hills',
    name: 'Dubai Hills Estate',
    description: 'A green oasis in the heart of new Dubai, Dubai Hills Estate offers the perfect blend of luxury living and outdoor lifestyle. With its championship golf course and extensive parks, it\'s the ideal family community.',
    shortDescription: 'Green living with championship golf',
    featuredImage: {
      id: 'nb-img-3',
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      alt: 'Dubai Hills Golf Course',
      width: 1200,
      height: 800,
    },
    gallery: [],
    highlights: ['Golf Course', 'Dubai Hills Mall', 'Parks', 'Family-Friendly'],
    averagePrice: 1800,
    priceGrowth: 18.7,
    totalProperties: 312,
    lifestyle: ['Golf', 'Family Living', 'Nature', 'Community'],
    nearbyAmenities: ['Dubai Hills Mall', 'Golf Club', 'King\'s College Hospital', 'Parks'],
  },
  {
    id: 'nb-4',
    slug: 'emirates-hills',
    name: 'Emirates Hills',
    description: 'The Beverly Hills of Dubai. Emirates Hills is an ultra-exclusive gated community home to the region\'s elite. Each villa is a custom masterpiece set against the backdrop of the Montgomerie Golf Course.',
    shortDescription: 'Ultra-exclusive gated community',
    featuredImage: {
      id: 'nb-img-4',
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
      alt: 'Emirates Hills Villa',
      width: 1200,
      height: 800,
    },
    gallery: [],
    highlights: ['Gated Community', 'Custom Villas', 'Golf Course', 'Privacy'],
    averagePrice: 5500,
    priceGrowth: 8.3,
    totalProperties: 48,
    lifestyle: ['Ultra-Luxury', 'Golf', 'Privacy', 'Exclusivity'],
    nearbyAmenities: ['Montgomerie Golf Club', 'Emirates Golf Club', 'Marina Walk'],
  },
];

// ============================================
// MARKET INSIGHTS
// ============================================
export const marketInsights: MarketInsight[] = [
  {
    id: 'insight-1',
    title: 'Average Price/Sq.Ft',
    value: 'AED 1,850',
    change: 12.4,
    changeType: 'increase',
    period: 'vs last year',
    icon: 'trending-up',
    description: 'Prime area average price per square foot',
  },
  {
    id: 'insight-2',
    title: 'Market Growth',
    value: '+18.5%',
    change: 18.5,
    changeType: 'increase',
    period: 'YoY Growth',
    icon: 'chart-line',
    description: 'Year-over-year market value increase',
  },
  {
    id: 'insight-3',
    title: 'New Projects',
    value: '142',
    change: 24,
    changeType: 'increase',
    period: 'Launched this quarter',
    icon: 'building',
    description: 'New developments launched',
  },
  {
    id: 'insight-4',
    title: 'Transaction Volume',
    value: 'AED 82B',
    change: 32.1,
    changeType: 'increase',
    period: 'Q1 2024',
    icon: 'dollar-sign',
    description: 'Total transaction value this quarter',
  },
];

// ============================================
// SERVICES
// ============================================
export const services: Service[] = [
  {
    id: 'service-1',
    slug: 'buying',
    title: 'Buying Services',
    description: 'Our comprehensive buying service guides you through every step of acquiring your dream property in Dubai. From initial consultation to key handover, we ensure a seamless experience.',
    shortDescription: 'Expert guidance for property acquisition',
    icon: 'key',
    featuredImage: {
      id: 'svc-img-1',
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
      alt: 'Property Buying',
      width: 1200,
      height: 800,
    },
    features: [
      'Personalized property matching',
      'Market analysis and valuation',
      'Negotiation support',
      'Legal documentation assistance',
      'Mortgage advisory',
      'Post-purchase support',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understanding your requirements and preferences' },
      { step: 2, title: 'Property Search', description: 'Curated selection of matching properties' },
      { step: 3, title: 'Viewings', description: 'Accompanied private viewings' },
      { step: 4, title: 'Negotiation', description: 'Expert negotiation on your behalf' },
      { step: 5, title: 'Documentation', description: 'Complete legal and financial processing' },
      { step: 6, title: 'Handover', description: 'Smooth transfer and key handover' },
    ],
  },
  {
    id: 'service-2',
    slug: 'selling',
    title: 'Selling Services',
    description: 'Maximize the value of your property with our strategic selling approach. We combine market expertise with premium marketing to attract qualified buyers.',
    shortDescription: 'Strategic approach to maximize property value',
    icon: 'home',
    featuredImage: {
      id: 'svc-img-2',
      url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop',
      alt: 'Property Selling',
      width: 1200,
      height: 800,
    },
    features: [
      'Accurate market valuation',
      'Professional photography and videography',
      'Premium listing placement',
      'International buyer network',
      'Open house management',
      'Negotiation expertise',
    ],
    process: [
      { step: 1, title: 'Valuation', description: 'Comprehensive market analysis and pricing strategy' },
      { step: 2, title: 'Preparation', description: 'Property styling and professional media production' },
      { step: 3, title: 'Marketing', description: 'Multi-channel premium marketing campaign' },
      { step: 4, title: 'Showings', description: 'Qualified buyer viewings and open houses' },
      { step: 5, title: 'Offers', description: 'Evaluation and negotiation of offers' },
      { step: 6, title: 'Closing', description: 'Transaction completion and handover' },
    ],
  },
  {
    id: 'service-3',
    slug: 'rental',
    title: 'Rental Services',
    description: 'Whether you\'re seeking the perfect rental or looking to lease your property, our rental division offers end-to-end solutions with a focus on quality and reliability.',
    shortDescription: 'Complete rental solutions for tenants and landlords',
    icon: 'users',
    featuredImage: {
      id: 'svc-img-3',
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      alt: 'Property Rental',
      width: 1200,
      height: 800,
    },
    features: [
      'Extensive rental portfolio',
      'Tenant screening',
      'Lease management',
      'Property management',
      'Rent collection',
      'Maintenance coordination',
    ],
  },
  {
    id: 'service-4',
    slug: 'off-plan',
    title: 'Off-Plan Investment',
    description: 'Access exclusive off-plan opportunities with preferential terms. Our developer relationships and market intelligence help you invest in tomorrow\'s prime addresses.',
    shortDescription: 'Exclusive access to premium developments',
    icon: 'building',
    featuredImage: {
      id: 'svc-img-4',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      alt: 'Off-Plan Development',
      width: 1200,
      height: 800,
    },
    features: [
      'Exclusive developer partnerships',
      'Early-bird pricing access',
      'Project analysis and ROI projections',
      'Payment plan guidance',
      'Construction updates',
      'Resale and exit strategies',
    ],
  },
  {
    id: 'service-5',
    slug: 'property-management',
    title: 'Property Management',
    description: 'Our comprehensive property management service ensures your investment is maintained, rented, and optimized for maximum returns.',
    shortDescription: 'Full-service property management',
    icon: 'settings',
    featuredImage: {
      id: 'svc-img-5',
      url: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&h=800&fit=crop',
      alt: 'Property Management',
      width: 1200,
      height: 800,
    },
    features: [
      'Tenant sourcing and screening',
      'Rent collection',
      'Maintenance management',
      'Financial reporting',
      'Legal compliance',
      'Regular property inspections',
    ],
  },
  {
    id: 'service-6',
    slug: 'investment-advisory',
    title: 'Investment Advisory',
    description: 'Make informed investment decisions with our data-driven advisory services. We analyze market trends, yields, and growth potential to guide your portfolio.',
    shortDescription: 'Data-driven investment guidance',
    icon: 'chart',
    featuredImage: {
      id: 'svc-img-6',
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
      alt: 'Investment Advisory',
      width: 1200,
      height: 800,
    },
    features: [
      'Market research and analysis',
      'Portfolio strategy',
      'Yield optimization',
      'Risk assessment',
      'Tax efficiency planning',
      'Exit strategy planning',
    ],
  },
];

// ============================================
// TEAM MEMBERS
// ============================================
export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    slug: 'ahmad-al-rashid',
    name: 'Ahmad Al Rashid',
    title: 'Founder & CEO',
    department: 'Executive',
    bio: 'Ahmad founded Dubai Prime Estate with a vision to redefine luxury real estate in the UAE. With over 25 years of experience in Dubai\'s property market, he has built the company into one of the most respected names in luxury real estate.',
    shortBio: 'Visionary leader with 25+ years in Dubai real estate',
    photo: {
      id: 'team-img-1',
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      alt: 'Ahmad Al Rashid',
      width: 400,
      height: 400,
    },
    email: 'ahmad@dubaiprimeestate.com',
    phone: '+971 50 111 2222',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
    order: 1,
  },
  {
    id: 'team-2',
    slug: 'elena-petrova',
    name: 'Elena Petrova',
    title: 'Chief Operating Officer',
    department: 'Executive',
    bio: 'Elena brings operational excellence to Dubai Prime Estate. Her background in hospitality management at five-star establishments translates into exceptional client service and seamless transactions.',
    shortBio: 'Operations expert with luxury hospitality background',
    photo: {
      id: 'team-img-2',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      alt: 'Elena Petrova',
      width: 400,
      height: 400,
    },
    email: 'elena@dubaiprimeestate.com',
    phone: '+971 50 222 3333',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
    order: 2,
  },
  {
    id: 'team-3',
    slug: 'mohammed-hassan',
    name: 'Mohammed Hassan',
    title: 'Head of Sales',
    department: 'Sales',
    bio: 'Mohammed leads our sales division with passion and precision. His deep knowledge of Dubai\'s neighborhoods and developer relationships ensures our clients access the best opportunities.',
    shortBio: 'Sales leader with unmatched market knowledge',
    photo: {
      id: 'team-img-3',
      url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      alt: 'Mohammed Hassan',
      width: 400,
      height: 400,
    },
    email: 'mohammed@dubaiprimeestate.com',
    phone: '+971 50 333 4444',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    order: 3,
  },
  {
    id: 'team-4',
    slug: 'victoria-chen',
    name: 'Victoria Chen',
    title: 'Head of Marketing',
    department: 'Marketing',
    bio: 'Victoria crafts the brand experience at Dubai Prime Estate. Her creative vision and strategic approach to luxury marketing has positioned our properties in front of qualified buyers worldwide.',
    shortBio: 'Creative strategist for luxury brand experiences',
    photo: {
      id: 'team-img-4',
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      alt: 'Victoria Chen',
      width: 400,
      height: 400,
    },
    email: 'victoria@dubaiprimeestate.com',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    order: 4,
  },
];

// ============================================
// TESTIMONIALS
// ============================================
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Richard & Emma Thompson',
    clientTitle: 'Villa Owners, Emirates Hills',
    content: 'Dubai Prime Estate made our dream of owning an Emirates Hills villa a reality. Sarah\'s expertise and patience throughout the process was exceptional. We couldn\'t be happier with our new home.',
    rating: 5,
    propertyType: 'Villa',
    date: '2024-02-15',
  },
  {
    id: 'testimonial-2',
    clientName: 'Dr. Hassan Al Mansoori',
    clientTitle: 'Investor',
    content: 'I\'ve worked with many agencies in Dubai, but Dubai Prime Estate stands apart. Their market insights and off-plan recommendations have consistently delivered excellent returns on my portfolio.',
    rating: 5,
    propertyType: 'Investment Portfolio',
    date: '2024-01-20',
  },
  {
    id: 'testimonial-3',
    clientName: 'Sophie Laurent',
    clientTitle: 'Penthouse Owner, Palm Jumeirah',
    content: 'The team\'s understanding of luxury was evident from our first meeting. They showed us properties that perfectly matched our lifestyle. The attention to detail in every aspect was remarkable.',
    rating: 5,
    propertyType: 'Penthouse',
    date: '2024-03-01',
  },
];

// ============================================
// BLOG POSTS
// ============================================
export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'dubai-real-estate-outlook-2024',
    title: 'Dubai Real Estate Outlook 2024: What Investors Need to Know',
    excerpt: 'An in-depth analysis of Dubai\'s property market trends, emerging neighborhoods, and investment opportunities for the year ahead.',
    content: '...',
    featuredImage: {
      id: 'blog-img-1',
      url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop',
      alt: 'Dubai Skyline',
      width: 1200,
      height: 800,
    },
    category: { id: 'cat-1', name: 'Market Insights', slug: 'market-insights' },
    tags: ['Market Analysis', 'Investment', '2024 Trends'],
    author: {
      id: 'author-1',
      name: 'James Richardson',
      avatar: { id: 'av-1', url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', alt: 'James', width: 100, height: 100 },
    },
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readingTime: 8,
    isFeatured: true,
  },
  {
    id: 'blog-2',
    slug: 'guide-to-palm-jumeirah-living',
    title: 'The Ultimate Guide to Palm Jumeirah Living',
    excerpt: 'Everything you need to know about living on Dubai\'s most iconic island, from property types to lifestyle amenities.',
    content: '...',
    featuredImage: {
      id: 'blog-img-2',
      url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop',
      alt: 'Palm Jumeirah',
      width: 1200,
      height: 800,
    },
    category: { id: 'cat-2', name: 'Neighborhood Guides', slug: 'neighborhood-guides' },
    tags: ['Palm Jumeirah', 'Lifestyle', 'Neighborhood'],
    author: {
      id: 'author-2',
      name: 'Sarah Al Maktoum',
      avatar: { id: 'av-2', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop', alt: 'Sarah', width: 100, height: 100 },
    },
    publishedAt: '2024-02-01',
    updatedAt: '2024-02-01',
    readingTime: 12,
    isFeatured: true,
  },
  {
    id: 'blog-3',
    slug: 'off-plan-investment-strategies',
    title: 'Off-Plan Investment Strategies for Maximum Returns',
    excerpt: 'Learn the strategies successful investors use to identify and capitalize on Dubai\'s best off-plan opportunities.',
    content: '...',
    featuredImage: {
      id: 'blog-img-3',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      alt: 'Dubai Development',
      width: 1200,
      height: 800,
    },
    category: { id: 'cat-1', name: 'Market Insights', slug: 'market-insights' },
    tags: ['Off-Plan', 'Investment', 'Strategy'],
    author: {
      id: 'author-3',
      name: 'Omar Khalid',
      avatar: { id: 'av-3', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', alt: 'Omar', width: 100, height: 100 },
    },
    publishedAt: '2024-02-20',
    updatedAt: '2024-02-20',
    readingTime: 10,
    isFeatured: false,
  },
];

// ============================================
// DATA FETCHING FUNCTIONS
// (Structured for easy WordPress GraphQL replacement)
// ============================================

export async function getProperties(filters?: {
  listingType?: string;
  featured?: boolean;
  limit?: number;
}): Promise<Property[]> {
  let result = [...properties];
  
  if (filters?.listingType) {
    result = result.filter(p => p.listingType === filters.listingType);
  }
  
  if (filters?.featured) {
    result = result.filter(p => p.isFeatured);
  }
  
  if (filters?.limit) {
    result = result.slice(0, filters.limit);
  }
  
  return result;
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return properties.find(p => p.slug === slug) || null;
}

export async function getAgents(filters?: {
  featured?: boolean;
  limit?: number;
}): Promise<Agent[]> {
  let result = [...agents];
  
  if (filters?.featured) {
    result = result.filter(a => a.isFeatured);
  }
  
  if (filters?.limit) {
    result = result.slice(0, filters.limit);
  }
  
  return result;
}

export async function getAgentBySlug(slug: string): Promise<Agent | null> {
  return agents.find(a => a.slug === slug) || null;
}

export async function getNeighborhoods(limit?: number): Promise<Neighborhood[]> {
  return limit ? neighborhoods.slice(0, limit) : neighborhoods;
}

export async function getNeighborhoodBySlug(slug: string): Promise<Neighborhood | null> {
  return neighborhoods.find(n => n.slug === slug) || null;
}

export async function getMarketInsights(): Promise<MarketInsight[]> {
  return marketInsights;
}

export async function getServices(limit?: number): Promise<Service[]> {
  return limit ? services.slice(0, limit) : services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find(s => s.slug === slug) || null;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers.sort((a, b) => a.order - b.order);
}

export async function getBlogPosts(filters?: {
  featured?: boolean;
  limit?: number;
  category?: string;
}): Promise<BlogPost[]> {
  let result = [...blogPosts];
  
  if (filters?.featured) {
    result = result.filter(p => p.isFeatured);
  }
  
  if (filters?.category) {
    result = result.filter(p => p.category.slug === filters.category);
  }
  
  if (filters?.limit) {
    result = result.slice(0, filters.limit);
  }
  
  return result;
}

export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  return limit ? testimonials.slice(0, limit) : testimonials;
}

