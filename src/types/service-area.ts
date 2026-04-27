import type { FAQ } from "@/types/service";

export interface ServiceAreaImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceAreaSection {
  title: string;
  paragraphs: string[];
}

export interface ServiceAreaPageData {
  slug: string;
  href: string;
  city: string;
  state: string;
  titleTag: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  heroImageSrc: string;
  heroImageAlt: string;
  nearbyAreasTitle: string;
  nearbyAreas: string[];
  sections: ServiceAreaSection[];
  whyChoose: string[];
  recentWorkTitle: string;
  recentWorkBody: string;
  recentWorkImages: ServiceAreaImage[];
  faqs: FAQ[];
  keywords: string[];
}

export interface ServiceAreaHubData {
  href: string;
  titleTag: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  primaryAreas: string[];
  otherAreas: string[];
  serviceLines: string[];
}
