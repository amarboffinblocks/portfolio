import Image from "next/image";
import { notFound } from "next/navigation";
import { SubHero } from "@/components/common/sub-hero";
import { Container } from "@/components/common/container";
import CtaSection from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { testimonials } from "@/data/sections";

const CASE_STUDIES = [
  {
    slug: "finflow",
    company: "FinFlow",
    title: "Automated customer onboarding with AI workflows",
    summary:
      "Replaced manual verification steps with AI-assisted flows to speed approvals and reduce operational overhead.",
    impact: "42% faster onboarding cycle",
    timeframe: "8 weeks",
    yearBuilt: "2024",
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
    yearBuilt: "2025",
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
    yearBuilt: "2023",
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
  const primaryVisual = study.gallery[0] ?? { src: study.image, caption: `${study.company} project snapshot` };
  const secondaryVisual = study.gallery[1] ?? primaryVisual;

  return (
    <main className="relative min-h-screen ">
      <SubHero
        className="min-h-[700px]"
        eyebrow={`case studies`}
        title={study.title}
        breadcrumb={true}
        stash

      />

      {/* images sections */}
      <section className=" py-10">
        <Container>
          <div className="relative aspect-16/7 ">
            <Image src={study.image} alt={`${study.company} case study cover`} fill className="object-cover rounded-2xl" />
          </div>
          <div className="mt-4">
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">{study.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.outcomes.join(", ")}</p>

          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-10">
            <div className="relative aspect-16/10">
              <Image src={secondaryVisual.src} alt={secondaryVisual.caption} fill className="object-cover rounded-2xl" />

            </div>
            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{study.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.outcomes.join(", ")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.kpis.map((kpi) => `${kpi.label}: ${kpi.value}`).join(" • ")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.deliverables.join(", ")}</p>
            </div>

            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{study.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.outcomes.join(", ")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.kpis.map((kpi) => `${kpi.label}: ${kpi.value}`).join(" • ")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.deliverables.join(", ")}</p>
            </div>
            <div className="relative aspect-16/10">
              <Image src={secondaryVisual.src} alt={secondaryVisual.caption} fill className="object-cover rounded-2xl" />

            </div>
            <div className="relative aspect-16/10">
              <Image src={secondaryVisual.src} alt={secondaryVisual.caption} fill className="object-cover rounded-2xl" />

            </div>
            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{study.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.outcomes.join(", ")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.kpis.map((kpi) => `${kpi.label}: ${kpi.value}`).join(" • ")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.deliverables.join(", ")}</p>
            </div>
          </div>
        </Container>

      </section>
      <CtaSection />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
