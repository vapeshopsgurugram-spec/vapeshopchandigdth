'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Flame, 
  CheckCircle2, 
  Plus, 
  ExternalLink 
} from 'lucide-react';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { addToCart } = useCart();

  const filteredProducts = activeTab === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const getWhatsAppLink = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Vape Shop Chandigarh! I want to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n*Delivery Area:* Chandigarh / Mohali / Panchkula\n\nPlease confirm availability and rider delivery time.`
    );
    return `https://wa.me/${STORE_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section 
      id="featured-products" 
      aria-label="Featured Vapes Chandigarh"
      className="py-12 sm:py-20 bg-slate-50/50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine Stock in Chandigarh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best Selling Vapes &amp; Pod Kits in <span className="text-emerald-600">Chandigarh</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Official Elfbar, Nasty, Lost Mary, Uwell Caliburn &amp; Vaporesso devices with guaranteed same-day 45-min delivery across Tricity.
          </p>
        </div>

        {/* Filter Tabs - Clean White Theme */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'disposable', label: 'Disposables' },
            { id: 'pod-system', label: 'Pod Kits' },
            { id: 'e-liquid', label: 'Nic Salts' },
            { id: 'accessories', label: 'Coils & Pods' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid - Ultra Clean White Cards with Full-Width Images (Zero Side Gap) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <article 
              key={product.id}
              className="group relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Full-Width Product Image (Edge-to-Edge, Zero Side Space) */}
              <Link 
                href={`/product/${product.slug}`}
                className="relative w-full aspect-square bg-slate-50 overflow-hidden block"
                title={`View ${product.name} details`}
              >
                <Image
                  src={product.image}
                  alt={`${product.name} - Vape Shop Chandigarh`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Clean Bottom Content Box */}
              <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                {/* Product Title */}
                <div className="mb-2">
                  <Link href={`/product/${product.slug}`} className="block group-hover:text-emerald-600 transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-emerald-600 leading-snug" title={product.name}>
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* Pricing & Stock */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-2.5">
                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                      <span className="text-sm sm:text-base font-black text-slate-900">
                        ₹{product.price}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-emerald-700 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Stock</span>
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[10px] sm:text-xs py-2 px-1.5 rounded-lg sm:rounded-xl border border-slate-200 transition-colors cursor-pointer"
                      title="Add to order basket"
                    >
                      <Plus className="w-3.5 h-3.5 text-emerald-600" />
                      <span>+ Add</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-xs py-2 px-1.5 rounded-lg sm:rounded-xl shadow-xs transition-all whitespace-nowrap"
                      title={`Buy ${product.name} on WhatsApp in Chandigarh`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Looking for a specific device, pod cartridge, or coil?</h3>
            <p className="text-sm text-slate-600 mt-1">
              We carry custom orders and hard-to-find pod coils for all major international brands.
            </p>
          </div>
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20am%20looking%20for%20a%20specific%20vape%20device%20not%20listed%20on%20website`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
          >
            <span>Ask on WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
