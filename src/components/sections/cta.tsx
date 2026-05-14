
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook
} from "react-icons/si";
import { SectionHeading } from "../common/section-heading";
import { Container } from "../common/container";
import GridPattern from "../common/grid-pattern";
import { SectionWrapper } from "../common/section-wrapper";

const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png"
];

/** Stable % strings for inline styles — avoids SSR/client float formatting mismatches. */
function orbitPercent(value: number) {
  return `${Math.round(value * 10000) / 10000}%`;
}

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#000000" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function CtaSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <SectionWrapper >
      <Container>
        <div className="relative flex flex-col lg:flex-row  items-center justify-between lg:h-96 bg-primary backdrop-blur-sm text-foreground overflow-hidden rounded-3xl">
          <GridPattern size={40} />
          {/* Left side: Heading and Text */}
          <div className=" lg:w-1/2 z-10 flex flex-col items-start justify-center gap-10 py-10 px-4 lg:pl-14 ">
            <div>
              <SectionHeading title={<>Learn More About How We Can Help <span className="text-accent">You Grow</span></>} background="primary" align="left" />
              <p className="text-primary-foreground/80 max-w-lg mt-4">
                We design, build, and operate AI-powered workflows that remove manual
                bottlenecks so your team can focus on growth.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="w-full md:w-auto">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Right side: Orbit animation cropped to 1/4 */}
          <div className="relative z-10 w-full lg:w-1/2  lg:h-full flex items-end justify-center lg:items-center lg:justify-start overflow-hidden">
            <div className="relative w-full h-[22rem] translate-y-[50%] lg:w-[50rem] lg:h-[50rem] lg:translate-x-[50%] lg:translate-y-0 flex items-center justify-center">
              {/* Center Circle */}
              <div className="w-24 h-24 rounded-full bg-gray-50 dark:bg-gray-800 shadow-lg flex items-center justify-center">
                <FaReact className="w-12 h-12 text-blue-400" />
              </div>

              {/* Generate Orbits */}
              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
                const angleStep = (2 * Math.PI) / iconsPerOrbit;

                return (
                  <div
                    key={orbitIdx}
                    className="absolute rounded-full border-2 border-dotted border-white/30 "
                    style={{
                      width: size,
                      height: size,
                      animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                    }}
                  >
                    {iconConfigs
                      .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                      .map((cfg, iconIdx) => {
                        const angle = iconIdx * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);

                        return (
                          <div
                            key={iconIdx}
                            className="absolute bg-white dark:bg-gray-800 rounded-full p-2 "
                            style={{
                              left: orbitPercent(x),
                              top: orbitPercent(y),
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            {cfg.Icon ? (
                              <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                            ) : (
                              <img
                                src={cfg.img}
                                alt="icon"
                                className="w-8 h-8 object-contain"
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animation keyframes */}
          <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
      </Container>
    </SectionWrapper>
  );
}
