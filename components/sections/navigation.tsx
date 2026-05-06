"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../common/container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name:"Blog", href: "/blog" },
  { name:"About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const isElevated = isScrolled || isMobileMenuOpen;

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      const targetHash = href.slice(1);
      return pathname === "/" && activeHash === targetHash;
    }
    if (href === "/") {
      return pathname === "/" && !activeHash;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    let previous = false;
    const handleScroll = () => {
      const next = window.scrollY > 20;
      if (next !== previous) {
        previous = next;
        setIsScrolled(next);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  const scrollToHash = (hash: string) => {
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHashNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("/#")) return;
    const hash = href.slice(1);
    if (pathname !== "/") return;
    e.preventDefault();
    scrollToHash(hash);
    window.history.replaceState(null, "", href);
    setActiveHash(hash);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500  ",
        isElevated ? "top-2  sm:top-3  md:top-4" : "top-3  sm:top-5  md:top-7",
      )}
    >
      <Container className=" " >
        <nav
          className={cn(
            " w-full px-4 sm:px-6 lg:px-8",
            isElevated &&
            "rounded-2xl border  border-border bg-background/95 shadow-soft backdrop-blur-xl md:rounded-full ",
          )}
        >
          <div className="flex h-16 items-center justify-between sm:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span
                className={cn(
                  "text-lg font-bold tracking-tight sm:text-xl lg:text-2xl",
                  isElevated ? "text-primary" : "text-white",
                )}
              >
                Boffinblocks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={cn(
                "hidden items-center gap-1 px-1 py-1 lg:flex",
                !isElevated && "rounded-full border border-border bg-card",
              )}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashNavClick(e, link.href)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors duration-200 xl:px-4",
                    isActiveLink(link.href)
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">

              <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-navigation-menu"
            className={cn(
              "overflow-hidden transition-all duration-300 lg:hidden",
              isMobileMenuOpen ? "max-h-[520px] pb-4 sm:pb-5" : "max-h-0",
            )}
          >
            <div className="mt-1 flex flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-soft sm:mt-2 sm:p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleHashNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm transition-colors sm:py-3 sm:text-base",
                    isActiveLink(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">

                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
