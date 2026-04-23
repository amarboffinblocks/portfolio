import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const WHY_POINTS: Array<{
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}> = [
  {
    title: "Business-first strategy",
    description:
      "Every sprint is aligned to clear business outcomes, so progress stays measurable and meaningful.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Fast, reliable execution",
    description:
      "We move quickly with strong engineering standards, testing discipline, and predictable delivery.",
    icon: Gauge,
  },
  {
    title: "Scalable technical foundation",
    description:
      "Solutions are built for maintainability, handover clarity, and long-term product growth.",
    icon: Workflow,
  },
  {
    title: "Transparent collaboration",
    description:
      "Clear communication and proactive risk management keep your team confident at every phase.",
    icon: ShieldCheck,
  },
] as const;

export function WhyBoffinBlocksSection() {
  return (
    <section
      id="why-boffinblocks"
      className="relative py-24 lg:py-28"
      aria-labelledby="why-boffinblocks-heading"
    >
      <Container>
        <SectionHeading
          id="why-boffinblocks-heading"
          className="mx-auto max-w-3xl"
          title="Why Teams Choose"
          highlight="BoffinBlocks"
          description="A modern AI product partner that combines business understanding with high-quality execution."
        />

          <div className="mt-10">
            <div className="divide-y divide-border rounded-2xl bg-background/70">
              {WHY_POINTS.map((point, index) => {
                const Icon = point.icon;

                return (
                  <article
                    key={point.title}
                    className="group p-5 transition-colors duration-300 hover:bg-primary/5"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="font-mono text-xs tracking-[0.2em] text-primary/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2 rounded-xl bg-primary/5 p-4 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
            Need a custom engagement model? We can adapt sprint rhythm, communication style, and team ownership to match your organization.
          </div>
      </Container>
    </section>
  );
}
