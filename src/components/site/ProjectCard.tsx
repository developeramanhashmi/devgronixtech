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
  const isVerified = project.contentType === "verified" || Boolean(project.liveUrl);

  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "card-interactive group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5",
        className,
      )}
    >
      {/* Cover image / artwork */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-subtle">
        <ProjectCover
          pattern={project.thumbnail}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Live / Concept Status Badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          {isVerified ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-background/90 px-2.5 py-0.5 text-[0.6875rem] font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Project
            </span>
          ) : (
            <DemoBadge className="bg-background/90 backdrop-blur-md" />
          )}
        </div>

        {/* Hover Arrow on Top Right */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 inline-flex size-8 translate-y-1 items-center justify-center rounded-full bg-background/90 text-brand opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Year */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80">{project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-1 text-base font-bold text-foreground transition-colors duration-200 group-hover:text-brand sm:text-lg">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-surface-subtle/80 px-2 py-0.5 text-[0.6875rem] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bottom CTA Link */}
        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs font-semibold text-brand">
          <span>Case study & details</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
