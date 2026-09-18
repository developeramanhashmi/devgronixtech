import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { pageMeta } from "@/lib/seo";
import { getProjectBySlug, publishedProjects } from "@/lib/content/projects";
import { getServiceById } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCover } from "@/components/site/ProjectCover";
import { ProjectCard, DemoBadge } from "@/components/site/ProjectCard";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — DEVGRONIX" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: pageMeta({
        title: loaderData.project.title,
        description: loaderData.project.shortDescription,
      }),
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
  const service = getServiceById(project.serviceId);
  const related = publishedProjects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <PageHero label={`${project.category} · ${project.year}`} title={project.title} description={project.description}>
        <div className="flex flex-wrap items-center gap-3">
          {project.contentType === "demo" && <DemoBadge />}
          {service && (
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="inline-flex rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {service.title}
            </Link>
          )}
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
        <SectionHeading label="Related work" title="More concept projects." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} size="sm" />
            </Reveal>
          ))}
        </div>
      </Section>

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
