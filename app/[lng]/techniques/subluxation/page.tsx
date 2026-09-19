import Subluxation from '../../../pages/techniques/Subluxation';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';
import { getPageMetadata } from '../../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return getPageMetadata('techniques/subluxation', lng);
}

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Subluxation initialIsMobile={initialIsMobile} />;
}
