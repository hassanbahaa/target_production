import type { AppProps } from "next/app";
import Head from "next/head";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";


import "../styles/index.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />

            {/* ===== GLOBAL SEO DEFAULTS (EDIT HERE) ===== */}
            {/* These tags apply to every page. Page-level <Head> tags will override them. */}
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
              <meta charSet="utf-8" />
              <meta name="theme-color" content="#ffffff" />
              <link rel="icon" href="/favicon.ico" />
              <meta http-equiv="X-Content-Type-Options" content="nosniff" />
              <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests; default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';" />
              {/* Default OG site name */}
              <meta property="og:site_name" content="Target Hotel Marketing" />
              <meta name="robots" content="index, follow" />
            </Head>

            {/* ===== SCHEMA MARKUP (EDIT HERE) ===== */}
            {/* JSON-LD Organization & LocalBusiness schema for search engine knowledge panels */}
            <Head>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": ["Organization", "LocalBusiness"],
                    name: "Target Hotel Marketing",
                    url: "https://www.targethotelmarketing.com",
                    logo: "https://www.targethotelmarketing.com/assets/targetlogo.webp",
                    image: "https://www.targethotelmarketing.com/assets/targetlogo.webp",
                    description: "Professional hotel management, marketing, and digital solutions providing unparalleled hospitality strategies.",
                    sameAs: [],
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "SA",
                    },
                    contactPoint: {
                      "@type": "ContactPoint",
                      telephone: "+1-000-000-0000",
                      contactType: "customer service",
                      areaServed: "SA",
                      availableLanguage: ["English", "Arabic"]
                    },
                  }),
                }}
              />
            </Head>

            <RootLayout Component={Component} pageProps={pageProps} />

            <WhatsAppButton />
            <CallButton />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    );
  }

  // // RTL/LTR handling: Global wrapper component
  function RootLayout({ Component, pageProps }: { Component: any; pageProps: any }) {
    const { isRTL } = useLanguage();
    
    return (
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        <Component {...pageProps} />
      </div>
    );
  }
