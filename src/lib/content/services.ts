import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "svc-web",
    title: "Web Development",
    slug: "web-development",
    tagline: "Fast, durable websites and web platforms.",
    description:
      "Marketing sites, portals and web platforms built for speed, search visibility and easy content updates.",
    icon: "Code2",
    overview:
      "We build websites that load fast, rank well and stay easy to maintain. Every build starts with the business goal — enquiries, signups, sales — and the structure follows from there.",
    capabilities: [
      "Corporate and marketing websites",
      "Headless CMS integration",
      "Landing pages and campaign sites",
      "Web portals and dashboards",
      "Performance and Core Web Vitals work",
      "Analytics and conversion tracking",
    ],
    helps: [
      { title: "Clear structure", body: "Information architecture mapped to how your buyers actually search and decide." },
      { title: "Editable content", body: "Content models your team can update without a developer in the loop." },
      { title: "Measurable results", body: "Tracking wired in from day one so you can see what converts." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "svc-mobile",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    tagline: "Apps people keep on their home screen.",
    description:
      "Cross-platform iOS and Android apps with clean navigation, offline handling and reliable release pipelines.",
    icon: "Smartphone",
    overview:
      "Mobile products live or die on the small details — startup time, gesture feel, offline behaviour. We ship apps that respect those details and are practical to maintain after launch.",
    capabilities: [
      "Cross-platform iOS and Android apps",
      "API and backend integration",
      "Push notifications",
      "Offline-first data handling",
      "App store release management",
      "Post-launch monitoring",
    ],
    helps: [
      { title: "One codebase", body: "Both platforms from a shared codebase, so features ship once." },
      { title: "Real device testing", body: "Tested on the devices your users actually own, not just simulators." },
      { title: "Release discipline", body: "Versioned releases, crash reporting and a clear rollback path." },
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "svc-uiux",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Interfaces designed around real tasks.",
    description:
      "Research, flows, wireframes and production-ready interface systems that developers can build without guesswork.",
    icon: "Layers",
    overview:
      "We design in systems, not screens. Flows first, then components, then the polish — so the product stays coherent as it grows.",
    capabilities: [
      "Product discovery and user flows",
      "Wireframing and prototyping",
      "Design systems and component libraries",
      "Design-to-development handoff",
      "Usability reviews",
      "Accessibility audits",
    ],
    helps: [
      { title: "Fewer dead ends", body: "Flows tested on paper before anyone writes code." },
      { title: "Consistent product", body: "A token-based system keeps every screen on-brand." },
      { title: "Buildable handoff", body: "Specs, states and edge cases documented for engineering." },
    ],
    technologies: ["Figma", "Design tokens", "Tailwind CSS", "Prototyping"],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "svc-software",
    title: "Software Development",
    slug: "software-development",
    tagline: "Custom software for how your business runs.",
    description:
      "Internal tools, management systems and SaaS products designed around your actual workflow, not a template.",
    icon: "Boxes",
    overview:
      "When off-the-shelf software forces your team into the wrong process, custom software pays for itself. We map the workflow, then build only what earns its place.",
    capabilities: [
      "Business management systems",
      "SaaS product development",
      "Role-based access and permissions",
      "Reporting and dashboards",
      "Third-party API integration",
      "Legacy system modernisation",
    ],
    helps: [
      { title: "Workflow mapping", body: "We document the current process before proposing a system." },
      { title: "Scoped phases", body: "Delivered in usable phases so value arrives before the final release." },
      { title: "Built to extend", body: "Clean data models that survive the next three feature requests." },
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs"],
    featured: true,
    status: "published",
    order: 4,
  },
  {
    id: "svc-ai",
    title: "AI & Automation",
    slug: "ai-and-automation",
    tagline: "Automation that removes real manual work.",
    description:
      "AI-assisted features and workflow automation applied where they measurably save time, not as decoration.",
    icon: "Sparkles",
    overview:
      "We start from the repetitive task, not the model. If a simple rule solves it, we use a rule. If it needs AI, we integrate it carefully with fallbacks and cost control.",
    capabilities: [
      "AI features inside existing products",
      "Document and data extraction",
      "Chat and assistant interfaces",
      "Workflow and process automation",
      "Search and recommendation systems",
      "Evaluation and cost monitoring",
    ],
    helps: [
      { title: "Task-first", body: "We quantify the manual hours before building anything." },
      { title: "Guardrails", body: "Fallbacks, rate limits and review steps for anything user-facing." },
      { title: "Cost visibility", body: "Usage tracked per feature so spend never surprises you." },
    ],
    technologies: ["AI APIs", "Python", "Node.js", "Vector search", "Automation"],
    featured: true,
    status: "published",
    order: 5,
  },
  {
    id: "svc-brand",
    title: "Branding & Graphic Design",
    slug: "branding-and-graphic-design",
    tagline: "Identity systems that hold up everywhere.",
    description:
      "Logos, identity systems and collateral built as a usable kit, from favicon to pitch deck.",
    icon: "PenTool",
    overview:
      "A brand is a system, not a logo file. We deliver the marks, type, colour and usage rules your team needs to stay consistent.",
    capabilities: [
      "Logo and monogram design",
      "Brand guidelines",
      "Typography and colour systems",
      "Marketing and social collateral",
      "Presentation and pitch design",
      "Print-ready assets",
    ],
    helps: [
      { title: "Usable kit", body: "Every file format and size your team will actually ask for." },
      { title: "Written rules", body: "Clear do and don't guidance so the brand survives contact with reality." },
      { title: "Digital-first", body: "Tested at favicon size before it's signed off." },
    ],
    technologies: ["Figma", "Design tokens", "Vector illustration"],
    featured: false,
    status: "published",
    order: 6,
  },
  {
    id: "svc-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "Traffic that turns into enquiries.",
    description:
      "Technical SEO, content structure and paid campaigns tied to measurable pipeline, not vanity metrics.",
    icon: "TrendingUp",
    overview:
      "Marketing works when the site behind it converts. We handle both sides — the acquisition and the page that has to do the closing.",
    capabilities: [
      "Technical SEO and site audits",
      "Content structure and keyword mapping",
      "Paid search and social campaigns",
      "Landing page optimisation",
      "Analytics and reporting",
      "Conversion tracking setup",
    ],
    helps: [
      { title: "Fix the foundation", body: "Crawlability, speed and structure before spending on ads." },
      { title: "Honest reporting", body: "Enquiries and cost per lead, not impressions." },
      { title: "Iterative testing", body: "Small, measured changes rather than full redesigns." },
    ],
    technologies: ["Technical SEO", "Analytics", "Google Ads", "Content strategy"],
    featured: false,
    status: "published",
    order: 7,
  },
  {
    id: "svc-cloud",
    title: "Cloud & Technology Solutions",
    slug: "cloud-and-technology-solutions",
    tagline: "Infrastructure that stays boring.",
    description:
      "Deployment, environments, monitoring and scaling set up so releases are routine and downtime is rare.",
    icon: "Cloud",
    overview:
      "Good infrastructure is unremarkable. We set up environments, pipelines and monitoring so your team can ship on a Friday without flinching.",
    capabilities: [
      "Cloud architecture and setup",
      "CI/CD pipelines",
      "Environment and secrets management",
      "Monitoring and alerting",
      "Backups and disaster recovery",
      "Cost optimisation",
    ],
    helps: [
      { title: "Repeatable deploys", body: "Automated pipelines replace manual release checklists." },
      { title: "Visibility", body: "Alerting that tells you about problems before customers do." },
      { title: "Controlled spend", body: "Right-sized resources and a monthly cost review." },
    ],
    technologies: ["AWS", "Vercel", "Supabase", "PostgreSQL", "CI/CD"],
    featured: false,
    status: "published",
    order: 8,
  },
];

export const publishedServices = services
  .filter((s) => s.status === "published")
  .sort((a, b) => a.order - b.order);

export function getServiceBySlug(slug: string) {
  return publishedServices.find((s) => s.slug === slug);
}

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}
