import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "How quickly can we start a project with BoffinBlocks?",
    answer:
      "Most projects can begin within 3-7 business days after a short discovery call. We finalize scope, timelines, and priorities first so execution starts with full clarity.",
  },
  {
    question: "Do you work as an external agency or an embedded team?",
    answer:
      "We can do both. Depending on your needs, we either operate as a standalone delivery squad or integrate directly with your product, design, and engineering teams.",
  },
  {
    question: "Can you support us after launch?",
    answer:
      "Yes. We provide post-launch support for performance, feature iterations, and reliability improvements so your product keeps evolving without losing quality.",
  },
  {
    question: "What industries do you usually work with?",
    answer:
      "We work across SaaS, AI products, internal tools, and service businesses. Our process is flexible enough to adapt to both early-stage startups and growing teams.",
  },
  {
    question: "How do you handle communication and progress updates?",
    answer:
      "You get a clear delivery rhythm with weekly progress updates, async checkpoints, and transparent task tracking. Risks and blockers are shared early, not late.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-28" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          align="center"
          className="max-w-3xl"
          title={
            <>
              Frequently Asked <span className="text-primary">Questions</span>
            </>
          }
          description="Everything you need to know before starting your product journey with BoffinBlocks."
        />

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full bg-background rounded-xl">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index + 1}`}
                className=" border-b border-border/70 px-4 last:border-b-0 sm:px-5  "
              >
                <AccordionTrigger className="py-5 font-mono text-md  hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
