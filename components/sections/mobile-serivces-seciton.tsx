"use client";

import { ReactNode, useRef } from "react";
import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";
import { Service, ServiceCard } from "../cards/service-card";
import { HOME_SERVICES } from "@/lib/data/services";
import { motion, useScroll, useTransform } from "framer-motion";

type StickyCardProps = {
    index: number;
    total: number;
    service: Service;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    range: [number, number];
    targetScale: number;
};

function StickyCard({ index, total, service, progress, range, targetScale }: StickyCardProps) {
    const scale = useTransform(progress, range, [1, targetScale]);

    const topOffset = `calc(-5vh + ${index * 20 + 250}px)`;

    return (
        <div className="sticky top-32 flex items-center justify-center">
            <motion.div
                style={{
                    scale,
                    top: topOffset,
                }}
                className="origin-top w-full "
            >
                <ServiceCard service={service} className="w-full" />
            </motion.div>
        </div>
    );
}

type MobileServiceSectionProps = {
    services?: Service[];
    title?: ReactNode;
    highlight?: string;
    description?: string;
};

const MobileServiceSection = ({
    services = HOME_SERVICES,
    title = (
        <>
            Built for speed, scale, and{" "}
            <span className="text-primary">real-world delivery.</span>
        </>
    ),
    description = "End-to-end capabilities to design, ship, and grow modern AI-powered products without compromising quality.",
}: MobileServiceSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            id="services"
            className="relative w-full md:hidden  py-10 lg:py-28 "
            aria-labelledby="services-heading"
        >
            <Container>
                <div className="mb-10 text-center">
                    <SectionHeading
                        align="center"
                        id="services-heading"
                        title={title}
                        description={description}
                    />
                </div>

                <div className="relative flex flex-col gap-y-4">
                    {services.map((service, i) => {
                        const targetScale = Math.max(0.5, 1 - (services.length - i - 1) * 0.1);
                        const range: [number, number] = [i / services.length, 1];

                        return (
                            <StickyCard
                                key={service.number}
                                index={i}
                                total={services.length}
                                service={service}
                                progress={scrollYProgress}
                                range={range}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default MobileServiceSection;