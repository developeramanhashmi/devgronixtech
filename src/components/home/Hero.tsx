import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Gauge, MonitorSmartphone, Search, Zap } from "lucide-react";

import { homepage } from "@/lib/content/home";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const { hero, strip } = homepage;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden="true" className="absolute inset-0 grid-field opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div
        aria-hidden="true"
        className="hero-drift absolute -left-52 top-0 size-[34rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div aria-hidden="true" className="hero-drift absolute -right-48 top-24 size-[30rem] rounded-full bg-hero-indigo/10 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 size-[24rem] -translate-x-1/2 rounded-full bg-hero-cyan/10 blur-3xl" />
      <Container className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-48">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 text-[0.6875rem] font-semibold text-muted-foreground shadow-sm backdrop-blur-md">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
                </span>
                Available for new projects &amp; client work
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.75rem]">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-brand via-hero-cyan to-brand bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {hero.description}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={hero.primaryCta.to}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground interactive hover:opacity-90"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to={hero.secondaryCta.to}
                  className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground interactive hover:border-brand hover:text-brand"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-6">
            <HeroComposition />
          </Reveal>
        </div>
      </Container>

      <div className="relative border-t border-border bg-surface/60 py-5">
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

/** Layered agency performance preview. */
function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-2 py-9 sm:px-8 sm:py-12 lg:px-5">
      <div className="absolute inset-8 rounded-2xl bg-hero-indigo/10 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-border/80 bg-surface/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-chart-4" />
            <span className="size-2.5 rounded-full bg-chart-3" />
          </div>
          <p className="text-right text-xs font-semibold text-muted-foreground sm:text-sm">Active Projects &amp; Performance</p>
        </div>

        <div className="grid grid-cols-3 gap-2 py-5 sm:gap-3">
          <Metric icon={Gauge} value="99+" label="PageSpeed Score" />
          <Metric icon={MonitorSmartphone} value="100%" label="Responsive" />
          <Metric icon={Search} value="SEO" label="Optimized" />
        </div>

        <div className="rounded-xl border border-border bg-surface-strong/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Live project showcase</p>
              <h2 className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">Web &amp; Creative Studio</h2>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-chart-3/30 bg-chart-3/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-chart-3" aria-hidden="true" />
              Live
            </span>
          </div>
          <div className="mt-4 flex h-16 items-end gap-1.5" aria-hidden="true">
            {[38, 56, 45, 72, 58, 88, 68, 96, 78].map((height, index) => (
              <span
                key={height}
                className={index === 7 ? "flex-1 rounded-sm bg-brand" : "flex-1 rounded-sm bg-border-strong"}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-float absolute right-0 top-0 flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-3 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-xl sm:right-2">
        <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-brand">
          <Zap className="size-3.5" aria-hidden="true" />
        </span>
        Fast Turnaround
      </div>

      <div className="hero-float-delayed absolute bottom-0 left-0 rounded-xl border border-border/80 bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:left-1">
        <div className="flex items-center gap-1 text-brand" aria-label="5 out of 5 rating">
          <span aria-hidden="true">★★★★★</span>
          <span className="ml-1 text-sm font-bold text-foreground">5.0</span>
        </div>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Check className="size-3.5 text-chart-3" aria-hidden="true" />
          50+ Projects Shipped
        </p>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Gauge;
  value: string;
  label: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-background/60 p-2.5 sm:p-3">
      <Icon className="size-4 text-brand" aria-hidden="true" />
      <p className="mt-3 font-display text-lg font-bold text-foreground sm:text-xl">{value}</p>
      <p className="mt-0.5 text-[0.625rem] leading-tight text-muted-foreground sm:text-xs">{label}</p>
    </div>
  );
}
