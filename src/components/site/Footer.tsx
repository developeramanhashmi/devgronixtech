import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
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

  return (
    <footer className="border-t border-border bg-surface-strong/70">
      <Container className="pt-16 pb-12 sm:pt-20">
        {/* Pre-Footer Action Callout Banner */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface-strong to-surface p-8 shadow-2xl sm:p-12 dark:border-white/10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 size-72 rounded-full bg-hero-cyan/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand">
                <Sparkles className="size-3.5" />
                Let's Build Something Exceptional
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Ready to elevate your digital presence?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you need a high-converting website, custom web software, or creative digital assets — we deliver in days, not months.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="interactive inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg hover:opacity-90"
              >
                Start a Project
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                <MessageCircle className="size-4 text-brand" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              DEVGRONIX builds high-performance websites, software, mobile apps and digital growth engines for ambitious businesses in India, UAE (Dubai), Saudi Arabia and globally.
            </p>

            {/* Live Operational Status */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
              </span>
              Accepting client projects for Q4 · 24-48h Kickoff
            </div>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                HQ: Gachibowli, Hyderabad, Telangana 500032, India
              </span>
              <span className="flex items-center gap-2">
                <Globe className="size-3.5 text-brand" aria-hidden="true" />
                Coverage: India (IST) · UAE &amp; Saudi Arabia (GST/AST) · Worldwide Remote
              </span>
              <a
                href="mailto:admin@devgronix.in"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5 text-brand" aria-hidden="true" />
                admin@devgronix.in
              </a>
              <a
                href="tel:+917070519128"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-3.5 text-brand" aria-hidden="true" />
                +91 70705 19128 (Direct Line &amp; WhatsApp)
              </a>
            </div>
          </div>

          {/* Quick links & services */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
                Popular Services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/services/web-development"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    Web Development (₹999 / $49)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/graphic-design"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    Graphic Design (₹99 / $9)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/video-editing-and-motion-graphics"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    Video Editing (₹399 / $19)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/social-media-management"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    Social Media (₹1,000 / $49/mo)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
                Direct Connect
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/partner"
                    className="inline-flex items-center gap-1 font-semibold text-brand transition-colors hover:underline"
                  >
                    🤝 Become a Partner (Earn 20%)
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/917070519128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand"
                  >
                    WhatsApp Support
                    <ArrowUpRight className="size-3" />
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Get a Free Quote
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Budget Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Client & Payment Trust Badges */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-4 text-xs">
              <CreditCard className="size-4 shrink-0 text-brand" />
              <div>
                <p className="font-semibold text-foreground">International Payments</p>
                <p className="mt-0.5 text-muted-foreground">Stripe · Wise · Debit/Credit Cards · UPI · Wire Transfer</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-4 text-xs">
              <Globe className="size-4 shrink-0 text-hero-cyan" />
              <div>
                <p className="font-semibold text-foreground">Middle East &amp; Global Support</p>
                <p className="mt-0.5 text-muted-foreground">Real-time collaboration across India (IST) &amp; Gulf (GST/AST)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-4 text-xs sm:col-span-2 lg:col-span-1">
              <ShieldCheck className="size-4 shrink-0 text-chart-3" />
              <div>
                <p className="font-semibold text-foreground">Enterprise Quality Guarantee</p>
                <p className="mt-0.5 text-muted-foreground">Milestone-based delivery, clear agreements, no hidden charges</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Location and Keyword Badges */}
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Top Service Searches:</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {[
              "Website Designing Starting ₹999",
              "Web Development Dubai UAE",
              "Affordable Graphic Design India & Middle East",
              "Reels & YouTube Video Editing Services",
              "Social Media Management Agency",
              "Custom Web & App Development",
              "E-commerce Website Design",
            ].map((keyword) => (
              <span
                key={keyword}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-[0.6875rem] text-muted-foreground"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} DEVGRONIX. All rights reserved.</p>
          <p>
            Designed and built By{" "}
            <a
              href="https://www.linkedin.com/in/hashmiaman/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-brand"
            >
              Aman Hashmi
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
