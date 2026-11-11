'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORE_INFO } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Menu, 
  X, 
  ShoppingBag,
  Search
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search-modal'));
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200 bg-white">
      {/* Main Navbar - Clean, Well-Spaced, No Text Clutter */}
      <nav 
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/98 border-b border-slate-200 shadow-xs backdrop-blur-md py-3.5' 
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none flex-shrink-0 mr-2 sm:mr-6 lg:mr-8 group"
            title="Vape Shop Chandigarh - Home"
          >
            <div className="relative h-9 sm:h-11 lg:h-12 w-32 sm:w-44 lg:w-52 flex items-center">
              <Image
                src="/images/vape-shop-chandigarh-logo.png"
                alt="Vape Shop Chandigarh Logo"
                fill
                priority
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 208px"
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Clean Desktop Navigation Links (Chandigarh Sectors and Why Us removed) */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-bold text-slate-700">
            <Link 
              href="/#featured-products" 
              className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Featured Vapes</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded-full font-extrabold">HOT</span>
            </Link>
            <Link 
              href="/#categories" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              Categories
            </Link>
            <Link 
              href="/#reviews" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              Reviews
            </Link>
            <Link 
              href="/#faqs" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              FAQs
            </Link>
          </div>

          {/* Action CTAs: Search, Basket & WhatsApp Order */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0 ml-auto lg:ml-8">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={triggerSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer"
              title="Search products"
            >
              <Search className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="hidden md:inline">Search...</span>
            </button>

            {/* Cart / Basket Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer"
              title="View order basket"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="hidden md:inline">Basket</span>
              {totalItems > 0 && (
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white font-black text-[9px] sm:text-[10px] flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WhatsApp Direct Order Button */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20want%20to%20order%20vapes%20in%20Chandigarh.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus:outline-none flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Clean White Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay to tap outside and close */}
          <div 
            onClick={() => setMobileMenuOpen(false)} 
            className="lg:hidden fixed inset-0 top-[65px] bg-slate-900/30 backdrop-blur-xs z-40"
            aria-hidden="true"
          />

          <div className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-slate-200 p-6 shadow-2xl z-50">
            <div className="flex flex-col gap-3 text-base font-bold text-slate-800">
              <Link 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/#featured-products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-900 transition-colors"
              >
                <span>Featured Vapes</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">HOT</span>
              </Link>
              <Link 
                href="/#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Product Categories
              </Link>
              <Link 
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Customer Reviews
              </Link>
              <Link 
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Frequently Asked Questions
              </Link>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20am%20looking%20for%20vapes%20in%20Chandigarh.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Chat &amp; Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
