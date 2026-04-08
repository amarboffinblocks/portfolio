import {
  Bot,
  Cable,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const SERVICES = [
  {
    title: "AI Assistants",
    description:
      "Custom assistants for support, operations, and internal workflows with domain-specific context.",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    description:
      "Connect tools and automate repetitive tasks with reliable triggers, approvals, and monitoring.",
    icon: Cable,
  },
  {
    title: "MVP to Production",
    description:
      "Ship fast with a scalable architecture and clean handoff-ready code aligned to your roadmap.",
    icon: Layers,
  },
  {
    title: "Performance Engineering",
    description:
      "Improve UX and speed with targeted optimization across frontend, backend, and API layers.",
    icon: Gauge,
  },
  {
    title: "Security by Design",
    description:
      "Role-based access, audit-friendly practices, and data protection principles built in from day one.",
    icon: ShieldCheck,
  },
  {
    title: "LLM Product Strategy",
    description:
      "Use-case validation, model choices, and implementation guidance for practical AI outcomes.",
    icon: Sparkles,
  },
] as const;

export function ServicesSnapshotSection() {
  return (
    <section
      id="services"
      className="relative border-t border-border/60 py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeading
          id="services-heading"
          className="mb-12 max-w-5xl lg:mb-14"
          title={
            <>
              Built for speed, scale, and <br />
              real-world delivery.
            </>
          }
          description="End-to-end capabilities to design, ship, and grow modern AI-powered products without compromising quality."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card-shadow group rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent/45 bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
