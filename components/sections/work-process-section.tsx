import { ArrowRight, Code2, Compass, Layers3, Rocket } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We align on product goals, user needs, and technical constraints to define the right execution path.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Design & Plan",
    description:
      "We map architecture, UX flows, and delivery milestones so implementation stays fast and predictable.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "We ship in focused cycles, validate quickly, and refine continuously based on feedback and performance.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "We deploy with confidence, monitor outcomes, and evolve the product for long-term growth.",
    icon: Rocket,
  },
] as const;

export function WorkProcessSection() {
  return (
    <section
      id="work-process"
      className="relative  py-24 lg:py-28"
      aria-labelledby="work-process-heading"
    >
      <Container>
        <SectionHeading
          id="work-process-heading"
          className="mb-12 max-w-3xl lg:mb-14"
          title="Work"
          highlight="Process"
          description={
            <>
              A structured, transparent approach that keeps momentum high and <br />
              quality consistent from kickoff to scale.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WORK_PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === WORK_PROCESS_STEPS.length - 1;

            return (
              <article
                key={item.step}
                className=" group relative rounded-xl  p-6  bg-[#f9fafb] "
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] ">
                    STEP {item.step}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md ">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

             
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
