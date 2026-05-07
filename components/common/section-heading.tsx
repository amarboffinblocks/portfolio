import { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingAlign = "center" | "left" | "right";
type SectionHeadingBackground = "primary" | "white";

type SectionHeadingProps = {
  as?: ElementType;
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  align?: SectionHeadingAlign;
  background?: SectionHeadingBackground;
  className?: string;
};

const alignClasses: Record<
  SectionHeadingAlign,
  { container: string; text: string; description: string }
> = {
  center: {
    container: "mx-auto",
    text: "text-center",
    description: "mx-auto",
  },
  left: {
    container: "",
    text: "text-left",
    description: "mx-0",
  },
  right: {
    container: "ml-auto",
    text: "text-right",
    description: "ml-auto mr-0",
  },
};

const backgroundClasses: Record<
  SectionHeadingBackground,
  { title: string; eyebrow: string; description: string }
> = {
  primary: {
    title: "text-primary-foreground",
    eyebrow: "text-primary-foreground/80",
    description: "text-primary-foreground/80",
  },
  white: {
    title: "text-foreground",
    eyebrow: "text-muted-foreground",
    description: "text-muted-foreground",
  },
};

export function SectionHeading({
  as: HeadingTag = "h2",
  id,
  title,
  description,
  eyebrow,
  align = "center",
  background = "white",
  className,
}: SectionHeadingProps) {
  const alignment = alignClasses[align];
  const colors = backgroundClasses[background];

  return (
    <div
      className={cn(
        alignment.container,
        alignment.text,
        className
      )}
    >
      {eyebrow ? (
        <p className={cn("mb-3 font-mono text-sm tracking-[0.2em]", colors.eyebrow)}>
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight md:text-5xl",
          colors.title
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-4  text-balance",
            alignment.description,
            colors.description
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
