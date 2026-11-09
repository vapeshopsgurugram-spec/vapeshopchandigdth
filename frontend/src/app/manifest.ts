import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vape Shop Chandigarh - 45 Min Delivery',
    short_name: 'Vape Shop CHD',
    description: 'Authentic disposable vapes, pod systems and imported e-liquids in Chandigarh, Mohali & Panchkula.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
