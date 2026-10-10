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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header className="fixed inset-x-0 top-0 z-50 pt-5 sm:pt-7">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-4 rounded-full border px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-border bg-background/85 py-2 shadow-sm backdrop-blur-xl"
              : "border-transparent bg-background/40 py-2.5 backdrop-blur-md"
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
                  activeProps={{ className: "text-foreground" }}
                  className="nav-link inline-flex rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
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
