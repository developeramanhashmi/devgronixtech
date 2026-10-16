import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles, MessageCircle, ArrowRight, Check } from "lucide-react";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user already closed popup in this session
    const isDismissed = sessionStorage.getItem("devgronix_lead_popup_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200); // 1.2s polite delay after load
      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll when popup is open so mobile layout never shifts
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("devgronix_lead_popup_dismissed", "true");
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    "Hi DEVGRONIX! I saw the special launch offer on your website and would like to discuss my project."
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-x-hidden overflow-y-auto">
      {/* Blurred Backdrop Overlay - Click to close */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-2xl border border-border bg-surface p-5 shadow-2xl sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Glow Accent - contained inside bounds */}
        <div className="pointer-events-none absolute right-0 top-0 size-32 -translate-y-1/4 translate-x-1/4 rounded-full bg-brand/15 blur-2xl" />

        {/* Close Button (X) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full border border-border bg-surface-subtle text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
          <Sparkles className="size-3.5 text-brand" />
          <span>Limited Launch Offer</span>
        </div>

        {/* Title & Pitch */}
        <h3 className="mt-2.5 text-lg font-bold text-foreground sm:text-2xl">
          Build Your Website or App with <span className="text-brand">DEVGRONIX</span>
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Get ultra-fast modern web development, high-end branding, or custom software at special introductory rates.
        </p>

        {/* Pricing Highlights Grid */}
        <div className="mt-3.5 grid grid-cols-3 gap-1.5 rounded-xl border border-border/70 bg-surface-subtle/50 p-2.5 text-center sm:gap-2 sm:p-3">
          <div className="border-r border-border/60 pr-1.5">
            <span className="block text-[0.625rem] uppercase tracking-wider text-muted-foreground">Websites</span>
            <span className="text-xs font-bold text-foreground sm:text-sm">Starts ₹999</span>
          </div>
          <div className="border-r border-border/60 px-1">
            <span className="block text-[0.625rem] uppercase tracking-wider text-muted-foreground">Graphics</span>
            <span className="text-xs font-bold text-foreground sm:text-sm">Starts ₹99</span>
          </div>
          <div className="pl-1.5">
            <span className="block text-[0.625rem] uppercase tracking-wider text-muted-foreground">Video Reels</span>
            <span className="text-xs font-bold text-foreground sm:text-sm">Starts ₹399</span>
          </div>
        </div>

        {/* Bullet Perks */}
        <ul className="mt-3.5 space-y-1.5 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <Check className="size-3.5 shrink-0 text-emerald-500" />
            <span>24–48h Rapid Kickoff &amp; 1-Year Free Hosting</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-3.5 shrink-0 text-emerald-500" />
            <span>Direct WhatsApp Support with Engineers &amp; Designers</span>
          </li>
        </ul>

        {/* Actions */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={`https://wa.me/917070519128?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-brand-foreground shadow-sm transition-all hover:opacity-90 sm:py-3 sm:text-sm"
          >
            <MessageCircle className="size-4" />
            Claim Offer on WhatsApp
          </a>

          <Link
            to="/contact"
            onClick={handleClose}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand sm:py-3"
          >
            <span>Custom Quote</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Dismiss text */}
        <div className="mt-2.5 text-center">
          <button
            type="button"
            onClick={handleClose}
            className="text-[0.6875rem] text-muted-foreground hover:text-foreground"
          >
            No thanks, I will browse first
          </button>
        </div>
      </div>
    </div>
  );
}
