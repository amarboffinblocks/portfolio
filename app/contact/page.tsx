import { PageHeroSection } from "@/components/sections/page-hero-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="CONTACT"
        title="Let's discuss your project."
        description="Tell us what you're building. Whether it's a custom AI product, an internal tool, or workflow automation, we'll help you shape the right path from idea to launch."
      />

      <ContactSection />
    </main>
  );
}
