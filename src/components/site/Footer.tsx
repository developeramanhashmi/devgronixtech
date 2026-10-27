import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Container } from "@/components/site/Section";
import { Logo } from "@/components/site/Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Partner Program", to: "/partner" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-strong/80 dark:bg-surface-strong/95">
      {/* Background Subtle Gradient & Light Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 size-80 rounded-full bg-hero-cyan/10 blur-3xl"
      />

      <Container className="relative z-10 pt-16 pb-12 sm:pt-20">
        {/* Pre-Footer Action Callout Banner (Lightngear High-Impact Style) */}
        {/* <div className="relative mb-16 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface-strong to-surface p-8 shadow-2xl sm:p-12 dark:border-white/10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/15 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 size-72 rounded-full bg-hero-cyan/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand backdrop-blur-md">
                <Sparkles className="size-3.5" />
                Let's Build Something Exceptional
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Ready to elevate your digital presence?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you need a high-converting website, custom web software, corporate branding &amp; T-shirts, or creative assets — we deliver in days, not months.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="interactive inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg hover:opacity-90 hover:scale-105 transition-all"
              >
                Start a Project
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand shadow-sm transition-all"
              >
                <MessageCircle className="size-4 text-brand" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div> */}

        {/* Footer Columns */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              DEVGRONIX builds high-performance websites, software, mobile apps and digital growth engines for ambitious businesses in India, UAE (Dubai), Saudi Arabia and globally.
            </p>

            {/* Live Operational Status */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-foreground shadow-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
              </span>
              Accepting client projects for Q4 · 24-48h Kickoff
            </div>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 text-brand shrink-0" />
                Gachibowli, Hyderabad, Telangana 500032, India
              </span>
              <a
                href="tel:+917070519128"
                className="flex items-center gap-2 text-foreground font-semibold hover:text-brand transition-colors"
              >
                <Phone className="size-3.5 text-brand shrink-0" />
                +91 70705 19128
              </a>
              <a
                href="mailto:admin@devgronix.in"
                className="flex items-center gap-2 hover:text-brand transition-colors"
              >
                <Mail className="size-3.5 text-brand shrink-0" />
                admin@devgronix.in
              </a>
            </div>

            {/* Payment & Security Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1">
                <CreditCard className="size-3 text-brand" />
                UPI · GPay · PhonePe
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1">
                <ShieldCheck className="size-3 text-chart-3" />
                Stripe &amp; Wise Global Payments
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1">
                <Zap className="size-3 text-chart-4" />
                Direct IMPS / Bank Transfer
              </span>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-brand transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 sm:col-span-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
              Services &amp; Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition-colors">
                  Web Development (from ₹999)
                </Link>
              </li>
              <li>
                <Link to="/services/custom-printing-branding" className="text-muted-foreground hover:text-brand transition-colors">
                  Custom Printing &amp; T-Shirts (New)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition-colors">
                  Custom Software &amp; SaaS
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition-colors">
                  Graphic Design &amp; Branding (from ₹99)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition-colors">
                  Video Editing &amp; Reels (from ₹399)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition-colors">
                  SEO &amp; Growth Optimization
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-brand font-semibold hover:underline inline-flex items-center gap-1">
                  Partner &amp; Referral Program (Earn 20%)
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Markets & Local SEO */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
              Markets &amp; Presence
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/uae"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand transition-colors"
                >
                  <Globe className="size-3.5 text-hero-cyan" />
                  UAE &amp; Dubai Clients
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">Saudi Arabia (Riyadh)</span>
              </li>
              <li>
                <span className="text-muted-foreground">Hyderabad, Telangana</span>
              </li>
              <li>
                <span className="text-muted-foreground">Bangalore &amp; Pan-India</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJ30euZCiTyzsR7wkuvUFsb_I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                >
                  Review us on Google
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local SEO Keywords Tag Cloud */}
        <div className="mt-12 border-t border-border/60 pt-6">
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            <strong className="text-foreground/90">Popular Searches:</strong> Website Development in Hyderabad · Web Design Company in Gachibowli · Custom T-Shirt &amp; Uniform Printing India · Affordable Website ₹999 · Reels Video Editor · Digital Marketing Agency UAE &amp; Dubai · Corporate Gift Printing Hyderabad.
          </p>
        </div>

        {/* Bottom bar with Copyright and Back-to-Top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} DEVGRONIX. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-foreground transition-colors">Privacy &amp; Terms</Link>
            <Link to="/partner" className="hover:text-foreground transition-colors">Affiliate Policy</Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="interactive inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground hover:border-brand hover:text-brand transition-all shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>

        {/* Lightngear-style Subtle Brand Watermark at Bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none mt-10 text-center font-display text-[4.5rem] font-black tracking-widest text-foreground/[0.03] sm:text-[7.5rem] lg:text-[10rem] uppercase leading-none overflow-hidden"
        >
          DEVGRONIX
        </div>
      </Container>
    </footer>
  );
}
