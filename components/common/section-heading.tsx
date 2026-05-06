import { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  as?: ElementType;
  id?: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  highlightClassName?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  as: HeadingTag = "h2",
  id,
  title,
  highlight,
  description,
  eyebrow,
  className,
  headingClassName,
  descriptionClassName,
  highlightClassName,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-sm tracking-[0.2em] text-white">{eyebrow}</p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn("text-balance text-3xl font-semibold tracking-tight md:text-5xl", headingClassName)}
      >
        {title} {highlight ? <span className={cn("text-accent", highlightClassName)}>{highlight}</span> : null}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-balance text-muted-foreground",
            align === "center" ? "mx-auto" : "",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
