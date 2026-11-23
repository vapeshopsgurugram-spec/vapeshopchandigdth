import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import { LOCAL_HUBS, BLOG_POSTS } from '@/data/seoData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  Package, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Directory & All Pages | Vape Shop Chandigarh Sitemap',
  description: 'Complete directory of all authentic disposable vapes, refillable pod kits, delivery locations, and vaping guides available at Vape Shop Chandigarh.',
  alternates: {
    canonical: 'https://www.vapeshoppchandigarh.com/sitemap',
  },
};

export default function HtmlSitemapPage() {
  const categories = [
    { id: 'disposable', name: 'Disposable Vapes' },
    { id: 'pod-system', name: 'Refillable Pod Kits' },
    { id: 'e-liquid', name: 'Nicotine Salts & E-Liquids' },
    { id: 'accessories', name: 'Replacement Coils & Pods' },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Site Directory (HTML Sitemap)</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Full Website Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Vape Shop Chandigarh <span className="text-emerald-600">Sitemap</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Quickly browse all product pages, local Tricity delivery hubs, and helpful vaping guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Tricity Delivery Hubs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Local Express Delivery Hubs</span>
              </h2>
              <ul className="space-y-3">
                {LOCAL_HUBS.map((hub) => (
                  <li key={hub.slug} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                    <Link
                      href={`/delivery/${hub.slug}`}
                      className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors block"
                    >
                      {hub.name}
                    </Link>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      ETA: {hub.time} • 30-min express dispatch
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Educational & Buying Guides */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>Vape Guides &amp; Articles</span>
              </h2>
              <ul className="space-y-3">
                <li className="border-b border-slate-100 pb-2.5">
                  <Link
                    href="/blog"
                    className="text-sm font-bold text-emerald-700 hover:underline block"
                  >
                    View All Guides &amp; Insights &rarr;
                  </Link>
                </li>
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {post.readTime} • {post.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Core Store Pages */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-emerald-600" />
                <span>Core Store Pages</span>
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Home - Best Vape Shop in Chandigarh
                  </Link>
                </li>
                <li>
                  <Link href="/#featured-products" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Featured Bestsellers &amp; Puffs
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Product Categories
                  </Link>
                </li>
                <li>
                  <Link href="/#delivery-areas" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Tricity Delivery Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/#reviews" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Customer Reviews &amp; Ratings
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs" className="text-slate-800 hover:text-emerald-600 font-medium">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* All 25 In-Stock Products Directory */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Complete Catalog: All 25 Verified Products
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Click any product below to view detailed specifications, scratch QR verification, and instant WhatsApp ordering.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <Link href={`/product/${product.slug}`} className="block">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {product.brand}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-slate-900">₹{product.price}</span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      View &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
