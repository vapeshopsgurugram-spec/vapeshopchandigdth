'use client';

import React, { useState } from 'react';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Star, 
  Flame, 
  CheckCircle2, 
  Sparkles,
  Zap,
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
            Official Geek Bar, Elfbar, Vozol, Uwell Caliburn &amp; Vaporesso devices with guaranteed same-day 45-min delivery across Tricity.
          </p>
        </div>

        {/* Filter Tabs - Clean White Theme */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'disposable', label: 'Disposables' },
            { id: 'pod-system', label: 'Pod Kits' },
            { id: 'e-liquid', label: 'Nic Salts' },
            { id: 'accessories', label: 'Coils' },
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

        {/* Products Grid - Crisp White Cards (2*2 on Mobile Phone Mode) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredProducts.map((product) => {
            const discountPercentage = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            );

            return (
              <article 
                key={product.id}
                className="group relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 p-2.5 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Header Badges */}
                <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 sm:px-2.5 py-0.5 rounded-full truncate max-w-[90px] sm:max-w-none">
                    {product.brand}
                  </span>
                  
                  {product.isBestSeller && (
                    <span className="inline-flex items-center gap-0.5 text-[8px] sm:text-[10px] font-bold uppercase text-amber-800 bg-amber-50 border border-amber-200 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                      <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />
                      <span className="hidden xs:inline sm:inline">Best Seller</span>
                      <span className="xs:hidden sm:hidden">Hot</span>
                    </span>
                  )}
                  {product.isNewArrival && (
                    <span className="inline-flex items-center gap-0.5 text-[8px] sm:text-[10px] font-bold uppercase text-teal-800 bg-teal-50 border border-teal-200 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-500" />
                      New
                    </span>
                  )}
                </div>

                {/* Device Graphic Box */}
                <div className="relative w-full h-28 sm:h-44 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden group-hover:bg-emerald-50/30 transition-colors">
                  
                  {/* Puff count pill */}
                  {product.puffCount && (
                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-white border border-slate-200 text-slate-800 text-[8px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded shadow-2xs">
                      ⚡ {product.puffCount.toLocaleString()}
                    </div>
                  )}

                  {/* Discount percentage tag */}
                  <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-emerald-100 text-emerald-800 text-[8px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded">
                    {discountPercentage}% OFF
                  </div>

                  {/* Device Graphic Icon */}
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Zap className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>

                  {/* Nicotine spec */}
                  {product.nicotine && (
                    <div className="mt-1.5 sm:mt-3 text-[9px] sm:text-[11px] font-semibold text-slate-600 bg-white px-1.5 sm:px-2.5 py-0.5 rounded-full border border-slate-200">
                      {product.nicotine}
                    </div>
                  )}
                </div>

                {/* Rating & Review count */}
                <div className="flex items-center gap-1 sm:gap-1.5 mt-2 sm:mt-3 text-[10px] sm:text-xs">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-900 font-bold">{product.rating}</span>
                  <span className="text-slate-400 text-[9px] sm:text-xs">({product.reviewCount})</span>
                </div>

                {/* Title & Description */}
                <div className="my-1.5 sm:my-2.5 flex-1">
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Flavors preview if available (compact on mobile) */}
                {product.flavors && product.flavors.length > 0 && (
                  <div className="hidden sm:block mb-3">
                    <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                      Top Flavors in Chandigarh:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.flavors.slice(0, 3).map((f, i) => (
                        <span 
                          key={i}
                          className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing & Order CTA */}
                <div className="pt-2 sm:pt-3 border-t border-slate-200">
                  <div className="flex items-baseline justify-between mb-2 sm:mb-3">
                    <div className="flex items-baseline gap-1 sm:gap-2">
                      <span className="text-sm sm:text-xl font-black text-slate-900">₹{product.price}</span>
                      <span className="text-[10px] sm:text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                    </div>
                    <span className="text-[9px] sm:text-[11px] text-emerald-700 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                      <span className="hidden xs:inline sm:inline">Stock</span>
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[10px] sm:text-xs py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl border border-slate-200 transition-colors cursor-pointer"
                      title="Add to order basket"
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                      <span>Add</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-xs py-2 sm:py-2.5 px-1 sm:px-2 rounded-lg sm:rounded-xl shadow-xs transition-all whitespace-nowrap"
                      title={`Buy ${product.name} on WhatsApp in Chandigarh`}
                    >
                      <WhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
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
