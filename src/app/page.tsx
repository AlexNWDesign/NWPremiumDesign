import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { YelpReviews } from "@/components/home/YelpReviews";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceAreasSection } from "@/components/service-areas/ServiceAreasSection";
import { buildReviewSchema } from "@/lib/schema";
import { reviews } from "@/data/reviews";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildReviewSchema(reviews)),
        }}
      />
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <ServiceAreasSection />
      <YelpReviews />
      <InstagramFeed />
      <AboutBlurb />
      <ContactCTA />
    </>
  );
}
