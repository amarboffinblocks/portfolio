import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const WHY_POINTS = [
  "Practical AI solutions aligned with business goals",
  "Strong focus on product quality and usability",
  "Clean, modern development with scalable architecture",
  "Fast execution with thoughtful planning",
  "Solutions built for long-term value, not short-term trends",
] as const;

export function WhyBoffinBlocksSection() {
  return (
    <section
      id="why-boffinblocks"
      className="relative border-t border-border/60 py-24 lg:py-28"
      aria-labelledby="why-boffinblocks-heading"
    >
      <Container>
        <SectionHeading
          id="why-boffinblocks-heading"
          className="max-w-3xl"
          title="Why Teams Choose"
          highlight="BoffinBlocks"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4">
          {WHY_POINTS.map((point) => (
            <article
              key={point}
              className="card-shadow rounded-xl border border-border/60 bg-card/50 p-5 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-primary/12 text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {point}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
