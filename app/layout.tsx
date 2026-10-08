import type { Metadata } from "next";
import Script from 'next/script';
import "./index.css";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ClientLayout from './client-layout';
import PageTransition from './components/PageTransition';
import I18nProvider from './components/I18nProvider';
import { ConsentProvider } from './components/consent/ConsentContext';
import { ConditionalCookieConsentBanner } from './components/privacy/ConditionalCookieConsentBanner';
import { getInitialIsMobileFromHeaders } from './lib/get-initial-is-mobile';
import { headers } from 'next/headers';
import { targetKeywords } from './lib/seo';

export const metadata: Metadata = {
  title: "Korean Chiropractor in Los Angeles | Yonsei Chiropractic",
  description: "Korean chiropractor in Los Angeles 90010 providing precise upper cervical chiropractic care for neck pain, headaches, migraines, posture, TMJ, and car accident recovery.",
  keywords: targetKeywords,
  metadataBase: new URL('https://yonseichiro.com'),
  verification: {
    google: 'wxhm81wqsTw9eoOC4QZeWZ3YnKjIE3PJpXF-JzeHqrI',
  },
  openGraph: {
    type: "website",
    url: "https://yonseichiro.com/",
    title: "Korean Chiropractor in Los Angeles | Yonsei Chiropractic",
    description: "Korean chiropractor in Los Angeles 90010 providing precise upper cervical chiropractic care for neck pain, headaches, migraines, posture, TMJ, and car accident recovery.",
    images: ["/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean Chiropractor in Los Angeles | Yonsei Chiropractic",
    description: "Korean chiropractor in Los Angeles 90010 providing precise upper cervical chiropractic care for neck pain, headaches, migraines, posture, TMJ, and car accident recovery.",
    images: ["/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg"],
  },
  icons: {
    icon: '/logo.bmp',
  },
};

export async function generateStaticParams() {
  return [{ lng: 'en' }, { lng: 'ko' }];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-locale');
  const lng = headerLocale === 'ko' || headerLocale === 'en' ? headerLocale : 'en';
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://www.yonseichiro.com/en/#business",
      "name": "Yonsei Chiropractic",
      "alternateName": "연세 카이로프랙틱",
      "url": "https://www.yonseichiro.com/en/",
      "logo": "https://www.yonseichiro.com/logo.bmp",
      "image": "https://www.yonseichiro.com/logo.bmp",
      "telephone": "+1-213-381-5500",
      "email": "yonseichiropractic@gmail.com",
      "description": "Korean-speaking chiropractic clinic in Los Angeles (Koreatown, 90010/90057) specializing in the Palmer Upper Cervical Specific Technique (H.I.O. method), led by Dr. Hyeon Joo Park, D.C., M.S.",
      "additionalType": "https://schema.org/Chiropractic",
      "priceRange": "$$",
      "foundingDate": "2003",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3200 Wilshire Blvd, Suite 302",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90010",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "14:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Hyeon Joo Park",
        "honorificSuffix": "D.C., M.S."
      },
      "employee": {
        "@type": "Person",
        "name": "Dr. Hyeon Joo Park",
        "jobTitle": "Doctor of Chiropractic",
        "honorificSuffix": "D.C., M.S."
      },
      "areaServed": [
        { "@type": "City", "name": "Los Angeles" },
        { "@type": "Place", "name": "Koreatown, Los Angeles" }
      ],
      "knowsLanguage": ["en", "ko"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chiropractic Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Upper Cervical Specific Care (H.I.O. Method)", "description": "Palmer Upper Cervical Specific technique focused on the atlas and axis (C1/C2) to relieve nerve pressure and restore full-body health." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TMJ / TMD Treatment", "description": "Chiropractic adjustments addressing upper cervical misalignment linked to jaw pain, clicking, popping, and tension." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pediatric & Pre-natal Chiropractic Care", "description": "Gentle chiropractic treatment for infants, children, and expectant mothers." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Accident & Whiplash Treatment", "description": "Treatment for whiplash and other injuries from automobile accidents, including damage not visible on standard imaging." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Injury Recovery", "description": "Comprehensive treatment plans for slips, falls, and other injury cases." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extremity Adjustments", "description": "Realignment of joints in the shoulders, elbows, wrists, hips, knees, and ankles." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cervical Alignment", "description": "Treatment focused on neck alignment and positioning." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Neck Pain Management", "description": "Chiropractic care targeting neck discomfort." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Headache & Migraine Relief", "description": "Chiropractic care addressing headaches and migraines linked to spinal misalignment." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Posture Correction", "description": "Chiropractic services designed to improve postural alignment." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Yonsei Chiropractic",
      "url": "https://www.yonseichiro.com/en/",
      "inLanguage": "en",
      "publisher": { "@id": "https://www.yonseichiro.com/en/#business" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" }
      ]
    }
  ];

  return (
    <html lang={lng} className="scroll-pt-[104px]" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C6EERQJKNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C6EERQJKNM');
          `}
        </Script>

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="wxhm81wqsTw9eoOC4QZeWZ3YnKjIE3PJpXF-JzeHqrI"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const root = document.documentElement;
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const cookieName = 'consent_preferences';
                const getCookie = (name) => {
                  const value = \`; \${document.cookie}\`;
                  const parts = value.split('; ' + name + '=');
                  if (parts.length === 2) return parts.pop().split(';').shift();
                  return null;
                };
                let theme = 'system';
                let hasPreference = false;
                const stored = getCookie(cookieName);
                if (stored) {
                  try {
                    const parsed = JSON.parse(decodeURIComponent(stored));
                    if (parsed?.categories?.preferences) {
                      hasPreference = true;
                      if (typeof parsed.themePreference === 'string') {
                        theme = parsed.themePreference;
                      }
                    }
                  } catch (error) {
                    console.error('Unable to parse consent cookie', error);
                  }
                }
                const applyTheme = (target) => {
                  root.classList.remove('light', 'dark');
                  root.classList.add(target);
                };
                if (hasPreference && (theme === 'dark' || theme === 'light')) {
                  applyTheme(theme);
                } else {
                  applyTheme(prefersDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased selection:bg-primary/20">
        <ConsentProvider>
          <I18nProvider lng={lng}>
            <div className="relative flex flex-col min-h-screen overflow-x-hidden">
              <ClientLayout initialIsMobile={initialIsMobile}>
                <SkipToContent lng={lng} />
                <Navbar />
                <main 
                  id="main-content" 
                  tabIndex={-1} 
                  className="flex-grow w-full flex flex-col outline-none pt-[68px] sm:pt-[96px] lg:pt-[96px]"
                >
                  <PageTransition initialIsMobile={initialIsMobile}>
                    {children}
                  </PageTransition>
                </main>
                <Footer />
              </ClientLayout>
              <ConditionalCookieConsentBanner />
            </div>
          </I18nProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
