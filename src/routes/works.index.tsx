import { createFileRoute } from "@tanstack/react-router";
import { Search, X, FolderGit2 } from "lucide-react";
import { useMemo, useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedProjects } from "@/lib/content/projects";
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
        "Explore real client solutions, software architectures, web applications, and custom branding productions crafted by DEVGRONIX.",
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

interface CategoryTab {
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match?: (p: any) => boolean;
}

const CURATED_CATEGORIES: CategoryTab[] = [
  { id: "all", label: "All Projects" },
  {
    id: "web",
    label: "Web & Platforms",
    match: (p) =>
      p.serviceIds.some((s: string) => ["svc-web", "svc-software", "svc-mobile", "svc-cloud"].includes(s)) ||
      p.category.toLowerCase().includes("web") ||
      p.category.toLowerCase().includes("software") ||
      p.category.toLowerCase().includes("platform"),
  },
  {
    id: "branding",
    label: "Custom Print & Branding",
    match: (p) =>
      p.serviceIds.some((s: string) => ["svc-custom-printing", "svc-branding"].includes(s)) ||
      p.category.toLowerCase().includes("brand") ||
      p.category.toLowerCase().includes("print") ||
      p.title.toLowerCase().includes("merchandise") ||
      p.title.toLowerCase().includes("brand"),
  },
  {
    id: "uiux",
    label: "UI/UX & Design",
    match: (p) =>
      p.serviceIds.includes("svc-uiux") ||
      p.category.toLowerCase().includes("ui") ||
      p.category.toLowerCase().includes("design"),
  },
  {
    id: "creative",
    label: "Video & Motion",
    match: (p) =>
      p.serviceIds.some((s: string) => ["svc-video", "svc-social", "svc-content"].includes(s)) ||
      p.category.toLowerCase().includes("video") ||
      p.category.toLowerCase().includes("motion"),
  },
];

function WorksPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const currentCategory = CURATED_CATEGORIES.find((c) => c.id === activeTab);

    return publishedProjects.filter((p) => {
      const matchesCategory =
        !currentCategory ||
        currentCategory.id === "all" ||
        (Boolean(currentCategory.match) && currentCategory.match!(p));

      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (Boolean(p.clientName) && p.clientName!.toLowerCase().includes(q)) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [activeTab, query]);

  return (
    <>
      <PageHero
        label="Selected Works & Case Studies"
        title="Engineered for performance. Crafted for scale."
        description="Explore our recent client platforms, digital software, and custom branding productions across India, the UAE, and global markets."
      />

      <Section>
        {/* Sleek Interactive Controls Bar */}
        <div className="flex flex-col gap-5 border-b border-border/60 pb-8">
          {/* Top Row: Categories & Search */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Curated Categories */}
            <div
              role="tablist"
              aria-label="Filter case studies by discipline"
              className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
            >
              {CURATED_CATEGORIES.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "group relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm",
                      isActive
                        ? "bg-brand text-brand-foreground shadow-md shadow-brand/20 ring-1 ring-brand"
                        : "border border-border/80 bg-surface/80 text-muted-foreground hover:border-border-strong hover:bg-surface hover:text-foreground",
                    )}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Premium Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, client, tech..."
                aria-label="Search case studies"
                className="w-full rounded-full border border-border/80 bg-surface/90 py-2.5 pl-10 pr-10 text-xs text-foreground placeholder:text-muted-foreground/80 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 sm:text-sm"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-surface-subtle hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Counter & Reset Link */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Showing <strong className="font-semibold text-foreground">{filtered.length}</strong> of{" "}
              {publishedProjects.length} case studies
            </span>

            {(activeTab !== "all" || query) && (
              <button
                type="button"
                onClick={() => {
                  setActiveTab("all");
                  setQuery("");
                }}
                className="font-medium text-brand hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 40}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-2xl border border-dashed border-border-strong/70 bg-surface/40 p-12 text-center backdrop-blur-sm sm:p-16">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface-subtle text-muted-foreground">
              <FolderGit2 className="size-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-foreground">
              No matching projects found
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
              We couldn't find any case studies matching "{query || activeTab}". Try another search term or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab("all");
                setQuery("");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-sm transition-all hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
