import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteCarousel } from "../common/InfiniteCarousel";

type CardT = {
  image: string;
  name: string;
  handle: string;
  date?: string;
};

const DEFAULT_DATA: CardT[] = [
  {
      image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
  },
  {
      image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
  },
  {
      image:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
  },
  {
      image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10   ">
        <SectionHeading
          title={<>Hear what our <span className="text-primary"> clients say</span></>}
          eyebrow="client Stories"
          
          align="center"
        />
        <div className="mt-10 overflow-hidden">
          <InfiniteCarousel items={DEFAULT_DATA} />

        </div>
      </div>
    </section>
  );
}
