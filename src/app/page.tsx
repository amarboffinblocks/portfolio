import CtaSection from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturedSection } from "@/components/sections/featured";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks";
import { WorkProcessSection } from "@/components/sections/work-process";
import { caseStudies, choosePoints, processPoints, questions, services, testimonials } from "@/data/sections";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ServicesSection cards={services} />
      <WhyBoffinBlocksSection points={choosePoints} />
      <FeaturedSection studies={caseStudies} />
      <WorkProcessSection steps={processPoints} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
      <FaqSection questions={questions} />
    </main>
  );
}
