import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";

const HERO_STATS = [
  { value: "20 days", label: "saved on daily builds.", company: "STRIPE" },
  { value: "98%", label: "faster time to market.", company: "VERCEL" },
  { value: "300%", label: "increase in throughput.", company: "LINEAR" },
  { value: "6x", label: "faster to build + deploy.", company: "NOTION" },
] as const;

export function HeroSection() {
  return (
    <section
      className="min-h-screen  overflow-hidden  p-2 md:p-4 "
      aria-labelledby="hero-heading"
    >

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  pt-24 bg-primary rounded-3xl">

        <Container className="relative z-10 py-12 lg:py-24">
          <SectionHeading
            as="h1"
            id="hero-heading"
            className="mb-12 max-w-5xl"
            headingClassName="mb-6 text-5xl leading-[0.95] text-white transition-all delay-100 duration-700 motion-reduce:transition-none md:text-7xl"
            descriptionClassName="max-w-2xl text-lg leading-relaxed text-white transition-all delay-200 duration-700 motion-reduce:transition-none"
            title={
              <>
                <span className="text-balance">The complete platform to</span>
                <br />
                <span className="text-balance">
                  build the{" "}
                  <span className="">
                    future.
                  </span>
                </span>
              </>
            }
            description="BoffinBlocks helps startups and ambitious teams turn ideas into practical AI applications, assistants, and automation tools designed for speed, scale, and real-world use."
          />

          <div className="mb-20 flex flex-col items-center justify-center gap-4 transition-all delay-300 duration-700 motion-reduce:transition-none sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              
            >
              Contact Us
            </Button>
          </div>

          <div
            className="grid grid-cols-2 gap-3 overflow-hidden rounded-2xl lg:grid-cols-4"
            role="list"
            aria-label="Impact highlights"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.company}
                role="listitem"
                className="flex min-h-[150px] flex-col justify-between rounded-xl border border-border/70 bg-background/75 p-6 shadow-soft lg:p-8 lg:py-8"
              >
                <div>
                  <span className="text-xl font-semibold text-foreground lg:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-foreground/70 lg:text-base">
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
