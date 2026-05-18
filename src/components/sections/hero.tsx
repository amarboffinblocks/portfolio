
import Link from "next/link";
import HeroWrapper from "@/components/common/hero-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatsCard from "@/components/cards/stats-card";
import { Container } from "@/components/common/container";
import type { HeroSectionContent } from "@/types/sections";
import { VariantProps } from "class-variance-authority";

export function HeroSection({ title, description, buttons, stats }: HeroSectionContent) {
  return (
    <HeroWrapper className="min-h-screen" >
      <Container className=" flex-1 flex  items-center justify-center flex-col gap-y-12 pt-28 md:pt-20 ">
        <div className="relative">
          <div className="flex flex-col   items-center text-start md:text-center gap-4">
            <h1
              id="hero-heading"
              className="text-balance text-3xl  leading-tight font-semibold md:text-5xl text-primary-foreground "
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />

            <p className=" max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              {description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              {buttons?.map((button, index) => {
                const variant = button.variant as VariantProps<typeof buttonVariants>["variant"] || "secondary"
                return (
                  <Link key={index} href={button.href} className={buttonVariants({ variant: variant, size: "lg", className: "group  " })} >
                    {button.label}
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
                  </Link>
                )
              })}
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
