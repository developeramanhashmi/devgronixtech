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
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { HeroNodeNetwork } from "@/components/home/HeroNodeNetwork";

const { hero, strip } = homepage;

type Currency = "INR" | "AED" | "USD";

export function Hero() {
  return (
    <section className="relative isolate w-full max-w-full overflow-hidden border-b border-border">
      {/* Dynamic Animated Connected Node Network */}
      <HeroNodeNetwork />

      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-30" />

      {/* Strictly contained ambient orbs preventing mobile viewport overflow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-drift absolute -left-40 top-0 size-[28rem] rounded-full bg-brand/15 blur-3xl sm:-left-52 sm:size-[34rem]" />
        <div className="hero-drift absolute -right-40 top-20 size-[24rem] rounded-full bg-hero-indigo/10 blur-3xl sm:-right-48 sm:size-[30rem]" />
        <div className="absolute bottom-0 left-1/2 size-[20rem] -translate-x-1/2 rounded-full bg-hero-cyan/10 blur-3xl sm:size-[24rem]" />
      </div>

      {/* Responsive Container: px-4 on mobile, sm:px-12, lg:px-[4.5rem] on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-12 sm:pt-32 sm:pb-16 lg:px-[4.5rem] lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 min-w-0">
          <div className="w-full min-w-0">
            <Reveal>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border-strong bg-surface/80 px-3 py-1.5 text-[10.5px] font-semibold text-muted-foreground shadow-sm backdrop-blur-md sm:text-xs">
                <span className="relative flex size-2 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
                </span>
                <span className="truncate">Available for projects · Serving India, UAE &amp; Worldwide</span>
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-foreground sm:text-5xl lg:text-[3.5rem]">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-brand via-hero-cyan to-brand bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
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

              {/* Agency Trust Badges */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 shrink-0">
                  <Zap className="size-4 text-brand" />
                  <span><strong className="text-foreground">24-48h</strong> Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <ShieldCheck className="size-4 text-chart-3" />
                  <span><strong className="text-foreground">100%</strong> Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Globe className="size-4 text-hero-cyan" />
                  <span><strong className="text-foreground">INR · AED · USD</strong> Invoicing</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative w-full min-w-0">
            <HeroComposition />
          </Reveal>
        </div>

        {/* Global Marquee Strip */}
        <div className="mt-14 w-full max-w-full overflow-hidden border-y border-border/60 py-3 sm:mt-16">
          <div className="hero-marquee flex w-max items-center">
            {[...strip, ...strip, ...strip].map((item, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0"
              >
                <span className="size-1 rounded-full bg-brand" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
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
    <div className="relative mx-auto w-full min-w-0 max-w-lg lg:max-w-none">
      {/* Decorative luxury gradient backplate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand/40 via-hero-cyan/20 to-hero-indigo/30 opacity-70 blur-lg sm:-inset-1 sm:rounded-3xl sm:blur-xl"
      />

      <div className="relative w-full min-w-0 rounded-2xl border border-border-strong bg-surface-strong/90 p-4 shadow-2xl backdrop-blur-xl sm:p-7">
        {/* Terminal / Control Header with Currency Switcher */}
        <div className="flex items-center justify-between border-b border-border/70 pb-3 sm:pb-4 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="size-2 rounded-full bg-destructive/80 sm:size-2.5" />
            <span className="size-2 rounded-full bg-chart-4/80 sm:size-2.5" />
            <span className="size-2 rounded-full bg-chart-3/80 sm:size-2.5" />
            <span className="ml-1.5 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
              devgronix.engine/v2
            </span>
          </div>

          {/* Multi-Currency Toggle */}
          <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5 text-[9px] font-semibold sm:gap-1 sm:text-[10px]">
            {(["INR", "AED", "USD"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={cn(
                  "rounded-full px-1.5 py-0.5 transition-colors sm:px-2",
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
        <div className="mt-4 sm:mt-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-wider text-[11px] sm:text-xs">Service Scope</span>
            <span className="font-semibold text-brand text-[11px] sm:text-xs">Select to inspect</span>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
            {servicesPreview.map((svc, i) => {
              const Icon = svc.icon;
              const isSelected = i === activeTab;
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border p-2 text-center transition-all sm:gap-1.5 sm:p-2.5",
                    isSelected
                      ? "border-brand bg-brand/10 text-foreground shadow-sm"
                      : "border-border bg-surface/50 text-muted-foreground hover:border-border-strong hover:bg-surface hover:text-foreground",
                  )}
                >
                  <Icon className={cn("size-3.5 sm:size-4 shrink-0", isSelected ? "text-brand" : "text-muted-foreground")} />
                  <span className="line-clamp-1 text-[10.5px] font-medium leading-tight sm:text-[11px]">
                    {svc.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Service Inspection Card */}
        <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3 sm:mt-5 sm:p-4">
          <div className="flex items-start justify-between gap-2 sm:gap-3">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="size-1.5 rounded-full bg-chart-3" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                  Starting Price
                </span>
              </div>
              <p className="mt-1 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {price}
                <span className="ml-1 text-[11px] font-normal text-muted-foreground sm:text-xs">
                  {currency === "INR" ? "(all-inclusive setup)" : "(fixed sprint)"}
                </span>
              </p>
            </div>

            <Link
              to="/services/$slug"
              params={{ slug: active.slug }}
              className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-[10.5px] font-medium text-foreground transition-colors hover:border-brand hover:text-brand sm:text-[11px] shrink-0"
            >
              Details
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
            <span className="text-muted-foreground text-[11px] sm:text-xs truncate">{active.meta}</span>
            <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-chart-3 sm:text-[11px] shrink-0 ml-2">
              <Check className="size-3" /> 24-48h Sprint
            </span>
          </div>
        </div>

        {/* Floating Trust Metrics */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 sm:mt-5 sm:gap-3 sm:pt-2">
          <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface/40 p-2.5 sm:gap-3 sm:p-3 min-w-0">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand sm:size-9">
              <Gauge className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10.5px] font-medium text-muted-foreground sm:text-[11px] truncate">PageSpeed Rating</p>
              <p className="font-display text-sm font-bold text-foreground sm:text-base">98 / 100</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface/40 p-2.5 sm:gap-3 sm:p-3 min-w-0">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3 sm:size-9">
              <Clock className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10.5px] font-medium text-muted-foreground sm:text-[11px] truncate">Fast Delivery</p>
              <p className="font-display text-sm font-bold text-foreground sm:text-base">Within 2 Days</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Consultation Action Button */}
        <a
          href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I'm%20interested%20in%20discussing%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="interactive mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-md hover:from-emerald-500 hover:to-teal-500 sm:mt-5 sm:py-3"
        >
          <MessageCircle className="size-4 shrink-0" />
          <span className="truncate">Quick WhatsApp Quote (+91 70705 19128)</span>
        </a>
      </div>
    </div>
  );
              }
            
