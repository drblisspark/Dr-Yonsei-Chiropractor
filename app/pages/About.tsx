"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import AboutDesktop from './About/Desktop/About.desktop';
import AboutMobile from './About/Mobile/About.mobile';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const About: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Hyeon Joo Park",
      "honorificSuffix": "D.C., M.S.",
      "jobTitle": "Doctor of Chiropractic",
      "worksFor": { "@id": "https://www.yonseichiro.com/en/#business" },
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Yonsei University" },
        { "@type": "CollegeOrUniversity", "name": "Life University" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "B.S. in Biotechnology, Yonsei University" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Doctor of Chiropractic, Life University (summa cum laude)" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "M.S. in Sport Injury Management, Life University" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certified Chiropractic Extremity Practitioner (C.C.E.P.)" }
      ],
      "knowsAbout": [
        "B.J. Palmer Upper Cervical Specific Technique (H.I.O.)",
        "Cranial Adjustment and TMJ work (S.O.T.)",
        "Extremity Manipulation (C.C.E.P.)",
        "Pediatric Chiropractic Care (I.C.P.A.)"
      ],
      "description": "Dr. Hyeon Joo Park studied under Dr. Clarence Jenson, a former leader and teacher of Palmer Upper Cervical Specific Chiropractic trained directly by B.J. Palmer. She is recognized as one of only a handful of doctors in the United States, and the first and only Korean American, practicing this specific technique. She has hosted a weekly chiropractic education radio show on Radio Korea for two decades."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yonseichiro.com/en/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.yonseichiro.com/en/about" }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default About;
