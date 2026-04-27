import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { SERVICE_AREA_LINKS, serviceAreaHub } from "@/data/serviceAreas";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: serviceAreaHub.titleTag,
  description: serviceAreaHub.metaDescription,
  keywords: [
    "cabinet installation service areas",
    "cabinet installer Puget Sound",
    "cabinet installation Seattle area",
    "cabinet installation Eastside WA",
    "cabinet installation King County",
    "cabinet installer near Seattle",
    "cabinet installer near Bellevue",
  ],
  alternates: { canonical: `${SITE_URL}${serviceAreaHub.href}` },
  openGraph: {
    title: serviceAreaHub.titleTag,
    description: serviceAreaHub.metaDescription,
    url: `${SITE_URL}${serviceAreaHub.href}`,
    images: [
      {
        url: "/images/services/cabinet-installation.jpg",
        alt: "Cabinet installation service areas for NW Premium Design LLC",
      },
    ],
  },
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildLocalBusinessSchema(),
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Service Areas", url: `${SITE_URL}/service-areas` },
            ]),
          ]),
        }}
      />

      <section className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/cabinet-installation.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/74" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="container-site relative">
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-cream/60">
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-cream/80">Service Areas</span>
          </nav>
          <AnimatedSection className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              Puget Sound Coverage
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream text-balance sm:text-5xl lg:text-6xl">
              {serviceAreaHub.heading}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="max-w-3xl">
            {serviceAreaHub.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full gap-2 bg-cream text-navy hover:bg-cream-dark sm:w-auto"
              )}
            >
              <Phone className="size-4" />
              Call Alex
            </a>
            <a
              href={`sms:${BUSINESS.phone}`}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full gap-2 border-cream/35 bg-transparent text-cream hover:bg-cream/10 hover:text-cream sm:w-auto"
              )}
            >
              Text for Estimate
              <ArrowRight className="size-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-site space-y-10">
          <AnimatedSection>
            <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.05)] sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                Primary Cabinet Installation Areas
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {SERVICE_AREA_LINKS.slice(0, 4).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[24px] border border-navy/10 bg-cream-dark p-5 transition-all hover:-translate-y-1 hover:border-navy/15 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-navy/6">
                        <MapPin className="size-4 text-cream" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-cream">
                        {link.shortLabel}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-cream/70">
                      Cabinet installation, kitchen cabinet installation, IKEA kitchen
                      installation, and finish-focused cabinet replacement work.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cream">
                      View area page
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatedSection>
              <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.05)] sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                  Other Areas We Serve
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {serviceAreaHub.otherAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-cream-dark px-4 py-2 text-sm font-medium text-cream/75"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-[28px] bg-navy p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                  Cabinet Installation Services Available Across the Region
                </h2>
                <div className="mt-5 grid gap-3">
                  {serviceAreaHub.serviceLines.map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl border border-white/12 bg-white/7 px-4 py-3 text-sm text-cream/80"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="rounded-[28px] bg-gradient-to-br from-[#111827] via-[#1a2744] to-[#2f3c4f] px-6 py-10 text-center sm:px-10">
              <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
                Not Sure If We Serve Your Area?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-cream/75 sm:text-lg">
                Text Alex your city, photos, plans, or measurements. If your
                project is in Seattle, the Eastside, South King County, or nearby
                Puget Sound communities, NW Premium Design LLC can usually confirm
                fit quickly.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`sms:${BUSINESS.phone}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full gap-2 bg-cream text-navy hover:bg-cream-dark sm:w-auto"
                  )}
                >
                  Text for Estimate
                </a>
                <Link
                  href="/gallery"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "w-full gap-2 border-cream/28 bg-transparent text-cream hover:bg-cream/10 hover:text-cream sm:w-auto"
                  )}
                >
                  View Gallery
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
