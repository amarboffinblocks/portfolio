"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";
import { Service, ServiceCard } from "../cards/service-card";
import { HOME_SERVICES } from "@/lib/data/services";

type ServicesSnapshotSectionProps = {
  services?: Service[];
  title?: ReactNode;
  highlight?: string;
  description?: string;
};

export function ServicesSnapshotSection({
  services = HOME_SERVICES,
  title = <>Built for speed, scale, and  <span className="text-primary">real-world, delivery.</span></>,
  description = "End-to-end capabilities to design, ship, and grow modern AI-powered products without compromising quality.",
}: ServicesSnapshotSectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const layoutProbeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [trackInset, setTrackInset] = useState({ left: 0, right: 0 });
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

    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
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
    <section
      id="services"
      ref={galleryRef}
      className="relative  py-24 lg:py-28 "
      style={{ height: sectionHeight }}
    >
      <div
        ref={layoutProbeRef}
        aria-hidden
        className="pointer-events-none invisible mx-auto h-0 w-full max-w-7xl px-6 lg:px-8"
      />

      {/* Sticky container */}
      <div className="sticky  top-28 md:top-42 h-fit overflow-hidden">
        <div className="h-full">
          <Container>
            <SectionHeading
              align="center"
              id="services-heading"
              title={title}
              description={description}
            />
          </Container>
          {/* Horizontal scrolling container */}
          <div className="flex-1 flex items-center mt-12">
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
              {services.map((service) => (
                <ServiceCard key={service.number} service={service} className="w-[310px] sm:w-[330px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}