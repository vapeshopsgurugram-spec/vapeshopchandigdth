import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/data/seoData';
import { STORE_INFO } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  Truck,
  CheckCircle2
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Vape Shop Chandigarh',
    };
  }

  const canonicalUrl = `https://www.vapeshoppchandigarh.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Vape Shop Chandigarh Guide`,
    description: post.metaDescription,
    keywords: [
      ...post.tags.map((t) => t.toLowerCase()),
      'vape shop chandigarh',
      'vape delivery chandigarh',
      'disposable vape review',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: '2026-11-20T00:00:00.000Z',
      authors: [post.author],
      images: [
        {
          url: '/images/google-search-banner.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: ['/images/google-search-banner.jpg'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: '2026-11-20T00:00:00.000Z',
    dateModified: '2026-11-20T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'Vape Shop Chandigarh',
      url: 'https://www.vapeshoppchandigarh.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vape Shop Chandigarh',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vapeshoppchandigarh.com/images/vape-shop-chandigarh-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vapeshoppchandigarh.com/blog/${post.slug}`,
    },
    image: 'https://www.vapeshoppchandigarh.com/images/google-search-banner.jpg',
  };

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
        name: 'Guides',
        item: 'https://www.vapeshoppchandigarh.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.vapeshoppchandigarh.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold line-clamp-1">{post.title}</span>
          </nav>

          {/* Article Header Card */}
          <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="inline-flex items-center gap-1 font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                {post.author}
              </span>
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

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-2 rounded-r-xl">
              {post.excerpt}
            </p>
          </header>

          {/* Article Body Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 mb-8 text-slate-800">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* In-Article WhatsApp CTA Banner */}
            <div className="rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 my-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    <Truck className="w-4 h-4" />
                    <span>Instant 30-Min Tricity Dispatch</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Need an Authentic Vape in Chandigarh Today?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    Order 100% genuine Elfbar, Nasty, Lost Mary &amp; pod kits with scratch QR verification. Cash on Delivery &amp; discreet packaging guaranteed.
                  </p>
                </div>

                <a
                  href={`https://wa.me/918295899660?text=Hi%2C%20I%20read%20your%20guide%20on%20${encodeURIComponent(post.title)}%20and%20want%20to%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-md shadow-emerald-600/30 text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Key Tags */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Other Guides Section */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Explore More Buying &amp; Safety Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) => p.slug !== post.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block group"
                >
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <span className="text-xs text-slate-500 mt-2 block font-medium">
                    {other.readTime} • Read guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
