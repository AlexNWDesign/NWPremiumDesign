import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Star, Award, Users, Hammer } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StarRating } from "@/components/shared/StarRating";

export const metadata: Metadata = buildPageMetadata({
  title: "About — Meet Alex, Seattle Cabinet Installer",
  description:
    "Learn about NW Premium Design LLC and owner Alex — Seattle's trusted cabinet installer and kitchen remodeler. Hands-on craftsmanship, honest pricing.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About | NW Premium Design LLC",
    url: `${SITE_URL}/about`,
  },
});

const values = [
  {
    icon: Hammer,
    title: "Hands-On Craftsmanship",
    description:
      "Alex stays hands-on and accountable from estimate to finish, coordinating qualified outside trades when plumbing, electrical, or specialty work is needed.",
  },
  {
    icon: Star,
    title: "5-Star Quality",
    description:
      "A 5.0 Google rating reflects the care we put into every install. We don't leave until the job is right.",
  },
  {
    icon: Users,
    title: "Full-Service Solution",
    description:
      "We can source, supply, and install your cabinets — or just install what you've already purchased. However you need us, we adapt.",
  },
  {
    icon: Award,
    title: "Honest Pricing",
    description:
      "Free estimates, clear quotes, no hidden fees. We believe in straightforward pricing and no surprises.",
  },
];

const reasons = [
  "Expert IKEA, European & custom cabinet installation",
  "Cabinet supply and purchasing service available",
  "Kitchen and bathroom remodeling",
  "Interior repairs and modifications",
  "Free in-home estimates",
  "Serving Seattle and greater Puget Sound",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "About", url: `${SITE_URL}/about` },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <Image
          src="/images/hero/hero-kitchen.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-32"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/52" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-black/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 size-80 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="page-hero-container z-10">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Text — 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-cream/50">
                Meet the Owner
              </p>
              <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
                Built by Hand.
                <br />
                <span className="text-cream/70">Backed by Trust.</span>
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-cream/65 sm:text-lg">
                Alex leads your project from the first estimate to final
                installation, bringing in qualified outside help when the work
                requires specialized trades.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
                >
                  Get a Free Estimate
                  <ArrowRight className="size-4" />
                </Link>
                <div className="flex items-center gap-2">
                  <StarRating rating={5} />
                  <span className="text-sm font-medium text-cream/70">5.0 Google</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Photo — 2 cols */}
            <AnimatedSection direction="right" className="lg:col-span-2 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px]">
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/about/alex-portrait.jpg"
                    alt="Alex, owner of NW Premium Design LLC"
                    width={590}
                    height={723}
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Name badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-navy whitespace-nowrap">
                    Alex — Owner &amp; Craftsman
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left" className="space-y-5">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                Seattle&apos;s Trusted Local Craftsman
              </h2>
              <p className="text-base leading-relaxed text-navy/70">
                NW Premium Design LLC is a Seattle-based remodeling company
                built on a simple idea: great craftsmanship, honest pricing,
                and personal attention. Owner and operator Alex stays directly
                involved from the first estimate to the final installation,
                coordinating qualified outside trades when plumbing,
                electrical, or other specialty work is needed.
              </p>
              <p className="text-base leading-relaxed text-navy/70">
                With deep expertise in IKEA kitchen systems, European frameless
                cabinets, and custom cabinetry, Alex brings a level of
                technical skill that makes a visible difference. Whether
                you&apos;re planning a full kitchen remodel or need a single
                cabinet replaced, the same care goes into every job.
              </p>
              <p className="text-base leading-relaxed text-navy/70">
                We also offer a unique cabinet supply service — Alex can source,
                purchase, and coordinate delivery of your cabinets, so you
                don&apos;t have to navigate the supply chain alone. It&apos;s a
                one-stop solution for your remodeling project.
              </p>

              {/* Google rating */}
              <div className="inline-flex items-center gap-3 rounded-xl bg-cream-dark px-5 py-3">
                <StarRating rating={5} />
                <span className="text-sm font-semibold text-navy">5.0 on Google</span>
                <a
                  href={BUSINESS.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy/50 underline hover:text-navy transition-colors"
                >
                  See reviews
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-navy">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="size-5 shrink-0 text-navy mt-0.5" />
                    <span className="text-sm text-navy/80">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
                >
                  Get a Free Estimate
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Values"
              title="What Sets Us Apart"
              subtitle="We're not just installing cabinets — we're building trust with every project."
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm h-full">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy mb-4">
                      <Icon className="size-5 text-cream" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-navy/65">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
