import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Button, buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { CaseStudy } from "@/data/sections";



const ProjectCard = ({ study }: { study: CaseStudy }) => {
    return (
        <Card className="group gap-0 overflow-hidden rounded-3xl   transition-all duration-300 hover:-translate-y-0.5 bg-background p-3">
            <div className="relative aspect-16/12 overflow-hidden  rounded-2xl">
                <Image
                    src={study.image}
                    alt={`${study.company} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-transparent"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-primary-foreground/25  px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                        {study.company}
                    </span>
                </div>
            </div>

            <CardContent className="flex flex-1 flex-col p-4  mt-2 rounded-2xl justify-between">
                <div >

                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground">
                        {study.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground line-clamp-2">
                        {study.summary}
                    </p>
                </div>
                <div className=" mt-4 flex gap-2 justify-end">
                    {/* <p className="text-sm font-medium text-primary-foreground/70">{study.impact}</p> */}
                    <Link
                        href={`/projects/${study.slug}`}
                        aria-label={`Read ${study.company} case study`}
                        className={buttonVariants({ variant: "outline", size: "lg", className: "hover:bg-primary hover:text-primary-foreground" })}                   >
                        Read more
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;