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
  breadcrumbCurrent?: string;
};

export function PageHeroSection({
  title,
  description,
  eyebrow = "// PAGE",
  className,
  breadcrumb = false,
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
      <div className="relative min-h-[70vh] rounded-3xl bg-primary">
        <Container className="relative z-10 flex min-h-[inherit] items-center justify-center ">
          <div>
           

            <SectionHeading
              as="h1"
              align="center"
              eyebrow={eyebrow}
              title={title}
              description={description}
              headingClassName="text-4xl md:text-6xl  text-white"
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
        </Container>
      </div>
    </section>
  );
}
