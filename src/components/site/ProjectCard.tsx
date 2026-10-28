import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content/types";
import { ProjectCover } from "./ProjectCover";

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[0.625rem] font-medium tracking-wide text-muted-foreground",
        className,
      )}
    >
      Concept
    </span>
  );
}

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  size?: "sm" | "md" | "lg";
  index?: number;
  className?: string;
}) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5",
        className,
      )}
    >
      {/* 100% Clean Image Container - No badges or overlay text over image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/70 bg-surface-subtle">
        <ProjectCover
          pattern={project.thumbnail}
          className="h-full w-full object-cover"
        />

        {/* Subtle glass hover action icon on top right */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-3.5 inline-flex size-9 translate-y-1.5 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-brand"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      {/* Card Info Area */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category & Year */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wider text-brand">
            {project.category}
          </span>
          <span className="font-mono text-[0.75rem] text-muted-foreground">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-2.5 line-clamp-1 font-display text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-brand">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/70 bg-surface-subtle px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Case Study CTA Link */}
        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs font-semibold text-brand">
          <span>View project details</span>
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
