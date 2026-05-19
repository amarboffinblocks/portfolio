import Image from "next/image";
import { notFound } from "next/navigation";
import { SubHero } from "@/components/common/sub-hero";
import { Container } from "@/components/common/container";
import CtaSection from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { projects, testimonials } from "@/data/sections";
import {
  getProjectMarkdownBySlug,
  normalizeProjectSlug,
} from "@/lib/project-content";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

type ProjectMetaItem = {
  label: string;
  value: string;
};

type ProjectMetaBarProps = {
  items: ProjectMetaItem[];
  websiteHref: string;
};

function ProjectMetaBar({ items, websiteHref }: ProjectMetaBarProps) {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 divide-y divide-border/60 rounded-2xl  bg-background  sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center px-6 py-5 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
          <Link
            href={websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Visit Website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>  
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: normalizeProjectSlug(project.slug),
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = projects.find(
    (item) => normalizeProjectSlug(item.slug) === slug,
  );

  if (!study) notFound();
  const content = await getProjectMarkdownBySlug(slug);

  if (!content) notFound();

  const gallery = content.gallery.length
    ? content.gallery
    : [{ src: study.image, caption: `${study.company} project snapshot` }];
  const metaItems: ProjectMetaItem[] = [
    { label: "Year Built", value: "2026" },
    { label: "Client", value: study.company },
  ];
  const detailBlocks = [
    content.challenge.length > 0
      ? { title: "Challenge", paragraphs: content.challenge, bullets: [] as string[] }
      : null,
    content.solution.length > 0
      ? { title: "Solution", paragraphs: content.solution, bullets: [] as string[] }
      : null,
    content.outcomes.length > 0
      ? { title: "Outcomes", paragraphs: [] as string[], bullets: content.outcomes }
      : null,
    ...content.sections.map((section) => ({
      title: section.title,
      paragraphs: section.paragraphs,
      bullets: [] as string[],
    })),
    content.kpis.length > 0
      ? {
        title: "KPIs",
        paragraphs: [] as string[],
        bullets: content.kpis.map((kpi) => `${kpi.label}: ${kpi.value}`),
      }
      : null,
    content.deliverables.length > 0
      ? { title: "Deliverables", paragraphs: [] as string[], bullets: content.deliverables }
      : null,
  ].filter((block): block is { title: string; paragraphs: string[]; bullets: string[] } => block !== null);

  return (
    <main className="relative min-h-screen">
      <SubHero
        className=" min-h-[500px] md:min-h-[800px]! "
        eyebrow="case studies"
        title={study.title}
        breadcrumb
      />

      <section className="py-10">
        <Container className=" md:-mt-64  z-10 relative">
          <ProjectMetaBar items={metaItems} websiteHref="https://boffinblocks.com" />
          <div className="relative aspect-16/7 ">
            <Image
              src={gallery[0].src}
              alt={gallery[0].caption}
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="mt-6 max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight">{study.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{study.impact}</p>
          </div>

          {detailBlocks.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {detailBlocks.map((block, index) => {
                const visual = gallery[(index + 1) % gallery.length] ?? gallery[0];
                const imagePanel = (
                  <figure className="relative aspect-16/10 overflow-hidden rounded-2xl">
                    <Image
                      src={visual.src}
                      alt={visual.caption}
                      fill
                      className="object-cover"
                    />
                  </figure>
                );

                const textPanel = (
                  <article>
                    <h3 className="text-2xl font-semibold tracking-tight">{block.title}</h3>
                    {block.paragraphs.length > 0 && (
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {block.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                    {block.bullets.length > 0 && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {block.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                );

                return (
                  <div key={`${block.title}-${index}`} className="contents">
                    {index % 2 === 0 ? (
                      <>
                        {imagePanel}
                        {textPanel}
                      </>
                    ) : (
                      <>
                        {textPanel}
                        {imagePanel}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
