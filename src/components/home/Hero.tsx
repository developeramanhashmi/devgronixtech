import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Code,
  Gauge,
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

const { hero, strip } = homepage;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="hero-drift absolute -left-52 top-0 size-[34rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-drift absolute -right-48 top-20 size-[30rem] rounded-full bg-hero-indigo/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 size-[24rem] -translate-x-1/2 rounded-full bg-hero-cyan/10 blur-3xl"
      />

      {/* Balanced padding: pt-28 on mobile (no more touching/sata hua), lg:pt-28 on desktop */}
      <Container className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Nudge slightly right to perfectly line up under the navbar's Logo */}
          <div className="pl-1 sm:pl-3 lg:pl-5">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/80 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-muted-foreground shadow-sm backdrop-blur-md">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
                </span>
                Available for new projects &amp; client work
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
                {hero.description}
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
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Zap className="size-4 text-brand" />
                  <span><strong className="text-foreground">24-48h</strong> Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-chart-3" />
                  <span><strong className="text-foreground">100%</strong> Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="size-4 text-brand" />
                  <span><strong className="text-foreground">Direct</strong> WhatsApp Support</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-4">
            <HeroComposition />
          </Reveal>
        </div>
      </Container>

      <div className="relative border-t border-border bg-surface/60 py-4">
        <Container className="flex items-center gap-5 overflow-hidden">
          <span className="rule-label z-10 shrink-0 bg-surface/80 pr-1">What we build</span>
          <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
            <div className="hero-marquee flex w-max items-center">
              <MarqueeItems items={strip} />
              <MarqueeItems items={strip} hidden />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function MarqueeItems({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap text-sm font-medium text-foreground">
          <span className="px-5">{item}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-brand" />
        </li>
      ))}
    </ul>
  );
}

const showcase = [
  {
    tab: "Web",
    icon: Code,
    name: "Web Development",
    slug: "web-development",
    price: "₹999",
    delivery: "1-3 Days Delivery",
    features: ["Mobile Responsive", "Free 1-Yr Domain & Hosting", "Fast Loading"],
  },
  {
    tab: "Graphics",
    icon: Palette,
    name: "Graphic Design",
    slug: "graphic-design",
    price: "₹99",
    delivery: "Same Day Delivery",
    features: ["Social Posts & Banners", "HD Source Files", "Commercial License"],
  },
  {
    tab: "Video",
    icon: Video,
    name: "Video Editing",
    slug: "video-editing-and-motion-graphics",
    price: "₹399",
    delivery: "24-48h Turnaround",
    features: ["Reels & Shorts", "Color Grading & Sound FX", "Trendy Motion Captions"],
  },
  {
    tab: "Social",
    icon: Sparkles,
    name: "Social Media",
    slug: "social-media-management",
    price: "₹1,000/mo",
    delivery: "Monthly Retainer",
    features: ["Content Calendar", "High-Quality Daily Posts", "Organic Reach Strategy"],
  },
];

function HeroComposition() {
  const [active, setActive] = useState(0);
  const svc = showcase[active]!;
  const wa = `https://wa.me/917070519128?text=${encodeURIComponent(
    `Hi DEVGRONIX, I'm interested in ${svc.name} (${svc.price})`
  )}`;

  return (
    <div className="relative mx-auto w-full max-w-xl px-2 py-6 sm:px-6 sm:py-8 lg:px-4">
      <div className="absolute inset-8 rounded-2xl bg-hero-indigo/10 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-border/80 bg-surface/85 p-5 shadow-2xl backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-surface-strong/90">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-chart-4" />
            <span className="size-2.5 rounded-full bg-chart-3" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
            ⚡ Interactive Service Calculator
          </span>
        </div>

        {/* 4 Interactive Service Tabs */}
        <div
          role="tablist"
          aria-label="Services"
          className="mt-4 grid grid-cols-4 gap-1 rounded-full border border-border bg-background/70 p-1"
        >
          {showcase.map((s, i) => {
            const Icon = s.icon;
            const isSelected = i === active;
            return (
              <button
                key={s.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(i)}
                className={
                  "interactive flex items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[0.6875rem] font-semibold sm:text-xs " +
                  (isSelected
                    ? "bg-brand text-brand-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground")
                }
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
          key={svc.slug}
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
          50+ Projects Shipped
        </p>
      </div>
    </div>
  );
}
