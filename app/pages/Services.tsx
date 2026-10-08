"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import ServicesDesktop from './Services/Desktop/Services.desktop';
import ServicesMobile from './Services/Mobile/Services.mobile';
import { useTranslation } from 'react-i18next';

const Services: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "Service", "position": 1, "name": "Upper Cervical Specific Care (H.I.O. Method)", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 2, "name": "TMJ / TMD Disorders", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 3, "name": "Pediatric & Pre-natal Care", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 4, "name": "Car Accident Treatment", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 5, "name": "Personal Injury Recovery", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 6, "name": "Extremity Adjustments", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 7, "name": "Cervical Alignment", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 8, "name": "Neck Pain Management", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 9, "name": "Headache & Migraine Relief", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } },
        { "@type": "Service", "position": 10, "name": "Posture Correction", "provider": { "@id": "https://www.yonseichiro.com/en/#business" } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.yonseichiro.com/en/services" }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {isMobile ? <ServicesMobile /> : <ServicesDesktop />}
    </>
  );
};

export default Services;
