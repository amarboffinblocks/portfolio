
"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function LenisScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const options = {
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.1,
    anchors: true,
    syncTouch: false,
  } as const;

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}