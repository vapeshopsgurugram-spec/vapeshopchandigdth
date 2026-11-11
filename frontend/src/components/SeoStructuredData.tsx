import React from 'react';
import { STORE_INFO, PRODUCTS, FAQS } from '@/data/mockData';

export default function SeoStructuredData() {
  const baseUrl = "https://vapeshopchandigarh.com";

  // 1. LocalBusiness / Vape Store Schema for Google Local Maps & Search Pack
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${baseUrl}/#store`,
    "name": STORE_INFO.name,
    "alternateName": [
      "Vape Store Chandigarh",
      "Vape Shop Near Me Chandigarh",
      "Vape Delivery Chandigarh",
      "Best Vape Shop Mohali",
      "Vape Store Panchkula"
    ],
    "description": "Premier vape shop in Chandigarh offering 100% authentic disposable vapes (Elfbar, Nasty, Lost Mary), refillable pod kits (Caliburn, Geekvape, Voopoo, Vaporesso), e-liquids, and superfast 30-45 min express delivery across Chandigarh, Mohali, and Panchkula.",
    "url": baseUrl,
    "email": STORE_INFO.email,
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Paytm, Net Banking",
    "image": [
      `${baseUrl}/images/google-search-banner.jpg`,
      `${baseUrl}/images/google-search-banner.png`,
      `${baseUrl}/images/og-banner.jpg`,
      `${baseUrl}/images/hero-banner-2.png`
    ],
    "logo": `${baseUrl}/images/vape-shop-chandigarh-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SCO 84-85, Sector 17-C, Near Neelam Cinema",
      "addressLocality": "Chandigarh",
      "addressRegion": "CH",
      "postalCode": "160017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": STORE_INFO.geo.latitude,
      "longitude": STORE_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "23:30"
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Chandigarh"
      },
      {
        "@type": "City",
        "name": "Mohali"
      },
      {
        "@type": "City",
        "name": "Panchkula"
      },
      {
        "@type": "City",
        "name": "Zirakpur"
      },
      {
        "@type": "City",
        "name": "Kharar"
      }
    ],
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Chandigarh",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "580",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://wa.me/919876543210"
    ]
  };

  // 2. WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": STORE_INFO.name,
    "url": baseUrl,
    "description": "Authentic disposable vapes, pod kits, and e-juices in Chandigarh with same day 30-45 min delivery.",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/google-search-banner.jpg`,
      "width": "1200",
      "height": "630",
      "caption": "Vape Shop Chandigarh - Premium Vape Collection"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // 3. FAQPage Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 4. ItemList / Product Catalog Schema with Canonical Product Page URLs
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Vapes & Pods in Chandigarh",
    "description": "Comprehensive verified catalog of disposable vapes, pod systems, and nic salts available in Chandigarh with same-day express delivery.",
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `${baseUrl}${product.image}`,
        "description": product.description,
        "sku": product.id,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": `${baseUrl}/product/${product.slug}`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating.toString(),
          "reviewCount": product.reviewCount.toString()
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
