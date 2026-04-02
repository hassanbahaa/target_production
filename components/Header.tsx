"use client";

// components/Header.tsx
import { Button } from "@/components/ui/button";
import { Menu, Languages } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";
import ExportedImage from "next-image-export-optimizer";
import targetLogo from "../public/assets/targetlogo.webp";
import { localizeHref } from "@/lib/i18n";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    const localized = localizeHref(path, language);
    return router.asPath.replace(/\/$/, "") === localized.replace(/\/$/, "");
  };

  const L = (href: string) => localizeHref(href, language);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={L("/")} className="flex items-center gap-3 group" aria-label="Target Hotel Marketing Home">
            <ExportedImage
              src={targetLogo}
              alt="Target Hotel Marketing Logo"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
              priority
              sizes="150px"
            />
            <div className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
              Target Hotel Marketing
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={L("/")}
              aria-label="Navigate to Home Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href={L("/about")}
              aria-label="Navigate to About Us Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href={L("/services")}
              aria-label="Navigate to Services Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/services") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.services")}
            </Link>
            <Link
              href={L("/testimonials")}
              aria-label="Navigate to Testimonials Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/testimonials") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href={L("/blog")}
              aria-label="Navigate to Blog Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/blog") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.blogs")}
            </Link>
            <Link
              href={L("/contact")}
              aria-label="Navigate to Contact Page"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:bg-muted transition-all duration-300"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === "ar" ? "EN" : "عربي"}
              </span>
            </button>
            <Link href={L("/contact")} aria-label="Go to Contact Page">
              <Button className="btn-primary" aria-label="Contact Us">{t("nav.cta")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-border hover:bg-muted transition-all duration-300"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-medium">
                {language === "ar" ? "EN" : "عربي"}
              </span>
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href={L("/")}
              onClick={closeMenu}
              aria-label="Navigate to Home Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href={L("/about")}
              onClick={closeMenu}
              aria-label="Navigate to About Us Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href={L("/services")}
              onClick={closeMenu}
              aria-label="Navigate to Services Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/services") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.services")}
            </Link>
            <Link
              href={L("/testimonials")}
              onClick={closeMenu}
              aria-label="Navigate to Testimonials Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/testimonials") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href={L("/blog")}
              onClick={closeMenu}
              aria-label="Navigate to Blog Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/blog") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.blogs")}
            </Link>
            <Link
              href={L("/contact")}
              onClick={closeMenu}
              aria-label="Navigate to Contact Page"
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary font-semibold" : ""
              }`}
            >
              {t("nav.contact")}
            </Link>
            <Link href={L("/contact")} onClick={closeMenu} aria-label="Go to Contact Page">
              <Button className="btn-primary w-full" aria-label="Contact Us">{t("nav.cta")}</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

