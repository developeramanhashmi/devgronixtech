import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { homepage } from "@/lib/content/home";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const { hero, strip } = homepage;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden="true" className="absolute inset-0 grid-field opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 size-[30rem] rounded-full bg-brand/15 blur-3xl"
      />
      <Container className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-48">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.75rem]">
                {hero.title}{" "}
                <span className="text-brand">{hero.highlight}</span>
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to={hero.secondaryCta.to}
                  className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
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

      <div className="relative border-t border-border bg-surface/60">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
          <span className="rule-label">What we build</span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {strip.map((item) => (
              <li key={item} className="flex items-center gap-5 text-sm font-medium text-foreground">
                <span aria-hidden="true" className="size-1 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}

/** Original layered-interface composition — abstract digital architecture. */
function HeroComposition() {
  return (
    <div className="relative aspect-[4/3.4] w-full">
      <div className="absolute inset-x-6 bottom-0 top-10 rounded-xl border border-border bg-surface/70" />
      <div className="absolute inset-x-3 bottom-6 top-4 rounded-xl border border-border bg-surface shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2 rounded-full bg-brand" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="ml-3 rule-label">devgronix / build</span>
        </div>
        <div className="grid grid-cols-5 gap-3 p-4">
          <div className="col-span-2 space-y-2">
            {[80, 60, 95, 45].map((w, i) => (
              <div key={i} className="h-2.5 rounded-full bg-border-strong/70" style={{ width: `${w}%` }} />
            ))}
            <div className="mt-4 h-16 rounded-lg border border-brand/50 bg-brand-soft" />
            <div className="h-10 rounded-lg bg-surface-strong" />
          </div>
          <div className="col-span-3 space-y-3">
            <div className="h-24 rounded-lg bg-surface-strong" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 rounded-lg bg-brand/25" />
              <div className="h-14 rounded-lg bg-surface-strong" />
              <div className="h-14 rounded-lg bg-surface-strong" />
            </div>
            <div className="flex items-end gap-1.5 rounded-lg bg-surface-strong p-3">
              {[35, 62, 48, 80, 55, 92, 70].map((h, i) => (
                <span
                  key={i}
                  className={i === 5 ? "flex-1 rounded-sm bg-brand" : "flex-1 rounded-sm bg-border-strong"}
                  style={{ height: `${h}%`, minHeight: "8px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 left-0 rounded-lg border border-border bg-background px-4 py-3 shadow-sm">
        <p className="font-display text-sm font-bold text-foreground">Design → Build → Ship</p>
        <p className="mt-0.5 text-xs text-muted-foreground">One team, end to end</p>
      </div>
    </div>
  );
}
