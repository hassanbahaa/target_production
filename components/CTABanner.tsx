'use client';

import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" dir="rtl">
          ابدأ شراكتك معنا اليوم
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Start Your Partnership With Us Today
        </p>
        <Button 
          onClick={() => scrollToSection('contact')}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          تواصل الآن
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
