import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { featuredServices } from "@/lib/content/services";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";

const servicePrices: Record<string, string> = {
  "svc-web": "Starts ₹999",
  "svc-graphic": "Starts ₹99",
  "svc-video": "Starts ₹399",
  "svc-social": "Starts ₹1,000/mo",
  "svc-mobile": "Custom Scope",
  "svc-ai": "Enterprise Ready",
};

export function ServicesSection() {
  return (
    <Section id="services" className="border-b border-border bg-surface/30">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="01"
          label="Our Services"
          title="Engineered for speed, brand authority & revenue."
          description="A unified multidisciplinary agency: full-stack engineering, bespoke visual design, and performance-driven digital growth under one roof."
        />
        <Reveal delay={100} className="shrink-0">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-brand hover:text-brand"
          >
            All 15+ Services
            <ArrowRight className="size-3.5" />
          </Link>
        </Reveal>
      </div>

      {/* Modern Bento Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service, i) => {
          const price = servicePrices[service.id];
          return (
            <Reveal key={service.id} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="card-interactive group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-xl hover:shadow-brand/5"
              >
                {/* Subtle Ambient Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  {/* Header: Icon + Price Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-subtle text-brand transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
                      <ServiceIcon name={service.icon} className="size-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {price && (
                      <span className="rounded-full border border-brand/30 bg-brand/5 px-2.5 py-1 text-[0.6875rem] font-semibold text-brand">
                        {price}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-5 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-brand sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {service.tagline || service.description}
                  </p>

                  {/* Key Deliverables */}
                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    {service.offers.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-brand" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 text-xs font-semibold text-brand">
                  <span>Explore specifications</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
