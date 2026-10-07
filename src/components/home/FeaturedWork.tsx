import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { featuredProjects } from "@/lib/content/projects";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web & Apps" },
  { id: "live", label: "Verified Client Work" },
] as const;

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web") {
      return (
        project.category.toLowerCase().includes("web") ||
        project.title.toLowerCase().includes("website") ||
        project.title.toLowerCase().includes("studio")
      );
    }
    if (activeCategory === "live") {
      return Boolean(project.clientName || project.liveUrl);
    }
    return true;
  });

  const [first, second, ...others] = filteredProjects;

  return (
    <Section id="work" className="border-b border-border bg-surface/40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="02"
          label="Selected work"
          title="Featured builds & verified client projects."
          description="A selection of live client projects and engineered concept systems delivering measurable results."
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

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        {first && (
          <Reveal className="lg:col-span-7">
            <ProjectCard project={first} size="lg" />
          </Reveal>
        )}
        {second && (
          <Reveal delay={80} className="lg:col-span-5">
            <ProjectCard project={second} />
          </Reveal>
        )}
        {others.map((project, i) => (
          <Reveal key={project.id} delay={i * 70} className="lg:col-span-6">
            <ProjectCard project={project} size="sm" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
