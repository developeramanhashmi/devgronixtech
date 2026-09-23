import { createFileRoute } from "@tanstack/react-router";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { aboutValues } from "@/lib/content/about";
import { homepage } from "@/lib/content/home";
import { publishedServices } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "About DEVGRONIX | Technology & Digital Solutions",
      description:
        "DEVGRONIX is a digital technology and software partner building websites, software, apps and AI-assisted tools for businesses in India and international markets including the Middle East.",
      path: "/about",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ]),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A technology partner, not a template shop."
        description="DEVGRONIX builds digital products for companies that need technology to carry real operational weight — in India and in international markets including the Middle East."
      />

      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <span className="rule-label">Our story</span>
            <p className="mt-5 text-lg leading-relaxed text-foreground">
              DEVGRONIX exists because too many businesses end up with software that looks finished
              and behaves badly. We started with a simple rule: understand the work before designing
              the screen.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We operate as a single team across design, engineering and delivery. That keeps
              decisions fast and accountability clear — the people who scope your project are the
              people who build it.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our name carries the approach: Create. Develop. Grow. Create the idea into something
              concrete, develop it properly, then keep improving it once real users arrive.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal className="rounded-xl border border-border bg-surface p-7">
              <h2 className="rule-label">Mission</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                Build digital products that businesses can rely on daily and extend for years.
              </p>
            </Reveal>
            <Reveal delay={80} className="rounded-xl border border-border bg-surface p-7">
              <h2 className="rule-label">Vision</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                To be the technology partner ambitious companies call first — across India and
                international markets.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="01" label="Values" title="How we work, in four lines." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value, i) => (
            <Reveal key={value.id} delay={i * 60} className="rounded-xl border border-border bg-background p-7">
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="02"
            label="Approach"
            title="Business first, then technology."
            description={homepage.why.description}
          />
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {homepage.why.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 50}>
                <dt className="font-display text-base font-bold text-foreground">{point.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="border-b border-border bg-surface/40">
        <SectionHeading index="03" label="Capabilities" title="What we can take on." />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {publishedServices.map((service) => (
            <li key={service.id} className="bg-background p-6">
              <h3 className="font-display text-base font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection title="Let's talk about your project." />
    </>
  );
}
