"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import MessageFromDrParkDesktop from './MessageFromDrPark/Desktop/MessageFromDrPark.desktop';
import MessageFromDrParkMobile from './MessageFromDrPark/Mobile/MessageFromDrPark.mobile';

const MessageFromDrPark: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const messageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Our Chiropractic Philosophy",
      "url": "https://www.yonseichiro.com/en/message",
      "mainEntity": {
        "@type": "Person",
        "name": "Dr. Hyeon Joo Park",
        "honorificSuffix": "D.C., M.S."
      },
      "description": "Dr. Hyeon Joo Park's personal message on her chiropractic philosophy: that pain and illness stem from nerve blockages in the upper cervical vertebrae, and that treating the root cause through chiropractic adjustment — supported by the body's innate healing intelligence and regular preventative spinal checks — is key to lasting health."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "Message", "item": "https://www.yonseichiro.com/en/message" }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(messageSchema) }}
      />
      {isMobile ? <MessageFromDrParkMobile /> : <MessageFromDrParkDesktop />}
    </>
  );
};

export default MessageFromDrPark;
