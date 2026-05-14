"use client";

import { cn } from "@/lib/utils";
import React from "react";
import TestimonialsCard from "../cards/testimonials-card";

const LOOP_COPIES = 4;

export const InfiniteCarousel = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        image: string;
        name: string;
        handle: string;
        date?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const renderItems = React.useMemo(
        () => Array.from({ length: LOOP_COPIES }, () => items).flat(),
        [items],
    );

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

  React.useEffect(() => {
    getDirection();
    getSpeed();
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--scroll-end",
        `-${100 / LOOP_COPIES}%`,
      );
    }
  }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
        "scroller relative z-20 overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                className={cn(
          "animate-scroll flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          pauseOnHover && "hover:paused",
                )}
            >
        {renderItems.map((item, idx) => (
          <li key={`${item.handle}-${Math.floor(idx / items.length)}-${idx % items.length}`} className="shrink-0">
            <TestimonialsCard card={item} index={idx % items.length} />
          </li>
                ))}
            </ul>
        </div>
    );
};
