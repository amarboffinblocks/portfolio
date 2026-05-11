import { ArrowUpRight, ChartNoAxesCombined, Clock3, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { buttonVariants } from "@/components/ui/button";
import CtaSection from "@/components/sections/cta-section";

const PROJECTS = [
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

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="PROJECTS"
        title="Our work speaks for itself."
      />

      <section className="relative  py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-card card-shadow"
                >
                  <div className="relative aspect-16/10 overflow-hidden border-b border-border/60">
                    <Image
                      src={project.image}
                      alt={`${project.company} project preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-accent/45 bg-primary/20 px-3 py-1 text-xs font-medium tracking-wide text-primary-foreground">
                        {project.company}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/45 bg-primary/20 text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-semibold leading-snug">{project.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <p className="text-sm font-medium text-foreground/90">{project.impact}</p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className={buttonVariants({ variant: "link" })}
                        aria-label={`Open ${project.company} project details`}
                      >
                        Learn More
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
      <CtaSection/>
    </main>
  );
}