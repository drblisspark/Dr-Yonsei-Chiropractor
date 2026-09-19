import type { Metadata } from "next";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://yonseichiro.com/#organization",
    "name": lng === 'ko' ? "연세 카이로프랙틱" : "Yonsei Chiropractic",
    "url": "https://yonseichiro.com",
    "logo": "https://yonseichiro.com/logo.bmp",
    "image": "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg",
    "description": lng === 'ko' ? "로스앤젤레스 상경추 전문 연세 카이로프랙틱 클리닉입니다." : "Specialized Palmer Upper Cervical Specific Chiropractic in Los Angeles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3200 Wilshire Blvd, Suite 302",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90010",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0617,
      "longitude": -118.2917
    },
    "telephone": "+1-213-381-5500",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "medicalSpecialty": "Chiropractic",
    "availableLanguage": ["English", "Korean"],
    "founder": {
      "@type": "Physician",
      "name": "Dr. Hyeon Joo Park, D.C., M.S.",
      "medicalSpecialty": "Chiropractic",
      "knowsAbout": ["Upper Cervical Chiropractic", "Palmer Method", "TMJ", "Whiplash"]
    }
  };

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
