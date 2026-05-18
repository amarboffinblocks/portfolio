import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    summary: string;
    publishedAt: string;
    readTime: string;
    image: string;
    slug: string;
}
export const BlogCard = ({ title, summary, publishedAt, readTime, image, slug }: BlogCardProps) => {
    return (
        <article
            key={slug}
            className="group overflow-hidden rounded-2xl bg-primary p-2"
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

            <div className=" p-4 glass-radial mt-2  rounded-2xl">
                <h2 className="text-lg font-semibold leading-snug line-clamp-2 text-primary-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted/50 line-clamp-3">{summary}</p>

                <div className="mt-2 flex items-center justify-between ">
                    <p className="text-sm font-medium text-primary-foreground/70">
                        {publishedAt} - {readTime}
                    </p>
                    <Link
                        href={`/blog/${slug}`}
                        className={buttonVariants({ variant: "ghost" })}
                        aria-label={`Open article: ${title}`}
                    >
                        Read Article
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </article>
    )
}
