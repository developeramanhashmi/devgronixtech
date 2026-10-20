import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Copy,
  Gift,
  HelpCircle,
  MessageCircle,
  Percent,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
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

const steps = [
  {
    step: "01",
    title: "Get Your Free Partner ID",
    desc: "Send a quick WhatsApp message to get your unique Partner ID. Takes under 1 minute with zero registration fee.",
  },
  {
    step: "02",
    title: "Share Ready Pitches & Posters",
    desc: "Use our ready-made WhatsApp status updates, posters, and pitch templates to share with friends, colleges & business owners.",
  },
  {
    step: "03",
    title: "Get Instant UPI Payouts",
    desc: "When your referral confirms their order, your commission is transferred directly to Google Pay, PhonePe, or Bank within 24 hours.",
  },
];

const perks = [
  {
    icon: Percent,
    title: "Up to 20% Commission",
    description: "Earn 20% on all website packages, 15% on bulk merchandise printing, and recurring 20% on monthly retainers.",
  },
  {
    icon: Wallet,
    title: "Instant UPI Payouts",
    description: "Direct transfer to your Google Pay, PhonePe, or Bank within 24 hours of client payment confirmation.",
  },
  {
    icon: Gift,
    title: "₹100 First Referral Bonus",
    description: "Get an extra flat ₹100 welcome bonus on your very first successful client referral on top of your commission.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Targets & Free Pitch Kit",
    description: "Ready-to-share posters and WhatsApp templates provided. No minimum sales targets, no pressure, no joining fees.",
  },
];

const commissionTiers = [
  {
    service: "Bulk Printing & Merchandise",
    rates: "10% – 15% on Bulk Orders",
    starterPrice: "₹5,000 – ₹50,000+",
    yourEarning: "₹1,000 – ₹5,000 per order",
    customEarning: "High-ticket corporate & college fest deals",
    highlight: "Highest Payout",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    service: "Web Development",
    rates: "20% on Packages / 15% on Custom",
    starterPrice: "₹999 – ₹2,499",
    yourEarning: "₹200 – ₹500 per sale",
    customEarning: "₹2,500 – ₹10,000+ per custom web app",
    highlight: "High Demand",
    badgeColor: "bg-brand/15 text-brand border-brand/20",
  },
  {
    service: "Video Editing & Reels",
    rates: "20% per Pack",
    starterPrice: "₹399 – ₹2,999",
    yourEarning: "₹80 – ₹600 per order",
    customEarning: "₹1,000 – ₹3,000+ monthly retainer",
    highlight: "Fast Turnaround",
    badgeColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
  {
    service: "Social Media Management",
    rates: "20% Recurring Monthly",
    starterPrice: "₹1,000 – ₹3,499 / mo",
    yourEarning: "₹200 – ₹700 every single month",
    customEarning: "Steady monthly passive income",
    highlight: "Recurring Monthly",
    badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
];

const readyTemplates = [
  {
    title: "Website Offer Pitch (For WhatsApp Status / Groups)",
    tag: "Most Popular",
    text: "🚀 Need a professional 1–3 Page Website for your business or personal brand? DEVGRONIX is offering complete website creation starting at just ₹999 with Free Domain & Hosting setup! 24–48h delivery. Check here: https://devgronix.com (Mention my code to get extra discount!)",
  },
  {
    title: "Custom Printing & T-Shirts (For Colleges, Offices & Events)",
    tag: "High Earning",
    text: "👕 Need Custom T-Shirts, Hoodies or Corporate Uniforms for your college fest, startup or company? DEVGRONIX does high-quality printing with Pan-India delivery at wholesale rates! Contact for free sample mockup: https://devgronix.com/services/custom-printing-branding",
  },
  {
    title: "Reels & Video Editing Pitch (For Creators & Brands)",
    tag: "Fast Sales",
    text: "🎬 Looking for trending Reels, Shorts or YouTube video editing? DEVGRONIX editors deliver high-retention edits starting from just ₹399! Check sample portfolio: https://devgronix.com/services/video-editing",
  },
];

const faqs = [
  {
    q: "Do I need any technical, coding or sales skills?",
    a: "Not at all! You only need to share our pre-made posters, links, or templates with anyone looking for websites, printing, or video editing. When they are interested, we handle all the calls, client meetings, technical work, and delivery.",
  },
  {
    q: "How will DEVGRONIX know the client was referred by me?",
    a: "When you join, you get a unique Partner ID (e.g. DG-701). When your friend or client contacts us on WhatsApp or submits our form, they simply mention your Partner ID or phone number. We link the deal to your profile immediately.",
  },
  {
    q: "When and how will I receive my commission payout?",
    a: "We pay directly via UPI (Google Pay, PhonePe, Paytm) or IMPS bank transfer within 24 hours of client payment confirmation. Zero waiting periods or monthly payout thresholds.",
  },
  {
    q: "Is there any joining fee, hidden charge, or monthly sales target?",
    a: "Zero joining fee and zero minimum targets. You can refer 1 client a month or 20 clients a month — you earn on every single deal without any restrictions.",
  },
];

function PartnerPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcTier, setCalcTier] = useState<number>(3);

  const copyPitch = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const estimatedMin = calcTier * 1200;
  const estimatedMax = calcTier * 3800;

  return (
    <div className="pt-20 md:pt-0">
      {/* ================= HERO SECTION (ALIGNED WITH DESKTOP NAVBAR) ================= */}
      <section className="relative overflow-hidden border-b border-border pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        {/* Ambient Glows */}
        <div aria-hidden="true" className="absolute inset-0 grid-field opacity-40 pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -left-20 top-10 size-96 rounded-full bg-brand/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-20 size-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        />

        {/* Outer Container matching Header */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          {/* Inner Content Padding matching Header's inner nav offset for exact alignment */}
          <div className="px-4 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Core Pitch */}
              <div className="lg:col-span-7">
                <Reveal>
                  {/* Glowing Animated Pill */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur-md shadow-xs">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand" />
                    </span>
                    <span>DEVGRONIX PARTNER NETWORK • ZERO INVESTMENT</span>
                  </div>

                  {/* High-Impact Heading */}
                  <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] leading-[1.12]">
                    Turn Your Network Into{" "}
                    <span className="bg-gradient-to-r from-brand via-orange-500 to-amber-500 bg-clip-text text-transparent">
                      Daily UPI Income
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Recommend DEVGRONIX web development, custom merchandise printing, or video editing to your network.
                    Earn <strong className="text-foreground font-semibold">up to 20% instant commission</strong> transferred
                    directly to your UPI within 24 hours.
                  </p>

                  {/* Trust Highlights Badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-foreground">
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-xs">
                      <Zap className="size-3.5 text-brand" />
                      <span>Instant UPI in 24h</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-400 shadow-xs">
                      <Gift className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>₹100 1st Referral Bonus</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-xs">
                      <ShieldCheck className="size-3.5 text-brand" />
                      <span>Zero Targets • 100% Free</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    {/* Primary Glowing WhatsApp Button */}
                    <a
                      href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I%20want%20to%20join%20the%20Partner%20Program%20and%20get%20my%20Partner%20ID."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="size-5 transition-transform group-hover:scale-110" />
                      <span>Join Partner Network (Free ID)</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    {/* Secondary Sleek Button */}
                    <a
                      href="#calculator"
                      className="interactive inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/80 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand hover:bg-surface active:scale-[0.98]"
                    >
                      <Calculator className="size-4 text-brand" />
                      <span>Calculate Earnings</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Live Partner Hub Visual Card */}
              <div className="lg:col-span-5">
                <Reveal delay={150}>
                  <div className="relative rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-7 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-surface-strong/80">
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-sm">
                          DG
                        </div>
                        <div>
                          <h2 className="text-sm font-bold text-foreground">DEVGRONIX Partner Hub</h2>
                          <p className="text-[11px] text-muted-foreground">ID: DG-PARTNER-LIVE</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Verified Active
                      </span>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-border/60 bg-background/80 p-3.5">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Commission Rate</span>
                        <p className="mt-1 font-display text-xl font-bold text-brand">Up to 20%</p>
                        <span className="text-[10px] text-muted-foreground">On Every Deal</span>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-background/80 p-3.5">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Avg. Payout Time</span>
                        <p className="mt-1 font-display text-xl font-bold text-emerald-600 dark:text-emerald-400">&lt; 24 Hours</p>
                        <span className="text-[10px] text-muted-foreground">Direct UPI / Bank</span>
                      </div>
                    </div>

                    {/* Live Simulated Payout Stream */}
                    <div className="mt-5 space-y-2.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Recent Verified Payouts
                      </span>

                      <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/60 px-3.5 py-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-emerald-500/10 p-1.5 text-emerald-600">👕</span>
                          <div>
                            <p className="font-semibold text-foreground">Bulk Merch &amp; T-Shirts (150 pcs)</p>
                            <p className="text-[10px] text-muted-foreground">College Fest Order</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">+₹3,200</span>
                          <p className="text-[9px] text-muted-foreground">UPI Paid ✓</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/60 px-3.5 py-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-brand/10 p-1.5 text-brand">🌐</span>
                          <div>
                            <p className="font-semibold text-foreground">Business Website (₹2,499)</p>
                            <p className="text-[10px] text-muted-foreground">Local Business Client</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-brand">+₹500</span>
                          <p className="text-[9px] text-muted-foreground">UPI Paid ✓</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/60 px-3.5 py-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-amber-500/10 p-1.5 text-amber-600">🎁</span>
                          <div>
                            <p className="font-semibold text-foreground">Welcome 1st Referral Bonus</p>
                            <p className="text-[10px] text-muted-foreground">New Partner Bonus</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-amber-600 dark:text-amber-400">+₹100</span>
                          <p className="text-[9px] text-muted-foreground">Bonus Credited ✓</p>
                        </div>
                      </div>
                    </div>

                    {/* Supported UPI Providers footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                      <span>Supported: GPay • PhonePe • Paytm • IMPS</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Payout Rate</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3-STEP EASY PROCESS ================= */}
      <Section className="border-b border-border bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Start Earning in 3 Simple Steps"
            description="You don't need to sell aggressively. Just share our posters or links, and we handle all client calls, technical work, and deliveries."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 font-display text-lg font-bold text-brand">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= INTERACTIVE EARNINGS CALCULATOR ================= */}
      <Section id="calculator" className="border-b border-border">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/80 bg-surface p-6 sm:p-10 shadow-lg">
            <SectionHeading
              align="center"
              eyebrow="Interactive Estimator"
              title="How Much Can You Earn Every Month?"
              description="See how a few recommendations in your college, WhatsApp groups, or business network translate into monthly UPI earnings."
            />

            {/* Referral volume selector */}
            <div className="mt-8 flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                How many clients can you refer each month?
              </span>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {[1, 3, 5, 10].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setCalcTier(count)}
                    className={`interactive rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                      calcTier === count
                        ? "bg-brand text-white shadow-md scale-105"
                        : "border border-border bg-background text-foreground hover:border-brand"
                    }`}
                  >
                    {count} {count === 1 ? "Client" : "Clients"} / mo
                  </button>
                ))}
              </div>

              {/* Dynamic Estimated Earnings Display */}
              <div className="mt-8 w-full max-w-lg rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Estimated Monthly Payout Directly to UPI
                </span>
                <div className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                  ₹{estimatedMin.toLocaleString("en-IN")} – ₹{estimatedMax.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-muted-foreground"> / month</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Based on a mix of Web Development, Custom Printing orders, and Creative services + ₹100 1st deal bonus.
                </p>

                <a
                  href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I%20want%20to%20start%20referring%20clients%20and%20earn%20commissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700"
                >
                  <MessageCircle className="size-4" />
                  <span>Start Earning Now on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= PERKS GRID ================= */}
      <Section className="border-b border-border bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Why Partner With DEVGRONIX"
            title="Zero Hassle. Direct Bank / UPI Transfers."
            description="You don't need technical skills. Just connect people who need websites, corporate T-shirts or video editing, and our team handles everything."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm hover:border-brand/30 transition-all">
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

      {/* ================= COMMISSION RATES TABLE ================= */}
      <Section className="border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Transparent Earning Rates"
            title="How Much Do You Earn Per Service?"
            description="Clear commission tiers with zero hidden deductions. As soon as the client makes payment, you receive your commission."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commissionTiers.map((tier) => (
              <div
                key={tier.service}
                className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <span className={`inline-block rounded-full border px-2.5 py-1 text-[11px] font-semibold ${tier.badgeColor}`}>
                    {tier.highlight}
                  </span>
                  <h4 className="mt-3 font-bold text-foreground text-base">{tier.service}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{tier.rates}</p>
                  <div className="mt-4 border-t border-border/60 pt-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Standard Commission</span>
                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">{tier.yourEarning}</p>
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

      {/* ================= READY PITCH TEMPLATES SECTION ================= */}
      <Section id="templates" className="border-b border-border bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Ready-to-Use WhatsApp Kit"
            title="Copy, Share & Start Earning"
            description="Don't know what to write? Copy these pre-tested messages and share them on your WhatsApp Status, Instagram Story, or college & office groups."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {readyTemplates.map((item, idx) => (
              <div key={item.title} className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="mt-2 font-semibold text-sm text-foreground">{item.title}</h4>
                  <p className="mt-3 rounded-xl border border-border/80 bg-background p-4 text-xs leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyPitch(item.text, idx)}
                    className="interactive flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/20 active:scale-98"
                  >
                    <Copy className="size-3.5" />
                    <span>{copiedIndex === idx ? "Copied! ✓" : "Copy Text"}</span>
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(item.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive inline-flex items-center justify-center size-9 rounded-xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"
                    title="Share directly on WhatsApp"
                  >
                    <Share2 className="size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= FAQ SECTION ================= */}
      <Section className="border-b border-border">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about payments, client tracking, and how our partner program operates."
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border bg-surface overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground text-sm sm:text-base hover:text-brand transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/60 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-brand/10 via-background to-emerald-500/10">
        <Container className="text-center">
          <div className="mx-auto max-w-2xl">
            <span className="rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand">
              Instant Setup in 2 Minutes
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold text-foreground">
              Ready to Start Earning with DEVGRONIX?
            </h2>
            <p className="mt-3 text-xs sm:text-base text-muted-foreground">
              Send us a message on WhatsApp, get your free Partner ID, and get access to all posters and pitch materials immediately.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/917070519128?text=Hi%20DEVGRONIX,%20I'm%20ready%20to%20join%20the%20Partner%20Program."
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Join Now via WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
