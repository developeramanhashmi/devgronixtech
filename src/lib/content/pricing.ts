import type { PricingPlan } from "./types";

/**
 * Service-specific pricing. Each entry belongs to exactly one service, so a
 * future admin panel can manage plans per service and both `/pricing/:slug`
 * and the service detail page pick the change up automatically.
 *
 * Prices are indicative starting points, not fixed quotes — the UI always
 * shows the "Starting from" qualifier and the scope note.
 */

type PlanSeed = {
  name: string;
  description: string;
  price: string;
  /** Optional pre-discount price shown struck-through, e.g. "₹1,999". */
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  billingType?: string;
};

type ServicePricingSeed = {
  serviceId: string;
  /** Default unit for every plan in the group. */
  billingType: string;
  plans: PlanSeed[];
};

const customPlan = (billingType: string): PlanSeed => ({
  name: "Custom",
  description: "Multi-phase or multi-service work scoped and quoted together.",
  price: "On request",
  billingType,
  features: [
    "Discovery and technical planning",
    "Phased delivery roadmap",
    "Dedicated delivery contact",
    "Commercial terms agreed per phase",
  ],
});

const seeds: ServicePricingSeed[] = [
  {
    serviceId: "svc-web",
    billingType: "per project",
    plans: [
      {
        name: "Basic",
        description: "Perfect for Individuals & Small Businesses",
        price: "₹999",
        originalPrice: "₹1,999",
        features: [
          "1–4 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Mobile Responsive",
          "Basic Design",
          "Contact Form",
          "Free Advice & Support",
        ],
      },
      {
        name: "Professional",
        description: "Best for Businesses & Startups",
        price: "₹1,999",
        originalPrice: "₹3,999",
        popular: true,
        features: [
          "5–7 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Modern & Attractive Design",
          "Mobile Responsive",
          "Contact Form + WhatsApp",
          "Basic SEO Setup",
          "Free Advice & Support",
        ],
      },
      {
        name: "Business",
        description: "Ideal for Growing Businesses",
        price: "₹2,499",
        originalPrice: "₹4,999",
        features: [
          "Up to 10 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Premium & Custom Design",
          "Mobile Responsive",
          "Contact Form + WhatsApp",
          "Basic SEO Setup",
          "Blog / News Section",
          "Free Advice & Support",
        ],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-mobile",
    billingType: "per project",
    plans: [
      {
        name: "App MVP",
        description: "One core flow, shipped to both stores.",
        price: "₹5,000",
        features: ["iOS and Android from one codebase", "Up to 8 screens", "API integration", "Store submission", "Crash reporting"],
      },
      {
        name: "Business App",
        description: "A complete product with accounts and notifications.",
        price: "₹25,000",
        popular: true,
        features: [
          "Authentication and profiles",
          "Push notifications",
          "Offline handling",
          "Payments or bookings",
          "Analytics and release pipeline",
        ],
      },
      {
        name: "Advanced Platform",
        description: "Multi-role apps with a backend built alongside.",
        price: "₹2,00,000",
        features: ["Multi-role experiences", "Custom backend and admin", "Complex integrations", "Automated testing", "Post-launch support retainer"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-software",
    billingType: "per project",
    plans: [
      {
        name: "Process Tool",
        description: "One workflow moved off spreadsheets.",
        price: "₹25,000",
        features: ["Single workflow system", "User roles", "Reporting export", "Data import", "Training session"],
      },
      {
        name: "Business System",
        description: "Connected modules covering an operating process end to end.",
        price: "₹1,00,000",
        popular: true,
        features: [
          "Multiple connected modules",
          "Role-based permissions",
          "Audit history",
          "Dashboards and reports",
          "Integration with existing tools",
        ],
      },
      {
        name: "Enterprise Build",
        description: "Phased delivery for operations-critical software.",
        price: "₹2,50,000",
        features: ["Discovery and process mapping", "Phased release plan", "Migration from legacy systems", "Automated testing", "Ongoing delivery capacity"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-saas",
    billingType: "per project",
    plans: [
      {
        name: "SaaS MVP",
        description: "The smallest release that proves the model.",
        price: "₹50,000",
        features: ["Core product flow", "Auth and user accounts", "Single subscription plan", "Basic admin panel", "Launch support"],
      },
      {
        name: "Growth Product",
        description: "Plans, limits and billing built to sell properly.",
        price: "₹90,000",
        popular: true,
        features: ["Team accounts", "Multiple plans and limits", "Billing lifecycle handling", "Onboarding and trials", "Product analytics"],
      },
      {
        name: "Scale Platform",
        description: "Multi-tenant architecture with operational tooling.",
        price: "₹1,50,000",
        features: ["Multi-tenant architecture", "Usage metering", "Feature flags", "Customer-success tooling", "Dedicated delivery sprints"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-ai",
    billingType: "per project",
    plans: [
      {
        name: "Automation Sprint",
        description: "One repetitive process automated and measured.",
        price: "₹29,999",
        features: ["Process analysis", "One automation workflow", "Integration with your tools", "Monitoring and alerts", "Handover documentation"],
      },
      {
        name: "AI Feature Build",
        description: "An AI capability added inside an existing product.",
        price: "₹75,000",
        popular: true,
        features: ["Retrieval or extraction pipeline", "In-product interface", "Fallbacks and guardrails", "Quality evaluation set", "Cost monitoring"],
      },
      {
        name: "AI Product",
        description: "An AI-first product surface built from scratch.",
        price: "₹1,50,000",
        features: ["Data and index architecture", "Multiple AI workflows", "Admin review tooling", "Evaluation dashboard", "Scaling and cost plan"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-cloud",
    billingType: "per month",
    plans: [
      {
        name: "Setup",
        description: "One-time cloud and deployment setup.",
        price: "₹9,999",
        billingType: "one-time",
        features: ["Cloud environment setup", "CI/CD pipeline", "Secrets management", "Backups", "Runbook documentation"],
      },
      {
        name: "Managed Care",
        description: "Ongoing monitoring, patching and release support.",
        price: "₹19,999",
        popular: true,
        features: ["Uptime and error monitoring", "Monthly patching", "Release support", "Incident response window", "Monthly cost review"],
      },
      {
        name: "Scale & Reliability",
        description: "Higher-availability infrastructure with tighter response.",
        price: "₹50,000",
        features: ["High-availability architecture", "Load and failover testing", "Priority incident response", "Security hardening", "Quarterly architecture review"],
      },
      customPlan("per month"),
    ],
  },
  {
    serviceId: "svc-data",
    billingType: "per project",
    plans: [
      {
        name: "Starter Dashboard",
        description: "One dashboard answering a defined set of questions.",
        price: "₹5,000",
        features: ["KPI definition session", "One dashboard", "Data connection setup", "Role-based access", "Export to CSV"],
      },
      {
        name: "Business Reporting",
        description: "A reporting layer across several data sources.",
        price: "₹59,999",
        popular: true,
        features: ["Multi-source pipeline", "Up to 4 dashboards", "Scheduled email reports", "Data quality checks", "Team training"],
      },
      {
        name: "Data Platform",
        description: "A warehouse plus modelling and governed access.",
        price: "₹1,75,000",
        features: ["Warehouse setup", "Modelled metrics layer", "Automated refresh", "Access governance", "Ongoing analyst support option"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-uiux",
    billingType: "per project",
    plans: [
      {
        name: "UX Review",
        description: "An audit of an existing product with prioritised fixes.",
        price: "₹5,000",
        features: ["Heuristic and task review", "Accessibility check", "Prioritised issue list", "Annotated screens", "Walkthrough call"],
      },
      {
        name: "Product Design",
        description: "Flows, wireframes and production UI for a real build.",
        price: "₹19,999",
        popular: true,
        features: ["User flows and wireframes", "High-fidelity UI screens", "Interactive prototype", "Component library", "Developer handoff"],
      },
      {
        name: "Design System",
        description: "A documented system for a product that keeps growing.",
        price: "₹35,000",
        features: ["Token architecture", "Full component library", "Light and dark theming", "Usage documentation", "Design QA during build"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-graphic",
    billingType: "per package",
    plans: [
      {
        name: "Starter Graphic",
        description: "Ideal for single banner, poster, or thumbnail",
        price: "₹99",
        originalPrice: "₹199",
        features: ["1 High-Quality Creative/Banner", "Social Media / Ad Ready", "High Resolution (PNG/JPG)", "Fast 24h Turnaround", "1 Revision Included"],
      },
      {
        name: "Creator Pack",
        description: "Best for active creators & small businesses",
        price: "₹449",
        originalPrice: "₹899",
        popular: true,
        features: ["5 Custom Social Media Posts / Banners", "Branded Color & Typography", "Story & Post Formats", "Source Files Included", "Free Advice & Support"],
      },
      {
        name: "Brand Visuals Pro",
        description: "Complete monthly creative bundle",
        price: "₹999",
        originalPrice: "₹1,999",
        features: ["15 Premium Custom Graphics", "Flyers, Banners & Social Posts", "Vector / PSD Source Files", "Priority Turnaround", "Dedicated Designer Support"],
      },
      customPlan("per package"),
    ],
  },
  {
    serviceId: "svc-brand",
    billingType: "per project",
    plans: [
      {
        name: "Logo Essentials",
        description: "A single mark delivered in every format you need.",
        price: "₹4,999",
        features: ["Two logo directions", "Final mark in all formats", "Colour and mono versions", "Favicon and app icon", "Basic usage sheet"],
      },
      {
        name: "Identity System",
        description: "A complete visual identity with written rules.",
        price: "₹9,999",
        popular: true,
        features: ["Logo and monogram set", "Colour and type system", "Brand guidelines document", "Stationery templates", "Social profile kit"],
      },
      {
        name: "Brand Programme",
        description: "Positioning, identity and rollout across channels.",
        price: "₹50,000",
        features: ["Positioning and messaging", "Full identity system", "Collateral and deck templates", "Launch asset rollout", "Team brand training"],
      },
      customPlan("per project"),
    ],
  },
  {
    serviceId: "svc-video",
    billingType: "per video",
    plans: [
      {
        name: "Reels & Shorts",
        description: "Fast-paced vertical edit for Instagram & YouTube",
        price: "₹399",
        originalPrice: "₹799",
        features: ["1 High-Retention Reel / Short (up to 60s)", "Engaging Dynamic Subtitles & Captions", "Sound Effects & B-Roll Cuts", "Trending Zoom & Transition Effects", "1 Revision Included"],
      },
      {
        name: "Content Pack",
        description: "Best for growing creators & businesses",
        price: "₹1,499",
        originalPrice: "₹2,999",
        popular: true,
        features: ["5 Reels/Shorts OR 1 YouTube Video (up to 8m)", "Sound Design, FX & Background Music", "Motion Graphics & Hook Design", "Color Grading & Audio Clean-up", "Free Advice & Support"],
      },
      {
        name: "Commercial / Pro",
        description: "High-end brand promo or monthly volume",
        price: "₹2,999",
        originalPrice: "₹5,999",
        features: ["10 Reels/Shorts OR 2 Full-length YouTube Videos", "Advanced Motion Graphics & Lower Thirds", "Thumbnail / Cover Included", "Fast Priority Turnaround", "Dedicated Editor Support"],
      },
      customPlan("per video"),
    ],
  },
  {
    serviceId: "svc-marketing",
    billingType: "per month",
    plans: [
      {
        name: "Campaign Starter",
        description: "One channel, set up and managed properly.",
        price: "₹1999",
        features: ["One ad channel", "Conversion tracking setup", "Ad creative and copy", "Weekly optimisation", "Monthly report"],
      },
      {
        name: "Growth",
        description: "Multi-channel acquisition with landing page testing.",
        price: "₹4,999",
        popular: true,
        features: ["Up to three channels", "Landing page design and testing", "Audience experimentation", "Attribution reporting", "Bi-weekly review call"],
      },
      {
        name: "Performance",
        description: "Scaled spend with dedicated strategy support.",
        price: "₹10,000",
        features: ["Full-funnel campaigns", "Creative production pipeline", "Advanced attribution", "Dedicated strategist", "Weekly reporting"],
      },
      customPlan("per month"),
    ],
  },
  {
    serviceId: "svc-social",
    billingType: "per month",
    plans: [
      {
        name: "Starter Growth",
        description: "Consistent presence for local businesses",
        price: "₹1,000",
        originalPrice: "₹2,000",
        features: ["12 Branded Posts / Reels per month", "Captions & High-Reach Hashtags", "Scheduled Publishing", "Page & Bio Optimization", "Free Advice & Support"],
      },
      {
        name: "Business Growth",
        description: "Most popular for brands wanting daily reach",
        price: "₹1,999",
        originalPrice: "₹3,999",
        popular: true,
        features: ["20 Branded Posts & Reels per month", "Content Strategy & Calendar", "Community / Comment Handling", "Monthly Performance & Reach Report", "Dedicated Account Manager"],
      },
      {
        name: "Ultimate Authority",
        description: "Aggressive growth across multiple platforms",
        price: "₹3,499",
        originalPrice: "₹6,999",
        features: ["30 Daily High-Impact Posts & Reels", "Multi-Platform (IG, FB, LinkedIn)", "Ad Campaign Setup Assistance", "Weekly Strategy Reviews", "24/7 Priority Support"],
      },
      customPlan("per month"),
    ],
  },
  {
    serviceId: "svc-seo",
    billingType: "per month",
    plans: [
      {
        name: "Audit",
        description: "A one-time technical and content audit.",
        price: "₹1,999",
        billingType: "one-time",
        features: ["Crawl and index diagnostics", "Core Web Vitals review", "Keyword and intent map", "Prioritised fix list", "Walkthrough call"],
      },
      {
        name: "Growth SEO",
        description: "Ongoing technical and on-page work.",
        price: "₹4,999",
        popular: true,
        features: ["Technical fixes implemented", "On-page optimisation", "Content briefs", "Internal linking", "Monthly rank reporting"],
      },
      {
        name: "Competitive SEO",
        description: "Aggressive programme for contested keywords.",
        price: "₹9,999",
        features: ["Content production included", "Structured data rollout", "Multi-region or local SEO", "Link acquisition strategy", "Bi-weekly reporting"],
      },
      customPlan("per month"),
    ],
  },
  {
    serviceId: "svc-content",
    billingType: "per package",
    plans: [
      {
        name: "Page Copy",
        description: "Copy for a defined set of pages.",
        price: "₹1,999",
        features: ["Up to 5 pages", "Messaging brief", "SEO-aware structure", "Two revision rounds", "Meta titles and descriptions"],
      },
      {
        name: "Content Retainer",
        description: "A monthly editorial output with a calendar.",
        price: "₹2,999",
        billingType: "per month",
        features: ["4 articles per month", "Content calendar", "Keyword-mapped briefs", "Editing and proofreading", "Performance review"],
      },
      {
        name: "Editorial Programme",
        description: "Higher volume plus case studies and voice guidelines.",
        price: "₹4,999",
        billingType: "per month",
        features: ["8 pieces per month", "Case study writing", "Tone of voice guidelines", "Creative direction", "Dedicated editor"],
      },
      customPlan("per package"),
    ],
  },
];

export const pricingPlans: PricingPlan[] = seeds.flatMap((seed) =>
  seed.plans.map((plan, i) => ({
    id: `${seed.serviceId}-plan-${i + 1}`,
    serviceId: seed.serviceId,
    name: plan.name,
    description: plan.description,
    price: plan.price,
    originalPrice: plan.originalPrice,
    priceQualifier: plan.price === "On request" ? "Scoped together" : "Starting from",
    billingType: plan.billingType ?? seed.billingType,
    features: plan.features,
    popular: plan.popular ?? false,
    ctaText: plan.price === "On request" ? "Get a Quote" : "Start a Project",
    status: "published" as const,
    order: i + 1,
  })),
);

export const pricingNote =
  "Final pricing depends on project scope, requirements and complexity. Figures shown are starting points, confirmed in a written proposal before work begins.";

export function getPlansByService(serviceId: string) {
  return pricingPlans
    .filter((p) => p.serviceId === serviceId && p.status === "published")
    .sort((a, b) => a.order - b.order);
}
