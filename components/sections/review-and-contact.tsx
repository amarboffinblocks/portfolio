"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundPattern from "../common/background-pattern";
import { Container } from "../common/container";
import { SectionHeading } from "../common/section-heading";
import TestimonialsCard from "../cards/testimonials-card";
import { InfiniteCarousel } from "../common/InfiniteCarousel";
import CtaSection from "./cta-section";

const footerLinks = {
    Work: [
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/#services" },
    ],
    Company: [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
    ],
    Legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
    ],
};

type CardT = {
    image: string;
    name: string;
    handle: string;
    date?: string;
};

const DEFAULT_DATA: CardT[] = [
    {
        image:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        name: "Briar Martin",
        handle: "@neilstellar",
    },
    {
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        name: "Avery Johnson",
        handle: "@averywrites",
    },
    {
        image:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        name: "Jordan Lee",
        handle: "@jordantalks",
    },
    {
        image:
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        name: "Avery Johnson",
        handle: "@averywrites",
    },
];

const ReviewAndContact = () => {
    return (
        <section className=" p-2 md:p-4 ">
            <div className="relative overflow-visible rounded-3xl bg-primary">
                <BackgroundPattern blockCount={82} minDistance={6.6} />
                <div className="relative z-10 pt-4 ">

                    {/* <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2 px-2 md:px-6"> */}
                        <CtaSection />
                    {/* </div> */}

                    <div className="relative z-10  py-26 ">
                        <SectionHeading
                            title={<>Hear what our <span className="text-accent"> clients say</span></>}
                            eyebrow="client Stories"
                            background="primary"
                            align="center"
                        />
                        <div className="mt-10 overflow-hidden">
                            <InfiniteCarousel items={DEFAULT_DATA} />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ReviewAndContact