import type { Project } from "./types";

const now = "2026-03-01";

/**
 * Sample portfolio entries. Every item is `contentType: "demo"` — concept work
 * created to populate the site during development. The UI labels them as
 * concept projects; verified client work replaces them later.
 *
 * `thumbnail` holds an abstract cover pattern key rendered by
 * `ProjectCover` (no stock photography).
 */
export const projects: Project[] = [
  {
    id: "prj-1",
    title: "AI Job Discovery Platform",
    slug: "ai-job-discovery-platform",
    category: "AI",
    serviceId: "svc-ai",
    shortDescription: "A matching engine that ranks roles against a candidate's real skill history.",
    description:
      "A concept platform where candidates describe their experience once and receive ranked, explained matches instead of an endless keyword feed.",
    challenge:
      "Keyword search returns volume, not relevance. Candidates abandon job boards because the first page rarely reflects what they can actually do.",
    approach:
      "We modelled skills as structured data, then layered semantic matching on top so the ranking could be explained back to the candidate in plain language.",
    solution:
      "A search and recommendation surface with transparent match reasons, saved searches and recruiter-side filtering built on the same index.",
    features: [
      "Semantic role matching with explanations",
      "Structured skill profiles",
      "Saved searches and alerts",
      "Recruiter shortlisting workspace",
      "Application tracking",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AI APIs", "Vector search"],
    thumbnail: "mesh",
    gallery: ["mesh", "grid", "lines"],
    featured: true,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2026",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-2",
    title: "E-commerce Experience",
    slug: "ecommerce-experience",
    category: "Web Development",
    serviceId: "svc-web",
    shortDescription: "A storefront concept tuned for mobile browsing and fast checkout.",
    description:
      "A retail storefront concept built around a short path from discovery to paid order, with merchandising the team can run themselves.",
    challenge:
      "Mobile shoppers drop off between product page and payment when pages are heavy and the cart takes too many steps.",
    approach:
      "We reduced the checkout to two screens, pre-rendered catalogue pages and moved merchandising into editable content blocks.",
    solution:
      "A fast storefront with structured product data, editable collections and a checkout that holds state across sessions.",
    features: [
      "Two-step checkout",
      "Editable collections and merchandising",
      "Product search and filtering",
      "Wishlist and saved carts",
      "Order tracking",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    thumbnail: "grid",
    gallery: ["grid", "mesh"],
    featured: true,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2026",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-3",
    title: "Business Management Software",
    slug: "business-management-software",
    category: "Software",
    serviceId: "svc-software",
    shortDescription: "Quotes, jobs, invoicing and team scheduling in one internal system.",
    description:
      "An internal operations concept replacing a stack of spreadsheets with a single system covering quotes through invoicing.",
    challenge:
      "Duplicate data entry across spreadsheets made job status unreliable and month-end reporting manual.",
    approach:
      "We mapped the existing workflow end to end, then modelled it as one record moving through defined states.",
    solution:
      "Role-based workspaces for sales, operations and accounts, with shared records, audit history and exportable reporting.",
    features: [
      "Quote to invoice pipeline",
      "Role-based permissions",
      "Team scheduling calendar",
      "Audit history on every record",
      "Exportable reports",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    thumbnail: "lines",
    gallery: ["lines", "grid"],
    featured: true,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2026",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-4",
    title: "SaaS Analytics Dashboard",
    slug: "saas-analytics-dashboard",
    category: "UI/UX",
    serviceId: "svc-uiux",
    shortDescription: "A dashboard system that answers one question per screen.",
    description:
      "A analytics interface concept designed around the three questions product teams ask daily, rather than a wall of charts.",
    challenge:
      "Dense dashboards show everything and explain nothing, so teams export to spreadsheets anyway.",
    approach:
      "We ranked metrics by decision value, gave each screen a single question, and designed drill-down as a deliberate second step.",
    solution:
      "A token-based dashboard system with a documented component library, empty states and responsive behaviour down to mobile.",
    features: [
      "One question per screen",
      "Drill-down detail views",
      "Documented component library",
      "Designed empty and loading states",
      "Light and dark themes",
    ],
    technologies: ["Figma", "Design tokens", "React", "Tailwind CSS"],
    thumbnail: "mesh",
    gallery: ["mesh", "lines"],
    featured: true,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2025",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-5",
    title: "Healthcare Digital Platform",
    slug: "healthcare-digital-platform",
    category: "Mobile Apps",
    serviceId: "svc-mobile",
    shortDescription: "Appointments, records and reminders in a patient-facing app.",
    description:
      "A patient app concept covering booking, visit history and medication reminders, with careful handling of sensitive data.",
    challenge:
      "Patients juggle phone calls and paper records, while clinics lose time to no-shows and repeat questions.",
    approach:
      "We designed for low-bandwidth, offline-tolerant use and kept sensitive data access explicit and logged.",
    solution:
      "A cross-platform app with booking, secure record access, reminders and a clinic-side schedule view.",
    features: [
      "Appointment booking and rescheduling",
      "Offline-tolerant record access",
      "Medication reminders",
      "Clinic schedule view",
      "Access logging",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    thumbnail: "grid",
    gallery: ["grid", "mesh"],
    featured: false,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2025",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-6",
    title: "Brand Identity System",
    slug: "brand-identity-system",
    category: "Branding",
    serviceId: "svc-brand",
    shortDescription: "A digital-first identity kit built to survive real-world use.",
    description:
      "An identity concept for a technology services brand: monogram, type scale, colour system and a written usage guide.",
    challenge:
      "Identities designed for print break down at favicon size and in product interfaces.",
    approach:
      "We started at the smallest size the mark would ever appear, then scaled upward and documented every rule.",
    solution:
      "A complete kit — marks, tokens, type scale, collateral templates and guidelines the team can apply without a designer.",
    features: [
      "Monogram and full wordmark",
      "Colour and type tokens",
      "Usage guidelines",
      "Social and deck templates",
      "Favicon and app icon set",
    ],
    technologies: ["Figma", "Design tokens", "Vector illustration"],
    thumbnail: "lines",
    gallery: ["lines"],
    featured: false,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2025",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-7",
    title: "Corporate Website Refresh",
    slug: "corporate-website-refresh",
    category: "Marketing",
    serviceId: "svc-marketing",
    shortDescription: "A structural rebuild aimed at organic search and enquiries.",
    description:
      "A concept rebuild of a services company website, restructured around how buyers search rather than how the company is organised.",
    challenge:
      "A department-shaped site buried service pages and competed with itself for the same search terms.",
    approach:
      "We mapped keywords to a flat service structure, rewrote page intent and fixed the technical foundation first.",
    solution:
      "A clean URL structure with one page per intent, measurable enquiry tracking and a content model the marketing team owns.",
    features: [
      "Keyword-mapped page structure",
      "Technical SEO fixes",
      "Enquiry and call tracking",
      "Editable content blocks",
      "Multi-region pages",
    ],
    technologies: ["Next.js", "Technical SEO", "Analytics", "Tailwind CSS"],
    thumbnail: "mesh",
    gallery: ["mesh", "grid"],
    featured: false,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2025",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prj-8",
    title: "Cloud Automation Product",
    slug: "cloud-automation-product",
    category: "Cloud",
    serviceId: "svc-cloud",
    shortDescription: "Environment provisioning and deploy pipelines as a product surface.",
    description:
      "A concept internal platform that turns environment setup and deployment into a reviewed, repeatable action.",
    challenge:
      "Manual environment setup made releases risky and onboarding new engineers slow.",
    approach:
      "We codified environments, then wrapped them in a UI with approvals, logs and a visible rollback path.",
    solution:
      "A platform with one-click environments, pipeline visibility, alerting and per-environment cost reporting.",
    features: [
      "One-click environments",
      "Pipeline and deploy visibility",
      "Approvals and rollback",
      "Alerting and monitoring",
      "Cost reporting",
    ],
    technologies: ["AWS", "CI/CD", "Node.js", "PostgreSQL", "Vercel"],
    thumbnail: "grid",
    gallery: ["grid", "lines"],
    featured: false,
    status: "published",
    contentType: "demo",
    clientName: null,
    clientCountry: null,
    year: "2026",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
];

export const publishedProjects = projects.filter((p) => p.status === "published");

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX",
  "Software",
  "AI",
  "Branding",
  "Marketing",
  "Cloud",
];

export function getProjectBySlug(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

export function getProjectsByService(serviceId: string) {
  return publishedProjects.filter((p) => p.serviceId === serviceId);
}
