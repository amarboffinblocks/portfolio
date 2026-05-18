import type { ComponentType } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronFirstIcon,
  Gauge,
  ShieldCheck,
  SquareChevronDownIcon,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "../ui/button";
import GridPattern from "../common/grid-pattern";
import { SectionWrapper } from "../common/section-wrapper";
import { WhyChoosePoint } from "@/types/sections";

interface WhyBoffinBlocksSectionProps {
  points: WhyChoosePoint[]
}
export function WhyBoffinBlocksSection({ points }: WhyBoffinBlocksSectionProps) {
  const featuredPoint = points[1];
  const supportingPoints = [points[0], points[2], points[3]];
  const firstPoint = supportingPoints[0];
  const secondPoint = supportingPoints[1];
  const thirdPoint = supportingPoints[2];


  return (
    <SectionWrapper id="why-boffinblocks" aria-labelledby="why-boffinblocks-heading">
      <Container>
        <SectionHeading
          align="center"
          id="why-boffinblocks-heading"
          title={"Why Businesses <span class='text-primary'>Choose Boffinblocks</span>"}
          description={"We combine agentic AI, automation engineering, and scalable development to help businesses streamline operations, reduce manual work, and deploy intelligent systems with confidence."}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-4 lg:col-span-8 sm:grid-cols-2">
            <article className="group rounded-xl  p-6 bg-background">
              <div className="flex items-start justify-between flex-col gap-y-4  h-full">
                <div className="p-4 rounded-2xl bg-primary w-fit  text-primary-foreground">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {firstPoint.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {firstPoint.description}
                  </p>
                </div>

              </div>
            </article>

            <article className="group rounded-xl bg-background p-6 ">
              <div className="flex items-start justify-between flex-col gap-y-4  h-full">
                <div className="p-4 rounded-2xl bg-primary w-fit  text-primary-foreground">
                  <Workflow className="h-6 w-6" />

                </div>
                <div>

                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {secondPoint.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {secondPoint.description}
                  </p>
                </div>

              </div>
            </article>

            <article className="group rounded-xl  p-6 bg-background  sm:col-span-2">
              <div className="flex items-start justify-between flex-col gap-y-4  h-full">

                <div className="p-4 rounded-2xl bg-primary w-fit  text-primary-foreground">
                  <Gauge className="h-6 w-6" />

                </div>
                <div>

                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {thirdPoint.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                    {thirdPoint.description}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <article className="relative overflow-hidden rounded-xl bg-primary p-6 text-primary-foreground  lg:col-span-4">
            <GridPattern size={40} />
            <div className="relative flex h-full min-h-[19rem] flex-col justify-between">
              <div className=" rounded-2xl glass-radial p-4 w-fit ">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  {featuredPoint.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                  {featuredPoint.description}
                </p>
                <Button variant="secondary" size={"lg"} className="mt-6 bg-accent w-full md:w-auto">
                  Start your next sprint
                  <ArrowRight className="h-4 w-4" />
                </Button>

              </div>
            </div>
          </article>
        </div>
      </Container>
    </SectionWrapper>

  );
}
