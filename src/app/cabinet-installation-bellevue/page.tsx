import type { Metadata } from "next";
import { serviceAreaPages } from "@/data/serviceAreas";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceAreaBusinessSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ServiceAreaPageTemplate } from "@/components/service-areas/ServiceAreaPageTemplate";

const page = serviceAreaPages.find((entry) => entry.slug === "cabinet-installation-bellevue")!;

export const metadata: Metadata = buildPageMetadata({
  title: page.titleTag,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: `${SITE_URL}${page.href}` },
  openGraph: {
    title: page.titleTag,
    description: page.metaDescription,
    url: `${SITE_URL}${page.href}`,
    images: [{ url: page.heroImageSrc, alt: page.heroImageAlt }],
  },
});

export default function CabinetInstallationBellevuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildServiceAreaBusinessSchema(page),
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Service Areas", url: `${SITE_URL}/service-areas` },
              { name: "Bellevue", url: `${SITE_URL}${page.href}` },
            ]),
            buildFAQSchema(page.faqs),
          ]),
        }}
      />
      <ServiceAreaPageTemplate page={page} />
    </>
  );
}
