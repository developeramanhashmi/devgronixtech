import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Laptop,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedProducts, type Product } from "@/lib/content/products";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "In-House Cloud Software Suite | DEVGRONIX",
      description:
        "High-performance, ultra-affordable subscription tools designed for Indian businesses. Smart Library Management (₹149/mo), Digital Khata Ledger (₹99/mo), Staff Attendance & Payroll (₹99/mo), and CRM WhatsApp Leads (₹199/mo). Free live demo on WhatsApp.",
      path: "/products",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DEVGRONIX Cloud Software Suite",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS, Windows, macOS",
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "99",
            highPrice: "199",
            priceCurrency: "INR",
          },
        },
      ]),
    ],
  }),
  component: ProductsIndexPage,
});

function getProductIcon(name: Product["iconName"]) {
  switch (name) {
    case "BookOpen":
      return BookOpen;
    case "Laptop":
      return Laptop;
    case "Users":
      return Users;
    case "Zap":
      return Zap;
    default:
      return Sparkles;
  }
}

// Interactive Micro-UI Previews - Mobile Responsive & Professional UI
function LibraryMockup() {
  const [activeShift, setActiveShift] = useState<"morning" | "evening" | "full">("morning");
  return (
    <div className="flex flex-col h-full rounded-xl border border-border/70 bg-card/95 p-3 sm:p-5 text-xs shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand font-bold text-[10px]">
            OS
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-foreground text-[11px] flex items-center gap-1.5 truncate">
              <span>Central Study Library</span>
              <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            </div>
            <span className="text-[10px] text-muted-foreground block truncate">Floor 1 · 48 Total Desks</span>
          </div>
        </div>
        <div className="flex rounded-md border border-border/60 bg-muted/40 p-0.5 shrink-0">
          {(["morning", "evening", "full"] as const).map((shift) => (
            <button
              key={shift}
              type="button"
              onClick={() => setActiveShift(shift)}
              className={cn(
                "px-2 py-0.5 text-[9px] font-semibold capitalize rounded transition-all",
                activeShift === shift
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {shift}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-b border-border/50">
        <div className="rounded-lg bg-surface-strong/60 p-2 text-center">
          <div className="text-[10px] text-muted-foreground">Occupied</div>
          <div className="font-bold text-foreground text-xs">42 / 48</div>
        </div>
        <div className="rounded-lg bg-surface-strong/60 p-2 text-center">
          <div className="text-[10px] text-muted-foreground">Vacant</div>
          <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">6 Left</div>
        </div>
        <div className="rounded-lg bg-surface-strong/60 p-2 text-center">
          <div className="text-[10px] text-muted-foreground">Collected</div>
          <div className="font-bold text-foreground text-xs">₹24.8K</div>
        </div>
        <div className="rounded-lg bg-surface-strong/60 p-2 text-center">
          <div className="text-[10px] text-muted-foreground">Dues Alert</div>
          <div className="font-bold text-amber-600 dark:text-amber-400 text-xs">3 Alerts</div>
        </div>
      </div>

      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Live Desk Allocation</span>
          <span className="text-emerald-500 font-normal capitalize">Shift: {activeShift}</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
          {[
            { id: "D-01", status: "occ", name: "Rahul" },
            { id: "D-02", status: "occ", name: "Ananya" },
            { id: "D-03", status: "due", name: "Zaid K." },
            { id: "D-04", status: "vac", name: "Vacant" },
            { id: "D-05", status: "occ", name: "Pooja" },
            { id: "D-06", status: "occ", name: "Aman" },
            { id: "D-07", status: "occ", name: "Kavita" },
            { id: "D-08", status: "vac", name: "Vacant" },
            { id: "D-09", status: "occ", name: "Suresh" },
            { id: "D-10", status: "due", name: "Deepak" },
            { id: "D-11", status: "occ", name: "Meera" },
            { id: "D-12", status: "vac", name: "Vacant" },
          ].map((desk) => (
            <div
              key={desk.id}
              className={cn(
                "rounded-md border p-1 text-center transition-all flex flex-col justify-center items-center h-11 sm:h-12",
                desk.status === "occ" && "border-brand/30 bg-brand/5 text-foreground",
                desk.status === "due" && "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
                desk.status === "vac" && "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
              )}
            >
              <span className="font-bold text-[9px] leading-tight">{desk.id}</span>
              <span className="text-[8px] truncate max-w-full text-muted-foreground">{desk.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-brand/20 bg-brand/5 px-2.5 py-1.5 flex items-center justify-between text-[10px] min-w-0">
          <span className="flex items-center gap-1.5 text-foreground font-medium truncate min-w-0">
            <span className="size-1.5 rounded-full bg-brand shrink-0" />
            <span className="truncate">Auto WhatsApp Fee Alert sent to Zaid K. (Due: Today)</span>
          </span>
          <span className="text-brand font-semibold shrink-0 ml-2">Delivered</span>
        </div>
      </div>
    </div>
  );
}

function LedgerMockup() {
  return (
    <div className="flex flex-col h-full rounded-xl border border-border/70 bg-card/95 p-3 sm:p-5 text-xs shadow-inner">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
            ₹
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-foreground text-[11px] truncate">Bharat Daily Khata &amp; Cashbook</div>
            <span className="text-[10px] text-muted-foreground block truncate">Realtime Ledger Sync</span>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
          Sync Online
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-3 border-b border-border/50">
        <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-2.5">
          <span className="text-[10px] text-muted-foreground block">Cash in Hand / UPI</span>
          <span className="font-display font-bold text-emerald-600 dark:text-emerald-400 text-sm">
            +₹42,850.00
          </span>
        </div>
        <div className="rounded-lg bg-rose-500/5 border border-rose-500/20 p-2.5">
          <span className="text-[10px] text-muted-foreground block">Total Udhar / Due</span>
          <span className="font-display font-bold text-rose-600 dark:text-rose-400 text-sm">
            -₹14,200.00
          </span>
        </div>
      </div>

      <div className="mt-3 space-y-2 flex-1">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Transactions
        </div>
        {[
          { party: "Gupta General Store", type: "in", amt: "₹4,200", method: "UPI QR", time: "10:14 AM" },
          { party: "Balaji Enterprises", type: "out", amt: "₹7,500", method: "Vendor Pay", time: "09:30 AM" },
          { party: "Sharma Cloth Emporium", type: "due", amt: "₹2,800", method: "30-Day Due", time: "Yesterday" },
        ].map((tx) => (
          <div
            key={tx.party}
            className="rounded-lg border border-border/60 bg-surface-strong/40 p-2 flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <div className="font-semibold text-foreground text-[11px] truncate">{tx.party}</div>
              <div className="text-[9px] text-muted-foreground truncate">
                {tx.time} · {tx.method}
              </div>
            </div>
            <div className="text-right shrink-0">
              <span
                className={cn(
                  "font-bold text-xs",
                  tx.type === "in" && "text-emerald-600 dark:text-emerald-400",
                  tx.type === "out" && "text-foreground",
                  tx.type === "due" && "text-rose-600 dark:text-rose-400"
                )}
              >
                {tx.type === "in" ? `+${tx.amt}` : tx.type === "due" ? `Due ${tx.amt}` : `-${tx.amt}`}
              </span>
              {tx.type === "due" && (
                <div className="text-[9px] text-brand font-semibold flex items-center gap-0.5 justify-end mt-0.5">
                  <span>Send Reminder</span>
                  <Send className="size-2.5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StaffMockup() {
  return (
    <div className="flex flex-col h-full rounded-xl border border-border/70 bg-card/95 p-3 sm:p-5 text-xs shadow-inner">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px]">
            HR
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-foreground text-[11px] truncate">Staff Attendance &amp; Payroll</div>
            <span className="text-[10px] text-muted-foreground block truncate">Mobile / QR Check-In</span>
          </div>
        </div>
        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-bold text-brand shrink-0">
          14 / 16 Present
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-3 border-b border-border/50 text-center">
        <div className="rounded-lg bg-surface-strong/60 p-2">
          <span className="text-[9px] text-muted-foreground block truncate">On Time</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">13 Staff</span>
        </div>
        <div className="rounded-lg bg-surface-strong/60 p-2">
          <span className="text-[9px] text-muted-foreground block truncate">Late</span>
          <span className="font-bold text-amber-600 dark:text-amber-400 text-xs">1 Staff</span>
        </div>
        <div className="rounded-lg bg-surface-strong/60 p-2">
          <span className="text-[9px] text-muted-foreground block truncate">Leaves</span>
          <span className="font-bold text-muted-foreground text-xs">2 Approved</span>
        </div>
      </div>

      <div className="mt-3 space-y-2 flex-1">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Staff Roster &amp; Punch Status
        </div>
        {[
          { name: "Rahul Verma", role: "Store Manager", inTime: "09:02 AM", status: "On Time", salary: "₹24,000" },
          { name: "Priya Nair", role: "Accounts Lead", inTime: "09:28 AM", status: "Late 13m", salary: "₹22,500" },
          { name: "Sandeep Kumar", role: "Field Exec", inTime: "08:55 AM", status: "On Time", salary: "₹18,000" },
        ].map((staff) => (
          <div
            key={staff.name}
            className="rounded-lg border border-border/60 bg-surface-strong/40 p-2 flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <div className="font-semibold text-foreground text-[11px] truncate">{staff.name}</div>
              <div className="text-[9px] text-muted-foreground truncate">
                {staff.role} · Punched In {staff.inTime}
              </div>
            </div>
            <div className="text-right shrink-0">
              <span
                className={cn(
                  "rounded px-1.5 py-0.5 text-[9px] font-semibold",
                  staff.status === "On Time"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                )}
              >
                {staff.status}
              </span>
              <div className="text-[9px] text-muted-foreground mt-0.5">Pay: {staff.salary}/mo</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrmMockup() {
  return (
    <div className="flex flex-col h-full rounded-xl border border-border/70 bg-card/95 p-3 sm:p-5 text-xs shadow-inner">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand font-bold text-[10px]">
            CRM
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-foreground text-[11px] truncate">Sales Pipeline &amp; WhatsApp CRM</div>
            <span className="text-[10px] text-muted-foreground block truncate">Visual Kanban Deal Stages</span>
          </div>
        </div>
        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-bold text-brand shrink-0">
          ₹1.2L Pipeline
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 flex-1">
        <div className="rounded-lg bg-surface-strong/40 p-2 flex flex-col">
          <div className="flex items-center justify-between text-[10px] font-bold text-foreground mb-1.5">
            <span>New Leads</span>
            <span className="rounded bg-muted px-1 text-[9px]">2</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded-md border border-border/70 bg-card p-2 text-[10px]">
              <div className="font-semibold text-foreground">Apex Academy</div>
              <div className="text-[9px] text-muted-foreground">Web + Portal · ₹18K</div>
              <div className="mt-1 text-[8px] text-brand font-medium">WhatsApp Today</div>
            </div>
            <div className="rounded-md border border-border/70 bg-card p-2 text-[10px] hidden sm:block">
              <div className="font-semibold text-foreground">Royal Cafe</div>
              <div className="text-[9px] text-muted-foreground">QR Menu · ₹6.5K</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-surface-strong/40 p-2 flex flex-col">
          <div className="flex items-center justify-between text-[10px] font-bold text-foreground mb-1.5">
            <span>Demo Done</span>
            <span className="rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 text-[9px]">1</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded-md border border-amber-500/30 bg-card p-2 text-[10px]">
              <div className="font-semibold text-foreground">City Dental</div>
              <div className="text-[9px] text-muted-foreground">Booking · ₹14K</div>
              <div className="mt-1 text-[8px] text-amber-600 dark:text-amber-400 font-semibold">
                Quote Sent
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-surface-strong/40 p-2 flex flex-col">
          <div className="flex items-center justify-between text-[10px] font-bold text-foreground mb-1.5">
            <span>Won &amp; Paid</span>
            <span className="rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1 text-[9px]">4</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded-md border border-emerald-500/30 bg-card p-2 text-[10px]">
              <div className="font-semibold text-foreground">Karnataka Bearings</div>
              <div className="text-[9px] text-muted-foreground">Catalog · ₹25K</div>
              <div className="mt-1 text-[8px] text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ 100% Paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsIndexPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeProductId, setActiveProductId] = useState<string>("prod-library");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const activeProduct =
    publishedProducts.find((p) => p.id === activeProductId) || publishedProducts[0];

  const generalFaqs = [
    {
      q: "How does the free live demo work without a login link?",
      a: "When you tap 'Book Free Live Demo', it opens WhatsApp with a prefilled request. Our team immediately schedules a personalized 10-15 minute screen-share or WhatsApp video demo showing the exact features and workflow for your business.",
    },
    {
      q: "Can I pay monthly, or is there an annual commitment?",
      a: "You can pay monthly with zero lock-in contract! Cancel anytime. If you choose annual billing, you get nearly 2 months completely free (approx 17% savings).",
    },
    {
      q: "Is there any software installation or setup fee?",
      a: "Zero setup fee and zero installation! All DEVGRONIX software is 100% cloud-based web applications that run smoothly inside Google Chrome, Safari, or Microsoft Edge on any smartphone, tablet, laptop, or desktop.",
    },
    {
      q: "What payment methods are supported?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking (IMPS/NEFT), Debit/Credit Cards, and international payments via Stripe/Wise for Gulf and overseas clients.",
    },
    {
      q: "Is my customer and business data safe?",
      a: "Yes. All data is stored in enterprise-grade encrypted cloud servers with daily automated backups. Your records are never shared with anyone and remain 100% private to your account.",
    },
  ];

  return (
    <>
      <PageHero
        label="DEVGRONIX In-House Software"
        title={
          <>
            Modern Business Software.{" "}
            <span className="text-gradient">Affordable For Everyone.</span>
          </>
        }
        description="Replace messy paper registers, missed fee collections, and scattered WhatsApp chats with our lightning-fast cloud web apps. Starting at just ₹99/month."
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Monthly / Yearly Billing Toggle */}
          <div className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-brand text-brand-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Yearly Billing</span>
              <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                Save ~17%
              </span>
            </button>
          </div>

          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            Zero Setup Fee · Free WhatsApp Demo
          </span>
        </div>
      </PageHero>

      {/* ================= SECTION 01: INTERACTIVE PRODUCT SPOTLIGHT ================= */}
      <Section className="border-b border-border py-10 sm:py-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-6 sm:mb-8">
          <div>
            <span className="rule-label">01 — Interactive Spotlight</span>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              Preview our in-house software in action
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Tap through each application below to inspect the live interface, features, and instant pricing.
          </p>
        </div>

        {/* Product Selector Pill Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          {publishedProducts.map((p) => {
            const Icon = getProductIcon(p.iconName);
            const isSelected = p.id === activeProductId;
            const price = billingCycle === "monthly" ? `₹${p.monthlyPrice}/mo` : `₹${p.yearlyPrice}/yr`;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProductId(p.id)}
                className={cn(
                  "relative flex items-center gap-2.5 sm:gap-3 rounded-xl border p-2.5 sm:p-3.5 text-left transition-all duration-200 min-w-0",
                  isSelected
                    ? "border-brand bg-brand/5 shadow-sm ring-1 ring-brand/30"
                    : "border-border/80 bg-surface/80 hover:border-border hover:bg-surface"
                )}
              >
                <div
                  className={cn(
                    "flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                    isSelected
                      ? "bg-brand text-brand-foreground"
                      : "bg-surface-strong text-muted-foreground"
                  )}
                >
                  <Icon className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-display text-xs sm:text-sm font-bold text-foreground truncate">
                      {p.title.split(" ")[0]} {p.title.split(" ")[1] || ""}
                    </span>
                    <span className="text-[10px] font-bold text-brand shrink-0">{price}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground truncate block">
                    {p.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Frame */}
        <Reveal key={activeProduct.id}>
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-md">
            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/70">
              {/* Left Column: Product Blueprint & CTAs */}
              <div className="lg:col-span-5 min-w-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[10px] font-bold text-brand shrink-0">
                      {activeProduct.badge}
                    </span>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 shrink-0">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Cloud Software · Ready to Use</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {activeProduct.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold text-brand">
                    Best for: {activeProduct.targetAudience}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {activeProduct.tagline}
                  </p>

                  <div className="mt-4 sm:mt-5 rounded-xl border border-border/70 bg-surface-strong/50 p-3.5 sm:p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                          {billingCycle === "monthly" ? `₹${activeProduct.monthlyPrice}` : `₹${activeProduct.yearlyPrice}`}
                        </span>
                        <span className="ml-1 text-xs text-muted-foreground">
                          {billingCycle === "monthly" ? "/ month" : "/ year"}
                        </span>
                      </div>
                      {billingCycle === "yearly" && (
                        <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                          Save ~17% (2 Mo Free)
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Check className="size-3 text-emerald-500 shrink-0" /> Zero Setup Fees
                      </span>
                      <span className="flex items-center gap-1">
                        <Check className="size-3 text-emerald-500 shrink-0" /> Cancel Anytime
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground mb-2">
                      Core Built-in Capabilities:
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-muted-foreground">
                      {activeProduct.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs leading-tight">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/70 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`https://wa.me/917070519128?text=${encodeURIComponent(activeProduct.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:opacity-95 active:scale-[0.98]"
                  >
                    <MessageCircle className="size-4" />
                    <span>Book Free Live Demo</span>
                  </a>

                  <Link
                    to="/products/$slug"
                    params={{ slug: activeProduct.slug }}
                    className="interactive inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-brand hover:text-brand"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Craft Live UI Canvas */}
              <div className="lg:col-span-7 min-w-0 bg-muted/20 p-3 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center justify-between rounded-t-xl border border-border/80 bg-surface px-3 py-2 text-xs text-muted-foreground shadow-xs gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="size-2 rounded-full bg-rose-500/70" />
                    <span className="size-2 rounded-full bg-amber-500/70" />
                    <span className="size-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="rounded-md border border-border/50 bg-muted/40 px-2 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-mono text-muted-foreground truncate max-w-[140px] sm:max-w-[240px]">
                    app.devgronix.com/{activeProduct.slug}
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">Live Sandbox</span>
                    <span className="sm:hidden">Live</span>
                  </span>
                </div>

                <div className="rounded-b-xl border-x border-b border-border/80 bg-surface p-1 min-h-[320px] sm:min-h-[380px] overflow-hidden">
                  {activeProduct.id === "prod-library" && <LibraryMockup />}
                  {activeProduct.id === "prod-ledger" && <LedgerMockup />}
                  {activeProduct.id === "prod-staff" && <StaffMockup />}
                  {activeProduct.id === "prod-crm" && <CrmMockup />}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ================= SECTION 02: REFINED FULL CATALOG TILES ================= */}
      <Section className="border-b border-border bg-surface/30 py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="rule-label">02 — Full Software Catalog</span>
            <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              All 4 business management modules
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Pick individual tools or combine them for your entire business operation
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publishedProducts.map((product, i) => {
            const Icon = getProductIcon(product.iconName);
            const isMonthly = billingCycle === "monthly";
            const displayPrice = isMonthly ? `₹${product.monthlyPrice}` : `₹${product.yearlyPrice}`;
            const billingLabel = isMonthly ? "/mo" : "/yr";
            const waUrl = `https://wa.me/917070519128?text=${encodeURIComponent(product.whatsappMessage)}`;

            return (
              <Reveal key={product.id} delay={i * 50}>
                <div className="group flex h-full flex-col justify-between rounded-xl border border-border/80 bg-surface p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-brand/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                        <Icon className="size-4" />
                      </div>
                      <span className="rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-base font-bold text-foreground group-hover:text-brand transition-colors">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-brand/90 font-medium line-clamp-1">
                      {product.targetAudience}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>

                    <div className="mt-4 border-t border-border/60 pt-3 flex items-baseline justify-between">
                      <div>
                        <span className="font-display text-xl font-extrabold text-foreground">
                          {displayPrice}
                        </span>
                        <span className="text-[11px] text-muted-foreground ml-1">{billingLabel}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        Instant Setup
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.highlights.slice(0, 3).map((feat) => (
                        <span
                          key={feat}
                          className="rounded-md bg-surface-strong px-2 py-0.5 text-[9px] text-muted-foreground line-clamp-1"
                        >
                          {feat.split(" ").slice(0, 3).join(" ")}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-4 flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[11px] font-bold text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>Demo</span>
                    </a>
                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-3 py-2 text-[11px] font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
                    >
                      <span>Specs</span>
                      <ChevronRight className="size-3 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ================= SECTION 03: VALUE PROPOSITIONS ================= */}
      <Section className="border-b border-border py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="rule-label">03 — Architecture &amp; Reliability</span>
          <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            Why Indian businesses choose DEVGRONIX Software
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Built from the ground up for Bharat: lightning-fast on 4G, zero hardware cost, and WhatsApp native.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 rounded-2xl border border-border bg-surface p-5 sm:p-7 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-brand/10 text-brand mb-3 sm:mb-4">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  Engineered for Mobile &amp; 4G/5G Networks
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  Unlike bloated legacy software that requires high-end PCs or slow desktop installers, DEVGRONIX tools load in under 0.8 seconds on any standard smartphone or tablet. Run your entire shop or coaching center right from Google Chrome or Safari.
                </p>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                &lt; 50KB Payload
              </span>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-foreground">
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                Zero Installation Required
              </span>
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                Offline Auto-Reconnect
              </span>
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                Touch-Optimized UI
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
                <MessageCircle className="size-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                1-Click WhatsApp Automations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Send fee dues, Udhar statements, salary slips, and lead follow-ups directly on WhatsApp with prefilled templates and instant UPI payment links.
              </p>
            </div>
            <span className="mt-4 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Check className="size-3" /> Pre-Configured Message Bank
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                Bank-Grade Automated Daily Backups
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Never lose your accounts or student records even if your phone breaks or is stolen. Real-time cloud synchronization guarantees 100% data preservation.
              </p>
            </div>
            <span className="mt-4 text-[10px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <Check className="size-3" /> 256-Bit Encrypted Database
            </span>
          </div>

          <div className="sm:col-span-2 rounded-2xl border border-border bg-surface p-5 sm:p-7 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-brand/10 text-brand mb-3 sm:mb-4">
                  <Phone className="size-5" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  Direct Founder &amp; Developer WhatsApp Support
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  No robotic support tickets or waiting days for overseas email responses. When you need help, you speak directly with our core engineering team in Hyderabad via WhatsApp or direct phone call.
                </p>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand shrink-0">
                &lt; 15-Min Response
              </span>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-foreground">
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                WhatsApp Live Help
              </span>
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                Hindi &amp; English Support
              </span>
              <span className="rounded-md border border-border bg-surface-strong px-2.5 py-1">
                Free Staff Training
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= SECTION 04: DETAILED COMPARISON TABLE ================= */}
      <Section className="border-b border-border py-10 sm:py-14">
        <div className="max-w-2xl mb-6 sm:mb-8">
          <span className="rule-label">04 — Specifications Matrix</span>
          <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            Software Comparison At A Glance
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Clear, honest feature breakdown across all four in-house software products.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xs">
          <table className="w-full min-w-[600px] text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-foreground">
                <th className="py-3 px-3.5 sm:px-4 font-semibold">Features &amp; Specs</th>
                <th className="py-3 px-3.5 sm:px-4 font-semibold text-brand">Library Management</th>
                <th className="py-3 px-3.5 sm:px-4 font-semibold">Khata &amp; Ledger</th>
                <th className="py-3 px-3.5 sm:px-4 font-semibold">Staff &amp; Payroll</th>
                <th className="py-3 px-3.5 sm:px-4 font-semibold">CRM &amp; Leads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70 text-muted-foreground">
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">Monthly Price</td>
                <td className="py-2.5 px-3.5 sm:px-4 font-bold text-foreground">₹149 / mo</td>
                <td className="py-2.5 px-3.5 sm:px-4 font-bold text-foreground">₹99 / mo</td>
                <td className="py-2.5 px-3.5 sm:px-4 font-bold text-foreground">₹99 / mo</td>
                <td className="py-2.5 px-3.5 sm:px-4 font-bold text-foreground">₹199 / mo</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">Yearly Price (Save ~17%)</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹1,499 / yr</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹999 / yr</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹999 / yr</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹1,999 / yr</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">WhatsApp Automation</td>
                <td className="py-2.5 px-3.5 sm:px-4">Fee dues &amp; renewal receipts</td>
                <td className="py-2.5 px-3.5 sm:px-4">Balance reminder &amp; UPI QR</td>
                <td className="py-2.5 px-3.5 sm:px-4">Monthly salary slip delivery</td>
                <td className="py-2.5 px-3.5 sm:px-4">1-tap prospect messaging</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">Core Visual Tool</td>
                <td className="py-2.5 px-3.5 sm:px-4">Visual Seat &amp; Shift Grid</td>
                <td className="py-2.5 px-3.5 sm:px-4">Customer &amp; Supplier Tally</td>
                <td className="py-2.5 px-3.5 sm:px-4">QR / Mobile Punch</td>
                <td className="py-2.5 px-3.5 sm:px-4">Visual Kanban Deal Pipeline</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">Statement &amp; Reports</td>
                <td className="py-2.5 px-3.5 sm:px-4">PDF receipts &amp; collection tally</td>
                <td className="py-2.5 px-3.5 sm:px-4">PDF account ledger export</td>
                <td className="py-2.5 px-3.5 sm:px-4">PDF salary pay slip generator</td>
                <td className="py-2.5 px-3.5 sm:px-4">PDF quotation &amp; proposal</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3.5 sm:px-4 font-medium text-foreground">Live Demo Experience</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-2.5 px-3.5 sm:px-4 text-brand font-semibold">Free WhatsApp Demo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ================= SECTION 05: FAQ ACCORDION ================= */}
      <Section className="border-b border-border bg-surface/30 py-10 sm:py-14">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <span className="rule-label">05 — Frequently Asked Questions</span>
          <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            Everything you need to know about DEVGRONIX Software
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          {generalFaqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-surface overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="flex w-full items-center justify-between p-3.5 sm:p-5 text-left text-xs sm:text-sm font-semibold text-foreground hover:text-brand transition-colors gap-2"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
