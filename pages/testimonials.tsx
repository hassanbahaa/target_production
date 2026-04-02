import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import lavina from "../public/assets/Testimonials/lavina.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/i18n";

const Testimonials = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const testimonials = [
    {
      text: t("testimonials.reviews.r1"),
      author: t("testimonials.reviews.r1.author"),
      hotel: t("testimonials.reviews.r1.hotel"),
      rating: 5,
    },
    {
      text: t("testimonials.reviews.r2"),
      author: t("testimonials.reviews.r2.author"),
      hotel: t("testimonials.reviews.r2.hotel"),
      rating: 5,
    },
    {
      text: t("testimonials.reviews.r3"),
      author: t("testimonials.reviews.r3.author"),
      hotel: t("testimonials.reviews.r3.hotel"),
      rating: 5,
    },
    {
      text: t("testimonials.reviews.r4"),
      author: t("testimonials.reviews.r4.author"),
      hotel: t("testimonials.reviews.r4.hotel"),
      rating: 5,
    },
    {
      text: t("testimonials.reviews.r5"),
      author: t("testimonials.reviews.r5.author"),
      hotel: t("testimonials.reviews.r5.hotel"),
      rating: 5,
    },
    {
      text: t("testimonials.reviews.r6"),
      author: t("testimonials.reviews.r6.author"),
      hotel: t("testimonials.reviews.r6.hotel"),
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>{t("testimonials.meta.title")}</title>
        <meta name="description" content={t("testimonials.meta.description")} />
        <meta property="og:locale" content={language === "ar" ? "ar_AR" : "en_US"} />
      </Head>
      <SEOHead
        title={t("testimonials.meta.title")}
        description={t("testimonials.meta.description")}
        ogImage={`${SITE_URL}/assets/targetlogo.webp`}
      />

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Add padding to prevent header overlap */}
          {/* Hero Banner */}
          <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="container-custom text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("testimonials.title")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("testimonials.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                {t("testimonials.discover")}
              </p>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4" dir="rtl">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-bold" dir="rtl">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-primary mt-1" dir="rtl">
                          {testimonial.hotel}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Appreciation Letter Section */}
              <Card className="mt-12 card-hover">
                <CardContent
                  className="p-8 text-center"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {t("testimonials.letterTitle")}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t("testimonials.letterDescription")}
                  </p>
                  <div className="mt-6 p-8 bg-muted/50 rounded-lg">
                    <button
                      type="button"
                      aria-label="View sample appreciation letter full size"
                      className="block max-w-full md:max-w-lg mx-auto relative h-[400px] cursor-pointer w-full"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <ExportedImage
                        src={lavina}
                        alt="Sample Appreciation Letter"
                        className="rounded shadow-lg hover:shadow-xl transition-shadow duration-300 object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        placeholder="blur"
                      />
                    </button>
                    <p className="text-sm text-muted-foreground mt-4">
                      {t("testimonials.sampleLetter")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Lightbox */}
          <ImageLightbox
            src={lavina.src}
            alt="Appreciation Letter"
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
