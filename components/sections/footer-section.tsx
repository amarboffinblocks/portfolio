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
export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <>

{/* <section className="py-32">

            <CtaSection />
</section> */}

    <footer className=" p-2 md:p-4 mt-64">
      <div className="relative overflow-visible rounded-3xl bg-primary">
        <BackgroundPattern blockCount={82} minDistance={6.6} />
        <div className="relative z-10 ">

          <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2 px-2 md:px-6">
            <CtaSection />
          </div>

          <div className="relative z-10  py-32 pt-72">
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

          <Container className="relative z-10 h-full ">
            <div className="rounded-t-3xl bg-background  text-foreground   ">
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] px-8 py-14">
                <div className="max-w-lg">
                  <Link href="/" className="inline-flex items-center">
                    <span className="text-2xl font-semibold tracking-tight">BoffinBlocks</span>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    We design, build, and scale modern digital products with speed and quality.
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                  {Object.entries(footerLinks).map(([title, links]) => (
                    <nav key={title} aria-label={`${title} footer links`}>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {title}
                      </h3>
                      <ul className="space-y-2">
                        {links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="text-sm text-foreground/90 transition-colors hover:text-primary"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  ))}
                </div>
              </div>

              <div className=" flex flex-col items-start justify-between gap-3 border-t border-border  px-8 py-6  text-sm text-foreground sm:flex-row sm:items-center ">
                <p>© {year} BoffinBlocks. All rights reserved.</p>
                <p className="font-semibold font-mono">Built in Mohali, Punjab</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>

    </>
  );
}


