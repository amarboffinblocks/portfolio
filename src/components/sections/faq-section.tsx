import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "../common/section-wrapper";
import { FaqSectionContent } from "@/types/sections";


export function FaqSection({ title, description, questions }: FaqSectionContent) {
  return (
    <SectionWrapper id="faq" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          align="center"
          title={title}
          description={description}
        />

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full bg-background rounded-xl">
            {questions?.map((item, index) => (
              <AccordionItem
                key={`question-${index}`}
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
    </SectionWrapper>
  );
}
