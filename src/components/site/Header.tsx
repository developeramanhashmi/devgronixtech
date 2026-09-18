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
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-border bg-background/85 shadow-sm backdrop-blur-xl"
              : "border-transparent bg-background/40 backdrop-blur-md"
          }`}
        >
          <Link to="/" aria-label="DEVGRONIX home" className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground bg-secondary" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <ul className="flex flex-col px-5 pt-4">
            {nav.map((item, i) => (
              <li key={item.to} className="border-b border-border">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-2xl font-bold text-foreground"
                >
                  <span className="rule-label">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pt-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-brand px-5 py-3.5 font-semibold text-brand-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
