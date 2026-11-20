import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/seoData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Calendar, Clock, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vape Guides & Insights | Vape Shop Chandigarh Blog',
  description: 'Expert vaping guides, authentication tips, flavor reviews, and same-day delivery updates for adult vapers in Chandigarh, Mohali, and Panchkula.',
  alternates: {
    canonical: 'https://www.vapeshoppchandigarh.com/blog',
  },
  openGraph: {
    title: 'Vape Guides & Advice - Vape Shop Chandigarh',
    description: 'Learn how to verify authentic vapes, choose the right disposable puff count, and get instant 30-min delivery in Chandigarh.',
    url: 'https://www.vapeshoppchandigarh.com/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.vapeshoppchandigarh.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vape Guides',
        item: 'https://www.vapeshoppchandigarh.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Vape Guides &amp; Blog</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Expert Guides &amp; Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Vape Shop Chandigarh <span className="text-emerald-600">Guides &amp; Blog</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Helpful buying advice, QR authentication walkthroughs, and local Tricity vape delivery tips written by our in-house specialists.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
