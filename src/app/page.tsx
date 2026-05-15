import landingData from "@/data/landing.json";
import { SectionRenderer } from "@/components/common/section-renderer";
import type { LandingPage } from "@/types/sections";

const landing = landingData as LandingPage;

export default function Home() {
  const { sections } = landing;

  return (
    <main className="relative min-h-screen">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}
