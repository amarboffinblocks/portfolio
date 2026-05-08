import {
  SiDocker,
  SiGithubactions,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const TECH_STACK = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Prisma", Icon: SiPrisma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
  { name: "Docker", Icon: SiDocker },
  { name: "GitHub Actions", Icon: SiGithubactions },
] as const;

export function TrustTechStackStripSection() {
  const featuredCard = "TypeScript";
  const LOOP_STACK = [...TECH_STACK, ...TECH_STACK];

  return (
    <section
      id="trust-tech-stack"
      className="px-2 md:px-4 -mt-4"
      aria-label="Trust and tech stack "
    >
      <div className="relative overflow-hidden border border-border rounded-b-2xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background to-transparent" />
        <div
          className="flex w-max [--scroll-end:-50%] [animation:scroll_28s_linear_infinite]"
          aria-label="Technology logos"
        >
          {LOOP_STACK.map(({ name, Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className={`group relative flex min-h-[110px] w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-none border-r border-border transition-colors duration-300 ${
                name === featuredCard
                  ? "bg-primary"
                  : "bg-muted/35 hover:bg-primary"
              }`}
            >
              <Icon
                className={`h-11 w-11 transition-colors duration-300 ${
                  name === featuredCard
                    ? "text-primary-foreground"
                    : "text-foreground/15 group-hover:text-primary-foreground"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
