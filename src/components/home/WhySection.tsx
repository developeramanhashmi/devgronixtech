import {
  Cpu,
  Headphones,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const advantages = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Business-First Engineering",
    description:
      "We don't just write code; we design around your customer acquisition, retention, and bottom-line revenue goals.",
    tag: "Commercial Focus",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Modern, High-Speed Tech Stack",
    description:
      "Built with React, TypeScript, and edge infrastructure for sub-second load speeds and 99+ Google Lighthouse scores.",
    tag: "Edge Performance",
  },
  {
    icon: Layers,
    num: "03",
    title: "Conversion-Led UI/UX",
    description:
      "Every layout, button, and color palette is tailored to turn casual visitors into paying customers and qualified leads.",
    tag: "Design Systems",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Enterprise Code Quality",
    description:
      "Clean architecture, bulletproof database models, and strict type safety so your software scales effortlessly as traffic grows.",
    tag: "Zero Technical Debt",
  },
  {
    icon: Sparkles,
    num: "05",
    title: "Complete Scope Transparency",
    description:
      "No hidden surprises or surprise invoices. Weekly milestone demos, real-time WhatsApp updates, and visible roadmaps.",
    tag: "Clear Milestones",
  },
  {
    icon: Headphones,
    num: "06",
    title: "Dedicated Post-Launch Support",
    description:
      "We provide complete documentation, hands-on handover, and ongoing maintenance retainers whenever you need them.",
    tag: "Long-Term Partner",
  },
];

export function WhySection() {
  return (
    <Section id="why" className="border-b border-border bg-surface/30">
      <SectionHeading
        index="03"
        label="The Advantage"
        title="Why high-growth businesses choose DEVGRONIX."
        description="We operate like your dedicated product & engineering partner, not an indifferent outsourcing agency."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, i) => {
          const Icon = adv.icon;
          return (
            <Reveal
              key={adv.title}
              delay={i * 60}
              className="card-interactive group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl dark:border-white/10 dark:bg-surface-strong/70"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl border border-border/60 bg-surface-strong text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-xs font-bold text-muted-foreground group-hover:text-brand">
                    {adv.num}
                  </span>
                </div>

                <span className="mt-5 inline-block text-[0.6875rem] font-semibold uppercase tracking-wider text-brand">
                  {adv.tag}
                </span>

                <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                  {adv.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="size-1.5 rounded-full bg-brand" />
                Guaranteed in every contract
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
