import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedServices, servicesByGroup } from "@/lib/content/services";
import { getPlansByService, pricingNote } from "@/lib/content/pricing";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/pricing/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Pricing & Packages | DEVGRONIX",
      description:
        "Pick a DEVGRONIX service to see its own pricing — web, app and software development, AI, cloud, design, branding, video, marketing, SEO, social and content.",
      path: "/pricing",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]),
      ]),
    ],
  }),
  component: PricingIndexPage,
});

function PricingIndexPage() {
  const groups = servicesByGroup.filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        label="Pricing"
        title="Choose a service to see its pricing."
        description={`Pricing is built per service, not as one generic package list. ${pricingNote}`}
      />

      {groups.map((group, groupIndex) => (
        <Section
          key={group.group}
          className={groupIndex % 2 === 1 ? "border-b border-border bg-surface/40" : "border-b border-border"}
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{group.group}</h2>
            <p className="text-sm text-muted-foreground">
              {group.items.length} {group.items.length === 1 ? "service" : "services"}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((service, i) => {
              const plans = getPlansByService(service.id);
              const entry = plans.find((p) => p.price !== "On request");
              return (
                <Reveal key={service.id} delay={i * 45}>
                  <Link
                    to="/pricing/$slug"
                    params={{ slug: service.slug }}
                    className="card-interactive group flex h-full flex-col rounded-xl border border-border bg-surface p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-foreground">{service.title}</h3>
                      <ServiceIcon
                        name={service.icon}
                        className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand"
                      />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                    {entry && (
                      <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                        Starting from{" "}
                        <span className="font-display text-base font-bold text-foreground">
                          {entry.price}
                        </span>{" "}
                        {entry.billingType}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      View pricing
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section>
        <Reveal className="flex flex-col gap-5 rounded-xl border border-dashed border-border-strong p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">
              Need more than one service?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Multi-service programmes — for example a brand, a website and a launch campaign — are
              scoped together and quoted as one engagement across {publishedServices.length} available
              services.
            </p>
          </div>
          <Link
            to="/contact"
            className="interactive inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Get a Quote
          </Link>
        </Reveal>
      </Section>

      <CtaSection
        title="Ready for a real number?"
        description="Send us the scope and we'll come back with a clear, itemised quote."
      />
    </>
  );
}
