"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import ReviewsDesktop from './Reviews/Desktop/Reviews.desktop';
import ReviewsMobile from './Reviews/Mobile/Reviews.mobile';
import { reviewMetadata } from './Reviews/Shared/reviews.constants';
import { useTranslation } from 'react-i18next';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const Reviews: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Structured Data (JSON-LD)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://www.yonseichiro.com/en/#business",
      "name": "Yonsei Chiropractic",
      "image": "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3200 Wilshire Blvd, Suite 302",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90010",
        "addressCountry": "US"
      },
      "telephone": "+1-213-381-5500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": reviewMetadata.length.toString()
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Connie Lee" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I can't recommend Dr. Park enough! I came in struggling with a herniated disc that had been affecting my daily life."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "J_Eun C" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Although the treatment sessions are shorter than I expected, the effects are remarkable."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Leo Miguel" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I walked into the clinic with a serious back injury and could barely move. After two weeks of treatment, I was able to return to my normal life."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Nina Doering" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "As someone who was always scared of going to chiropractors growing up, I can confidently say this is a unique and excellent chiropractor."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Christina J." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "After having experienced such agony and pain every single day for two years straight, this was truly a miracle for me!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Jiyun K." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "It was so amazing to me and my family that I started my period again without pills but only by upper cervical adjustment!"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://www.yonseichiro.com/en/reviews" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {isMobile ? <ReviewsMobile /> : <ReviewsDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default Reviews;
