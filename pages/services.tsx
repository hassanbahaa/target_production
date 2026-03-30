import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Hotel, TrendingUp, Search, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/i18n";
const Services = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const services = [
    {
      icon: Hotel,
      title: t("services.management.title"),
      description: t("services.management.description"),
      features: [
        t("services.staffManagement.title"),
        t("services.guestExperience.title"),
        t("services.inventoryManagement.title"),
        t("services.qualityAssurance.title"),
      ],
    },
    {
      icon: TrendingUp,
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      features: [
        t("services.marketing.features.socialMedia"),
        t("services.marketing.features.paidAds"),
        t("services.marketing.features.emailMarketing"),
        t("services.marketing.features.contentMarketing"),
      ],
    },
    {
      icon: Search,
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      features: [
        t("services.seo.features.keywordResearch"),
        t("services.seo.features.contentOptimization"),
        t("services.seo.features.linkBuilding"),
        t("services.seo.features.performanceOptimization"),
      ],
    },
    {
      icon: BarChart,
      title: t("services.analytics.title"),
      description: t("services.analytics.description"),
      features: [
        t("services.analytics.features.kpis"),
        t("services.analytics.features.customerBehavior"),
        t("services.analytics.features.revenueReports"),
        t("services.analytics.features.improvementRecommendations"),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>{t("nav.services")}</title>
        <meta name="description" content={t("services.meta.description")} />
        <meta property="og:locale" content={language === "ar" ? "ar_AR" : "en_US"} />
      </Head>
      <SEOHead
        title={t("nav.services")}
        description={t("services.meta.description")}
        ogImage={`${SITE_URL}/assets/targetlogo.webp`}
      />

      <Header />

      <main className="pt-16">
        {/* Hero Banner */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t("services.title")}
            </h1>
            <p
              className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t("services.p")}
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-padding">
          <div className="container-custom space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle
                        className="text-2xl mb-2"
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p
                    className="text-muted-foreground mb-4"
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm" dir={isRTL ? "rtl" : "ltr"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
