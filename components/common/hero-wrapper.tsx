"use client";
import React from 'react'
import { Container } from './container'
import { cn } from '@/lib/utils'

const HeroWrapper = ({ className, roundedClassName, children }: { className?: string, roundedClassName?: string, children: React.ReactNode }) => {
    return (
        <section
            className="overflow-hidden p-2  md:p-4 "
            aria-labelledby="hero-heading"
        >
            <div
                className={cn("relative overflow-hidden rounded-2xl bg-primary  ", roundedClassName)}
            >

                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                        backgroundSize: "40px 40px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    }}
                />

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