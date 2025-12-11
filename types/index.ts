// ============================================
// Dubai Prime Estate - Type Definitions
// Ready for WordPress GraphQL Integration
// ============================================

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  priceFormatted: string;
  currency: string;
  propertyType: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  
  // Location
  location: {
    address: string;
    neighborhood: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  
  // Features
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  area: number; // in sqft
  areaUnit: 'sqft' | 'sqm';
  
  // Media
  featuredImage: MediaItem;
  gallery: MediaItem[];
  virtualTourUrl?: string;
  videoUrl?: string;
  
  // Amenities & Features
  amenities: string[];
  features: string[];
  
  // Meta
  isFeatured: boolean;
  isNew: boolean;
  publishedAt: string;
  updatedAt: string;
  
  // Agent
  agent: Agent;
}

export type PropertyType = 
  | 'apartment' 
  | 'villa' 
  | 'penthouse' 
  | 'townhouse' 
  | 'duplex'
  | 'studio'
  | 'land'
  | 'commercial';

export type ListingType = 'sale' | 'rent' | 'off-plan';

export type PropertyStatus = 'available' | 'sold' | 'rented' | 'under-offer' | 'coming-soon';

export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  photo: MediaItem;
  email: string;
  phone: string;
  whatsapp?: string;
  languages: string[];
  specializations: string[];
  experience: number; // years
  propertiesSold: number;
  rating: number;
  reviews: number;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  isFeatured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: MediaItem;
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTime: number; // in minutes
  isFeatured: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: MediaItem;
  bio?: string;
}

export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  featuredImage: MediaItem;
  gallery: MediaItem[];
  highlights: string[];
  averagePrice: number;
  priceGrowth: number; // percentage
  totalProperties: number;
  lifestyle: string[];
  nearbyAmenities: string[];
}

export interface MarketInsight {
  id: string;
  title: string;
  value: string | number;
  change: number; // percentage
  changeType: 'increase' | 'decrease' | 'stable';
  period: string;
  icon: string;
  description?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  featuredImage: MediaItem;
  features: string[];
  process?: ServiceProcess[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  shortBio: string;
  photo: MediaItem;
  email: string;
  phone?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  order: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle?: string;
  clientPhoto?: MediaItem;
  content: string;
  rating: number;
  propertyType?: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  propertyInterest?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

export interface SearchFilters {
  query?: string;
  listingType?: ListingType;
  propertyType?: PropertyType[];
  priceMin?: number;
  priceMax?: number;
  bedroomsMin?: number;
  bedroomsMax?: number;
  bathroomsMin?: number;
  areaMin?: number;
  areaMax?: number;
  neighborhoods?: string[];
  amenities?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'oldest' | 'area-asc' | 'area-desc';
}

// API Response Types (for future WordPress GraphQL integration)
export interface APIResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
}

