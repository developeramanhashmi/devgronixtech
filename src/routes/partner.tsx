import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Copy,
  ExternalLink,
  Gift,
  HelpCircle,
  Laptop,
  Layers,
  MessageCircle,
  Percent,
  Printer,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Video,
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
      title: "Partner & Referral Program | Earn up to 20% + Monthly Recurring UPI | DEVGRONIX",
      description:
        "Join DEVGRONIX Partner Program. Refer clients for websites, custom merchandise, video editing, and cloud software (Library, Ledger, Staff, CRM). Earn up to 20% instant UPI payouts + lifetime monthly recurring income.",
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

/* ================= DATA & CONSTANTS ================= */

const steps = [
  {
    step: "01",
    title: "Get Your Free Partner ID",
    desc: "Fill the 1-minute form below to receive your verified Partner ID directly on WhatsApp. 100% free with zero registration fee.",
  },
  {
    step: "02",
    title: "Share Ready Posters & Pitches",
    desc: "Use our pre-designed posters, status banners, and ready-made WhatsApp copy across your contacts, college fests, and local shopkeepers.",
  },
  {
    step: "03",
    title: "Receive Instant UPI & Recurring Income",
    desc: "Get commissions credited directly to your UPI ID (GPay/PhonePe/Paytm) within 24h, plus 20% recurring monthly income on software subscriptions.",
  },
];

const perks = [
  {
    icon: Percent,
    title: "Up to 20% Direct Commission",
    description: "Earn 20% on all website packages, 15% on bulk merchandise printing, and 20% on monthly creative retainers.",
  },
  {
    icon: TrendingUp,
    title: "Monthly Recurring SaaS Income",
    description: "Refer businesses to DEVGRONIX Cloud Software (Library, Ledger, Staff, CRM) and earn 20% recurring revenue every month/year.",
  },
  {
    icon: Wallet,
    title: "Instant 24-Hour UPI Transfers",
    description: "Direct payouts to Google Pay, PhonePe, Paytm or Bank within 24 hours of client confirmation with zero payout hold.",
  },
  {
    icon: Gift,
    title: "₹100 First Referral Bonus",
    description: "Get an extra flat ₹100 welcome bonus credited on your very first successful client deal on top of your full commission.",
  },
];

// New DEVGRONIX In-House Software Products
const softwareProducts = [
  {
    id: "prod-lib",
    title: "Smart Library Management",
    target: "Private Reading Rooms, Study Libraries & Coaching",
    highlights: "Seat booking, shift management, fee dues & automated WhatsApp reminders",
    price: "Affordable Monthly / Yearly Plan",
    partnerIncome: "20% Recurring Commission every renewal",
    icon: BookOpen,
    badge: "High Demand",
  },
  {
    id: "prod-ledger",
    title: "Digital Ledger & Khata Book",
    target: "Retail Shops, Distributors & Local Vendors",
    highlights: "Customer credit tracking, instant balance SMS/WhatsApp & one-click PDF statements",
    price: "Lowest Market Price / mo",
    partnerIncome: "20% Monthly Recurring Payout",
    icon: Laptop,
    badge: "Easy Sell",
  },
  {
    id: "prod-staff",
    title: "Staff Attendance & Payroll",
    target: "Offices, Retail Showrooms, Clinics & Restaurants",
    highlights: "Daily biometric/mobile check-in, leave approvals & automated salary slip calculations",
    price: "Small Business Friendly",
    partnerIncome: "20% Steady Recurring Income",
    icon: Users,
    badge: "Essential Tool",
  },
  {
    id: "prod-crm",
    title: "CRM & WhatsApp Lead Automation",
    target: "Service Agencies, Real Estate & Direct Sellers",
    highlights: "Centralized lead capture, follow-up scheduler & automated click-to-WhatsApp chats",
    price: "Value Tier / mo",
    partnerIncome: "20% High-Value Recurring Revenue",
    icon: Zap,
    badge: "Growing Fast",
  },
];

// Ready-to-Use Visual Marketing Posters
const marketingPosters = [
  {
    id: "poster-web",
    title: "₹999 Website Launch Special",
    category: "Websites & Digital Presence",
    badge: "Top Seller",
    gradient: "from-brand/20 via-orange-500/10 to-surface",
    color: "text-brand border-brand/30",
    features: ["1–3 Pages Modern Website", "24–48h Fast Delivery", "Mobile & SEO Friendly", "Click-to-WhatsApp Chat"],
    caption:
      "🚀 Need a modern website for your shop, clinic, or business? DEVGRONIX is offering complete professional websites starting at just ₹999 with 24h delivery & WhatsApp integration! Check live work at https://devgronix.com or WhatsApp +91 70705 19128",
  },
  {
    id: "poster-print",
    title: "College Fest & Corporate Merch",
    category: "Custom Printing & Apparel",
    badge: "Bulk Deals",
    gradient: "from-emerald-500/20 via-teal-500/10 to-surface",
    color: "text-emerald-500 border-emerald-500/30",
    features: ["Custom Hoodies, T-Shirts & Polos", "Branded Mugs, Caps & Lanyards", "Luxury Visiting Cards & Packaging", "Doorstep All-India Delivery"],
    caption:
      "👕 Planning a College Fest, startup event, or company merchandise? DEVGRONIX provides premium custom printed T-shirts, hoodies, mugs & business cards with low minimums & door delivery! Message WhatsApp: +91 70705 19128 or visit https://devgronix.com/services/custom-printing-branding",
  },
  {
    id: "poster-video",
    title: "Viral Reels & Video Editing",
    category: "Creator & Social Media",
    badge: "Starts ₹399",
    gradient: "from-indigo-500/20 via-purple-500/10 to-surface",
    color: "text-indigo-400 border-indigo-500/30",
    features: ["Instagram Reels & YouTube Shorts", "Dynamic Subtitles & SFX", "Podcast Highlights & Color Grading", "Fast 24-Hour Turnaround"],
    caption:
      "🎬 Looking for professional Instagram Reels or YouTube Shorts editing? Get high-retention cuts, animations, subtitles & sound design starting at ₹399 per video! Check portfolio at https://devgronix.com or DM WhatsApp: +91 70705 19128",
  },
  {
    id: "poster-saas",
    title: "Cloud Software & Khata Apps",
    category: "Business Software Subscriptions",
    badge: "Recurring Income",
    gradient: "from-blue-500/20 via-cyan-500/10 to-surface",
    color: "text-blue-400 border-blue-500/30",
    features: ["Smart Library Seat & Fee Manager", "Digital Khata & Udhaar Tracker", "Staff Attendance & Payroll System", "WhatsApp CRM & Lead Pipeline"],
    caption:
      "💼 Upgrade your business with DEVGRONIX Cloud Software! Easy-to-use Library Management, Digital Khata Book, Staff Attendance & CRM tools at India's most affordable subscription rates. Book a free demo on WhatsApp: +91 70705 19128 or visit https://devgronix.com",
  },
];

// Targeted Pitch Scripts for Direct Messaging
const readyPitchScripts = [
  {
    title: "For Local Shopkeepers & Small Business Owners",
    target: "Shops, Showrooms, Doctors & Local Services",
    tag: "High Conversion",
    text: "Namaste! Agar aap apne business ya shop ko Google par laana chahte hain ya ek modern website banwana chahte hain jahan se customers directly WhatsApp par message karein, to DEVGRONIX sirf ₹999 se websites create kar raha hai with domain, hosting & Google setup included. Unka live work yahan dekh sakte hain: https://devgronix.com ya WhatsApp par direct contact karein: +91 70705 19128 (Mention Partner ID)",
  },
  {
    title: "For College Fest Organizers & Clubs",
    target: "College Students, Event Heads & Societies",
    tag: "Bulk Orders",
    text: "Hey! If your college club, society, or department is planning custom printed T-shirts, hoodies, ID cards, or fest merchandise, DEVGRONIX is offering top-grade bio-washed apparel printing at wholesale factory rates with sample preview & fast delivery. Check details: https://devgronix.com/services/custom-printing-branding or ping them on WhatsApp at +91 70705 19128",
  },
  {
    title: "For Content Creators & Influencers",
    target: "Instagram Creators, Coaches & YouTubers",
    tag: "Monthly Retainer",
    text: "Hey! Saw your content and wanted to share a great resource—DEVGRONIX offers dedicated Reel and Short editing (hook animations, viral captions, B-rolls & sound effects) starting at just ₹399/video or affordable monthly packs. Check their work: https://devgronix.com or WhatsApp them at +91 70705 19128",
  },
  {
    title: "For Study Libraries, Institutes & Offices (Software)",
    target: "Private Reading Libraries, Coaching & Small Offices",
    tag: "New Software",
    text: "Hello! Agar aap apni Library ke seat/fee management, staff attendance ya daily business ledger (khata) ke liye ek safe aur bohot sasta cloud software chahte hain, to DEVGRONIX ke naye management systems check karein. Zero technical setup, 100% mobile friendly aur monthly/yearly plans bohot hi kam price mein hain. Free demo ke liye WhatsApp karein: +91 70705 19128",
  },
];

const commissionTiers = [
  {
    service: "SaaS Software Subscriptions",
    rates: "20% Lifetime Recurring Commission",
    starterPrice: "Affordable Monthly / Yearly Plans",
    yourEarning: "20% of every renewal, every month/year",
    customEarning: "Builds compounding passive income",
    highlight: "Monthly Recurring",
    badgeColor: "bg-blue-500/15 text-blue-500 border-blue-500/20",
  },
  {
    service: "Bulk Printing & Merchandise",
    rates: "10% – 15% on Bulk Orders",
    starterPrice: "₹5,000 – ₹50,000+ orders",
    yourEarning: "₹1,000 – ₹5,000+ per order",
    customEarning: "High-ticket college fests & corporate orders",
    highlight: "Highest Payout",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    service: "Web Development Packages",
    rates: "20% on Packages / 15% on Custom Apps",
    starterPrice: "₹999 – ₹7,500 packages",
    yourEarning: "₹200 – ₹1,500 per sale",
    customEarning: "₹2,500 – ₹10,000+ per custom web portal",
    highlight: "High Demand",
    badgeColor: "bg-brand/15 text-brand border-brand/20",
  },
  {
    service: "Video Editing & Creative Packs",
    rates: "20% per Pack / Retainer",
    starterPrice: "₹399 – ₹2,999",
    yourEarning: "₹80 – ₹600 per video pack",
    customEarning: "₹1,000 – ₹3,000+ monthly retainer",
    highlight: "Fast Payout",
    badgeColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
];

const faqs = [
  {
    q: "Do I need any technical, sales, or coding skills?",
    a: "None at all! You simply share our pre-designed posters, captions, or WhatsApp messages with people looking for websites, printing, or business software. DEVGRONIX handles 100% of the client calls, onboarding, demos, delivery, and technical support.",
  },
  {
    q: "How does DEVGRONIX know the client was referred by me?",
    a: "When you join, you receive a unique Partner ID (e.g. DG-701). When your friend, client, or referral contacts us on WhatsApp or submits an enquiry form, they mention your Partner ID or phone number. We immediately record and tag that client to your account.",
  },
  {
    q: "How do Recurring SaaS Software commissions work?",
    a: "When you refer a customer for our Library Management, Ledger, Staff, or CRM software, you get 20% commission not just on their first payment, but on every single monthly or yearly renewal for as long as they stay subscribed!",
  },
  {
    q: "When and how will I receive my UPI payouts?",
    a: "Commissions are transferred directly to your Google Pay, PhonePe, Paytm, or Bank account via UPI within 24 hours of client payment confirmation. There are zero minimum payout thresholds.",
  },
  {
    q: "Is there any registration fee or minimum sales target?",
    a: "Zero joining fee, zero hidden charges, and zero minimum targets. You can refer 1 client a month or 30 clients a month—you get paid on every single deal without any restrictions.",
  },
];

/* ================= MAIN COMPONENT ================= */

function PartnerPage() {
  const [activeToolkitTab, setActiveToolkitTab] = useState<"posters" | "pitches" | "rates" | "calc">("posters");
  const [copiedPitchIndex, setCopiedPitchIndex] = useState<number | null>(null);
  const [copiedPosterId, setCopiedPosterId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcClients, setCalcClients] = useState<number>(5);

  // Application Form State
  const [applicantName, setApplicantName] = useState("");
  const [applicantCity, setApplicantCity] = useState("");
  const [applicantEdu, setApplicantEdu] = useState("College Student");
  const [applicantUpi, setApplicantUpi] = useState("");
  const [applicantNetwork, setApplicantNetwork] = useState("WhatsApp Status & Friends");
  const [copiedApp, setCopiedApp] = useState(false);

  const copyPitch = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPitchIndex(idx);
    setTimeout(() => setCopiedPitchIndex(null), 2500);
  };

  const copyPosterCaption = (caption: string, id: string) => {
    navigator.clipboard.writeText(caption);
    setCopiedPosterId(id);
    setTimeout(() => setCopiedPosterId(null), 2500);
  };

  const buildAppMessage = () => {
    const nameStr = applicantName.trim() || "[Your Name]";
    const cityStr = applicantCity.trim() || "[Your City]";
    const eduStr = applicantEdu.trim() || "College Student";
    const upiStr = applicantUpi.trim() || "[Your UPI ID / PhonePe / GPay]";
    const netStr = applicantNetwork.trim() || "WhatsApp Status & Network";

    return (
      "🚀 *DEVGRONIX PARTNER APPLICATION*\n\n" +
      "Hello DEVGRONIX Team, I want to join the Partner Program and start earning referral & recurring commissions.\n\n" +
      "📋 *My Application Details:*\n" +
      `• *Full Name:* ${nameStr}\n` +
      `• *City & State:* ${cityStr}\n` +
      `• *Education / Profession:* ${eduStr}\n` +
      `• *UPI ID for Payouts:* ${upiStr}\n` +
      `• *Primary Network:* ${netStr}\n\n` +
      "Please assign my unique Partner ID and send my official Starter Kit & high-res posters!"
    );
  };

  const copyAppMessage = () => {
    navigator.clipboard.writeText(buildAppMessage());
    setCopiedApp(true);
    setTimeout(() => setCopiedApp(false), 2500);
  };

  const customWaLink = `https://wa.me/917070519128?text=${encodeURIComponent(buildAppMessage())}`;

  // Estimations
  const directEarning = calcClients * 1250;
  const recurringSaaSEarning = Math.floor(calcClients * 0.4) * 450;
  const totalEstimated = directEarning + recurringSaaSEarning + 100;

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* ================= HERO SECTION (ALIGNED WITH HEADER) ================= */}
      <section className="relative overflow-hidden border-b border-border pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        {/* Ambient Glows */}
        <div aria-hidden="true" className="absolute inset-0 grid-field opacity-30 pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -left-20 top-10 size-96 rounded-full bg-brand/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-20 size-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Core Pitch */}
            <div className="lg:col-span-7">
              <Reveal>
                {/* Glowing Badge */}
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
                    Daily UPI &amp; Monthly Income
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Recommend DEVGRONIX websites, custom apparel &amp; merchandise printing, video editing, or our new
                  in-house cloud software (Library, Ledger, Staff, CRM). Earn{" "}
                  <strong className="text-foreground font-semibold">up to 20% instant UPI payouts</strong> plus{" "}
                  <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">monthly recurring SaaS income</strong>.
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
                  <div className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-blue-700 dark:text-blue-400 shadow-xs">
                    <TrendingUp className="size-3.5 text-blue-500" />
                    <span>20% Recurring SaaS Payouts</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href="#apply"
                    className="interactive group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="size-5 transition-transform group-hover:scale-110" />
                    <span>Get Partner ID on WhatsApp</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#toolkit"
                    className="interactive inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/80 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand hover:bg-surface active:scale-[0.98]"
                  >
                    <Layers className="size-4 text-brand" />
                    <span>Open Partner Toolkit &amp; Posters</span>
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
                      Live Verified
                    </span>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-border/60 bg-background/80 p-3.5">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Commission Rate</span>
                      <p className="mt-1 text-lg font-bold text-foreground">Up to 20%</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Instant UPI transfer</p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/80 p-3.5">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Recurring Income</span>
                      <p className="mt-1 text-lg font-bold text-blue-500">20% Monthly</p>
                      <p className="text-[10px] text-muted-foreground">On Cloud SaaS Software</p>
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
                          <p className="font-semibold text-foreground">Bulk Merch (150 pcs)</p>
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
                        <span className="rounded-md bg-blue-500/10 p-1.5 text-blue-500">📚</span>
                        <div>
                          <p className="font-semibold text-foreground">Library Software Renewal</p>
                          <p className="text-[10px] text-muted-foreground">Monthly SaaS Client</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-blue-500">+₹600 / mo</span>
                        <p className="text-[9px] text-muted-foreground">Recurring Auto-Credit ✓</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/60 px-3.5 py-2.5 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-md bg-brand/10 p-1.5 text-brand">🌐</span>
                        <div>
                          <p className="font-semibold text-foreground">Business Website (₹2,499)</p>
                          <p className="text-[10px] text-muted-foreground">Local Shopkeeper Client</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-brand">+₹500</span>
                        <p className="text-[9px] text-muted-foreground">UPI Paid ✓</p>
                      </div>
                    </div>
                  </div>

                  {/* Supported UPI Providers footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                    <span>GPay • PhonePe • Paytm • IMPS Bank</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Payout Rate</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SPOTLIGHT: NEW IN-HOUSE SAAS SOFTWARE PRODUCTS ================= */}
      <Section className="border-b border-border bg-gradient-to-b from-surface/40 to-surface/10">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="New Software Revenue Stream"
              title="Devgronix Cloud Software Suite"
              description="Sell our ultra-affordable self-built business management products and unlock steady 20% recurring monthly income for life."
            />
            <Reveal delay={100} className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-500">
                <Sparkles className="size-3.5" />
                20% Recurring Lifetime Commission
              </span>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {softwareProducts.map((prod) => {
              const Icon = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-surface-subtle border border-border px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-bold text-foreground text-base group-hover:text-brand transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-brand">{prod.target}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{prod.highlights}</p>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Partner Earning</span>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {prod.partnerIncome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ================= ALL-IN-ONE PARTNER TOOLKIT & RESOURCE HUB ================= */}
      <Section id="toolkit" className="border-b border-border bg-surface/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              align="center"
              eyebrow="Partner Resource Hub"
              title="Everything You Need to Pitch, Share &amp; Earn"
              description="No design or technical experience needed. Use our ready-made visual posters, audience-tested WhatsApp copy, and earnings calculator right here."
            />

            {/* Navigation Tabs */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveToolkitTab("posters")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeToolkitTab === "posters"
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="size-3.5" />
                <span>Marketing Posters &amp; Creatives</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveToolkitTab("pitches")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeToolkitTab === "pitches"
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <MessageCircle className="size-3.5" />
                <span>Ready WhatsApp Pitches</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveToolkitTab("rates")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeToolkitTab === "rates"
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Percent className="size-3.5" />
                <span>Commission Rates</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveToolkitTab("calc")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeToolkitTab === "calc"
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Calculator className="size-3.5" />
                <span>Income Calculator</span>
              </button>
            </div>
          </div>

          {/* TAB 1: VISUAL POSTERS & CREATIVE CARDS */}
          {activeToolkitTab === "posters" && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {marketingPosters.map((poster) => (
                <div
                  key={poster.id}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-surface overflow-hidden shadow-sm hover:border-brand/40 transition-all"
                >
                  {/* Poster Visual Header Banner */}
                  <div className={`relative p-5 bg-gradient-to-br ${poster.gradient} border-b border-border/70`}>
                    <span className="rounded-full bg-background/80 border border-border/60 px-2.5 py-0.5 text-[10px] font-semibold text-foreground">
                      {poster.badge}
                    </span>
                    <h3 className="mt-3 font-display font-extrabold text-lg text-foreground leading-tight">
                      {poster.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium text-muted-foreground">{poster.category}</p>

                    <ul className="mt-4 space-y-1.5 text-[11px] text-foreground/90 font-medium">
                      {poster.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Caption & Quick Actions */}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-3 bg-background p-2.5 rounded-lg border border-border/50 font-mono">
                      {poster.caption}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyPosterCaption(poster.caption, poster.id)}
                        className="interactive flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border-strong bg-surface py-2 text-xs font-semibold text-foreground hover:border-brand hover:text-brand transition-all"
                      >
                        <Copy className="size-3.5" />
                        <span>{copiedPosterId === poster.id ? "Copied! ✓" : "Copy Caption"}</span>
                      </button>

                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(poster.caption)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700 shadow-sm transition-all"
                        title="Share on WhatsApp"
                      >
                        <Share2 className="size-3.5" />
                        <span>Share</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: AUDIENCE TARGETED PITCH SCRIPTS */}
          {activeToolkitTab === "pitches" && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {readyPitchScripts.map((script, idx) => (
                <div
                  key={script.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm hover:border-brand/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold text-brand">
                        {script.tag}
                      </span>
                      <span className="text-[11px] font-medium text-muted-foreground">{script.target}</span>
                    </div>

                    <h3 className="mt-3 font-bold text-sm sm:text-base text-foreground">{script.title}</h3>
                    <p className="mt-3 rounded-xl border border-border/80 bg-background p-4 text-xs leading-relaxed text-muted-foreground font-sans">
                      {script.text}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => copyPitch(script.text, idx)}
                      className="interactive flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/20 active:scale-98"
                    >
                      <Copy className="size-3.5" />
                      <span>{copiedPitchIndex === idx ? "Copied to Clipboard! ✓" : "Copy Message"}</span>
                    </button>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(script.text)}`}
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
          )}

          {/* TAB 3: COMMISSION RATE CARD */}
          {activeToolkitTab === "rates" && (
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
                    <h3 className="mt-3 font-bold text-foreground text-base">{tier.service}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{tier.rates}</p>

                    <div className="mt-4 border-t border-border/60 pt-3">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Standard Commission</span>
                      <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">{tier.yourEarning}</p>
                    </div>

                    <div className="mt-2">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Earning Potential</span>
                      <p className="text-xs font-semibold text-foreground">{tier.customEarning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: INTERACTIVE INCOME CALCULATOR */}
          {activeToolkitTab === "calc" && (
            <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-border/80 bg-surface p-6 sm:p-10 shadow-lg text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                How many clients or businesses can you refer each month?
              </span>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {[1, 3, 5, 10, 20].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setCalcClients(count)}
                    className={`interactive rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                      calcClients === count
                        ? "bg-brand text-white shadow-md scale-105"
                        : "border border-border bg-background text-foreground hover:border-brand"
                    }`}
                  >
                    {count} {count === 1 ? "Client" : "Clients"} / mo
                  </button>
                ))}
              </div>

              {/* Dynamic Estimated Earnings Display */}
              <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Estimated Total Monthly Payout (Direct UPI + Recurring SaaS)
                </span>

                <div className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-foreground">
                  ₹{totalEstimated.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-muted-foreground"> / month</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 max-w-md mx-auto text-left text-xs">
                  <div className="rounded-xl border border-border/60 bg-background/80 p-3">
                    <span className="text-muted-foreground block text-[10px] uppercase">Instant Direct UPI</span>
                    <strong className="text-foreground text-sm">₹{directEarning.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
                    <span className="text-blue-500 block text-[10px] uppercase">Monthly Recurring SaaS</span>
                    <strong className="text-blue-500 text-sm">₹{recurringSaaSEarning.toLocaleString("en-IN")} / mo</strong>
                  </div>
                </div>

                <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
                  Includes ₹100 first-deal welcome bonus + recurring subscription renewals directly to your UPI.
                </p>

                <a
                  href="#apply"
                  className="interactive mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>Start Earning With Your Partner ID</span>
                </a>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* ================= 3-STEP EASY PROCESS ================= */}
      <Section className="border-b border-border bg-surface/20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Start Earning in 3 Simple Steps"
            description="You don't need to sell aggressively. Just share our posters or links, and our team handles all client calls, technical work, and deliveries."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
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

      {/* ================= INTERACTIVE PARTNER APPLICATION SECTION ================= */}
      <Section id="apply" className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/80 bg-surface p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="size-3.5" />
                <span>Instant 1-Minute WhatsApp Onboarding</span>
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold text-foreground">
                Get Your Official Partner ID
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Fill in your basic details below. Clicking <strong>Submit Application on WhatsApp</strong> will automatically format your structured application and send it directly to our onboarding desk.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                  Your Full Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              {/* City / State */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                  City &amp; State <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  value={applicantCity}
                  onChange={(e) => setApplicantCity(e.target.value)}
                  placeholder="e.g. Hyderabad, Telangana"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              {/* Education / Profession */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                  Education / Current Profession <span className="text-brand">*</span>
                </label>
                <select
                  value={applicantEdu}
                  onChange={(e) => setApplicantEdu(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none transition-colors"
                >
                  <option value="College Student">College Student</option>
                  <option value="School Student (12th+)">School Student (12th+)</option>
                  <option value="B.Tech / BCA / MCA / Graduate">B.Tech / BCA / MCA / Graduate</option>
                  <option value="Freelancer / Designer / Editor">Freelancer / Designer / Editor</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Digital Creator / Influencer">Digital Creator / Influencer</option>
                  <option value="Agency Owner / Other">Agency Owner / Other</option>
                </select>
              </div>

              {/* UPI ID for Commission Payouts */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                  UPI ID for Direct Payouts <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  value={applicantUpi}
                  onChange={(e) => setApplicantUpi(e.target.value)}
                  placeholder="e.g. 9876543210@paytm or name@okaxis"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              {/* Primary Network / Referral Channel */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                  Where will you primarily share &amp; refer clients?
                </label>
                <select
                  value={applicantNetwork}
                  onChange={(e) => setApplicantNetwork(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none transition-colors"
                >
                  <option value="WhatsApp Status &amp; Friends Groups">WhatsApp Status &amp; Friends Groups</option>
                  <option value="College Campus, Classmates &amp; Fests">College Campus, Classmates &amp; Fests</option>
                  <option value="Local Shopkeepers &amp; Small Businesses">Local Shopkeepers &amp; Small Businesses</option>
                  <option value="Instagram / YouTube / LinkedIn Audience">Instagram / YouTube / LinkedIn Audience</option>
                  <option value="Coaching Institutes &amp; Study Libraries">Coaching Institutes &amp; Study Libraries</option>
                  <option value="Freelance Clients &amp; Existing Network">Freelance Clients &amp; Existing Network</option>
                </select>
              </div>
            </div>

            {/* Live Message Preview Box */}
            <div className="mt-6 rounded-2xl border border-border/80 bg-background p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Pre-Filled WhatsApp Message Preview:
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Auto-formatted with your details
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs text-foreground/90 leading-relaxed bg-surface/60 p-3.5 rounded-xl border border-border/50 max-h-40 overflow-y-auto">
                {buildAppMessage()}
              </pre>
            </div>

            {/* Submit & Copy Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <a
                href={customWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-700 hover:to-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="size-5" />
                <span>Submit Application on WhatsApp</span>
                <ArrowRight className="size-4" />
              </a>

              <button
                type="button"
                onClick={copyAppMessage}
                className="interactive inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-4 text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition-all"
              >
                <Copy className="size-4" />
                <span>{copiedApp ? "Message Copied! ✓" : "Copy Pre-Filled Text"}</span>
              </button>
            </div>

            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              🔒 Zero registration fee. Instant activation and promotional kit delivery on WhatsApp.
            </p>
          </div>
        </Container>
      </Section>

      {/* ================= PERKS GRID ================= */}
      <Section className="border-b border-border bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Why Partner With DEVGRONIX"
            title="Zero Hassle. Direct Bank &amp; UPI Transfers."
            description="You don't need technical skills. Just connect people who need websites, corporate T-shirts or cloud software, and our team handles everything."
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

      {/* ================= FAQ SECTION ================= */}
      <Section className="border-b border-border">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about Partner tracking, monthly recurring payouts, and working with DEVGRONIX."
          />

          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-3 ${
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

      {/* ================= BOTTOM HELPLINE CTA ================= */}
      <Section className="bg-surface/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Have Questions Before Joining?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Talk directly with our partner onboarding manager. We are available on WhatsApp to answer your queries and share free promotional posters.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/917070519128?text=Hello%20DEVGRONIX,%20I%20have%20a%20question%20about%20the%20Partner%20Program"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 shadow-md transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Chat with Partner Desk (+91 70705 19128)</span>
              </a>
              <a
                href="mailto:admin@devgronix.in"
                className="interactive inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition-all"
              >
                <span>Email: admin@devgronix.in</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
