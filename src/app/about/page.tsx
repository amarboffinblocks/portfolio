
import { SubHero } from "@/components/common/sub-hero";
import { CoreValuesSection } from "@/components/sections/core-values";
import CtaSection from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhoWEAreSection } from "@/components/sections/who-we-are";
import { WorkProcessSection } from "@/components/sections/work-process";
import aboutData from "@/data/about.json";
import { coreValues, processPoints, testimonials } from "@/data/sections";
import type { AboutPage as AboutPageType } from "@/types/sections";




export default function AboutPage() {
  const { sections } = aboutData as AboutPageType;
  return (
    <main className="relative min-h-screen">
      <SubHero
        eyebrow="About Us"
        title="Helping Businesses"
        stash={true}
      />
      <WhoWEAreSection />
      <WorkProcessSection steps={processPoints} />
      <CoreValuesSection values={coreValues} />
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
