"use client";

import { Code, Palette, Search, Brain, Database, Cloud, Terminal } from "lucide-react";

import { cn } from "@/lib/utils";
import GridPattern from "../common/grid-pattern";

export interface Service {
  number: string;
  title: string;
  description: string;
  iconName: "palette" | "code" | "search" | "ai-agent" | "data-engineering" | "cloud-infrastructure" | "devops";
  cardColor: string;
  iconBackground: string;
  iconColor?: string;
}

const ICON_MAP = {
  palette: Palette,
  code: Code,
  search: Search,
  "ai-agent": Brain,
  "data-engineering": Terminal,
  "cloud-infrastructure": Cloud,
  devops: Database,
} as const;

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = ICON_MAP[service.iconName];

  return (

    <article
      className={cn(
        "group relative flex h-[460px] w-full min-w-[360px] flex-col justify-between overflow-hidden rounded-3xl   p-8 text-white transition-all duration-300 will-change-transform hover:-translate-y-1 bg-primary ",
        // service.cardColor,
        className
      )}
    >
      <GridPattern size={40} />


      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 inline-flex rounded-full glass-radial  px-2.5 py-1 text-[11px] font-mono tracking-[0.16em] text-white/75">
          ({service.number})
        </span>
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center   transition-transform duration-300 glass-radial rounded-md ",
          )}
        >
          <Icon
            strokeWidth={2.2}
            className={cn("h-5 w-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]", service.iconColor ?? "text-white")}
          />
        </span>
      </div>

      <div className="z-10 space-y-2.5">
        <h3 className="text-[21px] font-semibold uppercase leading-tight tracking-[0.045em] text-white">
          {service.title}
        </h3>
        <p className="max-w-[31ch] text-[15px] leading-relaxed text-white/82">{service.description}</p>
      </div>
    </article>

  );
}
