import type { ReactNode } from "react";

import { Container } from "./Section";
import { Reveal } from "./Reveal";

/** Shared inner-page hero with balanced top spacing */
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
    <section className="relative overflow-hidden border-b border-border pt-20 pb-12 sm:pt-24 sm:pb-16">
      <div aria-hidden="true" className="absolute inset-0 grid-field opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-24 size-96 rounded-full bg-brand/15 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <span className="rule-label">{label}</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
