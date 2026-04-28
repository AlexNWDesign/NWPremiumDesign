import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "NW Premium Design LLC",
  title: {
    default:
      "NW Premium Design LLC | Cabinet Installer & Kitchen Remodeler Seattle",
    template: "%s | NW Premium Design LLC",
  },
  description:
    "NW Premium Design LLC provides kitchen cabinet installation, IKEA cabinet assembly, European cabinet installation, demolition, and kitchen remodeling in Seattle, Bellevue, Kirkland, Newcastle, Renton, Tacoma, Burien, Sammamish, Federal Way, Auburn, and the greater Puget Sound area.",
  keywords: [
    "cabinet installer Seattle",
    "kitchen cabinet installation Seattle",
    "kitchen cabinet installer Seattle",
    "kitchen cabinet installation Bellevue",
    "kitchen cabinet installation Kirkland",
    "kitchen cabinet installation Renton",
    "kitchen cabinet installation Tacoma",
    "kitchen cabinet installation Burien",
    "kitchen cabinet installation Federal Way",
    "kitchen cabinet installation Auburn",
    "kitchen remodeler Seattle",
    "IKEA cabinet installation Seattle",
    "IKEA cabinet assembly Seattle",
    "IKEA kitchen cabinet installer Seattle",
    "European cabinet installation Seattle",
    "European cabinet installer Seattle",
    "demolition contractor Seattle",
    "kitchen demolition Seattle",
    "kitchen remodel Seattle WA",
    "bathroom remodel Seattle",
    "cabinet installer near me",
    "kitchen remodeler near me",
    "NW Premium Design",
    "kitchen renovation Seattle",
    "cabinet supply Seattle",
    "remodeling contractor Seattle",
    "cabinet installer Bellevue",
    "kitchen remodel Bellevue WA",
    "cabinet installer Tacoma",
    "kitchen remodel Tacoma",
    "cabinet installer Kirkland",
    "kitchen remodel Redmond WA",
    "cabinet installer Renton",
    "kitchen remodel Auburn WA",
    "cabinet installer Kent WA",
    "IKEA cabinet installer Puget Sound",
    "kitchen remodel Federal Way",
    "bathroom remodel Bellevue",
    "cabinet installation Sammamish",
    "kitchen renovation Issaquah",
    "remodeling contractor Puget Sound",
    "kitchen cabinet installer greater Seattle area",
    "IKEA cabinet installer Bellevue",
    "European cabinet installation Bellevue",
    "kitchen demolition Bellevue",
  ],
  authors: [{ name: "NW Premium Design LLC" }],
  creator: "NW Premium Design LLC",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NW Premium Design LLC",
    title:
      "NW Premium Design LLC | Cabinet Installer & Kitchen Remodeler Seattle",
    description:
      "Kitchen cabinet installation, IKEA cabinet assembly, European cabinet installation, and demolition across Seattle, Bellevue, Kirkland, Renton, Tacoma, and nearby Puget Sound cities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NW Premium Design LLC — Seattle Kitchen Remodeling & Cabinet Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NW Premium Design LLC | Seattle Cabinet Installer",
    description:
      "Seattle kitchen cabinet installation, IKEA assembly, European cabinet installs, and demolition. Free estimates.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export function buildPageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph ?? {}),
    },
  };
}
