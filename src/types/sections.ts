/** Page-level metadata from landing.json */
export type LandingMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type SectionButton = {
  label: string;
  href: string;
  variant?: string;
};

export type HeroStat = {
  number: string;
  label: string;
};

export type HeroSectionContent = {
  title: string;
  description: string;
  buttons: SectionButton[];
  stats: HeroStat[];
};

export type ServiceCard = {
  title: string;
  icon: string;
  slug: string;
  number: string;
  description: string;
};

export type ServicesSectionContent = {
  title: string;
  description: string;
  cards: ServiceCard[];
};

export type WhyChoosePoint = {
  title: string;
  description: string;
  icon: string;
};

export type WhyChooseSectionContent = {
  title: string;
  description: string;
  points: WhyChoosePoint[];
};

export type CaseStudy = {
  title: string;
  company: string;
  category: string;
  summary: string;
  impact: string;
  image: string;
  slug: string;
};

export type FeaturedSectionContent = {
  title: string;
  description: string;
  studies: CaseStudy[];
};

export type ProcessStep = {
  step?: string;
  title: string;
  icon: string;
  description: string;
};

export type WorkProcessSectionContent = {
  title: string;
  description: string;
  steps: ProcessStep[];
};

export type Testimonial = {
  image: string;
  name: string;
  handle: string;
};

export type TestimonialsSectionContent = {
  title: string;
  description?: string;
  testimonials: Testimonial[];
};

export type CtaButton = {
  label: string;
  href: string;
};

export type CtaSectionContent = {
  title: string;
  description: string;
  button: CtaButton;
};

export type FaqQuestion = {
  question: string;
  answer: string;
};

export type FaqSectionContent = {
  title: string;
  description: string;
  questions: FaqQuestion[];
};

export type SectionId =
  | "hero"
  | "trust"
  | "services"
  | "choose"
  | "featured"
  | "process"
  | "testimonials"
  | "cta"
  | "faq";

export type HeroSection = {
  id: "hero";
  name: string;
  content: HeroSectionContent;
};

export type TrustSection = {
  id: "trust";
  name: string;
};

export type ServicesSection = {
  id: "services";
  name: string;
  content: ServicesSectionContent;
};

/** `landing.json` uses `Name` (capital N) for this section */
export type WhyChooseSection = {
  id: "choose";
  Name: string;
  content: WhyChooseSectionContent;
};

export type FeaturedSection = {
  id: "featured";
  name: string;
  content: FeaturedSectionContent;
};

export type WorkProcessSection = {
  id: "process";
  name: string;
  content: WorkProcessSectionContent;
};

export type TestimonialsSection = {
  id: "testimonials";
  name: string;
  content: TestimonialsSectionContent;
};

export type CtaSection = {
  id: "cta";
  name: string;
  content: CtaSectionContent;
};

export type FaqSection = {
  id: "faq";
  name: string;
  content: FaqSectionContent;
};

export type LandingSection =
  | HeroSection
  | TrustSection
  | ServicesSection
  | WhyChooseSection
  | FeaturedSection
  | WorkProcessSection
  | TestimonialsSection
  | CtaSection
  | FaqSection;

export type LandingPage = {
  meta: LandingMeta;
  sections: LandingSection[];
};

/** Narrow a section from the landing page by its `id` */
export type SectionById<TId extends SectionId> = Extract<
  LandingSection,
  { id: TId }
>;

// --- about.json ---

export type AboutSubHeroContent = {
  title: string;
  stash: HeroStat[];
};

export type WhoWeAreContent = Record<string, never>;

export type CoreValueItem = {
  icon: string;
  title: string;
  description: string;
};

/** `about.json` uses `Values` (capital V) for this field */
export type CoreValuesSectionContent = {
  title: string;
  description: string;
  Values: CoreValueItem[];
};

export type AboutSectionId =
  | "sub_hero"
  | "who_we_are"
  | "process"
  | "core_values"
  | "cta"
  | "testimonials";

export type AboutSubHeroSection = {
  id: "sub_hero";
  name: string;
  content: AboutSubHeroContent;
};

export type WhoWeAreSection = {
  id: "who_we_are";
  name: string;
  content: WhoWeAreContent;
};

export type AboutProcessSection = {
  id: "process";
  name: string;
  content: WorkProcessSectionContent;
};

export type AboutCoreValuesSection = {
  id: "core_values";
  name: string;
  content: CoreValuesSectionContent;
};

export type AboutCtaSection = {
  id: "cta";
  name: string;
  content: CtaSectionContent;
};

export type AboutTestimonialsSection = {
  id: "testimonials";
  name: string;
  content: TestimonialsSectionContent;
};

export type AboutSection =
  | AboutSubHeroSection
  | WhoWeAreSection
  | AboutProcessSection
  | AboutCoreValuesSection
  | AboutCtaSection
  | AboutTestimonialsSection;

export type AboutPage = {
  sections: AboutSection[];
};

/** Narrow an about section by its `id` */
export type AboutSectionById<TId extends AboutSectionId> = Extract<
  AboutSection,
  { id: TId }
>;

/** A unified type for all sections across different pages */
export type PageSection = LandingSection | AboutSection;
