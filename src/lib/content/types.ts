/**
 * Shared content models.
 *
 * These mirror the future admin/database schema so the mock data layer in
 * `src/lib/content/*` can be swapped for a real backend without touching UI.
 */

export type ContentType = "demo" | "verified";
export type ContentStatus = "draft" | "published" | "archived";

export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  overview: string;
  capabilities: string[];
  helps: { title: string; body: string }[];
  technologies: string[];
  featured: boolean;
  status: ContentStatus;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  serviceId: string;
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
