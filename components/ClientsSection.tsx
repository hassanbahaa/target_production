import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";
import { hotels } from "@/lib/hotels";
import AutoScroll from "embla-carousel-auto-scroll";
import ExportedImage from "next-image-export-optimizer";

const ClientsSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="section-padding" dir="ltr">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("clients.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("clients.subtitle")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...hotels, ...hotels].map((hotel, index) => (
              <CarouselItem
                key={`${hotel.id}-${index}`}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col items-center text-center group transition-all">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto overflow-hidden rounded-xl shadow-md">
                      <ExportedImage
                        src={`/hotels/${hotel.id}.jpg`}
                        alt={isRTL ? hotel.name : hotel.nameEn}
                        className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        fill
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                        placeholder="blur"
                      />
                    </div>
                    <h3 className="text-base font-semibold mt-3 break-words px-2">
                      {isRTL ? hotel.name : hotel.nameEn}
                    </h3>
                    <p className="text-sm text-gray-500 text-center emoji-font">
                      {isRTL ? hotel.city : hotel.cityEn} {hotel.flag}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
