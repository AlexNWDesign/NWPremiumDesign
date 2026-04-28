import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { ServiceAreaMap } from "@/components/contact/ServiceAreaMap";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact — Get a Free Estimate",
  description:
    "Contact NW Premium Design LLC for a free kitchen or bathroom remodel estimate in Seattle, WA. Call, email, or fill out our online form. Fast response.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | NW Premium Design LLC",
    description: "Get a free remodeling estimate in Seattle. Contact us today.",
    url: `${SITE_URL}/contact`,
  },
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phone}`,
    iconClassName: "bg-[#22c55e]/14 text-[#22c55e]",
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    iconClassName: "bg-[#ea4335]/14 text-[#ea4335]",
  },
  {
    icon: MapPin,
    label: "Address",
    value: BUSINESS.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`,
    external: true,
    iconClassName: "bg-[#0a84ff]/14 text-[#0a84ff]",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Typically within 24 hours",
    href: null,
    iconClassName: "bg-[#f59e0b]/14 text-[#f59e0b]",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Contact", url: `${SITE_URL}/contact` },
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
              "url('/Contac%20me%20page%20landing%20page%20backgroudn.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-8 size-72 rounded-full bg-black/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 size-80 rounded-full bg-white/[0.05] blur-3xl" />

        <div className="page-hero-container">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              Free Estimate
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Ready to start your project? Fill out the form and Alex will get
              back to you with a free, no-obligation estimate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection
              direction="left"
              className="lg:col-span-3 h-fit rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="earthquake-card mb-8 rounded-3xl border border-white/20 bg-gradient-to-br from-[#2b2b2b] via-[#232323] to-[#181818] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/6 sm:px-7">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
                  Free Quote By Text
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Alex is usually on the jobsite
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                  For free quotes, text{" "}
                  <a
                    href="sms:+12538869342"
                    className="font-extrabold text-white underline decoration-white/40 underline-offset-4"
                  >
                    (253) 886-9342
                  </a>
                  . Fast one-day quote. Send your design and your requirements.
                </p>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-navy/55 mb-6">
                We&apos;ll review your project details and reach out to schedule
                a free in-home estimate.
              </p>
              <ContactForm />
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
              {/* Contact info */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/50 mb-4">
                  Get in Touch
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, external, iconClassName }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full ${iconClassName}`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs text-navy/50 mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-navy hover:text-navy/70 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-navy">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social links */}
              <SocialLinks />
            </AnimatedSection>
          </div>

          {/* Map — full width below */}
          <AnimatedSection className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/50 mb-3">
              Service Area
            </h3>
            <ServiceAreaMap />
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-navy/50">
              Alex leads demolition, IKEA cabinet assembly, European cabinet
              installation, and kitchen cabinet installation in Seattle,
              Bellevue, Kirkland, Newcastle, Renton, Tacoma, Burien, Medina,
              Sammamish, Federal Way, and Auburn, coordinating qualified
              outside trades when specialized work is part of the project.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
