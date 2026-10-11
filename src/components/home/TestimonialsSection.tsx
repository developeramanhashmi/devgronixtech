import { CheckCircle2, Quote, Star } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const clientStories = [
  {
    id: "review-1",
    name: "Shiva SS",
    role: "Founder & Creative Director",
    company: "SS Fashion Photography Studio",
    location: "Telangana, India",
    project: "Dynamic Studio Platform & Booking",
    rating: 5,
    text: "DEVGRONIX built our entire studio web platform with dynamic galleries and an automated inquiry system. Within the first month of launch, our client bookings increased noticeably. Incredible design and lightning-fast loading speed.",
  },
  {
    id: "review-2",
    name: "Sapna Majumdar",
    role: "Founder",
    company: "DreamSarthi",
    location: "India",
    project: "Women-Led Mobility Web Platform",
    rating: 5,
    text: "The dedication and UI/UX clarity the DEVGRONIX team brought to DreamSarthi was exceptional. They understood the nuances of our mission and delivered a smooth, safe, and mobile-responsive experience.",
  },
  {
    id: "review-3",
    name: "Fahad Al-Mansoor",
    role: "Managing Director",
    company: "Gulf Retail & Trading LLC",
    location: "Dubai, UAE",
    project: "Bilingual E-Commerce & Web Presence",
    rating: 5,
    text: "Delivered our bilingual Arabic/English digital store on an aggressive 2-week schedule. Communication over WhatsApp and Zoom was real-time and crystal clear despite the cross-border setup. Truly world-class value.",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="border-b border-border bg-surface/40">
      <SectionHeading
        index="06"
        label="Client Stories"
        title="Trusted by founders, startups and growing brands."
        description="Real outcomes delivered for businesses across India, the Middle East and international markets."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {clientStories.map((review, i) => (
          <Reveal
            key={review.id}
            delay={i * 70}
            className="card-interactive relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface p-8 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-xl dark:border-white/10 dark:bg-surface-strong/80"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className="size-4 fill-brand text-brand"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-chart-3/30 bg-chart-3/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-chart-3">
                  <CheckCircle2 className="size-3" />
                  Verified Client
                </span>
              </div>

              <Quote className="mt-6 size-8 text-brand/20" aria-hidden="true" />

              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90">
                "{review.text}"
              </blockquote>
            </div>

            <div className="mt-8 border-t border-border/70 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.role} · <strong className="text-foreground/80">{review.company}</strong>
                  </p>
                  <p className="mt-0.5 text-[0.6875rem] text-muted-foreground">
                    📍 {review.location}
                  </p>
                </div>
              </div>
              <div className="mt-3 rounded-md bg-background/80 px-2.5 py-1 text-[0.6875rem] font-medium text-brand">
                🚀 {review.project}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
