import { ArrowLeft, ArrowUpRight, CalendarDays, Layers, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeroSection } from "@/components/sections/page-hero-section";

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
    challenge:
      "Onboarding depended on repetitive manual checks and fragmented internal steps, slowing approvals and creating inconsistent customer experience.",
    solution:
      "BoffinBlocks designed an AI-assisted onboarding pipeline with structured validation, guided human review, and workflow orchestration across existing tools.",
    outcomes: [
      "Reduced average onboarding completion time by 42%",
      "Improved process consistency with fewer manual handoff gaps",
      "Enabled clearer audit visibility for compliance-focused teams",
    ],
    image: "/case-studies/finflow.svg",
    gallery: [
      { src: "/case-studies/finflow.svg", caption: "AI-assisted onboarding dashboard" },
      { src: "/case-studies/finflow-detail.svg", caption: "Verification and approval workflow map" },
    ],
    kpis: [
      { label: "Manual review effort", value: "-37%" },
      { label: "Approval consistency", value: "+29%" },
      { label: "User drop-off reduction", value: "-21%" },
    ],
    deliverables: [
      "Workflow orchestration for onboarding handoffs",
      "AI-assisted verification decision layer",
      "Operational dashboard with visibility controls",
    ],
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
    challenge:
      "Support and operations teams were spending too much time on repetitive internal requests and context retrieval.",
    solution:
      "We implemented tailored copilots with controlled knowledge access, role-based prompts, and reusable automation actions.",
    outcomes: [
      "Increased weekly team throughput by 3.1x",
      "Reduced context switching across support workflows",
      "Standardized response quality across multiple teams",
    ],
    image: "/case-studies/opsgrid.svg",
    gallery: [
      { src: "/case-studies/opsgrid.svg", caption: "Operations copilot workspace" },
      { src: "/case-studies/opsgrid-detail.svg", caption: "Role-based workflow execution map" },
    ],
    kpis: [
      { label: "Response turnaround", value: "2.4x faster" },
      { label: "Workflow completion rate", value: "+33%" },
      { label: "Internal ticket deflection", value: "48%" },
    ],
    deliverables: [
      "Role-specific copilots with controlled context",
      "Reusable action workflows for ops and support",
      "Performance tracking across team queues",
    ],
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
    challenge:
      "Legacy dashboard rendering and API aggregation were creating delays and reducing confidence in real-time decision making.",
    solution:
      "BoffinBlocks redesigned data flows, optimized query layers, and modernized dashboard rendering for faster, clearer analytics.",
    outcomes: [
      "Reduced dashboard load time by 58%",
      "Improved API response stability under peak traffic",
      "Delivered a cleaner analytics experience for stakeholders",
    ],
    image: "/case-studies/metriclane.svg",
    gallery: [
      { src: "/case-studies/metriclane.svg", caption: "Realtime analytics overview" },
      { src: "/case-studies/metriclane-detail.svg", caption: "Latency-optimized charting layer" },
    ],
    kpis: [
      { label: "P95 dashboard latency", value: "-58%" },
      { label: "API reliability", value: "99.9%" },
      { label: "Stakeholder adoption", value: "+41%" },
    ],
    deliverables: [
      "Optimized analytics API and query model",
      "Modernized dashboard rendering architecture",
      "Monitoring and alerting for data freshness",
    ],
  },
] as const;

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageHeroSection
        eyebrow={`// ${study.company.toUpperCase()}`}
        title={study.title}
        description={study.summary}
        actions={
          <>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/45 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-accent/45 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discuss similar project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </>
        }
      />

      <section className="relative border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl border border-border/60 card-shadow">
            <div className="relative aspect-16/7">
              <Image src={study.image} alt={`${study.company} case study cover`} fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/20 to-transparent" />
            </div>
          </div>

          <div className="mb-8 grid gap-5 lg:grid-cols-2">
            {study.gallery.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-2xl border border-border/60 bg-card/50 card-shadow">
                <div className="relative aspect-16/10">
                  <Image src={item.src} alt={item.caption} fill className="object-cover" />
                </div>
                <figcaption className="border-t border-border/60 px-4 py-3 text-xs text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mb-8 grid gap-4 rounded-2xl border border-border/60 bg-card/45 p-4 card-shadow sm:grid-cols-3 sm:p-5">
            {study.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-border/60 bg-background/40 px-4 py-3">
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="mt-1 text-xl font-semibold">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-4">
              <div className="rounded-2xl border border-border/60 bg-card/55 p-5 card-shadow">
                <p className="text-xs text-muted-foreground">Company</p>
                <p className="mt-1 font-medium">{study.company}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/55 p-5 card-shadow">
                <p className="text-xs text-muted-foreground">Timeframe</p>
                <p className="mt-1 font-medium">{study.timeframe}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/55 p-5 card-shadow">
                <p className="text-xs text-muted-foreground">Tech stack</p>
                <p className="mt-1 font-medium">{study.stack}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/55 p-5 card-shadow">
                <p className="text-xs text-muted-foreground">Primary impact</p>
                <p className="mt-1 font-medium text-primary">{study.impact}</p>
              </div>
            </aside>

            <article className="rounded-2xl border border-border/60 bg-card/55 p-6 card-shadow sm:p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Target className="h-5 w-5 text-primary" />
                    Challenge
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
                </div>

                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Layers className="h-5 w-5 text-primary" />
                    Solution
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Outcomes
                  </h2>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.outcomes.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Layers className="h-5 w-5 text-primary" />
                    Delivery highlights
                  </h2>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.deliverables.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Completed in {study.timeframe}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
