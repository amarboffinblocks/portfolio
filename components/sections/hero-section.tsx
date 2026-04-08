import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { BackgroundAnimation } from "../elements/background-animation";
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <BackgroundAnimation />

      <Container className="relative z-10 py-12 lg:py-24">
        <SectionHeading
          as="h1"
          id="hero-heading"
          className="mb-10 max-w-5xl"
          headingClassName="mb-8 text-5xl leading-[0.95] transition-all delay-100 duration-700 motion-reduce:transition-none md:text-7xl"
          descriptionClassName="max-w-xl text-lg leading-relaxed transition-all delay-200 duration-700 motion-reduce:transition-none"
          title={
            <>
              <span className="text-balance">The complete platform to</span>
              <br />
              <span className="text-balance">build the</span>
            </>
          }
          highlight="future."
          description="BoffinBlocks helps startups and ambitious teams turn ideas into practical AI applications, assistants, and automation tools designed for speed, scale, and real-world use."
        />

        <div className="mb-20 flex flex-col items-center justify-center gap-3 transition-all delay-300 duration-700 motion-reduce:transition-none sm:flex-row">
          <Button
            size="lg"
            className="group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
          </Button>
          <Button
            size="lg"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>

        <div
          className=" grid grid-cols-2  gap-px overflow-hidden rounded-xl lg:grid-cols-4"
          role="list"
          aria-label="Impact highlights"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.company}
              role="listitem"
              className="flex min-h-[140px] flex-col justify-between bg-primary/16  backdrop-blur-md   p-6 shadow-none lg:p-8 lg:py-8"
            >
              <div>
                <span className="text-xl font-semibold lg:text-2xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground lg:text-base">
                  {" "}
                  {stat.label}
                </span>
              </div>
              <div className="mt-4 font-mono text-xs tracking-widest text-muted-foreground/60">
                {stat.company}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
