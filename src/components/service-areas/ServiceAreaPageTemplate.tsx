import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { SERVICE_AREA_LINKS } from "@/data/serviceAreas";
import type { ServiceAreaPageData } from "@/types/service-area";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const SERVICE_LINE_ITEMS = [
  {
    title: "Cabinet Installation",
    imageSrc: "/images/services/cabinet-installation.jpg",
    imageAlt: "Cabinet installation by NW Premium Design",
  },
  {
    title: "Kitchen Cabinet Installation",
    imageSrc: "/images/yelp/yelp-60.jpg",
    imageAlt: "Kitchen cabinet installation by NW Premium Design",
  },
  {
    title: "IKEA Kitchen Installation",
    imageSrc: "/images/yelp/yelp-48.jpg",
    imageAlt: "IKEA kitchen installation by NW Premium Design",
  },
  {
    title: "European Frameless Cabinet Installation",
    imageSrc: "/images/yelp/yelp-120.jpg",
    imageAlt: "European frameless cabinet installation by NW Premium Design",
  },
  {
    title: "Custom Cabinet Installation",
    imageSrc: "/images/yelp/yelp-95.jpg",
    imageAlt: "Custom cabinet installation by NW Premium Design",
  },
  {
    title: "Cabinet Replacement",
    imageSrc: "/images/yelp/yelp-121.jpg",
    imageAlt: "Cabinet replacement project by NW Premium Design",
  },
  {
    title: "Built-In Cabinets",
    imageSrc: "/images/yelp/yelp-141.jpg",
    imageAlt: "Built-in cabinet installation by NW Premium Design",
  },
  {
    title: "Bathroom Vanity Cabinet Installation",
    imageSrc: "/images/services/bathroom-remodel-4440.jpg",
    imageAlt: "Bathroom vanity cabinet installation by NW Premium Design",
  },
  {
    title: "Kitchen Remodeling Finish Work",
    imageSrc: "/images/services/kitchen-remodel.jpg",
    imageAlt: "Kitchen remodeling finish work by NW Premium Design",
  },
] as const;

interface ServiceAreaPageTemplateProps {
  page: ServiceAreaPageData;
}

export function ServiceAreaPageTemplate({
  page,
}: ServiceAreaPageTemplateProps) {
  const relatedLinks = SERVICE_AREA_LINKS.filter((link) => link.href !== page.href);

  return (
    <>
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[460px] sm:h-[560px]">
          <Image
            src={page.heroImageSrc}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/88 via-navy/72 to-navy/62" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-site pb-12">
              <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-cream/60">
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
                <ChevronRight className="size-3" />
                <Link href="/service-areas" className="hover:text-cream transition-colors">
                  Service Areas
                </Link>
                <ChevronRight className="size-3" />
                <span className="text-cream/80">{page.city}</span>
              </nav>

              <AnimatedSection className="max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
                  Local Cabinet Installation
                </p>
                <h1 className="font-serif text-4xl font-semibold text-cream text-balance sm:text-5xl lg:text-6xl">
                  {page.heading}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.08} className="max-w-3xl">
                {page.intro.map((paragraph) => (
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
                <Link
                  href="/gallery"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "w-full gap-2 border-white/18 bg-white/8 text-cream hover:bg-white/12 hover:text-cream sm:w-auto"
                  )}
                >
                  View Gallery
                  <ArrowRight className="size-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <div className="space-y-10">
              <AnimatedSection>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {SERVICE_LINE_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-navy shadow-[0_10px_26px_rgba(0,0,0,0.2)]"
                    >
                      <div className="relative h-44">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/78" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="font-serif text-xl font-semibold leading-tight text-cream">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {page.sections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.06}>
                  <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.05)] sm:p-8">
                    <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-relaxed text-cream/70"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection>
                <div className="rounded-[28px] bg-navy p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                    {page.nearbyAreasTitle}
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {page.nearbyAreas.map((area) => (
                      <div
                        key={area}
                        className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-cream/80"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.05)] sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                    Why Homeowners Choose NW Premium Design
                  </h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {page.whyChoose.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-navy/8 bg-cream-dark px-4 py-4"
                      >
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-cream" />
                        <p className="text-sm leading-relaxed text-cream/75">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.05)] sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                    {page.recentWorkTitle}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/70">
                    {page.recentWorkBody}
                  </p>
                  <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    {page.recentWorkImages.map((image) => (
                      <div
                        key={image.src}
                        className="overflow-hidden rounded-[24px] border border-navy/10 bg-cream-dark"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-sm leading-relaxed text-cream/70">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="rounded-[28px] bg-gradient-to-br from-[#111827] via-[#1a2744] to-[#2f3c4f] p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-5 grid gap-4">
                    {page.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-2xl border border-white/12 bg-white/7 px-5 py-4"
                      >
                        <h3 className="text-base font-semibold text-cream">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-cream/75">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right">
              <div className="space-y-5 lg:sticky lg:top-24">
                <div className="rounded-[28px] bg-navy p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-cream/55">
                    Fast Estimate
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-cream">
                    Text Alex your plans, photos, or measurements
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    The fastest way to price cabinet installation in {page.city} is
                    to text your project details directly to Alex.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={`sms:${BUSINESS.phone}`}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full justify-center bg-cream text-navy hover:bg-cream-dark"
                      )}
                    >
                      Text for Estimate
                    </a>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className={cn(
                        buttonVariants({ size: "lg", variant: "outline" }),
                        "w-full justify-center border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                      )}
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                    <Link
                      href="/gallery"
                      className={cn(
                        buttonVariants({ size: "lg", variant: "outline" }),
                        "w-full justify-center border-white/18 bg-white/8 text-cream hover:bg-white/12 hover:text-cream"
                      )}
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_18px_rgba(15,23,42,0.05)]">
                  <h2 className="font-serif text-xl font-semibold text-cream">
                    Explore More Service Areas
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between rounded-2xl border border-navy/8 bg-cream-dark px-4 py-3 text-sm font-medium text-cream/80 transition-colors hover:border-navy/15 hover:bg-white"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="size-4" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_2px_18px_rgba(15,23,42,0.05)]">
                  <h2 className="font-serif text-xl font-semibold text-cream">
                    Serving {page.city} and Nearby Neighborhoods
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {page.nearbyAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-2 rounded-full bg-cream-dark px-3 py-2 text-xs font-medium text-cream/75"
                      >
                        <MapPin className="size-3" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-site">
          <AnimatedSection className="rounded-[32px] border border-white/10 bg-white/6 px-6 py-10 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cream/55">
              Next Step
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream text-balance sm:text-4xl">
              Ready to talk through your {page.city} cabinet project?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Text your cabinet plans, photos, measurements, or project details
              for a fast estimate. Alex can review your scope and let you know
              the best next step for cabinet installation, cabinet replacement,
              built-ins, or IKEA kitchen installation in {page.city}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  "w-full gap-2 border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream sm:w-auto"
                )}
              >
                Text for Estimate
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/gallery"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full gap-2 border-white/18 bg-white/8 text-cream hover:bg-white/12 hover:text-cream sm:w-auto"
                )}
              >
                View Gallery
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
