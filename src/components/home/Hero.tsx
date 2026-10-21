import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Code,
  Gauge,
  Globe,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";

import { homepage } from "@/lib/content/home";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { HeroNodeNetwork } from "@/components/home/HeroNodeNetwork";

const { hero, strip } = homepage;

type Currency = "INR" | "AED" | "USD";

interface ShowcaseItem {
  tab: string;
  icon: typeof Code;
  name: string;
  slug: string;
  price: string;
  delivery: string;
  features: string[];
}

const showcaseByCurrency: Record<Currency, ShowcaseItem[]> = {
  INR: [
    {
      tab: "Web",
      icon: Code,
      name: "Web Development",
      slug: "web-development",
      price: "₹999",
      delivery: "24-48h Delivery",
      features: ["Custom Domain & Hosting Setup", "Mobile Responsive & SEO Ready", "WhatsApp & Contact Form Integration"],
    },
    {
      tab: "Design",
      icon: Palette,
      name: "Graphic Design",
      slug: "graphic-design-and-branding",
      price: "₹99",
      delivery: "Same Day Delivery",
      features: ["High-Impact Ad Creatives", "Social Graphics & Vector Art", "Commercial Rights"],
    },
    {
      tab: "Video",
      icon: Video,
      name: "Video Editing",
      slug: "video-editing-and-motion-graphics",
      price: "₹399",
      delivery: "24-48h Turnaround",
      features: ["High-Retention Shorts & Reels", "Color Grading & Motion SFX", "Subtitles & Hooks"],
    },
    {
      tab: "Social",
      icon: Sparkles,
      name: "Social Media",
      slug: "social-media-management",
      price: "₹1,000/mo",
      delivery: "Monthly Retainer",
      features: ["Monthly Strategy & Content", "Scheduled High-Quality Posts", "Engagement & Growth"],
    },
  ],
  AED: [
    {
      tab: "Web",
      icon: Code,
      name: "Web Development",
      slug: "web-development",
      price: "AED 349",
      delivery: "2-3 Days Delivery",
      features: ["Custom Domain & Hosting Setup", "Mobile Responsive & SEO Ready", "WhatsApp & Contact Form Integration"],
    },
    {
      tab: "Design",
      icon: Palette,
      name: "Graphic Design",
      slug: "graphic-design-and-branding",
      price: "AED 49",
      delivery: "Same Day Delivery",
      features: ["High-Impact Ad Creatives", "Social Graphics & Vector Art", "Commercial Rights"],
    },
    {
      tab: "Video",
      icon: Video,
      name: "Video Editing",
      slug: "video-editing-and-motion-graphics",
      price: "AED 149",
      delivery: "24-48h Turnaround",
      features: ["High-Retention Shorts & Reels", "Color Grading & Motion SFX", "Subtitles & Hooks"],
    },
    {
      tab: "Social",
      icon: Sparkles,
      name: "Social Media",
      slug: "social-media-management",
      price: "AED 399/mo",
      delivery: "Monthly Retainer",
      features: ["Monthly Strategy & Content", "Scheduled High-Quality Posts", "Engagement & Growth"],
    },
  ],
  USD: [
    {
      tab: "Web",
      icon: Code,
      name: "Web Development",
      slug: "web-development",
      price: "$95",
      delivery: "2-3 Days Delivery",
      features: ["Custom Domain & Hosting Setup", "Mobile Responsive & SEO Ready", "WhatsApp & Contact Form Integration"],
    },
    {
      tab: "Design",
      icon: Palette,
      name: "Graphic Design",
      slug: "graphic-design-and-branding",
      price: "$15",
      delivery: "Same Day Delivery",
      features: ["High-Impact Ad Creatives", "Social Graphics & Vector Art", "Commercial Rights"],
    },
    {
      tab: "Video",
      icon: Video,
      name: "Video Editing",
      slug: "video-editing-and-motion-graphics",
      price: "$40",
      delivery: "24-48h Turnaround",
      features: ["High-Retention Shorts & Reels", "Color Grading & Motion SFX", "Subtitles & Hooks"],
    },
    {
      tab: "Social",
      icon: Sparkles,
      name: "Social Media",
      slug: "social-media-management",
      price: "$110/mo",
      delivery: "Monthly Retainer",
      features: ["Monthly Strategy & Content", "Scheduled High-Quality Posts", "Engagement & Growth"],
    },
  ],
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Dynamic Animated Connected Node Network (Scalar-style background) */}
      <HeroNodeNetwork />

      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="hero-drift absolute -left-52 top-0 size-[34rem] rounded-full bg-brand/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="hero-drift absolute -right-48 top-20 size-[30rem] rounded-full bg-hero-indigo/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 size-[24rem] -translate-x-1/2 rounded-full bg-hero-cyan/10 blur-3xl pointer-events-none"
      />

      {/* Balanced padding: pt-28 on mobile, lg:pt-28 on desktop */}
      <Container className="relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Nudge slightly right to perfectly line up under the navbar's Logo */}
          <div className="pl-1 sm:pl-3 lg:pl-5">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/80 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-muted-foreground shadow-sm backdrop-blur-md">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
                </span>
                Available for new projects · Serving India, UAE &amp; Worldwide
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.5rem]">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-brand via-hero-cyan to-brand bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                DEVGRONIX designs and builds websites, software, mobile apps and digital growth engines for ambitious businesses in India, UAE (Dubai), Saudi Arabia and worldwide.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={hero.primaryCta.to}
                  className="interactive inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-md hover:opacity-90"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to={hero.secondaryCta.to}
                  className="interactive inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              {/* Agency Trust Badges with Global Signals */}
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Zap className="size-4 text-brand" />
                  <span><strong className="text-foreground">24-48h</strong> Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-chart-3" />
                  <span><strong className="text-foreground">100%</strong> Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="size-4 text-hero-cyan" />
                  <span><strong className="text-foreground">INR · AED · USD</strong> Invoicing</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <HeroComposition />
          </Reveal>
        </div>

        {/* Global Marquee Strip */}
        <div className="mt-14 overflow-hidden border-y border-border/60 py-3 sm:mt-16">
          <div className="hero-marquee flex w-max items-center">
            {[...strip, ...strip, ...strip].map((item, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-brand" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroComposition() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [active, setActive] = useState(0);

  const currentShowcase = showcaseByCurrency[currency];
  const svc = currentShowcase[active] ?? currentShowcase[0];

  const wa = `https://wa.me/917070519128?text=${encodeURIComponent(
    `Hi DEVGRONIX, I'm interested in ${svc.name} (${svc.price})`
  )}`;

  return (
    <div className="relative mx-auto w-full max-w-xl px-2 py-6 sm:px-6 sm:py-8 lg:px-4">
      <div className="absolute inset-8 rounded-2xl bg-hero-indigo/10 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-border/80 bg-surface/85 p-5 shadow-2xl backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-surface-strong/90">
        {/* Top Header with Currency Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-border pb-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-chart-4" />
            <span className="size-2.5 rounded-full bg-chart-3" />
            <span className="ml-1.5 font-mono text-[0.6875rem] font-medium text-muted-foreground">
              devgronix // live rates
            </span>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 p-0.5 text-[0.6875rem] font-semibold">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-colors",
                currency === "INR"
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("AED")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-colors",
                currency === "AED"
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              🇦🇪 AED (د.إ)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={cn(
                "rounded-full px-2 py-0.5 transition-colors",
                currency === "USD"
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              🌐 USD ($)
            </button>
          </div>
        </div>

        {/* 4 Interactive Service Tabs */}
        <div
          role="tablist"
          aria-label="Services"
          className="mt-4 grid grid-cols-4 gap-1 rounded-full border border-border bg-background/70 p-1"
        >
          {currentShowcase.map((s, i) => {
            const Icon = s.icon;
            const isSelected = i === active;
            return (
              <button
                key={s.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(i)}
                className={cn(
                  "interactive flex items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[0.6875rem] font-semibold sm:text-xs transition-all",
                  isSelected
                    ? "bg-brand text-brand-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="size-3 shrink-0" />
                <span>{s.tab}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Card */}
        <div
          role="tabpanel"
          key={`${currency}-${svc.slug}`}
          className="mt-4 rounded-xl border border-border bg-surface-strong/80 p-4 dark:border-white/10"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-bold text-foreground sm:text-lg">
                {svc.name}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                {svc.delivery}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
              Starting {svc.price}
            </span>
          </div>

          <ul className="mt-3.5 space-y-2">
            {svc.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                <Check className="size-4 shrink-0 text-chart-3" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-brand-foreground shadow hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <Link
              to="/services/$slug"
              params={{ slug: svc.slug }}
              className="interactive inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border-strong px-4 py-2.5 text-xs font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              View Details
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-3.5 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Gauge className="size-4 text-brand" aria-hidden="true" />
            <span><strong className="text-foreground">99+</strong> Speed Score</span>
          </div>
          <span className="text-chart-3 font-medium">✓ Instant Quote</span>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="hero-float absolute right-0 top-0 flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-xl sm:right-2">
        <span className="grid size-5 place-items-center rounded-full bg-brand-soft text-brand">
          <Zap className="size-3" aria-hidden="true" />
        </span>
        Fast Turnaround
      </div>

      <div className="hero-float-delayed absolute bottom-0 left-0 rounded-xl border border-border/80 bg-surface/90 px-3.5 py-2.5 shadow-lg backdrop-blur-xl sm:left-1">
        <div className="flex items-center gap-1 text-brand" aria-label="5 out of 5 rating">
          <span aria-hidden="true">★★★★★</span>
          <span className="ml-1 text-xs font-bold text-foreground">5.0</span>
        </div>
        <p className="mt-0.5 flex items-center gap-1.5 text-[0.6875rem] text-muted-foreground">
          <Check className="size-3 text-chart-3" aria-hidden="true" />
          50+ Projects Shipped Globally
        </p>
      </div>
    </div>
  );
}
