import { createFileRoute } from "@tanstack/react-router";

import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhySection } from "@/components/home/WhySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "DEVGRONIX — Create. Develop. Grow.",
      description:
        "DEVGRONIX designs and builds websites, software, mobile apps, AI automation and cloud solutions for businesses in India and international markets.",
      withSite: false,
    }),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedWork />
      <WhySection />
      <ProcessSection />
      <TechnologySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
