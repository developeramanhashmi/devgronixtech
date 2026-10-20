import type { Project, Service, ServiceSeo } from "./types";

/**
 * Search metadata per service, keyed by slug.
 *
 * Kept in the content layer (not inside components) so a future admin panel can
 * edit SEO title, description, H1, search intent and FAQs per service without
 * touching UI code.
 */
export const serviceSeo: Record<string, ServiceSeo> = {
  "web-development": {
    metaTitle: "Website Designing & Web Development Company | DEVGRONIX",
    metaDescription:
      "Professional website designing and web development starting at ₹999. Fast, mobile-responsive business websites, eCommerce stores, and custom landing pages by DEVGRONIX.",
    h1: "Website Designing & Web Development Services",
    keywords: [
      "website designing company",
      "web development services",
      "affordable web design india",
      "business website development",
      "responsive web design",
      "devgronix web development",
    ],
    faqs: [
      {
        question: "What does your web development service include?",
        answer:
          "Discovery and information architecture, interface design, front-end and back-end build, content modelling, analytics setup, testing and launch. Ongoing maintenance is available separately.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "A focused marketing site usually runs four to eight weeks; larger portals and platforms take longer. We confirm the timeline after scoping, before any build starts.",
      },
      {
        question: "Will my team be able to update the content?",
        answer:
          "Yes. We model content so your team can edit pages, posts and sections without a developer, and we document how it works at handover.",
      },
    ],
  },
  "mobile-app-development": {
    metaTitle: "Mobile App Development Company | DEVGRONIX",
    metaDescription:
      "Mobile app development services from DEVGRONIX — cross-platform Android and iOS apps, product MVPs, API integration and managed app store releases.",
    h1: "Mobile App Development Services",
    keywords: [
      "mobile app development company",
      "mobile app development services",
      "Android app development",
      "iOS app development",
      "cross-platform app development",
    ],
    faqs: [
      {
        question: "Do you build for both Android and iOS?",
        answer:
          "Yes. We build cross-platform apps from a shared codebase so features ship to both stores together, with platform-specific work where it genuinely matters.",
      },
      {
        question: "Can you start with a smaller first version?",
        answer:
          "Often that is the right call. We scope an MVP around the core journey, release it, then extend based on how people actually use it.",
      },
      {
        question: "Do you handle app store submission?",
        answer:
          "We prepare store listings, handle submission and set up versioned releases with crash reporting so updates are routine rather than risky.",
      },
    ],
  },
  "custom-software-development": {
    metaTitle: "Custom Software Development Company | DEVGRONIX",
    metaDescription:
      "Custom software development from DEVGRONIX — internal tools, management systems and workflow software designed around how your business actually operates.",
    h1: "Custom Software Development",
    keywords: [
      "custom software development company",
      "custom software development services",
      "business software development",
      "internal tools development",
      "workflow automation software",
    ],
    faqs: [
      {
        question: "When is custom software better than an off-the-shelf tool?",
        answer:
          "When your process is a genuine advantage, when licence costs scale badly, or when teams are working around a product's limits in spreadsheets.",
      },
      {
        question: "Can it connect to systems we already use?",
        answer:
          "Yes. Integration with existing accounting, CRM or operational systems is part of scoping, using their APIs or scheduled data exchange.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You get documentation and a handover session. Maintenance, support and further phases are optional and quoted separately.",
      },
    ],
  },
  "custom-printing-branding": {
    metaTitle: "Custom Printing & Corporate Merchandise Solutions | DEVGRONIX",
    metaDescription:
      "Order custom T-shirts, corporate uniforms, mugs, business cards, stickers, and marketing collateral with premium printing and Pan-India delivery by DEVGRONIX.",
    h1: "Custom Printing & Corporate Branding Solutions",
    keywords: [
      "custom t shirt printing hyderabad",
      "corporate merchandise printing india",
      "custom hoodies corporate uniforms",
      "business card and stationery printing",
      "custom packaging and stickers",
      "devgronix custom printing",
    ],
    faqs: [
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer:
          "We support flexible low MOQs for startups and small batches, as well as high-volume wholesale pricing for corporate events and bulk uniform orders.",
      },
      {
        question: "Do you deliver pan-India?",
        answer:
          "Yes! We deliver across India with tracked courier partners directly to your office, campus, or doorstep.",
      },
      {
        question: "Will I get to see a design proof before printing?",
        answer:
          "Yes, we provide digital 3D/flat mockups of your apparel and merchandise for your approval before printing starts.",
      },
      {
        question: "How do I get a custom quotation?",
        answer:
          "Message us on WhatsApp (+91 70705 19128) with your required quantity, logo artwork, and items. We share a free quotation within a few hours.",
      },
    ],
  },
  "saas-and-web-applications": {
    metaTitle: "SaaS & Web Application Development | DEVGRONIX",
    metaDescription:
      "SaaS and web application development from DEVGRONIX — multi-tenant products, dashboards, subscriptions and role-based access built to grow with your users.",
    h1: "SaaS & Web Application Development",
    keywords: [
      "SaaS development company",
      "web application development services",
      "multi-tenant SaaS development",
      "subscription product development",
      "MVP development",
    ],
    faqs: [
      {
        question: "Can you take a SaaS idea from scratch to launch?",
        answer:
          "Yes — from product definition and architecture through design, build, billing and release. We prefer launching a focused first version early.",
      },
      {
        question: "How do you handle subscriptions and billing?",
        answer:
          "We integrate an established payment provider and model plans, trials and upgrades so pricing changes don't require a rebuild.",
      },
      {
        question: "Is the architecture ready to scale?",
        answer:
          "We design data models, tenancy and caching for realistic growth and keep the stack well-supported rather than experimental.",
      },
    ],
  },
  "ai-and-automation": {
    metaTitle: "AI & Automation Services | DEVGRONIX",
    metaDescription:
      "AI automation services from DEVGRONIX — AI-assisted tools, document and data processing, chat interfaces and business automation built into your existing workflow.",
    h1: "AI & Automation Services",
    keywords: [
      "AI automation services",
      "AI development company",
      "business automation services",
      "AI integration services",
      "workflow automation",
    ],
    faqs: [
      {
        question: "Where does AI genuinely help?",
        answer:
          "Repetitive reading, writing, classifying and summarising work. We start from a task that costs your team real hours, not from the technology.",
      },
      {
        question: "Do you train custom models?",
        answer:
          "Usually not. Most business problems are solved faster and more reliably by integrating established models with your own data and clear guardrails.",
      },
      {
        question: "How do you keep results reliable?",
        answer:
          "Human review where decisions matter, evaluation against real examples, logging, and fallbacks when confidence is low.",
      },
    ],
  },
  "cloud-and-devops": {
    metaTitle: "Cloud & DevOps Services | DEVGRONIX",
    metaDescription:
      "Cloud and DevOps services from DEVGRONIX — deployment pipelines, infrastructure setup, monitoring and cost-aware cloud architecture for growing products.",
    h1: "Cloud & DevOps Services",
    keywords: [
      "cloud and DevOps services",
      "DevOps consulting services",
      "cloud infrastructure services",
      "CI CD pipeline setup",
      "cloud migration services",
    ],
    faqs: [
      {
        question: "Can you set up deployments for an existing app?",
        answer:
          "Yes. We add environments, automated pipelines, monitoring and rollback to projects we didn't originally build.",
      },
      {
        question: "Will this reduce our cloud costs?",
        answer:
          "Often, by right-sizing resources and removing idle infrastructure — but we report findings rather than promise a figure up front.",
      },
      {
        question: "Do you provide ongoing operations support?",
        answer:
          "Monitoring, alerting and maintenance can continue as a retainer, or we hand over documented infrastructure to your own team.",
      },
    ],
  },
  "data-analytics-and-dashboards": {
    metaTitle: "Data Analytics & Dashboard Development | DEVGRONIX",
    metaDescription:
      "Data analytics services and dashboard development from DEVGRONIX — reporting pipelines, KPI dashboards and data models that make business numbers trustworthy.",
    h1: "Data Analytics & Dashboards",
    keywords: [
      "data analytics services",
      "dashboard development",
      "business intelligence dashboard",
      "KPI reporting dashboard",
      "data visualization services",
    ],
    faqs: [
      {
        question: "Can you pull data from several systems?",
        answer:
          "Yes. We combine sources such as your product database, payments and marketing platforms into one consistent model before visualising anything.",
      },
      {
        question: "Who decides which metrics to show?",
        answer:
          "We do it together. Dashboards start from the decisions you need to make, so each chart answers a question someone actually asks.",
      },
      {
        question: "Can non-technical staff use it?",
        answer:
          "That's the point. Dashboards are built for the people reading them, with plain labels and definitions documented alongside.",
      },
    ],
  },
  "ui-ux-design": {
    metaTitle: "UI UX Design Agency | DEVGRONIX",
    metaDescription:
      "UI UX design services from DEVGRONIX — user flows, wireframes, interface systems and prototypes tested before development begins.",
    h1: "UI/UX Design Services",
    keywords: [
      "UI UX design agency",
      "UI UX design services",
      "UX design company",
      "product design services",
      "interface design agency",
    ],
    faqs: [
      {
        question: "Do you design before development starts?",
        answer:
          "Yes. Flows and interface systems are reviewed and agreed before production code, which is far cheaper than changing a built screen.",
      },
      {
        question: "Do you test designs with users?",
        answer:
          "Where the project allows it, we test prototypes on real tasks and adjust before build. Findings are shared in plain language.",
      },
      {
        question: "Can you redesign an existing product?",
        answer:
          "Yes. We audit the current experience, prioritise the screens causing friction and roll out a consistent system from there.",
      },
    ],
  },
  "graphic-design": {
    metaTitle: "Graphic Design Services Starting @ ₹99 | DEVGRONIX",
    metaDescription:
      "Creative graphic design services starting from ₹99. High-impact social media creatives, ad banners, posters, YouTube thumbnails, and marketing graphics by DEVGRONIX.",
    h1: "Creative Graphic Design Services",
    keywords: [
      "graphic design services",
      "social media banner design",
      "poster design company",
      "youtube thumbnail designer",
      "creative graphic designer",
      "devgronix graphic design",
    ],
    faqs: [
      {
        question: "Can you work from our existing brand?",
        answer:
          "Yes. We design inside your current guidelines, or tighten them first if the brand has drifted across channels.",
      },
      {
        question: "What files do we receive?",
        answer:
          "Editable source files plus export-ready assets for web, social and print, organised so your team can reuse them.",
      },
      {
        question: "Do you offer ongoing design support?",
        answer:
          "Yes — a monthly retainer suits teams with a steady flow of campaign, social and sales collateral.",
      },
    ],
  },
  "branding-and-logo-design": {
    metaTitle: "Branding Agency & Logo Design Company | DEVGRONIX",
    metaDescription:
      "Brand identity design from DEVGRONIX — logo design, typography, colour systems and brand guidelines that stay consistent across product, web and print.",
    h1: "Branding & Logo Design",
    keywords: [
      "branding agency",
      "logo design company",
      "brand identity design",
      "brand guidelines design",
      "rebranding services",
    ],
    faqs: [
      {
        question: "What's included in a brand identity project?",
        answer:
          "Positioning inputs, logo system, typography, colour, usage rules and application examples, delivered as guidelines your team can follow.",
      },
      {
        question: "How many logo directions do we see?",
        answer:
          "A small number of considered directions rather than dozens of variations, each with the reasoning behind it, then refinement on the chosen route.",
      },
      {
        question: "Can you rebrand without breaking what people recognise?",
        answer:
          "Yes. Where existing recognition has value we evolve rather than replace, and stage the rollout across touchpoints.",
      },
    ],
  },
  "video-editing-and-motion-graphics": {
    metaTitle: "Professional Video Editing Services for Reels & YouTube | DEVGRONIX",
    metaDescription:
      "High-retention video editing services starting from ₹399. Dynamic Instagram Reels, YouTube Shorts, podcast cuts, promo videos, and motion graphics by DEVGRONIX.",
    h1: "Professional Video Editing & Motion Graphics",
    keywords: [
      "video editing services",
      "reels video editor",
      "youtube video editing agency",
      "shorts video editing",
      "motion graphics services",
      "devgronix video editing",
    ],
    faqs: [
      {
        question: "Do you edit footage we already have?",
        answer:
          "Yes. We work with your existing footage, screen recordings and brand assets, and advise on any gaps worth filling.",
      },
      {
        question: "Can we get social versions of the same video?",
        answer:
          "Yes. Vertical and square cutdowns with captions are produced from the master edit rather than re-created from scratch.",
      },
      {
        question: "How many rounds of revisions are included?",
        answer:
          "Each package states its revision rounds, and we review at storyboard and rough-cut stages so changes land early.",
      },
    ],
  },
  "digital-marketing": {
    metaTitle: "Digital Marketing Agency | DEVGRONIX",
    metaDescription:
      "Digital marketing services from DEVGRONIX — paid campaigns, landing pages, funnels, tracking and reporting that tie spend to actual enquiries.",
    h1: "Digital Marketing Services",
    keywords: [
      "digital marketing agency",
      "digital marketing services",
      "performance marketing agency",
      "paid ads management",
      "lead generation campaigns",
    ],
    faqs: [
      {
        question: "Which channels do you recommend?",
        answer:
          "It depends on where your buyers already look. We start with a small, measurable test rather than spreading budget across everything.",
      },
      {
        question: "Is ad spend included in your pricing?",
        answer:
          "No. Our fees cover strategy, creative, setup and management; platform spend is billed by the platform directly to you.",
      },
      {
        question: "What reporting do we get?",
        answer:
          "A regular report tied to enquiries and cost per result, with the tracking set up properly before campaigns launch.",
      },
    ],
  },
  "social-media-management": {
    metaTitle: "Social Media Management & Growth Packages | DEVGRONIX",
    metaDescription:
      "Full-service social media management starting from ₹1,000/month. Content creation, post design, reels, hashtag strategy, and brand growth across Instagram and Facebook.",
    h1: "Social Media Management & Growth Services",
    keywords: [
      "social media management company",
      "social media marketing packages",
      "instagram page management",
      "monthly social media management",
      "brand growth agency",
      "devgronix social media",
    ],
    faqs: [
      {
        question: "Do you create the content as well as post it?",
        answer:
          "Yes. Copy, design and scheduling sit together, so the calendar reflects one plan rather than assorted one-off posts.",
      },
      {
        question: "Which platforms do you manage?",
        answer:
          "We focus on the platforms where your audience actually engages rather than posting the same thing everywhere.",
      },
      {
        question: "Can you handle comments and messages?",
        answer:
          "Community management is available, working from response guidelines agreed with you for tone and escalation.",
      },
    ],
  },
  "seo-and-search-optimization": {
    metaTitle: "SEO Services & Search Optimization Agency | DEVGRONIX",
    metaDescription:
      "SEO services from DEVGRONIX — technical SEO, on-page optimisation, content structure and search reporting built for sustainable organic growth.",
    h1: "SEO & Search Optimization",
    keywords: [
      "SEO services",
      "SEO agency",
      "search engine optimization services",
      "technical SEO services",
      "on-page SEO services",
    ],
    faqs: [
      {
        question: "How long before SEO shows results?",
        answer:
          "Technical fixes can be picked up within weeks, but meaningful ranking movement typically takes months and depends on competition and content.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No, and nobody credibly can. We commit to sound technical work, relevant content and clear reporting on what changes.",
      },
      {
        question: "What does the work actually involve?",
        answer:
          "Crawlability and site structure, metadata, internal linking, page speed, content depth for real search intent, and measurement in Search Console.",
      },
    ],
  },
  "content-and-creative-services": {
    metaTitle: "Content Creation Services | DEVGRONIX",
    metaDescription:
      "Content creation services from DEVGRONIX — website copy, service pages, blog and landing-page content plus supporting creative built around real search intent.",
    h1: "Content & Creative Services",
    keywords: [
      "content creation services",
      "content marketing services",
      "creative content agency",
      "website copywriting services",
      "blog content writing",
    ],
    faqs: [
      {
        question: "Do you write content or just design it?",
        answer:
          "Both. Copy, structure and supporting visuals are produced together so pages read and look like one piece of work.",
      },
      {
        question: "How do you decide what to write about?",
        answer:
          "From the questions your buyers actually search and ask during sales, mapped to the pages best placed to answer them.",
      },
      {
        question: "Can you work with international audiences?",
        answer:
          "Yes. We adjust tone, examples and terminology for the markets you sell into, including the Middle East.",
      },
    ],
  },
};

/** Falls back to service copy when a service has no SEO record yet. */
export function getServiceSeo(service: Service): ServiceSeo {
  return (
    serviceSeo[service.slug] ?? {
      metaTitle: `${service.title} | DEVGRONIX`,
      metaDescription: service.description,
      h1: service.title,
      keywords: [service.title.toLowerCase()],
      faqs: [],
    }
  );
}

/** Pricing pages reuse the service's search intent with pricing-specific copy. */
export function getServicePricingSeo(service: Service) {
  return {
    metaTitle: `${service.title} Pricing & Packages | DEVGRONIX`,
    metaDescription: `${service.title} pricing from DEVGRONIX — indicative starting points, package inclusions and billing units. Final pricing depends on project scope, requirements and complexity.`,
  };
}

/** Project metadata, derived from the project record so admin edits flow through. */
export function getProjectSeo(project: Project) {
  return {
    metaTitle: `${project.title} | DEVGRONIX`,
    metaDescription: `${project.shortDescription} An in-house concept project by DEVGRONIX in ${project.category}.`,
  };
}
