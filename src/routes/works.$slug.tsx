import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import {
  breadcrumbSchema,
  creativeWorkSchema,
  jsonLdScript,
  notFoundHead,
  seoHead,
} from "@/lib/seo";
import { getProjectSeo } from "@/lib/content/seo-meta";
import { getProjectBySlug, getRelatedProjects } from "@/lib/content/projects";
import { getServiceById } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCover } from "@/components/site/ProjectCover";
import { ProjectCard, DemoBadge } from "@/components/site/ProjectCard";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/works/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return notFoundHead("Project not found");
    const { project } = loaderData;
    const seo = getProjectSeo(project);
    const path = `/works/${project.slug}`;
    return {
      ...seoHead({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path,
        type: "article",
      }),
      scripts: [
        jsonLdScript([
          creativeWorkSchema({
            name: project.title,
            description: project.shortDescription,
            path,
            genre: project.category,
            keywords: project.technologies,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Works", path: "/works" },
            { name: project.title, path },
          ]),
        ]),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetailPage,
});

function ProjectNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="font-display text-3xl font-bold text-foreground">Project not found</h1>
      <p className="mt-3 text-muted-foreground">That project doesn't exist, or it isn't published yet.</p>
      <Link
        to="/works"
        className="mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
      >
        Browse all work
      </Link>
    </Section>
  );
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const primaryService = getServiceById(project.serviceId);
  const services = project.serviceIds
    .map((id) => getServiceById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const related = getRelatedProjects(project, 3);

  return (
    <>
      <PageHero label={`${project.category} · ${project.year}`} title={project.title} description={project.description}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {project.contentType === "demo" && <DemoBadge />}
            <span className="rule-label">Services used</span>
            {services.map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="interactive inline-flex rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-brand hover:text-brand"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            search={primaryService ? { service: primaryService.slug } : {}}
            className="interactive inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
          >
            Start a project like this
            <ArrowRight className="size-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              Visit Live Website
              <ArrowUpRight className="size-4" />
            </a>
          )}
          </div>
        </div>
      </PageHero>

      <Section className="border-b border-border">
        <Reveal className="overflow-hidden rounded-xl border border-border">
          <div className="aspect-[16/8]">
            <ProjectCover pattern={project.thumbnail} label={project.category} />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <Block title="Overview" body={project.description} />
            <Block title="Challenge" body={project.challenge} />
            <Block title="Approach" body={project.approach} />
            <Block title="Solution" body={project.solution} />
          </div>
          <aside className="flex h-fit flex-col gap-8 rounded-xl border border-border bg-surface p-7">
            <div>
              <h2 className="rule-label">Features</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="rule-label">Technology</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="rule-label">Outcome</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                This is a concept project, so we don't publish performance figures for it. Verified
                projects include measured results agreed with the client.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {project.gallery.length > 0 && (
        <Section className="border-b border-border bg-surface/40">
          <SectionHeading label="Gallery" title="Visual detail." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((pattern, i) => (
              <Reveal key={`${pattern}-${i}`} delay={i * 60} className="overflow-hidden rounded-xl border border-border">
                <div className="aspect-[16/10]">
                  <ProjectCover pattern={pattern} />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-b border-border">
        <SectionHeading
          label="Related services"
          title="The services behind this project."
          description="Each service page carries its own capabilities, pricing and selected work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-interactive group flex h-full flex-col rounded-xl border border-border bg-surface p-6"
              >
                <ServiceIcon
                  name={s.icon}
                  className="size-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand"
                />
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Explore service
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-b border-border bg-surface/40">
          <SectionHeading label="Related projects" title="More concept work in this space." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <ProjectCard project={p} size="sm" />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaSection title="Want something like this, for real?" />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <h2 className="rule-label">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">{body}</p>
    </Reveal>
  );
}
