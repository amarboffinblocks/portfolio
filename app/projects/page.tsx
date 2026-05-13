import { ArrowUpRight, ChartNoAxesCombined, Clock3, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { buttonVariants } from "@/components/ui/button";
import CtaSection from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import FeatureCard from "@/components/cards/feature-card";

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
              return (
               <FeatureCard study={project} />
              );
            })}
          </div>
        </Container>
      </section>
      <CtaSection/>
      <TestimonialsSection/>
    </main>
  );
}