import { SubHero } from "@/components/common/sub-hero";
import { ContactFormSection } from "@/components/sections/contact-form";
import CtaSection from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { testimonials } from "@/data/sections";
import type { ContactPage } from "@/types/sections";
export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <SubHero
        eyebrow="Contact us"
        title="Let's discuss your project."
      />
      <ContactFormSection />
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
