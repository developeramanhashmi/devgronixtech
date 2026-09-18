import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content/types";
import { ProjectCover } from "./ProjectCover";

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide text-muted-foreground",
        className,
      )}
    >
      Concept Project
    </span>
  );
}

export function ProjectCard({
  project,
  size = "md",
}: {
  project: Project;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className="card-interactive group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border",
          size === "lg" ? "aspect-[16/10]" : size === "sm" ? "aspect-[16/9]" : "aspect-[4/3]",
        )}
      >
        <ProjectCover
          pattern={project.thumbnail}
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Restrained overlay + arrow, hover only (no mobile dependency). */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/[0.06]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 inline-flex size-9 translate-y-1 items-center justify-center rounded-full bg-background/90 text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rule-label">{project.category}</span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-bold leading-snug text-foreground transition-transform duration-300 group-hover:translate-x-0.5",
            size === "lg" ? "text-2xl" : "text-lg",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          {project.contentType === "demo" ? <DemoBadge /> : <span />}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            View case study
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
