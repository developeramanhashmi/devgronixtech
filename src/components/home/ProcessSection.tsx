import {
  CheckCircle2,
  Code2,
  Compass,
  FileCheck2,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    phase: "Phase 01",
    timeline: "Day 1–2",
    icon: Compass,
    title: "Discovery & Blueprint",
    description:
      "We map your exact business goals, user personas, technical requirements, and competitor gaps into an executable scope.",
    deliverable: "Deliverable: Scoped Project Roadmap & Commercials",
  },
  {
    phase: "Phase 02",
    timeline: "Week 1",
    icon: Palette,
    title: "UI/UX & Wireframing",
    description:
      "Interactive screen flows and high-fidelity interface systems in Figma, reviewed and approved before writing code.",
    deliverable: "Deliverable: Clickable Prototype & Brand Assets",
  },
  {
    phase: "Phase 03",
    timeline: "Week 1–2",
    icon: Code2,
    title: "Agile Production Build",
    description:
      "Clean, modular engineering with React, Next.js, and edge APIs. You get staging links to test real features as they are built.",
    deliverable: "Deliverable: Live Staging Link & Sprint Demos",
  },
  {
    phase: "Phase 04",
    timeline: "Week 2–3",
    icon: FileCheck2,
    title: "QA & Performance Tuning",
    description:
      "Cross-browser testing, mobile responsiveness audit, SEO schema validation, and speed optimization for under 1s loading.",
    deliverable: "Deliverable: 99+ Speed Score & QA Report",
  },
  {
    phase: "Phase 05",
    timeline: "Launch Day",
    icon: Rocket,
    title: "Production Deployment",
    description:
      "Custom domain connection, SSL certificate verification, Search Console sitemap indexing, and zero-downtime go-live.",
    deliverable: "Deliverable: Live Production Site & Cloud Config",
  },
  {
    phase: "Phase 06",
    timeline: "Continuous",
    icon: Sparkles,
    title: "Scale & Growth Retainer",
    description:
      "Post-launch handover documentation, video guides, analytics tracking, and ongoing iteration to maximize conversions.",
    deliverable: "Deliverable: Full Handover & Ongoing Support",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="border-b border-border bg-surface/50">
      <SectionHeading
        index="04"
        label="Process"
        title="A predictable sprint sequence with zero guesswork."
        description="Every milestone has a concrete deliverable you can inspect and approve before the next sprint starts."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal
              key={step.phase}
              delay={i * 60}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface p-7 shadow-xs transition-all duration-300 hover:border-brand/60 hover:shadow-xl dark:border-white/10 dark:bg-surface-strong/80"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <span className="rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
                    {step.phase}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    ⏱ {step.timeline}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-surface-strong text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-border/70 bg-background/70 px-3.5 py-2 text-xs font-semibold text-foreground">
                <CheckCircle2 className="size-3.5 shrink-0 text-chart-3" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
