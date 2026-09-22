import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";

import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/seo";
import { publishedServices } from "@/lib/content/services";
import { publishedProjects } from "@/lib/content/projects";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        // Dynamic content comes from the same published collections the pages use,
        // so new services and projects appear without editing the sitemap.
        const dynamic: { routeId: string; to: string; slugs: string[] }[] = [
          {
            routeId: "/services/$slug",
            to: "/services/$slug",
            slugs: publishedServices.map((s) => s.slug),
          },
          {
            routeId: "/pricing/$slug",
            to: "/pricing/$slug",
            slugs: publishedServices.map((s) => s.slug),
          },
          {
            routeId: "/works/$slug",
            to: "/works/$slug",
            slugs: publishedProjects.map((p) => p.slug),
          },
        ];

        for (const group of dynamic) {
          const route = router.routesById[group.routeId as keyof typeof router.routesById];
          if (!route) continue;
          for (const slug of group.slugs) {
            const location = router.buildLocation({
              to: group.to,
              params: { slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, group.routeId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }

        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
