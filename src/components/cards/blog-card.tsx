import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { BlogItem } from '@/data/sections';
import { Card, CardContent, CardFooter } from '../ui/card';


export const BlogCard = ({ title, slug, description, author, date, category, image }: BlogItem) => {
    return (
        <Card
            className="group gap-0 overflow-hidden rounded-3xl border-border/70 justify-between bg-background p-3 transition-all duration-300 hover:-translate-y-0.5"
        >
            <CardContent className='p-0'>
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={`${title} article preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-transparent"
                    />
                </div>
                <div className="mt-2 rounded-2xl px-4 py-4">
                    <p className="text-xs font-medium uppercase  tracking-wider text-primary">
                        {category}
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug tracking-tight text-foreground">
                        {title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className='flex justify-end px-4 pb-3 pt-0'>
                <Link
                    href={`/blog/${slug}`}
                    className={buttonVariants({
                        variant: "ghost",
                        size: "lg",
                        className: "group/button text-primary hover:bg-primary  hover:text-primary-foreground",
                    })}
                    aria-label={`Open article: ${title}`}
                >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    )
}
