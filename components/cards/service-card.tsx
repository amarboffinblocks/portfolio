"use client";

import { Code, Palette, Search, Brain, Database, Cloud, Terminal } from "lucide-react";

import { cn } from "@/lib/utils";

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
        "relative flex h-[420px] w-full min-w-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-border/40 p-8",
        service.cardColor,
        className
      )}
    >
      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 text-sm font-mono text-foreground/55">
          ({service.number})
        </span>
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/55 shadow-sm",
            service.iconBackground
          )}
        >
          <Icon className={cn("h-6 w-6", service.iconColor ?? "text-white")} />
        </span>
      </div>

      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider text-foreground/95">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/72">{service.description}</p>
      </div>
    </article>
  );
}
