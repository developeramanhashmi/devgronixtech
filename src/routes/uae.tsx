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
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, organizationSchema, seoHead, SITE_URL } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/uae")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Affordable Web Design & Development Agency Dubai, UAE & Saudi | DEVGRONIX",
      description:
        "High-speed websites, custom admin portals, video editing & branding for businesses across Dubai, Abu Dhabi, Sharjah & Riyadh. Packages from AED 249.",
      path: "/uae",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "UAE & Gulf Services", path: "/uae" },
        ]),
        {
          "@type": "Service",
          "@id": `${SITE_URL}/uae#service`,
          name: "Web Development & Digital Growth Services UAE & Gulf",
          serviceType: "Web Design, Software Engineering, Branding & Video Editing",
          provider: organizationSchema,
          areaServed: [
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Abu Dhabi" },
            { "@type": "City", name: "Sharjah" },
            { "@type": "City", name: "Riyadh" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Saudi Arabia" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Gulf Web & Digital Packages",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Starter Presence Website",
                  description: "High-impact single-page mobile website with WhatsApp lead capture.",
                },
                price: "249",
                priceCurrency: "AED",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Business Growth Corporate Web",
                  description: "Complete 5-page custom business website with speed optimization & email notifications.",
                },
                price: "599",
                priceCurrency: "AED",
              },
            ],
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How fast can DEVGRONIX launch a website for a UAE business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Starter Presence websites launch in 48 to 72 hours, while complete 5-page corporate websites are delivered within 4 to 7 business days.",
              },
            },
            {
              "@type": "Question",
              name: "Do you accept payment in UAE Dirhams (AED) or Saudi Riyals (SAR)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we bill transparently in AED, SAR, and USD with milestone-based invoicing (50% advance, 50% upon final launch).",
              },
            },
            {
              "@type": "Question",
              name: "How do Gulf clients communicate during project delivery?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We operate aligned with Gulf business hours (GMT+4) with direct WhatsApp and Google Meet support throughout development.",
              },
            },
          ],
        },
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
    price: "AED 249",
    originalPrice: "AED 499",
    approxInr: "₹6,500 approx",
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
    price: "AED 599",
    originalPrice: "AED 999",
    approxInr: "₹15,600 approx",
    timeline: "4 - 7 Days",
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
    price: "From AED 29 / video",
    desc: "High-retention captions, kinetic typography, b-roll cuts for Instagram, TikTok, and YouTube Shorts.",
  },
  {
    title: "Branding & Social Visuals",
    price: "From AED 99 / package",
    desc: "Premium social media templates, ad banners, logo identity, and brochures ready for print or web.",
  },
  {
    title: "Social Media Management",
    price: "From AED 99 / month",
    desc: "Content planning, post design, hashtag strategy, and brand growth management for Gulf businesses.",
  },
];

interface ClientProject {
  name: string;
  category: string;
  market: string;
  badge: string;
  link: string;
  summary: string;
  features: string[];
}

const recentProjects: ClientProject[] = [
  {
    name: "Lightngear Trading LLC",
    category: "Commercial Lighting E-Commerce",
    market: "Dubai, UAE",
    badge: "E-Commerce & RFQ",
    link: "https://www.devgronix.in",
    summary:
      "Amazon-style architectural lighting platform with beam angle & wattage filters, multi-item quotation cart, admin inventory control, and WhatsApp dispatch.",
    features: ["Faceted Catalog Filter", "Admin Panel", "WhatsApp Quotations", "Dubai GBP Localized"],
  },
  {
    name: "SIAAN Total Services",
    category: "General Contracting & MEP Portal",
    market: "Riyadh, Saudi Arabia",
    badge: "Enterprise Industrial",
    link: "https://www.siaantotalservices.com/",
    summary:
      "Turnkey industrial portal for civil construction, heavy machinery fleet directory, manpower requisition workflows, and custom backend dashboard.",
    features: ["Heavy Equipment Directory", "Admin Dashboard", "RFP Lead System", "Saudi Local SEO"],
  },
  {
    name: "ScholarHope Corp",
    category: "Global Education & Grant Platform",
    market: "International / Gulf Grants",
    badge: "Web Application",
    link: "https://www.scholar.devgronix.com",
    summary:
      "Global scholarship discovery portal with eligibility evaluation engines, document verification pipelines, and administrative student management.",
    features: ["Grant Eligibility Engine", "Admin Student Manager", "Application Workflow", "Fast Cloud Speed"],
  },
  {
    name: "Karnataka Bearing Agency",
    category: "Industrial Machinery & Supply Catalog",
    market: "Industrial B2B",
    badge: "Commercial Catalog",
    link: "https://www.bearingshop.in",
    summary:
      "B2B industrial catalog with dimensional bore/diameter search, multi-brand OEM inventory management, and direct WhatsApp RFQ dispatch.",
    features: ["Technical Spec Search", "Admin Stock System", "Multi-brand Showcase", "Instant RFQ"],
  },
  {
    name: "Periyapalayam Rooms",
    category: "Hotel Booking & Room Engine",
    market: "Hospitality & Travel",
    badge: "Booking Engine",
    link: "https://www.periyapalayamrooms.in/",
    summary:
      "Zero-commission direct room reservation platform with live availability calendar, automated booking tokens, and mobile customer dispatch.",
    features: ["Direct Room Reservation", "Live Availability", "Zero Commission", "Mobile Optimized"],
  },
  {
    name: "SS Fashion Photography",
    category: "Creative Editorial & Studio Portfolio",
    market: "Studio & Media",
    badge: "Visual Showcase",
    link: "https://www.ssfashionphotography.com/",
    summary:
      "High-fashion editorial showcase with high-resolution responsive galleries, shoot inquiry flow, and cross-channel booking triggers.",
    features: ["Edge-to-Edge Galleries", "Booking Inquiries", "Ultra-Fast Load", "Mobile-First"],
  },
  {
    name: "DEVGRONIX Custom Printing & Merchandise",
    category: "Corporate Branding & Apparel",
    market: "B2B Merchandising",
    badge: "Brand Identity",
    link: "https://www.devgronix.com/services/custom-printing-branding",
    summary:
      "Corporate apparel, embroidery, premium stationery, packaging, and custom promotional merchandise with fast WhatsApp bulk estimation.",
    features: ["Corporate Uniforms", "Instant Bulk Quotes", "Branding Design", "Packaging Solutions"],
  },
  {
    name: "JobsScope Platform",
    category: "AI Career & Recruitment Aggregator",
    market: "Technology & Hiring",
    badge: "In-House SaaS",
    link: "https://jobsscope.in/",
    summary:
      "High-speed career intelligence platform aggregating real-time corporate opportunities with fast indexing and automated candidate routing.",
    features: ["Live Opportunity Aggregator", "Dynamic Filters", "High-Volume Indexing", "Cloud Architecture"],
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
  const [service, setService] = useState("Starter Presence (AED 249)");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = `*New Gulf Project Inquiry - DEVGRONIX UAE*%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Location/City:* ${encodeURIComponent(
      city || "Dubai / UAE"
    )}%0A*Selected Package:* ${encodeURIComponent(service)}%0A*Project Notes:* ${encodeURIComponent(
      details || "Looking for consultation"
    )}`;

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
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
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

      {/* Featured Works - Complete Showcase */}
      <Section className="border-b border-border">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionHeading index="03" label="Selected Works" title="Live Client Platforms Delivered" />
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Inspect verified client production portals, e-commerce engines, and corporate websites built with custom code, admin dashboards, and zero bloated templates.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1.5 text-xs font-medium text-brand">
            <Sparkles className="size-3.5" />
            <span>8 Live Production Systems</span>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-surface/50 p-3 text-center">
            <span className="font-display text-lg font-bold text-foreground">100%</span>
            <p className="text-[0.6875rem] text-muted-foreground">Live Deployments</p>
          </div>
          <div className="rounded-lg border border-border bg-surface/50 p-3 text-center">
            <span className="font-display text-lg font-bold text-brand">GMT+4</span>
            <p className="text-[0.6875rem] text-muted-foreground">Gulf Timezone Support</p>
          </div>
          <div className="rounded-lg border border-border bg-surface/50 p-3 text-center">
            <span className="font-display text-lg font-bold text-foreground">48-72h</span>
            <p className="text-[0.6875rem] text-muted-foreground">Quick Turnaround</p>
          </div>
          <div className="rounded-lg border border-border bg-surface/50 p-3 text-center">
            <span className="font-display text-lg font-bold text-brand">Direct</span>
            <p className="text-[0.6875rem] text-muted-foreground">WhatsApp Handoff</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {recentProjects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 50}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-brand">
                    {p.badge}
                  </span>
                  <span className="text-[0.6875rem] font-medium text-muted-foreground">{p.market}</span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-foreground group-hover:text-brand transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1 text-[0.6875rem] font-medium text-brand/90">{p.category}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.summary}</p>

                {/* Feature Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded border border-border/80 bg-background/60 px-2 py-0.5 text-[0.625rem] text-muted-foreground"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:border-brand hover:bg-brand hover:text-brand-foreground"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
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
                  <option value="Starter Presence (AED 249)">Starter Presence (AED 249)</option>
                  <option value="Business Growth Web (AED 599)">Business Growth Web (AED 599)</option>
                  <option value="Custom Web App / E-commerce (AED 1,999+)">Custom Web App / E-commerce (AED 1,999+)</option>
                  <option value="Reels & Short Video Editing (From AED 29/video)">Reels & Short Video Editing (From AED 29/video)</option>
                  <option value="Branding & Social Visuals (From AED 99)">Branding & Social Visuals (From AED 99)</option>
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
