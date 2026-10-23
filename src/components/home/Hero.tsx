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
          <div>
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

const servicesPreview = [
  {
    icon: Code,
    title: "Web & SaaS Development",
    meta: "Full-Stack · Next.js · React",
    priceInr: "₹999",
    priceAed: "250 AED",
    priceUsd: "$70",
    slug: "web-development",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    meta: "Logos · Identity · Vector",
    priceInr: "₹99",
    priceAed: "25 AED",
    priceUsd: "$10",
    slug: "graphic-design",
  },
  {
    icon: Video,
    title: "Video Editing & Reels",
    meta: "4K Motion · Short-Form · Color",
    priceInr: "₹399",
    priceAed: "100 AED",
    priceUsd: "$30",
    slug: "video-editing-and-motion-graphics",
  },
];

function HeroComposition() {
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState<Currency>("INR");

  const active = servicesPreview[activeTab] || servicesPreview[0];
  const price =
    currency === "INR"
      ? active.priceInr
      : currency === "AED"
        ? active.priceAed
        : active.priceUsd;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Decorative luxury gradient backplate */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand/40 via-hero-cyan/20 to-hero-indigo/30 opacity-70 blur-xl"
      />

      <div className="relative rounded-2xl border border-border-strong bg-surface-strong/90 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
        {/* Terminal / Control Header with Currency Switcher */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-destructive/80" />
            <span className="size-2.5 rounded-full bg-chart-4/80" />
            <span className="size-2.5 rounded-full bg-chart-3/80" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">
              devgronix.engine/v2
            </span>
          </div>

          {/* Multi-Currency Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-0.5 text-[10px] font-semibold">
            {(["INR", "AED", "USD"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={cn(
                  "rounded-full px-2 py-0.5 transition-colors",
                  currency === c
                    ? "bg-brand text-brand-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Live Service Interactive Switcher */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-wider">Service Scope</span>
            <span className="font-semibold text-brand">Select to inspect</span>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {servicesPreview.map((svc, i) => {
              const Icon = svc.icon;
              const isSelected = i === activeTab;
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-xl border p-2.5 text-center transition-all",
                    isSelected
                      ? "border-brand bg-brand/10 text-foreground shadow-sm"
                      : "border-border bg-surface/50 text-muted-foreground hover:border-border-strong hover:bg-surface hover:text-foreground",
                  )}
                >
                  <Icon className={cn("size-4", isSelected ? "text-brand" : "text-muted-foreground")} />
                  <span className="line-clamp-1 text-[11px] font-medium leading-tight">
                    {svc.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Service Inspection Card */}
        <div className="mt-5 rounded-xl border border-border/80 bg-surface/60 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-chart-3" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Starting Price
                </span>
              </div>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                {price}
                <span className="ml-1 text-xs font-normal text-muted-foreground">
                  {currency === "INR" ? "(all-inclusive setup)" : "(fixed sprint scope)"}
                </span>
              </p>
            </div>

            <Link
              to="/services/$slug"
              params={{ slug: active.slug }}
              className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Details
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
            <span className="text-muted-foreground">{active.meta}</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-chart-3">
              <Check className="size-3" /> 24-48h Sprint Ready
            </span>
          </div>
        </div>

        {/* Floating Trust Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface/40 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Gauge className="size-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">PageSpeed Rating</p>
              <p className="font-display text-base font-bold text-foreground">98 / 100</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface/40 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
              <Clock className="size-4" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">Fast Delivery</p>
              <p className="font-display text-base font-bold text-foreground">Within 2 Days</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Consultation Action Button */}
        <a
          href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I'm%20interested%20in%20discussing%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="interactive mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-xs font-semibold text-white shadow-md hover:from-emerald-500 hover:to-teal-500"
        >
          <MessageCircle className="size-4" />
          Quick WhatsApp Quote (+91 70705 19128)
        </a>
      </div>
    </div>
  );
}
