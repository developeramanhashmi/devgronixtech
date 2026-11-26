import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cloud,
  HelpCircle,
  Laptop,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { breadcrumbSchema, jsonLdScript, seoHead, SITE_URL } from "@/lib/seo";
import { publishedProducts, type Product } from "@/lib/content/products";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/products/")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "In-House Cloud Software & SaaS Solutions | DEVGRONIX",
      description:
        "High-performance, ultra-affordable cloud software for Indian businesses. Smart Library Management (₹149/mo), Digital Khata Ledger (₹99/mo), Staff Attendance & Payroll (₹99/mo), and CRM WhatsApp Leads (₹199/mo). Free live demo on WhatsApp.",
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

function ProductsIndexPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
            Smart Cloud Software Built to <span className="text-brand">Run Your Daily Business</span>.
          </>
        }
        description="High-performance, ultra-affordable subscription tools designed specifically for Indian study libraries, retail shops, offices, and growing agencies. Starting at just ₹99/month with zero setup fees."
      >
        <div className="flex flex-wrap items-center gap-4">
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

      {/* ================= PRODUCT CARDS GRID ================= */}
      <Section className="border-b border-border">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="rule-label">01 — Software Suite</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Choose the right tool for your operations
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            All plans include free onboarding support &amp; automatic cloud updates
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {publishedProducts.map((product, i) => {
            const Icon = getProductIcon(product.iconName);
            const isMonthly = billingCycle === "monthly";
            const displayPrice = isMonthly ? `₹${product.monthlyPrice}` : `₹${product.yearlyPrice}`;
            const billingLabel = isMonthly ? "/ month" : "/ year";
            const effectiveMonthly = isMonthly ? null : Math.round(product.yearlyPrice / 12);
            const waUrl = `https://wa.me/917070519128?text=${encodeURIComponent(product.whatsappMessage)}`;

            return (
              <Reveal key={product.id} delay={i * 60}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface/90 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl dark:bg-surface/60">
                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors duration-300">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <span className="inline-block rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[10px] font-semibold text-brand">
                            {product.badge}
                          </span>
                          <h3 className="mt-1 font-display text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs font-medium text-brand/90">
                      Best for: {product.targetAudience}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {product.tagline}
                    </p>

                    {/* Pricing Box */}
                    <div className="mt-6 rounded-xl border border-border/80 bg-background/80 p-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-extrabold text-foreground">
                          {displayPrice}
                        </span>
                        <span className="text-xs text-muted-foreground">{billingLabel}</span>
                        {effectiveMonthly && (
                          <span className="ml-auto rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                            Effective ₹{effectiveMonthly}/mo
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="size-3 text-emerald-500" />
                        <span>Zero setup fee · Instant 5-minute activation</span>
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="mt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Capabilities Included:
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                        {product.highlights.slice(0, 5).map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg active:scale-[0.98]"
                    >
                      <MessageCircle className="size-4" />
                      <span>Book Free Live Demo</span>
                    </a>

                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className="interactive inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-3 text-xs font-semibold text-foreground transition-all hover:border-brand hover:text-brand"
                    >
                      <span>Explore Modules</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ================= WHY DEVGRONIX SOFTWARE ================= */}
      <Section className="border-b border-border bg-surface/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="rule-label">02 — Built for Local Businesses</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Why Indian businesses choose DEVGRONIX Cloud Software
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Built from scratch to solve real shop, library, and office problems without the complexity of overseas tools.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Cloud className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                100% Cloud Native
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Access your dashboard from your phone, home laptop, or shop tablet. Your records are always synced in real-time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Smartphone className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                1-Click WhatsApp Alerts
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Send fee dues, Udhar statements, salary slips, and lead follow-ups directly on WhatsApp with prefilled templates.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Automated Daily Backups
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Never lose your accounts even if a phone is lost or damaged. Cloud storage guarantees 100% data safety.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-2xl border border-border bg-surface p-6 h-full">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Phone className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Direct WhatsApp Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                No robotic support tickets. Chat directly with the developers and support engineers who created the software.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================= DETAILED COMPARISON TABLE ================= */}
      <Section className="border-b border-border">
        <div className="max-w-2xl mb-10">
          <span className="rule-label">03 — Quick Matrix</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Software Comparison At A Glance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear, honest feature breakdown across all four in-house software products.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xs">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-foreground">
                <th className="py-3.5 px-4 font-semibold">Features &amp; Specs</th>
                <th className="py-3.5 px-4 font-semibold text-brand">Library Management</th>
                <th className="py-3.5 px-4 font-semibold">Khata &amp; Ledger</th>
                <th className="py-3.5 px-4 font-semibold">Staff &amp; Payroll</th>
                <th className="py-3.5 px-4 font-semibold">CRM &amp; Leads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70 text-muted-foreground">
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Monthly Price</td>
                <td className="py-3 px-4 font-bold text-foreground">₹149 / mo</td>
                <td className="py-3 px-4 font-bold text-foreground">₹99 / mo</td>
                <td className="py-3 px-4 font-bold text-foreground">₹99 / mo</td>
                <td className="py-3 px-4 font-bold text-foreground">₹199 / mo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Yearly Price (Save ~17%)</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹1,499 / yr</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹999 / yr</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹999 / yr</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">₹1,999 / yr</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">WhatsApp Automation</td>
                <td className="py-3 px-4">Fee dues &amp; renewal receipts</td>
                <td className="py-3 px-4">Balance reminder &amp; UPI QR</td>
                <td className="py-3 px-4">Monthly salary slip delivery</td>
                <td className="py-3 px-4">1-tap prospect messaging</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Core Visual Tool</td>
                <td className="py-3 px-4">Visual Seat &amp; Shift Grid</td>
                <td className="py-3 px-4">Customer &amp; Supplier Tally</td>
                <td className="py-3 px-4">QR / Selfie Attendance Punch</td>
                <td className="py-3 px-4">Visual Kanban Deal Pipeline</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Statement &amp; Reports</td>
                <td className="py-3 px-4">PDF receipts &amp; collection tally</td>
                <td className="py-3 px-4">PDF account ledger export</td>
                <td className="py-3 px-4">PDF salary pay slip generator</td>
                <td className="py-3 px-4">PDF quotation &amp; proposal</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Live Demo Experience</td>
                <td className="py-3 px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-3 px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-3 px-4 text-brand font-semibold">Free WhatsApp Demo</td>
                <td className="py-3 px-4 text-brand font-semibold">Free WhatsApp Demo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ================= FAQ SECTION ================= */}
      <Section className="border-b border-border bg-surface/30">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="rule-label">04 — Frequently Asked Questions</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Everything you need to know about DEVGRONIX Software
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {generalFaqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-surface overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-foreground hover:text-brand transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-4 text-muted-foreground transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
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
