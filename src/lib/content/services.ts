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
    id: "svc-printing",
    title: "Custom Printing & Corporate Branding",
    slug: "custom-printing-branding",
    group: "Design & Creative",
    tagline: "Premium custom apparel, stationery, and branded promotional merchandise.",
    description:
      "Complete custom printing solutions for businesses, startups, and events — from branded T-shirts and hoodies to business cards, packaging, and marketing materials.",
    icon: "Palette",
    overview:
      "Make your brand stand out in the real world. DEVGRONIX delivers high-quality custom printing and physical branding solutions with low minimum order quantities, fast turnaround, and doorstep delivery across India and overseas.",
    offers: [
      "Custom apparel: T-shirts, hoodies, polo shirts, caps, and uniforms",
      "Corporate drinkware: custom mugs, insulated water bottles, and coasters",
      "Business stationery: luxury business cards, letterheads, diaries, and notebooks",
      "Packaging & unboxing: branded stickers, poly mailers, and custom boxes",
      "Promotional prints: brochures, flyers, standees, banners, and lanyard badges",
    ],
    capabilities: [
      "Vector artwork preparation and color matching",
      "Screen printing, DTF, embroidery, and sublimation",
      "Bulk ordering discounts and startup packages",
      "Doorstep delivery with quality checks",
      "Mockup approval before production begins",
    ],
    helps: [
      { title: "Tangible Brand Impact", body: "High-quality merchandise that turns clients and employees into everyday brand ambassadors." },
      { title: "Startup-Friendly MOQs", body: "Affordable starter batches without forcing massive upfront inventory investments." },
      { title: "End-to-End Execution", body: "From design vectorization to final doorstep delivery with zero production guesswork." },
    ],
    technologies: ["Screen Printing", "DTF Printing", "Sublimation", "Vector Design", "Laser Engraving", "CMYK Printing"],
    featured: true,
    status: "published",
    order: 2,
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
      "Offline sync and local storage",
      "App store submission and updates",
    ],
    capabilities: [
      "React Native / Flutter development",
      "Native iOS and Android bridges",
      "Push notification systems",
      "App Store & Play Store optimisation",
      "Crash and performance monitoring",
      "Over-the-air updates",
    ],
    helps: [
      { title: "One codebase", body: "Cross-platform development keeps iOS and Android features in lockstep." },
      { title: "Offline-first", body: "Core flows continue working without network connection." },
      { title: "Store approval", body: "Guideline compliance handled during build, avoiding submission rejection." },
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    featured: false,
    status: "published",
    order: 3,
  },
  {
    id: "svc-software",
    title: "Custom Software Development",
    slug: "custom-software-development",
    group: "Technology & Development",
    tagline: "Systems built around how your business works.",
    description:
      "Internal tools, management systems and workflow software designed around how your business actually operates.",
    icon: "Boxes",
    overview:
      "Off-the-shelf tools force you into other people's workflows. We build software around your actual operational sequence — replacing manual steps and spreadsheet workarounds.",
    offers: [
      "Internal workflow tools",
      "ERP and inventory management",
      "Custom CRM systems",
      "API development and integration",
      "Legacy system modernisation",
    ],
    capabilities: [
      "Architecture and database design",
      "Role-based access and audit logging",
      "Third-party API integration",
      "Automated reports and exports",
      "Data migration from legacy systems",
      "Ongoing maintenance and SLA support",
    ],
    helps: [
      { title: "Workflow mapping", body: "We document the current process before proposing a system." },
      { title: "Incremental delivery", body: "Small releases you can put into use, not a single monolithic launch." },
      { title: "No lock-in", body: "Clean architecture on standard stacks you can maintain in-house." },
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    featured: false,
    status: "published",
    order: 4,
  },
  {
    id: "svc-saas",
    title: "SaaS & Web Applications",
    slug: "saas-and-web-applications",
    group: "Technology & Development",
    tagline: "From product idea to paying subscribers.",
    description:
      "Multi-tenant SaaS products built for reliable onboarding, billing, permissions and data separation.",
    icon: "Layers",
    overview:
      "Building a software product is different from building a marketing site. We focus on the product fundamentals: secure auth, tenant isolation, clear billing states and responsive interfaces.",
    offers: [
      "SaaS product architecture",
      "MVP builds for new software products",
      "Multi-tenant data isolation",
      "Subscription and usage-based billing",
      "Onboarding flows and user management",
    ],
    capabilities: [
      "Multi-tenant data design",
      "Stripe and billing integration",
      "Role-based access control",
      "Transactional email",
      "Background jobs and queues",
      "Product analytics",
    ],
    helps: [
      { title: "Clear tenant boundaries", body: "Row-level security and tenant isolation from day one." },
      { title: "Billing that handles edge cases", body: "Upgrades, downgrades, failed charges and cancellations accounted for." },
      { title: "Maintainable codebase", body: "Typed end-to-end so your team can add features with confidence." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    featured: false,
    status: "published",
    order: 5,
  },
  {
    id: "svc-ai",
    title: "AI & Automation",
    slug: "ai-and-automation",
    group: "Technology & Development",
    tagline: "Practical AI that cuts repetitive work.",
    description:
      "AI features that solve concrete operational problems — search, classification, summarisation, structured extraction.",
    icon: "Bot",
    overview:
      "We avoid demo AI that breaks in production. We ship scoped LLM features with structured outputs, evaluation sets and cost monitoring built in.",
    offers: [
      "Semantic search and retrieval (RAG)",
      "Document processing and data extraction",
      "Automated classification and routing",
      "Workflow automation and system integration",
      "Internal AI assistants on company data",
    ],
    capabilities: [
      "Vector search and embeddings",
      "Structured output design",
      "Prompt evaluation and regression checks",
      "Token and cost monitoring",
      "Webhook and queue integration",
      "Fallback and error handling",
    ],
    helps: [
      { title: "Scoped to clear tasks", body: "We focus on tasks where correctness is verifiable." },
      { title: "Cost and latency bounded", body: "Prompt size and model selection tuned for production economics." },
      { title: "Fallback paths", body: "Graceful degradation when the model is uncertain." },
    ],
    technologies: ["OpenAI", "Anthropic", "Python", "TypeScript", "pgvector", "LangChain"],
    featured: false,
    status: "published",
    order: 6,
  },
  {
    id: "svc-cloud",
    title: "Cloud & DevOps Solutions",
    slug: "cloud-and-devops",
    group: "Technology & Development",
    tagline: "Infrastructure that stays out of your way.",
    description:
      "CI/CD pipelines, container environments and cloud infrastructure configured for predictable deployments.",
    icon: "Cloud",
    overview:
      "Good infrastructure is boring: code deploys reliably, logs are readable when something goes wrong, and bills don't spike unexpectedly. That is what we configure.",
    offers: [
      "CI/CD pipeline setup and optimisation",
      "Containerisation and environment parity",
      "Cloud architecture and migration",
      "Monitoring, alerting and log aggregation",
      "Security scanning and hardening",
    ],
    capabilities: [
      "GitHub Actions workflows",
      "Docker and container orchestration",
      "Infrastructure as Code",
      "Zero-downtime deployments",
      "Cost review and right-sizing",
      "Backup and recovery procedures",
    ],
    helps: [
      { title: "Predictable releases", body: "Automated checks run on every pull request, not after deployment." },
      { title: "Clear logs", body: "Structured logging so debugging production issues is fast." },
      { title: "Right-sized spend", body: "Infrastructure sized to your actual load, not hypothetical spikes." },
    ],
    technologies: ["Docker", "GitHub Actions", "AWS", "Vercel", "PostgreSQL", "Terraform"],
    featured: false,
    status: "published",
    order: 7,
  },
  {
    id: "svc-data",
    title: "Data Analytics & Dashboards",
    slug: "data-analytics-and-dashboards",
    group: "Technology & Development",
    tagline: "Answers to the questions you actually ask.",
    description:
      "Clean reporting pipelines, KPI dashboards and analytics setups that show what is actually happening in your business.",
    icon: "BarChart3",
    overview:
      "Most dashboards fail because they show too many numbers without context. We design reporting around the decisions you make every week.",
    offers: [
      "Executive KPI dashboards",
      "Product and user analytics pipelines",
      "Data ingestion and transformation",
      "Automated weekly and monthly reports",
      "Event tracking architecture",
    ],
    capabilities: [
      "Event schema design",
      "SQL data modelling",
      "Dashboard design and visualisation",
      "Data quality checks",
      "Scheduled reporting",
      "Analytics tool integration",
    ],
    helps: [
      { title: "Focused metrics", body: "Dashboards built around 3–5 decisions, not 40 unrelated charts." },
      { title: "Clean tracking", body: "Event schemas documented so data stays reliable over time." },
      { title: "Actionable format", body: "Reports designed for the people reading them, delivered where they already work." },
    ],
    technologies: ["SQL", "PostgreSQL", "Metabase", "PostHog", "TypeScript", "Python"],
    featured: false,
    status: "published",
    order: 8,
  },
  {
    id: "svc-uiux",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    group: "Design & Creative",
    tagline: "Interfaces that get out of the user's way.",
    description:
      "User research, wireframing, high-fidelity prototypes and design systems built for real product workflows.",
    icon: "Layout",
    overview:
      "We design interfaces that respect the user's time. Clear hierarchy, predictable navigation and accessible components that look right and work well on every screen size.",
    offers: [
      "Product interface design",
      "Wireframing and user journey mapping",
      "Interactive Figma prototypes",
      "Design systems and component libraries",
      "Usability audits and redesigns",
    ],
    capabilities: [
      "User flows and information architecture",
      "Responsive design",
      "Design system tokens and components",
      "Accessibility (WCAG AA)",
      "Developer handoff documentation",
      "Clickable prototypes",
    ],
    helps: [
      { title: "Reduced friction", body: "Journeys mapped to the fewest steps needed to complete a task." },
      { title: "Component consistency", body: "Design systems that map directly to code components." },
      { title: "Handoff ready", body: "Specs that developers can build from without guesswork." },
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "shadcn/ui", "WCAG"],
    featured: false,
    status: "published",
    order: 9,
  },
  {
    id: "svc-graphic",
    title: "Graphic Design",
    slug: "graphic-design",
    group: "Design & Creative",
    tagline: "Visuals that communicate clearly.",
    description:
      "Marketing collateral, presentation decks, social assets and digital graphics that represent your brand properly.",
    icon: "Palette",
    overview:
      "Good design is not decoration — it is clear communication. We create visual assets that fit your brand identity and work well across print and digital formats.",
    offers: [
      "Pitch decks and presentation design",
      "Marketing brochures and collateral",
      "Social media visual packages",
      "Infographics and data visualisations",
      "Event and print materials",
    ],
    capabilities: [
      "Visual hierarchy and typography",
      "Brand consistency across formats",
      "Print-ready file preparation",
      "Digital asset optimisation",
      "Template systems for ongoing use",
      "Vector illustration",
    ],
    helps: [
      { title: "Brand consistency", body: "Every asset follows the same typography, colour and spacing rules." },
      { title: "Editable templates", body: "Files set up so your team can produce variations independently." },
      { title: "Format-ready", body: "Exported in the exact specifications required by each platform or printer." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Vector"],
    featured: false,
    status: "published",
    order: 10,
  },
  {
    id: "svc-brand",
    title: "Branding & Logo Design",
    slug: "branding-and-logo-design",
    group: "Design & Creative",
    tagline: "Identities that look right in five years.",
    description:
      "Logo design, brand guidelines, typography systems and visual identity packages that give your company a clear face.",
    icon: "Sparkles",
    overview:
      "A strong brand identity is easy to recognise and practical to use. We build identity packages that work as well on a favicon as on a physical sign.",
    offers: [
      "Logo design and mark systems",
      "Brand guidelines and usage rules",
      "Typography and colour palettes",
      "Stationery and business card design",
      "Brand positioning and messaging guides",
    ],
    capabilities: [
      "Logo exploration and iteration",
      "Vector asset delivery (SVG, EPS, PDF)",
      "Colour palette accessible contrast checks",
      "Typography pairing and licensing guidance",
      "Brand guideline documentation",
      "Digital and print asset kits",
    ],
    helps: [
      { title: "Practical guidelines", body: "Rules your team and partners can actually follow." },
      { title: "Complete asset kits", body: "Every format, size and variation you will need delivered up front." },
      { title: "Long-term relevance", body: "Designs based on clear geometry and strong typography, not short-term trends." },
    ],
    technologies: ["Figma", "Illustrator", "Typography Systems", "Vector", "Brand Guidelines"],
    featured: false,
    status: "published",
    order: 11,
  },
  {
    id: "svc-video",
    title: "Video Editing & Motion Graphics",
    slug: "video-editing-and-motion-graphics",
    group: "Design & Creative",
    tagline: "Video that gets straight to the point.",
    description:
      "Product demo videos, explainer animations, social clips and promotional edits cut for attention and clarity.",
    icon: "Video",
    overview:
      "Audiences decide whether to keep watching in the first three seconds. We edit video with strong pacing, clean sound design and motion that supports the message rather than distracting from it.",
    offers: [
      "Product walkthrough and demo videos",
      "Explainer and promotional videos",
      "Short-form social edits (Reels, TikTok, Shorts)",
      "Motion graphics and UI animations",
      "Podcast editing and audio cleanup",
    ],
    capabilities: [
      "Storyboarding and script review",
      "Pacing and narrative editing",
      "Colour correction and audio mixing",
      "Subtitles and captions",
      "Motion design for UI elements",
      "Format optimisation for each channel",
    ],
    helps: [
      { title: "Hook in seconds", body: "Edits structured around holding attention from the opening frame." },
      { title: "Multi-format delivery", body: "Assets cut for 16:9, 9:16 and 1:1 without compromised framing." },
      { title: "Clean audio", body: "Audio balanced and dialogue cleaned so the final piece sounds professional." },
    ],
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Figma"],
    featured: false,
    status: "published",
    order: 12,
  },
  {
    id: "svc-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    group: "Digital Growth",
    tagline: "Acquisition channels that pay back.",
    description:
      "Paid search, paid social, campaign strategy and conversion tracking designed to generate predictable enquiry volume.",
    icon: "Megaphone",
    overview:
      "Digital marketing only works when the tracking is accurate and the economics make sense. We set up campaigns where every dollar spent is attributable to an outcome.",
    offers: [
      "Google Ads (Search & Performance Max)",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads for B2B lead generation",
      "Conversion tracking and attribution setup",
      "Landing page conversion optimisation",
    ],
    capabilities: [
      "Audience targeting and keyword research",
      "Ad creative and copy development",
      "Server-side conversion tracking (CAPI)",
      "Budget pacing and bid strategy",
      "A/B testing of messaging and hooks",
      "Attribution reporting",
    ],
    helps: [
      { title: "Accurate tracking", body: "Conversions verified on your backend, not just in ad platforms." },
      { title: "Tightly-targeted spend", body: "Negative keywords and audience exclusions to eliminate waste." },
      { title: "Clear cost per lead", body: "Reporting focused on cost per qualified enquiry, not vanity clicks." },
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Tag Manager", "PostHog"],
    featured: false,
    status: "published",
    order: 13,
  },
  {
    id: "svc-social",
    title: "Social Media Management",
    slug: "social-media-management",
    group: "Digital Growth",
    tagline: "Consistent presence without the noise.",
    description:
      "Content calendars, post production, community management and profile optimisation across your primary channels.",
    icon: "Share2",
    overview:
      "Social media works best when it is consistent and relevant to what your buyers care about. We build publishing schedules that establish your company as a reliable authority in your space.",
    offers: [
      "Content strategy and monthly planning",
      "Post creation (copy, graphics, carousels)",
      "Profile audits and optimisation",
      "Community engagement and response",
      "Monthly performance reporting",
    ],
    capabilities: [
      "Content calendar management",
      "Visual template systems",
      "Copywriting tailored to each platform",
      "Hashtag and reach optimisation",
      "Engagement tracking and analysis",
      "Competitor benchmarking",
    ],
    helps: [
      { title: "Consistent publishing", body: "Content planned and approved weeks in advance, not last-minute." },
      { title: "Platform-native formats", body: "Carousels for LinkedIn, reels for Instagram, threads for X." },
      { title: "Lead focus", body: "Posts designed to drive profile visits, newsletter signups and direct enquiries." },
    ],
    technologies: ["LinkedIn", "Instagram", "Buffer", "Figma", "Canva", "Analytics Tools"],
    featured: false,
    status: "published",
    order: 14,
  },
  {
    id: "svc-seo",
    title: "SEO & Search Optimization",
    slug: "seo-and-search-optimization",
    group: "Digital Growth",
    tagline: "Organic traffic that converts to customers.",
    description:
      "Technical audits, keyword research, on-page optimisation and content architecture built for compounding organic search visibility.",
    icon: "Search",
    overview:
      "SEO is not about keyword stuffing — it is about answering search intent better than competing pages. We fix technical barriers first, then build content that ranks and converts.",
    offers: [
      "Technical SEO audits and fixes",
      "Keyword and competitor gap research",
      "On-page metadata and content optimisation",
      "Schema markup and structured data",
      "Internal linking architecture",
    ],
    capabilities: [
      "Core Web Vitals optimisation",
      "Crawlability and indexation checks",
      "Structured data (JSON-LD)",
      "Search intent mapping",
      "Google Search Console monitoring",
      "Canonical and redirect management",
    ],
    helps: [
      { title: "Technical foundation", body: "Sitemaps, canonicals, schema and response times fixed first." },
      { title: "High-intent keywords", body: "Focus on commercial queries that buyers search, not just high volume." },
      { title: "Measurable progress", body: "Rankings and clicks tracked directly in Search Console over time." },
    ],
    technologies: ["Google Search Console", "Schema.org", "Semrush", "Next.js SEO", "Screaming Frog"],
    featured: false,
    status: "published",
    order: 15,
  },
  {
    id: "svc-content",
    title: "Content & Creative Services",
    slug: "content-and-creative-services",
    group: "Digital Growth",
    tagline: "Clear writing that drives decisions.",
    description:
      "Website copywriting, case studies, blog content, email newsletters and editorial material written for your audience.",
    icon: "FileText",
    overview:
      "Good copy sounds like an experienced person explaining something clearly. We write content that respects the reader, explains what your business does without jargon, and guides them toward an action.",
    offers: [
      "Website copywriting and page rewrites",
      "Client case studies and customer stories",
      "Blog articles and thought leadership pieces",
      "Email newsletter writing and sequencing",
      "Product one-pagers and brochures",
    ],
    capabilities: [
      "Interviews with team members and customers",
      "Tone of voice guidelines",
      "SEO-informed content briefs",
      "Proofreading and editorial review",
      "CTA and conversion copywriting",
      "Content repurposing across formats",
    ],
    helps: [
      { title: "Jargon-free", body: "Complex offerings explained simply so buyers understand value immediately." },
      { title: "Evidence-backed", body: "Case studies structured around concrete metrics and real customer quotes." },
      { title: "Clear next steps", body: "Every piece ends with a logical call to action for the reader." },
    ],
    technologies: ["Figma", "Google Docs", "Markdown", "Grammarly", "Search Console"],
    featured: false,
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

export function getServiceBySlug(slug: string): Service | undefined {
  return publishedServices.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
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
