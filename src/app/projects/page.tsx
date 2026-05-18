import { SubHero } from "@/components/common/sub-hero";
import CtaSection from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq-section";
import { ProjectSection } from "@/components/sections/project";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { projects, questions, testimonials } from "@/data/sections";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <SubHero
        eyebrow="Projects"
        title="Our Projects"
      />
      <ProjectSection projects={projects} />
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
      {/* <FaqSection questions={questions} />   */}
    </main>
  );
}