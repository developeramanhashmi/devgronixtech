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

const servicePricing = [
  {
    icon: Code,
    title: "Web Development",
    rates: {
      INR: { starting: "₹999", full: "₹2,499", unit: "complete site" },
      AED: { starting: "AED 349", full: "AED 899", unit: "complete site" },
      USD: { starting: "$95", full: "$249", unit: "complete site" },
    },
    popular: true,
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    rates: {
      INR: { starting: "₹99", full: "₹999", unit: "per design" },
      AED: { starting: "AED 49", full: "AED 399", unit: "per design" },
      USD: { starting: "$15", full: "$120", unit: "per design" },
    },
    popular: false,
  },
  {
    icon: Video,
    title: "Video Editing & Reels",
    rates: {
      INR: { starting: "₹399", full: "₹2,999", unit: "per video" },
      AED: { starting: "AED 149", full: "AED 899", unit: "per video" },
      USD: { starting: "$40", full: "$250", unit: "per video" },
    },
    popular: false,
  },
  {
    icon: Globe,
    title: "Social Media Management",
    rates: {
      INR: { starting: "₹1,000", full: "₹3,499", unit: "/month" },
      AED: { starting: "AED 399", full: "AED 1,299", unit: "/month" },
      USD: { starting: "$110", full: "$350", unit: "/month" },
    },
    popular: false,
  },
];

const currencyLabels: Record<Currency, { symbol: string; label: string; flag: string }> = {
  INR: { symbol: "₹", label: "India (INR)", flag: "🇮🇳" },
  AED: { symbol: "AED", label: "UAE / Dubai (AED)", flag: "🇦🇪" },
  USD: { symbol: "$", label: "Global (USD)", flag: "🌐" },
};

function HeroComposition() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [selectedService, setSelectedService] = useState(0);

  const active = servicePricing[selectedService];
  const price = active.rates[currency];

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="absolute inset-8 rounded-2xl bg-hero-indigo/10 blur-3xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-surface/95">
        {/* Terminal / Window Chrome */}
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-chart-4/70" />
            <span className="size-2.5 rounded-full bg-chart-3/70" />
            <span className="ml-2 font-mono text-[0.6875rem] font-medium text-muted-foreground">
              devgronix // estimate &amp; book
            </span>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 p-0.5 text-[0.6875rem]">
            {(["INR", "AED", "USD"] as Currency[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={cn(
                  "rounded-full px-2 py-0.5 font-semibold transition-all",
                  currency === cur
                    ? "bg-brand text-brand-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {currencyLabels[cur].flag} {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Pricing Estimator */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Instant Quote Explorer
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-chart-3/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-chart-3">
              <span className="size-1.5 rounded-full bg-chart-3" />
              Live Rates · Zero Hidden Fees
            </span>
          </div>

          {/* Service Selector Tabs */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {servicePricing.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedService === idx;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedService(idx)}
                  className={cn(
                    "interactive flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all",
                    isSelected
                      ? "border-brand bg-brand-soft text-foreground shadow-xs"
                      : "border-border/80 bg-background/60 text-muted-foreground hover:border-border-strong hover:text-foreground",
                  )}
                >
                  <Icon className={cn("size-4 shrink-0", isSelected ? "text-brand" : "text-muted-foreground")} />
                  <span className="truncate text-xs font-semibold">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Price Display */}
          <div className="mt-5 rounded-xl border border-border/80 bg-background/80 p-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
                  Starting Price ({currency})
                </span>
                <div className="mt-0.5 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {price.starting}
                  </span>
                  <span className="text-xs text-muted-foreground">/ {price.unit}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
                  Turnaround
                </span>
                <p className="mt-0.5 flex items-center gap-1 font-mono text-xs font-semibold text-chart-3">
                  <Clock className="size-3" /> 24-48 Hours
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
              <span>Full-feature package up to <strong className="text-foreground">{price.full}</strong></span>
              <span className="inline-flex items-center gap-1 text-brand font-medium">
                <Check className="size-3" /> Domain &amp; Hosting setup included
              </span>
            </div>
          </div>

          {/* Direct Booking CTA */}
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={`https://wa.me/917070519128?text=${encodeURIComponent(
                `Hi DEVGRONIX! I want a quote for ${active.title} (${currency} package). Can we discuss?`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-xs font-bold text-brand-foreground shadow-md hover:opacity-90"
            >
              <MessageCircle className="size-4" />
              Book on WhatsApp ({currency})
            </a>
            <Link
              to="/pricing"
              className="interactive flex items-center justify-center gap-1 rounded-xl border border-border-strong px-4 py-3 text-xs font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              View Full Pricing
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <p className="mt-3 text-center text-[0.6875rem] text-muted-foreground">
            ⚡ Invoices in INR, AED &amp; USD via Stripe / Wise / Bank Transfer
          </p>
        </div>
      </div>
    </div>
  );
}
