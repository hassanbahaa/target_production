"use client";

import { Button } from "@/components/ui/button";
import heroImage from "../public/assets/hero-hotel.webp";
import { useLanguage } from "@/context/LanguageContext";
import ExportedImage from "next-image-export-optimizer";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t("hero.title")}
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t("hero.subtitle")}
        </p>
        <Button
          onClick={() => scrollToSection("services")}
          // size="lg"
          className="btn-primary text-lg px-8 py-6"
          aria-label="Scroll to services section"
        >
          {t("hero.cta")}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
