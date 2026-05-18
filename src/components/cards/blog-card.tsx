import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BlogItem } from '@/data/sections';


export const BlogCard = ({ title, slug, description, author, date, category, image }: BlogItem) => {
    return (
        <article
            key={slug}
            className="group overflow-hidden rounded-2xl bg-background p-3"
        >
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                <Image
                    src={image}
                    alt={`${title} article preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className=" p-4   rounded-2xl">
                <h2 className="text-lg font-semibold leading-snug line-clamp-2 text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-3">{description}</p>

                <div className="mt-2 flex items-center justify-between ">
                    <p className="text-xs  text-foreground-muted/50">
                        {date}
                    </p>
                    <Link
                        href={`/blog/${slug}`}
                        className={buttonVariants({ variant: "outline", size: "lg", className: "hover:bg-primary hover:text-primary-foreground" })}
                        aria-label={`Open article: ${title}`}
                    >
                        Read Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1  transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </article>
    )
}
