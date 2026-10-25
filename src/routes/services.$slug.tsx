import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCode2,
  Globe,
  Layers,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLdScript,
  notFoundHead,
  seoHead,
  serviceSchema,
} from "@/lib/seo";
import { getAdjacentServices, getServiceBySlug, publishedServices } from "@/lib/content/services";
import { getServiceSeo } from "@/lib/content/seo-meta";
import { getPlansByService } from "@/lib/content/pricing";
import { getProjectsByService } from "@/lib/content/projects";
import { homepage } from "@/lib/content/home";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { PricingPlans } from "@/components/site/PricingPlans";
import { CtaSection } from "@/components/site/CtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return {
      service,
      seo: getServiceSeo(service),
      projects: getProjectsByService(service.id),
      plans: getPlansByService(service.id),
      adjacent: getAdjacentServices(service.slug),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return notFoundHead("Service not found");
    const { service, seo } = loaderData;
    const path = `/services/${service.slug}`;
    const schemas: Record<string, unknown>[] = [
      serviceSchema({
        name: service.title,
        description: seo.metaDescription,
        path,
        category: service.group,
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ];

    if (seo.faqs && seo.faqs.length > 0) {
      schemas.push(faqPageSchema(seo.faqs));
    }

    return {
      ...seoHead({
        title: seo.metaTitle,
        description: seo.metaDescription,
        path,
      }),
      scripts: [jsonLdScript(schemas)],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="font-display text-3xl font-bold text-foreground">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        That service doesn't exist, or it isn't published yet.
      </p>
      <Link
        to="/services"
        className="interactive mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
      >
        Browse all services
      </Link>
    </Section>
  );
}

function ServiceDetailPage() {
  const { service, seo, projects, plans } = Route.useLoaderData();

  // Normalize deliverables and outcomes safely
  const deliverablesList =
    (service as any).deliverables ||
    (service.offers || []).map((o: any) => ({
      title: typeof o === "string" ? o : o.title || "",
      description:
        typeof o === "object" && o.description
          ? o.description
          : "Professional deliverable tailored to your scope and specifications.",
    }));

  const outcomesList =
    (service as any).outcomes ||
    (service.helps || []).map((h: any) => ({
      metric: h.metric || "100%",
      label: h.title || h.label || "",
      description: h.body || h.description || "",
    }));

  // Lowest starting price for service highlight
  const lowestPrice =
    plans && plans.length > 0
      ? plans.find((p) => p.price && p.price !== "On request")?.price || plans[0]?.price
      : null;

  // Direct WhatsApp prefilled inquiry message
  const waInquiryUrl = `https://wa.me/917070519128?text=${encodeURIComponent(
    `Hi DEVGRONIX, I'm interested in your ${service.title} service. Please share packages, timelines and an estimated quote.`
  )}`;

  // Right-column 3D Glassmorphic Spec Card
  const heroSpecCard = (
    <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-card/90 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-brand/70 hover:shadow-brand/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand/25 via-sky-500/15 to-indigo-500/25 blur-xl opacity-75 -z-10"
      />

      <div className="flex items-center justify-between pb-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 border border-brand/25 text-brand shadow-inner">
            <ServiceIcon name={service.icon} className="size-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              {service.group}
            </div>
            <div className="text-base font-bold text-foreground line-clamp-1">{service.title}</div>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Sprint Ready
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border/60 bg-background/70 p-3.5 backdrop-blur-md">
          <div className="text-[11px] font-medium text-muted-foreground">Starting From</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">
            {lowestPrice || "Custom Quote"}
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-background/70 p-3.5 backdrop-blur-md">
          <div className="text-[11px] font-medium text-muted-foreground">Turnaround</div>
          <div className="text-lg font-bold text-foreground mt-0.5">24–48 Hours</div>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
          <Sparkles className="size-3 text-brand" />
          Key Inclusions
        </div>
        <ul className="space-y-2.5">
          {deliverablesList.slice(0, 4).map((d: any, idx: number) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground">
              <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1 font-medium">{d.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-5 border-t border-border/60">
        <a
          href={waInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20bd5a] hover:scale-[1.01]"
        >
          <MessageCircle className="size-4" />
          Instant WhatsApp Consultation
        </a>
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        label={service.group}
        title={seo.h1}
        description={service.tagline}
        rightContent={heroSpecCard}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
              Tech / Tools:
            </span>
            {(service.technologies || []).slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-card/60 px-3 py-1 font-mono text-xs text-foreground backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 backdrop-blur-md">
              <Zap className="size-3.5 text-amber-400" />
              <span>Fast 24–48h Sprints</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 backdrop-blur-md">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span>100% Quality &amp; Revision Guarantee</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 backdrop-blur-md">
              <Globe className="size-3.5 text-sky-400" />
              <span>Serving India, UAE &amp; Global</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/contact"
              search={{ service: service.slug }}
              className="interactive group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand via-sky-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-brand/40"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={waInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/70"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>

            {plans && plans.length > 0 && (
              <a
                href="#pricing"
                className="interactive inline-flex items-center rounded-full border border-border-strong px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-brand hover:text-brand"
              >
                View Packages
              </a>
            )}
          </div>
        </div>
      </PageHero>

      {/* OVERVIEW & CORE CAPABILITIES */}
      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <span className="rule-label">Overview</span>
            <p className="mt-5 text-lg leading-relaxed text-foreground">{service.description}</p>
            {service.overview && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
            )}
          </Reveal>
          <div>
            <span className="rule-label">Core Capabilities</span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {(service.capabilities || []).map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/40 p-3.5 backdrop-blur-md transition-all hover:border-brand/40"
                >
                  <span className="mt-1 size-2 rounded-full bg-brand shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* DELIVERABLES BENTO GRID */}
      <Section className="border-b border-border">
        <SectionHeading
          index="01"
          label="Deliverables & Assets"
          title="What Ships at the End of Every Sprint"
          description="Everything we produce belongs to you. Zero vendor lock-in, complete source ownership."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesList.map((item: any, i: number) => (
            <Reveal
              key={item.title || i}
              delay={i * 60}
              className="group rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold text-brand uppercase tracking-wider">
                  Deliverable {String(i + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY DEVGRONIX VS OTHERS COMPARISON */}
      <Section className="border-b border-border bg-surface/30">
        <SectionHeading
          index="02"
          label="The DEVGRONIX Difference"
          title={`Why Choose DEVGRONIX for ${service.title}`}
          description="How our sprint model beats traditional agency delays, hidden fees, and unreliable freelancers."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border/80 bg-muted/40 font-display text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-4 px-6 font-semibold">Deliverable Standard</th>
                  <th className="py-4 px-6 font-semibold text-muted-foreground">Generic Agencies / Freelancers</th>
                  <th className="py-4 px-6 font-bold text-brand bg-brand/5">DEVGRONIX Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="transition-colors hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium text-foreground">Delivery Speed</td>
                  <td className="py-4 px-6 text-muted-foreground flex items-center gap-2">
                    <X className="size-4 text-rose-500 shrink-0" />
                    2–4 weeks with communication gaps
                  </td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-brand/5">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      24–48 Hours rapid sprint deployment
                    </div>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium text-foreground">Pricing & Transparency</td>
                  <td className="py-4 px-6 text-muted-foreground flex items-center gap-2">
                    <X className="size-4 text-rose-500 shrink-0" />
                    Hidden fees, surprise hourly rates
                  </td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-brand/5">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      100% Upfront transparent packages
                    </div>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium text-foreground">Communication</td>
                  <td className="py-4 px-6 text-muted-foreground flex items-center gap-2">
                    <X className="size-4 text-rose-500 shrink-0" />
                    Account managers, ticket backlogs
                  </td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-brand/5">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      Direct WhatsApp access to founder/engineer
                    </div>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-muted/20">
                  <td className="py-4 px-6 font-medium text-foreground">Asset & Code Ownership</td>
                  <td className="py-4 px-6 text-muted-foreground flex items-center gap-2">
                    <X className="size-4 text-rose-500 shrink-0" />
                    Proprietary lock-ins or extra release fees
                  </td>
                  <td className="py-4 px-6 font-semibold text-emerald-400 bg-brand/5">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      100% Complete ownership from Day 1
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 3-STEP SPRINT WORKFLOW */}
      <Section className="border-b border-border">
        <SectionHeading
          index="03"
          label="Execution Process"
          title="3-Step Frictionless Delivery"
          description="A clear, predictable sprint sequence from initial brief to live production handoff."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0} className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand">
              <Compass className="size-5" />
            </div>
            <div className="mt-5 font-mono text-xs font-bold text-muted-foreground uppercase">Step 01</div>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">Scope & Confirmation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Select your package or share custom requirements on WhatsApp. We lock in the deliverables, pricing, and exact timeline in 15 minutes.
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Rocket className="size-5" />
            </div>
            <div className="mt-5 font-mono text-xs font-bold text-muted-foreground uppercase">Step 02</div>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">Rapid Sprint & Review</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We execute your project within 24–48 hours. You receive a private preview or proof to test, inspect, and request adjustments.
            </p>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="size-5" />
            </div>
            <div className="mt-5 font-mono text-xs font-bold text-muted-foreground uppercase">Step 03</div>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">Final Launch & Handoff</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              After your approval, we connect your official domain or release all high-res assets, source code, and credentials directly to you.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* PRICING PLANS */}
      {plans && plans.length > 0 && (
        <Section id="pricing" className="border-b border-border bg-surface/30">
          <SectionHeading
            index="04"
            label="Packages & Pricing"
            title={`${service.title} Transparent Packages`}
            description="Clear upfront pricing with no hidden surprises. Custom quotes available for bespoke requirements."
          />
          <div className="mt-12">
            <PricingPlans service={service} plans={plans} serviceSlug={service.slug} />
          </div>
        </Section>
      )}

      {/* SELECTED WORK */}
      <Section className="border-b border-border">
        <SectionHeading
          index="05"
          label="Selected Work"
          title={`Projects Featuring ${service.title}`}
        />
        {projects && projects.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border/80 bg-card/40 p-12 text-center backdrop-blur-md">
            <p className="text-sm text-muted-foreground">
              Case studies for this service are being documented. Contact us for private client references and live walkthroughs.
            </p>
            <a
              href={waInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Request Live References on WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        )}
      </Section>

      {/* FAQS */}
      {seo.faqs && seo.faqs.length > 0 && (
        <Section className="border-b border-border bg-surface/30">
          <SectionHeading
            index="06"
            label="FAQ"
            title={`Frequently Asked Questions About ${service.title}`}
          />
          <div className="mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {seo.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border/70 bg-card/60 px-5 backdrop-blur-md"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      )}

      <CtaSection
        title={homepage.cta.title}
        description={homepage.cta.description}
      />
    </>
  );
}
