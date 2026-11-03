"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import AboutChiropracticDesktop from './AboutChiropractic/Desktop/AboutChiropractic.desktop';
import AboutChiropracticMobile from './AboutChiropractic/Mobile/AboutChiropractic.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';

const AboutChiropractic: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const aboutChiropracticSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "About Chiropractic Care",
      "serviceType": "Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "Chiropractic care is based on the principle that the human body has an innate ability to recover from illness or injury. Treatment uses manual spinal adjustments to address subluxation (nerve pressure from misaligned vertebrae) without drugs or surgery, removing interference to the nervous system so the body can heal naturally."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "About Chiropractic", "item": "https://www.yonseichiro.com/en/techniques/about-chiropractic" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutChiropracticSchema) }}
      />
      {isMobile ? <AboutChiropracticMobile /> : <AboutChiropracticDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default AboutChiropractic;
