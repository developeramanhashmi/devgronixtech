import { homepage } from "@/lib/content/home";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function TechnologySection() {
  const { technology } = homepage;

  return (
    <Section id="technology" className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          index="05"
          label="Technology"
          title="The stack we actually work in."
          description="A deliberately small toolkit. We go deep on a few well-supported technologies instead of listing every logo in the industry."
        />
        <div className="flex flex-col divide-y divide-border border-t border-border">
          {technology.map((group, i) => (
            <Reveal key={group.group} delay={i * 50} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
              <span className="rule-label sm:w-28 sm:shrink-0">{group.group}</span>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
