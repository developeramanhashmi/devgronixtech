import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  ExternalLink,
  Globe,
  MessageCircle,
  Send,
  Smartphone,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/uae")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Web Design & Development Agency Dubai & UAE | DEVGRONIX",
      description:
        "Custom websites, web applications, video editing, and digital growth for businesses across Dubai, Abu Dhabi, Sharjah & Saudi Arabia. Transparent pricing in AED.",
      path: "/uae",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "UAE & Gulf Services", path: "/uae" },
        ]),
      ]),
    ],
  }),
  component: UaeLandingPage,
});

const gulfPerks = [
  {
    icon: Clock,
    title: "Gulf Timezone Aligned (GMT+4)",
    description:
      "Zero communication delay. We work directly with your schedule across UAE and Saudi Arabia business hours via WhatsApp and Google Meet.",
  },
  {
    icon: CreditCard,
    title: "Transparent Invoicing in AED & USD",
    description:
      "No surprise currency markups. Clean quotes in UAE Dirhams (AED) or USD with milestone payments (50% upfront, 50% on launch).",
  },
  {
    icon: Zap,
    title: "High-Speed Modern Tech Stack",
    description:
      "Built with React, Tailwind, and modern frameworks. Ultra-fast page loads, clean code, and zero bloated templates.",
  },
  {
    icon: Smartphone,
    title: "Built for WhatsApp Lead Flow",
    description:
      "Over 85% of Gulf users browse on mobile. We integrate direct one-tap WhatsApp inquiry triggers and automated lead capture.",
  },
];

const uaePackages = [
  {
    name: "Starter Presence",
    price: "AED 499",
    originalPrice: "AED 999",
    approxInr: "₹11,200 approx",
    timeline: "48 - 72 Hours",
    tag: "Quick Launch",
    description: "Perfect for boutique services, consultants, and new businesses needing a clean digital face.",
    features: [
      "Single high-impact landing page",
      "100% mobile-first design",
      "Direct WhatsApp lead routing",
      "On-page SEO setup & meta tags",
      "Domain & hosting setup assistance",
      "SSL secure certificate",
    ],
    highlight: false,
  },
  {
    name: "Business Growth Web",
    price: "AED 999",
    originalPrice: "AED 1,999",
    approxInr: "₹22,500 approx",
    timeline: "4 - 6 Days",
    tag: "Most Popular in UAE",
    description: "Complete corporate website for established businesses, real estate brokers, clinics, and agencies.",
    features: [
      "Up to 5 custom-designed pages",
      "Services, Portfolio, About & Contact",
      "Interactive inquiry form + WhatsApp",
      "Email notifications via Resend",
      "Google Search Console indexing",
      "Speed optimization (90+ mobile score)",
    ],
    highlight: true,
  },
  {
    name: "Custom Web App / E-commerce",
    price: "AED 1,999+",
    originalPrice: "AED 3,999",
    approxInr: "₹45,000+ approx",
    timeline: "1 - 2 Weeks",
    tag: "Enterprise & Scale",
    description: "Tailored portals, product showcases, booking systems, or SaaS MVPs with complete backend logic.",
    features: [
      "Dynamic database & user workflows",
      "Payment gateway integration",
      "Custom admin dashboard / CMS",
      "Multi-tier service or product listings",
      "Priority ongoing support & iterations",
      "Source code & deployment handover",
    ],
    highlight: false,
  },
];

const creativeServices = [
  {
    title: "Reels & Short Video Editing",
    price: "From AED 99 / video",
    desc: "High-retention captions, kinetic typography, b-roll cuts for Instagram, TikTok, and YouTube Shorts.",
  },
  {
    title: "Branding & Social Visuals",
    price: "From AED 249 / package",
    desc: "Premium social media templates, ad banners, logo identity, and brochures ready for print or web.",
  },
  {
    title: "Social Media Management",
    price: "From AED 499 / month",
    desc: "Content planning, post design, hashtag strategy, and brand growth management for Gulf businesses.",
  },
];

const recentProjects = [
  {
    name: "SS Fashion Photography",
    category: "Studio & Fashion Portfolio",
    link: "https://www.ssfashionphotography.com/",
    summary: "Dynamic booking portfolio with rich image showcases and multi-channel inquiry triggers.",
  },
  {
    name: "JobsScope",
    category: "AI Discovery Platform (In-House)",
    link: "https://jobsscope.in/",
    summary: "Live career platform aggregating real-time corporate opportunities with high-speed indexing.",
  },
  {
    name: "DreamSarthi",
    category: "Mobility Platform Architecture",
    link: "#",
    summary: "Women-focused ride application architecture with specialized dispatch and safety flows.",
  },
];

const uaeFaqs = [
  {
    q: "Where is DEVGRONIX based and how do we coordinate?",
    a: "Our engineering and design operations are based in Hyderabad, India, with direct Gulf timezone support (GMT+4). We coordinate smoothly via WhatsApp, email, and scheduled Google Meet calls during your working hours in Dubai, Abu Dhabi, or Riyadh.",
  },
  {
    q: "What currencies and payment terms do you offer?",
    a: "We invoice in AED, USD, and INR. Standard project terms are 50% upfront to initiate sprint development and 50% upon final staging approval before production launch.",
  },
  {
    q: "Can you build bilingual English and Arabic websites?",
    a: "Yes. Our frontend engineering architecture supports both left-to-right (LTR) English and right-to-left (RTL) Arabic typography and layout structures.",
  },
  {
    q: "Why should Gulf companies choose DEVGRONIX?",
    a: "Traditional local agencies typically charge AED 5,000 to AED 20,000 for standard websites with weeks of delay. We deliver modern, high-speed custom code (React, Tailwind) at transparent rates, with turnaround times starting in 48 to 72 hours.",
  },
];

function UaeLandingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("Business Growth Web (AED 999)");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = `*New Gulf Project Inquiry - DEVGRONIX UAE*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Location/City:* ${encodeURIComponent(city || "Dubai / UAE")}%0A*Selected Package:* ${encodeURIComponent(service)}%0A*Project Notes:* ${encodeURIComponent(details || "Looking for consultation")}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: `${phone.replace(/[^0-9]/g, "")}@gulf-inquiry.devgronix.com`,
          company: `${city || "UAE Client"}`,
          service: `UAE Package: ${service}`,
          details: `Phone: ${phone} | City: ${city} | Notes: ${details}`,
        }),
      });
    } catch {
      // Continue to WhatsApp even if email route fails
    } finally {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/917070519128?text=${waText}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* UAE Page Hero */}
      <PageHero
        badge="Dubai, Abu Dhabi & GCC Business Ready"
        title="High-Performance Web Design & Digital Growth for Gulf Businesses"
        description="Custom-coded websites, mobile web applications, and creative visual content engineered for companies across UAE & Saudi Arabia. Direct Gulf timezone collaboration (GMT+4) and transparent pricing in AED."
      />

      {/* Quick Action Strip */}
      <div className="border-y border-border bg-surface/50 py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="size-4 text-brand" />
              <span>Serving clients across UAE (Dubai, Abu Dhabi, Sharjah) & KSA (Riyadh, Jeddah)</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917070519128?text=Hello%20DEVGRONIX%20Team%2C%20I%20am%20reaching%20out%20from%20UAE%20for%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp (+91 7070519128)
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Gulf Advantages */}
      <Section className="border-b border-border">
        <SectionHeading index="01" label="Why Work With Us" title="Built for Gulf businesses needing speed & quality" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gulfPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <Reveal
                key={perk.title}
                delay={idx * 60}
                className="rounded-xl border border-border bg-surface p-6 shadow-sm transition hover:border-brand/40"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{perk.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* UAE Pricing Packages */}
      <Section id="packages" className="border-b border-border bg-surface/30">
        <SectionHeading index="02" label="Transparent Pricing" title="Transparent Packages in AED" />
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Clean fixed-price quotes. No surprise invoices, no bloated retainers. Milestone payments structured around real progress.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {uaePackages.map((pkg, idx) => (
            <Reveal
              key={pkg.name}
              delay={idx * 80}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 shadow-sm transition ${
                pkg.highlight
                  ? "border-brand bg-surface shadow-brand/10"
                  : "border-border bg-surface hover:border-border/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[0.6875rem] font-semibold ${
                      pkg.highlight ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" /> {pkg.timeline}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{pkg.description}</p>

                <div className="mt-6 border-y border-border/70 py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-foreground">{pkg.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <span className="mt-1 block text-[0.75rem] font-medium text-brand">{pkg.approxInr}</span>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-brand" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/917070519128?text=Hello%20DEVGRONIX%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    pkg.name
                  )}%20package%20(${encodeURIComponent(pkg.price)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 text-xs font-semibold transition ${
                    pkg.highlight
                      ? "bg-brand text-brand-foreground hover:bg-brand/90"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  <MessageCircle className="size-4" />
                  Inquire for {pkg.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Creative Addons */}
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h4 className="font-display text-base font-bold text-foreground">Creative & Social Retainers for Gulf Brands</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Scale your Instagram and TikTok marketing in Dubai with reliable content production.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {creativeServices.map((addon) => (
              <div key={addon.title} className="rounded-lg border border-border/80 bg-background/50 p-4">
                <div className="text-xs font-bold text-brand">{addon.price}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{addon.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{addon.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Works */}
      <Section className="border-b border-border">
        <SectionHeading index="03" label="Selected Works" title="Real client solutions delivered" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recentProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="rounded-xl border border-border bg-surface p-6">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-brand">{p.category}</span>
              <h3 className="mt-2 font-display text-base font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.summary}</p>
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  View live site <ExternalLink className="size-3" />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Direct Gulf Inquiry Form */}
      <Section id="contact" className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 sm:p-12 shadow-sm">
          <SectionHeading index="04" label="Fast Direct Inquiry" title="Get a personalized Gulf quote in minutes" />
          <p className="mt-3 text-sm text-muted-foreground">
            Fill out your project requirement below. We reply directly via WhatsApp within minutes.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-brand/40 bg-brand/10 p-6 text-center">
              <CheckCircle2 className="mx-auto size-10 text-brand" />
              <h3 className="mt-3 text-lg font-bold text-foreground">Inquiry Sent Successfully!</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                WhatsApp has opened with your project specifications. Our team will reply to you immediately.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Name or Business *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al-Mansoor / Studio Luxe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    WhatsApp Number (with country code) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai, Abu Dhabi, Riyadh"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Interested Package
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                >
                  <option value="Starter Presence (AED 499)">Starter Presence (AED 499)</option>
                  <option value="Business Growth Web (AED 999)">Business Growth Web (AED 999)</option>
                  <option value="Custom Web App / E-commerce (AED 1,999+)">Custom Web App / E-commerce (AED 1,999+)</option>
                  <option value="Video Editing Retainer">Video Editing / Reels Retainer</option>
                  <option value="Branding & Graphic Design">Branding & Graphic Design</option>
                  <option value="Custom Consultation">Custom Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Brief Project Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your brand, current website link, or goals..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90 disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="size-4" /> Send Inquiry & Connect on WhatsApp
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* UAE FAQs */}
      <Section className="border-b border-border">
        <SectionHeading index="05" label="Common Questions" title="Frequently Asked Questions (UAE & Gulf)" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {uaeFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border bg-surface p-6">
              <h4 className="font-display text-sm font-bold text-foreground">{faq.q}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
