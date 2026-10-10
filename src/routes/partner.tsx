import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Gift,
  HelpCircle,
  MessageCircle,
  Percent,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partner")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "Partner & Referral Program | Earn up to 20% Commission | DEVGRONIX",
      description:
        "Join the DEVGRONIX Affiliate & Referral Program. Refer clients for website development, graphic design, or video editing and earn up to 20% instant UPI payouts.",
      path: "/partner",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partner Program", path: "/partner" },
        ]),
      ]),
    ],
  }),
  component: PartnerPage,
});

const perks = [
  {
    icon: Percent,
    title: "Up to 20% Commission",
    description: "Earn 20% on all starter and growth packages, and 15% on high-ticket custom apps and e-commerce projects.",
  },
  {
    icon: Wallet,
    title: "Instant UPI Payouts",
    description: "No waiting for monthly pay cycles. Receive payments directly to your Google Pay, PhonePe, or Bank within 24 hours.",
  },
  {
    icon: Gift,
    title: "Exclusive Client Discounts",
    description: "Your referred clients get a 10% discount or free bonus services, making closing deals effortless for you.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Fees & Zero Targets",
    description: "Free to join forever. No minimum monthly sales targets and no complex restrictions.",
  },
];

const commissionTiers = [
  {
    service: "Web Development",
    rates: "20% on Packages / 15% on Custom",
    starterPrice: "₹999 – ₹2,499",
    yourEarning: "₹200 – ₹500 per sale",
    customEarning: "₹2,500 – ₹10,000+ per custom app",
    highlight: "High Demand",
  },
  {
    service: "Video Editing & Reels",
    rates: "20% per Pack",
    starterPrice: "₹399 – ₹2,999",
    yourEarning: "₹80 – ₹600 per order",
    customEarning: "₹1,000 – ₹3,000+ monthly retainer",
    highlight: "Fast Turnaround",
  },
  {
    service: "Graphic Design",
    rates: "20% per Project",
    starterPrice: "₹99 – ₹999",
    yourEarning: "₹20 – ₹200 per order",
    customEarning: "₹1,500+ on complete branding",
    highlight: "Daily Sales",
  },
  {
    service: "Social Media Management",
    rates: "20% Recurring Monthly",
    starterPrice: "₹1,000 – ₹3,499 / mo",
    yourEarning: "₹200 – ₹700 every single month",
    customEarning: "Passive monthly income",
    highlight: "Recurring Income",
  },
];

const steps = [
  {
    step: "01",
    title: "Get Your Partner ID",
    description: "Connect with our team via WhatsApp or the form below to receive your unique partner ID and referral pitch kit.",
  },
  {
    step: "02",
    title: "Refer Clients & Friends",
    description: "Recommend DEVGRONIX to local businesses, startups, creators, or friends who need digital presence.",
  },
  {
    step: "03",
    title: "We Build, You Earn",
    description: "Our development team handles client delivery end-to-end. Once the client pays, your commission is sent directly via UPI.",
  },
];

const faqs = [
  {
    q: "How do I get paid?",
    a: "We transfer your earnings directly to your Google Pay, PhonePe, Paytm, or Bank Account within 24 hours of client payment.",
  },
  {
    q: "How does DEVGRONIX know the client was referred by me?",
    a: "When you join, you receive a Partner ID. When clients message us with your ID or link, we attribute the project to you immediately.",
  },
  {
    q: "Can I refer custom web development or mobile apps?",
    a: "Yes! High-ticket custom projects (₹25,000 – ₹1,00,000+) earn 15% commission, meaning you can make ₹3,500 to ₹15,000 from a single referral.",
  },
  {
    q: "Is there any joining fee?",
    a: "No, joining the DEVGRONIX partner network is 100% free.",
  },
];

function PartnerPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [upi, setUpi] = useState("");
  const [source, setSource] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const summary = [
      "👋 Hi DEVGRONIX, I want to join the Affiliate / Partner Program:",
      `- Name: ${name.trim()}`,
      `- WhatsApp: ${phone.trim()}`,
      `- UPI ID (Optional): ${upi.trim() || "Not provided"}`,
      `- How I will refer: ${source.trim() || "Friends & Local businesses"}`,
    ].join("\n");

    // Send copy to admin inbox via contact route
    void fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: "partner@devgronix.in",
        company: "Partner Registration",
        service: "Referral Program",
        description: `Phone: ${phone.trim()} | UPI: ${upi.trim()} | Source: ${source.trim()}`,
      }),
    }).catch(() => {});

    // Open WhatsApp prefilled
    window.open(`https://wa.me/917070519128?text=${encodeURIComponent(summary)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        label="Affiliate & Partner Program"
        title="Earn up to 20% on every client you refer."
        description="Recommend DEVGRONIX for websites, apps, graphic design, and video editing. We handle the entire design and delivery, while you get direct UPI payouts."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I%20want%20to%20join%20your%20Affiliate%20Partner%20Program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground interactive hover:opacity-90 shadow-lg shadow-brand/20"
          >
            <MessageCircle className="size-4" />
            Apply on WhatsApp
          </a>
          <a
            href="#earnings"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground interactive hover:border-brand hover:text-brand"
          >
            View Commission Rates
            <ArrowRight className="size-4" />
          </a>
        </div>
      </PageHero>

      {/* Perks Grid */}
      <Section className="border-b border-border bg-surface/30">
        <SectionHeading index="01" label="Partner Perks" title="Why partner with DEVGRONIX?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 60} className="rounded-xl border border-border bg-surface p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Commission Breakdown */}
      <Section id="earnings" className="border-b border-border">
        <SectionHeading index="02" label="Transparent Earnings" title="What can you make?" />
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Clear, upfront commissions with zero hidden terms. Payouts are made within 24 hours of receiving the client's payment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {commissionTiers.map((tier, idx) => (
            <Reveal
              key={tier.service}
              delay={idx * 70}
              className="relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-sm"
            >
              <div>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-brand">
                  {tier.highlight}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{tier.service}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Starting price: {tier.starterPrice}</p>

                <div className="mt-5 rounded-lg border border-border/80 bg-background/60 p-3.5">
                  <span className="text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">
                    Your Commission
                  </span>
                  <p className="mt-0.5 text-base font-bold text-brand">{tier.rates}</p>
                  <p className="mt-1 text-xs text-foreground font-medium">{tier.yourEarning}</p>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  <strong className="text-foreground">Custom scope:</strong> {tier.customEarning}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 Step Process */}
      <Section className="border-b border-border bg-surface/30">
        <SectionHeading index="03" label="Simple Process" title="How the partnership works in 3 steps" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((st, i) => (
            <Reveal key={st.step} delay={i * 80} className="rounded-xl border border-border bg-surface p-7">
              <span className="font-display text-2xl font-black text-brand">{st.step}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{st.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quick Application Form */}
      <Section className="border-b border-border">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <SectionHeading index="04" label="Join Network" title="Register as an official partner" />
          <p className="mt-3 text-sm text-muted-foreground">
            Fill your details below to activate your Partner ID immediately via WhatsApp.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-brand/40 bg-brand/10 p-6 text-center">
              <CheckCircle2 className="mx-auto size-10 text-brand" />
              <h3 className="mt-3 text-lg font-bold text-foreground">Application Sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                WhatsApp has opened with your registration details. Check your chat to connect with our coordinator and receive your Partner ID.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  UPI ID for Payouts (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. yourname@okhdfcbank"
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  How do you plan to refer?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Friends, college circle, clients, Instagram"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-sm font-semibold text-brand-foreground interactive hover:opacity-90"
              >
                <Send className="size-4" />
                Submit &amp; Connect on WhatsApp
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* FAQs */}
      <Section className="border-b border-border bg-surface/30">
        <SectionHeading index="05" label="Common Questions" title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Reveal key={faq.q} className="rounded-xl border border-border bg-surface p-6">
              <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                <HelpCircle className="size-4 text-brand shrink-0" />
                {faq.q}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
