import { BUSINESS, SITE_URL, SERVICE_AREAS } from "@/lib/constants";
import type { Service, FAQ } from "@/types/service";
import type { ServiceAreaPageData } from "@/types/service-area";
import type { Review } from "@/data/reviews";

const SCHEMA_AREA_SERVED = [
  "Seattle WA",
  "Bellevue WA",
  "Kirkland WA",
  "Clyde Hill WA",
  "Kent WA",
  "Renton WA",
  "Auburn WA",
  "Federal Way WA",
  "Tacoma WA",
  "Sammamish WA",
  "Medina WA",
  "Mercer Island WA",
  "Redmond WA",
  "Issaquah WA",
] as const;

const SCHEMA_OFFERS = [
  "Cabinet Installation",
  "IKEA Kitchen Installation",
  "Custom Cabinet Installation",
  "Kitchen Cabinet Replacement",
] as const;

function buildHomeConstructionBusinessSchema({
  description,
  areaServed,
}: {
  description: string;
  areaServed: readonly string[];
}) {
  const sameAs = Object.values(BUSINESS.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    logo: `${SITE_URL}${BUSINESS.logoPath}`,
    image: `${SITE_URL}${BUSINESS.primaryImagePath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    sameAs,
    areaServed,
    description,
    makesOffer: SCHEMA_OFFERS.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return buildHomeConstructionBusinessSchema({
    description:
      "NW Premium Design LLC provides cabinet installation, IKEA kitchen installation, European frameless cabinet installation, custom cabinetry, cabinet replacement, built-ins, bathroom vanities, and kitchen remodel finish work across Seattle, Bellevue, Kirkland, Clyde Hill, and the greater Puget Sound area.",
    areaServed: SCHEMA_AREA_SERVED,
  });
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City" as const,
      name: city,
      containedInPlace: {
        "@type": "State" as const,
        name: "Washington",
      },
    })),
    url: `${SITE_URL}/services/${service.slug}`,
    name: service.title,
    description: service.description[0],
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildReviewSchema(reviews: Review[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    datePublished: new Date(review.date).toISOString().split("T")[0],
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Yelp",
    },
  }));
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}

export function buildItemListSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
    })),
  };
}

export function buildServiceAreaBusinessSchema(page: ServiceAreaPageData) {
  return buildHomeConstructionBusinessSchema({
    description: page.metaDescription,
    areaServed: [`${page.city} ${page.state}`, ...SCHEMA_AREA_SERVED],
  });
}

export function buildServiceAreaWebPageSchema(page: ServiceAreaPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${page.href}/#webpage`,
    url: `${SITE_URL}${page.href}`,
    name: `Cabinet Installation ${page.city} ${page.state} | ${BUSINESS.name}`,
    description: page.metaDescription,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${page.heroImageSrc}`,
    },
    inLanguage: "en-US",
  };
}
