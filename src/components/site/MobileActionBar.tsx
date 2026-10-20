import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { 
  Menu, 
  MessageCircle, 
  Phone, 
  X, 
  Home, 
  Layers, 
  Briefcase, 
  Tag, 
  Users, 
  Info, 
  Mail, 
  ArrowRight 
} from "lucide-react";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", to: "/" as const, icon: Home },
  { label: "Services", to: "/services" as const, icon: Layers },
  { label: "Works", to: "/works" as const, icon: Briefcase },
  { label: "Pricing", to: "/pricing" as const, icon: Tag },
  { label: "Partner", to: "/partner" as const, icon: Users },
  { label: "About", to: "/about" as const, icon: Info },
  { label: "Contact", to: "/contact" as const, icon: Mail },
];

export function MobileActionBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Dim Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-200 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Modern Compact Floating Sheet (Doesn't cover whole screen) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        aria-hidden={!isOpen}
        className={`fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-3xl border border-border/80 bg-background/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0"
        }`}
      >
        {/* Handle Bar */}
        <div className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-muted-foreground/30" />

        {/* Top Header inside Modal */}
        <div className="flex items-center justify-between border-b border-border/70 pb-3">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="interactive inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Sleek 2-Column Grid */}
        <div className="my-3 grid grid-cols-2 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "border-brand/40 bg-brand/10 text-brand font-semibold shadow-xs" }}
                className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface/80 px-3 py-2.5 text-xs font-medium text-foreground transition-all hover:border-brand/30 hover:bg-muted"
              >
                <Icon className="size-4 shrink-0 text-brand" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pt-1">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-center text-xs font-semibold text-brand-foreground shadow-md transition-all active:scale-[0.99]"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Modern Floating Island Dock */}
      <aside
        aria-label="Mobile Navigation"
        className="fixed bottom-3 inset-x-3 z-40 mx-auto max-w-sm md:hidden"
      >
        <div className="flex items-center justify-between gap-1.5 rounded-full border border-border/80 bg-background/90 p-1.5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/90">
          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border-strong bg-surface py-2 text-xs font-semibold text-foreground transition-all active:scale-95"
          >
            <Menu className="size-3.5 text-brand" aria-hidden="true" />
            <span>Menu</span>
          </button>

          {/* Call Button */}
          <a
            href="tel:+917070519128"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border-strong bg-surface py-2 text-xs font-semibold text-foreground transition-all active:scale-95"
          >
            <Phone className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <span>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 hover:opacity-95"
          >
            <MessageCircle className="size-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
