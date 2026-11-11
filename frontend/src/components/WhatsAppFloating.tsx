'use client';

import React from 'react';
import { STORE_INFO } from '@/data/mockData';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function WhatsAppFloating() {
  return (
    <aside 
      aria-label="Quick WhatsApp Helpline" 
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center"
    >
      {/* Only WhatsApp Floating Bubble (No Call) */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20am%20visiting%20the%20website%20and%20want%20to%20order%20vapes%20in%20Chandigarh.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-emerald-900/25 transition-all hover:scale-105"
        title="Order on WhatsApp - Vape Shop Chandigarh"
      >
        {/* Pulsating status dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        
        <span className="hidden sm:inline-block text-xs font-black tracking-wide">
          WhatsApp Order (Active)
        </span>
      </a>
    </aside>
  );
}
