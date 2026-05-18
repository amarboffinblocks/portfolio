
import Link from "next/link";
import HeroWrapper from "@/components/common/hero-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatsCard from "@/components/cards/stats-card";
import { Container } from "@/components/common/container";
import { stats } from "@/data/sections";

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
              Agentic AI & Automation Company for <span className='text-accent'>Modern Businesses</span>
            </h1>

            <p className=" max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              We build AI agents, intelligent automations, and scalable workflow systems that streamline operations, eliminate repetitive work, and help businesses operate faster with AI-powered efficiency.
            </p>
            <div className="flex items-center gap-4 mt-4">

              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "group  " })} >
                Book a Strategy Call
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "group  " })} >
                Explore Our Work
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 w-full  sm:grid-cols-2 lg:grid-cols-4 pb-4"
          role="list"
          aria-label="Impact highlights"
        >
          {stats?.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

      </Container>
    </HeroWrapper>
  );
}
