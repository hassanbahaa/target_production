// ============================================================================
// SEO DATA DEFINITION & METADATA GENERATION
// This component manages global SEO tags, canonical URLs, and hreflang alternates.
// Real Domain: https://targethotelmarketing.com
// ============================================================================

import Head from "next/head";
import { useRouter } from "next/router";

export const SITE_URL = "https://targethotelmarketing.com";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * SEOHead Renders:
 * 1. Canonical URL
 * 2. Hreflang alternates (ar, en, x-default)
 * 3. Open Graph tags (Facebook/LinkedIn)
 * 4. Twitter Cards
 */
export default function SEOHead({ title, description, ogImage, ogType = "website" }: SEOHeadProps) {
  const router = useRouter();
  const isAr = router.asPath.startsWith("/ar");
  
  // Clean path without locale prefix for canonical logic
  const cleanPath = isAr ? router.asPath.replace(/^\/ar/, "") || "/" : router.asPath;
  const pathWithoutQuery = cleanPath.split("?")[0];
  
  const canonicalUrl = `${SITE_URL}${router.asPath.split("?")[0]}`;
  const arUrl = `${SITE_URL}/ar${pathWithoutQuery === "/" ? "" : pathWithoutQuery}`;
  const enUrl = `${SITE_URL}${pathWithoutQuery === "/" ? "" : pathWithoutQuery}`;

  return (
    <Head>
      {/* --- SEO: CANONICAL --- */}
      <link rel="canonical" href={canonicalUrl} />

      {/* --- SEO: HREFLANG ALTERNATES --- */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ar" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* --- SEO: OPEN GRAPH --- */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Target Hotel Marketing" />
      <meta property="og:locale" content={isAr ? "ar_SA" : "en_US"} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* --- SEO: TWITTER --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
}
