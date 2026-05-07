"use client";
import React, { useMemo } from "react";

const DEFAULT_BLOCK_COUNT = 58;
const DEFAULT_MIN_DISTANCE = 6.2;

function createSeededRandom(seed: number) {
    let value = seed >>> 0;
    return () => {
        value += 0x6D2B79F5;
        let t = Math.imul(value ^ (value >>> 15), 1 | value);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function generateBlocks(blockCount: number, minDistance: number) {
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

    for (let index = 0; index < blockCount; index += 1) {
        let x = random() * 100;
        let y = random() * 100;
        let attempts = 0;

        while (attempts < 24) {
            const tooClose = generated.some((block) => {
                const dx = x - block.x;
                const dy = y - block.y;
                return Math.hypot(dx, dy) < minDistance;
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
}

type BackgroundPatternProps = {
    blockCount?: number;
    minDistance?: number;
};

const BackgroundPattern = ({
    blockCount = DEFAULT_BLOCK_COUNT,
    minDistance = DEFAULT_MIN_DISTANCE,
}: BackgroundPatternProps) => {
    const blocks = useMemo(
        () => generateBlocks(blockCount, minDistance),
        [blockCount, minDistance],
    );

    return (
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
    )
}

export default BackgroundPattern;