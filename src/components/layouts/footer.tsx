"use client";

import Link from "next/link";
import { Container } from "../common/container";


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

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "X / Twitter", href: "https://x.com" },
];


export function Footer() {
  const year = new Date().getFullYear();

  return (

    <footer className="px-2 pb-2 md:px-4 md:pb-4 ">
      <div className="relative w-full overflow-hidden rounded-3xl bg-primary text-primary-foreground pt-4 ">



        <h2 className="pointer-events-none absolute inset-x-0 bottom-[-0.12em] z-0 text-center leading-[0.8] text-[clamp(4rem,15vw,12rem)] font-bold uppercase tracking-[0.23em] whitespace-nowrap text-primary-foreground/6">
          Boffinblocks
        </h2>
        <div className="relative z-20 backdrop-blur-xs">
          <Container className="">
            <div className="grid gap-10 p py-12 md:grid-cols-[1.15fr_1fr]   md:py-14">
              <div className="max-w-xl">
                <Link href="/" className="inline-flex items-center">
                  <span className="text-2xl font-semibold tracking-tight">BoffinBlocks</span>
                </Link>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
                  We design, build, and scale modern digital products with speed, clarity, and measurable business outcomes.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/90 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 ">
                {Object.entries(footerLinks).map(([title, links]) => (
                  <nav key={title} aria-label={`${title} footer links`}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/90">
                      {title}
                    </h3>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
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

            <div className="flex  flex-col items-start justify-between gap-3 border-t border-dotted border-white/25  py-5 text-sm text-primary-foreground/80 sm:flex-row sm:items-center ">
              <p>© {year} BoffinBlocks. All rights reserved.</p>
              <p className="font-mono text-xs tracking-[0.08em] uppercase text-primary-foreground/70">
                Built in Mohali, Punjab
              </p>
            </div>
          </Container>
        </div>
      </div>
    </footer>

  );
}


