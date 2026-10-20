import type { Service, ServiceGroup } from "./types";

/** Display order of the service directory groups. */
export const serviceGroups: ServiceGroup[] = [
  "Technology & Development",
  "Design & Creative",
  "Digital Growth",
];

export const services: Service[] = [
  {
    id: "svc-web",
    title: "Web Development",
    slug: "web-development",
    group: "Technology & Development",
    tagline: "Fast, durable websites and web platforms.",
    description:
      "Marketing sites, portals and web platforms built for speed, search visibility and easy content updates.",
    icon: "Code2",
    overview:
      "We build websites that load fast, rank well and stay easy to maintain. Every build starts with the business goal — enquiries, signups, sales — and the structure follows from there.",
    offers: [
      "Corporate and marketing websites",
      "Landing pages and campaign sites",
      "Headless CMS builds",
      "Web portals and customer dashboards",
      "Website rebuilds and migrations",
    ],
    capabilities: [
      "Information architecture",
      "Responsive design systems",
      "Core Web Vitals performance work",
      "CMS and content modelling",
      "Analytics and conversion tracking",
      "Ongoing maintenance",
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
    group: "Technology & Development",
    tagline: "Apps people keep on their home screen.",
    description:
      "Cross-platform iOS and Android apps with clean navigation, offline handling and reliable release pipelines.",
    icon: "Smartphone",
    overview:
      "Mobile products live or die on the small details — startup time, gesture feel, offline behaviour. We ship apps that respect those details and are practical to maintain after launch.",
    offers: [
      "Cross-platform iOS and Android apps",
      "App MVPs for new products",
      "API and backend integration",
      "App store submission and release management",
      "Post-launch monitoring and updates",
    ],
    capabilities: [
      "Cross-platform architecture",
      "Offline-first data handling",
      "Push notifications",
      "In-app payments",
      "Crash reporting and analytics",
      "Device testing",
    ],
    helps: [
      { title: "One codebase", body: "Both platforms from a shared codebase, so features ship once." },
      { title: "Real device testing", body: "Tested on the devices your users actually own, not just simulators." },
      { title: "Release discipline", body: "Versioned releases, crash reporting and a clear rollback path." },
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    featured: false,
    status: "published",
    order: 2,
  },
  {
    id: "svc-software",
    title: "Custom Software Development",
    slug: "custom-software-development",
    group: "Technology & Development",
    tagline: "Software shaped around how your business runs.",
    description:
      "Internal tools and management systems designed around your actual workflow, not a template someone else's process.",
    icon: "Boxes",
    overview:
      "When off-the-shelf software forces your team into the wrong process, custom software pays for itself. We map the workflow, then build only what earns its place.",
    offers: [
      "Business management systems",
      "Internal tools and admin panels",
      "Workflow and approval systems",
      "Reporting and document generation",
      "Legacy system modernisation",
    ],
    capabilities: [
      "Workflow mapping and process design",
      "Role-based access and permissions",
      "Third-party API integration",
      "Data migration",
      "Audit trails and logging",
      "Phased delivery",
    ],
    helps: [
      { title: "Workflow mapping", body: "We document the current process before proposing a system." },
      { title: "Scoped phases", body: "Delivered in usable phases so value arrives before the final release." },
      { title: "Built to extend", body: "Clean data models that survive the next three feature requests." },
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "REST APIs"],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "svc-saas",
    title: "SaaS & Web Applications",
    slug: "saas-and-web-applications",
    group: "Technology & Development",
    tagline: "Products with subscriptions, tenants and roadmaps.",
    description:
      "Multi-tenant SaaS products with authentication, billing, plan limits and an architecture that survives growth.",
    icon: "LayoutTemplate",
    overview:
      "A SaaS product is a business model as much as a codebase. We build the parts founders underestimate — onboarding, plans, limits, billing states — alongside the core feature set.",
    offers: [
      "SaaS MVP builds",
      "Multi-tenant application architecture",
      "Subscription and billing integration",
      "Onboarding and trial flows",
      "Admin and customer-success tooling",
    ],
    capabilities: [
      "Authentication and team accounts",
      "Plan limits and entitlements",
      "Billing and invoicing integration",
      "Usage metering",
      "Feature flags and staged rollout",
      "Product analytics",
    ],
    helps: [
      { title: "Launchable scope", body: "We cut the first release to what proves the model." },
      { title: "Billing done properly", body: "Upgrades, downgrades, failed payments and refunds handled up front." },
      { title: "Room to grow", body: "Tenant isolation and data models that hold at 10x usage." },
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
    featured: false,
    status: "published",
    order: 4,
  },
  {
    id: "svc-ai",
    title: "AI & Automation",
    slug: "ai-and-automation",
    group: "Technology & Development",
    tagline: "Automation that removes real manual work.",
    description:
      "AI-assisted features and workflow automation applied where they measurably save time, not as decoration.",
    icon: "Sparkles",
    overview:
      "We start from the repetitive task, not the model. If a simple rule solves it, we use a rule. If it needs AI, we integrate it carefully with fallbacks and cost control.",
    offers: [
      "AI features inside existing products",
      "Document and data extraction",
      "Chat and assistant interfaces",
      "Business process automation",
      "Search and recommendation systems",
    ],
    capabilities: [
      "Task and process analysis",
      "Prompt and retrieval design",
      "Vector search and embeddings",
      "Integration with internal systems",
      "Evaluation and quality checks",
      "Usage and cost monitoring",
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
    id: "svc-cloud",
    title: "Cloud & DevOps Solutions",
    slug: "cloud-and-devops",
    group: "Technology & Development",
    tagline: "Infrastructure that stays boring.",
    description:
      "Deployment, environments, monitoring and scaling set up so releases are routine and downtime is rare.",
    icon: "Cloud",
    overview:
      "Good infrastructure is unremarkable. We set up environments, pipelines and monitoring so your team can ship on a Friday without flinching.",
    offers: [
      "Cloud architecture and setup",
      "CI/CD pipeline implementation",
      "Monitoring and alerting",
      "Backup and disaster recovery",
      "Cost review and optimisation",
    ],
    capabilities: [
      "Environment and secrets management",
      "Containerisation",
      "Infrastructure as code",
      "Uptime and error monitoring",
      "Scaling strategy",
      "Security hardening",
    ],
    helps: [
      { title: "Repeatable deploys", body: "Automated pipelines replace manual release checklists." },
      { title: "Visibility", body: "Alerting that tells you about problems before customers do." },
      { title: "Controlled spend", body: "Right-sized resources and a monthly cost review." },
    ],
    technologies: ["AWS", "Vercel", "Docker", "CI/CD", "PostgreSQL"],
    featured: false,
    status: "published",
    order: 6,
  },
  {
    id: "svc-data",
    title: "Data Analytics & Dashboards",
    slug: "data-analytics-and-dashboards",
    group: "Technology & Development",
    tagline: "Numbers your team actually acts on.",
    description:
      "Reporting pipelines and dashboards that answer specific business questions instead of showing every chart available.",
    icon: "BarChart3",
    overview:
      "Most dashboards fail because nobody decided what decision they support. We define the questions first, then build the pipeline and the screens that answer them.",
    offers: [
      "Business and operations dashboards",
      "Reporting pipelines and data warehouses",
      "KPI definition workshops",
      "Automated scheduled reports",
      "Data cleanup and consolidation",
    ],
    capabilities: [
      "Metric definition",
      "ETL and data modelling",
      "Dashboard design and build",
      "Access control by role",
      "Export and scheduled delivery",
      "Data quality monitoring",
    ],
    helps: [
      { title: "Decision-led", body: "Each screen answers one question someone is accountable for." },
      { title: "Single source", body: "Consolidated data so two reports stop disagreeing." },
      { title: "Automated", body: "Scheduled refresh replaces the monthly spreadsheet ritual." },
    ],
    technologies: ["PostgreSQL", "Python", "React", "SQL", "Charting libraries"],
    featured: false,
    status: "published",
    order: 7,
  },
  {
    id: "svc-uiux",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    group: "Design & Creative",
    tagline: "Interfaces designed around real tasks.",
    description:
      "Research, flows, wireframes and production-ready interface systems that developers can build without guesswork.",
    icon: "Layers",
    overview:
      "We design in systems, not screens. Flows first, then components, then the polish — so the product stays coherent as it grows.",
    offers: [
      "Product discovery and user flows",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design",
      "Design systems and component libraries",
      "Usability and accessibility reviews",
    ],
    capabilities: [
      "User research and task analysis",
      "Information architecture",
      "Prototyping",
      "Design tokens and theming",
      "Developer handoff documentation",
      "Accessibility audits",
    ],
    helps: [
      { title: "Fewer dead ends", body: "Flows tested on paper before anyone writes code." },
      { title: "Consistent product", body: "A token-based system keeps every screen on-brand." },
      { title: "Buildable handoff", body: "Specs, states and edge cases documented for engineering." },
    ],
    technologies: ["Figma", "Design tokens", "Prototyping", "Tailwind CSS"],
    featured: true,
    status: "published",
    order: 8,
  },
  {
    id: "svc-graphic",
    title: "Graphic Design",
    slug: "graphic-design",
    group: "Design & Creative",
    tagline: "Design work that ships on schedule.",
    description:
      "Social creatives, marketing collateral, decks and print assets produced to a consistent visual standard.",
    icon: "Shapes",
    overview:
      "Marketing teams need volume without drift. We work from your brand system so every asset looks like it came from the same place, whatever the format.",
    offers: [
      "Social media creatives",
      "Ad and campaign creatives",
      "Brochures, flyers and print collateral",
      "Presentation and pitch decks",
      "Packaging and event graphics",
    ],
    capabilities: [
      "Layout and composition",
      "Typography systems",
      "Vector illustration",
      "Template kits for in-house teams",
      "Print-ready file preparation",
      "Multi-format resizing",
    ],
    helps: [
      { title: "Consistent output", body: "Templates and rules keep every asset on-brand." },
      { title: "Predictable turnaround", body: "Agreed delivery windows per batch of assets." },
      { title: "Reusable kits", body: "Editable source files handed over, not just exports." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Vector illustration"],
    featured: true,
    status: "published",
    order: 9,
  },
  {
    id: "svc-brand",
    title: "Branding & Logo Design",
    slug: "branding-and-logo-design",
    group: "Design & Creative",
    tagline: "Identity systems that hold up everywhere.",
    description:
      "Logos, identity systems and guidelines built as a usable kit — from favicon to pitch deck.",
    icon: "PenTool",
    overview:
      "A brand is a system, not a logo file. We deliver the marks, type, colour and usage rules your team needs to stay consistent.",
    offers: [
      "Logo and monogram design",
      "Full visual identity systems",
      "Brand guideline documents",
      "Stationery and collateral templates",
      "Brand refresh and repositioning",
    ],
    capabilities: [
      "Mark and wordmark design",
      "Colour and type systems",
      "Usage rules and do/don't guidance",
      "Favicon and app icon sets",
      "Asset libraries in every format",
      "Digital-first testing",
    ],
    helps: [
      { title: "Usable kit", body: "Every file format and size your team will actually ask for." },
      { title: "Written rules", body: "Clear do and don't guidance so the brand survives contact with reality." },
      { title: "Digital-first", body: "Tested at favicon size before it's signed off." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Design tokens"],
    featured: true,
    status: "published",
    order: 10,
  },
  {
    id: "svc-video",
    title: "Video Editing & Motion Graphics",
    slug: "video-editing-and-motion-graphics",
    group: "Design & Creative",
    tagline: "Edits built for the platform they run on.",
    description:
      "Short-form edits, product videos and animated graphics cut for retention rather than runtime.",
    icon: "Film",
    overview:
      "The first two seconds decide whether the rest gets watched. We cut for the platform — pacing, captions, aspect ratio and hook, not just a tidy timeline.",
    offers: [
      "Short-form reels and shorts",
      "Product and explainer videos",
      "Motion graphics and animated logos",
      "Corporate and event edits",
      "Subtitling and platform resizing",
    ],
    capabilities: [
      "Edit and pacing",
      "Colour correction",
      "Sound mix and music selection",
      "Animated titles and lower thirds",
      "Captions and subtitles",
      "Multi-aspect exports",
    ],
    helps: [
      { title: "Platform-native", body: "Exports sized and paced for where the video will actually run." },
      { title: "Fast revisions", body: "Defined revision rounds so feedback doesn't stall delivery." },
      { title: "Reusable assets", body: "Motion templates you can apply to future videos." },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion design"],
    featured: true,
    status: "published",
    order: 11,
  },
  {
    id: "svc-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    group: "Digital Growth",
    tagline: "Traffic that turns into enquiries.",
    description:
      "Paid campaigns, landing pages and tracking tied to measurable pipeline rather than vanity metrics.",
    icon: "TrendingUp",
    overview:
      "Marketing works when the page behind it converts. We handle both sides — the acquisition and the page that has to do the closing.",
    offers: [
      "Paid search and social campaigns",
      "Landing page design and testing",
      "Conversion tracking setup",
      "Marketing analytics and reporting",
      "Campaign strategy and budgeting",
    ],
    capabilities: [
      "Audience and keyword research",
      "Ad creative and copy",
      "A/B and landing page testing",
      "Attribution and tracking",
      "Budget pacing",
      "Monthly performance reporting",
    ],
    helps: [
      { title: "Fix the foundation", body: "Speed, structure and tracking before spending on ads." },
      { title: "Honest reporting", body: "Enquiries and cost per lead, not impressions." },
      { title: "Iterative testing", body: "Small, measured changes rather than full redesigns." },
    ],
    technologies: ["Google Ads", "Meta Ads", "Analytics", "Tag management"],
    featured: true,
    status: "published",
    order: 12,
  },
  {
    id: "svc-social",
    title: "Social Media Management",
    slug: "social-media-management",
    group: "Digital Growth",
    tagline: "A calendar that actually gets published.",
    description:
      "Planning, creative production and community management run as a monthly operation with clear reporting.",
    icon: "MessageCircle",
    overview:
      "Consistency beats cleverness on social. We run the calendar, produce the assets and report on what moved, so the channel stops depending on whoever has time.",
    offers: [
      "Content calendar planning",
      "Post and reel creative production",
      "Copywriting and captions",
      "Community management and replies",
      "Monthly performance reporting",
    ],
    capabilities: [
      "Channel strategy",
      "Creative production at volume",
      "Scheduling and publishing",
      "Hashtag and discovery research",
      "Engagement monitoring",
      "Competitor benchmarking",
    ],
    helps: [
      { title: "Always on", body: "A planned calendar removes the weekly scramble." },
      { title: "On-brand", body: "Templates derived from your identity system." },
      { title: "Reported monthly", body: "Reach, engagement and enquiries in one short report." },
    ],
    technologies: ["Figma", "Scheduling tools", "Analytics", "Adobe Creative Suite"],
    featured: false,
    status: "published",
    order: 13,
  },
  {
    id: "svc-seo",
    title: "SEO & Search Optimization",
    slug: "seo-and-search-optimization",
    group: "Digital Growth",
    tagline: "Technical fixes, then content that ranks.",
    description:
      "Site audits, structure, technical fixes and content mapping aimed at qualified organic traffic.",
    icon: "Search",
    overview:
      "SEO is mostly engineering and editorial discipline. We fix what crawlers struggle with, map pages to intent, then build content against that map.",
    offers: [
      "Technical SEO audits",
      "Site structure and URL planning",
      "Keyword and intent mapping",
      "On-page optimisation",
      "Local and multi-region SEO",
    ],
    capabilities: [
      "Crawl and index diagnostics",
      "Core Web Vitals improvement",
      "Structured data markup",
      "Internal linking strategy",
      "Content gap analysis",
      "Rank and traffic reporting",
    ],
    helps: [
      { title: "Fix first", body: "Technical blockers cleared before content investment." },
      { title: "Intent mapping", body: "One page per search intent, no internal competition." },
      { title: "Tracked progress", body: "Monthly reporting against agreed target terms." },
    ],
    technologies: ["Search Console", "Technical SEO", "Analytics", "Structured data"],
    featured: false,
    status: "published",
    order: 14,
  },
  {
    id: "svc-content",
    title: "Content & Creative Services",
    slug: "content-and-creative-services",
    group: "Digital Growth",
    tagline: "Words and assets that carry the strategy.",
    description:
      "Website copy, service pages, blogs and creative direction written to the same standard as the design.",
    icon: "Type",
    overview:
      "Good design with weak copy still fails. We write the pages that have to explain and persuade, in plain language your buyers recognise.",
    offers: [
      "Website and service page copy",
      "Blog and article writing",
      "Case study writing",
      "Product and app store copy",
      "Creative direction for campaigns",
    ],
    capabilities: [
      "Messaging and positioning",
      "Tone of voice guidelines",
      "SEO-aware editorial writing",
      "Content calendars",
      "Editing and proofreading",
      "Bilingual content coordination",
    ],
    helps: [
      { title: "Plain language", body: "No filler adjectives — what it does and who it's for." },
      { title: "Structured for search", body: "Written against the intent map, not around it." },
      { title: "Consistent voice", body: "Documented tone rules so future content matches." },
    ],
    technologies: ["Editorial workflow", "SEO tooling", "Content modelling"],
    featured: false,
    status: "published",
    order: 15,
  },
  {
    id: "svc-printing",
    title: "Custom Printing & Corporate Branding",
    slug: "custom-printing-branding",
    group: "Design & Creative",
    tagline: "Custom apparel, uniforms, and corporate merchandise solutions.",
    description:
      "High-grade branded apparel, custom T-shirts, corporate uniforms, drinkware, packaging and marketing collateral with Pan-India delivery.",
    icon: "Shapes",
    overview:
      "Apne business ko sirf promote mat kijiye — apni branding ko professional banaiye! DEVGRONIX provides complete custom printing and corporate merchandise services with modern design support, premium fabrics and printing finishes, and fast Pan-India shipping.",
    offers: [
      "Custom T-Shirts & Polo Shirts (DTF, Screen & Embroidery)",
      "Hoodies, Winter Jackets & Corporate Uniforms",
      "Custom Mugs, Drinkware Bottles & Caps",
      "Business Cards, Stationery & Letterheads",
      "Stickers, Product Labels & Packaging Boxes",
      "Brochures, Flyers & Marketing Collaterals",
    ],
    capabilities: [
      "DTF, Screen Printing, Sublimation & Embroidery",
      "Pre-production digital mockups & proofs",
      "Bulk wholesale pricing for offices, events & colleges",
      "Pan-India doorstep delivery with secure packing",
      "Low minimum order quantities (MOQ)",
      "Complete design and vector artwork support",
    ],
    helps: [
      { title: "Professional Brand Image", body: "Equip your team and clients with premium branded merchandise that leaves an impression." },
      { title: "Pre-Production Digital Proofs", body: "Review exact colors, logo sizing and placements before manufacturing starts." },
      { title: "Pan-India Reliable Shipping", body: "Direct tracked delivery to your corporate office, campus or event doorstep." },
    ],
    technologies: ["DTF Printing", "Screen Printing", "Sublimation", "Embroidery", "Offset Printing", "Pan-India Shipping"],
    featured: true,
    status: "published",
    order: 16,
  },
];

export const publishedServices = services
  .filter((s) => s.status === "published")
  .sort((a, b) => a.order - b.order);

export const featuredServices = publishedServices.filter((s) => s.featured);

/** Services bucketed by group, in directory order. */
export const servicesByGroup = serviceGroups.map((group) => ({
  group,
  items: publishedServices.filter((s) => s.group === group),
}));

export function getServiceBySlug(slug: string) {
  return publishedServices.find((s) => s.slug === slug);
}

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

/** Previous / next service in directory order, for service-to-service browsing. */
export function getAdjacentServices(slug: string) {
  const i = publishedServices.findIndex((s) => s.slug === slug);
  if (i === -1) return { previous: undefined, next: undefined };
  return {
    previous: i > 0 ? publishedServices[i - 1] : publishedServices[publishedServices.length - 1],
    next: i < publishedServices.length - 1 ? publishedServices[i + 1] : publishedServices[0],
  };
}
