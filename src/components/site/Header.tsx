import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
    // Hidden on mobile (< 768px), visible only on tablet and desktop
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

          {/* Desktop Navigation Links (Clean pill highlights, no lines) */}
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

          {/* Right Actions */}
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
  );
}
