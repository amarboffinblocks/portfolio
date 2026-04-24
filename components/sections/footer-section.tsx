import Link from "next/link";

const footerLinks = {
  Work: [
    { name: "Case Studies", href: "/#case-studies" },
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

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative p-2 sm:p-4">
      <div className="rounded-3xl bg-[#384357] py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md shrink-0">
              <Link href="/" className="mb-6 inline-flex items-center gap-2">
                <span className="text-lg font-semibold tracking-tight text-white">BoffinBlocks</span>
              </Link>

              <p className="text-sm leading-relaxed text-slate-300">
                The complete platform to build, deploy, and scale AI-powered applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-end lg:gap-x-12 xl:gap-x-16">
              {Object.entries(footerLinks).map(([title, links]) => (
                <nav key={title} aria-label={`${title} footer links`}>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-200/90 transition-colors hover:text-white"
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
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
          <p className="text-xs tracking-wide text-slate-300/90">
            © {year} BOFFINBLOCKS. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-200/90">
            <span className="flex items-center gap-2">
              boffinblocks@gmail.com
            </span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
