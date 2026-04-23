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
  textPrimarytitle,
  eyebrow = "// PAGE",
  actions,
  className,
}: PageHeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border/60 pt-28 pb-20 lg:min-h-[30vh] lg:pt-32 lg:pb-24 ${className ?? ""}`}
    >

      <Container className="relative z-10 flex min-h-[inherit] items-center justify-center">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            as="h1"
            eyebrow={eyebrow}
            title={title}
            highlight={textPrimarytitle}
            description={description}
            headingClassName="text-4xl md:text-6xl"
          />
          {actions ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
