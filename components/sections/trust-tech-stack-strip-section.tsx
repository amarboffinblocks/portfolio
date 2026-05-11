"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Clapperboard,
  Image,
  PenTool,
  Sparkles,
  Star,
} from "lucide-react";
import {
  SiFigma,
  SiGoogle,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebflow,
} from "react-icons/si";
import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";

type SkillCard = {
  key: string;
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  rating: number; // 0..5
  badge: string;
  experience: string;
  description: string;
  highlights: string[];
};

const SKILLS: SkillCard[] = [
  {
    key: "figma",
    name: "Figma",
    Icon: SiFigma,
    rating: 5,
    badge: "EXPERT",
    experience: "5+ Years of Experience",
    description:
      "Design systems, prototypes, and pixel-perfect UI that translate cleanly into development.",
    highlights: ["Design Systems", "Prototyping"],
  },
  {
    key: "photoshop",
    name: "Photoshop",
    Icon: Image,
    rating: 4,
    badge: "ADVANCED",
    experience: "4+ Years of Experience",
    description:
      "High-quality image editing, compositing, and asset preparation for web and marketing.",
    highlights: ["Image Editing", "Compositing"],
  },
  {
    key: "illustrator",
    name: "Illustrator",
    Icon: PenTool,
    rating: 4,
    badge: "ADVANCED",
    experience: "4+ Years of Experience",
    description:
      "Vector illustrations, iconography, and scalable brand assets designed for modern UI.",
    highlights: ["Iconography", "Vector Assets"],
  },
  {
    key: "aftereffects",
    name: "After Effects",
    Icon: Sparkles,
    rating: 4,
    badge: "ADVANCED",
    experience: "3+ Years of Experience",
    description:
      "Motion design and micro-animations that bring interfaces to life while staying performant.",
    highlights: ["Motion Design", "Micro-Animations"],
  },
  {
    key: "premiere",
    name: "Premiere Pro",
    Icon: Clapperboard,
    rating: 4,
    badge: "ADVANCED",
    experience: "3+ Years of Experience",
    description:
      "Short-form edits and product videos tailored for social, landing pages, and ads.",
    highlights: ["Video Editing", "Short-form"],
  },
  {
    key: "tailwind",
    name: "Tailwind",
    Icon: SiTailwindcss,
    rating: 5,
    badge: "EXPERT",
    experience: "4+ Years of Experience",
    description:
      "Build fast, consistent UI with a utility-first approach and strong component discipline.",
    highlights: ["Component UI", "Design Tokens"],
  },
  {
    key: "webflow",
    name: "Webflow",
    Icon: SiWebflow,
    rating: 4,
    badge: "ADVANCED",
    experience: "3+ Years of Experience",
    description:
      "I bring Figma designs to life using Webflow — from concept to custom animations, all in the browser.",
    highlights: ["Interactive Websites"],
  },
  {
    key: "nextjs",
    name: "Next.js",
    Icon: SiNextdotjs,
    rating: 5,
    badge: "EXPERT",
    experience: "4+ Years of Experience",
    description:
      "Full-stack React apps with solid performance, SEO, and scalable architecture.",
    highlights: ["SEO-ready", "App Router"],
  },
  {
    key: "react",
    name: "React",
    Icon: SiReact,
    rating: 5,
    badge: "EXPERT",
    experience: "5+ Years of Experience",
    description:
      "Component-driven UI with strong state management patterns and maintainable code.",
    highlights: ["Reusable Components", "State Management"],
  },
  {
    key: "node",
    name: "Node.js",
    Icon: SiNodedotjs,
    rating: 4,
    badge: "ADVANCED",
    experience: "4+ Years of Experience",
    description:
      "APIs, jobs, and integrations with a pragmatic focus on reliability and speed.",
    highlights: ["APIs", "Integrations"],
  },
  {
    key: "typescript",
    name: "TypeScript",
    Icon: SiTypescript,
    rating: 5,
    badge: "EXPERT",
    experience: "5+ Years of Experience",
    description:
      "Typed frontends and backends with cleaner refactors, safer releases, and faster dev cycles.",
    highlights: ["Type-safe Systems", "Refactoring"],
  },
  {
    key: "javascript",
    name: "JavaScript",
    Icon: SiJavascript,
    rating: 5,
    badge: "EXPERT",
    experience: "6+ Years of Experience",
    description:
      "Strong fundamentals across the platform: DOM, performance, async patterns, and tooling.",
    highlights: ["Performance", "Async Patterns"],
  },
];

function Stars({ rating }: { rating: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1" aria-label={`${filled} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < filled ? "fill-yellow-400 text-yellow-400" : "text-foreground/25"
            }`}
        />
      ))}
    </div>
  );
}

export function TrustTechStackStripSection() {
  const defaultActiveKey = "webflow";
  const [activeKey, setActiveKey] = useState<string>(defaultActiveKey);
  const GOOGLE_RATING = 4.9;
  const GOOGLE_REVIEWS = 128;

  const active = useMemo(() => {
    return SKILLS.find((s) => s.key === activeKey) ?? SKILLS[0];
  }, [activeKey]);

  return (
    <section
      id="trust-tech-stack"
      className=" py-10 md:py-20 "
      aria-label="Skills showcase"
    >
      <Container>
        <div className="relative grid gap-8  md:grid-cols-[minmax(0,520px)_1fr] ">
          <div className="relative">
            <div className="grid grid-cols-4 ">
              {SKILLS.map(({ key, name, Icon }) => {
                const isActive = key === active.key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveKey(key)}
                    className={[
                      "group relative flex aspect-square items-center justify-center border",
                      "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive
                        ? "border-primary/40 bg-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.25),0_18px_60px_-25px_hsl(var(--primary)/0.75)]"
                        : "border-border bg-muted/20 hover:bg-muted/35",
                    ].join(" ")}
                    aria-pressed={isActive}
                    aria-label={`Select ${name}`}
                  >
                    <Icon
                      className={[
                        "h-10 w-10 transition-colors duration-300 sm:h-11 sm:w-11",
                        isActive
                          ? "text-primary-foreground"
                          : "text-foreground/15 group-hover:text-foreground/25",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center ">
            <SectionHeading
              align="left"
              title={<>Built on a trusted modern  <span className="text-primary">technology stack</span></>}
              description={
                "We use proven tools across design, development, and automation to deliver scalable digital products with reliability, performance, and long-term maintainability."
              }
            />

            <div className="mt-6">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Google
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Stars rating={active.rating} />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base">
            Google is a global leader in AI and automation, trusted by businesses worldwide for its reliability and performance.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}
