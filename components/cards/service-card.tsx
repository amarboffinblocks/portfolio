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
        "group relative flex h-[460px] w-full min-w-[360px] flex-col justify-between overflow-hidden rounded-3xl   p-8 text-white transition-all duration-300 will-change-transform hover:-translate-y-1 ",
        service.cardColor,
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(130%_95%_at_25%_8%,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_56%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(3,7,18,0.22)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rounded-full bg-white/15 blur-3xl transition-transform duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[3px_3px] opacity-[0.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/20 to-transparent"
      />

      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 inline-flex rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-mono tracking-[0.16em] text-white/75">
          ({service.number})
        </span>
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/45 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/25 backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.04]",
            service.iconBackground
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
