import { homepage } from "@/lib/content/home";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function WhySection() {
  const { why } = homepage;

  return (
    <Section id="why" className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading index="03" label="Positioning" title={why.title} description={why.description} />
        <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {why.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60}>
              <dt className="flex items-baseline gap-3 font-display text-base font-bold text-foreground">
                <span className="text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                {point.title}
              </dt>
              <dd className="mt-2 pl-8 text-sm leading-relaxed text-muted-foreground">{point.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
