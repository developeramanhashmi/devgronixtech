import type { HomepageContent } from "./types";

/**
 * Centralised homepage content. A future admin panel writes to this shape.
 */
export const homepage: HomepageContent = {
  hero: {
    eyebrow: "Create. Develop. Grow.",
    title: "Digital products built to",
    highlight: "create, develop and grow.",
    description:
      "DEVGRONIX designs and builds websites, software, mobile apps and AI-assisted tools for businesses that need technology to carry real weight.",
    primaryCta: { label: "Get a Quote", to: "/contact" },
    secondaryCta: { label: "Explore Our Work", to: "/works" },
  },
  strip: ["Web", "Software", "Mobile", "UI/UX", "AI", "Cloud", "Digital Solutions"],
  why: {
    title: "Why DEVGRONIX",
    description:
      "We work like a product team, not a vendor. That means fewer surprises, clearer decisions and software your team can live with after launch.",
    points: [
      { title: "Business-first thinking", body: "We start with the commercial outcome and work backwards to the build." },
      { title: "Modern technology", body: "Current, well-supported tools chosen for longevity over novelty." },
      { title: "User-centered design", body: "Interfaces shaped by real tasks, tested before they are built." },
      { title: "Scalable solutions", body: "Architecture and data models that hold up as usage grows." },
      { title: "Transparent communication", body: "Weekly progress, visible scope, and direct access to the people building." },
      { title: "Long-term support", body: "Documentation, handover and ongoing maintenance when you want it." },
    ],
  },
  process: [
    { number: "01", title: "Discover", body: "Goals, constraints, users and the current process — written down and agreed." },
    { number: "02", title: "Plan", body: "Scope, architecture, timeline and phases, with the trade-offs made explicit." },
    { number: "03", title: "Design", body: "Flows, then interface systems, reviewed before a line of production code." },
    { number: "04", title: "Develop", body: "Built in short cycles you can see, with testing and review at each step." },
    { number: "05", title: "Launch", body: "Environments, monitoring, analytics and a rehearsed release." },
    { number: "06", title: "Grow", body: "Measure, iterate and extend based on what users actually do." },
  ],
  technology: [
    { group: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Python", "REST APIs"] },
    { group: "Database", items: ["PostgreSQL", "Supabase"] },
    { group: "AI", items: ["AI APIs", "Automation", "Machine Learning"] },
    { group: "Cloud", items: ["AWS", "Vercel"] },
    { group: "Design", items: ["Figma"] },
  ],
  cta: {
    title: "Have a project in mind?",
    description: "Let's turn your idea into something people can use, love and grow with.",
    primaryCta: { label: "Start a Project", to: "/contact" },
    secondaryCta: { label: "Get a Quote", to: "/pricing" },
  },
};
