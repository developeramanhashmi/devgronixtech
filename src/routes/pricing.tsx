import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: pageMeta({
      title: "Pricing",
      description:
        "DEVGRONIX engagement packages — Starter, Growth, Business and Custom — with pricing scoped to your project's complexity and requirements.",
    }),
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Starter",
    summary: "A focused launch for a single, well-defined need.",
    bestFor: "New businesses and first web presence",
    includes: [
      "Up to 5 page website",
      "Responsive design system",
      "Basic on-page SEO",
      "Contact form",
      "Launch and handover",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    summary: "A larger site or app, with content your team controls.",
    bestFor: "Established businesses expanding online",
    includes: [
      "Multi-section website or app MVP",
      "CMS-editable content",
      "Analytics and conversion tracking",
      "Technical SEO foundation",
      "Two rounds of post-launch refinement",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    summary: "Custom software or a product build with ongoing delivery.",
    bestFor: "Operations-critical systems and SaaS products",
    includes: [
      "Custom software or platform build",
      "Role-based access and integrations",
      "Cloud setup, CI/CD and monitoring",
      "Design system and documentation",
      "Ongoing support retainer option",
    ],
    highlighted: false,
  },
  {
    name: "Custom",
    summary: "Multi-phase or multi-service programmes scoped together.",
    bestFor: "Complex or long-running engagements",
    includes: [
      "Discovery and technical planning",
      "Phased delivery roadmap",
      "Dedicated delivery team",
      "AI and automation workstreams",
      "Commercial terms agreed per phase",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Why aren't prices listed?",
    a: "Scope changes cost far more than any line item. We quote after a short call, so the number reflects your actual requirements rather than an average.",
  },
  {
    q: "How is a project billed?",
    a: "Fixed-scope work is milestone-based. Ongoing or exploratory work runs on a monthly retainer with an agreed capacity.",
  },
  {
    q: "What do you need to quote?",
    a: "Your goal, roughly who uses it, any systems it must connect to, and your timeline. That's usually enough for an accurate range.",
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Packages as a starting point, not a price tag."
        description="Every project is different. Final pricing depends on scope, complexity and requirements — these packages describe the shape of a typical engagement."
      />

      <Section className="border-b border-border">
        <div className="grid gap-4 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              delay={i * 60}
              className={cn(
                "flex h-full flex-col rounded-xl border bg-surface p-7",
                pkg.highlighted ? "border-brand" : "border-border",
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-foreground">{pkg.name}</h2>
                {pkg.highlighted && (
                  <span className="rounded-full bg-brand px-2.5 py-1 text-[0.6875rem] font-semibold text-brand-foreground">
                    Most requested
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>
              <p className="mt-5 rule-label">Best for</p>
              <p className="mt-1.5 text-sm text-foreground">{pkg.bestFor}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border pt-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
                  pkg.highlighted
                    ? "bg-brand text-brand-foreground hover:opacity-90"
                    : "border border-border-strong text-foreground hover:border-brand hover:text-brand",
                )}
              >
                Get a Quote
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-xl border border-dashed border-border-strong p-7">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">No fixed promises.</span> Package contents
            are indicative. We confirm deliverables, timeline and cost in a written proposal before
            any work starts.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading index="01" label="Questions" title="How pricing works." />
        <dl className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50} className="grid gap-3 py-7 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
              <dt className="font-display text-lg font-bold text-foreground">{faq.q}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <CtaSection title="Ready for a real number?" description="Send us the scope and we'll come back with a clear, itemised quote." />
    </>
  );
}
