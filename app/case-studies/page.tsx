import { ArrowUpRight, ChartNoAxesCombined, Clock3, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHeroSection } from "@/components/sections/page-hero-section";
import { Container } from "@/components/common/container";

const CASE_STUDIES = [
  {
    slug: "finflow",
    company: "FinFlow",
    title: "Automated customer onboarding with AI workflows",
    summary:
      "Replaced manual verification steps with AI-assisted flows to speed approvals and reduce operational overhead.",
    impact: "42% faster onboarding cycle",
    timeframe: "8 weeks",
    stack: "Next.js, Python, OpenAI",
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
    timeframe: "10 weeks",
    stack: "TypeScript, LangChain, Supabase",
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
    timeframe: "6 weeks",
    stack: "React, Node.js, PostgreSQL",
    icon: ChartNoAxesCombined,
    image: "/case-studies/metriclane.svg",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageHeroSection
        eyebrow="// CASE STUDIES"
        title="Case studies focused on real business outcomes."
        description="A closer look at how BoffinBlocks helps teams ship high-impact AI products, internal tools, and workflow automation systems."
      />

      <section className="relative border-b border-border/60 py-16 lg:py-20">
        <Container>
          <div className="mb-10 grid gap-4 rounded-2xl border border-border/60 bg-card/45 p-5 card-shadow sm:grid-cols-3 sm:p-6">
            <div>
              <p className="text-xs tracking-wide text-muted-foreground">Projects delivered</p>
              <p className="mt-1 text-2xl font-semibold">35+</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted-foreground">Average delivery cycle</p>
              <p className="mt-1 text-2xl font-semibold">6-10 weeks</p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted-foreground">Repeat client engagements</p>
              <p className="mt-1 text-2xl font-semibold">80%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.company}
                  className="card-shadow group overflow-hidden rounded-2xl border border-border/60 bg-card/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="relative aspect-16/10 overflow-hidden border-b border-border/60">
                    <Image
                      src={study.image}
                      alt={`${study.company} project visual`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-accent/45 bg-primary/18 px-3 py-1 text-xs font-medium text-primary-foreground">
                        {study.company}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/45 bg-primary/20 text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold leading-snug">{study.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>

                    <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg border border-border/60 bg-background/40 p-3">
                      <div>
                        <p className="text-[11px] text-muted-foreground">Timeframe</p>
                        <p className="mt-1 text-sm font-medium">{study.timeframe}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-muted-foreground">Stack</p>
                        <p className="mt-1 text-sm font-medium">{study.stack}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <p className="text-sm font-medium text-foreground/90">{study.impact}</p>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        View case study
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
    </main>
  );
}
