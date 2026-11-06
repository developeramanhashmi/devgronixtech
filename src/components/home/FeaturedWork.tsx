import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

import { featuredProjects } from "@/lib/content/projects";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web & Platforms" },
  { id: "branding", label: "Printing & Branding" },
  { id: "live", label: "Verified Client Work" },
] as const;

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web") {
      return (
        project.category.toLowerCase().includes("web") ||
        project.category.toLowerCase().includes("platform") ||
        project.category.toLowerCase().includes("e-commerce") ||
        project.title.toLowerCase().includes("website") ||
        project.serviceIds.includes("svc-web")
      );
    }
    if (activeCategory === "branding") {
      return (
        project.category.toLowerCase().includes("print") ||
        project.category.toLowerCase().includes("brand") ||
        project.serviceIds.includes("svc-printing") ||
        project.serviceIds.includes("svc-branding")
      );
    }
    if (activeCategory === "live") {
      return Boolean(project.clientName || project.liveUrl);
    }
    return true;
  });

  return (
    <Section id="work" className="border-b border-border bg-surface/40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="02"
          label="Selected work"
          title="Featured builds & verified client projects."
          description="A curated selection of live client websites, custom platforms, and production branding across India, UAE, and Saudi Arabia."
        />
        <Reveal delay={100} className="shrink-0">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground interactive hover:border-brand hover:text-brand"
          >
            All portfolio
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              {cat.id === "live" && <Sparkles className="size-3 text-chart-4" />}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Verified & Featured Projects */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 60}>
            <div className="flex flex-col h-full">
              <ProjectCard project={project} />
              {project.clientCountry && (
                <div className="mt-2 flex items-center gap-1.5 px-2 text-[0.6875rem] font-medium text-muted-foreground">
                  <MapPin className="size-3 text-brand" />
                  <span>{project.clientCountry}</span>
                  {project.clientName && (
                    <>
                      <span>•</span>
                      <span className="truncate">{project.clientName}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bottom Link to Full Portfolio */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs font-semibold tracking-wider text-foreground uppercase transition-all hover:border-brand hover:text-brand shadow-sm"
        >
          View all 15+ engineering & creative case studies
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </Section>
  );
}
