"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type PageHeroSectionProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
  breadcrumb?: boolean;
  highlight?: string;
  breadcrumbCurrent?: string;
  stats?: { value: string; label: string }[];
  stash?: boolean;
};

const ABOUT_STATS = [
  { value: "120+", label: "service-based companies supported" },
  { value: "40+", label: "AI workflows shipped" },
  { value: "98%", label: "client satisfaction rate" },
  { value: "24/7", label: "team support during active delivery" },
] as const;
export function PageHeroSection({
  title,
  description,
  eyebrow = "// PAGE",
  className,
  highlight,
  breadcrumb = false,
  stash = false,
  breadcrumbCurrent,
}: PageHeroSectionProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const toLabel = (segment: string) =>
    segment
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const breadcrumbItems = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: index === segments.length - 1 ? breadcrumbCurrent ?? title : toLabel(segment),
  }));

  return (
    <section className={cn("p-2 md:p-4", className)}>
      <div className="relative min-h-[70vh]  rounded-3xl bg-primary">
        <Container className="relative z-10 flex min-h-[inherit] items-center justify-center flex-col">
          <div className="-mt-40 md:mt-0">
            <SectionHeading
              as="h1"
              align="center"
              eyebrow={eyebrow}
              title={title}
              // description={description}
              highlight={highlight}
              headingClassName="text-4xl md:text-6xl   text-white"
              descriptionClassName="text-white"
            />
            {breadcrumb && (
              <Breadcrumb className="mt-6">
                <BreadcrumbList className="justify-center text-white/75">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/" className="hover:text-white">
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {breadcrumbItems.map((item, index) => (
                    <Fragment key={item.href}>
                      <BreadcrumbSeparator className="[&>svg]:text-white/60" />
                      <BreadcrumbItem>
                        {index === breadcrumbItems.length - 1 ? (
                          <BreadcrumbPage className="max-w-[28ch] truncate text-white">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link href={item.href} className="hover:text-white">
                              {item.label}
                            </Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
       
          </div>
        
         {stash &&  <div className="grid mx-2  grid-cols-2 absolute bottom-12 gap-3 sm:gap-4 sm:p-6  lg:grid-cols-4">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-background/75 p-4 sm:p-5">
                  <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>}

        </Container>
      </div>
    </section>
  );
}
