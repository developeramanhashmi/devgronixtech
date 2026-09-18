import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { pageMeta } from "@/lib/seo";
import { publishedServices } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({
      title: "Services",
      description:
        "Web and mobile development, UI/UX design, custom software, AI automation, branding, digital marketing and cloud solutions from DEVGRONIX.",
    }),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What we do, and how deep we go."
        description="Eight service areas, one team. Every engagement is scoped around a business outcome rather than a fixed deliverable list."
      />

      <Section>
        <ul className="flex flex-col divide-y divide-border border-t border-border">
          {publishedServices.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 40}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group grid gap-5 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <ServiceIcon name={service.icon} className="size-5 text-foreground transition-colors group-hover:text-brand" />
                    <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 4).map((c) => (
                      <li key={c} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand sm:pt-1">
                  View
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection title="Not sure which service you need?" description="Tell us the problem. We'll tell you the shortest route to solving it." />
    </>
  );
}
