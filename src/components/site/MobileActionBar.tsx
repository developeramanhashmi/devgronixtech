import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

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

export function MobileActionBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when bottom sheet is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop Dim */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Modern Bottom Sheet (Slides UP smoothly from bottom) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-3xl border-t border-border bg-background p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-y-0" : "invisible translate-y-full"
        }`}
      >
        {/* Drag Handle Bar */}
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30" />

        {/* Header inside Sheet */}
        <div className="flex items-center justify-between pb-3 border-b border-border/70">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="interactive inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Links List */}
        <ul className="my-4 flex flex-col gap-1 overflow-y-auto">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand font-semibold bg-brand/10 dark:bg-brand/20" }}
                className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA Button */}
        <div className="pt-2">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-2xl bg-brand py-3 text-center text-sm font-semibold text-brand-foreground shadow-md active:scale-[0.99]"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Fixed Unified Bottom Dock (3-Item Bar) */}
      <aside
        aria-label="Quick Navigation and Contact"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-2.5 backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          {/* Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 active:scale-[0.98]"
          >
            <Menu className="size-3.5 text-brand" aria-hidden="true" />
            <span>Menu</span>
          </button>

          {/* Call Button */}
          <a
            href="tel:+917070519128"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 active:scale-[0.98]"
          >
            <Phone className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <span>Call Us</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-chart-3 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
          >
            <MessageCircle className="size-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
