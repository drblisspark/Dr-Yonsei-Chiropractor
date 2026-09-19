import type { Metadata } from 'next';
import Services from '../../pages/Services';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';
import { targetKeywords } from '../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Korean Chiropractor Services in Los Angeles | Yonsei Chiropractic",
    ko: "전문 진료 분야 | 상경추 전문 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Korean-speaking chiropractor in Los Angeles 90010 offering Palmer Upper Cervical (H.I.O) care, cervical alignment, neck pain, headache, migraine, posture, TMJ, and car accident recovery services.",
    ko: "로스앤젤레스 상경추 정밀 교정(H.I.O), 턱관절 장애, 교통사고 후유증 및 각종 관절 통증 전문 치료 안내."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
    keywords: targetKeywords,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Services lng={lng} initialIsMobile={initialIsMobile} />;
}
