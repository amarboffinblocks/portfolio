import { ArrowRight, Code2, Compass, Layers3, Rocket } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import WorkProcessCard from "../cards/work-process-card";

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
      id="work-process "
      className="p-2 md:p-4"
      aria-labelledby="work-process-heading"
    >
      <div className="bg-primary rounded-3xl relative  py-24 lg:py-28 ">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />


        <Container>
          <SectionHeading
            id="work-process-heading"
            background="primary"
            title={<>Work <span className="text-accent">Process</span></>}
            description="A structured, transparent approach that keeps momentum high and quality consistent from kickoff to scale."
            align="center"
            className="max-w-5xl"
          />

          <div className="grid mt-12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {WORK_PROCESS_STEPS.map((item, index) => {


              return (
                <WorkProcessCard key={item.step} item={item} />
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
