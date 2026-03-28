import type { AppProps } from "next/app";

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

          <Component {...pageProps} />

          <WhatsAppButton />
          <CallButton />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
