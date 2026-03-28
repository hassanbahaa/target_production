"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ar: {
    "home.meta.title":
      "تارجت للتسويق الفندقي | حلول متكاملة لتسويق وإدارة الفنادق",

    "home.meta.description":
      "تارجت للتسويق الفندقي تقدم حلولًا احترافية لتسويق وإدارة وتشغيل الفنادق، لزيادة الحجوزات وتحسين الأداء ورفع معدلات الإشغال.",
    // Contact SEO
    "contact.meta.title": "تواصل معنا | تارجت للتسويق الفندقي",

    "contact.meta.description":
      "تواصل مع تارجت للتسويق الفندقي لمعرفة المزيد عن خدمات تسويق وإدارة الفنادق أو لبدء شراكة ناجحة تحقق نتائج حقيقية.",

    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.testimonials": "آراء العملاء",
    "nav.blogs": "مقالات",
    "nav.contact": "اتصل بنا",
    "nav.cta": "احجز استشارة",
    // meta services data
    "services.meta.description":
      "نقدم خدمات متكاملة في إدارة وتشغيل وتسويق الفنادق، مع حلول احترافية لزيادة الأداء وتحقيق أفضل النتائج.",
    // Hero Section
    "hero.title": "حلول متكاملة لتسويق فندقك",
    "hero.subtitle":
      "نساعدك في زيادة الحجوزات وتحسين الأداء من خلال استراتيجيات تسويقية مبتكرة",
    "hero.cta": "ابدأ الآن",

    // About Section
    "about.meta.title":
      "من نحن | تارجت للتسويق الفندقي - إدارة وتسويق الفنادق الاحترافي",
    "about.meta.description":
      "تعرف على تارجت للتسويق الفندقي، الشريك الموثوق في تقديم حلول متكاملة لإدارة الفنادق، تشغيل الفنادق، والتسويق الرقمي لزيادة الإيرادات ورفع معدلات الإشغال.",
    "about.title": "من نحن",
    "about.description1":
      "تارجت للتسويق الفندقي هي شركة متخصصة في تقديم حلول متكاملة لإدارة وتشغيل وتسويق الفنادق. نجمع بين الخبرة التشغيلية والتسويق الرقمي المتطور لمساعدة الفنادق على تحقيق أهدافها.",
    "about.readMore": "اقرأ المزيد",
    "about.story.title": "قصتنا",
    "about.story.description":
      "تأسست شركة تارجت للتسويق الفندقي بهدف تقديم حلول متكاملة واحترافية في إدارة الفنادق، تشغيل الفنادق، وتسويق الفنادق الرقمي. نحن نؤمن أن النجاح الحقيقي في صناعة الضيافة والسياحة يعتمد على الجمع بين الخبرة التشغيلية العميقة واستراتيجيات التسويق الرقمي المبتكرة والفعالة. نعمل مع مجموعة واسعة ومتنوعة من الفنادق والمنتجعات في مصر والمنطقة العربية، ونقدم لكل عميل استراتيجيات مخصصة تساعده على زيادة الإيرادات، رفع معدلات الإشغال، تعزيز الحجوزات المباشرة، وبناء علامة تجارية قوية في سوق السياحة التنافسي.",
    "about.vision.title": "رؤيتنا",
    "about.vision.description":
      "أن نكون الشريك الأول والموثوق للفنادق والمنتجعات في المنطقة العربية، من خلال تقديم حلول مبتكرة في إدارة الفنادق، تشغيل الفنادق، وتسويق الفنادق الرقمي، لتحقيق نتائج استثنائية، زيادة الإيرادات، ورفع معدلات الإشغال باستمرار.",

    "about.mission.title": "مهمتنا",
    "about.mission.description":
      "تمكين الفنادق والمنتجعات من تحقيق أقصى إمكاناتها من خلال الجمع بين الخبرة التشغيلية العميقة واستراتيجيات التسويق الرقمي المتطورة، مع التركيز على زيادة الإيرادات، رفع معدلات الإشغال، وتحقيق نتائج قابلة للقياس والاستمرارية.",
    // Services Section
    "services.title": "خدماتنا",
    "services.subtitle": "Our Services",
    "services.p":
      "نقدم مجموعة شاملة ومتخصصة من خدمات إدارة الفنادق وتشغيل الفنادق وتسويق الفنادق الاحترافي، لمساعدتك في زيادة الإشغال والإيرادات وتحقيق أهدافك التجارية بنجاح.",
    "services.management.title": "إدارة وتشغيل الفنادق",
    "services.management.description":
      "نقدم خدمات إدارة وتشغيل شاملة لجميع جوانب العمل الفندقي",
    "services.marketing.title": "التسويق الرقمي",
    "services.marketing.description":
      "استراتيجيات تسويق رقمي متطورة لزيادة حجوزاتك",
    "services.performance.title": "تحسين الأداء",
    "services.performance.description":
      "تحليلات متقدمة وتقارير شاملة لتحسين الأداء",
    "services.viewAll": "عرض جميع الخدمات",
    // Services Fuetures
    "services.staffManagement.title": "إدارة الموظفين والتدريب",
    "services.staffManagement.description":
      "تدريب وإدارة فريق العمل بكفاءة عالية لضمان خدمة متميزة",
    "services.guestExperience.title": "تحسين تجربة النزلاء",
    "services.guestExperience.description":
      "استراتيجيات مبتكرة لرفع رضا النزلاء وزيادة التقييمات الإيجابية",
    "services.inventoryManagement.title": "إدارة المخزون والمشتريات",
    "services.inventoryManagement.description":
      "تحسين إدارة المخزون وتقليل التكاليف من خلال عمليات مشتريات ذكية",
    "services.qualityAssurance.title": "ضمان الجودة والمعايير",
    "services.qualityAssurance.description":
      "التأكد من الالتزام بأعلى معايير الجودة والسلامة في جميع العمليات",
    //seo
    "services.seo.title": "تحسين محركات البحث (SEO)",
    "services.seo.description":
      "نحسن ظهور موقعك الإلكتروني في نتائج البحث لجذب المزيد من الزوار المستهدفين وزيادة الحجوزات العضوية.",
    "services.seo.features.keywordResearch": "تحسين الكلمات المفتاحية",
    "services.seo.features.contentOptimization": "تحسين المحتوى",
    "services.seo.features.linkBuilding": "بناء الروابط الخارجية",
    "services.seo.features.performanceOptimization": "تحسين السرعة والأداء",
    // Analyzis
    "services.analytics.title": "التحليل والتقارير",
    "services.analytics.description":
      "نوفر تقارير تحليلية شاملة تساعدك على فهم أداء فندقك واتخاذ قرارات مبنية على البيانات لتحسين النتائج.",

    "services.analytics.features.kpis": "تتبع مؤشرات الأداء الرئيسية (KPIs)",
    "services.analytics.features.customerBehavior": "تحليل سلوك العملاء",
    "services.analytics.features.revenueReports": "تقارير الإيرادات",
    "services.analytics.features.improvementRecommendations": "توصيات للتحسين",
    // marketing
    "services.marketing.features.socialMedia": "إدارة وسائل التواصل الاجتماعي",
    "services.marketing.features.paidAds":
      "الإعلانات المدفوعة (Google Ads, Facebook Ads)",
    "services.marketing.features.emailMarketing":
      "التسويق عبر البريد الإلكتروني",
    "services.marketing.features.contentMarketing": "تسويق المحتوى",
    // ==================================== //
    // Platforms Section
    "platforms.title": "منصات الحجز الرئيسية",
    "platforms.subtitle": "Major Booking Platforms",
    "platforms.description":
      "نساعدك في إدارة حضورك عبر جميع منصات الحجز الرئيسية",

    // Clients Section
    "clients.title": "عملاؤنا",
    "clients.subtitle": "Our Clients",

    // Testimonials Section
    "testimonials.title": "آراء عملائنا",
    "testimonials.subtitle": "Client Testimonials",
    "testimonials.discover": "اكتشف ما يقوله عملاؤنا عن تجربتهم معنا",
    "testimonials.viewAll": "عرض جميع الآراء",
    "testimonials.letterTitle": "خطابات شكر وتقدير رسمية",
    "testimonials.letterDescription":
      "نحتفظ بمجموعة من خطابات الشكر والتقدير الرسمية من عملائنا، وهي متاحة للاطلاع عند الطلب.",
    "testimonials.sampleLetter":
      "Sample appreciation letter from hotel partner",
    "testimonials.meta.title": "آراء عملائنا | تارجت للتسويق الفندقي",

    "testimonials.meta.description":
      "اطّلع على آراء وتجارب عملائنا في تارجت للتسويق الفندقي، واكتشف كيف ساعدنا الفنادق على زيادة الحجوزات وتحسين الأداء وتحقيق نتائج حقيقية.",

    // reviews
    "testimonials.reviews.r1":
      "بكل الود نهنئكم و نهنئ انفسنا بنجاح اول تعاون بيننا و نبارك جهودكم المثمرة خلف ذلك و عملكم بروح الفريق الواحد مما كلل جهود الجميع للوصول إلى ما نحن عليه اذ نأمل مواصلة جهودكم الكريمة للاستمرار و للأفضل ان شاء الله.",
    "testimonials.reviews.r1.author": "عبدربه إبراهيم الشيخي",
    "testimonials.reviews.r1.hotel": "مؤسسة دار لافينا",

    "testimonials.reviews.r2":
      "من افضل المؤسسات التي عملت معها, احترافية عالية في العمل و كذلك سرعة الاستجابة و التعاون و كذلك يتميزون بتنوع تسويق المنشأة على برامج متعددة لكسب عدد اكبر من النزلاء.",
    "testimonials.reviews.r2.author": "سلطان بن سعيد آل عون",
    "testimonials.reviews.r2.hotel": "فندق كيان للاجنحة الفندقية ابها",

    "testimonials.reviews.r3":
      "شركة ممتازة و تقدم خدمات افضل, انصح بهم و بشدة اعمل معهم منذ 3 سنوات و الحمد لله.",
    "testimonials.reviews.r3.author": "هاني عبد المحسن العمري",
    "testimonials.reviews.r3.hotel": "فندق كيان للاجنحة الفندقية جدة",
    "testimonials.reviews.r4":
      "ادارة ناجحة و عمل جماعي على اعلى مستوى, كنتم اضافة قوية لنا في زيادة المبيعات و جلب عدد كبير من العملاء الجدد.",
    "testimonials.reviews.r4.author": "احمد عبد الستار",
    "testimonials.reviews.r4.hotel": "جراند خيال جدة",
    "testimonials.reviews.r5":
      "تعتبر من افضل الشركات في التسويق من خلال متابعتهم للعمل و حسن التعامل مع العملاء و لازلنا مستمرين بالتعاون معهم.",
    "testimonials.reviews.r5.author": "محمد محسن الوادعي",
    "testimonials.reviews.r5.hotel": "فندق قصر الممشى",
    "testimonials.reviews.r6":
      "لكم منا كل الاحترام و التقدير على الجهود المبذول في التسويق و تقدم سير العمل و حسن التعامل مع المنشأة و مع العملاء .",
    "testimonials.reviews.r6.author": "محمد مصطفى",
    "testimonials.reviews.r6.hotel": "فندق أمواج الجبيل",
    "testimonials.reviews.r7":
      "شركة من افضل شركات التسويق حيث قامت برفع نسبة الاشغال في وقت قصير و على مدار 4 سنوات و احنا مستمرين معهم.",
    "testimonials.reviews.r7.author": "محمد",
    "testimonials.reviews.r7.hotel": " فندق برج بيات",
    // CTA Section
    "cta.title": "ابدأ شراكتك معنا اليوم",
    "cta.button": "تواصل الآن",

    // Footer
    "footer.description":
      "شريكك الموثوق في التسويق الفندقي والإدارة الاحترافية",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.rights": "© 2024 تارجت للتسويق الفندقي. جميع الحقوق محفوظة.",
    "footer.followUs": "تابعنا",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "Contact Us",
    "contact.description": "نحن هنا لمساعدتك. تواصل معنا اليوم",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",

    // WhatsApp
    "whatsapp.tooltip": "تواصل معنا عبر واتساب",
  },
  en: {
    // Home SEO
    "home.meta.title":
      "Target Hotel Marketing | Hotel Marketing & Management Solutions",

    "home.meta.description":
      "Target Hotel Marketing provides professional hotel marketing, management, and operation solutions to increase bookings and improve performance.",

    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.blogs": "Blogs",
    "nav.contact": "Contact",
    "nav.cta": "Book Consultation",
    // Contact SEO
    "contact.meta.title": "Contact Us | Target Hotel Marketing",

    "contact.meta.description":
      "Contact Target Hotel Marketing to learn more about our hotel marketing, management, and digital solutions or to start a successful partnership.",

    // Hero Section
    "hero.title": "Comprehensive Solutions for Hotel Marketing",
    "hero.subtitle":
      "We help you increase bookings and improve performance through innovative marketing strategies",
    "hero.cta": "Get Started",
    // meta data
    "services.meta.description":
      "We provide comprehensive hotel management, operations, and marketing services with professional solutions designed to boost performance, increase revenue, and maximize occupancy rates.",

    // About Section
    "about.meta.title":
      "About Us | Target Hotel Marketing - Professional Hotel Management & Marketing",
    "about.meta.description":
      "Discover Target Hotel Marketing, your trusted partner for comprehensive hotel management, operations, and digital marketing solutions designed to increase revenue, boost occupancy, and drive direct bookings.",
    "about.title": "About Us",
    "about.description1":
      "Target Hotel Marketing specializes in comprehensive solutions for hotel management, operation, and marketing, combining operational expertise with advanced digital marketing.",
    "about.readMore": "Read More",
    "about.story.title": "Our Story",
    "about.story.description":
      "Target Hotel Marketing was established with the goal of providing comprehensive solutions for hotel management, operations, and marketing. We firmly believe that success in the hospitality industry requires a powerful blend of operational expertise and innovative digital marketing. We partner with a diverse range of hotels and resorts, delivering customized strategies that help them achieve their business objectives, increase revenue, boost occupancy rates, and strengthen their competitive position in the market.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the trusted first-choice partner for hotels and resorts across the region, delivering innovative hotel management, operations, and digital marketing solutions that drive exceptional results, maximize revenue, and consistently boost occupancy rates.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Empowering hotels and resorts to reach their full potential by combining deep operational expertise with advanced digital marketing strategies, focused on driving measurable results, increasing revenue, and maximizing occupancy rates.",
    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Our Services",
    "services.p":
      "We provide a comprehensive suite of specialized hotel management services, including expert hotel operations and strategic hotel marketing, designed to help you maximize revenue and achieve your business objectives.",
    "services.management.title": "Hotel Management & Operations",
    "services.management.description":
      "Comprehensive hotel management and operation services",
    "services.marketing.title": "Digital Marketing",
    "services.marketing.description":
      "Advanced digital marketing strategies to increase bookings",
    "services.performance.title": "Performance Optimization",
    "services.performance.description":
      "Advanced analytics and comprehensive reports",
    "services.viewAll": "View All Services",
    // Services Fuetures
    "services.staffManagement.title": "Staff Management and Training",
    "services.staffManagement.description":
      "Professional staff management and comprehensive training programs to ensure exceptional service quality",
    "services.guestExperience.title": "Enhancing Guest Experience",
    "services.guestExperience.description":
      "Innovative strategies to boost guest satisfaction, increase positive reviews, and build loyalty",
    "services.inventoryManagement.title": "Inventory and Purchasing Management",
    "services.inventoryManagement.description":
      "Optimized inventory control and smart procurement processes to reduce costs and improve efficiency",
    "services.qualityAssurance.title":
      "Quality Assurance and Standards Compliance",
    "services.qualityAssurance.description":
      "Ensuring full compliance with the highest international quality and safety standards across all operations",
    //seo
    "services.seo.title": "Hotel SEO Optimization",
    "services.seo.description":
      "We enhance your hotel website's search engine visibility to attract more targeted traffic, boost organic rankings, and increase direct bookings.",

    "services.seo.features.keywordResearch": "Keyword Research & Optimization",
    "services.seo.features.contentOptimization": "On-Page Content Optimization",
    "services.seo.features.linkBuilding": "Strategic Link Building",
    "services.seo.features.performanceOptimization":
      "Site Speed & Technical Performance Improvements",
    // Analyzis
    "services.analytics.title": "Hotel Performance Analytics & Reporting",
    "services.analytics.description":
      "We deliver comprehensive analytics and detailed reports to give you deep insights into your hotel's performance, enabling data-driven decisions that boost occupancy, revenue, and profitability.",

    "services.analytics.features.kpis":
      "Tracking Key Performance Indicators (KPIs)",
    "services.analytics.features.customerBehavior":
      "Guest Behavior & Segmentation Analysis",
    "services.analytics.features.revenueReports":
      "Detailed Revenue & Financial Reports",
    "services.analytics.features.improvementRecommendations":
      "Actionable Recommendations for Optimization",

    // marketing
    "services.marketing.features.socialMedia": "Social Media Management",
    "services.marketing.features.paidAds":
      "Paid Advertising (Google Ads & Meta Ads)",
    "services.marketing.features.emailMarketing": "Email Marketing Campaigns",
    "services.marketing.features.contentMarketing":
      "Content Marketing & Blog Strategy",
    // ==================================== //
    // Platforms Section
    "platforms.title": "Major Booking Platforms",
    "platforms.subtitle": "Major Booking Platforms",
    "platforms.description":
      "We help you manage your presence across all major booking platforms",

    // Clients Section
    "clients.title": "Our Clients",
    "clients.subtitle": "Our Clients",

    // Testimonials Section
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "Client Testimonials",
    "testimonials.discover":
      "Discover what our clients say about their experience with us",
    "testimonials.viewAll": "View All Testimonials",
    "testimonials.letterTitle": "Official Letters of Appreciation",
    "testimonials.letterDescription":
      "Official letters of appreciation from our clients are available upon request.",
    "testimonials.sampleLetter":
      "Sample appreciation letter from hotel partner",
    // Testimonials SEO
    "testimonials.meta.title": "Client Testimonials | Target Hotel Marketing",

    "testimonials.meta.description":
      "Read real client testimonials and success stories from hotels that partnered with Target Hotel Marketing to increase bookings and improve performance.",

    "testimonials.reviews.r1":
      "With all sincerity, we congratulate you — and ourselves — on the success of our first collaboration. We truly appreciate your fruitful efforts and your spirit of teamwork, which have led us all to this achievement. We look forward to your continued dedication and to achieving even greater success, God willing.",
    "testimonials.reviews.r1.author": "Abdur-Rabbuh Ibrahim Al-Sheikhi",
    "testimonials.reviews.r1.hotel": "Foundation house Lavina",

    "testimonials.reviews.r2":
      "One of the best organizations I have worked with — highly professional, responsive, and cooperative. They also excel in diversifying the property's marketing across multiple platforms to attract a larger number of guests.",
    "testimonials.reviews.r2.author": "Sultan Bin Saeed Al-Aoun",
    "testimonials.reviews.r2.hotel": "Kyan Hotel Suites Abha",

    "testimonials.reviews.r3":
      "An excellent company that provides outstanding services. I highly recommend them — I've been working with them for three years, and thank God, the experience has been great.",
    "testimonials.reviews.r3.author": "Hani Abdulmohsen Al-Omari",
    "testimonials.reviews.r3.hotel": "Kyan Hotel Suites Jeddah",
    "testimonials.reviews.r4":
      "Successful management and outstanding teamwork at the highest level.You were a strong addition to us in increasing sales and attracting a large number of new clients.",
    "testimonials.reviews.r4.author": "Ahmed Abdul Sattar",
    "testimonials.reviews.r4.hotel": "Grand Khayal Jeddah",
    "testimonials.reviews.r5":
      "One of the best marketing companies — distinguished by their follow-up, professionalism, and excellent customer relations.We are still continuing our collaboration with them.",
    "testimonials.reviews.r5.author": "Mohammed Mohsen Al-Wad’i",
    "testimonials.reviews.r5.hotel": "Qasr Al-Mamsha Hotel",
    "testimonials.reviews.r6":
      "You have our utmost respect and appreciation for your dedicated efforts in marketing, the progress of operations, and your excellent professionalism in dealing with both the establishment and the clients.",
    "testimonials.reviews.r6.author": "Mohamed Mostafa",
    "testimonials.reviews.r6.hotel": "Amwaj Aljubail Hotel",
    "testimonials.reviews.r7":
      "One of the best marketing companies; they managed to increase the occupancy rate in a short time, and over the course of 4 years we have continued working with them.",
    "testimonials.reviews.r7.author": "Mohamed",
    "testimonials.reviews.r7.hotel": "Burj Bayat Hotel",
    // CTA Section
    // CTA Section
    "cta.title": "Start Your Partnership With Us Today",
    "cta.button": "Contact Now",

    // Footer
    "footer.description":
      "Your trusted partner in hotel marketing and professional management",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.rights": "© 2024 Target Hotel Marketing. All rights reserved.",
    "footer.followUs": "Follow Us",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Contact Us",
    "contact.description": "We're here to help. Contact us today",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // WhatsApp
    "whatsapp.tooltip": "Chat with us on WhatsApp",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved) {
      setLanguage(saved as Language);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
