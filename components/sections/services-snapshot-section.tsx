"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ServiceCard, type Service } from "../cards/service-card";

const SERVICES: Service[] = [
  {
    number: "001",
    title: "Branding",
    description:
      "We craft logos and brand systems that leave a lasting impression.",
    iconName: "palette",
    gradient:
      "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
  },
  {
    number: "002",
    title: "Development",
    description:
      "Beautiful and functional websites built with purpose and precision.",
    iconName: "code",
    gradient:
      "from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50",
  },
  {
    number: "003",
    title: "SEO Optimization",
    description:
      "Get found faster with tailored SEO strategies backed by real data.",
    iconName: "search",
    gradient:
      "from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50",
  },
  {
    number: "004",
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces designed for seamless user experiences.",
    iconName: "palette",
    gradient:
      "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50",
  },
  {
    number: "005",
    title: "AI Development",
    description:
      "We build AI-powered products that are intelligent and efficient.",
    iconName: "ai-agent",
    gradient:
      "from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50",
  },
  {
    number: "006",
    title: "Data Engineering",
    description: "We build data pipelines that are efficient and scalable.",
    iconName: "data-engineering",
    gradient:
      "from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50",
  },
  {
    number: "007",
    title: "Cloud Infrastructure",
    description:
      "We build cloud infrastructure that is efficient and scalable.",
    iconName: "cloud-infrastructure",
    gradient:
      "from-sky-100 to-sky-200 dark:from-sky-900/50 dark:to-sky-800/50",
  },
  {
    number: "008",
    title: "DevOps",
    description: "We build devops pipelines that are efficient and scalable.",
    iconName: "devops",
    gradient:
      "from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50",
  },
];

export function ServicesSnapshotSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [stickyHeight, setStickyHeight] = useState(0);
  const stickyTopOffset = 128;

  useLayoutEffect(() => {
    let rafId: number | null = null;

    const recalculate = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        const viewportEl = viewportRef.current;
        const trackEl = trackRef.current;
        if (!viewportEl || !trackEl) return;

        const viewportWidth = viewportEl.offsetWidth;
        const trackWidth = trackEl.scrollWidth;
        const measuredStickyHeight = stickyRef.current?.offsetHeight ?? 0;
        const trackStyle = window.getComputedStyle(trackEl);
        const rightPadding = Number.parseFloat(trackStyle.paddingRight) || 0;
        const cardItems = trackEl.querySelectorAll<HTMLElement>("[data-service-card]");
        const lastCard = cardItems.item(cardItems.length - 1) ?? null;
        const lastCardWidth = lastCard?.offsetWidth ?? 0;
        // End with the last card centered while preserving the right gutter.
        const centeredLastCardDistance =
          trackWidth - rightPadding - lastCardWidth / 2 - viewportWidth / 2;
        const nextDistance = Math.max(centeredLastCardDistance, 0);
        setScrollDistance((prevDistance) =>
          prevDistance === nextDistance ? prevDistance : nextDistance
        );
        setStickyHeight((prevHeight) =>
          prevHeight === measuredStickyHeight ? prevHeight : measuredStickyHeight
        );
      });
    };

    const resizeObserver = new ResizeObserver(recalculate);
    if (stickyRef.current) resizeObserver.observe(stickyRef.current);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener("resize", recalculate);
    recalculate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalculate);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    // Keep sticky section active until horizontal motion is fully consumed.
    offset: ["start start", "end start"],
  });

  // Vertical progress drives horizontal travel, then spring smooths it.
  const xTarget = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const EXTRA_SCROLL = 5000; // 👈 adjust this (px)

const sectionHeight = useMemo(() => {
  if (scrollDistance <= 0 || stickyHeight <= 0) return "400vh";

  const total =
    stickyTopOffset +
    scrollDistance +
    stickyHeight +
    EXTRA_SCROLL;

  return `${Math.ceil(total)}px`;
}, [scrollDistance, stickyHeight]);

  return (
    <section
      ref={scrollContainerRef}
      id="services"
      style={{ height: sectionHeight }}
      className="relative border-t border-border/60"
      aria-labelledby="services-heading"
    >
      {/* Sticky wrapper pins the gallery while vertical scrolling controls x translation. */}
      <div
        ref={stickyRef}
        className="sticky top-32 h-[calc(100dvh-8rem)] overflow-hidden py-12 lg:py-14"
      >
        <Container>
          <SectionHeading
            id="services-heading"
            className="max-w-5xl"
            title={
              <>
                Built for speed, scale, and <br /> real-world
              </>
            }
            highlight="delivery."
            description="End-to-end capabilities to design, ship, and grow modern AI-powered products without compromising quality."
          />
        </Container>

        {/* Full-width viewport with the same left/right gutters as Container. */}
        <div
          ref={viewportRef}
          className="relative mt-10 w-full overflow-hidden"
        >
          <motion.div
            ref={trackRef}
            // Avoid spring lag so the last card always reaches final alignment.
            style={{ x: xTarget }}
            className="flex items-stretch gap-4 pl-6 pr-6 will-change-transform md:gap-6 lg:pl-8 lg:pr-8 xl:pl-[calc((100vw-80rem)/2+2rem)] xl:pr-[calc((100vw-80rem)/2+2rem)]"
          >
            {SERVICES.map((service) => (
              <div
                key={service.number}
                data-service-card
                className="w-[calc(100vw-1.5rem)] max-w-none shrink-0 sm:w-[360px] "
              >
                <ServiceCard service={service} />
              </div>
            ))}
            <div
              aria-hidden="true"
              className="w-10 shrink-0 lg:w-14 xl:w-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
