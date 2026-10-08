"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import InnateIntelligenceDesktop from './InnateIntelligence/Desktop/InnateIntelligence.desktop';
import InnateIntelligenceMobile from './InnateIntelligence/Mobile/InnateIntelligence.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';

const InnateIntelligence: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const innateIntelligenceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Innate Intelligence & Chiropractic",
      "serviceType": "Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "Innate intelligence is the inborn biological force that coordinates the body from conception, communicating through the nervous system protected by the skull and spine. When interference disrupts that communication, the body can't function optimally — Yonsei Chiropractic removes this interference through upper cervical techniques to restore natural healing."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "Innate Intelligence", "item": "https://www.yonseichiro.com/en/techniques/innate-intelligence" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(innateIntelligenceSchema) }}
      />
      {isMobile ? <InnateIntelligenceMobile /> : <InnateIntelligenceDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default InnateIntelligence;
