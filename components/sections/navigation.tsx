"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isElevated = isScrolled || isMobileMenuOpen;

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    if (href === "/") {
      return pathname === "/";
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        isElevated ? "top-4" : "bg-transparent top-10",
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto px-6 lg:px-8",
          isElevated && "border border-border rounded-full bg-background/95 shadow-soft backdrop-blur-xl top-0",
        )}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className={cn("text-2xl font-bold tracking-tight", isElevated ? "text-primary" : "text-white")}>
              Boffinblocks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              "hidden md:flex items-center gap-2 px-2 py-1",
              !isElevated && "rounded-full border border-border bg-card",
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashNavClick(e, link.href)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-200",
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
          <div className="hidden md:flex items-center gap-3">

            <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label="Toggle menu"
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
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0",
          )}
        >
          <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-soft">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleHashNavClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "rounded-xl px-4 py-3 transition-colors",
                  isActiveLink(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">

              <Link href="/contact" className={buttonVariants({ variant: "secondary" })} onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
