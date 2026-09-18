const SITE = "DEVGRONIX";

/** Builds a consistent meta set for any public page. */
export function pageMeta({
  title,
  description,
  withSite = true,
}: {
  title: string;
  description: string;
  withSite?: boolean;
}) {
  const fullTitle = withSite ? `${title} — ${SITE}` : title;
  return [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
}
