import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks";
import { FeaturedSection } from "@/components/sections/featured";
import { WorkProcessSection } from "@/components/sections/work-process";
import { FaqSection } from "@/components/sections/faq-section";
import { HOME_SERVICES } from "@/lib/data/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection services={HOME_SERVICES} />
      <WhyBoffinBlocksSection />
      <FeaturedSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
