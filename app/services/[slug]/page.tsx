import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/common/container";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import CtaSection from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { HOME_SERVICES } from "@/lib/data/services";
import { buttonVariants } from "@/components/ui/button";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const SERVICE_CONTENT: Record<
  string,
  {
    intro: string;
    deliverables: string[];
    process: string[];
    outcomes: string[];
  }
> = {
  branding: {
    intro:
      "We design brand systems that make your business instantly recognizable across digital and physical touchpoints.",
    deliverables: [
      "Logo and visual identity system",
      "Color, typography, and UI usage guidelines",
      "Social and marketing collateral kit",
    ],
    process: [
      "Brand discovery workshop and competitor review",
      "Moodboard and identity direction exploration",
      "System finalization with handoff documentation",
    ],
    outcomes: [
      "Clearer market positioning and consistency",
      "Faster design decisions across teams",
      "A stronger, memorable brand presence",
    ],
  },
  development: {
    intro:
      "We build high-performance web products with clean architecture, reliable delivery, and maintainable codebases.",
    deliverables: [
      "Frontend and backend implementation",
      "Responsive UI, APIs, and integrations",
      "Performance, QA, and deployment setup",
    ],
    process: [
      "Scope and architecture alignment",
      "Sprint-based implementation and demos",
      "Stabilization, launch, and handover",
    ],
    outcomes: [
      "Faster releases with fewer regressions",
      "Improved user experience and speed",
      "Codebase your internal team can scale",
    ],
  },
  "seo-optimization": {
    intro:
      "We optimize technical and content SEO to increase discoverability and bring in qualified organic traffic.",
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and content opportunity mapping",
      "On-page optimization and tracking setup",
    ],
    process: [
      "Baseline audit and issue prioritization",
      "Implementation with content collaboration",
      "Ranking and conversion performance reviews",
    ],
    outcomes: [
      "Higher visibility for target keywords",
      "Improved crawlability and page health",
      "Steady growth in organic lead flow",
    ],
  },
  "ui-ux-design": {
    intro:
      "We design intuitive product experiences that simplify complex workflows and improve conversion.",
    deliverables: [
      "UX flows and information architecture",
      "High-fidelity UI with component system",
      "Prototypes and developer-ready handoff",
    ],
    process: [
      "User and business requirement mapping",
      "Wireframes and interaction validation",
      "Visual design a  and design system handoff",
    ],
    outcomes: [
      "Reduced user friction across journeys",
      "Consistent UI across features",
      "Higher engagement and conversion rates",
    ],
  },
  "ai-development": {
    intro:
      "We build practical AI features, copilots, and automations that solve measurable business problems.",
    deliverables: [
      "AI workflow architecture and model strategy",
      "Prompt and context pipeline engineering",
      "Evaluation, guardrails, and observability",
    ],
    process: [
      "Use-case and data readiness assessment",
      "Prototype, iterate, and validate outputs",
      "Production rollout with monitoring",
    ],
    outcomes: [
      "Reduced manual effort in core operations",
      "Faster response and decision cycles",
      "Reliable AI behavior aligned to business goals",
    ],
  },
  "data-engineering": {
    intro:
      "We build modern data pipelines so teams can trust, access, and activate business data faster.",
    deliverables: [
      "Data ingestion and transformation pipelines",
      "Warehouse modeling and documentation",
      "Data quality checks and monitoring",
    ],
    process: [
      "Source mapping and pipeline design",
      "Incremental ETL implementation",
      "Validation, observability, and handoff",
    ],
    outcomes: [
      "Better data reliability and freshness",
      "Faster reporting and analytics turnaround",
      "Scalable foundation for AI and BI",
    ],
  },
  "cloud-infrastructure": {
    intro:
      "We design cloud foundations that scale securely, stay observable, and support reliable product growth.",
    deliverables: [
      "Cloud architecture and environment setup",
      "Security, secrets, and networking baseline",
      "Monitoring, logging, and cost controls",
    ],
    process: [
      "Infrastructure audit and topology design",
      "IaC setup and staged environments",
      "Hardening, optimization, and runbook handoff",
    ],
    outcomes: [
      "More resilient production environments",
      "Lower operational risk during scale",
      "Improved deployment confidence",
    ],
  },
  devops: {
    intro:
      "We streamline CI/CD and operational workflows so your team ships faster with less deployment friction.",
    deliverables: [
      "CI/CD pipeline setup and optimization",
      "Release automation and rollback strategy",
      "Operational dashboards and alerting",
    ],
    process: [
      "Delivery bottleneck analysis",
      "Pipeline automation and policy setup",
      "Monitoring integration and team enablement",
    ],
    outcomes: [
      "Shorter lead time from commit to production",
      "Fewer release failures and hotfixes",
      "More predictable delivery velocity",
    ],
  },
};

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return HOME_SERVICES.map((service) => ({ slug: toSlug(service.title) }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = HOME_SERVICES.find((item) => toSlug(item.title) === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <PageHeroSection eyebrow="SERVICE DETAIL" title={service.title} breadcrumb stash />

      <section className="relative py-14 lg:py-20">
        <Container>
          <Link
            href="/#services"
            className={buttonVariants({ variant: "outline", className: "h-10 rounded-full px-4" })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <article className="rounded-3xl bg-card p-6 lg:col-span-7 lg:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">{content.intro}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">What we deliver</h2>
                  <ul className="mt-3 space-y-2">
                    {content.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold tracking-tight">How we execute</h2>
                  <ul className="mt-3 space-y-2">
                    {content.process.map((step) => (
                      <li key={step} className="flex gap-2 text-sm text-muted-foreground">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <aside className="rounded-3xl bg-primary p-6 text-primary-foreground lg:col-span-5 lg:p-8">
              <h2 className="text-lg font-semibold tracking-tight">Expected outcomes</h2>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Our engagements are designed around measurable impact, not just output.
              </p>
              <ul className="mt-5 space-y-3">
                {content.outcomes.map((item) => (
                  <li key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
