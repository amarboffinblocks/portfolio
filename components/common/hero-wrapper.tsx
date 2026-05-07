"use client";

import React from 'react'
import { Container } from './container'
import { cn } from '@/lib/utils'

const BLOCK_COUNT = 58;
const MIN_DISTANCE = 6.2;

function createSeededRandom(seed: number) {
    let value = seed >>> 0;
    return () => {
        value += 0x6D2B79F5;
        let t = Math.imul(value ^ (value >>> 15), 1 | value);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const blocks = (() => {
    const random = createSeededRandom(20260507);
    const generated: Array<{
        index: number;
        x: number;
        y: number;
        size: number;
        opacity: number;
        duration: number;
        delay: number;
        driftX: number;
        driftY: number;
        tilt: number;
    }> = [];

    for (let index = 0; index < BLOCK_COUNT; index += 1) {
        let x = random() * 100;
        let y = random() * 100;
        let attempts = 0;

        while (attempts < 24) {
            const tooClose = generated.some((block) => {
                const dx = x - block.x;
                const dy = y - block.y;
                return Math.hypot(dx, dy) < MIN_DISTANCE;
            });

            if (!tooClose) break;
            x = random() * 100;
            y = random() * 100;
            attempts += 1;
        }

        generated.push({
            index,
            x,
            y,
            size: 10 + random() * 18,
            opacity: 0.14 + random() * 0.24,
            duration: 7 + random() * 9,
            delay: -(random() * 12),
            driftX: -5 + random() * 10,
            driftY: -10 + random() * 8,
            tilt: -7 + random() * 14,
        });
    }

    return generated;
})();

const HeroWrapper = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <section
            className="overflow-hidden p-2  md:p-4 "
            aria-labelledby="hero-heading"
        >
            <div
                className="relative overflow-hidden rounded-2xl bg-primary  "
            >
                <div className="pointer-events-none absolute inset-0">
                    {blocks.map((block) => (
                        <span
                            key={block.index}
                            className="hero-random-block"
                            style={
                                {
                                    left: `${block.x}%`,
                                    top: `${block.y}%`,
                                    width: `${block.size}px`,
                                    height: `${block.size}px`,
                                    opacity: block.opacity,
                                    animationDuration: `${block.duration}s`,
                                    animationDelay: `${block.delay}s`,
                                    "--drift-x": `${block.driftX}px`,
                                    "--drift-y": `${block.driftY}px`,
                                    "--tilt": `${block.tilt}deg`,
                                } as React.CSSProperties
                            }
                        />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/6 via-transparent to-black/24" />
                <div className="pointer-events-none absolute left-1/2 top-[-18%] h-[420px] w-[680px] hero-light-orb rounded-full bg-white/15 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.18)_100%)]" />
                <Container>
                    <div className={cn("relative z-10 flex flex-col gap-20 pt-52 pb-14 ", className)}>
                        {children}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default HeroWrapper