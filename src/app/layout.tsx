import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "@/lib/metadata";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="darkreader-lock" />
        <meta name="geo.region" content={`${BUSINESS.address.country}-${BUSINESS.address.state}`} />
        <meta name="geo.placename" content={BUSINESS.address.city} />
        <meta name="geo.position" content={`${BUSINESS.geo.lat};${BUSINESS.geo.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
