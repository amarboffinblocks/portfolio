import { ArrowUpRight, ChartNoAxesCombined, Clock3, Rocket } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "../ui/button";
import FeatureCard from "../cards/feature-card";
import { SectionWrapper } from "../common/section-wrapper";

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

export function FeaturedSection() {
  return (
    <SectionWrapper
      id="featured"
    >

      <Container>
        <div className=" mb-12 w-full   flex flex-col md:flex-row gap-y-6 justify-between md:items-end">
          <div>
            <SectionHeading
              id="case-studies-heading"
              align="left"
              title={<>Featured Case <span className="text-primary">Studies</span></>}
              description="Selected work showing how focused product strategy and practical AI engineering deliver measurable business outcomes."
              className="max-w-5xl"
            />
          </div>
          <Link
            href="/case-studies"
            className={buttonVariants({ variant: "default" })}
          >
            Explore Case Studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index: number) => {
            const key = `${study.slug}-${index}`;
            return (
              <FeatureCard key={key} study={study} />
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
