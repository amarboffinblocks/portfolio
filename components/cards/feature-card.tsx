import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

type FeatureStudy = {
    company: string;
    image: string;
    title: string;
    summary: string;
    impact: string;
    slug: string;
    icon: LucideIcon;
};

const FeatureCard = ({ study }: { study: FeatureStudy }) => {
    const Icon = study.icon;
    return (
        <Card className="group gap-0 overflow-hidden rounded-3xl bg-background py-0  transition-all duration-300 hover:-translate-y-0.5">
            <div className="relative aspect-16/12 overflow-hidden border-b border-border/60">
                <Image
                    src={study.image}
                    alt={`${study.company} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                        {study.company}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/35 bg-white/15 text-white backdrop-blur-sm">
                        <Icon className="h-4 w-4" />
                    </span>
                </div>
            </div>

            <CardContent className="flex flex-1 flex-col p-6">
                <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground">
                        {study.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {study.summary}
                    </p>
                </div>
            </CardContent>

            <CardFooter className="mt-auto justify-between border-t border-border/60 px-6 py-4">
                <p className="text-sm font-medium text-foreground/85">{study.impact}</p>
                <Button asChild variant="ghost" size="sm" className="h-8 rounded-full px-4">
                    <Link
                        href={`/case-studies/${study.slug}`}
                        aria-label={`Read ${study.company} case study`}
                        className="inline-flex items-center gap-1.5"
                    >
                        Read
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default FeatureCard;