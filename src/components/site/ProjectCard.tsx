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
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-brand/60"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border",
          size === "lg" ? "aspect-[16/10]" : size === "sm" ? "aspect-[16/9]" : "aspect-[4/3]",
        )}
      >
        <ProjectCover pattern={project.thumbnail} className="transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rule-label">{project.category}</span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-bold leading-snug text-foreground",
            size === "lg" ? "text-2xl" : "text-lg",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          {project.contentType === "demo" ? <DemoBadge /> : <span />}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            View case study
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
