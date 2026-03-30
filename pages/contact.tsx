import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/i18n";
const Contact = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  return (
    <div className="min-h-screen">
      <Head>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
        <meta property="og:locale" content={language === "ar" ? "ar_AR" : "en_US"} />
      </Head>
      <SEOHead
        title={t("contact.meta.title")}
        description={t("contact.meta.description")}
        ogImage={`${SITE_URL}/assets/targetlogo.webp`}
      />

      <Header />

      <main className="pt-16">
        {/* Hero Banner */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" dir="rtl">
              تواصل معنا
            </h1>
            <p className="text-xl text-muted-foreground">Contact Us</p>
            <p
              className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto"
              dir="rtl"
            >
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تحقيق أهدافك
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
