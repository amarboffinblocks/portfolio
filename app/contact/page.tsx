import { PageHeroSection } from "@/components/sections/page-hero-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="CONTACT"
        title="Let's discuss your project."
      
      />

      <ContactSection />
      <TestimonialsSection/>
    </main>
  );
}
