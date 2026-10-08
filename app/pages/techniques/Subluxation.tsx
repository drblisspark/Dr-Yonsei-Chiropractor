"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import SubluxationDesktop from './Subluxation/Desktop/Subluxation.desktop';
import SubluxationMobile from './Subluxation/Mobile/Subluxation.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';

const Subluxation: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const subluxationSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Vertebral Subluxation Correction",
      "serviceType": "Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "Subluxation occurs when spinal bones become slightly dislocated and press on nerves, disrupting communication between the body and brain — often without any pain signal until significant damage has occurred. Yonsei Chiropractic targets spinal alignment and nerve function to address the root cause rather than just the symptoms."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "Subluxation", "item": "https://www.yonseichiro.com/en/techniques/subluxation" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subluxationSchema) }}
      />
      {isMobile ? <SubluxationMobile /> : <SubluxationDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default Subluxation;
