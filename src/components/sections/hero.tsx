
import Link from "next/link";
import HeroWrapper from "@/components/common/hero-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatsCard from "@/components/cards/stats-card";
import { Container } from "@/components/common/container";
const HERO_STATS = [
  {
    id: 1,
    number: "150+",
    label: "Projects Delivered",
  },
  {
    id: 2,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    id: 3,
    number: "24/7",
    label: "AI Automation",
  },
  {
    id: 4,
    number: "10x",
    label: "Business Efficiency",
  },
] as const;

export function HeroSection() {
  return (
    <HeroWrapper className="min-h-screen" >
      <Container className=" flex-1 flex  items-center justify-center flex-col gap-y-12 pt-28 md:pt-20 ">
        <div className="relative">
          <div className="flex flex-col   items-center text-start md:text-center gap-4">
            <h1
              id="hero-heading"
              className="text-balance text-3xl  leading-tight font-semibold md:text-5xl text-primary-foreground "
            >
              We systemize and automate <br />  businesses for highly profitable scale,
              <br />
              <span className="text-accent">custom done-for-you systems</span>
            </h1>
            <p className=" max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              We design, build, and operate AI-powered workflows that remove manual
              bottlenecks so your team can focus on growth.
            </p>
            <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg", className: "group mt-4  " })} >
              Explore Our Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
            </Link>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 w-full  sm:grid-cols-2 lg:grid-cols-4 pb-4"
          role="list"
          aria-label="Impact highlights"
        >
          {HERO_STATS.map((stat) => (
            <StatsCard key={stat.id} {...stat} />
          ))}
        </div>

      </Container>
    </HeroWrapper>
  );
}
