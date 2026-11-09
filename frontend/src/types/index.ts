export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'disposable' | 'pod-system' | 'e-liquid' | 'accessories';
  price: number;
  originalPrice: number;
  puffCount?: number;
  nicotine?: string;
  flavors?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  image: string;
  description: string;
  slug: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  itemCount: number;
  tagline: string;
  iconName: string;
  badge?: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  heading: string;
  highlightText: string;
  subheading: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  features: string[];
  gradient: string;
  puffCountTag?: string;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  productBought: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DeliveryLocation {
  name: string;
  time: string;
  sectors: string[];
  charge: string;
}

