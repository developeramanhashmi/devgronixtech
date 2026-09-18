import { Star } from "lucide-react";

import { publishedTestimonials } from "@/lib/content/testimonials";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function TestimonialsSection() {
  if (publishedTestimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="border-b border-border bg-surface/40">
      <SectionHeading
        index="06"
        label="Sample feedback"
        title="Placeholder testimonials, real structure."
        description="The entries below are sample content used while we collect approved client feedback. Each one becomes a verified testimonial once a client signs off."
      />
      <ul className="mt-14 grid gap-4 lg:grid-cols-3">
        {publishedTestimonials.map((t, i) => (
          <Reveal as="li" key={t.id} delay={i * 70} className="flex h-full flex-col rounded-xl border border-border bg-background p-7">
            <div className="flex items-center justify-between">
              <span aria-label={`${t.rating} out of 5`} className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    aria-hidden="true"
                    className={s < t.rating ? "size-3.5 fill-brand text-brand" : "size-3.5 text-border-strong"}
                  />
                ))}
              </span>
              <span className="rounded-full border border-border-strong px-2.5 py-1 text-[0.6875rem] text-muted-foreground">
                Sample
              </span>
            </div>
            <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-foreground">
              {t.testimonial}
            </blockquote>
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {t.designation} · {t.company} · {t.country}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
