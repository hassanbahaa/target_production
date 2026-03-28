import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/5107d79cb4fa9d0f8d142ca25b46e6df",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: "رسالة جديدة من موقع Target Hotel Marketing",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "✅ تم الإرسال بنجاح",
          description: "شكرًا لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "حدث خطأ أثناء الإرسال 😕",
          description: "يرجى المحاولة مرة أخرى لاحقًا.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "حدث خطأ في الاتصال 😕",
        description: "تأكد من اتصال الإنترنت وحاول مجددًا.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            dir="rtl"
          >
            تواصل معنا
          </h2>
          <p className="text-muted-foreground text-lg">Contact Us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2 text-foreground"
                    dir="rtl"
                  >
                    الاسم / Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2 text-foreground"
                    dir="rtl"
                  >
                    البريد الإلكتروني / Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2 text-foreground"
                    dir="rtl"
                  >
                    رقم الهاتف / Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 XX XXX XXXX"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2 text-foreground"
                    dir="rtl"
                  >
                    الرسالة / Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  إرسال / Send
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" dir="rtl">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-muted-foreground">Email</p>
                  <a
                    href="mailto:targethotelmarketing@gmail.com"
                    className="text-primary hover:underline"
                  >
                    targethotelmarketing@gmail.com
                  </a>
                  <br></br>
                  <a
                    href="mailto:info@targethotelmarketing.com"
                    className="text-primary hover:underline"
                  >
                    info@targethotelmarketing.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" dir="rtl">
                    الهاتف
                  </h3>
                  <p className="text-muted-foreground">Phone</p>
                  <a
                    href="tel:+966576351714"
                    className="text-primary hover:underline"
                  >
                    +966 57 635 1714
                  </a>
                  <br />
                  <a
                    href="tel:+201091611267"
                    className="text-primary hover:underline"
                  >
                    +20 10 916 11267
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" dir="rtl">
                    العنوان
                  </h3>
                  <p className="text-muted-foreground">Address</p>
                  <p className="text-foreground" dir="rtl">
                    القاهرة, جمهورية مصر العربية
                  </p>
                  <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3
                className="font-semibold text-foreground mb-3 text-center"
                dir="rtl"
              >
                ساعات العمل
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-2">
                Working Hours
              </p>
              <p className="text-foreground text-center" dir="rtl">
                الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً
              </p>
              <p className="text-sm text-muted-foreground text-center">
                Sunday - Thursday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
