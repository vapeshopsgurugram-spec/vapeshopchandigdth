import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import LocalSeoSection from '@/components/LocalSeoSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Semantic Header & Navigation */}
      <Navbar />

      {/* Main Semantic Content Area for Search Engines */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section with Auto-Sliding Banner */}
        <HeroSlider />

        {/* 2. Popular Categories */}
        <CategorySection />

        {/* 3. Featured Bestseller Products with WhatsApp Direct Checkout */}
        <FeaturedProducts />

        {/* 4. Local SEO Tricity Delivery Sectors & Store Location */}
        <LocalSeoSection />

        {/* 5. Trust Pillars & Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Customer Testimonials */}
        <ReviewsSection />

        {/* 7. Comprehensive FAQ with Google Schema */}
        <FaqSection />
      </main>

      {/* Semantic Footer with NAP & Local SEO Links */}
      <Footer />
    </>
  );
}
