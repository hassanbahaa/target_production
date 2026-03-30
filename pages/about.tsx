import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import targetLogo from "../public/assets/targetlogo.webp";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/i18n";

const About = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <>
      <Head>
        <title>{t("about.meta.title")}</title>
        <meta name="description" content={t("about.meta.description")} />
        <meta property="og:locale" content={language === "ar" ? "ar_AR" : "en_US"} />
      </Head>
      <SEOHead
        title={t("about.meta.title")}
        description={t("about.meta.description")}
        ogImage={`${SITE_URL}/assets/targetlogo.webp`}
      />

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="container-custom text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                dir={isRTL ? "rtl" : "ltr"}
              >
                {t("nav.about")}
              </h1>
            </div>
          </section>

          {/* Company Story */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    className="text-3xl font-bold mb-6"
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    {t("about.story.title")}
                  </h2>
                  <p
                    className="text-lg text-muted-foreground mb-4"
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    {t("about.story.description")}
                  </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
                  <img
                    src={targetLogo.src}
                    alt="Our Story"
                    className="max-w-full max-h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-padding bg-muted/50">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3
                      className="text-2xl font-bold mb-4"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {t("about.vision.title")}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {t("about.vision.description")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-8">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3
                      className="text-2xl font-bold mb-4"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {t("about.mission.title")}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {t("about.mission.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
