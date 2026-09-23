import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedServices, servicesByGroup } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Services | DEVGRONIX",
      description:
        "The full DEVGRONIX service directory — web, mobile, software and SaaS development, AI automation, cloud, data, UI/UX, graphic design, branding, video, marketing, SEO, social and content.",
      path: "/services",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ]),
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const groups = servicesByGroup.filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        label="Services"
        title="Technology, creative and digital growth under one roof."
        description={`${publishedServices.length} services across three practices. Every engagement is scoped around a business outcome rather than a fixed deliverable list.`}
      >
        <nav aria-label="Service groups" className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g.group}
              href={`#${slugifyGroup(g.group)}`}
              className="interactive inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground hover:border-brand hover:text-brand"
            >
              {g.group}
            </a>
          ))}
        </nav>
      </PageHero>

      {groups.map((group, groupIndex) => (
        <Section
          key={group.group}
          id={slugifyGroup(group.group)}
          className={groupIndex % 2 === 1 ? "border-b border-border bg-surface/40" : "border-b border-border"}
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="rule-label">{`0${groupIndex + 1} — Practice`}</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {group.group}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {group.items.length} {group.items.length === 1 ? "service" : "services"}
            </p>
          </div>

          <ul className="mt-10 flex flex-col divide-y divide-border border-t border-border">
            {group.items.map((service, i) => (
              <Reveal as="li" key={service.id} delay={i * 40}>
                <div className="group grid gap-5 py-9 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
                  <span className="font-display text-sm font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <ServiceIcon
                        name={service.icon}
                        className="size-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand"
                      />
                      <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                        <Link
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="transition-colors duration-200 hover:text-brand"
                        >
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                    <span aria-hidden="true" className="accent-rule mt-4" />
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.capabilities.slice(0, 4).map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="interactive inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90"
                      >
                        Explore service
                        <ArrowUpRight className="size-4" />
                      </Link>
                      <Link
                        to="/pricing/$slug"
                        params={{ slug: service.slug }}
                        className="interactive inline-flex items-center rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
                      >
                        View pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>
      ))}

      <CtaSection
        title="Not sure which service you need?"
        description="Tell us the problem. We'll tell you the shortest route to solving it."
      />
    </>
  );
}

function slugifyGroup(group: string) {
  return group.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
}
