import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  Star,
  MessageSquare,
} from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { SERVICE_AREA_LINKS } from "@/data/serviceAreas";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: BUSINESS.social.instagram,
    icon: Instagram,
  },
  {
    label: "Google",
    href: BUSINESS.social.google,
    icon: Star,
  },
  {
    label: "Yelp",
    href: BUSINESS.social.yelp,
    icon: MessageSquare,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-12">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-[84px] w-[140px] shrink-0 overflow-hidden rounded-2xl bg-white/[0.06] p-2 ring-1 ring-white/10">
                <Image
                  src="/New%20Logo1.png"
                  alt="NW Premium Design LLC logo"
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs mb-5">
              Seattle&apos;s trusted cabinet installer and kitchen remodeler.
              Quality craftsmanship, honest pricing, and results you&apos;ll
              love.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
                  >
                    <Icon className="size-4" />
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2 break-all transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0 mt-0.5" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-cream"
                >
                  <MapPin className="size-4 shrink-0 mt-0.5" />
                  <span>{BUSINESS.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-cream/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} NW Premium Design LLC. All rights
            reserved.
          </p>
          <p>Seattle, Bellevue, Kirkland, Clyde Hill & Greater Puget Sound</p>
        </div>
      </div>
    </footer>
  );
}
