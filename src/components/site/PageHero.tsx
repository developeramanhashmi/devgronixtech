import type { ReactNode } from "react";

import { Container } from "./Section";
import { Reveal } from "./Reveal";

/** Shared inner-page hero so every route opens the same way. */
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
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="absolute inset-0 grid-field opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-24 size-96 rounded-full bg-brand/15 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <span className="rule-label">{label}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
