import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCaseStudiesSection } from "@/components/sections/featured-case-studies-section";
import { ServicesSnapshotSection } from "@/components/sections/services-snapshot-section";
import { CtaSection } from "@/components/sections/cta-section";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ServicesSnapshotSection />
      <WhyBoffinBlocksSection />
      <FeaturedCaseStudiesSection />
      <WorkProcessSection />
      <CtaSection />
    </main>
  );
}
