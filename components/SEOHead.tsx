// ===== Reusable SEO Head component with hreflang and canonical =====
// Provides hreflang alternates and correct canonical URLs for all pages.

import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL, getCanonicalPath } from "@/lib/i18n";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * Renders canonical URL, hreflang alternates, and OG/Twitter tags.
 * Place this inside each page alongside the existing <Head>.
 * It reads the current URL from the router to compute paths automatically.
 */
export default function SEOHead({ title, description, ogImage, ogType = "website" }: SEOHeadProps) {
  const router = useRouter();
  const canonicalPath = getCanonicalPath(router.asPath);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const arUrl = `${SITE_URL}/ar${canonicalPath === "/" ? "" : canonicalPath}`;
  const enUrl = canonicalUrl;

  return (
    <Head>
      {/* Canonical */}
      <link rel="canonical" href={`${SITE_URL}${router.asPath.split("?")[0]}`} />

      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ar" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${SITE_URL}${router.asPath.split("?")[0]}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Target Hotel Marketing" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
}
