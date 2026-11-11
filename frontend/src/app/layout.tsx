import type { Metadata, Viewport } from 'next';
import './globals.css';
import SeoStructuredData from '@/components/SeoStructuredData';
import AppClientOverlay from '@/components/AppClientOverlay';
import { CartProvider } from '@/context/CartContext';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vapeshopchandigarh.com'),
  title: {
    default: 'Best Vape Shop in Chandigarh | #1 Vape Store 30-45 Min Same Day Delivery',
    template: '%s | Vape Shop Chandigarh',
  },
  description: '#1 Rated Vape Shop in Chandigarh. Buy 100% authentic disposable vapes, refillable pod kits, coils & imported nic salts (Elfbar, Nasty, Lost Mary, Uwell Caliburn, Geekvape). Same-day 30-45 min express delivery across Chandigarh (Sector 17, 22, 35, 43), Mohali & Panchkula. Cash on delivery & UPI.',
  keywords: [
    'vape shop chandigarh',
    'vape store chandigarh',
    'buy vape online chandigarh',
    'vape delivery chandigarh',
    'vape shop near me chandigarh',
    'vape shop sector 17 chandigarh',
    'vape shop sector 35 chandigarh',
    'vape shop sector 22 chandigarh',
    'vape shop mohali',
    'vape delivery mohali phase 7',
    'vape shop panchkula',
    'disposable vape chandigarh',
    'elfbar bc5000 chandigarh',
    'nasty bolt 50k chandigarh',
    'lost mary mt35000 chandigarh',
    'uwell caliburn g3 chandigarh',
    'geekvape b60 chandigarh',
    'voopoo argus pod chandigarh',
    'same day vape delivery tricity',
    'cash on delivery vape chandigarh',
    'smoke shop chandigarh',
    'e-cigarette delivery chandigarh',
  ],
  authors: [{ name: 'Vape Shop Chandigarh', url: 'https://vapeshopchandigarh.com' }],
  creator: 'Vape Shop Chandigarh',
  publisher: 'Vape Shop Chandigarh',
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: 'https://vapeshopchandigarh.com',
  },
  openGraph: {
    title: 'Best Vape Shop in Chandigarh | Authentic Vapes & Same Day 30-45 Min Delivery',
    description: '100% Authentic Disposable Vapes, Pod Kits & Imported Nic Salts delivered across Chandigarh, Mohali & Panchkula in 30-45 minutes. Cash on Delivery available.',
    url: 'https://vapeshopchandigarh.com',
    siteName: 'Vape Shop Chandigarh',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Vape Shop in Chandigarh - 45-Min Same Day Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Vape Shop in Chandigarh | Same Day 45-Min Delivery',
    description: 'Original Elfbar, Nasty, Lost Mary, Caliburn & Geekvape devices delivered across Chandigarh, Mohali & Panchkula.',
    images: ['/images/hero-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-CH',
    'geo.placename': 'Chandigarh, Mohali, Panchkula, Tricity',
    'geo.position': '30.741482;76.768066',
    'ICBM': '30.741482, 76.768066',
    'target': 'all',
    'audience': 'adult',
    'coverage': 'Chandigarh Tricity India',
    'distribution': 'Local',
    'rating': 'mature',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SeoStructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white pb-16 lg:pb-0">
        <CartProvider>
          {children}
          <AppClientOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
