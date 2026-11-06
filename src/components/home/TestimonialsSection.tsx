import { CheckCircle2, ExternalLink, Quote, Star } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const googleReviews = [
  {
    id: "g-review-1",
    author: "Tahsin Raza",
    rating: 5,
    text: "very affordable and best support 1 year free and free domain and hosting 1 year",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-2",
    author: "Veerapandiyar",
    rating: 5,
    text: "best website development agency in cheap and best price best design.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-3",
    author: "Sameer Dixit",
    rating: 5,
    text: "very affordable and best 1 year free support",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-4",
    author: "Abdullah Dyer",
    rating: 5,
    text: "best website designing agency",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-5",
    author: "Sapna Majumdar",
    rating: 5,
    text: "The dedication and UI/UX clarity the DEVGRONIX team brought to DreamSarthi was exceptional",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-6",
    author: "Fahad Al-Mansoor",
    rating: 4.5,
    text: "Delivered our bilingual Arabic/English digital store on an aggressive 2-week schedule.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-7",
    author: "Shiva SS",
    rating: 5,
    text: "DEVGRONIX built our entire studio web platform with dynamic galleries and an automated inquiry system.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "g-review-8",
    author: "Bilal Sethi",
    rating: 4.5,
    text: "Delivered our bilingual Arabic/English digital store",
    timeAgo: "Verified Google Review",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="border-b border-border bg-surface/40">
      <SectionHeading
        index="06"
        label="Client Stories & Trust"
        title="Rated 5.0 Stars by Founders & Businesses."
        description="Real feedback from verified clients on our official Google Business Profile."
      />

      {/* Google Trust Banner */}
      <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand/20 bg-brand/5 p-4 sm:p-6 dark:bg-brand/10">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-zinc-900">
            <span className="font-display text-xl font-bold text-[#4285F4]">G</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-bold text-foreground">
                5.0 Google Rating
              </span>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    aria-hidden="true"
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Verified Business Profile · Gachibowli, Hyderabad
            </p>
          </div>
        </div>

        <a
          href="https://search.google.com/local/writereview?placeid=ChIJ30euZCiTyzsR7wkuvUFsb_I"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        >
          <span>Write a Google Review</span>
          <ExternalLink className="size-3.5" />
        </a>
      </Reveal>

      {/* Review Cards Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {googleReviews.map((review, i) => (
          <Reveal
            key={review.id}
            delay={i * 60}
            className="card-interactive relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-lg dark:border-white/10 dark:bg-surface-strong/80"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className="size-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-chart-3/30 bg-chart-3/10 px-2 py-0.5 text-[0.625rem] font-semibold text-chart-3">
                  <CheckCircle2 className="size-2.5" />
                  Google Verified
                </span>
              </div>

              <Quote className="mt-4 size-6 text-brand/20" aria-hidden="true" />

              <blockquote className="mt-2 text-xs leading-relaxed text-foreground/90">
                "{review.text}"
              </blockquote>
            </div>

            <div className="mt-6 border-t border-border/60 pt-4">
              <p className="font-display text-xs font-bold text-foreground">
                {review.author}
              </p>
              <p className="text-[0.625rem] text-muted-foreground">
                {review.timeAgo}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
