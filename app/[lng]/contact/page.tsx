import Contact from '../../pages/Contact';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';
import { getPageMetadata } from '../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return getPageMetadata('contact', lng);
}

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Contact initialIsMobile={initialIsMobile} />;
}
