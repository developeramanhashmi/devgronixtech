import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-2.5 sm:pt-4">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <nav
          aria-label="Primary"
          className={`relative z-10 flex items-center justify-between gap-4 rounded-full border border-border/80 px-4 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "bg-surface/95 shadow-lg backdrop-blur-xl py-2 dark:border-white/15 dark:bg-surface-strong/95"
              : "bg-surface/85 shadow-sm backdrop-blur-lg py-2.5 dark:border-white/10 dark:bg-surface/90"
          }`}
        >
          <Link to="/" aria-label="DEVGRONIX home" className="interactive shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1.5 lg:flex">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand font-semibold bg-brand/10 dark:bg-brand/20" }}
                  className="nav-link inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground dark:text-foreground/80 dark:hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              to="/contact"
              className="interactive hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm hover:opacity-90 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="interactive inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col justify-between border-l border-border bg-background p-5 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="interactive inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        <ul className="my-6 flex flex-col gap-1.5">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand font-semibold bg-brand/10" }}
                className="flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-border pt-4">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-brand-foreground shadow-sm"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
