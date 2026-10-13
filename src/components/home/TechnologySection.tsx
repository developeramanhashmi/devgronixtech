import { Code2, Server, Database, Cpu, Cloud, Palette, Zap, ShieldCheck } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const techCategories = [
  {
    icon: Code2,
    group: "Frontend & Web",
    accent: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    badge: "Sub-second UX",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack"],
    description: "Responsive, accessible interfaces optimized for Core Web Vitals.",
  },
  {
    icon: Server,
    group: "Backend & APIs",
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    badge: "Scalable Logic",
    items: ["Node.js", "Python", "REST APIs", "GraphQL", "Edge Workers"],
    description: "Robust service endpoints engineered for uptime and low latency.",
  },
  {
    icon: Database,
    group: "Database & Storage",
    accent: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    badge: "ACID Compliant",
    items: ["PostgreSQL", "Supabase", "Redis", "Prisma", "Vector DBs"],
    description: "Normalized relational schemas with strict data isolation.",
  },
  {
    icon: Cpu,
    group: "AI & Automations",
    accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    badge: "Intelligent Workflows",
    items: ["OpenAI APIs", "LangChain", "n8n", "Vector Embeddings", "AI Chatbots"],
    description: "Custom AI integrations that automate repetitive operations.",
  },
  {
    icon: Cloud,
    group: "Cloud & Security",
    accent: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    badge: "Global Edge",
    items: ["AWS", "Vercel", "Docker", "Cloudflare", "CI/CD Pipelines"],
    description: "Zero-downtime multi-region hosting with automated builds.",
  },
  {
    icon: Palette,
    group: "Creative & Design",
    accent: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    badge: "Pixel Precision",
    items: ["Figma", "Adobe After Effects", "Photoshop", "Premiere Pro", "Design Systems"],
    description: "High-retention brand graphics, motion reels, and UI components.",
  },
];

export function TechnologySection() {
  return (
    <Section id="technology" className="border-b border-border bg-surface/30">
      <SectionHeading
        index="05"
        label="Technology & Infrastructure"
        title="Modern, production-grade tools."
        description="We don't chase experimental trends. We choose proven, high-performance technology designed for security, longevity, and high speed."
      />

      {/* Tech Cards Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Reveal key={cat.group} delay={i * 60}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-xl hover:shadow-brand/5">
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`flex size-10 items-center justify-center rounded-xl border ${cat.accent}`}>
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full border border-border bg-surface-subtle px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Group Name & Description */}
                  <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                    {cat.group}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>

                  {/* Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/60 bg-surface-subtle px-2 py-0.5 text-[0.6875rem] font-medium text-foreground/80 transition-colors group-hover:border-border-strong"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 flex items-center gap-1.5 border-t border-border/50 pt-3 text-[0.6875rem] text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Production verified stack</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Engineering Trust Metrics Bar */}
      <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-4">
        <div className="flex flex-col items-center justify-center border-r border-border/60 p-2 text-center last:border-none sm:last:border-none">
          <Zap className="size-5 text-brand" />
          <span className="mt-2 font-display text-xl font-bold text-foreground">100%</span>
          <span className="text-[0.6875rem] text-muted-foreground">Type-Safe TypeScript</span>
        </div>
        <div className="flex flex-col items-center justify-center border-r-0 border-border/60 p-2 text-center sm:border-r">
          <ShieldCheck className="size-5 text-emerald-500" />
          <span className="mt-2 font-display text-xl font-bold text-foreground">A Grade</span>
          <span className="text-[0.6875rem] text-muted-foreground">Security & SSL</span>
        </div>
        <div className="flex flex-col items-center justify-center border-r border-border/60 p-2 text-center last:border-none">
          <Cloud className="size-5 text-sky-500" />
          <span className="mt-2 font-display text-xl font-bold text-foreground">99.9%</span>
          <span className="text-[0.6875rem] text-muted-foreground">Target Uptime SLA</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <Cpu className="size-5 text-purple-500" />
          <span className="mt-2 font-display text-xl font-bold text-foreground">&lt; 1.5s</span>
          <span className="text-[0.6875rem] text-muted-foreground">Core Web Vitals LCP</span>
        </div>
      </div>
    </Section>
  );
}
