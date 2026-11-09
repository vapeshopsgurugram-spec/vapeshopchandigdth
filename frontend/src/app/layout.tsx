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
    default: 'Best Vape Shop in Chandigarh | Same Day 45-Min Delivery Tricity',
    template: '%s | Vape Shop Chandigarh',
  },
  description: 'Looking for the #1 Vape Shop in Chandigarh? Buy 100% authentic disposable vapes, pod systems & nic salts with fast 45-min delivery across Chandigarh, Mohali & Panchkula. Official Geek Bar, Elf Bar, Vozol & Caliburn.',
  keywords: [
    'vape shop chandigarh',
    'vape store chandigarh',
    'buy vape online chandigarh',
    'disposable vape chandigarh',
    'vape delivery chandigarh',
    'vape shop near me chandigarh',
    'vape shop mohali',
    'vape shop panchkula',
    'vape delivery sector 17 chandigarh',
    'vape delivery sector 35 chandigarh',
    'geek bar pulse chandigarh',
    'elf bar chandigarh',
    'vozol vape chandigarh',
    'uwell caliburn chandigarh',
    'vaporesso xros chandigarh',
    'e liquid chandigarh',
    'nic salt e juice tricity',
    'same day vape delivery chandigarh',
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
    title: 'Best Vape Shop in Chandigarh | Authentic Vapes & Same Day Delivery',
    description: '100% Authentic Disposable Vapes, Pod Kits & Imported Nic Salts delivered across Chandigarh, Mohali & Panchkula in 45 minutes.',
    url: 'https://vapeshopchandigarh.com',
    siteName: 'Vape Shop Chandigarh',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Vape Shop in Chandigarh | Same Day Delivery Tricity',
    description: 'Original Geek Bar, Elf Bar, Vozol, Caliburn vapes delivered in 45 mins in Chandigarh, Mohali & Panchkula.',
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
    'geo.placename': 'Chandigarh',
    'geo.position': '30.741482;76.768066',
    'ICBM': '30.741482, 76.768066',
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
