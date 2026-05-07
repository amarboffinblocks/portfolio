import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "BoffinBlocks helped us move from idea to launch much faster than expected. Their team brought structure, speed, and strong product thinking from day one.",
    name: "Aman Verma",
    role: "Founder, FinFlow",
  },
  {
    quote:
      "Communication was clear, delivery was predictable, and quality stayed high through every sprint. It felt like working with an extension of our own team.",
    name: "Neha Sharma",
    role: "Product Lead, OpsGrid",
  },
  {
    quote:
      "They didn’t just build features, they improved our entire product workflow. The final result is cleaner, faster, and easier for our team to scale.",
    name: "Rohit Singh",
    role: "CTO, MetricLane",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
        <SectionHeading
          id="testimonials-heading"
          align="left"
          eyebrow="Testimonials"
          className="max-w-3xl"
          title={
            <>
              What Clients Say About <span className="text-primary">BoffinBlocks</span>
            </>
          }
          description="Trusted by teams that value clarity, execution quality, and long-term product growth."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card
              key={item.name}
              className="h-full rounded-2xl border-border/70 bg-background/80 py-0 shadow-sm"
            >
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-base leading-relaxed text-foreground/90">"{item.quote}"</p>
                <div className="mt-auto border-t border-border/70 pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  );
}
