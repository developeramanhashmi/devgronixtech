import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { homepage } from "@/lib/content/home";
import { Container } from "./Section";
import { Reveal } from "./Reveal";

export function CtaSection({
  title = homepage.cta.title,
  description = homepage.cta.description,
}: {
  title?: string;
  description?: string;
}) {
  const { primaryCta, secondaryCta } = homepage.cta;

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <div aria-hidden="true" className="absolute inset-0 grid-field opacity-50" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <span className="rule-label">Next step</span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] text-foreground sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                {primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
