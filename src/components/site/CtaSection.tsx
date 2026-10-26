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

  // Aman Alam LinkedIn Profile
  const founderLinkedinUrl = "https://www.linkedin.com/in/hashmiaman";

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card/90 p-7 shadow-2xl backdrop-blur-2xl sm:p-10 lg:p-14">
          {/* Ambient Glows & Grid Pattern */}
          <div aria-hidden="true" className="absolute inset-0 grid-field opacity-40 pointer-events-none" />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-80 rounded-full bg-brand/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -left-20 -bottom-20 size-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                <span>Fast-Track Sprint Available</span>
                <Sparkles className="size-3" />
              </div>

              <h2 className="mt-4 font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>

              {/* Trust Value Props */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-foreground">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>24–48h Rapid Turnaround</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>100% Upfront Pricing</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Full Code & Asset Ownership</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to={primaryCta.to}
                  className="interactive group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand via-sky-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all hover:scale-[1.02]"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={founderWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all hover:bg-emerald-500/20"
                >
                  <MessageCircle className="size-4" />
                  Chat with Founder
                </a>

                <Link
                  to={secondaryCta.to}
                  className="interactive inline-flex items-center rounded-full border border-border-strong px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand hover:text-brand"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* Right Column: Founder Direct-Connect Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/80 p-6 shadow-xl backdrop-blur-xl">
                {/* Header with Avatar + Details + Status */}
                <div className="flex items-center justify-between pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3.5">
                    {/* Founder Avatar with Graceful Fallback */}
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-brand/40 bg-gradient-to-tr from-brand to-sky-500 shadow-md">
                      <img
                        src="/aman-alam.jpg"
                        alt="Aman Hashmi - Founder of DEVGRONIX"
                        className="size-full object-cover"
                        onError={(e) => {
                          // Agar image abhi upload nahi hui, to elegant letter avatar show karega
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="flex size-full items-center justify-center font-display text-sm font-bold text-white">
                        AA
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-foreground">Aman Hashmi</h3>
                        <a
                          href={founderLinkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect on LinkedIn"
                          className="interactive rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-[#0A66C2] transition-colors"
                        >
                          <Linkedin className="size-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground">Founder & Lead Engineer</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Online
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="size-3.5 text-brand" />
                    <span>Average reply time: <strong className="text-foreground">under 15 minutes</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="size-3.5 text-sky-400" />
                    <span>Serving clients in <strong className="text-foreground">India, UAE & Worldwide</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-3.5 text-emerald-400" />
                    <span>Direct personal accountability on every deliverable</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={founderWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20bd5a]"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Direct
                  </a>
                  <a
                    href="tel:+917070519128"
                    className="interactive flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-xs font-semibold text-foreground transition-all hover:border-brand"
                  >
                    <Phone className="size-3.5" />
                    Call Us
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
