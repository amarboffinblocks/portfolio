import { SubHero } from "@/components/common/sub-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <SubHero
        eyebrow="CONTACT"
        title="Let's discuss your project."

      />
      <ContactSection />
      <TestimonialsSection />
    </main>
  );
}
