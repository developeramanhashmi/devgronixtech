import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { projectServiceFilters, publishedProjects } from "@/lib/content/projects";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/works/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Our Work & Projects | DEVGRONIX",
      description:
        "Concept projects from DEVGRONIX across web, mobile, software, UI/UX, AI, branding, video, social, marketing and cloud work — each labelled as in-house concept work.",
      path: "/works",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" },
        ]),
      ]),
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publishedProjects.filter((p) => {
      const matchesService = serviceFilter === "all" || p.serviceIds.includes(serviceFilter);
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesService && matchesQuery;
    });
  }, [serviceFilter, query]);

  return (
    <>
      <PageHero
        label="Works"
        title="Concept projects, clearly labelled."
        description="Everything here is in-house concept work built to show our approach. We don't present unverified projects as client results — real case studies are added as clients approve them."
      />

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter by service"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
          >
            {projectServiceFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setServiceFilter(f.id)}
                aria-pressed={serviceFilter === f.id}
                className={cn(
                  "interactive whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium",
                  serviceFilter === f.id
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {f.title}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or technology"
              aria-label="Search projects"
              className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 50}>
                <ProjectCard project={project} size="sm" />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-border-strong p-14 text-center">
            <h2 className="font-display text-lg font-bold text-foreground">No projects match that</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different service or clear your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setServiceFilter("all");
                setQuery("");
              }}
              className="interactive mt-6 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
            >
              Reset filters
            </button>
          </div>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
