import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

export function CtaSection() {
  return (
    <section className="relative border-t border-border/60 py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/55 p-8 card-shadow sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_10%_15%,var(--color-accent)/0.14,transparent_55%),radial-gradient(ellipse_65%_50%_at_90%_85%,var(--color-primary)/0.12,transparent_55%)]"
          />

          <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <SectionHeading
                align="left"
                className="max-w-2xl"
                title="Ready to Build"
                highlight="with AI?"
                description="Whether you need a custom AI product, a smart internal tool, or a workflow automation system, BoffinBlocks can help you build something useful, scalable, and aligned with your business."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-11 border border-accent/45 bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 border-border bg-transparent px-6 text-sm font-medium hover:bg-secondary/40"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/40 p-5 backdrop-blur-sm">
              <p className="font-mono text-xs tracking-[0.18em] text-primary/85">
                DELIVERY MODEL
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                <li>1) Discovery and scope alignment</li>
                <li>2) Weekly sprints with transparent updates</li>
                <li>3) Launch support and iteration roadmap</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Typical kickoff in 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
