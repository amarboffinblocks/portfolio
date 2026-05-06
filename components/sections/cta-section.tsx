import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

export function CtaSection() {
  return (
    <section className="relative p-2 sm:px-4 sm:py-2 ">
      {/* <div className="relative overflow-hidden rounded-3xl  bg-primary p-8  sm:p-10 lg:p-14"> */}
      <Container className=" ">
        <div className="relative p-8 rounded-3xl  bg-primary z-10 grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] ">
          <div>
            <SectionHeading
              align="left"
              title="Ready to Build"
              highlight="with AI?"
              description="Whether you need a custom AI product, a smart internal tool, or a workflow automation system, BoffinBlocks can help you build something useful, scalable, and aligned with your business."
              descriptionClassName="text-white "
              headingClassName="text-white"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
              // className="h-11 border border-accent/45 bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
              // className="h-11 border-border bg-transparent px-6 text-sm font-medium hover:bg-secondary/40"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>


        </div>
      </Container>
      {/* </div> */}
    </section>
  );
}
