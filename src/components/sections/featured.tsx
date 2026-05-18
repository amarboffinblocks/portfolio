import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "../ui/button";
import ProjectCard from "../cards/project-card";
import { SectionWrapper } from "../common/section-wrapper";
import { CaseStudy } from "@/data/sections";

interface FeaturedSectionProps {
  studies: CaseStudy[]
}
export function FeaturedSection({ studies }: FeaturedSectionProps) {
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
              title={"Featured Case <span class='text-primary'>Studies</span>"}
              description={"Selected work showing how focused product strategy and practical AI engineering deliver measurable business outcomes."}
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
          {studies?.map((study, index: number) => {
            const key = `${study.slug}-${index}`;
            return (
              <ProjectCard key={key} study={study} />
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
