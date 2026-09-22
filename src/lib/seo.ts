/**
 * Central SEO helpers.
 *
 * One source of truth for the site name, production origin and the default
 * share image, so every route emits consistent, self-referencing metadata.
 */

export const SITE = "DEVGRONIX";

/**
 * Production origin used for canonical URLs, og:url, JSON-LD and the sitemap.
 * Change this single constant when a custom domain is connected.
 */
export const SITE_URL = "https://devgronixtech.lovable.app";

/** Branded default share image (1200x630). */
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const LOGO_URL = `${SITE_URL}/favicon.png`;

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export interface SeoInput {
  /** Full <title>. Written per page, already including "| DEVGRONIX" when wanted. */
  title: string;
  description: string;
  /** Absolute path of this page, e.g. "/services/web-development". */
  path: string;
  /** og:type — "website" for hubs, "article" for project pages. */
  type?: string;
  image?: string;
  noindex?: boolean;
}

/** Builds the full head metadata (meta + canonical link) for an indexable page. */
export function seoHead({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
  noindex = false,
}: SeoInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Metadata for a "record not found" state — never indexable. */
export function notFoundHead(title: string) {
  return {
    meta: [
      { title: `${title} | ${SITE}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  };
}

/* ---------------------------------- JSON-LD --------------------------------- */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The DEVGRONIX organization entity. Only verified information from the site is
 * included — no ratings, employee counts, addresses or social profiles.
 */
export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE,
  alternateName: "Devgronix",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: OG_IMAGE,
  slogan: "Create. Develop. Grow.",
  description:
    "DEVGRONIX is a digital technology and software company building websites, web applications, mobile apps, custom software, AI automation, cloud solutions, design and digital growth services for businesses in India and international markets.",
  areaServed: ["India", "Saudi Arabia", "Worldwide"],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE,
  description:
    "Technology, design and digital growth services from DEVGRONIX — web and app development, custom software, AI automation, cloud, design, branding, marketing and SEO.",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

/** Wraps one or more nodes in a single @graph document. */
export function jsonLdScript(nodes: Record<string, unknown>[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: name,
    category,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: ["India", "Saudi Arabia", "Worldwide"],
  };
}

export function creativeWorkSchema({
  name,
  description,
  path,
  genre,
  keywords,
}: {
  name: string;
  description: string;
  path: string;
  genre: string;
  keywords: string[];
}) {
  return {
    "@type": "CreativeWork",
    name,
    description,
    genre,
    keywords: keywords.join(", "),
    url: absoluteUrl(path),
    creator: { "@id": ORGANIZATION_ID },
    // Concept work: explicitly not presented as a commissioned client project.
    creditText: "In-house concept project by DEVGRONIX",
  };
}

/**
 * Legacy helper kept so nothing breaks while routes migrate to `seoHead`.
 * Prefer `seoHead`, which also emits canonical, og:url and og:image.
 */
export function pageMeta({
  title,
  description,
  withSite = true,
}: {
  title: string;
  description: string;
  withSite?: boolean;
}) {
  const fullTitle = withSite ? `${title} | ${SITE}` : title;
  return seoHead({ title: fullTitle, description, path: "/" }).meta;
}
