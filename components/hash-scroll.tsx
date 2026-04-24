"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * After client navigation to `/#section`, scroll to the matching element.
 * (Browser default scroll can miss targets that mount after hydration.)
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;
      const id = decodeURIComponent(raw);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    const t1 = window.setTimeout(scrollToHash, 0);
    const t2 = window.setTimeout(scrollToHash, 120);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
