'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { STORE_INFO } from '@/data/mockData';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Star 
} from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Full-width Banners Array
  const banners = [
    {
      id: "banner-1",
      image: "/images/desktop-hero-banner-1.png",
      mobileImage: "/images/hero-banner-mobile.png",
      title: "Premium Vape Collection Showcase - Same Day Delivery Tricity",
      alt: "Premium Vape Collection Showcase in Chandigarh, Mohali & Panchkula",
      whatsappText: "Hi%2C%20I%20want%20to%20order%20from%20the%20Premium%20Vape%20Collection%20in%20Chandigarh",
      tag: "🔥 Premium Vape Collection • 100% Genuine QR Verified"
    },
    {
      id: "banner-2",
      image: "/images/desktop-hero-banner-2.png",
      mobileImage: "/images/hero-banner-2-mobile.png",
      title: "Top Vaping Products - Pods, Devices, Refills",
      alt: "Top Vaping Products in Chandigarh - Voopoo Argus, Geekvape B60, Lost Mary MT35000",
      whatsappText: "Hi%2C%20I%20want%20to%20order%20from%20the%20Top%20Vaping%20Products%20collection%20in%20Chandigarh",
      tag: "⚡ 45-Min Express Delivery in Chandigarh, Mohali & Panchkula"
    }
  ];

  const totalSlides = banners.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const activeBanner = banners[currentSlide];

  return (
    <section 
      aria-label="Vape Shop Chandigarh Featured Promotions"
      className="relative overflow-hidden bg-slate-50/60 pt-3 pb-8 sm:pb-12 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 100% SEO Hidden Heading for Google Crawlers */}
      <h1 className="sr-only">
        Best Vape Shop in Chandigarh - Same Day 45-Min Express Delivery Tricity (Disposable Vapes, Pod Systems, Refills)
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Banner Container (Full Width Edge-to-Edge with Zero Cut) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group w-full mx-auto aspect-[1095/1437] sm:aspect-[1983/793]">
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${activeBanner.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full focus:outline-none relative"
            title="Click to Order on WhatsApp"
          >
            <div className="w-full h-full flex items-center justify-center bg-slate-950">
              <picture className="w-full h-full block">
                {activeBanner.mobileImage && (
                  <source media="(max-width: 639px)" srcSet={activeBanner.mobileImage} />
                )}
                <img
                  src={activeBanner.image}
                  alt={activeBanner.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.008]"
                  style={{ imageRendering: 'auto' }}
                />
              </picture>
            </div>
          </a>

          {/* Clean Floating Bottom-Left Tag (No Colliding Right Button) */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 pointer-events-none max-w-[70%] sm:max-w-none">
            <div className="pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/80 backdrop-blur-md text-white text-[9px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-700/60 shadow-md truncate max-w-full">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">{activeBanner.tag}</span>
            </div>
          </div>

          {/* Slider Controls: Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Banner"
            className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer opacity-75 hover:opacity-100"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Banner"
            className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer opacity-75 hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === index 
                    ? 'w-6 h-1.5 bg-emerald-500 shadow-xs' 
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3 Pillars under Hero (Clean White - Aligned with Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4 sm:mt-5 w-full mx-auto">
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-xs sm:text-sm">45-Min Express Delivery</h3>
              <p className="text-slate-500 text-[11px] mt-0.5">Across Chandigarh, Mohali, Panchkula &amp; Zirakpur</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-xs sm:text-sm">100% Genuine Authenticity</h3>
              <p className="text-slate-500 text-[11px] mt-0.5">Original factory-sealed with QR scratch verification</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-xs sm:text-sm">Rated 4.9/5 by 1200+</h3>
              <p className="text-slate-500 text-[11px] mt-0.5">Top-rated vape store in Chandigarh Tricity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
