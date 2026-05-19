"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";
import { ServiceCard } from "../cards/service-card";
import MobileSerivceSection from "./mobile-serivces-seciton";
import { ServiceItem } from "@/data/sections";



const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

interface ServiceSectionProps {
  cards: ServiceItem[]
}

export function ServicesSection({
  cards
}: ServiceSectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const layoutProbeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [trackInset, setTrackInset] = useState({ left: 0, right: 0 });
  const [stickyTop, setStickyTop] = useState(128);
  const [railMarginTop, setRailMarginTop] = useState(48);
  const [cardHeight, setCardHeight] = useState(460);
  const rafRef = useRef<number | null>(null);
  const totalScrollDistanceRef = useRef(0);

  const applyTranslate = useCallback((x: number) => {
    if (!containerRef.current) return;
    const transform = `translate3d(${x}px, 0, 0)`;
    containerRef.current.style.transform = transform;
    containerRef.current.style.webkitTransform = transform;
  }, []);

  const calculateLayoutMetrics = useCallback(() => {
    if (!containerRef.current || !layoutProbeRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const nextStickyTop = viewportHeight < 860 ? 80 : 128;
    const nextRailMarginTop = viewportHeight < 860 ? 32 : 48;
    const headingHeight = headingRef.current?.offsetHeight ?? 0;
    const nextCardHeight = Math.max(
      320,
      Math.min(460, viewportHeight - nextStickyTop - headingHeight - nextRailMarginTop - 24),
    );

    setStickyTop((prev) => (prev === nextStickyTop ? prev : nextStickyTop));
    setRailMarginTop((prev) => (prev === nextRailMarginTop ? prev : nextRailMarginTop));
    setCardHeight((prev) => (prev === nextCardHeight ? prev : nextCardHeight));

    const containerWidth = containerRef.current.scrollWidth;
    const totalScrollDistance = Math.max(0, containerWidth - viewportWidth);
    totalScrollDistanceRef.current = totalScrollDistance;

    const nextSectionHeight = `${viewportHeight + totalScrollDistance}px`;
    setSectionHeight((prev) =>
      prev === nextSectionHeight ? prev : nextSectionHeight
    );

    const probeRect = layoutProbeRef.current.getBoundingClientRect();
    const styles = window.getComputedStyle(layoutProbeRef.current);
    const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
    const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
    const nextInset = {
      left: probeRect.left + paddingLeft,
      right: window.innerWidth - probeRect.right + paddingRight,
    };

    setTrackInset((prev) =>
      prev.left === nextInset.left && prev.right === nextInset.right
        ? prev
        : nextInset
    );
  }, []);

  useEffect(() => {
    calculateLayoutMetrics();
    const resizeObserver = new ResizeObserver(calculateLayoutMetrics);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (layoutProbeRef.current) {
      resizeObserver.observe(layoutProbeRef.current);
    }
    if (headingRef.current) {
      resizeObserver.observe(headingRef.current);
    }
    window.addEventListener("resize", calculateLayoutMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateLayoutMetrics);
    };
  }, [calculateLayoutMetrics]);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;

    const rect = galleryRef.current.getBoundingClientRect();
    const totalScrollDistance = totalScrollDistanceRef.current;

    const scrolled = Math.max(0, -rect.top);
    const progress =
      totalScrollDistance === 0 ? 0 : Math.min(1, scrolled / totalScrollDistance);
    const newTranslateX = progress * -totalScrollDistance;

    applyTranslate(newTranslateX);
  }, [applyTranslate]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = requestAnimationFrame(() => {
        updateTransform();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  return (
    <>
      <section
        id="services"
        ref={galleryRef}
        className="relative  py-10 md:py-16  md:flex flex-col hidden  "
        style={{ height: sectionHeight }}
      >
        <div
          ref={layoutProbeRef}
          aria-hidden
          className="pointer-events-none invisible mx-auto h-0 w-full max-w-7xl px-6 lg:px-8"
        />

        {/* Sticky container */}
        <div
          className="sticky h-fit overflow-hidden"
          style={{ top: `${stickyTop}px` }}
        >
          <div className="h-full">
            <Container>
              <div ref={headingRef}>
                <SectionHeading
                  align="center"
                  id="services-heading"
                  title={"Our Services"}
                  description={"We are here to support your business with our services."}
                />
              </div>
            </Container>
            {/* Horizontal scrolling container */}
            <div
              className="flex flex-1 items-center"
              style={{ marginTop: `${railMarginTop}px` }}
            >
              <div
                ref={containerRef}
                className="flex gap-6"
                style={{
                  paddingLeft: trackInset.left,
                  paddingRight: trackInset.right,
                  transform: "translate3d(0, 0, 0)",
                  WebkitTransform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  perspective: 1000,
                  WebkitPerspective: 1000,
                  touchAction: "pan-y",
                  willChange: "transform",
                }}
              >
                {cards?.map((service) => (
                  <Link key={service.number} href={`/services/${toSlug(service.title)}`} className="block">
                    <ServiceCard
                      service={service}
                      className="w-[310px] sm:w-[330px]"
                      style={{ height: `${cardHeight}px` }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileSerivceSection services={cards} title={"Our Services"}
        description={"We are here to support your business with our services."}
      />
    </>

  );
}
