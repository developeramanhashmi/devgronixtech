import { createFileRoute } from "@tanstack/react-router";

import { seoHead } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhySection } from "@/components/home/WhySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "DEVGRONIX | Technology, Design & Digital Growth",
      description:
        "DEVGRONIX is a software and technology company in India building websites, web and mobile apps, custom software, AI automation, cloud solutions, design and digital growth services.",
      path: "/",
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
