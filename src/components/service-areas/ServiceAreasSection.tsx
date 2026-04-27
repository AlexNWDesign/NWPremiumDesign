import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREA_LINKS } from "@/data/serviceAreas";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ServiceAreasSectionProps {
  light?: boolean;
}

export function ServiceAreasSection({
  light = false,
}: ServiceAreasSectionProps) {
  return (
    <section className={light ? "section-padding bg-navy" : "section-padding bg-cream-dark"}>
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Where We Work"
            title="Cabinet Installation Service Areas"
            subtitle="Explore the cabinet installation pages built for Seattle, Bellevue, Kirkland, Clyde Hill, and the broader Puget Sound service area."
            light={light}
          />
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {SERVICE_AREA_LINKS.map((area, index) => (
            <AnimatedSection
              key={area.href}
              delay={0.06 + index * 0.06}
              variant="image"
            >
              <Link
                href={area.href}
                className={`group flex h-full flex-col rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 ${
                  light
                    ? "border-white/12 bg-white/6 text-cream hover:border-white/22 hover:bg-white/10"
                    : "border-navy/10 bg-white text-cream shadow-[0_2px_18px_rgba(15,23,42,0.06)] hover:border-navy/15 hover:bg-cream-dark hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-full ${light ? "bg-white/10" : "bg-navy/6"}`}>
                    <MapPin className={`size-4 ${light ? "text-cream" : "text-cream"}`} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold">
                    {area.shortLabel}
                  </h3>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${light ? "text-cream/70" : "text-cream/70"}`}>
                  {area.label === "Other Service Areas"
                    ? "View the broader service area hub for Seattle, the Eastside, South King County, and the greater Puget Sound region."
                    : `See cabinet installation details, local neighborhoods served, and project-specific FAQs for ${area.shortLabel}.`}
                </p>
                <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${light ? "text-cream" : "text-cream"}`}>
                  Explore area page
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
