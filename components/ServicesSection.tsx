import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, Building2, BarChart3, Search } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "التسويق الرقمي",
    description:
      "استراتيجيات تسويقية متكاملة لزيادة الحجوزات وتعزيز حضور فندقك الرقمي",
  },
  {
    icon: Building2,
    title: "إدارة الفنادق",
    description: "حلول تشغيلية احترافية لضمان أعلى معايير الجودة والكفاءة",
  },
  {
    icon: BarChart3,
    title: "تحليل الأداء",
    description: "تقارير وتحليلات دقيقة لقياس الأداء واتخاذ قرارات مستنيرة",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث",
    description: "تحسين ظهور فندقك في نتائج البحث وزيادة الوصول العضوي",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            dir="rtl"
          >
            خدماتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-hover border-none bg-background group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <div className="h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
