import { serviceAreaPages } from "@/data/serviceAreas";
import { services } from "@/data/services";

const CORE_SITEMAP_ENTRIES = [
  { loc: "https://nwpremiumdesign.com/", priority: "1.0" },
  { loc: "https://nwpremiumdesign.com/about", priority: "0.8" },
  { loc: "https://nwpremiumdesign.com/services", priority: "0.9" },
  { loc: "https://nwpremiumdesign.com/gallery", priority: "0.8" },
  { loc: "https://nwpremiumdesign.com/contact", priority: "0.8" },
  { loc: "https://nwpremiumdesign.com/service-areas", priority: "0.9" },
] as const;

const SITEMAP_ENTRIES = [
  ...CORE_SITEMAP_ENTRIES,
  ...services.map((service) => ({
    loc: `https://nwpremiumdesign.com/services/${service.slug}`,
    priority: "0.8",
  })),
  ...serviceAreaPages.map((page) => ({
    loc: `https://nwpremiumdesign.com${page.href}`,
    priority: "0.9",
  })),
] as const;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_ENTRIES.map(
  (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>2026-04-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
).join("\n\n")}
</urlset>
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(SITEMAP_XML, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
