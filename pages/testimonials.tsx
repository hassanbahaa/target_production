import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import lavina from "../public/assets/Testimonials/lavina.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";

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
        <title>{t("testimonials.meta.title")} , 2</title>
        <meta name="description" content={t("testimonials.meta.description")} />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content={t("testimonials.meta.title")} />
        <meta
          property="og:description"
          content={t("testimonials.meta.description")}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:locale"
          content={language === "ar" ? "ar_AR" : "en_US"}
        />

        {/* Twitter Card */}
        <meta name="twitter:title" content={t("testimonials.meta.title")} />
        <meta
          name="twitter:description"
          content={t("testimonials.meta.description")}
        />
      </Head>

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
                    <img
                      src={lavina.src}
                      alt="Sample Appreciation Letter"
                      className="max-w-full md:max-w-md mx-auto rounded shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setLightboxOpen(true)}
                    />
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
