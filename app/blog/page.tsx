import { ArrowUpRight, BookOpenText, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { buttonVariants } from "@/components/ui/button";

const BLOG_POSTS = [
  {
    slug: "ai-automation-roi-playbook",
    category: "Strategy",
    title: "How AI automation creates compounding growth for service businesses",
    summary:
      "A practical framework to identify automation opportunities, prioritize quick wins, and scale without operational friction.",
    meta: "May 2026 · 8 min read",
    icon: CalendarDays,
    image: "/case-studies/finflow.svg",
  },
  {
    slug: "internal-tools-adoption-guide",
    category: "Product",
    title: "Designing internal tools your team actually adopts",
    summary:
      "Learn workflow-first UX patterns that increase adoption, reduce manual handoffs, and improve team execution speed.",
    meta: "March 2026 · 7 min read",
    icon: BookOpenText,
    image: "/case-studies/opsgrid.svg",
  },
  {
    slug: "maintainable-ai-features",
    category: "Engineering",
    title: "Building maintainable AI features in modern web applications",
    summary:
      "Architecture and delivery principles that keep AI features reliable, observable, and easy for teams to evolve.",
    meta: "February 2026 · 9 min read",
    icon: Clock3,
    image: "/case-studies/metriclane.svg",
  },
] as const;

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="BLOG"
        title="Insights that help teams"
        highlight="build better"
        description="Practical writing on product strategy, automation, and engineering systems from our client delivery experience."
      />

      <section className="relative py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => {
              const Icon = post.icon;
              return (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card card-shadow"
              >
                <div className="relative aspect-16/10 overflow-hidden border-b border-border/60">
                  <Image
                    src={post.image}
                    alt={`${post.category} article preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-accent/45 bg-primary/20 px-3 py-1 text-xs font-medium tracking-wide text-primary-foreground">
                      {post.category}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/45 bg-primary/20 text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <p className="text-sm font-medium text-foreground/90">{post.meta}</p>
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
    </main>
  );
}
