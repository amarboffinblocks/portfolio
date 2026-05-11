
import Link from "next/link";
import Eyebrow from "../common/eyebrow";
import HeroWrapper from "../common/hero-wrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import StatsCard from "../cards/stats-card";
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
    <HeroWrapper className="h-[96vh]" >
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
          <Button variant="secondary" className="group mt-6 w-full md:w-auto" size="lg" >
            <Link href="/" className="flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
            </Link>
          </Button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-3  sm:grid-cols-2 lg:grid-cols-4"
        role="list"
        aria-label="Impact highlights"
      >
        {HERO_STATS.map((stat) => (
          <StatsCard key={stat.id} {...stat} />
        ))}
      </div>
    </HeroWrapper>



  );
}
