import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { InfiniteCarousel } from "../common/InfiniteCarousel";
import { SectionWrapper } from "../common/section-wrapper";
import { TestimonialsSectionContent } from "@/types/sections";





export function TestimonialsSection({ title, description, testimonials }: TestimonialsSectionContent) {
  return (
    <SectionWrapper
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          title={title}
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
