import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { pageMeta } from "@/lib/seo";
import { getServiceBySlug, publishedServices } from "@/lib/content/services";
import { getProjectsByService } from "@/lib/content/projects";
import { homepage } from "@/lib/content/home";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service, projects: getProjectsByService(service.id) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — DEVGRONIX" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: pageMeta({
        title: loaderData.service.title,
        description: loaderData.service.description,
      }),
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
        className="mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
      >
        Browse all services
      </Link>
    </Section>
  );
}

function ServiceDetailPage() {
  const { service, projects } = Route.useLoaderData();
  const others = publishedServices.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <>
      <PageHero label="Service" title={service.title} description={service.tagline}>
        <div className="flex items-center gap-3 text-muted-foreground">
          <ServiceIcon name={service.icon} className="size-5 text-brand" />
          <span className="text-sm">{service.technologies.slice(0, 4).join(" · ")}</span>
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
            <h2 className="rule-label">Capabilities</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.capabilities.map((c) => (
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
        <SectionHeading index="01" label="How we help" title="What changes when we're involved." />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {service.helps.map((help, i) => (
            <Reveal key={help.title} delay={i * 60} className="rounded-xl border border-border bg-background p-7">
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{help.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{help.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-b border-border">
        <SectionHeading index="02" label="Technology" title="Tools we use for this work." />
        <ul className="mt-10 flex flex-wrap gap-2">
          {service.technologies.map((t) => (
            <li key={t} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading
          index="03"
          label="Related work"
          title={projects.length ? "Concept projects from this service." : "Concept work coming soon."}
          description={
            projects.length
              ? "In-house concept builds, labelled as such until verified client work replaces them."
              : "We haven't published a concept project for this service yet. Verified case studies will appear here first."
          }
        />
        {projects.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <ProjectCard project={project} size="sm" />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12 rounded-xl border border-dashed border-border-strong p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nothing published here yet — see the full portfolio instead.
            </p>
            <Link
              to="/works"
              className="mt-5 inline-flex rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              View all work
            </Link>
          </Reveal>
        )}
      </Section>

      <Section className="border-b border-border">
        <SectionHeading index="04" label="Process" title="How the engagement runs." />
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
        <SectionHeading label="Other services" title="Explore the rest." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <Link
              key={other.id}
              to="/services/$slug"
              params={{ slug: other.slug }}
              className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand/60"
            >
              <ServiceIcon name={other.icon} className="size-5 text-foreground transition-colors group-hover:text-brand" />
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{other.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{other.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
