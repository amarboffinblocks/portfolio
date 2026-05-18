import { SubHero } from "@/components/common/sub-hero";
import { BlogPageSection } from "@/components/sections/blog-page";
import CtaSection from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { blogs, testimonials } from "@/data/sections";



export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <SubHero
        // eyebrow="Blog"
        title="Our Blog"
      />
      <BlogPageSection blogs={blogs} />
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
