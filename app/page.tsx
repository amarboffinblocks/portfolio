import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCaseStudiesSection } from "@/components/sections/featured-case-studies-section";
import { ServicesSnapshotSection } from "@/components/sections/services-snapshot-section";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HOME_SERVICES } from "@/lib/data/services";
import ReviewAndContact from "@/components/sections/review-and-contact";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ServicesSnapshotSection services={HOME_SERVICES} />
      {/* <WhyBoffinBlocksSection /> */}
      <FeaturedCaseStudiesSection />
      <WorkProcessSection />
      <FaqSection />
      <CtaSection />
      <TestimonialsSection />
      {/* <ReviewAndContact/> */}
    </main>
  );
}
