import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { featuredProjects } from "@/lib/content/projects";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";

export function FeaturedWork() {
  const [first, second, ...others] = featuredProjects;

  return (
    <Section id="work" className="border-b border-border bg-surface/40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="02"
          label="Selected work"
          title="Concept projects that show how we build."
          description="These are in-house concept builds created to demonstrate our approach across services. Verified client case studies replace them as they are published."
        />
        <Reveal delay={100} className="shrink-0">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            All work
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
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
