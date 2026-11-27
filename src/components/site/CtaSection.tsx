import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  Linkedin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { homepage } from "@/lib/content/home";
import { Container } from "./Section";
import { Reveal } from "./Reveal";

export function CtaSection({
  title = homepage.cta.title,
  description = homepage.cta.description,
}: {
  title?: string;
  description?: string;
}) {
  const { primaryCta, secondaryCta } = homepage.cta;

  const founderWhatsappUrl =
    "https://wa.me/917070519128?text=" +
    encodeURIComponent(
      "Hi Aman, I'm looking to start a new project with DEVGRONIX. Let's discuss scope, timeline and pricing."
    );

  // Aman Hashmi / Alam LinkedIn Profile
  const founderLinkedinUrl = "https://www.linkedin.com/in/hashmiaman";

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-brand/25 bg-card/90 p-5 sm:p-7 lg:p-8 shadow-xl backdrop-blur-xl">
          {/* Ambient Glows & Grid Pattern */}
          <div aria-hidden="true" className="absolute inset-0 grid-field opacity-30 pointer-events-none" />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-60 rounded-full bg-brand/15 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -left-20 -bottom-20 size-60 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/35 bg-brand/10 px-3 py-0.5 text-[11px] font-semibold text-brand backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                <span>Fast-Track Sprint Available</span>
                <Sparkles className="size-3" />
              </div>

              <h2 className="font-display text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                {title}
              </h2>

              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>

              {/* Trust Value Props - compact row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-foreground/90">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>24–48h Rapid Turnaround</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>100% Upfront Pricing</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Full Code & Asset Ownership</span>
                </div>
              </div>

              {/* Action Buttons - compact heights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  to={primaryCta.to}
                  className="interactive group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand via-sky-500 to-indigo-600 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all hover:scale-[1.02]"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={founderWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all hover:bg-emerald-500/20"
                >
                  <MessageCircle className="size-3.5" />
                  Chat with Founder
                </a>

                <Link
                  to={secondaryCta.to}
                  className="interactive inline-flex items-center rounded-full border border-border px-3.5 py-2.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-brand hover:text-brand"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* Right Column: Sleek Founder Direct-Connect Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/70 bg-background/80 p-4 sm:p-5 shadow-lg backdrop-blur-xl">
                {/* Header with Avatar + Details + Status */}
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    {/* Founder Avatar with Graceful Fallback */}
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-brand/40 bg-gradient-to-tr from-brand to-sky-500 shadow-sm">
                      <img
                        src="/aman-alam.jpg"
                        alt="Aman Hashmi - Founder of DEVGRONIX"
                        className="size-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="flex size-full items-center justify-center font-display text-xs font-bold text-white">
                        AA
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold text-foreground truncate">Aman Hashmi</h3>
                        <a
                          href={founderLinkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect on LinkedIn"
                          className="interactive rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-[#0A66C2] transition-colors"
                        >
                          <Linkedin className="size-3" />
                        </a>
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate">Founder & Lead Engineer</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 shrink-0">
                    <span className="relative flex size-1.5">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span>Online</span>
                  </div>
                </div>

                {/* Key Metrics / Value Points */}
                <div className="mt-3 space-y-1.5 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="size-3 text-brand shrink-0" />
                    <span>Average reply: <strong className="text-foreground">under 15 mins</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="size-3 text-sky-400 shrink-0" />
                    <span>Serving <strong className="text-foreground">India, UAE & Global clients</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-3 text-emerald-400 shrink-0" />
                    <span>Direct founder accountability on delivery</span>
                  </div>
                </div>

                {/* Direct Connect Buttons */}
                <div className="mt-3.5 grid grid-cols-2 gap-2">
                  <a
                    href={founderWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[11px] font-bold text-white shadow-sm transition-all hover:bg-[#20bd5a]"
                  >
                    <MessageCircle className="size-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+917070519128"
                    className="interactive flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-[11px] font-semibold text-foreground transition-all hover:border-brand"
                  >
                    <Phone className="size-3" />
                    Call Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
