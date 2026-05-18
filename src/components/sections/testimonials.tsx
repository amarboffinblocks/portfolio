import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { InfiniteCarousel } from "../common/InfiniteCarousel";
import { SectionWrapper } from "../common/section-wrapper";
import { TestimonialItem } from "@/data/sections";



interface TestimonialsSectionProps {
  testimonials: TestimonialItem[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <SectionWrapper
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          title={"Hear what our <span class='text-primary'>clients say</span>"}
          eyebrow="client Stories"
          align="center"
        />
      </Container>
      <div className="mt-10 overflow-hidden">
        <InfiniteCarousel items={testimonials} />
      </div>
    </SectionWrapper>
  );
}
