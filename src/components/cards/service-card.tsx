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
  type LucideIcon,
  ArrowRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import GridPattern from "../common/grid-pattern";

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
}


type ServiceCardProps = {
  service: Service;
  className?: string;
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
} satisfies Record<string, LucideIcon>;

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];

  return (
    <article
      className={cn(
        "group relative flex h-[460px] w-full min-w-[360px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-white transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "relative z-10 flex min-h-0 flex-1 flex-col justify-between transition-[filter,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",

        )}
      >
        <GridPattern size={40} />
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="mb-8 inline-flex rounded-full glass-radial px-2.5 py-1 text-[11px] font-mono tracking-[0.16em] text-white/75">
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
          <h3 className="text-md  font-semibold  uppercase leading-tight tracking-[0.045em] text-accent">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-primary-foreground/70 line-clamp-2 ">{service.description}</p>
        </div>
      </div>


      <ArrowRight
        className="absolute right-10 top-10 h-14 w-14 -rotate-45 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:-translate-y-3"
        aria-hidden
      />


    </article>
  );
}
