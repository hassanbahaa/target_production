import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    text: "بكل الود نهنئكم و نهنئ انفسنا بنجاح اول تعاون بيننا و نبارك جهودكم المثمرة خلف ذلك و عملكم بروح الفريق الواحد مما كلل جهود الجميع للوصول إلى ما نحن عليه اذ نأمل مواصلة جهودكم الكريمة للاستمرار و للأفضل ان شاء الله.",
    textEn:
      "Our collaboration with Target Hotel Marketing was a real turning point. Booking rates increased significantly within a few months.",
    author: "مؤسسة دار لافينا",
    authorEn: "Ritz Hotel - Riyadh",
    rating: 5,
  },
  {
    text: "فريق محترف ومتفاني. ساعدونا في تحسين العمليات التشغيلية وزيادة رضا النزلاء بشكل كبير.",
    textEn:
      "Professional and dedicated team. They helped us improve operational processes and significantly increase guest satisfaction.",
    author: "منتجع البحر الأحمر",
    authorEn: "Red Sea Resort",
    rating: 5,
  },
  {
    text: "استراتيجيات تسويقية مبتكرة ونتائج ملموسة. نوصي بخدماتهم لأي فندق يسعى للنمو.",
    textEn:
      "Innovative marketing strategies and tangible results. We recommend their services to any hotel seeking growth.",
    author: "فندق الفيصلية - جدة",
    authorEn: "Al Faisaliah Hotel - Jeddah",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            dir="rtl"
          >
            آراء عملائنا
          </h2>
          <p className="text-muted-foreground text-lg">Client Testimonials</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-background shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="w-12 h-12 text-primary/20 mb-6" />
                      <p
                        className="text-lg md:text-xl text-foreground mb-4 leading-relaxed"
                        dir="rtl"
                      >
                        "{testimonial.text}"
                      </p>
                      <p className="text-muted-foreground mb-6 italic">
                        "{testimonial.textEn}"
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="font-semibold text-foreground" dir="rtl">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.authorEn}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Official Letter Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Official letters of appreciation available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
