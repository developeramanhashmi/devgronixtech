import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { pageMeta } from "@/lib/seo";
import { getServiceBySlug, publishedServices } from "@/lib/content/services";
import { getPlansByService } from "@/lib/content/pricing";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { PricingPlans } from "@/components/site/PricingPlans";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service, plans: getPlansByService(service.id) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Pricing not found — DEVGRONIX" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    return {
      meta: pageMeta({
        title: `${service.title} Pricing`,
        description: `Indicative ${service.title.toLowerCase()} pricing from DEVGRONIX, with plan inclusions and a starting point for each package.`,
      }),
    };
  },
  notFoundComponent: PricingNotFound,
  component: ServicePricingPage,
});

function PricingNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="font-display text-3xl font-bold text-foreground">Pricing not found</h1>
      <p className="mt-3 text-muted-foreground">
        We don't have a pricing page for that service — pick one from the list instead.
      </p>
      <Link
        to="/pricing"
        className="interactive mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
      >
        Choose a service
      </Link>
    </Section>
  );
}

function ServicePricingPage() {
  const { service, plans } = Route.useLoaderData();

  return (
    <>
      <PageHero
        label="Pricing"
        title={`${service.title} pricing.`}
        description={service.tagline}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="interactive inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
          >
            Explore service
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            search={{ service: service.slug }}
            className="interactive inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Get a Quote
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </PageHero>

      <Section className="border-b border-border">
        {/* Service selector — horizontally scrollable on mobile. */}
        <nav aria-label="Pricing by service" className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
          <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {publishedServices.map((s) => (
              <li key={s.id}>
                <Link
                  to="/pricing/$slug"
                  params={{ slug: s.slug }}
                  aria-current={s.id === service.id ? "page" : undefined}
                  className={cn(
                    "interactive inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium",
                    s.id === service.id
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                  )}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12">
          <PricingPlans service={service} plans={plans} />
        </div>
      </Section>

      <CtaSection
        title={`Planning ${service.title.toLowerCase()} work?`}
        description="Send the scope and we'll reply with a written quote and timeline."
      />
    </>
  );
}
