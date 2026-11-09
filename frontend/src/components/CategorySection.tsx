'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/mockData';
import { Zap, Cpu, Droplet, Wrench, ArrowUpRight } from 'lucide-react';

export default function CategorySection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-teal-600" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-cyan-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-slate-700" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section 
      id="categories" 
      aria-label="Vape Categories Chandigarh"
      className="py-12 sm:py-16 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Chandigarh Store Collections</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Top Vape Categories in <span className="text-emerald-600">Chandigarh</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              From high-puff smart screen disposables to refillable pod systems and premium nicotine salts, choose from our verified catalog.
            </p>
          </div>

          <Link
            href="#featured-products"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group self-start md:self-auto"
          >
            <span>View All Stock</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid - White Theme */}
        {/* Categories Grid - White Theme (2*2 on Mobile Phone Mode) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {CATEGORIES.map((category) => (
            <article 
              key={category.id}
              className="group relative rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white p-3 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category Badge if any */}
              {category.badge && (
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-emerald-100 text-emerald-800 text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full">
                  {category.badge}
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-2.5 sm:mb-5 group-hover:scale-110 shadow-2xs transition-all duration-300">
                  {getIcon(category.iconName)}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                  {category.title}
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-emerald-600 mt-0.5 mb-1 sm:mb-2.5 line-clamp-1">
                  {category.tagline}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-2 sm:pt-6 mt-2 sm:mt-6 border-t border-slate-200/80 flex items-center justify-between text-[10px] sm:text-xs">
                <span className="text-slate-500 font-medium">{category.itemCount}+ Items</span>
                <Link
                  href="#featured-products"
                  className="font-bold text-emerald-600 group-hover:text-emerald-700 flex items-center gap-0.5"
                >
                  <span>Shop</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
