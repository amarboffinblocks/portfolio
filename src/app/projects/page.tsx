import { SectionRenderer } from "@/components/common/section-renderer";
import projectData from "@/data/project.json";
import { ProjectPage } from "@/types/sections";

export default function ProjectsPage() {
  const { sections } = projectData as ProjectPage;
  return (
    <main className="relative min-h-screen">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}