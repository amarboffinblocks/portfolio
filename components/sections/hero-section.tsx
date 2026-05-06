import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";

const HERO_STATS = [
  { value: "20 days", label: "saved on daily builds.", company: "STRIPE" },
  { value: "98%", label: "faster time to market.", company: "VERCEL" },
  { value: "300%", label: "increase in throughput.", company: "LINEAR" },
  {
    value: "120+",
    label: "service-based companies supported.",
    company: "BOFFINBLOCKS",
  },
] as const;

export function HeroSection() {
  return (
    <section
      className="min-h-svh overflow-hidden p-2 sm:p-3 md:p-4"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex min-h-svh flex-col justify-center overflow-hidden rounded-2xl bg-primary pt-20 sm:pt-24 md:rounded-3xl">
        <Container className="relative z-10 py-10 sm:py-12 lg:py-24">
          <SectionHeading
            as="h1"
            id="hero-heading"
            className="mb-8 max-w-5xl sm:mb-10 lg:mb-12"
            headingClassName="mb-4 text-4xl leading-[0.95] text-white transition-all delay-100 duration-700 motion-reduce:transition-none sm:text-5xl md:text-6xl lg:mb-6 lg:text-7xl"
            descriptionClassName="max-w-2xl text-base leading-relaxed text-white/70 transition-all delay-200 duration-700 motion-reduce:transition-none sm:text-lg"
            title={
              <>
                <span className="text-balance">The complete platform to</span>
                <br />
                <span className="text-balance">
                  build the{" "}
                  <span className="text-accent">
                    future.
                  </span>
                </span>
              </>
            }
            description="BoffinBlocks helps startups and ambitious teams turn ideas into practical AI applications, assistants, and automation tools designed for speed, scale, and real-world use."
          />

          <div className="mb-10 flex flex-col items-stretch justify-center gap-3 transition-all delay-300 duration-700 motion-reduce:transition-none sm:mb-14 sm:items-center sm:gap-4 md:mb-20 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            </Button>
          </div>

          <div
            className="grid grid-cols-1 gap-3 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label="Impact highlights"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.company}
                role="listitem"
                className="flex min-h-[120px] flex-col justify-between rounded-xl border border-border/70 bg-background/75 p-4 shadow-soft sm:min-h-[140px] sm:p-6 lg:min-h-[150px] lg:p-8 lg:py-8"
              >
                <div>
                  <span className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-foreground/70 sm:text-[15px] lg:text-base">
                    {" "}
                    {stat.label}
                  </span>
                </div>
                <div className="mt-4 font-mono text-xs tracking-widest text-primary/70">
                  {stat.company}
                </div>
              </div>
            ))}
          </div>
        </Container>

      </div>

    </section>
  );
}
