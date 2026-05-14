import { ArrowUpRight, BookOpenText, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import CtaSection from "@/components/sections/cta-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { buttonVariants } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BLOG_POSTS, type BlogPostIconKey } from "@/lib/data/blog";

const ICON_MAP: Record<BlogPostIconKey, typeof CalendarDays> = {
  calendar: CalendarDays,
  book: BookOpenText,
  clock: Clock3,
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection eyebrow="BLOG" title="Insights that help teams" />

      <section className="relative py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => {
              const Icon = ICON_MAP[post.iconKey];
              return (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-2xl bg-primary p-2"
                >
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={`${post.category} article preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className=" p-4 glass-radial mt-2  rounded-2xl">
                    <h2 className="text-lg font-semibold leading-snug line-clamp-2 text-primary-foreground">{post.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted/50 line-clamp-3">{post.summary}</p>

                    <div className="mt-2 flex items-center justify-between ">
                      <p className="text-sm font-medium text-primary-foreground/70">
                        {post.publishedAt} - {post.readTime}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={buttonVariants({ variant: "link" })}
                        aria-label={`Open article: ${post.title}`}
                      >
                        Read Article
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
