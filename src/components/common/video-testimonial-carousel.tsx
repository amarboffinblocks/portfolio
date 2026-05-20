"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Transition } from "motion/react";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

export type VideoTestimonialCarouselItem = {
  thumbnail: string;
  clientName: string;
  clientRole: string;
  videoUrl?: string;
};

type Breakpoint = "sm" | "md" | "lg";

type SizeConfig = {
  centerW: number;
  centerH: number;
  sideW: number;
  sideH: number;
  gap: number;
  sides: number;
};

const SIZE_CONFIGS: Record<Breakpoint, SizeConfig> = {
  sm: { centerW: 240, centerH: 320, sideW: 52, sideH: 270, gap: 8, sides: 1 },
  md: { centerW: 320, centerH: 420, sideW: 70, sideH: 350, gap: 12, sides: 2 },
  lg: { centerW: 380, centerH: 480, sideW: 84, sideH: 420, gap: 14, sides: 3 },
};

const SPRING: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 32,
  mass: 0.9,
};

function getBreakpoint(width: number): Breakpoint {
  if (width < 640) return "sm";
  if (width < 1024) return "md";
  return "lg";
}

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("lg");

  useEffect(() => {
    const update = () => setBp(getBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}

function getRelativeOffset(index: number, active: number, total: number) {
  if (total === 0) return 0;
  let diff = index - active;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

type CardLayout = {
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
  opacity: number;
  zIndex: number;
  isCenter: boolean;
  isVisible: boolean;
};

function getCardLayout(offset: number, cfg: SizeConfig): CardLayout {
  if (offset === 0) {
    return {
      x: -cfg.centerW / 2,
      y: -cfg.centerH / 2,
      width: cfg.centerW,
      height: cfg.centerH,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      isCenter: true,
      isVisible: true,
    };
  }

  const sign = offset > 0 ? 1 : -1;
  const abs = Math.abs(offset);
  const distance =
    cfg.centerW / 2 + cfg.gap + cfg.sideW / 2 + (abs - 1) * (cfg.sideW + cfg.gap);
  const isVisible = abs <= cfg.sides;

  return {
    x: sign * distance - cfg.sideW / 2,
    y: -cfg.sideH / 2,
    width: cfg.sideW,
    height: cfg.sideH,
    scale: isVisible ? 1 - (abs - 1) * 0.03 : 0.75,
    opacity: isVisible ? 1 - (abs - 1) * 0.12 : 0,
    zIndex: 10 - abs,
    isCenter: false,
    isVisible,
  };
}

interface VideoTestimonialCarouselProps {
  testimonials: VideoTestimonialCarouselItem[];
  initialIndex?: number;
  className?: string;
  onPlay?: (item: VideoTestimonialCarouselItem, index: number) => void;
}

export function VideoTestimonialCarousel({
  testimonials,
  initialIndex = 0,
  className,
  onPlay,
}: VideoTestimonialCarouselProps) {
  const total = testimonials.length;
  const safeInitial = Math.min(Math.max(0, initialIndex), Math.max(0, total - 1));
  const [activeIndex, setActiveIndex] = useState(safeInitial);

  const bp = useBreakpoint();
  const cfg = useMemo(() => {
    const base = SIZE_CONFIGS[bp];
    const maxSides = Math.max(0, Math.floor((total - 1) / 2));
    return { ...base, sides: Math.min(base.sides, maxSides) };
  }, [bp, total]);

  const stageWidth =
    cfg.centerW + 2 * (cfg.sides * (cfg.sideW + cfg.gap)) + 2 * cfg.gap;
  const stageHeight = cfg.centerH + 40;

  if (total === 0) return null;

  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden mt-4 ",
        className
      )}
    >

      <div
        className="relative mx-auto flex w-full items-center justify-center "
      // style={{ height: stageHeight + 60 }}
      >
        <div
          className="relative"
          style={{ width: stageWidth, height: stageHeight }}
        >
          {testimonials.map((item, i) => {
            const offset = getRelativeOffset(i, activeIndex, total);
            const layout = getCardLayout(offset, cfg);
            return (
              <CarouselCard
                key={i}
                item={item}
                layout={layout}
                onSelect={() => {
                  if (layout.isCenter) {
                    onPlay?.(item, i);
                  } else {
                    setActiveIndex(i);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      <CarouselPagination
        total={total}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}

interface CarouselCardProps {
  item: VideoTestimonialCarouselItem;
  layout: CardLayout;
  onSelect: () => void;
}

function CarouselCard({ item, layout, onSelect }: CarouselCardProps) {
  const { isCenter, isVisible } = layout;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={
        isCenter
          ? `Play video testimonial from ${item.clientName}`
          : `Show testimonial from ${item.clientName}`
      }
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden rounded-2xl  outline-none ",
        "focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      )}
      initial={false}
      animate={{
        x: layout.x,
        y: layout.y,
        width: layout.width,
        height: layout.height,
        scale: layout.scale,
        opacity: layout.opacity,
        zIndex: layout.zIndex,
      }}
      transition={SPRING}
      whileHover={
        isCenter
          ? { scale: 1.01 }
          : { scale: layout.scale * 1.05, y: layout.y - 6 }
      }
      whileTap={{ scale: layout.scale * 0.98 }}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
        transformOrigin: "center center",
      }}
    >
      <Image
        src={item.thumbnail}
        alt={item.clientName}
        fill
        sizes={isCenter ? "(min-width: 1024px) 400px, 60vw" : "120px"}
        className={cn(
          "object-cover transition-[filter] duration-500",
          !isCenter && "brightness-90 saturate-[1.05]"
        )}
        priority={isCenter}
        draggable={false}
      />

      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          isCenter
            ? "bg-gradient-to-t from-black/65 via-black/5 to-black/20"
            : "bg-gradient-to-b from-black/40 via-black/15 to-black/55"
        )}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isCenter ? (
          <CenterOverlay key="center" item={item} />
        ) : (
          <SideOverlay key="side" name={item.clientName} />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function CenterOverlay({ item }: { item: VideoTestimonialCarouselItem }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-1 items-center justify-center  relative ">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white  shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.08, type: "spring", stiffness: 280, damping: 22 }}
          whileHover={{
            scale: 1.12,
            boxShadow: "0 14px 36px rgba(0,0,0,0.32)",
          }}
          whileTap={{ scale: 0.94 }}
        >
          <Play className="h-5 w-5 translate-x-[1.5px] fill-current text-neutral-900" />
        </motion.div>
        <motion.div
          className="p-6 text-left  absolute bottom-0 w-full "
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ delay: 0.14, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-base font-bold uppercase tracking-[0.18em] text-white ">
            {item.clientName}
          </div>
          <div className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.32em] text-white/75">
            {item.clientRole}
          </div>
        </motion.div>
      </div>


    </motion.div>
  );
}

function SideOverlay({ name }: { name: string }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <span
        className="select-none font-mono text-[11px] font-semibold tracking-[0.45em] text-white/95"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
        }}
      >
        {name.split(" ")[0].toUpperCase()}
      </span>
    </motion.div>
  );
}

interface CarouselPaginationProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

function CarouselPagination({
  total,
  activeIndex,
  onSelect,
}: CarouselPaginationProps) {
  if (total <= 1) return null;
  return (
    <div className="relative z-10 flex items-center justify-center gap-2 ">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="group relative flex h-3 items-center justify-center"
          >
            <motion.span
              className={cn(
                "block rounded-full",
                isActive ? "bg-primary" : "bg-foreground/30"
              )}
              animate={{
                width: isActive ? 22 : 6,
                height: 6,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            />
          </button>
        );
      })}
    </div>
  );
}


