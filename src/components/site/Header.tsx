import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Works", to: "/works" as const },
  { label: "About", to: "/about" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Partner", to: "/partner" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= MOBILE TOP TICKER & SLIM HEADER (< md) ================= */}
      <div className="fixed inset-x-0 top-0 z-40 md:hidden w-full max-w-full overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-md">
        {/* Continuous Auto-Scrolling Announcement Marquee */}
        <div className="w-full max-w-full overflow-hidden bg-brand/10 py-1 text-[11px] font-medium text-brand border-b border-brand/15">
          <div className="hero-marquee flex w-max items-center gap-8">
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <Sparkles className="size-3 text-brand" />
              <strong>NEW:</strong> Custom T-Shirts, Hoodies &amp; Corporate Printing Solutions
            </span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">🌐 Websites starting at ₹999 with 24–48h delivery</span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">🚀 Pan-India Delivery on all Branded Merchandise</span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">💬 Free WhatsApp Consultation: +91 70705 19128</span>
            <span className="shrink-0">•</span>
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <Sparkles className="size-3 text-brand" />
              <strong>NEW:</strong> Custom T-Shirts, Hoodies &amp; Corporate Printing Solutions
            </span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">🌐 Websites starting at ₹999 with 24–48h delivery</span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">🚀 Pan-India Delivery on all Branded Merchandise</span>
            <span className="shrink-0">•</span>
            <span className="shrink-0">💬 Free WhatsApp Consultation: +91 70705 19128</span>
          </div>
        </div>

        {/* Slim Mobile Brand Bar */}
        <div className="flex h-11 items-center justify-between px-4">
          <Link to="/" aria-label="DEVGRONIX home" className="interactive shrink-0 scale-90 -ml-1">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex size-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP HEADER (>= md) ================= */}
      <header className="hidden md:block fixed inset-x-0 top-0 z-40 pt-2.5 sm:pt-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Primary"
            className={`relative z-10 flex items-center justify-between gap-4 rounded-full border border-border/80 px-4 transition-all duration-300 sm:px-6 ${
              scrolled
                ? "bg-surface/95 shadow-lg backdrop-blur-xl py-2 dark:border-white/15 dark:bg-surface-strong/95"
                : "bg-surface/85 shadow-sm backdrop-blur-lg py-2.5 dark:border-white/10 dark:bg-surface/90"
            }`}
          >
            {/* Logo */}
            <Link to="/" aria-label="DEVGRONIX home" className="interactive shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-1.5 lg:flex">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-brand font-semibold bg-brand/10 dark:bg-brand/20" }}
                    className="inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted/70 hover:text-foreground dark:text-foreground/80 dark:hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              <Link
                to="/contact"
                className="interactive inline-flex rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm hover:opacity-90"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
