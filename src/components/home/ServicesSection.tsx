import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { publishedServices } from "@/lib/content/services";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";

export function ServicesSection() {
  const [lead, ...rest] = publishedServices;

  return (
    <Section id="services" className="border-b border-border">
      <SectionHeading
        index="01"
        label="Services"
        title="Eight capabilities, one delivery team."
        description="We cover the full path from idea to running product — design, build, launch and growth — so nothing gets lost in handoffs between vendors."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {lead && (
          <Reveal className="lg:row-span-2">
            <Link
              to="/services/$slug"
              params={{ slug: lead.slug }}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-7 transition-colors hover:border-brand/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-brand">01</span>
                  <ServiceIcon name={lead.icon} className="size-6 text-brand" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-foreground">{lead.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead.description}</p>
              </div>
              <ul className="mt-8 flex flex-col gap-2 border-t border-border pt-6">
                {lead.capabilities.slice(0, 4).map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore service
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-muted-foreground">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <ServiceIcon name={service.icon} className="size-5 text-foreground transition-colors group-hover:text-brand" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground transition-colors group-hover:text-brand uppercase">
                  Details
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
