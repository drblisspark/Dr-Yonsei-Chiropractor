"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import UpperCervicalDesktop from './UpperCervical/Desktop/UpperCervical.desktop';
import UpperCervicalMobile from './UpperCervical/Mobile/UpperCervical.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';
import { useTranslation } from 'react-i18next';

const UpperCervical: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const upperCervicalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Palmer Upper Cervical Specific (H.I.O.)",
      "serviceType": "Upper Cervical Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "The Palmer Upper Cervical Specific technique, known as the 'hole-in-one' (H.I.O.) method, uses precise hand adjustments to target the upper cervical vertebrae (C1 and C2), relieving nerve pressure caused by spinal misalignment so the body's natural healing ability is restored — without medication, surgery, or other interventions."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "Upper Cervical", "item": "https://www.yonseichiro.com/en/techniques/upper-cervical" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(upperCervicalSchema) }}
      />
      {isMobile ? <UpperCervicalMobile /> : <UpperCervicalDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default UpperCervical;
