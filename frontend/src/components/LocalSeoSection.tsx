'use client';

import React, { useState } from 'react';
import { DELIVERY_AREAS, STORE_INFO } from '@/data/mockData';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  MapPin, 
  Clock, 
  Truck, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export default function LocalSeoSection() {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
  const activeArea = DELIVERY_AREAS[selectedAreaIndex];

  return (
    <section 
      id="delivery-areas" 
      aria-label="Vape Delivery Locations Chandigarh Tricity"
      className="py-12 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-emerald-600" />
            <span>Fast Express Dispatch Across Tricity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Same Day Express Vape Delivery in <span className="text-emerald-600">Chandigarh, Mohali &amp; Panchkula</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Our dedicated delivery riders ensure you get your favorite vape devices, coils, and flavors within 30 to 60 minutes anywhere in the Tricity region.
          </p>
        </div>

        {/* Interactive Delivery Area Selector - Full Width */}
        <div className="space-y-6">
          {/* Area Switcher Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {DELIVERY_AREAS.map((area, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedAreaIndex(idx)}
                className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold text-center transition-all cursor-pointer ${
                  selectedAreaIndex === idx
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 border border-emerald-600'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {area.name.split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Selected Area Details Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>{activeArea.name}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">{activeArea.charge}</p>
              </div>

              <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>ETA: {activeArea.time}</span>
              </div>
            </div>

            {/* Sectors Covered in this Area */}
            <div className="pt-6">
              <h4 className="text-xs uppercase font-bold text-slate-600 tracking-wider mb-3">
                Key Sectors &amp; Landmarks Covered for Instant Delivery:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeArea.sectors.map((sector, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Packaging Reassurance & WhatsApp Order CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Discreet Plain Box Packaging • Live WhatsApp Tracking</span>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20need%20urgent%20vape%20delivery%20in%20${encodeURIComponent(activeArea.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Order Delivery in {activeArea.name.split(' ')[0]}</span>
              </a>
            </div>
          </div>

          {/* Local Chandigarh SEO Authority Content Block */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Why We Are the #1 Rated Vape Shop in Chandigarh, Mohali &amp; Panchkula
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Finding genuine, factory-sealed disposable vapes and refillable pod kits in the Tricity region is now easier than ever. <strong>Vape Shop Chandigarh</strong> delivers 100% original products directly to your doorstep in 30 to 45 minutes across all residential and commercial sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Chandigarh Sectors Covered
                </h4>
                <p className="leading-relaxed">
                  Sector 17, Sector 35, Sector 22, Sector 43, Sector 8, Sector 9, Sector 10, Sector 11, Sector 15, Sector 20, Sector 26, Sector 34, Sector 44, Panjab University campus &amp; Manimajra.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Mohali &amp; Kharar Delivery
                </h4>
                <p className="leading-relaxed">
                  Phase 3B2, Phase 7, Phase 5, Phase 11, Sector 70, Sector 68, Sector 82 IT City, Aerocity, Homeland Heights, Kharar highway &amp; Sunny Enclave.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Panchkula &amp; Zirakpur
                </h4>
                <p className="leading-relaxed">
                  Sector 8 Panchkula, Sector 9, Sector 11, Sector 14, Sector 20, MDC Sector 4 &amp; 5, VIP Road Zirakpur, Dhakoli, &amp; Airport Road.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span>⚡ Popular Searches: Vape Shop Near Me, Buy Elfbar in Chandigarh, Nasty Bolt 50K Chandigarh, Caliburn G3 Pods Mohali, Same Day Vape Delivery Panchkula</span>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20want%20to%20order%20vapes%20in%20Chandigarh`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
