import AboutChiropractic from '../../../pages/techniques/AboutChiropractic';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';
import { getPageMetadata } from '../../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return getPageMetadata('techniques/about-chiropractic', lng);
}

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <AboutChiropractic initialIsMobile={initialIsMobile} />;
}
