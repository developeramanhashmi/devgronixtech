import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { HeroNodeNetwork } from "@/components/home/HeroNodeNetwork";

/** Shared inner-page hero with interactive floating node network and ambient luxury glow */
export function PageHero({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24 pb-14 sm:pt-28 sm:pb-18 lg:pt-32 lg:pb-20">
      {/* Interactive connected node network floating in the background */}
      <HeroNodeNetwork />

      {/* Grid Pattern & Ambient Multi-Layer Glows */}
      <div aria-hidden="true" className="absolute inset-0 grid-field opacity-35 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-24 size-96 rounded-full bg-brand/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-10 size-80 rounded-full bg-hero-cyan/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/3 -bottom-24 size-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
      />

      <Container className="relative z-10">
        <Reveal>
          {/* Futuristic Glowing Chip Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-md shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span>{label}</span>
            <Sparkles className="size-3 text-brand/80" />
          </div>

          <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}

          {children && <div className="mt-7">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
