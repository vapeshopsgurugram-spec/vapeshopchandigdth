import React from 'react';
import { STORE_INFO, PRODUCTS, FAQS } from '@/data/mockData';

export default function SeoStructuredData() {
  const baseUrl = "https://vapeshopchandigarh.com";

  // 1. LocalBusiness / Vape Store Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${baseUrl}/#store`,
    "name": STORE_INFO.name,
    "alternateName": "Vape Store Chandigarh Tricity",
    "description": "Premier vape shop in Chandigarh offering 100% authentic disposable vapes, pod systems, e-liquids, and fast 30-45 min express delivery across Chandigarh, Mohali, and Panchkula.",
    "url": baseUrl,
    "email": STORE_INFO.email,
    "priceRange": "₹₹",
    "image": `${baseUrl}/images/vape-shop-chandigarh.jpg`,
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
    "description": "Authentic disposable vapes, pod kits, and e-juices in Chandigarh with same day 45-min delivery.",
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

  // 4. ItemList / Product Catalog Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Vapes in Chandigarh",
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": `${baseUrl}#featured-products`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewCount
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

