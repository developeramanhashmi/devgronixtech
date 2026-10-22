import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
import { Container } from "@/components/site/Section";
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
  { value: "Under ₹5,000 / $60 / 220 AED", label: "₹999 – ₹5,000 (Starter / Basic)" },
  { value: "₹5,000 – ₹25,000 / $60 – $300 / 220 – 1,100 AED", label: "₹5,000 – ₹25,000 (Standard Business)" },
  { value: "₹25,000 – ₹1,00,000 / $300 – $1,200 / 1,100 – 4,400 AED", label: "₹25,000 – ₹1,00,000 (Custom Web / App)" },
  { value: "₹1,00,000+ / $1,200+ / 4,400+ AED", label: "₹1,00,000+ (Full Platform / Enterprise)" },
  { value: "Flexible Scope", label: "Flexible (Consultation & custom quote)" },
];

const timelines = [
  { value: "24–48 Hours", label: "Urgent (24–48 Hours Sprint)" },
  { value: "1–2 Weeks", label: "1–2 Weeks (Standard Website / Branding)" },
  { value: "1 Month", label: "1 Month (Full App / Custom System)" },
  { value: "Flexible", label: "Flexible (Planning & roadmap)" },
];

const clientLocations = [
  { value: "India", label: "🇮🇳 India (Domestic / Local)" },
  { value: "UAE", label: "🇦🇪 UAE (Dubai, Abu Dhabi, Sharjah)" },
  { value: "Saudi Arabia", label: "🇸🇦 Saudi Arabia (Riyadh, Jeddah)" },
  { value: "International", label: "🌍 Other Global Markets" },
];

type Errors = Record<string, string>;

function ContactPage() {
  const { service: requestedService } = Route.useSearch();
  const initialService =
    publishedServices.find((s) => s.slug === requestedService)?.slug ??
    publishedServices[0]?.slug ??
    "web-development";

  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedBudget, setSelectedBudget] = useState(budgets[0].value);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1].value);
  const [selectedLocation, setSelectedLocation] = useState(clientLocations[0].value);

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
    if (description.trim().length < 15) {
      next["description"] = "Please give a brief project outline (at least 15 characters).";
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
      `📝 *Project Overview:*`,
      description.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/917070519128?text=${encodeURIComponent(waMessage)}`;

    startTransition(async () => {
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            company: company.trim() ? `${company.trim()} (${selectedLocation})` : selectedLocation,
            service: currentServiceTitle,
            description: `[Budget: ${selectedBudget}] [Timeline: ${selectedTimeline}] [Phone: ${phone.trim() || "N/A"}]\n\n${description.trim()}`,
          }),
        });
      } catch {
        // Fallback
      }

      setSubmittedSuccess(true);
      window.open(waUrl, "_blank");
    });
  }

  const activeServiceObj = publishedServices.find((s) => s.slug === selectedService);

  return (
    <>
      <PageHero
        label="Start Your Project"
        title="Tell us what you're building."
        description="Select your service, choose your target budget and timeline. We'll send a scoped quote back within 24 hours."
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Accepting New Sprints &bull; Quick WhatsApp Response
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <Globe className="h-3.5 w-3.5 text-brand" />
            Serving India, UAE, Saudi Arabia & Global
          </div>
        </div>
      </PageHero>

      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Soft Ambient 3D Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-gradient-to-tr from-brand/20 via-sky-500/10 to-indigo-500/10 blur-[130px] -z-10" />

        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            
            {/* Left Column: Trust signals & Direct Contacts (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Reveal>
                <div className="rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/50 to-card/20 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-brand/40">
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand shadow-inner">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-foreground">DEVGRONIX Advantage</h3>
                      <p className="text-xs text-muted-foreground">High quality, fast delivery & affordable.</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-500 shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Websites from ₹999 / $15</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Clear upfront pricing, no hidden agency commissions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-sky-500/10 p-2 text-sky-500 shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">24–48 Hours Turnaround</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Rapid landing pages, custom printing designs & urgent updates.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-indigo-500/10 p-2 text-indigo-500 shrink-0">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Direct Technical Founder Access</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          Direct collaboration with engineers, no middlemen.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick CTAs */}
                  <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-3">
                    <a
                      href="https://wa.me/917070519128?text=Hi%20DEVGRONIX%2C%20I%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01] hover:shadow-emerald-500/30 active:scale-[0.99]"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Chat on WhatsApp (Instant)
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>

                    <a
                      href="mailto:admin@devgronix.in"
                      className="flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background/50 px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-muted/70 hover:border-brand/40"
                    >
                      <Mail className="h-4 w-4 text-brand" />
                      admin@devgronix.in
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl border border-border/40 bg-muted/20 p-3.5 text-center">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Accepted Payment Modes
                    </p>
                    <p className="text-xs font-medium text-foreground/80">
                      ⚡ UPI &bull; 🏦 IMPS/NEFT &bull; 💳 Stripe / Wise (AED/USD)
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Compact Dynamic Dropdown Form (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="relative rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-card/60 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

                  <div className="mb-6 pb-4 border-b border-border/60">
                    <h2 className="text-lg font-bold text-foreground">Project Scope &amp; Estimation</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Select your parameters below to generate an accurate quotation.
                    </p>
                  </div>

                  {submittedSuccess && (
                    <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-foreground">Inquiry Sent Successfully!</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            We've logged your request in Resend and forwarded the details to WhatsApp.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Row 1: Service Dropdown + Market Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Service Needed *
                        </label>
                        <div className="relative">
                          <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer pr-9"
                          >
                            {publishedServices.map((svc) => (
                              <option key={svc.slug} value={svc.slug} className="bg-card text-foreground">
                                {svc.title}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        {activeServiceObj && (
                          <p className="text-[11px] text-brand mt-1 truncate">
                            {activeServiceObj.tagline}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Target Location / Currency
                        </label>
                        <div className="relative">
                          <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer pr-9"
                          >
                            {clientLocations.map((loc) => (
                              <option key={loc.value} value={loc.value} className="bg-card text-foreground">
                                {loc.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Budget Dropdown + Timeline Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Approximate Budget
                        </label>
                        <div className="relative">
                          <select
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer pr-9"
                          >
                            {budgets.map((b) => (
                              <option key={b.value} value={b.value} className="bg-card text-foreground">
                                {b.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Target Timeline
                        </label>
                        <div className="relative">
                          <select
                            value={selectedTimeline}
                            onChange={(e) => setSelectedTimeline(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer pr-9"
                          >
                            {timelines.map((t) => (
                              <option key={t.value} value={t.value} className="bg-card text-foreground">
                                {t.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className={cn(
                            "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
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
                        <label className="block text-xs font-medium text-foreground mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className={cn(
                            "w-full rounded-xl border bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
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

                    {/* Row 4: Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">
                          WhatsApp / Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-border/70 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">
                          Brand / Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Your Brand or Startup"
                          className="w-full rounded-xl border border-border/70 bg-background/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </div>
                    </div>

                    {/* Project Requirements */}
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">
                        Project Brief &amp; Requirements *
                      </label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you want to build, any reference sites or specific features you need..."
                        className={cn(
                          "w-full rounded-xl border bg-background/80 p-3 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20",
                          errors["description"] ? "border-red-500/80 bg-red-500/5" : "border-border/70",
                        )}
                      />
                      {errors["description"] && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors["description"]}
                        </p>
                      )}
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-brand via-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-brand/40 active:scale-[0.99] disabled:opacity-50"
                      >
                        {isPending ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Sending Details...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span>Submit Request &amp; Open WhatsApp</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
                        ⚡ Direct response &bull; Email sent via Resend &amp; instant connection on WhatsApp.
                      </p>
                    </div>

                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
