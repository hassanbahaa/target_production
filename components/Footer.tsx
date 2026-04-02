import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { localizeHref } from "@/lib/i18n";

const Footer = () => {
  const { language, t } = useLanguage();
  const L = (href: string) => localizeHref(href, language);

  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <div className="text-lg font-semibold">
                Target Hotel Marketing
              </div>
            </div>
            <p
              className="text-sm text-gray-300 text-center md:text-left"
            >
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-lg">{t("footer.quickLinks")}</h3>
            <nav className="flex flex-col gap-2 text-center">
              <Link
                href={L("/")}
                aria-label="Navigate to Home Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                href={L("/about")}
                aria-label="Navigate to About Us Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href={L("/services")}
                aria-label="Navigate to Services Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.services")}
              </Link>
              <Link
                href={L("/testimonials")}
                aria-label="Navigate to Testimonials Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.testimonials")}
              </Link>
              <Link
                href={L("/blog")}
                aria-label="Navigate to Blog Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.blogs")}
              </Link>
              <Link
                href={L("/contact")}
                aria-label="Navigate to Contact Page"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-4 text-lg">
              {t("footer.followUs")}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61553856831033"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/target_hotel_marketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@target.hotel.marketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

