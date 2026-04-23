"use client";

import { Code, Palette, Search, Brain, Database, Cloud, Terminal } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Service {
  number: string;
  title: string;
  description: string;
  iconName: "palette" | "code" | "search" | "ai-agent" | "data-engineering" | "cloud-infrastructure" | "devops";
  gradient: string;
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
        "relative flex h-[420px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-linear-to-r p-8 card-shadow",
        service.gradient,
        className
      )}
    >
      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 text-sm font-mono text-foreground/50">
          ({service.number})
        </span>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/40 backdrop-blur-xs">
          <Icon className="h-6 w-6 text-foreground" />
        </span>
      </div>

      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/75">{service.description}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-transparent" />
    </article>
  );
}
