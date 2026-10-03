import type { Project } from "./types";
import { publishedServices } from "./services";

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
    id: "prj-ss-fashion",
    title: "SS Fashion Photography Studio Website",
    slug: "ss-fashion-photography-studio",
    category: "Web Development",
    serviceId: "svc-web",
    serviceIds: ["svc-web", "svc-uiux"],
    shortDescription: "A high-end luxury portfolio and booking website crafted for fashion, celebrity, and portrait photography studio in Hyderabad.",
    description: "A bespoke digital studio website for SS Fashion Photography, designed to showcase editorial couture shoots, model portfolios, and celebrity photography with direct client booking.",
    challenge: "The client needed a sophisticated luxury aesthetic that matched high-end fashion standards while providing an effortless way for clients to view service packages and book shoots directly.",
    approach: "We created an editorial dark-themed experience with fluid typography, responsive galleries, clear transparent package tiers, and frictionless WhatsApp and email enquiry handoffs.",
    solution: "A high-performance modern web application featuring categorized photo galleries, dynamic packages, verified client testimonials, and one-click direct booking.",
    features: [
      "Luxury editorial aesthetic with dark & light presentation",
      "Interactive category portfolio (Fashion, Modeling, Celebrity, Portrait)",
      "Tiered studio pricing packages (Basic, Quick Start, Gold, Outdoor)",
      "Direct WhatsApp booking handoff with pre-filled shoot details",
      "High-speed mobile responsive delivery and Schema.org SEO"
    ],
    technologies: ["React", "TanStack", "Tailwind CSS", "TypeScript", "Schema.org", "Vercel"],
    thumbnail: "/projects/ss-fashion-photography.png",
    gallery: ["/projects/ss-fashion-photography.png", "mesh"],
    featured: true,
    status: "published",
    contentType: "verified",
    clientName: "Shiva SS",
    clientCountry: "Secunderabad, Telangana, India",
    liveUrl: "https://www.ssfashionphotography.com/",
    year: "2026",
    publishedAt: "2026-03-01",
    createdAt: "2026-03-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "prj-1",
    title: "AI Job Discovery Platform",
    slug: "ai-job-discovery-platform",
    category: "AI",
    serviceId: "svc-ai",
    serviceIds: ["svc-ai", "svc-web", "svc-software"],
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
    serviceIds: ["svc-web", "svc-uiux", "svc-marketing"],
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
    serviceIds: ["svc-software", "svc-data", "svc-uiux"],
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
    serviceIds: ["svc-uiux", "svc-data", "svc-saas"],
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
    serviceIds: ["svc-mobile", "svc-uiux", "svc-software"],
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
    serviceIds: ["svc-brand", "svc-graphic", "svc-uiux"],
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
    serviceIds: ["svc-marketing", "svc-seo", "svc-web"],
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
    serviceIds: ["svc-cloud", "svc-software", "svc-data"],
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
  {
    id: "prj-9",
    title: "Product Launch Motion Campaign",
    slug: "product-launch-motion-campaign",
    category: "Video & Motion",
    serviceId: "svc-video",
    serviceIds: ["svc-video", "svc-graphic", "svc-marketing"],
    shortDescription: "A modular launch-film system adapted for social, presentations and product pages.",
    description:
      "A concept motion campaign for a new technology product, designed as one visual system rather than a collection of unrelated edits.",
    challenge:
      "A product launch needed to explain a technical offer quickly across channels with different formats, durations and viewing habits.",
    approach:
      "We planned the campaign around reusable scenes, motion rules and message beats before adapting each cut to its destination.",
    solution:
      "A launch film, short-form cutdowns, animated feature explainers and reusable title sequences built from a shared motion toolkit.",
    features: [
      "Launch film story edit",
      "Short-form social cutdowns",
      "Animated product callouts",
      "Caption and subtitle system",
      "Multi-aspect delivery package",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion design"],
    thumbnail: "mesh",
    gallery: ["mesh", "lines", "grid"],
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
  {
    id: "prj-10",
    title: "Premium Brand Video Series",
    slug: "premium-brand-video-series",
    category: "Video & Motion",
    serviceId: "svc-video",
    serviceIds: ["svc-video", "svc-brand", "svc-content"],
    shortDescription: "A repeatable editorial video format for brand stories, interviews and product detail.",
    description:
      "A concept video series that gives a premium business a consistent visual and editorial language across long-form and short-form content.",
    challenge:
      "Individual videos felt disconnected because pacing, titles, framing and sound choices changed from one release to the next.",
    approach:
      "We defined repeatable episode structures, motion templates, sound direction and cutdown rules before producing the first set of edits.",
    solution:
      "A cohesive series package with interview edits, product stories, opening titles, lower thirds and platform-ready cutdowns.",
    features: [
      "Editorial series format",
      "Interview and product edits",
      "Motion title toolkit",
      "Sound and pacing guidelines",
      "Reusable export presets",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Audition", "Motion design"],
    thumbnail: "lines",
    gallery: ["lines", "mesh"],
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
  {
    id: "prj-11",
    title: "Technology Brand Social System",
    slug: "technology-brand-social-system",
    category: "Social Media",
    serviceId: "svc-social",
    serviceIds: ["svc-social", "svc-content", "svc-graphic"],
    shortDescription: "A monthly publishing system that turns technical topics into clear social content.",
    description:
      "A concept social media operation for a technology brand that needed a consistent calendar, recognisable creative and useful technical storytelling.",
    challenge:
      "Subject-matter expertise existed inside the business, but irregular planning and inconsistent formats kept it from becoming useful public content.",
    approach:
      "We grouped topics into editorial themes, established repeatable post formats and designed a monthly review and publishing workflow.",
    solution:
      "A channel-ready content calendar with carousel templates, short-form scripts, caption guidance and a concise reporting structure.",
    features: [
      "Monthly editorial calendar",
      "Technical carousel templates",
      "Short-form video scripts",
      "Caption and response guidelines",
      "Channel reporting framework",
    ],
    technologies: ["Figma", "Scheduling tools", "Analytics", "Adobe Creative Suite"],
    thumbnail: "grid",
    gallery: ["grid", "mesh", "lines"],
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
  {
    id: "prj-12",
    title: "Saudi Business Social Presence",
    slug: "saudi-business-social-presence",
    category: "Social Media",
    serviceId: "svc-social",
    serviceIds: ["svc-social", "svc-content", "svc-video"],
    shortDescription: "A bilingual-ready content framework for a professional services brand in Saudi Arabia.",
    description:
      "A concept social presence designed for a Saudi professional services business communicating clearly across English and Arabic content workflows.",
    challenge:
      "The brand needed a consistent professional presence without relying on last-minute posts or treating translation as an afterthought.",
    approach:
      "We designed the calendar, approvals and creative templates around bilingual coordination and platform-specific publishing needs.",
    solution:
      "A structured monthly programme covering leadership content, service explainers, company updates and short-form video briefs.",
    features: [
      "Bilingual-ready content calendar",
      "Approval and translation workflow",
      "Professional post templates",
      "Short-form content briefs",
      "Community response guidance",
    ],
    technologies: ["Figma", "Scheduling tools", "Analytics", "Editorial workflow"],
    thumbnail: "mesh",
    gallery: ["mesh", "grid"],
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
  {
    id: "prj-13",
    title: "Technology Brand Content System",
    slug: "technology-brand-content-system",
    category: "Content & Creative",
    serviceId: "svc-content",
    serviceIds: ["svc-content", "svc-seo", "svc-web"],
    shortDescription: "A practical messaging and editorial system for complex technology services.",
    description:
      "A concept content system that helps a technology company explain its services consistently across its website, articles and sales material.",
    challenge:
      "Different teams described the same services in different ways, creating vague pages and an inconsistent buying experience.",
    approach:
      "We established message pillars, buyer questions, tone rules and reusable page structures before writing individual assets.",
    solution:
      "A central messaging guide supported by service-page copy, article briefs, case-study structures and editorial governance.",
    features: [
      "Messaging and positioning framework",
      "Service-page content templates",
      "Tone of voice guidelines",
      "SEO-aware article briefs",
      "Editorial review workflow",
    ],
    technologies: ["Editorial workflow", "SEO tooling", "Content modelling"],
    thumbnail: "lines",
    gallery: ["lines", "grid", "mesh"],
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
  {
    id: "prj-14",
    title: "Corporate Content & Creative Campaign",
    slug: "corporate-content-and-creative-campaign",
    category: "Content & Creative",
    serviceId: "svc-content",
    serviceIds: ["svc-content", "svc-graphic", "svc-marketing"],
    shortDescription: "A coordinated campaign toolkit for a complex corporate service launch.",
    description:
      "A concept campaign bringing long-form copy, visual direction and channel assets into one coherent launch narrative.",
    challenge:
      "The offer needed detailed explanation for decision-makers while still producing concise material for campaign and sales channels.",
    approach:
      "We built a message hierarchy first, then adapted it into page copy, campaign assets, presentation content and supporting articles.",
    solution:
      "A connected creative package with a campaign landing page, executive overview, social assets and reusable content briefs.",
    features: [
      "Campaign message hierarchy",
      "Landing page copy",
      "Executive overview content",
      "Social creative direction",
      "Reusable campaign briefs",
    ],
    technologies: ["Figma", "Editorial workflow", "Content modelling", "SEO tooling"],
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

/**
 * Works filters, derived from service data — adding a service that has
 * published projects automatically adds its filter.
 */
export const projectServiceFilters = [
  { id: "all", title: "All" },
  ...publishedServices
    .filter((s) => publishedProjects.some((p) => p.serviceIds.includes(s.id)))
    .map((s) => ({ id: s.id, title: s.title })),
];

export function getProjectBySlug(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

/** Every project assigned to a service, primary or secondary. */
export function getProjectsByService(serviceId: string) {
  return publishedProjects
    .filter((p) => p.serviceIds.includes(serviceId))
    .sort((a, b) => Number(b.serviceId === serviceId) - Number(a.serviceId === serviceId));
}

export function getRelatedProjects(project: Project, limit = 3) {
  return publishedProjects
    .filter((p) => p.id !== project.id && p.serviceIds.some((id) => project.serviceIds.includes(id)))
    .slice(0, limit);
}
