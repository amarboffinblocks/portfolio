import { ArrowUpRight, ChartNoAxesCombined, Clock3, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const CASE_STUDIES = [
  {
    slug: "finflow",
    company: "FinFlow",
    title: "Automated customer onboarding with AI workflows",
    summary:
      "Replaced manual verification steps with AI-assisted flows to speed approvals and reduce operational overhead.",
    impact: "42% faster onboarding cycle",
    icon: Clock3,
    image: "/case-studies/finflow.svg",
  },
  {
    slug: "opsgrid",
    company: "OpsGrid",
    title: "Internal copilots for support and operations",
    summary:
      "Built role-specific assistants that handled repetitive internal requests and improved team response consistency.",
    impact: "3.1x increase in weekly throughput",
    icon: Rocket,
    image: "/case-studies/opsgrid.svg",
  },
  {
    slug: "metriclane",
    company: "MetricLane",
    title: "Realtime analytics platform modernization",
    summary:
      "Migrated dashboards and APIs to a scalable architecture with clearer insights and lower latency.",
    impact: "58% reduction in dashboard load time",
    icon: ChartNoAxesCombined,
    image: "/case-studies/metriclane.svg",
  },
] as const;

export function FeaturedCaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative border-t border-border/60 py-24 lg:py-28"
      aria-labelledby="case-studies-heading"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <SectionHeading
            id="case-studies-heading"
            title="Featured Case"
            highlight="Studies"
            description="Selected work showing how focused product strategy and practical AI engineering deliver measurable business outcomes."
          />
          <div className="mt-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-accent/45 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Case Studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => {
            const Icon = study.icon;

            return (
              <article
                key={study.company}
                className="card-shadow group overflow-hidden rounded-2xl border border-border/60 bg-card/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                <div className="relative aspect-16/10 overflow-hidden border-b border-border/60">
                  <Image
                    src={study.image}
                    alt={`${study.company} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/75 via-background/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-accent/45 bg-primary/18 px-3 py-1 text-xs font-medium tracking-wide text-primary-foreground">
                      {study.company}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/45 bg-primary/20 text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug">{study.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <p className="text-sm font-medium text-foreground/90">{study.impact}</p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      aria-label={`Read ${study.company} case study`}
                    >
                      Read
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
  );
}
