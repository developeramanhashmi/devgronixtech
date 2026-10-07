import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { featuredServices } from "@/lib/content/services";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";

const servicePrices: Record<string, string> = {
  "svc-web": "Starts ₹999",
  "svc-graphic": "Starts ₹99",
  "svc-video": "Starts ₹399",
  "svc-social": "Starts ₹1,000/mo",
  "svc-mobile": "Custom",
  "svc-ai": "Custom",
};

export function ServicesSection() {
  const [lead, ...rest] = featuredServices;

  return (
    <Section id="services" className="border-b border-border">
      <SectionHeading
        index="01"
        label="Services"
        title="Technology, design and digital growth."
        description="One team across engineering, creative and marketing — so nothing gets lost in handoffs between vendors."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {lead && (
          <Reveal className="lg:row-span-2">
            <Link
              to="/services/$slug"
              params={{ slug: lead.slug }}
              className="card-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-brand">01</span>
                  <div className="flex items-center gap-2">
                    {servicePrices[lead.id] && (
                      <span className="rounded-full border border-brand/30 bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                        {servicePrices[lead.id]}
                      </span>
                    )}
                    <ServiceIcon
                      name={lead.icon}
                      className="size-6 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
                <span aria-hidden="true" className="accent-rule mt-8" />
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  {lead.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead.description}</p>
              </div>
              <ul className="mt-8 flex flex-col gap-2 border-t border-border pt-6 lg:mt-auto">
                {lead.offers.slice(0, 4).map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore service
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {rest.map((service, i) => (
            <Reveal key={service.id} delay={i * 50}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="card-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-muted-foreground">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {servicePrices[service.id] && (
                      <span className="rounded-full border border-border-strong bg-surface-strong px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground group-hover:border-brand/30 group-hover:text-brand">
                        {servicePrices[service.id]}
                      </span>
                    )}
                    <ServiceIcon
                      name={service.icon}
                      className="size-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </div>
                </div>
                <span aria-hidden="true" className="accent-rule mt-6" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors duration-200 group-hover:text-brand">
                  Explore service
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-10 flex flex-wrap items-center gap-3">
        <Link
          to="/services"
          className="interactive group inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
        >
          View all services
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          to="/pricing"
          className="interactive inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          See service pricing
        </Link>
      </Reveal>
    </Section>
  );
}
