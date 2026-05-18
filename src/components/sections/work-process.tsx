import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import WorkProcessCard from "../cards/work-process-card";
import { SectionWrapper } from "../common/section-wrapper";
import { ProcessPoint } from "@/data/sections";

interface WorkProcessSectionProps {
  steps: ProcessPoint[]
}
export function WorkProcessSection({ steps }: WorkProcessSectionProps) {
  return (
    <SectionWrapper
      background
      id="work-process "
      aria-labelledby="work-process-heading"
    >

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
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
          title={"Our AI Automation <span class='text-accent'>Process</span>"}
          description={"A streamlined process focused on building scalable AI systems, intelligent automations, and modern business workflows."}
          align="center"
        />

        <div className="grid mt-12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps?.map((item, index) => {
            const step = `step-${index + 1}`
            return (
              <WorkProcessCard key={index} item={{ step, ...item }} />
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
