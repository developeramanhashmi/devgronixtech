import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Laptop as LaptopIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { breadcrumbSchema, jsonLdScript, notFoundHead, seoHead, SITE_URL } from "@/lib/seo";
import { getProductBySlug, publishedProducts, type Product } from "@/lib/content/products";
import { PageHero } from "@/components/site/PageHero";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) {
      return notFoundHead("Product Not Found");
    }
    const { product } = loaderData;
    return {
      ...seoHead({
        title: product.metaTitle,
        description: product.metaDescription,
        path: `/products/${product.slug}`,
      }),
      scripts: [
        jsonLdScript([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.title, path: `/products/${product.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.title,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS, Windows, macOS",
            offers: {
              "@type": "Offer",
              price: product.monthlyPrice.toString(),
              priceCurrency: "INR",
              description: product.tagline,
            },
          },
        ]),
      ],
    };
  },
  component: ProductDetailPage,
});

function getProductIcon(name: Product["iconName"]) {
  switch (name) {
    case "BookOpen":
      return BookOpen;
    case "Laptop":
      return LaptopIcon;
    case "Users":
      return Users;
    case "Zap":
      return Zap;
    default:
      return Sparkles;
  }
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const Icon = getProductIcon(product.iconName);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isMonthly = billingCycle === "monthly";
  const displayPrice = isMonthly ? `₹${product.monthlyPrice}` : `₹${product.yearlyPrice}`;
  const billingLabel = isMonthly ? "/ month" : "/ year";
  const effectiveMonthly = isMonthly ? null : Math.round(product.yearlyPrice / 12);
  const waDemoUrl = `https://wa.me/917070519128?text=${encodeURIComponent(product.whatsappMessage)}`;

  // Filter other 3 products for quick cross-navigation
  const otherProducts = publishedProducts.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero
        label={product.badge}
        title={product.title}
        description={product.overview}
        rightContent={
          <div className="rounded-2xl border border-border/90 bg-surface/95 p-6 shadow-xl backdrop-blur-md dark:bg-surface-strong/90">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Subscription Plan
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Live Ready
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-foreground">
                {displayPrice}
              </span>
              <span className="text-sm text-muted-foreground">{billingLabel}</span>
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Targeted for: <strong className="text-foreground">{product.targetAudience}</strong>
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={waDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-center text-xs font-bold text-white shadow-lg transition-all hover:opacity-95 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                <span>Book Free Live Demo on WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-muted-foreground">
                No credit card needed · 15-min personalized screen demo
              </p>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/products"
            className="interactive inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-brand transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>All Products</span>
          </Link>
          <span className="text-muted-foreground/40">•</span>
          <span className="text-xs text-brand font-medium">Verified In-House Software</span>
        </div>
      </PageHero>

      {/* ================= KEY BENEFITS STRIP ================= */}
      <Section className="border-b border-border py-10 bg-surface/30">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 50}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-foreground">{b.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= FULL MODULES BREAKDOWN ================= */}
      <Section className="border-b border-border">
        <div className="max-w-2xl mb-12">
          <span className="rule-label">01 — Full Module Architecture</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Everything built into {product.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Carefully crafted modules designed to eliminate paper registers and handle daily business operations with zero fuss.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.modules.map((mod, idx) => (
            <Reveal key={mod.title} delay={idx * 50}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all hover:border-brand/40 hover:shadow-md">
                <div>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3 text-brand shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= TRANSPARENT PRICING SECTION ================= */}
      <Section id="pricing" className="border-b border-border bg-surface/30">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="rule-label">02 — Simple, Honest Pricing</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            No hidden setup fees. No long contracts.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose monthly flexibility or save nearly 2 months with annual billing.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-xs">
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
        </div>

        <div className="max-w-lg mx-auto rounded-3xl border border-brand/40 bg-surface p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
              {product.title}
            </span>
            <span className="text-xs text-muted-foreground">Unlimited Cloud Backup</span>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-extrabold text-foreground">
              {displayPrice}
            </span>
            <span className="text-sm text-muted-foreground">{billingLabel}</span>
            {effectiveMonthly && (
              <span className="ml-auto rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Only ₹{effectiveMonthly}/month
              </span>
            )}
          </div>

          <ul className="mt-8 space-y-3 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>Full access to all 6 modules &amp; features</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>Free personalized 1-on-1 WhatsApp onboarding &amp; setup</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>Daily encrypted cloud database backups</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>Works on unlimited mobile phones, tablets, and computers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>Priority direct WhatsApp technical support from DEVGRONIX</span>
            </li>
          </ul>

          <div className="mt-8">
            <a
              href={waDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-center text-xs font-bold text-white shadow-lg transition-all hover:opacity-95 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="size-4" />
              <span>Book Free Live Demo on WhatsApp</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ================= 3-STEP ONBOARDING ================= */}
      <Section className="border-b border-border">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="rule-label">03 — Quick Onboarding</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Live in 3 simple steps
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand font-display font-bold text-sm">
              01
            </span>
            <h3 className="mt-4 font-display text-sm font-bold text-foreground">
              Book WhatsApp Demo
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Tap the button to request a demo. We connect on WhatsApp at a time that suits your schedule.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand font-display font-bold text-sm">
              02
            </span>
            <h3 className="mt-4 font-display text-sm font-bold text-foreground">
              10-Minute Setup
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              We help you configure your shifts, shop categories, or sales stages with your business logo.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand font-display font-bold text-sm">
              03
            </span>
            <h3 className="mt-4 font-display text-sm font-bold text-foreground">
              Run Smooth Operations
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Start managing admissions, credits, attendance, or leads immediately with zero stress.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= PRODUCT SPECIFIC FAQS ================= */}
      <Section className="border-b border-border bg-surface/30">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="rule-label">04 — Product FAQs</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {product.faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border bg-surface overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-foreground hover:text-brand transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`size-4 text-muted-foreground transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ================= CROSS SELL OTHER PRODUCTS ================= */}
      <Section className="border-b border-border">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="rule-label">Other Tools</span>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              Explore More DEVGRONIX In-House Software
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
          >
            <span>View All Products</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {otherProducts.map((p) => {
            const OtherIcon = getProductIcon(p.iconName);
            return (
              <Link
                key={p.id}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <OtherIcon className="size-4" />
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-foreground group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.tagline}</p>
                <span className="mt-3 inline-block font-display text-xs font-extrabold text-foreground">
                  ₹{p.monthlyPrice}/mo
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
