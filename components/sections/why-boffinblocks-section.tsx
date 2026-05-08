import type { ComponentType } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "../ui/button";
import GridPattern from "../common/grid-pattern";

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
  const featuredPoint = WHY_POINTS[1];
  const supportingPoints = [WHY_POINTS[0], WHY_POINTS[2], WHY_POINTS[3]];
  const firstPoint = supportingPoints[0];
  const secondPoint = supportingPoints[1];
  const thirdPoint = supportingPoints[2];
  const FeaturedIcon = featuredPoint.icon;
  const FirstIcon = firstPoint.icon;
  const SecondIcon = secondPoint.icon;
  const ThirdIcon = thirdPoint.icon;

  return (
    <section
      id="why-boffinblocks"
      className="p-2 md:p-4"
      aria-labelledby="why-boffinblocks-heading"
    >
      {/* <div className="bg-primary relative py-24 lg:py-28 rounded-3xl  "> */}
        <Container>
          <SectionHeading
            align="center"
            id="why-boffinblocks-heading"
            title={
              <>
                Why Teams Choose <span className="text-primary">BoffinBlocks</span>
              </>
            }
            description="A modern AI product partner that combines business understanding with high-quality execution."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-4 lg:col-span-8 sm:grid-cols-2">
              <article className="group rounded-xl  p-6 bg-background">
                <div className="flex items-start justify-between flex-col gap-y-4  h-full">
                  <div className="p-4 rounded-2xl bg-primary w-fit  text-primary-foreground">
                    <FirstIcon className="h-6 w-6" />
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
                    <SecondIcon className="h-6 w-6" />
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
                    <ThirdIcon className="h-6 w-6" />
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
                  <FeaturedIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                    {featuredPoint.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                    {featuredPoint.description}
                  </p>
                  <Button variant="secondary" className="mt-6 bg-accent">
                    Start your next sprint
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                </div>
              </div>
            </article>
          </div>

          <div className="mt-6 flex items-start gap-2 rounded-xl bg-background p-4 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 " />
            Need a custom engagement model? We can adapt sprint rhythm, communication style, and team ownership to match your organization.
          </div>
        </Container>
      {/* </div> */}

    </section>
  );
}
