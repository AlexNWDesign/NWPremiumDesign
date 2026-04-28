import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery — Kitchen & Cabinet Project Photos",
  description:
    "Browse NW Premium Design LLC's project gallery. See our completed kitchen remodels, bathroom renovations, and cabinet installations in Seattle, WA.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery | NW Premium Design LLC",
    description: "See our completed kitchen and cabinet projects in Seattle.",
    url: `${SITE_URL}/gallery`,
  },
});

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Gallery", url: `${SITE_URL}/gallery` },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Gallery%20Page%20Background%20landing%20page.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-black/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 size-80 rounded-full bg-white/[0.05] blur-3xl" />

        <div className="page-hero-container">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              Our Work
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Project Gallery
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Every project is a reflection of our craftsmanship. Browse our
              portfolio of kitchen remodels, bathroom renovations, and cabinet
              installations across the Seattle area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
