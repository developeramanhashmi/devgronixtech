import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState, useTransition } from "react";

import { breadcrumbSchema, jsonLdScript, seoHead } from "@/lib/seo";
import { publishedServices } from "@/lib/content/services";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const value = search["service"];
    return typeof value === "string" && value.length > 0 ? { service: value } : {};
  },
  head: () => ({
    ...seoHead({
      title: "Contact DEVGRONIX | Get a Quick Project Quote",
      description:
        "Tell DEVGRONIX about your project — service, budget range, and timeline. Serving businesses in India, UAE (Dubai), Saudi Arabia, and globally with transparent pricing.",
      path: "/contact",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ]),
    ],
  }),
  component: ContactPage,
});

const budgets = [
  { label: "₹999 – ₹5,000", sub: "Starter / Basic ($15 – $60 / 50 – 220 AED)" },
  { label: "₹5,000 – ₹25,000", sub: "Standard Business ($60 – $300 / 220 – 1,100 AED)" },
  { label: "₹25,000 – ₹1,00,000", sub: "Custom Web / App ($300 – $1,200 / 1,100 – 4,400 AED)" },
  { label: "₹1,00,000+", sub: "Full Platform / Enterprise ($1,200+ / 4,400+ AED)" },
  { label: "Flexible", sub: "Need consultation & quote first" },
];

const timelines = [
  { label: "Urgent (24–48 Hours)", desc: "Quick landing page, poster, or bug fix" },
  { label: "1–2 Weeks", desc: "Standard business website or branding" },
  { label: "1 Month", desc: "Full web app or custom software" },
  { label: "Flexible", desc: "Planning & discovery phase" },
];

const clientLocations = [
  { label: "🇮🇳 India", code: "IN" },
  { label: "🇦🇪 UAE (Dubai / Abu Dhabi)", code: "UAE" },
  { label: "🇸🇦 Saudi Arabia", code: "KSA" },
  { label: "🌍 Other International", code: "GLOBAL" },
];

type Errors = Record<string, string>;

function ContactPage() {
  const { service: requestedService } = Route.useSearch();
  const initialService =
    publishedServices.find((s) => s.slug === requestedService)?.slug ??
    publishedServices[0]?.slug ??
    "web-development";

  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedBudget, setSelectedBudget] = useState(budgets[0].label);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1].label);
  const [selectedLocation, setSelectedLocation] = useState(clientLocations[0].label);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [isPending, startTransition] = useTransition();
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      next["email"] = "Please enter a valid email address.";
    }
    if (phone.trim() && phone.trim().length < 8) {
      next["phone"] = "Please enter a valid phone or WhatsApp number.";
    }
    if (description.trim().length < 15) {
      next["description"] = "Please describe what you need in at least 15 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    const currentServiceTitle =
      publishedServices.find((s) => s.slug === selectedService)?.title ?? selectedService;

    const waMessage = [
      "🚀 *New Project Enquiry | DEVGRONIX*",
      "",
      `👤 *Name:* ${name.trim()}`,
      `📧 *Email:* ${email.trim()}`,
      phone.trim() ? `📱 *Phone:* ${phone.trim()}` : "",
      company.trim() ? `🏢 *Company:* ${company.trim()}` : "",
      `📍 *Location:* ${selectedLocation}`,
      `🛠️ *Service:* ${currentServiceTitle}`,
      `💰 *Budget:* ${selectedBudget}`,
      `⏱️ *Timeline:* ${selectedTimeline}`,
      "",
      `📝 *Project Details:*`,
      description.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    startTransition(async () => {
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            company: company.trim()
              ? `${company.trim()} (${selectedLocation})`
              : selectedLocation,
            service: currentServiceTitle,
            description: `[Budget: ${selectedBudget}] [Timeline: ${selectedTimeline}] [Phone: ${phone.trim() || "N/A"}]\n\n${description.trim()}`,
          }),
        });
      } catch {
        // Fallback continues without blocking WhatsApp
      }

      setSubmittedSuccess(true);
      window.open(
        `https://wa.me/917070519128?text=${encodeURIComponent(waMessage)}`,
        "_blank",
      );
    });
  }

  const activeServiceObj = publishedServices.find((s) => s.slug === selectedService);

  return (
    <>
      <PageHero
        label="Let's Talk"
        title="Transform Your Vision Into Reality."
        description="Fill out the project scope below. We verify every requirement and send back a transparent quote within a few hours."
      >
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Accepting New Projects &bull; Quick Response Guaranteed
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <Globe className="h-3.5 w-3.5 text-brand" />
            Serving India, UAE, Saudi Arabia & Global
          </div>
        </div>
      </PageHero>

      <Section className="relative py-12 md:py-20 overflow-hidden">
        {/* Ambient 3D Glow spheres in background */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-gradient-to-tr from-brand/20 via-sky-500/10 to-indigo-500/10 blur-[120px] -z-10" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-brand/10 blur-[100px] -z-10" />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left 3D Perspective Card (Details & Trust signals) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Reveal>
                <div className="group relative rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/50 to-card/20 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(59,130,246,0.15)] hover:border-brand/40">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
                  
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand shadow-inner">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">Why DEVGRONIX?</h3>
                      <p className="text-xs text-muted-foreground">High quality, unbeatable pricing & speed.</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-500 shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Starting from ₹999 / $15</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Transparent quote with no hidden charges. Flexible milestone payments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-sky-500/10 p-2 text-sky-500 shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">24–48 Hours Turnaround</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Fast delivery for landing pages, branding designs and quick sprints.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-indigo-500/10 p-2 text-indigo-500 shrink-0">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Direct Technical Founder Contact</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Talk directly to engineers and creators, zero agency bureaucracy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-3">
                    <a
                      href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-emerald-500/30 active:scale-[0.98]"
                    >
                      <span className="flex items-center gap-2.5">
                        <MessageSquare className="h-4 w-4" />
                        Chat on WhatsApp (Fastest)
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>

                    <a
                      href="mailto:admin@devgronix.in"
                      className="flex items-center justify-center gap-2 rounded-2xl border border-border/80 bg-background/50 px-4 py-3 text-xs font-medium text-foreground transition-all hover:bg-muted/70 hover:border-brand/40"
                    >
                      <Mail className="h-4 w-4 text-brand" />
                      admin@devgronix.in
                    </a>
                  </div>

                  {/* Payment Trust Badge */}
                  <div className="mt-6 rounded-2xl border border-border/40 bg-muted/20 p-4 text-center">
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Trusted Payment Methods
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-foreground/80">
                      <span className="inline-flex items-center gap-1">⚡ UPI / GPay / PhonePe</span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">🏦 Bank IMPS / NEFT</span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">🌐 Stripe / Wise (AED/USD)</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Interactive Form (3D Raised Panel) */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="relative rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/80 to-card/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

                  {submittedSuccess && (
                    <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 text-emerald-300">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-foreground">Your inquiry has been submitted!</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            We have received your email via Resend and opened WhatsApp with your scoped details.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-7">
                    
                    {/* Step 1: Service Selection Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        1. Select Service *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {publishedServices.map((svc) => {
                          const isSelected = selectedService === svc.slug;
                          return (
                            <button
                              type="button"
                              key={svc.slug}
                              onClick={() => setSelectedService(svc.slug)}
                              className={cn(
                                "flex flex-col items-start justify-between rounded-2xl border p-3.5 text-left text-xs transition-all duration-200",
                                isSelected
                                  ? "border-brand bg-brand/10 text-brand shadow-[0_0_20px_rgba(59,130,246,0.2)] ring-1 ring-brand font-semibold scale-[1.01]"
                                  : "border-border/60 bg-background/50 text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                              )}
                            >
                              <span className="line-clamp-1 font-medium">{svc.title}</span>
                              <span className="text-[10px] opacity-75 mt-1">Starting cheap</span>
                            </button>
                          );
                        })}
                      </div>
                      {activeServiceObj && (
                        <p className="text-xs text-brand mt-2 pl-1 font-medium">
                          &bull; Selected: {activeServiceObj.title} &mdash; {activeServiceObj.tagline}
                        </p>
                      )}
                    </div>

                    {/* Step 2: Location selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        2. Your Location / Market
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {clientLocations.map((loc) => (
                          <button
                            type="button"
                            key={loc.code}
                            onClick={() => setSelectedLocation(loc.label)}
                            className={cn(
                              "rounded-xl border py-2 px-3 text-center text-xs transition-all",
                              selectedLocation === loc.label
                                ? "border-brand bg-brand/15 text-foreground font-semibold ring-1 ring-brand"
                                : "border-border/60 bg-background/40 text-muted-foreground hover:bg-muted/50",
                            )}
                          >
                            {loc.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Budget Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        3. Approximate Budget
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b.label}
                            onClick={() => setSelectedBudget(b.label)}
                            className={cn(
                              "flex flex-col rounded-xl border p-2.5 text-left transition-all",
                              selectedBudget === b.label
                                ? "border-brand bg-brand/15 text-foreground font-semibold ring-1 ring-brand"
                                : "border-border/60 bg-background/40 text-muted-foreground hover:bg-muted/50",
                            )}
                          >
                            <span className="text-xs font-semibold">{b.label}</span>
                            <span className="text-[10px] text-muted-foreground mt-0.5">{b.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 4: Timeline */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        4. Expected Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timelines.map((t) => (
                          <button
                            type="button"
                            key={t.label}
                            onClick={() => setSelectedTimeline(t.label)}
                            className={cn(
                              "rounded-xl border p-2 text-center text-xs transition-all flex flex-col justify-center items-center gap-0.5",
                              selectedTimeline === t.label
                                ? "border-brand bg-brand/15 text-foreground font-semibold ring-1 ring-brand"
                                : "border-border/60 bg-background/40 text-muted-foreground hover:bg-muted/50",
                            )}
                          >
                            <span className="font-semibold text-[11px]">{t.label}</span>
                            <span className="text-[9px] text-muted-foreground">{t.desc.split(" ")[0]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 5: Contact Info Inputs */}
                    <div className="border-t border-border/60 pt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Rahul Sharma / Ahmed"
                            className={cn(
                              "w-full rounded-xl border bg-background/80 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
                              errors["name"] ? "border-red-500/80 bg-red-500/5" : "border-border/70",
                            )}
                          />
                          {errors["name"] && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors["name"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className={cn(
                              "w-full rounded-xl border bg-background/80 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
                              errors["email"] ? "border-red-500/80 bg-red-500/5" : "border-border/70",
                            )}
                          />
                          {errors["email"] && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors["email"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">
                            Phone / WhatsApp Number (Optional)
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">
                            Company or Brand Name (Optional)
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="DEVGRONIX / Studio / Startup"
                            className="w-full rounded-xl border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">
                          Tell us about your project & requirements *
                        </label>
                        <textarea
                          rows={4}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="What are you building? Tell us any specific features, design preference, reference links or questions you have..."
                          className={cn(
                            "w-full rounded-xl border bg-background/80 p-3.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
                            errors["description"]
                              ? "border-red-500/80 bg-red-500/5"
                              : "border-border/70",
                          )}
                        />
                        {errors["description"] && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors["description"]}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand via-blue-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-brand/40 active:scale-[0.99] disabled:opacity-50"
                      >
                        {isPending ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Sending Quote Details...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span>Send Inquiry & Open WhatsApp Chat</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="mt-3 text-center text-[11px] text-muted-foreground">
                        🔒 Safe & confidential. Your inquiry sends a backup email via Resend and connects directly to DEVGRONIX on WhatsApp.
                      </p>
                    </div>

                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}
