import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  Clock3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/common/container";
import CtaSection from "@/components/sections/cta";
import { SubHero } from "@/components/common/sub-hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { BLOG_POSTS, type BlogPostIconKey } from "@/lib/data/blog";

const ICON_MAP: Record<BlogPostIconKey, typeof CalendarDays> = {
  calendar: CalendarDays,
  book: BookOpenText,
  clock: Clock3,
};

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = BLOG_POSTS[postIndex];
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);
  const Icon = ICON_MAP[post.iconKey];

  return (
    <main className="relative min-h-screen">
      <SubHero eyebrow={post.category} title={post.title} breadcrumb className="min-h-[520px]" />

      <section className="pb-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.28fr)] lg:items-start">
            <article className="overflow-hidden ">
              <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                    {post.category}
                  </span>
                  <span>{post.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.author}</span>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {post.summary}
                </p>

                <div className="mt-10 rounded-3xl bg-primary p-6 text-primary-foreground">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-primary-foreground/65">
                        Key takeaways
                      </p>
                      <h2 className="text-xl font-semibold tracking-tight">What matters most in this article</h2>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {post.takeaways.map((item) => (
                      <li key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm leading-6 sm:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 space-y-10">
                  {post.sections.map((section, index) => (
                    <section
                      key={section.title}
                      id={post.sections.length > 1 ? `section-${index + 1}` : undefined}
                      className="border-t border-border/70 pt-8 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-1 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            {section.title}
                          </h2>
                          <div className="mt-4 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-12 rounded-[1.75rem] border border-border/70 bg-background p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Need this for your business?
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    BoffinBlocks helps teams turn strategy into working systems.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    If you are planning a new website, internal tool, or AI automation workflow, we can help you
                    scope, design, and ship it with clarity.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact" className={buttonVariants({ variant: "default", className: "rounded-full px-5" })}>
                      Book a consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/projects" className={buttonVariants({ variant: "outline", className: "rounded-full px-5" })}>
                      See our work
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-32">
              <div className="rounded-2xl bg-background p-6 border border-primary ">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">In this article</p>
                <div className="mt-4 space-y-2">
                  {post.sections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#section-${index + 1}`}
                      className="block rounded-2xl px-3 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                  About BoffinBlocks
                </p>
                <p className="mt-4 text-sm leading-7 text-primary-foreground/85">
                  We build websites, product systems, and AI-powered workflows for ambitious service businesses and
                  modern teams.
                </p>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "secondary", className: "mt-6 w-full rounded-full" })}
                >
                  Talk to our team
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-primary p-6 bg-background">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">More from the blog</p>
                <div className="mt-4 space-y-4">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="block rounded-2xl border border-border/70 p-4 transition-colors hover:bg-secondary/60"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.category}</p>
                      <h3 className="mt-2 text-base font-semibold leading-6 text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.publishedAt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className={buttonVariants({ variant: "outline", className: "rounded-full px-5 hover:bg-primary hover:text-primary-foreground" })}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>

          <section className="mt-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Related insights</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                  Continue exploring practical ideas
                </h2>
              </div>
              <Link href="/blog" className={buttonVariants({ variant: "link", className: "text-primary" })}>
                View all articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-[1.75rem] bg-card p-2 shadow-soft ">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="text-sm text-muted-foreground">
                        {item.publishedAt} - {item.readTime}
                      </span>
                      <Link href={`/blog/${item.slug}`} className={buttonVariants({ variant: "link" })}>
                        Read article
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </section>

      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
