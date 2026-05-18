import { SectionRenderer } from "@/components/common/section-renderer";
import contactData from "@/data/contact.json"
import type { ContactPage } from "@/types/sections";
export default function ContactPage() {
  const { sections } = contactData as ContactPage;
  return (
    <main className="relative min-h-screen">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}
