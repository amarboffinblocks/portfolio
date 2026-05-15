import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services";
import { WhyBoffinBlocksSection } from "@/components/sections/why-boffinblocks";
import { FeaturedSection } from "@/components/sections/featured";
import { WorkProcessSection } from "@/components/sections/work-process";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";
import { HOME_SERVICES } from "@/lib/data/services";
import type { PageSection } from "@/types/sections";
import { SubHero } from "./sub-hero";
import { WhoWEAreSection } from "../sections/who-we-are";
import { CoreValuesSection } from "../sections/core-values";

type SectionRendererProps = {
  section: PageSection;
};

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.id) {
    case "hero":
      return <HeroSection {...section.content} />;
    case "sub_hero":
      return <SubHero
        eyebrow="ABOUT US"
        title={`Helping Businesses`}
        stash={true}
      />
    case "who_we_are":
      return <WhoWEAreSection />;
    case "core_values":
      return <CoreValuesSection />;
    case "trust":
      return <TrustSection />;
    case "services":
      return <ServicesSection {...section.content} />;
    case "choose":
      return <WhyBoffinBlocksSection {...section.content} />;
    case "featured":
      return <FeaturedSection {...section.content} />;
    case "process":
      return <WorkProcessSection {...section.content} />;
    case "testimonials":
      return <TestimonialsSection {...section.content} />;
    case "cta":
      return <CtaSection />;
    case "faq":
      return <FaqSection {...section.content} />;
    default:
      return null;
  }
}
