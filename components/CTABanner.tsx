'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localizeHref } from "@/lib/i18n";

const CTABanner = () => {
  const { t, language } = useLanguage();
  const L = (href: string) => localizeHref(href, language);

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("cta.title")}
        </h2>
        <Link href={L("/contact")}>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t("cta.button")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;

