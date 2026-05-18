import { SectionRenderer } from "@/components/common/section-renderer";
import blogPageData from "@/data/blog.json"
import type { BlogPage } from "@/types/sections";



export default function BlogPage() {
  const { sections } = blogPageData as BlogPage;
  return (
    <main className="relative min-h-screen">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}
