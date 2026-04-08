"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

const GRID_CELL_COUNT = 240

const GRID_ACTIVATION_MAP: Record<number, readonly number[]> = {
    0: [5, 23, 47, 68, 92, 115, 138, 167, 189, 215],
    1: [12, 31, 56, 78, 103, 127, 152, 178, 201, 223, 8, 45, 89, 134, 176],
    2: [3, 19, 42, 65, 88, 112, 139, 163, 186, 209, 234, 17, 54, 97, 143, 188, 211, 237],
}

/** Persists across refresh (same tab); new tab gets a fresh animation until first load there. */
const HERO_BG_ANIMATION_SEEN_KEY = "porfolio-hero-bg-animation-seen"

const ALL_GRID_ACTIVE_CELLS: ReadonlySet<number> = new Set(
    ([] as number[]).concat(...Object.values(GRID_ACTIVATION_MAP)),
)

const WAVE_STEP_GAP_MS = 950
const WAVE_STAGGER_MS = 42
const WAVE_START_DELAY_MS = 400

const HeroGridCell = memo(function HeroGridCell({ active }: { active: boolean }) {
    return (
        <div
            className={cn(
                "aspect-square rounded-sm border transition-[transform,opacity,box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                active
                    ? "scale-[1.03] border-accent/45 bg-primary shadow-lg shadow-accent/30"
                    : "border-border/55 opacity-[0.28]",
            )}
        />
    )
})

const ORB_REST = {
    orbA: { x: 0, y: 0, opacity: 0.35 },
    orbB: { x: 0, y: 0, opacity: 0.28 },
} as const

function AmbientOrbs({ reducedMotion, staticRest }: { reducedMotion: boolean; staticRest: boolean }) {
    if (reducedMotion) return null

    if (staticRest) {
        return (
            <>
                <div
                    aria-hidden
                    style={{ opacity: ORB_REST.orbA.opacity, transform: `translate(${ORB_REST.orbA.x}px, ${ORB_REST.orbA.y}px)` }}
                    className="pointer-events-none absolute -left-[15%] top-[-8%] h-[min(65vh,520px)] w-[min(85vw,680px)] rounded-full bg-primary/20 blur-[110px]"
                />
                <div
                    aria-hidden
                    style={{ opacity: ORB_REST.orbB.opacity, transform: `translate(${ORB_REST.orbB.x}px, ${ORB_REST.orbB.y}px)` }}
                    className="pointer-events-none absolute -right-[18%] bottom-[-5%] h-[min(55vh,440px)] w-[min(70vw,560px)] rounded-full bg-keppel-600/18 blur-[95px]"
                />
            </>
        )
    }

    return (
        <>
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -left-[15%] top-[-8%] h-[min(65vh,520px)] w-[min(85vw,680px)] rounded-full bg-primary/20 blur-[110px]"
                animate={{ x: [0, 36, 0], y: [0, 20, 0], opacity: [0.35, 0.52, 0.35] }}
                transition={{ duration: 20, repeat: 0, ease: "easeInOut" }}
            />
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-[18%] bottom-[-5%] h-[min(55vh,440px)] w-[min(70vw,560px)] rounded-full bg-keppel-600/18 blur-[95px]"
                animate={{ x: [0, -28, 0], y: [0, -16, 0], opacity: [0.28, 0.44, 0.28] }}
                transition={{
                    duration: 24,
                    repeat: 0,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </>
    )
}

function GradientVeils({ reducedMotion, staticRest }: { reducedMotion: boolean; staticRest: boolean }) {
    const holdOpacity = reducedMotion ? 1 : 0.92

    return (
        <>
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent"
                initial={false}
                animate={
                    reducedMotion || staticRest
                        ? { opacity: holdOpacity }
                        : { opacity: [0.92, 1, 0.92] }
                }
                transition={
                    reducedMotion || staticRest
                        ? { duration: 0 }
                        : { duration: 14, repeat: 0, ease: "easeInOut" }
                }
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/80 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background via-transparent to-background" />
        </>
    )
}

function useGridWavePulse(reducedMotion: boolean, skipIntro: boolean) {
    const [activeCells, setActiveCells] = useState<Set<number>>(() => new Set())

    useEffect(() => {
        if (reducedMotion || skipIntro) {
            return
        }

        let cancelled = false
        const timeouts: ReturnType<typeof setTimeout>[] = []

        const scheduleActivations = (step: number, startAt: number) => {
            const cells = GRID_ACTIVATION_MAP[step] ?? []
            cells.forEach((cellIndex, i) => {
                timeouts.push(
                    setTimeout(() => {
                        if (!cancelled) {
                            setActiveCells((prev) => new Set(prev).add(cellIndex))
                        }
                    }, startAt + i * WAVE_STAGGER_MS),
                )
            })
        }

        const runWave = () => {
            setActiveCells(new Set())
            const t0 = WAVE_START_DELAY_MS
            scheduleActivations(0, t0)
            scheduleActivations(1, t0 + WAVE_STEP_GAP_MS)
            scheduleActivations(2, t0 + WAVE_STEP_GAP_MS * 2)
        }

        timeouts.push(setTimeout(runWave, 300))

        return () => {
            cancelled = true
            timeouts.forEach(clearTimeout)
        }
    }, [reducedMotion, skipIntro])

    return activeCells
}

export type HeroAnimatedBackgroundProps = {
    className?: string
}

/**
 * Full-bleed animated backdrop: ambient orbs (Framer Motion), pulsing grid wave, and gradient veils.
 * Place inside a `relative` container; uses `absolute` positioning for layers.
 */
export function BackgroundAnimation({ className }: HeroAnimatedBackgroundProps) {
    const prefersReducedMotion = useReducedMotion()
    const reducedMotion = prefersReducedMotion === true

    const [skipIntro, setSkipIntro] = useState(false)

    const staticRest = skipIntro && !reducedMotion

    useLayoutEffect(() => {
        try {
            if (reducedMotion) {
                if (sessionStorage.getItem(HERO_BG_ANIMATION_SEEN_KEY) !== "1") {
                    sessionStorage.setItem(HERO_BG_ANIMATION_SEEN_KEY, "1")
                }
                setSkipIntro(true)
                return
            }

            if (sessionStorage.getItem(HERO_BG_ANIMATION_SEEN_KEY) === "1") {
                setSkipIntro(true)
                return
            }

            sessionStorage.setItem(HERO_BG_ANIMATION_SEEN_KEY, "1")
            setSkipIntro(false)
        } catch {
            setSkipIntro(false)
        }
    }, [reducedMotion])

    const activeCells = useGridWavePulse(reducedMotion, skipIntro)

    const gridCells = useMemo(() => {
        if (reducedMotion) {
            return new Set(GRID_ACTIVATION_MAP[0])
        }
        if (skipIntro) {
            return ALL_GRID_ACTIVE_CELLS
        }
        return activeCells
    }, [reducedMotion, skipIntro, activeCells])

    return (
        <div
            className={cn("absolute inset-0 -top-20 -left-20 -right-20 overflow-hidden", className)}
            aria-hidden
        >
            <AmbientOrbs reducedMotion={reducedMotion} staticRest={staticRest} />

            <motion.div
                className="absolute inset-0 grid grid-cols-10 gap-3 p-4 opacity-[0.38] sm:grid-cols-15 sm:gap-4 lg:grid-cols-20 lg:gap-5"
                initial={reducedMotion || staticRest ? false : { opacity: 0.22 }}
                animate={{ opacity: 0.38 }}
                transition={
                    reducedMotion || staticRest
                        ? { duration: 0 }
                        : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
                }
            >
                {Array.from({ length: GRID_CELL_COUNT }, (_, i) => (
                    <HeroGridCell key={i} active={gridCells.has(i)} />
                ))}
            </motion.div>

            <GradientVeils reducedMotion={reducedMotion} staticRest={staticRest} />
        </div>
    )
}
