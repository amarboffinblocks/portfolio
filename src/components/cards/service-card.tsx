"use client";

import {
  Code2,
  Smartphone,
  BrainCircuit,
  Database,
  ServerCog,
  Search,
  Palette,
  BadgeCheck,
  Megaphone,
  FileText,
  LayoutGrid,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import GridPattern from "../common/grid-pattern";
import type { ServiceItem } from "@/data/sections";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
  style?: CSSProperties;
};

export const SERVICE_ICONS = {
  code: Code2,
  mobile: Smartphone,
  ai: BrainCircuit,
  "data-engineering": Database,
  devops: ServerCog,
  search: Search,
  palette: Palette,
  branding: BadgeCheck,
  marketing: Megaphone,
  content: FileText,
  default: LayoutGrid,
} satisfies Record<string, LucideIcon>;

export function ServiceCard({ service, className, style }: ServiceCardProps) {
  const Icon =
    SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] ??
    SERVICE_ICONS.default;

  return (
    <article
      className={cn(
        "group relative flex min-h-[420px] w-full min-w-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6 text-white transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 md:min-h-0 lg:min-w-[340px] lg:p-7 xl:min-w-[360px] xl:p-8",
        className
      )}
      style={style}
    >
      <div
        className={cn(
          "relative z-10 flex min-h-0 flex-1 flex-col justify-between transition-[filter,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",

        )}
      >
        <GridPattern size={40} />
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="mb-6 inline-flex rounded-full glass-radial px-2.5 py-1 text-[11px] font-mono tracking-[0.16em] text-white/75 lg:mb-8">
            ({service.number})
          </span>
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-md p-4 transition-transform duration-300 glass-radial",
            )}
          >
            <Icon
              strokeWidth={2.2}
              className="h-8 w-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] text-white"
            />
          </span>
        </div>

        <div className="relative z-10 space-y-2.5">
          <h3 className="text-sm font-semibold uppercase leading-tight tracking-[0.045em] text-accent lg:text-base">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-primary-foreground/70 line-clamp-3">{service.description}</p>
        </div>
      </div>


      <ArrowRight
        className="absolute right-6 top-6 h-12 w-12 -rotate-45 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:-translate-y-3 lg:right-8 lg:top-8 lg:h-14 lg:w-14 xl:right-10 xl:top-10"
        aria-hidden
      />


    </article>
  );
}
