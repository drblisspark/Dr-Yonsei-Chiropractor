"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import TMJDesktop from './TMJ/Desktop/TMJ.desktop';
import TMJMobile from './TMJ/Mobile/TMJ.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';

const TMJ: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const tmjSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "TMJ / TMD Treatment",
      "serviceType": "Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "TMJ/TMD symptoms often stem from misalignment in the upper cervical spine, which sits close to the jaw joints. Head and neck misalignment can cause nervous system interference leading to jaw muscle tension, clicking, popping, and pain — Yonsei Chiropractic addresses the root cause through drug-free chiropractic adjustments that restore proper alignment."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "TMJ / TMD", "item": "https://www.yonseichiro.com/en/techniques/tmj" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tmjSchema) }}
      />
      {isMobile ? <TMJMobile /> : <TMJDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default TMJ;
