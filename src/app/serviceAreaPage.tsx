import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceAreaBySlug } from "@/data/serviceAreas";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceAreaBusinessSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ServiceAreaPageTemplate } from "@/components/service-areas/ServiceAreaPageTemplate";

export function buildServiceAreaMetadata(slug: string): Metadata {
  const page = getServiceAreaBySlug(slug);
  if (!page) {
    return {};
  }

  return buildPageMetadata({
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
}

export function renderServiceAreaPage(slug: string) {
  const page = getServiceAreaBySlug(slug);

  if (!page) {
    notFound();
  }

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
              { name: page.city, url: `${SITE_URL}${page.href}` },
            ]),
            buildFAQSchema(page.faqs),
          ]),
        }}
      />
      <ServiceAreaPageTemplate page={page} />
    </>
  );
}
