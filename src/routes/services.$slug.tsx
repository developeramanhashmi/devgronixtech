import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLdScript,
  notFoundHead,
  seoHead,
  serviceSchema,
} from "@/lib/seo";
import { getAdjacentServices, getServiceBySlug, publishedServices } from "@/lib/content/services";
import { getServiceSeo } from "@/lib/content/seo-meta";
import { getPlansByService } from "@/lib/content/pricing";
import { getProjectsByService } from "@/lib/content/projects";
import { homepage } from "@/lib/content/home";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { PricingPlans } from "@/components/site/PricingPlans";
import { CtaSection } from "@/components/site/CtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return {
      service,
      seo: getServiceSeo(service),
      projects: getProjectsByService(service.id),
      plans: getPlansByService(service.id),
      adjacent: getAdjacentServices(service.slug),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return notFoundHead("Service not found");
    const { service, seo } = loaderData;
    const path = `/services/${service.slug}`;
    const schemas: Record<string, unknown>[] = [
      serviceSchema({
        name: service.title,
        description: seo.metaDescription,
        path,
        category: service.group,
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ];

    if (seo.faqs && seo.faqs.length > 0) {
      schemas.push(faqPageSchema(seo.faqs));
    }

    return {
      ...seoHead({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path,
      }),
      scripts: [jsonLdScript(schemas)],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="font-display text-3xl font-bold text-foreground">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        That service doesn't exist, or it isn't published yet.
      </p>
      <Link
        to="/services"
        className="interactive mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
      >
        Browse all services
      </Link>
    </Section>
  );
}

function ServiceDetailPage() {
  const { service, seo, projects, plans, adjacent } = Route.useLoaderData();
  const siblings = publishedServices
    .filter((s) => s.group === service.group && s.id !== service.id)
    .slice(0, 4);

  // Normalize deliverables and outcomes safely
  const deliverablesList = (service as any).deliverables || (service.offers || []).map((o: string) => ({
    title: o,
    description: "Professional deliverable tailored to your scope.",
  }));

  const outcomesList = (service as any).outcomes || (service.helps || []).map((h: { title: string; body: string }) => ({
    metric: "100%",
    label: h.title,
    description: h.body,
  }));

  return (
    <>
      <PageHero label={service.group} title={seo.h1} description={service.tagline}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <ServiceIcon name={service.icon} className="size-5 text-brand" />
            <span className="text-sm">{service.technologies.slice(0, 4).join(" · ")}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              search={{ service: service.slug }}
              className="interactive inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
            >
              Get a Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/pricing/$slug"
              params={{ slug: service.slug }}
              className="interactive inline-flex items-center rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              View pricing
            </Link>
          </div>
        </div>
      </PageHero>

      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <span className="rule-label">Overview</span>
            <p className="mt-5 text-lg leading-relaxed text-foreground">{service.description}</p>
          </Reveal>
          <div>
            <span className="rule-label">Core capabilities</span>
            <ul className="mt-5 space-y-3">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="01" label="Technologies" title="Tools we use for this work." />
        <div className="mt-8 flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-b border-border">
        <SectionHeading index="02" label="Deliverables" title="What ships at the end." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesList.map((item: any, i: number) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="rounded-xl border border-border bg-surface p-7"
            >
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="03" label="Outcomes" title="Commercial and operational return." />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {outcomesList.map((item: any, i: number) => (
            <Reveal
              key={item.metric + i}
              delay={i * 80}
              className="rounded-xl border border-border bg-background p-7"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-brand">
                {item.metric}
              </p>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {plans.length > 0 && (
        <Section className="border-b border-border">
          <SectionHeading
            index="04"
            label="Pricing"
            title={`${service.title} engagement models.`}
          />
          <div className="mt-12">
            <PricingPlans plans={plans} serviceSlug={service.slug} />
          </div>
        </Section>
      )}

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading
          index="05"
          label="Selected work"
          title={`Projects featuring ${service.title.toLowerCase()}.`}
        />
        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Case studies for this service are being documented. Contact us for private client references.
            </p>
            <Link
              to="/contact"
              className="interactive mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Request references <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </Section>

      {seo.faqs && seo.faqs.length > 0 && (
        <Section className="border-b border-border">
          <SectionHeading
            index="06"
            label="FAQ"
            title={`Frequently asked questions about ${service.title.toLowerCase()}.`}
          />
          <div className="mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {seo.faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      )}

      <CtaSection
        title={homepage.cta.title}
        description={homepage.cta.description}
        primaryCta={homepage.cta.primaryCta}
        secondaryCta={homepage.cta.secondaryCta}
      />
    </>
  );
}
