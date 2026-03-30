// ===== i18n helpers for static-export multilingual routing =====
// Language is determined by the URL path prefix: /ar/* = Arabic, everything else = English

export type Locale = "ar" | "en";

export const SITE_URL = "https://www.targethotelmarketing.com";

/**
 * Detect locale from a Next.js router path (asPath).
 * Returns "ar" if the path starts with /ar, otherwise "en".
 */
export function getLocaleFromPath(path: string): Locale {
  // Normalise: remove query string and hash
  const cleanPath = path.split("?")[0].split("#")[0];
  if (cleanPath === "/ar" || cleanPath.startsWith("/ar/")) {
    return "ar";
  }
  return "en";
}

/**
 * Prefix a href with /ar when the current locale is Arabic.
 * Handles edge cases like "/" → "/ar/" and "/about" → "/ar/about".
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === "en") return href;
  // Already prefixed
  if (href === "/ar" || href.startsWith("/ar/")) return href;
  // "/" → "/ar"
  if (href === "/") return "/ar";
  // "/about" → "/ar/about"
  return `/ar${href}`;
}

/**
 * Given the current path, return the path for the alternate locale.
 * e.g. "/ar/about" → "/about", "/about" → "/ar/about"
 */
export function getAlternateLocalePath(currentPath: string): string {
  const cleanPath = currentPath.split("?")[0].split("#")[0];
  const currentLocale = getLocaleFromPath(cleanPath);

  if (currentLocale === "ar") {
    // Strip /ar prefix
    const stripped = cleanPath.replace(/^\/ar\/?/, "/");
    return stripped || "/";
  }
  // Add /ar prefix
  if (cleanPath === "/") return "/ar";
  return `/ar${cleanPath}`;
}

/**
 * Get the canonical path (without /ar prefix) for a given path.
 * e.g. "/ar/about" → "/about", "/about" → "/about"
 */
export function getCanonicalPath(path: string): string {
  const cleanPath = path.split("?")[0].split("#")[0];
  if (cleanPath === "/ar" || cleanPath === "/ar/") return "/";
  if (cleanPath.startsWith("/ar/")) return cleanPath.slice(3);
  return cleanPath;
}
