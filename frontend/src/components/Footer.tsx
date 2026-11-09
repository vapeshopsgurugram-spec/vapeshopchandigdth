'use client';

import React from 'react';
import Link from 'next/link';
import { STORE_INFO, SEO_KEYWORDS } from '@/data/mockData';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Flame, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldAlert, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer 
      aria-label="Footer Vape Shop Chandigarh"
      className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & NAP (No Call, Only WhatsApp) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              href="/"
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-600 p-0.5 shadow-xs">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                VAPE SHOP <span className="text-emerald-600">CHANDIGARH</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Chandigarh&apos;s most reliable and authentic store for disposable vapes, pod systems, replacement coils, and imported nic salts. Delivering across Chandigarh, Mohali, and Panchkula with 100% discreet packaging.
            </p>

            {/* Service Area & WhatsApp info */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Delivery Coverage: Chandigarh, Mohali &amp; Panchkula</span>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Vape%20Shop%20Chandigarh`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  WhatsApp: Chat &amp; Order Online
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="text-slate-700 hover:text-slate-900 transition-colors">
                  {STORE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">{STORE_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Vape Categories
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="#featured-products" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Disposable Vapes</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-products" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Smart Screen Vapes</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-products" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Refillable Pod Kits</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-products" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nicotine Salts &amp; Juices</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-products" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Replacement Coils</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Tricity Express Areas
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="#delivery-areas" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vape Delivery Sector 17 &amp; 22</span>
                </Link>
              </li>
              <li>
                <Link href="#delivery-areas" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vape Delivery Sector 35 &amp; 43</span>
                </Link>
              </li>
              <li>
                <Link href="#delivery-areas" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vape Store Mohali Phase 3B2 &amp; 7</span>
                </Link>
              </li>
              <li>
                <Link href="#delivery-areas" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vape Delivery Panchkula Sector 8/9</span>
                </Link>
              </li>
              <li>
                <Link href="#delivery-areas" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vape Delivery Zirakpur &amp; Kharar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Brands */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Official Brands In-Store
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {['Geek Bar', 'Elf Bar', 'Vozol', 'Uwell Caliburn', 'Vaporesso', 'Smok', 'Nasty Juice', 'BLVK Unicorn', 'IGET', 'Lost Mary'].map((brand, i) => (
                <span 
                  key={i}
                  className="text-xs bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20have%20a%20question%20about%20your%20products`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Live WhatsApp Support</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-8 border-b border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Popular Searches &amp; Local Keywords in Chandigarh:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
            {SEO_KEYWORDS.map((kw, i) => (
              <span key={i} className="hover:text-emerald-700 transition-colors bg-white border border-slate-200 px-2 py-0.5 rounded">
                #{kw.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>

        {/* Legal & Age Disclaimer Box */}
        <div className="my-8 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-red-900 leading-relaxed">
            <span className="font-bold text-red-700 uppercase">Age Warning (18+ Only): </span>
            Nicotine is an addictive chemical. Electronic cigarettes, pod systems, and vape e-liquids sold on this platform are strictly for adult smokers and existing vapers aged 18 and older. Not intended for use by non-smokers, pregnant or nursing women, or individuals with heart conditions. Keep out of reach of children and pets.
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} Vape Shop Chandigarh. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium text-slate-600">
            Built with 100% SEO &amp; Semantic Standards for Chandigarh, Mohali &amp; Panchkula.
          </p>
        </div>
      </div>
    </footer>
  );
}
