import type { AppProps } from "next/app";
import Head from "next/head";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "../context/LanguageContext";
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
          {/* TODO: Replace https://www.targethotelmarketing.com with your actual domain if different */}
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            {/* Default OG site name */}
            <meta property="og:site_name" content="Target Hotel Marketing" />
          </Head>

          {/* ===== SCHEMA MARKUP (EDIT HERE) ===== */}
          {/* JSON-LD Organization schema for search engine knowledge panels */}
          {/* TODO: Edit name, url, logo, and social links below */}
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Target Hotel Marketing",
                  url: "https://www.targethotelmarketing.com",
                  logo: "https://www.targethotelmarketing.com/assets/targetlogo.webp",
                  description:
                    "Professional hotel management, marketing, and digital solutions.",
                  sameAs: [
                    // TODO: Add your social media profile URLs here
                    // "https://www.facebook.com/your-page",
                    // "https://twitter.com/your-handle",
                    // "https://www.linkedin.com/company/your-company",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    // TODO: Replace with your actual contact info
                    telephone: "+1-000-000-0000",
                    contactType: "customer service",
                  },
                }),
              }}
            />
          </Head>

          <Component {...pageProps} />

          <WhatsAppButton />
          <CallButton />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
