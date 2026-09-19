import { MetadataRoute } from 'next';
import { insights } from './lib/insights-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yonseichiro.com';

  const staticPages = [
    '/',
    '/about',
    '/accessibility',
    '/contact',
    '/message',
    '/reviews',
    '/services',
    '/insights',
    '/techniques/about-chiropractic',
    '/techniques/car-accident',
    '/techniques/innate-intelligence',
    '/techniques/subluxation',
    '/techniques/tmj',
    '/techniques/upper-cervical',
  ];

  const localizedPages = ['en', 'ko'].flatMap((lng) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lng}${page === '/' ? '' : page}`,
      lastModified: new Date('2026-02-09'),
      changeFrequency: 'monthly' as const,
      priority: page === '/' ? 1 : 0.8,
    }))
  );

  const localizedInsights = ['en', 'ko'].flatMap((lng) =>
    insights.map((insight) => ({
      url: `${baseUrl}/${lng}/insights/${insight.slug}`,
      lastModified: new Date(insight.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...localizedPages, ...localizedInsights];
}
