import { CheckCircle2, Compass, Rocket, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";

const CORE_VALUES = [
  {
    title: "Outcome-driven delivery",
    description:
      "We connect every sprint to business goals so progress is clear and measurable.",
    icon: Compass,
  },
  {
    title: "Reliable execution",
    description:
      "From architecture to QA, we keep quality high while shipping at startup speed.",
    icon: Rocket,
  },
  {
    title: "Long-term maintainability",
    description:
      "We build systems your team can scale and confidently own after launch.",
    icon: ShieldCheck,
  },
  {
    title: "Radical clarity",
    description:
      "We communicate early, document decisions, and keep stakeholders aligned end-to-end.",
    icon: CheckCircle2,
  },
] as const;

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="ABOUT US"
        title={`Helping Businesses`}
        highlight="Grow"
        description="Xtract helps businesses streamline operations and grow faster with AI-powered automation."
        stash={true}
      />

      <section className="relative py-14 lg:py-20">
        <Container>
          <SectionHeading
            className="mx-0"
            align="center"
            eyebrow="WHO WE ARE"
            title="A delivery-first team"
            highlight="built for momentum"
            description="We partner with ambitious teams to design, build, and ship software that moves the needle. Strategy, speed, and craft — with clear communication at every step."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className=" p-6 backdrop-blur sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  What you can expect
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We combine product thinking with strong engineering to help you launch
                  faster, iterate confidently, and scale without rewrites.
                </p>
                <ul className="mt-6 space-y-3 text-sm sm:text-base">
                  {[
                    "Clear scope, timelines, and weekly progress updates",
                    "Thoughtful UX and clean, maintainable code",
                    "Automation-first approach to reduce manual work",
                    "A reliable team that ships and supports after launch",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-primary p-6 text-white sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Our focus
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  Practical AI, modern web apps, and automation — implemented with
                  reliability and a strong handover so your team can own what we build.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "Product & UX", value: "Clarity" },
                    { label: "Engineering", value: "Quality" },
                    { label: "Delivery", value: "Speed" },
                    { label: "Support", value: "Ownership" },
                  ].map((pill) => (
                    <div
                      key={pill.label}
                      className="rounded-2xl p-4 bg-[#f9fafb] text-black"
                    >
                      <p className="text-xs tracking-wide ">
                        {pill.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold tracking-tight">
                        {pill.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14 lg:py-20">
        <Container>
          <SectionHeading
          headingClassName="text-center"
            className="items-center"
            align="center"
            eyebrow="VALUES"
            title="Our Core"
            highlight="Values"
            description="Principles that shape how we build, communicate, and deliver."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-3xl  bg-[#f9fafb] p-6  transition-colors  sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
                    <div className="absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />
                  </div>
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold tracking-tight sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <WorkProcessSection />



      <CtaSection />
    </main>
  );
}
