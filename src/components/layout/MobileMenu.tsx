"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isServiceAreaPath =
    pathname === "/service-areas" || pathname.startsWith("/cabinet-installation-");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 border-white/10 bg-black px-0 text-white">
        <SheetHeader className="border-b border-white/10 px-6 pb-4">
          <SheetTitle className="text-left font-serif text-lg text-white">
            NW Premium Design
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-4 py-6 gap-1">
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
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "border border-white/20 bg-white/14 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 px-6 pt-6">
          <a
            href={`tel:${BUSINESS.phone}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full gap-2 bg-white text-black hover:bg-white/90"
            )}
          >
            <Phone className="size-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-3 text-center text-xs text-white/50">
            Free estimates · No obligation
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
