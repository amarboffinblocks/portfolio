import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { CaseStudy } from "@/data/sections";
import { normalizeProjectSlug } from "@/lib/project-content";



const ProjectCard = ({ study }: { study: CaseStudy }) => {
    const slug = study.slug.startsWith("/")
        ? normalizeProjectSlug(study.slug)
        : study.slug;

    return (
        <Card className="group gap-0 overflow-hidden rounded-3xl border-border/70  bg-background p-0 transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className=" flex flex-1 flex-col rounded-2xl  p-3 space-y-2">
                <div className="relative aspect-16/12 overflow-hidden rounded-2xl">
                    <Image
                        src={study.image}
                        alt={`${study.company} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-transparent"
                    />
                </div>
                <div className="px-3">
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                        {study.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-foreground">
                        {study.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {study.summary}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end px-4  pb-4  ">
                <Link
                    href={`/projects/${slug}`}
                    aria-label={`Read ${study.company} case study`}
                    className={buttonVariants({
                        variant: "ghost",
                        size: "lg",
                        className: "group/button rounded-full hover:bg-primary hover:text-primary-foreground",
                    })}
                >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;