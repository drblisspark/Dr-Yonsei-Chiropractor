import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/userfiles',
        '/.env',
        '/settings.py',
        '/config/production.json',
        '/uploads../.env',
        '/.terraform/',
        '/.dev.vars.staging',
        '/@fs/.env',
      ],
    },
    sitemap: 'https://yonseichiro.com/sitemap.xml',
  };
}
