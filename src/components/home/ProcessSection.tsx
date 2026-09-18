import { homepage } from "@/lib/content/home";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function ProcessSection() {
  const { process } = homepage;

  return (
    <Section id="process" className="border-b border-border bg-surface/40">
      <SectionHeading
        index="04"
        label="Process"
        title="A sequence you can follow week by week."
        description="No black boxes. Each stage has an output you can review before the next one starts."
      />
      <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {process.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 60} className="bg-background p-7">
            <span className="font-display text-3xl font-bold text-brand/70">{step.number}</span>
            <h3 className="mt-5 font-display text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
