"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ContactBanner from '../components/ContactBanner';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { insights } from '../lib/insights-data';

const Insights: React.FC<{ lng: string }> = ({ lng }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const heroBadge = t('insightsPage.heroBadge');
  const heroTitle = t('insightsPage.heroTitle');
  const heroDescription = t('insightsPage.heroDescription');
  const heroCTA = t('insightsPage.heroCTA');
  const featuredLabel = t('insightsPage.featuredLabel');
  const listTitle = t('insightsPage.listTitle');
  const listDescription = t('insightsPage.listDescription');
  const readArticleLabel = t('insightsPage.readArticle');

  const keywords = [
    "Korean chiropractor Los Angeles",
    "Korean speaking chiropractor 90010",
    "Chiropractor near me 90057",
    "LA 한인 카이로프랙틱",
    "상경추 전문 병원",
    "TMJ specialist Los Angeles"
  ];

  const featuredInsight = insights[0];
  const otherInsights = insights.slice(1);

  const formatPublishedDate = (value: string) => {
    try {
      return new Intl.DateTimeFormat(lng === 'ko' ? 'ko-KR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(new Date(value));
    } catch {
      return value;
    }
  };

  const insightsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Yonsei Chiropractic Insights",
      "url": "https://www.yonseichiro.com/en/insights",
      "publisher": { "@id": "https://www.yonseichiro.com/en/#business" },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Top 3 Upper Cervical Essentials Patients Need to Know",
          "datePublished": "2026-02-13",
          "author": { "@type": "Person", "name": "Dr. Hyeon Joo Park" }
        },
        {
          "@type": "BlogPosting",
          "headline": "TMJ Relief & the Upper Cervical Link",
          "datePublished": "2025-10-05",
          "author": { "@type": "Person", "name": "Dr. Hyeon Joo Park" }
        },
        {
          "@type": "BlogPosting",
          "headline": "Recovering After Car Accidents",
          "datePublished": "2025-07-21",
          "author": { "@type": "Person", "name": "Dr. Hyeon Joo Park" }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://www.yonseichiro.com/en/insights" }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }}
      />

      <SEO
        title={t('seo.insights.title')}
        description={t('seo.insights.description')}
      />

      <section className="relative py-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full">
              {heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {heroDescription}
            </p>
            {featuredInsight && (
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`/${lng}/insights/${featuredInsight.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-wide transition hover:bg-primary/80 focus-visible:ring focus-visible:ring-primary/30"
                >
                  {heroCTA}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#020509]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-xs font-black tracking-[0.3em] uppercase text-primary">{featuredLabel}</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{listTitle}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {listDescription}
            </p>
          </div>

          {featuredInsight && (
            <article className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-lg">
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-500">
                <span className="text-primary font-black">{featuredInsight.heroBadge[ lng === 'ko' ? 'ko' : 'en' ]}</span>
                <span>{formatPublishedDate(featuredInsight.publishedAt)}</span>
                <span className="text-slate-400">· {featuredInsight.tags.join(' · ')}</span>
              </div>
              <Link href={`/${lng}/insights/${featuredInsight.slug}`}>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-4 mb-4 leading-tight hover:text-primary transition">
                  {featuredInsight.title[lng === 'ko' ? 'ko' : 'en']}
                </h3>
              </Link>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {featuredInsight.heroSummary[lng === 'ko' ? 'ko' : 'en']}
              </p>
              <Link
                href={`/${lng}/insights/${featuredInsight.slug}`}
                className="text-primary font-semibold flex items-center gap-2"
              >
                {readArticleLabel} →
              </Link>
            </article>
          )}

          {otherInsights.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">
              {otherInsights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/${lng}/insights/${insight.slug}`}
                  className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 hover:border-primary/70 transition"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
                    <span>{formatPublishedDate(insight.publishedAt)}</span>
                    <span className="text-primary font-black">{insight.heroBadge[lng === 'ko' ? 'ko' : 'en']}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition">
                    {insight.title[lng === 'ko' ? 'ko' : 'en']}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {insight.excerpt[lng === 'ko' ? 'ko' : 'en']}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-primary">{readArticleLabel}</span>
                    <div className="flex flex-wrap gap-2">
                      {insight.tags.map((tag) => (
                        <span key={tag} className="text-[11px] uppercase tracking-[0.3em]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                {lng === 'ko' ? '왜 연세 카이로프랙틱인가요?' : 'Why Choose Yonsei Chiropractic?'}
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  {lng === 'ko'
                    ? '로스앤젤레스에서 한국어 가능한 카이로프랙터를 찾는 것은 중요합니다. 정확한 의사소통은 환자의 통증을 정확히 이해하고 최적의 치료 계획을 세우는 데 필수적이기 때문입니다.'
                    : 'Finding a Korean-speaking chiropractor in Los Angeles is crucial for clear communication, ensuring your concerns are fully understood and addressed with the highest level of care.'}
                </p>
                <p>
                  {lng === 'ko'
                    ? '저희 클리닉은 윌셔 블루버드(Wilshire Blvd)에 위치하여 한인타운(K-Town) 어디에서나 접근이 용이합니다. 특히 90010, 90057 지역 주민들께서 편리하게 방문하실 수 있습니다.'
                    : 'Conveniently located on Wilshire Blvd, our clinic is easily accessible from anywhere in Koreatown (K-Town), making it a prime location for residents in the 90010 and 90057 areas.'}
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    lng === 'ko' ? "한국어/영어 완벽 대응" : "Full Bilingual Support (Korean & English)",
                    lng === 'ko' ? "상경추 (H.I.O) 전문 기법" : "Specialized Upper Cervical (H.I.O) Technique",
                    lng === 'ko' ? "턱관절(TMJ) 및 교통사고 후유증 전문" : "TMJ and Car Accident Recovery Specialists",
                    lng === 'ko' ? "무료 주차 확인 서비스" : "Validated Free Parking Available"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                {lng === 'ko' ? '자주 찾으시는 검색어' : 'Popular Search Keywords'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400">
                    #{keyword}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  {lng === 'ko'
                    ? '"내 주변 카이로프랙틱"을 찾고 계신가요? 로스앤젤레스 한인타운의 중심에서 박현주 원장이 여러분의 건강을 책임집니다.'
                    : 'Searching for a "chiropractor near me"? Located in the heart of Los Angeles Koreatown, Dr. Park is dedicated to your health and wellness.'}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <MedicalDisclaimer />
          </div>
        </div>
      </section>

      <ContactBanner lng={lng} />
    </div>
  );
};

export default Insights;
