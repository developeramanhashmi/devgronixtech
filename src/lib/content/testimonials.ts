import type { Testimonial } from "./types";

/**
 * Sample testimonials. All entries are `contentType: "demo"` placeholder copy
 * written for layout purposes — they do not represent real people or clients
 * and are labelled as samples in the UI until verified entries replace them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "tst-1",
    name: "Sample Client A",
    designation: "Operations Director",
    company: "Logistics company (sample)",
    country: "India",
    photo: null,
    testimonial:
      "Placeholder copy for layout review: the team mapped our dispatch process before writing code, and the system matched how we already work.",
    rating: 5,
    contentType: "demo",
    status: "published",
    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
  {
    id: "tst-2",
    name: "Sample Client B",
    designation: "Founder",
    company: "Retail brand (sample)",
    country: "Saudi Arabia",
    photo: null,
    testimonial:
      "Placeholder copy for layout review: clear weekly updates, no surprises on scope, and a site that finally loads quickly on mobile.",
    rating: 5,
    contentType: "demo",
    status: "published",
    createdAt: "2026-01-20",
    updatedAt: "2026-01-20",
  },
  {
    id: "tst-3",
    name: "Sample Client C",
    designation: "Product Manager",
    company: "Health platform (sample)",
    country: "UAE",
    photo: null,
    testimonial:
      "Placeholder copy for layout review: the design system they handed over meant our own developers could keep shipping consistently.",
    rating: 4,
    contentType: "demo",
    status: "published",
    createdAt: "2026-02-02",
    updatedAt: "2026-02-02",
  },
];

export const publishedTestimonials = testimonials.filter((t) => t.status === "published");
