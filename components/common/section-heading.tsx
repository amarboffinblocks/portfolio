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
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary/90">{eyebrow}</p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn("text-balance text-3xl font-semibold tracking-tight md:text-5xl", headingClassName)}
      >
        {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
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
