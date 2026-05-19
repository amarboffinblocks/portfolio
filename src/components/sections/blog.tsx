"use client";

import * as React from "react";
import Link from "next/link";

import { blogs } from "@/data/sections";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionWrapper } from "../common/section-wrapper";
import { SectionHeading } from "../common/section-heading";
import { Container } from "../common/container";
import { BlogCard } from "../cards/blog-card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <SectionWrapper id="blogs" aria-labelledby="blog-heading">
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="blog-heading"
            align="left"
            title="Blogs"
          />
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full group hover:bg-primary hover:text-primary-foreground",
            })}
          >
            View All Articles
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-500" />
          </Link>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", containScroll: "trimSnaps" }}
          className="relative"
        >
          <CarouselContent className="ml-0 md:-ml-4">
            {blogs.map((post) => (
              <CarouselItem
                key={post.slug}
                className="basis-full pl-0 sm:basis-1/2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <BlogCard {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={`blog-dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={current === index}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    current === index
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-primary/25 hover:bg-primary/45",
                  )}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>

            <div className="relative flex items-center gap-2">
              <CarouselPrevious className="static size-9 translate-y-0" />
              <CarouselNext className="static size-9 translate-y-0" />
            </div>
          </div>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;