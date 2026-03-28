import { Award, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "خبرة تشغيلية",
    titleEn: "Operational Expertise",
    description: "سنوات من الخبرة في إدارة وتشغيل الفنادق",
    descriptionEn: "Years of experience in hotel management and operations"
  },
  {
    icon: Target,
    title: "نتائج ملموسة",
    titleEn: "Tangible Results",
    description: "استراتيجيات مثبتة تحقق عائد استثمار واضح",
    descriptionEn: "Proven strategies delivering clear ROI"
  },
  {
    icon: Headphones,
    title: "دعم مستمر",
    titleEn: "Continuous Support",
    description: "فريق متخصص متاح على مدار الساعة",
    descriptionEn: "Dedicated team available 24/7"
  }
];

const WhyChooseSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" dir="rtl">
            لماذا تختارنا؟
          </h2>
          <p className="text-muted-foreground text-lg">
            Why Choose Us?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" dir="rtl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {feature.titleEn}
                </p>
                <p className="text-muted-foreground" dir="rtl">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
