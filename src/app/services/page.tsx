import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { services } from "@/data/services";
import { ServiceDetailSection } from "@/components/services/ServiceDetailSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceAreasSection } from "@/components/service-areas/ServiceAreasSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Services — Kitchen & Bathroom Remodeling, Cabinet Installation",
  description:
    "NW Premium Design LLC offers kitchen remodeling, bathroom remodeling, cabinet installation, cabinet supply, and interior repairs in Seattle, WA. Free estimates.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services | NW Premium Design LLC",
    description:
      "Full-service remodeling and cabinet installation in Seattle. Free estimates.",
    url: `${SITE_URL}/services`,
  },
});

const imagePositions = ["left", "right", "left", "right", "left"] as const;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Services", url: `${SITE_URL}/services` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildItemListSchema(services)),
        }}
      />
      {/* Page hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Services%20Page%20Background%20Landing%20Page.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-black/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 size-80 rounded-full bg-amber-300/8 blur-3xl" />

        <div className="page-hero-container">
          <AnimatedSection className="max-w-2xl" once={false}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              What We Offer
            </p>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl" delay={0.08} once={false}>
            <h1 className="font-serif text-4xl font-semibold text-cream text-balance sm:text-5xl lg:text-6xl">
              Cabinet Installation, Remodeling & Specialty Work
            </h1>
          </AnimatedSection>
          <AnimatedSection className="max-w-xl" delay={0.16} once={false}>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Alex specializes in cabinet installation first, then builds full
              kitchen, bathroom, and interior projects around that same precise
              finish quality across the Seattle area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-cream">
        {services.map((service, i) => (
          <ServiceDetailSection
            key={service.id}
            service={service}
            imagePosition={imagePositions[i % 2]}
          />
        ))}
      </div>

      <ServiceAreasSection />
      <ContactCTA />
    </>
  );
}
