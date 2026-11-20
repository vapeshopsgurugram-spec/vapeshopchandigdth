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
  metadataBase: new URL('https://www.vapeshoppchandigarh.com'),
  title: {
    default: 'Vape Shop Chandigarh | Buy Disposable Vapes Online | 30 Min Delivery',
    template: '%s | Vape Shop Chandigarh',
  },
  description: "Chandigarh's premier destination for 100% authentic disposable vapes & pod kits. Order Elfbar, IGET & Lost Mary with superfast 30-min express delivery in Tricity. Cash on Delivery & UPI available.",
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
  authors: [{ name: 'Vape Shop Chandigarh', url: 'https://www.vapeshoppchandigarh.com' }],
  creator: 'Vape Shop Chandigarh',
  publisher: 'Vape Shop Chandigarh',
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.vapeshoppchandigarh.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Vape Shop Chandigarh | Buy Disposable Vapes Online | 30 Min Delivery',
    description: "Chandigarh's premier destination for 100% authentic disposable vapes & pod kits with 30-min express delivery across Chandigarh, Mohali & Panchkula.",
    url: 'https://www.vapeshoppchandigarh.com',
    siteName: 'Vape Shop Chandigarh',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/google-search-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Vape Shop Chandigarh - Premium Disposable Vapes & 30 Min Delivery',
        type: 'image/jpeg',
      },
      {
        url: '/images/google-search-banner.png',
        width: 1200,
        height: 630,
        alt: 'Vape Shop Chandigarh - Premium Vape Collection Showcase',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vape Shop Chandigarh | Buy Disposable Vapes Online (30 Min Delivery)',
    description: '100% authentic disposable vapes & pods delivered in 30 minutes across Chandigarh & Tricity. Cash on Delivery available.',
    images: ['/images/google-search-banner.jpg'],
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
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white pb-16 lg:pb-0 overflow-x-hidden max-w-full w-full">
        <CartProvider>
          {children}
          <AppClientOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
