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
    <header className="fixed inset-x-0 top-0 z-50 pt-2.5 sm:pt-3.5">
      <style>{`
        @keyframes nav-beam-spin {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
        .nav-beam-stroke {
          animation: nav-beam-spin 8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-beam-stroke { animation: none; }
        }
      `}</style>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-full">
          {/* Animated Glowing Traveling Border (Hollow line running around all sides) */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full overflow-visible rounded-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="nav-beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="30%" stopColor="#f97316" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#f97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Base border */}
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="9999"
              fill="none"
              className="stroke-border/70 dark:stroke-white/12"
              strokeWidth="1"
            />
            {/* Traveling glowing border beam */}
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="9999"
              fill="none"
              stroke="url(#nav-beam-grad)"
              strokeWidth="2"
              pathLength="100"
              strokeDasharray="22 78"
              className="nav-beam-stroke"
            />
          </svg>

          <nav
            aria-label="Primary"
            className={`relative z-10 flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 sm:px-5 ${
              scrolled
                ? "bg-background/90 shadow-md backdrop-blur-xl dark:bg-surface-strong/95 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2"
                : "bg-background/80 shadow-sm backdrop-blur-lg dark:bg-surface/90 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-2 sm:py-2.5"
            }`}
          >
            <Link to="/" aria-label="DEVGRONIX home" className="interactive shrink-0">
              <Logo />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-brand font-semibold" }}
                    className="nav-link inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-foreground/80 dark:hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                to="/contact"
                className="interactive hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90 sm:inline-flex"
              >
                Get a Quote
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="interactive inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              >
                <Menu className="size-4" />
              </button>
            </div>
          </nav>
        </div>
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
            className="interactive inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand font-semibold" }}
                className="block border-b border-border/60 py-3 text-sm font-medium tracking-wide text-foreground/85 transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <ThemeToggle />
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="interactive inline-flex flex-1 items-center justify-center rounded-full bg-brand py-2.5 text-xs font-semibold text-brand-foreground hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
