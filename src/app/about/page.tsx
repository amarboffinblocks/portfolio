import { CheckCircle2, Compass, Rocket, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import CtaSection from "@/components/sections/cta";
import { SubHero } from "@/components/common/sub-hero";
import { WorkProcessSection } from "@/components/sections/work-process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhoWEAreSection } from "@/components/sections/who-we-are";
import { CoreValuesSection } from "@/components/sections/core-values";
import { SectionRenderer } from "@/components/common/section-renderer";
import aboutData from "@/data/about.json";
import type { AboutPage as AboutPageType } from "@/types/sections";




export default function AboutPage() {
  const { sections } = aboutData as AboutPageType;
  return (
    <main className="relative min-h-screen">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
      {/* <SubHero
        eyebrow="ABOUT US"
        title={`Helping Businesses`}
        stash={true}
      />
      <WhoWEAreSection />
      <WorkProcessSection />
      <CoreValuesSection/>  
      <CtaSection />
      <TestimonialsSection /> */}
    </main>
  );
}
