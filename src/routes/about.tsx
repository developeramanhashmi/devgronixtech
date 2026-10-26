import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Globe2,
  HeartHandshake,
  Linkedin,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "About DEVGRONIX | Founder, Vision & Digital Engineering",
      description:
        "Meet DEVGRONIX and founder Aman Hashmi. We build high-performance websites, custom software, and digital branding for ambitious businesses across India, UAE, and worldwide.",
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
  const founderWhatsappUrl =
    "https://wa.me/917070519128?text=" +
    encodeURIComponent(
      "Hi Aman, I'm reaching out after reading the DEVGRONIX About page. I'd like to discuss a project."
    );

  const founderLinkedinUrl = "https://www.linkedin.com/in/hashmiaman";

  // Right column: Founder Spotlight Card
  const founderSpotlight = (
    <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-card/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-brand/70 hover:shadow-brand/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand/25 via-sky-500/15 to-indigo-500/25 blur-xl opacity-75 -z-10"
      />

      <div className="flex items-center justify-between pb-6 border-b border-border/60">
        <div className="flex items-center gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border-2 border-brand/40 bg-gradient-to-tr from-brand to-sky-500 shadow-md">
            <img
              src="/aman-alam.jpg"
              alt="Aman Hashmi - Founder & Lead Engineer at DEVGRONIX"
              className="size-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="flex size-full items-center justify-center font-display text-lg font-bold text-white">
              AH
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground">Aman Hashmi</h3>
              <a
                href={founderLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="interactive rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
            <p className="text-xs font-medium text-brand">Founder & Lead Engineer</p>
            <p className="text-[11px] text-muted-foreground">Digital Strategist • Full-Stack Lead</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Active
        </div>
      </div>

      <div className="mt-5 space-y-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <Clock className="size-4 text-brand shrink-0" />
          <span>Direct line: <strong className="text-foreground">Replies in &lt; 15 mins on WhatsApp</strong></span>
        </div>
        <div className="flex items-center gap-2.5">
          <Globe2 className="size-4 text-sky-400 shrink-0" />
          <span>Footprint: <strong className="text-foreground">India (Hyderabad/HQ), UAE (Dubai), Saudi Arabia</strong></span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
          <span>Commitment: <strong className="text-foreground">Personal accountability on every single project</strong></span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-2.5 sm:flex-row">
        <a
          href={founderWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20bd5a]"
        >
          <MessageCircle className="size-4" />
          Direct WhatsApp
        </a>
        <a
          href="tel:+917070519128"
          className="interactive flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-xs font-semibold text-foreground transition-all hover:border-brand"
        >
          <Phone className="size-3.5" />
          +91 70705 19128
        </a>
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        label="About DEVGRONIX"
        title="High-Impact Digital Products. Zero Bloat."
        description="We build fast, scalable web applications, custom printing solutions, and corporate branding for businesses that value speed, transparent pricing, and direct technical accountability."
        rightContent={founderSpotlight}
      >
        <div className="flex flex-col gap-5">
          {/* Quick Stat Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
              🚀 <span className="text-brand font-bold">50+</span> Projects Shipped
            </div>
            <div className="rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
              ⚡ <span className="text-emerald-400 font-bold">24–48h</span> Sprint Delivery
            </div>
            <div className="rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
              🌍 <span className="text-sky-400 font-bold">Global</span> Standards (India &amp; Middle East)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/contact"
              className="interactive inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand via-sky-500 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all hover:scale-[1.02]"
            >
              <span>Work With Us</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="interactive inline-flex items-center rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand hover:text-brand"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </PageHero>

      {/* FOUNDER STORY & PHILOSOPHY */}
      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          <Reveal>
            <span className="rule-label">Our Story</span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Why We Built DEVGRONIX Differently.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most agency engagements follow the same frustrating script: high sales promises,
                weeks of waiting for initial wireframes, surprising invoices for every minor edit,
                and layers of account managers standing between you and the engineer actually writing your code.
              </p>
              <p>
                <strong className="text-foreground">DEVGRONIX was founded to break that cycle.</strong> We believe
                ambitious founders and businesses deserve rapid technical execution. If a landing page or corporate
                site can be designed, coded, and deployed in 24 to 48 hours with modern tooling, it should not take a month.
              </p>
              <p>
                Whether it is a ₹999 launch website for a budding local business or full-scale web infrastructure
                for clients in the UAE and Saudi Arabia, our philosophy remains identical:
                <em> understand the commercial objective first, execute cleanly, and hand over 100% ownership.</em>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-xl backdrop-blur-xl">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 border border-brand/25 text-brand mb-6">
              <HeartHandshake className="size-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">The DEVGRONIX Commitment</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No Middlemen:</strong> You talk directly with the engineer shaping your product.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Transparent Fixed Pricing:</strong> You know the exact cost before a line of code is written.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Uncompromised Performance:</strong> Lightning-fast page loads, mobile responsiveness, and SEO readiness.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Full Asset Ownership:</strong> All code, designs, and credentials are 100% yours.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* CORE OPERATING VALUES (BENTO) */}
      <Section className="border-b border-border bg-surface/30">
        <SectionHeading
          index="01"
          label="Guiding Principles"
          title="How We Deliver Results"
          description="Four core operational rules that protect your time, budget, and business reputation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0} className="rounded-2xl border border-border/80 bg-card/70 p-7 backdrop-blur-xl">
            <div className="font-mono text-xs font-bold text-brand uppercase">01 / Speed</div>
            <div className="mt-4 flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Zap className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">Speed as a Feature</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fast execution gives you an unfair advantage. We ship complete sprints in 24–48 hours without compromising quality.
            </p>
          </Reveal>

          <Reveal delay={60} className="rounded-2xl border border-border/80 bg-card/70 p-7 backdrop-blur-xl">
            <div className="font-mono text-xs font-bold text-sky-400 uppercase">02 / Clarity</div>
            <div className="mt-4 flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">Upfront Honesty</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Clear quotes, documented scopes, and zero surprise bills. If something isn't needed, we tell you openly.
            </p>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border/80 bg-card/70 p-7 backdrop-blur-xl">
            <div className="font-mono text-xs font-bold text-indigo-400 uppercase">03 / Modern Tech</div>
            <div className="mt-4 flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <Code2 className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">Production-Grade Code</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Built on modern React, TypeScript, and edge hosting. Clean, maintainable code you can scale easily.
            </p>
          </Reveal>

          <Reveal delay={180} className="rounded-2xl border border-border/80 bg-card/70 p-7 backdrop-blur-xl">
            <div className="font-mono text-xs font-bold text-emerald-400 uppercase">04 / Ownership</div>
            <div className="mt-4 flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Cpu className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">Zero Lock-In</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You own your source repository, domains, and design files completely. No hostage situations.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* GLOBAL FOOTPRINT */}
      <Section className="border-b border-border">
        <SectionHeading
          index="02"
          label="Global Reach"
          title="Serving Clients from Hyderabad to the Gulf"
          description="High-standard digital delivery tailored for local Indian businesses and international GCC clients."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <span className="text-2xl">🇮🇳</span>
            <h3 className="mt-3 font-display text-base font-bold text-foreground">India (HQ - Hyderabad)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Local presence in Gachibowli, Hyderabad. Serving startups, retail businesses, and professionals across India with UPI convenience.
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <span className="text-2xl">🇦🇪</span>
            <h3 className="mt-3 font-display text-base font-bold text-foreground">UAE (Dubai, Abu Dhabi, Sharjah)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tailored packages in AED with international payment options, Arabic-ready designs, and UAE business licensing setups.
            </p>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-xl">
            <span className="text-2xl">🇸🇦</span>
            <h3 className="mt-3 font-display text-base font-bold text-foreground">Saudi Arabia &amp; GCC</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Corporate identity, bilingual web presence, and digital marketing materials built for rapid-growth Gulf enterprises.
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaSection
        title="Ready to Build Something Remarkable?"
        description="Whether you need a high-converting website, custom branding materials, or dedicated software engineering, let's talk directly."
      />
    </>
  );
}
