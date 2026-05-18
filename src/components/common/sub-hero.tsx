'use client'

import HeroWrapper from './hero-wrapper'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
import StatsCard from '../cards/stats-card'
import { cn } from '@/lib/utils'
import { Container } from './container'
import type { HeroStat } from '@/types/sections'
const HERO_STATS = [
  {
    id: 1,
    number: "150+",
    label: "Projects Delivered",
  },
  {
    id: 2,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    id: 3,
    number: "24/7",
    label: "AI Automation",
  },
  {
    id: 4,
    number: "10x",
    label: "Business Efficiency",
  },
] as const;

type SubHeroProps = {
  title: string;
  eyebrow?: string;
  breadcrumb?: boolean;
  stash?: boolean | HeroStat[];
  className?: string;
};

export const SubHero = ({
  title,
  eyebrow,
  breadcrumb = false,
  stash = false,
  className,
}: SubHeroProps) => {
  const pathname = usePathname()
  const stats = Array.isArray(stash) ? stash : stash ? HERO_STATS : [];
  const showStats = stats.length > 0;

  const currentPageLabel =
    pathname
      ?.split('?')[0]
      ?.split('#')[0]
      ?.split('/')
      ?.filter(Boolean)
      ?.slice(-1)[0]
      ?.replace(/[-_]+/g, ' ')
      ?.replace(/\b\w/g, (c) => c.toUpperCase()) ?? 'Home'

  return (
    <HeroWrapper className={cn(' min-h-[350px] md:min-h-[600px]', className)} >
      <Container className={cn(" flex-1 flex  items-center justify-center flex-col gap-y-12  ", showStats ? "pt-36 " : "md:pt-10")}>
        <div className="flex flex-col items-center text-center gap-2 md:gap-4 ">
          {eyebrow && <span className=' text-md md:text-2xl text-accent uppercase font-semibold'>{eyebrow}</span>}
          <h1 className="text-3xl  font-semibold md:text-6xl text-primary-foreground">
            {title}
          </h1>
          {breadcrumb && <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='text-primary-foreground/60 '>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='text-primary-foreground' />
              <BreadcrumbItem >
                <BreadcrumbPage className='text-primary-foreground'>{currentPageLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>}



        </div>

        {showStats && (
          <div
            className=" w-full grid grid-cols-2 gap-3  sm:grid-cols-2 lg:grid-cols-4 pb-4"
            role="list"
            aria-label="Impact highlights"
          >
            {stats.map((stat, index) => (
              <StatsCard key={`${stat.label}-${index}`} number={stat.number} label={stat.label} />
            ))}
          </div>
        )}

      </Container>
    </HeroWrapper>
  )
}
