import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import {
  breadcrumbSchema,
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
    return {
      ...seoHead({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path,
      }),
      scripts: [
        jsonLdScript([
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
        ]),
      ],
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
          <div>
            <span className="rule-label">Overview</span>
            <p className="mt-5 text-lg leading-relaxed text-foreground">{service.overview}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-7">
            <h2 className="rule-label">What we offer</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.offers.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="01" label="Capabilities" title="What's included in the work." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 40} className="bg-background p-6">
              <span className="font-display text-xs font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm text-foreground">{c}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-b border-border">
        <SectionHeading index="02" label="How we help" title="What changes when we're involved." />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {service.helps.map((help, i) => (
            <Reveal
              key={help.title}
              delay={i * 60}
              className="card-interactive group rounded-xl border border-border bg-surface p-7"
            >
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="accent-rule mt-5" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{help.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{help.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="03" label="Tools & technology" title="What we work with." />
        <ul className="mt-10 flex flex-wrap gap-2">
          {service.technologies.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="pricing" className="border-b border-border">
        <SectionHeading
          index="04"
          label="Pricing"
          title={`${service.title} pricing.`}
          description="Indicative starting points for this service. Scope, complexity and requirements decide the final number."
        />
        <div className="mt-12">
          <PricingPlans service={service} plans={plans} />
        </div>
        <Link
          to="/pricing"
          className="interactive mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
        >
          Compare pricing across services
          <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading
          index="05"
          label="Selected work"
          title={projects.length ? "Concept projects from this service." : "Concept work coming soon."}
          description={
            projects.length
              ? "In-house concept builds, labelled as such until verified client work replaces them."
              : "We haven't published a concept project for this service yet. Verified case studies will appear here first."
          }
        />
        {projects.length > 0 ? (
          <>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project, i) => (
                <Reveal key={project.id} delay={i * 60}>
                  <ProjectCard project={project} size="sm" />
                </Reveal>
              ))}
            </div>
            <Link
              to="/works"
              className="interactive mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              View all work
              <ArrowRight className="size-4" />
            </Link>
          </>
        ) : (
          <Reveal className="mt-12 rounded-xl border border-dashed border-border-strong p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nothing published here yet — see the full portfolio instead.
            </p>
            <Link
              to="/works"
              className="interactive mt-5 inline-flex rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              View all work
            </Link>
          </Reveal>
        )}
      </Section>

      <Section className="border-b border-border">
        <SectionHeading index="06" label="Process" title="How the engagement runs." />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {homepage.process.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 50} className="bg-background p-7">
              <span className="font-display text-2xl font-bold text-brand/70">{step.number}</span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading label="Explore other services" title={`More from ${service.group}.`} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siblings.map((other) => (
            <Link
              key={other.id}
              to="/services/$slug"
              params={{ slug: other.slug }}
              className="card-interactive group rounded-xl border border-border bg-background p-6"
            >
              <ServiceIcon
                name={other.icon}
                className="size-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand"
              />
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{other.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{other.tagline}</p>
            </Link>
          ))}
        </div>

        <nav
          aria-label="Service navigation"
          className="mt-10 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
        >
          {adjacent.previous && (
            <Link
              to="/services/$slug"
              params={{ slug: adjacent.previous.slug }}
              className="card-interactive group rounded-xl border border-border bg-background p-6"
            >
              <span className="rule-label inline-flex items-center gap-2">
                <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                Previous service
              </span>
              <p className="mt-3 font-display text-lg font-bold text-foreground">
                {adjacent.previous.title}
              </p>
            </Link>
          )}
          {adjacent.next && (
            <Link
              to="/services/$slug"
              params={{ slug: adjacent.next.slug }}
              className="card-interactive group rounded-xl border border-border bg-background p-6 sm:text-right"
            >
              <span className="rule-label inline-flex items-center gap-2 sm:flex-row-reverse">
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Next service
              </span>
              <p className="mt-3 font-display text-lg font-bold text-foreground">{adjacent.next.title}</p>
            </Link>
          )}
        </nav>
      </Section>

      <CtaSection title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
