import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCaseStudiesSection } from "@/components/sections/featured-case-studies-section";
import { ServicesSnapshotSection } from "@/components/sections/services-snapshot-section";
import { CtaSection } from "@/components/sections/cta-section";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";
import { HOME_SERVICES } from "@/lib/data/services";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ServicesSnapshotSection services={HOME_SERVICES} />
      <WhyBoffinBlocksSection />
      <FeaturedCaseStudiesSection />
      <WorkProcessSection />
      <CtaSection />
    </main>
  );
}
