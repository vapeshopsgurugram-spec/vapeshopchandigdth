import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCAL_HUBS, LocalHub } from '@/data/seoData';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  ArrowRight,
  PhoneCall,
  Flame
} from 'lucide-react';

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return LOCAL_HUBS.map((hub) => ({
    area: hub.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area } = await params;
  const hub = LOCAL_HUBS.find((h) => h.slug === area);

  if (!hub) {
    return {
      title: 'Delivery Area Not Found | Vape Shop Chandigarh',
    };
  }

  const canonicalUrl = `https://www.vapeshoppchandigarh.com/delivery/${hub.slug}`;

  return {
    title: hub.title,
    description: hub.metaDescription,
    keywords: [
      `vape shop ${hub.name.toLowerCase()}`,
      `vape delivery ${hub.name.toLowerCase()}`,
      `buy vape in ${hub.name.toLowerCase()}`,
      `disposable vape ${hub.name.toLowerCase()}`,
      'same day vape delivery',
      'cash on delivery vape',
      ...hub.sectors.map((s) => `vape delivery ${s.toLowerCase()}`)
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: hub.title,
      description: hub.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: '/images/google-search-banner.jpg',
          width: 1200,
          height: 630,
          alt: `${hub.name} Vape Delivery - 30 Min Express Service`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: hub.title,
      description: hub.metaDescription,
      images: ['/images/google-search-banner.jpg'],
    },
  };
}

export default async function LocalDeliveryHubPage({ params }: PageProps) {
  const { area } = await params;
  const hub = LOCAL_HUBS.find((h) => h.slug === area);

  if (!hub) {
    notFound();
  }

  const topProducts = PRODUCTS.slice(0, 8);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `https://www.vapeshoppchandigarh.com/delivery/${hub.slug}#store`,
    name: `Vape Shop Chandigarh - ${hub.name} Delivery Hub`,
    description: hub.metaDescription,
    url: `https://www.vapeshoppchandigarh.com/delivery/${hub.slug}`,
    telephone: '+918295899660',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Google Pay, PhonePe, Paytm',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 84-85, Sector 17-C, Near Neelam Cinema',
      addressLocality: 'Chandigarh',
      addressRegion: 'CH',
      postalCode: '160017',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: hub.name,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '23:30',
      },
    ],
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
        name: 'Delivery Hubs',
        item: 'https://www.vapeshoppchandigarh.com/#delivery-areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: hub.name,
        item: `https://www.vapeshoppchandigarh.com/delivery/${hub.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hub.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const waOrderLink = `https://wa.me/918295899660?text=Hi%2C%20I%20want%20to%20order%20vapes%20for%20express%20delivery%20in%20${encodeURIComponent(hub.name)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="bg-slate-50 min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#delivery-areas" className="hover:text-emerald-600 transition-colors">Tricity Delivery</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{hub.name}</span>
          </nav>

          {/* Local Area Hero Card */}
          <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800 relative overflow-hidden mb-12">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Express 30-Min Dispatch in {hub.name}</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {hub.heading}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                {hub.subheading}
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
                <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>ETA: <strong className="text-emerald-300">{hub.time}</strong></span>
                </div>
                <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% QR Verified Stock</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Cash on Delivery &amp; UPI</span>
                </div>
              </div>

              {/* Order Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Order on WhatsApp for {hub.name}</span>
                </a>
                <Link
                  href="#popular-products"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <span>View Stock Below</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Key Sectors Covered */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Sectors &amp; Localities Covered for Rapid Delivery</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Our dispatch riders are stationed across key junctions ensuring instant delivery within {hub.time} to the following areas:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {hub.sectors.map((sector, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{sector}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hub.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Products In-Stock for this Area */}
          <section id="popular-products" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-amber-500" />
                  <span>Top In-Stock Vapes for {hub.name}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Ready for immediate 30-min courier dispatch with scratch QR verification.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-50 mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {product.puffCount && (
                        <span className="absolute top-2 left-2 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {product.puffCount.toLocaleString()} Puffs
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block">
                      {product.brand}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1 group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-sm font-black text-slate-900">
                        ₹{product.price}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through ml-1.5">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/918295899660?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20in%20${encodeURIComponent(hub.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors"
                      title="Instant WhatsApp Order"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Order</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Area Specific FAQs */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions for {hub.name}
            </h2>

            <div className="space-y-4">
              {hub.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Delivery Hubs Quick Links for Cross-Linking */}
          <section className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-center">
            <h2 className="text-lg font-bold text-emerald-950 mb-2">
              Looking for Delivery in Another Tricity Sector?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-800 mb-6 max-w-xl mx-auto">
              We cover all locations across Chandigarh, Mohali, Panchkula, and Zirakpur with 30-45 minute express dispatch.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {LOCAL_HUBS.filter((h) => h.slug !== hub.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/delivery/${other.slug}`}
                  className="bg-white hover:bg-emerald-600 hover:text-white text-slate-800 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl border border-emerald-300 transition-all shadow-2xs"
                >
                  Vape Delivery in {other.name.split('(')[0].trim()} &rarr;
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
