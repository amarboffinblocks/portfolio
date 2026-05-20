import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { VideoTestimonialCarousel } from "@/components/common/video-testimonial-carousel";
import { VideoTestimonialItem } from "@/data/sections";

interface VideoTestimonialsSectionProps {
  testimonials: VideoTestimonialItem[];
}

export const VideoTestimonialsSection = ({
  testimonials,
}: VideoTestimonialsSectionProps) => {
  return (
    <SectionWrapper
      id="video-testimonials"
      aria-labelledby="video-testimonials-heading"
    >
      <Container>
        <SectionHeading
          id="video-testimonials-heading"
          title={"Real <span class='text-primary'>stories</span> from real clients"}
          description="A few of the founders and operators we've shipped AI systems and automation workflows with."
          align="center"
        />
        <VideoTestimonialCarousel testimonials={testimonials} />
      </Container>
    </SectionWrapper>
  );
};
