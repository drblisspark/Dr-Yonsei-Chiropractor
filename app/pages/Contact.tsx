"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import ContactDesktop from './Contact/Desktop/Contact.desktop';
import ContactMobile from './Contact/Mobile/Contact.mobile';

const Contact: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "url": "https://www.yonseichiro.com/en/contact",
      "mainEntity": { "@id": "https://www.yonseichiro.com/en/#business" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.yonseichiro.com/en/contact" }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {isMobile ? <ContactMobile /> : <ContactDesktop />}
    </>
  );
};

export default Contact;
