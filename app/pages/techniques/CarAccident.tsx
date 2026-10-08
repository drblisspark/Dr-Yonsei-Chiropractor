"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import CarAccidentDesktop from './CarAccident/Desktop/CarAccident.desktop';
import CarAccidentMobile from './CarAccident/Mobile/CarAccident.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';
import { useTranslation } from 'react-i18next';

const CarAccident: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const carAccidentSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Car Accident & Whiplash Recovery",
      "serviceType": "Chiropractic Care",
      "provider": { "@id": "https://www.yonseichiro.com/en/#business" },
      "description": "Car accident injuries often develop symptoms days or months after impact, and the absence of pain doesn't mean the absence of damage. Whiplash can cause upper cervical vertebrae damage that's difficult to detect on standard imaging — Yonsei Chiropractic treats the underlying nerve involvement rather than offering only temporary symptom relief, to help prevent chronic pain."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Techniques", "item": "https://www.yonseichiro.com/en/services" },
        { "@type": "ListItem", "position": 3, "name": "Car Accident", "item": "https://www.yonseichiro.com/en/techniques/car-accident" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carAccidentSchema) }}
      />
      {isMobile ? <CarAccidentMobile /> : <CarAccidentDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default CarAccident;
