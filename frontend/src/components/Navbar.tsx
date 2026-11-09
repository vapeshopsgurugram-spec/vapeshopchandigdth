'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { STORE_INFO } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Clock, 
  Menu, 
  X, 
  Flame, 
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
    <header className="sticky top-0 z-40 w-full transition-all duration-200 bg-white">
      {/* Top Announcement Bar - Clean Light White/Emerald Theme (Only WhatsApp) */}
      <div className="bg-emerald-50 border-b border-emerald-100 text-xs text-slate-700 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Fast 30-45 Min Delivery in Chandigarh, Mohali &amp; Panchkula
            </span>
            <span className="hidden md:inline-block text-slate-300">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Open Daily: 10:00 AM - 11:30 PM
            </span>
          </div>

          {/* Only WhatsApp Feature */}
          <div className="flex items-center gap-2">
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Vape%20Shop%20Chandigarh%2C%20I%20have%20an%20inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold transition-colors bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs"
              title="Order Vape on WhatsApp Chandigarh"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Helpline: 24/7 Active</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean, Well-Spaced, No Text Clutter */}
      <nav 
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/98 border-b border-slate-200 shadow-xs backdrop-blur-md py-3.5' 
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity (Well spaced with safe right margin) */}
          <Link 
            href="/" 
            className="flex items-center gap-3 focus:outline-none flex-shrink-0 mr-6 lg:mr-10 xl:mr-14 group"
            title="Vape Shop Chandigarh - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-emerald-600 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none whitespace-nowrap">
                VAPE SHOP <span className="text-emerald-600">CHANDIGARH</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1 whitespace-nowrap">
                Tricity&apos;s #1 Smoke &amp; Pod Hub
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation Links (Chandigarh Sectors and Why Us removed) */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-bold text-slate-700">
            <Link 
              href="#featured-products" 
              className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Featured Vapes</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded-full font-extrabold">HOT</span>
            </Link>
            <Link 
              href="#categories" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              Categories
            </Link>
            <Link 
              href="#reviews" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              Reviews
            </Link>
            <Link 
              href="#faqs" 
              className="hover:text-emerald-600 transition-colors whitespace-nowrap"
            >
              FAQs
            </Link>
          </div>

          {/* Action CTAs: Search, Basket & WhatsApp Order */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-auto lg:ml-8">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={triggerSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
              title="Search products"
            >
              <Search className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Search...</span>
            </button>

            {/* Cart / Basket Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer"
              title="View order basket"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Basket</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center">
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
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Clean White Theme */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bg-white border-b border-slate-200 p-6 shadow-xl z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-bold text-slate-800">
            <Link 
              href="#featured-products"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-900"
            >
              <span>Featured Vapes</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">HOT</span>
            </Link>
            <Link 
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50"
            >
              Product Categories
            </Link>
            <Link 
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50"
            >
              Customer Reviews
            </Link>
            <Link 
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50"
            >
              Frequently Asked Questions
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
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
      )}
    </header>
  );
}
