import type { Metadata } from 'next';

export const siteUrl = 'https://yonseichiro.com';
export const supportedLanguages = ['en', 'ko'] as const;

export const targetKeywords = [
  'Korean chiropractor',
  'Korean-speaking chiropractor',
  'Korean chiropractor Los Angeles',
  'Korean chiropractor 90010',
  'Korean chiropractor 90057',
  'upper cervical chiropractor',
  'upper cervical chiropractic care',
  'cervical alignment chiropractor',
  'neck pain chiropractor',
  'headache chiropractor',
  'migraine chiropractor',
  'posture correction chiropractor',
  'non-force chiropractic adjustment',
];

type Language = (typeof supportedLanguages)[number];

const pageSeo = {
  about: {
    en: ['About Dr. Park | Yonsei Chiropractic Los Angeles', 'Meet Dr. Hyeon Joo Park and learn about Yonsei Chiropractic\'s Palmer Upper Cervical approach in Los Angeles.'],
    ko: ['About Dr. Park | Yonsei Chiropractic Los Angeles', 'Learn about Dr. Park and Yonsei Chiropractic\'s specialized upper cervical care in Los Angeles.'],
  },
  contact: {
    en: ['Korean Chiropractor in Los Angeles | Yonsei Chiropractic', 'Contact Yonsei Chiropractic, a Korean-speaking chiropractor in Los Angeles 90010, to schedule upper cervical, neck pain, headache, or migraine care.'],
    ko: ['Contact Yonsei Chiropractic in Los Angeles', 'Contact Yonsei Chiropractic in Los Angeles to schedule an appointment.'],
  },
  message: {
    en: ['Our Chiropractic Philosophy | Yonsei Chiropractic', 'Read Dr. Park\'s philosophy of compassionate, precise Palmer Upper Cervical chiropractic care.'],
    ko: ['Our Chiropractic Philosophy | Yonsei Chiropractic', 'Read about Yonsei Chiropractic\'s approach to compassionate, precise upper cervical care.'],
  },
  'techniques/about-chiropractic': {
    en: ['About Chiropractic Care in Los Angeles | Yonsei Chiropractic', 'Learn how upper cervical chiropractic care at Yonsei Chiropractic is designed to support natural healing.'],
    ko: ['About Chiropractic Care | Yonsei Chiropractic', 'Learn about upper cervical chiropractic care at Yonsei Chiropractic.'],
  },
  'techniques/innate-intelligence': {
    en: ['Innate Intelligence Chiropractic | Yonsei Chiropractic', 'Explore Yonsei Chiropractic\'s perspective on innate intelligence and upper cervical care in Los Angeles.'],
    ko: ['Innate Intelligence Chiropractic | Yonsei Chiropractic', 'Explore Yonsei Chiropractic\'s perspective on innate intelligence and upper cervical care.'],
  },
  'techniques/subluxation': {
    en: ['Vertebral Subluxation | Yonsei Chiropractic Los Angeles', 'Learn how Yonsei Chiropractic explains vertebral subluxation and its role in upper cervical care.'],
    ko: ['Vertebral Subluxation | Yonsei Chiropractic', 'Learn about vertebral subluxation and upper cervical care at Yonsei Chiropractic.'],
  },
} as const;

export function getPageMetadata(path: keyof typeof pageSeo, language: string): Metadata {
  const lng: Language = language === 'ko' ? 'ko' : 'en';
  const [title, description] = pageSeo[path][lng];
  const canonicalPath = `/${lng}/${path}`;

  return {
    title,
    description,
    keywords: targetKeywords,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        supportedLanguages.map((locale) => [locale, `${siteUrl}/${locale}/${path}`])
      ),
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteUrl}${canonicalPath}`,
      locale: lng === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}
