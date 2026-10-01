/**
 * Shared content models.
 *
 * These mirror the future admin/database schema so the mock data layer in
 * `src/lib/content/*` can be swapped for a real backend without touching UI.
 */

export type ContentType = "demo" | "verified";
export type ContentStatus = "draft" | "published" | "archived";

/** Top-level grouping used to organise the service directory. */
export type ServiceGroup = "Technology & Development" | "Design & Creative" | "Digital Growth";

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Search metadata for a service. Held in the content layer so a future admin
 * panel can manage SEO title, description, H1, search intent and FAQs.
 */
export interface ServiceSeo {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Search intent this page is written for — never rendered as keyword text. */
  keywords: string[];
  faqs: Faq[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  group: ServiceGroup;
  tagline: string;
  description: string;
  icon: string;
  overview: string;
  /** Concrete deliverables — "What we offer". */
  offers: string[];
  capabilities: string[];
  helps: { title: string; body: string }[];
  technologies: string[];
  featured: boolean;
  status: ContentStatus;
  order: number;
}

/**
 * Pricing plan. Always belongs to exactly one service, so pricing can be
 * managed per service from a future admin panel.
 */
export interface PricingPlan {
  id: string;
  serviceId: string;
  name: string;
  description: string;
  /** Display price, e.g. "₹45,000". Paired with `priceNote` for context. */
  price: string;
  /** Optional original price shown struck-through, e.g. "₹1,999". */
  originalPrice?: string;
  /** "Starting from" style qualifier shown above the price. */
  priceQualifier: string;
  /** Unit or cadence: "per project", "per month", "per video", "per design". */
  billingType: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  status: ContentStatus;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  /** Primary service. */
  serviceId: string;
  /** All services this project belongs to — drives related-work listings. */
  serviceIds: string[];
  shortDescription: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  technologies: string[];
  thumbnail: string;
  gallery: string[];
  featured: boolean;
  status: ContentStatus;
  contentType: ContentType;
  clientName: string | null;
  clientCountry: string | null;
  year: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  country: string;
  photo: string | null;
  testimonial: string;
  rating: number;
  contentType: ContentType;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface HomepageContent {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: { label: string; to: string };
    secondaryCta: { label: string; to: string };
  };
  strip: string[];
  why: { title: string; description: string; points: { title: string; body: string }[] };
  process: { number: string; title: string; body: string }[];
  technology: { group: string; items: string[] }[];
  cta: {
    title: string;
    description: string;
    primaryCta: { label: string; to: string };
    secondaryCta: { label: string; to: string };
  };
}
