import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
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
        "Join DEVGRONIX Partner Program. Refer clients for websites, custom merchandise printing, or video editing and earn up to 20% instant UPI payouts + ₹100 welcome bonus.",
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
    description: "Earn 20% on all website packages, 15% on bulk merchandise printing, and recurring 20% on monthly retainers.",
  },
  {
    icon: Wallet,
    title: "Instant UPI Payouts",
    description: "Direct transfer to your Google Pay, PhonePe, or Bank within 24 hours of client payment.",
  },
  {
    icon: Gift,
    title: "₹100 First Referral Bonus",
    description: "Get a flat ₹100 welcome bonus on your very first successful client referral on top of your commission.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Targets & Free Pitch Kit",
    description: "Ready-to-share posters and WhatsApp templates provided. No targets, no joining fees.",
  },
];

const commissionTiers = [
  {
    service: "Bulk Printing & Merchandise",
    rates: "10% – 15% on Bulk Orders",
    starterPrice: "₹5,000 – ₹50,000+",
    yourEarning: "₹1,000 – ₹5,000 per order",
    customEarning: "High-ticket corporate deals",
    highlight: "Big Payouts",
  },
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
    highlight: "Fast Sales",
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

const readyTemplates = [
  {
    title: "Website Offer Pitch (For WhatsApp Status / Groups)",
    text: "🚀 Need a professional 1–3 Page Website for your business or personal brand? DEVGRONIX is offering complete website creation starting at just ₹999 with Free Domain & Hosting setup! 24–48h delivery. Check here: https://devgronix.com (Mention my code to get extra discount!)",
  },
  {
    title: "Custom Printing & T-Shirts (For Colleges, Offices & Events)",
    text: "👕 Need Custom T-Shirts, Hoodies or Corporate Uniforms for your college fest, startup or company? DEVGRONIX does high-quality printing with Pan-India delivery at wholesale rates! Contact for free sample mockup: https://devgronix.com/services/custom-printing-branding",
  },
];

function PartnerPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyPitch = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="pt-20 md:pt-0">
      <PageHero
        label="Earn With DEVGRONIX"
        title="Partner & Referral Program"
        description="Recommend our website development, custom printing or design services to your network and earn up to 20% instant UPI commission on every client."
      >
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I%20want%20to%20join%20the%20Partner%20Program%20and%20get%20my%20Partner%20ID."
            target="_blank"
            rel="noopener noreferrer"
            className="interactive inline-flex items-center gap-2 rounded-full bg-chart-3 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            <span>Join via WhatsApp (Get Partner ID)</span>
          </a>
          <a
            href="#templates"
            className="interactive inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-brand"
          >
            <span>View Ready Pitch Kit</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </PageHero>

      {/* Perks Grid */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Zero Hassle. Direct UPI Transfers."
            description="You don't need technical skills. Just connect clients who need websites, corporate T-shirts or design, and we handle everything from build to delivery."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{perk.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Commission Rates Table */}
      <Section className="border-t border-border bg-surface/50">
        <Container>
          <SectionHeading
            eyebrow="Transparent Earning Rates"
            title="How Much Can You Earn?"
            description="Clear commission tiers with no hidden deductions. When the client pays, you get your share immediately."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commissionTiers.map((tier) => (
              <div key={tier.service} className="relative flex flex-col justify-between rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                    {tier.highlight}
                  </span>
                  <h4 className="mt-3 font-bold text-foreground">{tier.service}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{tier.rates}</p>
                  <div className="mt-4 border-t border-border/60 pt-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Standard Commission</span>
                    <p className="text-base font-bold text-chart-3">{tier.yourEarning}</p>
                  </div>
                  <div className="mt-2">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">High-Ticket / Bulk</span>
                    <p className="text-xs font-semibold text-foreground">{tier.customEarning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ready Pitch Templates Section */}
      <Section id="templates" className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Ready-to-Use WhatsApp Kit"
            title="Copy, Share & Start Earning"
            description="Don't know what to write? Copy these pre-written messages and share them on your WhatsApp Status, Instagram Story, or college groups."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {readyTemplates.map((item, idx) => (
              <div key={item.title} className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                  <p className="mt-3 rounded-xl border border-border/80 bg-background p-4 text-xs leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyPitch(item.text, idx)}
                  className="interactive mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/20 active:scale-98"
                >
                  <Copy className="size-3.5" />
                  <span>{copiedIndex === idx ? "Copied to Clipboard! ✓" : "Copy WhatsApp Pitch"}</span>
                </button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
