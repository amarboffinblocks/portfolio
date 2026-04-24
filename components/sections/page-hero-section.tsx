import { ReactNode } from "react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

type PageHeroSectionProps = {
  title: string;
  description?: string;
  textPrimarytitle?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeroSection({
  title,
  description,
  eyebrow = "// PAGE",
  actions,
  className,
}: PageHeroSectionProps) {
  return (
    <section
      className={"p-2 md:p-4"}
    >
      <div className="relative  bg-primary rounded-3xl min-h-[70vh]">
        <Container className="relative z-10 flex min-h-[inherit] items-center justify-center ">
          <div className="">
            <SectionHeading
              as="h1"
              align="center"
              eyebrow={eyebrow}
              title={title}
              description={description}
              headingClassName="text-4xl md:text-6xl  text-white"
              descriptionClassName="text-white"
            />
            {actions ? (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{actions}</div>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
