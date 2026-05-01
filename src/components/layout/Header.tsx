"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { buttonVariants } from "@/components/ui/button";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const isServiceAreaPath =
    pathname === "/service-areas" || pathname.startsWith("/cabinet-installation-");

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 shadow-sm backdrop-blur-md"
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative h-16 w-[108px] overflow-hidden rounded-2xl bg-white/[0.06] p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)] ring-1 ring-white/16 sm:h-[72px] sm:w-[124px]">
            <Image
              src={BUSINESS.logoPath}
              alt="NW Premium Design LLC logo"
              fill
              sizes="(max-width: 640px) 108px, 124px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/service-areas"
                  ? isServiceAreaPath
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                    ? "border border-white/25 bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "hidden gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black sm:flex"
            )}
          >
            <Phone className="size-3.5" />
            Text for Estimate
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
