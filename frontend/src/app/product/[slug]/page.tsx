import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ProductActionButtons from './ProductActionButtons';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  Zap, 
  Package, 
  HelpCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Vape Shop Chandigarh',
    };
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return {
    title: `Buy ${product.name} in Chandigarh | ₹${product.price} (${discount}% OFF)`,
    description: `Order authentic ${product.name} at ₹${product.price} (Original ₹${product.originalPrice}). 100% Genuine with scratch QR code verification. Superfast 30-45 min delivery in Chandigarh, Mohali & Panchkula. Cash on Delivery & UPI available.`,
    keywords: [
      product.name.toLowerCase(),
      `buy ${product.brand.toLowerCase()} chandigarh`,
      `${product.brand.toLowerCase()} vape price chandigarh`,
      'vape delivery chandigarh',
      'vape shop sector 17 chandigarh',
      'vape shop sector 35 chandigarh',
      'same day vape delivery tricity',
    ],
    alternates: {
      canonical: `https://vapeshopchandigarh.com/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - ₹${product.price} | Vape Shop Chandigarh`,
      description: `Original ${product.name} with 100% QR code verification and 45-min delivery across Chandigarh, Mohali & Panchkula.`,
      url: `https://vapeshopchandigarh.com/product/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: `${product.name} Vape Shop Chandigarh`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Buy ${product.name} in Chandigarh - ₹${product.price}`,
      description: `Fast 45-min delivery across Chandigarh & Tricity. 100% authentic stock.`,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const relatedProducts = PRODUCTS
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  // Schema.org structured data for Google Product Rich Snippets
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://vapeshopchandigarh.com${product.image}`,
    description: product.description,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: `https://vapeshopchandigarh.com/product/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: STORE_INFO.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vapeshopchandigarh.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://vapeshopchandigarh.com/#featured-products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://vapeshopchandigarh.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Google SEO JSON-LD Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-slate-50 min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#featured-products" className="hover:text-emerald-600 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>

          {/* Product Hero Banner / Showcase Box */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-8 lg:p-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Product Visual Banner (Left 5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-[420px] rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-center overflow-hidden group">
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs">
                      {discountPercentage}% OFF
                    </span>
                    {product.puffCount && (
                      <span className="bg-white/95 border border-slate-200 text-slate-900 text-xs font-black px-2.5 py-1 rounded-md shadow-xs">
                        ⚡ {product.puffCount.toLocaleString()} Puffs
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-white/95 border border-slate-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Original
                    </span>
                  </div>

                  {/* High Quality Product Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} - Buy in Chandigarh`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Trust mini-strip below image */}
                <div className="grid grid-cols-3 gap-2 w-full max-w-[420px] mt-4 text-center">
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-slate-800">QR Scan Code</div>
                    <div className="text-[9px] text-slate-500">Official Brand Seal</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <Truck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-slate-800">45-Min Express</div>
                    <div className="text-[9px] text-slate-500">Chandigarh &amp; Tricity</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <Package className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-slate-800">100% Discreet</div>
                    <div className="text-[9px] text-slate-500">Plain Outer Box</div>
                  </div>
                </div>
              </div>

              {/* Product Information & Order Column (Right 7 Cols) */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Brand & Stock Status */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Brand: {product.brand}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    In Stock in Chandigarh
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug mt-2">
                  {product.name}
                </h1>

                {/* Rating Bar */}
                <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 font-medium">{product.reviewCount} Verified Tricity Buyers</span>
                </div>

                {/* Pricing Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 my-5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ₹{product.price}
                    </span>
                    <span className="text-base sm:text-lg text-slate-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-black px-2.5 py-1 rounded-md">
                      You Save ₹{product.originalPrice - product.price} ({discountPercentage}% OFF)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Inclusive of all local dispatch taxes • Free express rider delivery on orders over ₹1,500
                  </p>
                </div>

                {/* Flavors preview if available */}
                {product.flavors && product.flavors.length > 0 && (
                  <div className="mb-5">
                    <div className="text-xs uppercase font-extrabold text-slate-700 mb-2">
                      Available Flavor Blends:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor, index) => (
                        <span 
                          key={index}
                          className="text-xs font-bold bg-white border border-slate-300 text-slate-800 px-3 py-1.5 rounded-lg shadow-2xs"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nicotine spec pill */}
                {product.nicotine && (
                  <div className="mb-6 flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-600">Nicotine Strength:</span>
                    <span className="bg-slate-100 border border-slate-200 font-black text-slate-900 px-2.5 py-0.5 rounded-md">
                      {product.nicotine}
                    </span>
                  </div>
                )}

                {/* Action Buttons Client Component (Order on WhatsApp + Add to Basket) */}
                <ProductActionButtons product={product} />

                {/* Delivery Assurance Notice */}
                <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span><strong>Chandigarh Delivery:</strong> 30 - 45 Minutes (Sector 17, 22, 35, 43, 8, etc.)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span><strong>Mohali &amp; Panchkula:</strong> 35 - 50 Minutes direct doorstep dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span><strong>Payment Modes:</strong> Cash on Delivery (COD), UPI (GPay, PhonePe, Paytm)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Product Specifications & Local SEO Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Detailed Description (2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                About {product.name}
              </h2>
              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Looking to buy <strong>{product.name}</strong> in Chandigarh, Mohali, or Panchkula? You are at the right place. We stock 100% authentic, factory-sealed {product.brand} devices directly from certified distributors, complete with official scratch-and-scan QR verification codes.
                </p>
                <p>
                  {product.description}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  Why Buy {product.name} from Vape Shop Chandigarh?
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Fastest Local Delivery:</strong> Local express riders stationed across Sector 17, Sector 35, and Mohali deliver right to your location in 30-45 minutes.</li>
                  <li><strong>100% Genuine Guaranteed:</strong> Zero clones or counterfeit stock. Every unit features an un-scratched QR code for direct manufacturer website verification.</li>
                  <li><strong>Complete Privacy:</strong> Your order is packaged in an opaque, unbranded plain carton with zero vape mentions.</li>
                  <li><strong>Flexible Payments:</strong> Pay comfortably on delivery with Cash or any UPI app.</li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications Table (1 col) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Product Specifications
              </h3>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Brand</span>
                  <span className="text-slate-900 font-bold">{product.brand}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Category</span>
                  <span className="text-slate-900 font-bold capitalize">{product.category.replace('-', ' ')}</span>
                </div>
                {product.puffCount && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-500 font-medium">Puff Capacity</span>
                    <span className="text-emerald-700 font-black">{product.puffCount.toLocaleString()} Puffs</span>
                  </div>
                )}
                {product.nicotine && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-500 font-medium">Nicotine Level</span>
                    <span className="text-slate-900 font-bold">{product.nicotine}</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Authenticity</span>
                  <span className="text-emerald-700 font-bold">100% QR Verified</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Dispatch Hub</span>
                  <span className="text-slate-900 font-bold">Chandigarh Tricity</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Delivery Time</span>
                  <span className="text-slate-900 font-bold">30 - 45 Minutes</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Packaging</span>
                  <span className="text-slate-900 font-bold">100% Discreet Box</span>
                </div>
              </div>
            </div>

          </div>

          {/* Related Products Grid */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Frequently Bought Together in Chandigarh
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Other trending {product.brand} &amp; {product.category.replace('-', ' ')} devices
                  </p>
                </div>
                <Link 
                  href="/#featured-products"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>View All 25 Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {relatedProducts.map((rel) => (
                  <article 
                    key={rel.id}
                    className="group rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
                  >
                    {/* Full-width Image */}
                    <Link href={`/product/${rel.slug}`} className="relative w-full aspect-square bg-slate-50 overflow-hidden block">
                      <Image
                        src={rel.image}
                        alt={`${rel.name} in Chandigarh`}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                      />
                    </Link>

                    {/* Content */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                      <Link href={`/product/${rel.slug}`} className="block mb-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                          {rel.name}
                        </h4>
                      </Link>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-sm sm:text-base font-black text-slate-900">₹{rel.price}</span>
                          <span className="text-[10px] sm:text-xs text-slate-400 line-through">₹{rel.originalPrice}</span>
                        </div>
                        <Link
                          href={`/product/${rel.slug}`}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

