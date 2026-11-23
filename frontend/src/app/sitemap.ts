import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/mockData';
import { LOCAL_HUBS, BLOG_POSTS } from '@/data/seoData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vapeshoppchandigarh.com';
  const currentDate = new Date('2026-11-20T00:00:00.000Z');

  // Main Homepage, Blog Index & HTML Sitemap
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.80,
    },
  ];

  // Local Area SEO Hubs (Chandigarh, Mohali, Panchkula, Zirakpur)
  const deliveryRoutes: MetadataRoute.Sitemap = LOCAL_HUBS.map((hub) => ({
    url: `${baseUrl}/delivery/${hub.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.90,
  }));

  // Dynamic Product Pages for Google Indexing
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.85,
  }));

  // Informational Blog Guide Routes
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.80,
  }));

  return [...staticRoutes, ...deliveryRoutes, ...productRoutes, ...blogRoutes];
}
