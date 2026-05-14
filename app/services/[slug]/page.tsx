import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/common/container";
import CtaSection from "@/components/sections/cta-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { HOME_SERVICES } from "@/lib/data/services";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

type ServicePageContent = {
  intro: string;
  whoItsFor: string[];
  problems: string[];
  deliverables: string[];
  process: string[];
  outcomes: string[];
  faq: { question: string; answer: string }[];
};

const SERVICE_CONTENT: Record<string, ServicePageContent> = {
  branding: {
    intro:
      "We build brand systems that give growing businesses a sharper identity, clearer positioning, and more confidence across every customer touchpoint.",
    whoItsFor: [
      "Founders launching a new business or product line",
      "Service companies that need a more credible visual identity",
      "Teams rebranding after growth, repositioning, or expansion",
    ],
    problems: [
      "Your brand looks inconsistent across website, social, and sales materials",
      "You struggle to stand out in a crowded market",
      "Your visual identity no longer reflects the quality of your service",
    ],
    deliverables: [
      "Logo and visual identity direction",
      "Typography, color, and brand usage guidelines",
      "Marketing and digital application assets",
      "A practical system your team can use consistently",
    ],
    process: [
      "Discovery around business goals, audience, and competitors",
      "Visual direction exploration and refinement",
      "Brand system development and real-world application design",
      "Final handoff with reusable guidelines and assets",
    ],
    outcomes: [
      "Stronger positioning in your market",
      "A more credible and memorable brand presence",
      "Faster design decisions across future campaigns and products",
    ],
    faq: [
      {
        question: "Do you only design logos?",
        answer:
          "No. We focus on full brand systems so your identity works consistently across website, marketing, and product touchpoints.",
      },
      {
        question: "Can you refresh an existing brand instead of starting over?",
        answer:
          "Yes. We can evolve your current identity, tighten the system, and improve consistency without losing what already works.",
      },
    ],
  },
  development: {
    intro:
      "We design and build high-performance websites and digital products that help businesses launch faster, convert better, and scale with confidence.",
    whoItsFor: [
      "Service businesses that need a stronger, more modern website",
      "Founders launching new digital products or MVPs",
      "Teams replacing slow, outdated, or hard-to-maintain web systems",
    ],
    problems: [
      "Your current website does not reflect the quality of your business",
      "You need faster delivery without compromising code quality",
      "Your product or site is difficult to maintain or scale",
    ],
    deliverables: [
      "Responsive frontend and backend implementation",
      "CMS, APIs, and third-party integrations",
      "Performance, accessibility, and SEO-ready foundations",
      "Launch support and maintainable code handoff",
    ],
    process: [
      "Scope and technical planning",
      "Wireframing or UI alignment based on the project needs",
      "Sprint-based build, review, and iteration",
      "QA, launch, and post-launch improvements",
    ],
    outcomes: [
      "A faster and more reliable digital experience",
      "Improved conversion and customer trust",
      "A codebase your team can confidently extend",
    ],
    faq: [
      {
        question: "Can you build from an existing design?",
        answer:
          "Yes. We can work from your existing Figma files or handle both design and development together if needed.",
      },
      {
        question: "Do you support the website after launch?",
        answer:
          "Yes. We offer post-launch support for fixes, improvements, performance work, and ongoing feature updates.",
      },
    ],
  },
  "seo-optimization": {
    intro:
      "We improve technical SEO, content structure, and search visibility so your business attracts more qualified traffic over time.",
    whoItsFor: [
      "Businesses that want stronger organic lead generation",
      "Teams with good services but weak search visibility",
      "Websites that have content but poor technical SEO foundations",
    ],
    problems: [
      "Your site is not ranking for the services you actually want to sell",
      "Technical issues are limiting discoverability and performance",
      "Content exists, but it is not structured to support search intent",
    ],
    deliverables: [
      "Technical SEO audit and issue prioritization",
      "On-page SEO improvements and content structure guidance",
      "Keyword mapping aligned to business goals",
      "Tracking setup for rankings, traffic, and performance",
    ],
    process: [
      "Baseline SEO and website health audit",
      "Priority fix roadmap across technical and on-page work",
      "Implementation and content collaboration",
      "Ongoing review of rankings and conversion signals",
    ],
    outcomes: [
      "Higher visibility for service-related searches",
      "A healthier, faster, and more crawlable website",
      "More qualified inbound traffic with stronger long-term value",
    ],
    faq: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a compounding channel. Some technical improvements help quickly, but meaningful ranking growth usually takes sustained work over multiple months.",
      },
      {
        question: "Do you write content too?",
        answer:
          "We can guide content structure, messaging, and SEO priorities, and we can collaborate on content production where needed.",
      },
    ],
  },
  "ui-ux-design": {
    intro:
      "We create interfaces and product experiences that reduce friction, improve clarity, and help users move through your product or service with confidence.",
    whoItsFor: [
      "Teams building new digital products or internal tools",
      "Businesses redesigning weak or outdated user experiences",
      "Founders who need a cleaner bridge between strategy and development",
    ],
    problems: [
      "Your current interface feels confusing or inconsistent",
      "Users are dropping off because the flow is unclear",
      "Your product lacks a reusable, scalable design foundation",
    ],
    deliverables: [
      "User journeys, flows, and structure planning",
      "Wireframes and high-fidelity UI screens",
      "Reusable design systems and components",
      "Developer-ready handoff for implementation",
    ],
    process: [
      "Research and requirement mapping",
      "Flow definition and wireframe validation",
      "Visual design and design system development",
      "Handoff support during implementation",
    ],
    outcomes: [
      "A more intuitive and cohesive user experience",
      "Faster design-to-development workflows",
      "Higher engagement, usability, and conversion quality",
    ],
    faq: [
      {
        question: "Do you only design, or can you also build?",
        answer:
          "We can do both. Many clients work with us because we handle UX, UI, and implementation as one connected delivery process.",
      },
      {
        question: "Can you improve an existing product instead of redesigning everything?",
        answer:
          "Yes. We can identify the most important friction points and improve specific journeys without forcing a full redesign.",
      },
    ],
  },
  "ai-development": {
    intro:
      "We build practical AI products, copilots, and automation workflows that remove repetitive work and create measurable operational leverage.",
    whoItsFor: [
      "Service businesses looking to automate delivery and operations",
      "Teams exploring AI copilots, assistants, or internal tools",
      "Founders who want real business outcomes from AI, not just experiments",
    ],
    problems: [
      "Your team spends too much time on repetitive manual tasks",
      "Important workflows live across disconnected tools and handoffs",
      "You want to use AI meaningfully but do not know where to start",
    ],
    deliverables: [
      "AI workflow strategy and solution architecture",
      "Prompt, context, and automation pipeline design",
      "Integrations across existing tools and systems",
      "Guardrails, testing, and rollout support",
    ],
    process: [
      "Use-case discovery and ROI-focused prioritization",
      "Prototype and validation with real workflows",
      "System build, integration, and review loops",
      "Production rollout with monitoring and iteration",
    ],
    outcomes: [
      "Reduced manual work across key business operations",
      "Faster response, decision, and delivery cycles",
      "AI systems that are useful, maintainable, and business-aligned",
    ],
    faq: [
      {
        question: "Can you work with our existing tools and processes?",
        answer:
          "Yes. Most of our AI and automation work is designed to fit into the systems your team already uses instead of forcing a full reset.",
      },
      {
        question: "Do you help define the right AI use cases?",
        answer:
          "Yes. We usually start by identifying where AI can create the most leverage before jumping into implementation.",
      },
    ],
  },
  "data-engineering": {
    intro:
      "We build data pipelines and reporting foundations that help teams trust their numbers, move faster, and make better decisions with less manual effort.",
    whoItsFor: [
      "Businesses with growing operational and reporting complexity",
      "Teams that need cleaner data for BI, automation, or AI systems",
      "Companies struggling with fragmented reporting workflows",
    ],
    problems: [
      "Data is scattered across tools and hard to trust",
      "Reporting takes too much manual effort every week",
      "Your systems are not ready to support analytics or AI reliably",
    ],
    deliverables: [
      "Data ingestion and transformation pipelines",
      "Warehouse-ready models and documentation",
      "Validation, quality checks, and monitoring",
      "Foundations for reporting, BI, and downstream automation",
    ],
    process: [
      "Source mapping and architecture planning",
      "Pipeline and model implementation",
      "Validation, testing, and observability setup",
      "Documentation and handoff for long-term use",
    ],
    outcomes: [
      "More reliable and timely reporting",
      "Less operational effort spent reconciling data",
      "A stronger foundation for analytics and AI initiatives",
    ],
    faq: [
      {
        question: "Can you work with messy existing data sources?",
        answer:
          "Yes. A big part of our job is bringing structure to fragmented systems and creating a practical path toward better data reliability.",
      },
      {
        question: "Do you only build pipelines, or dashboards too?",
        answer:
          "We focus on strong data foundations first and can also support reporting layers depending on the scope.",
      },
    ],
  },
  "cloud-infrastructure": {
    intro:
      "We design cloud infrastructure that supports reliable delivery, secure growth, and cleaner operations as your product or service scales.",
    whoItsFor: [
      "Teams preparing for growth, higher traffic, or more complex deployments",
      "Businesses that need a more secure and observable cloud setup",
      "Products with infrastructure that has become hard to manage safely",
    ],
    problems: [
      "Your environments are fragile, inconsistent, or poorly documented",
      "Scaling is increasing operational risk and deployment stress",
      "Monitoring, security, or cost controls are not yet mature enough",
    ],
    deliverables: [
      "Cloud architecture and environment design",
      "Infrastructure setup and deployment workflows",
      "Security, observability, and secrets management baseline",
      "Runbooks and team handoff documentation",
    ],
    process: [
      "Infrastructure audit and topology planning",
      "Environment setup and automation",
      "Hardening, monitoring, and reliability improvements",
      "Documentation and operational handoff",
    ],
    outcomes: [
      "More resilient production infrastructure",
      "Lower delivery risk during growth",
      "A clearer operational foundation for the team",
    ],
    faq: [
      {
        question: "Can you improve our current setup without rebuilding everything?",
        answer:
          "Yes. We can strengthen the highest-risk parts first and improve the system incrementally where that makes the most sense.",
      },
      {
        question: "Do you help with observability and alerts too?",
        answer:
          "Yes. We include monitoring, logging, and operational visibility as part of a healthy infrastructure foundation.",
      },
    ],
  },
  devops: {
    intro:
      "We streamline deployment, release, and operational workflows so your team can ship more consistently with less friction and fewer surprises.",
    whoItsFor: [
      "Teams whose delivery process feels slower than it should",
      "Products dealing with unreliable deployments or release stress",
      "Growing engineering teams that need better operational discipline",
    ],
    problems: [
      "Releases are too manual, slow, or risky",
      "Your team spends too much time on repetitive operational work",
      "You lack confidence in CI/CD, rollback, or deployment visibility",
    ],
    deliverables: [
      "CI/CD pipeline design and optimization",
      "Release automation and rollback planning",
      "Operational dashboards, alerts, and reliability improvements",
      "Documentation to make delivery more repeatable",
    ],
    process: [
      "Delivery bottleneck review and prioritization",
      "Pipeline automation and policy setup",
      "Monitoring and release workflow improvements",
      "Enablement for the internal team after rollout",
    ],
    outcomes: [
      "Shorter lead time from development to production",
      "More reliable and repeatable releases",
      "A calmer, more scalable delivery process",
    ],
    faq: [
      {
        question: "Can you work with our existing CI/CD platform?",
        answer:
          "Yes. We usually improve what is already in place unless there is a clear reason to redesign the delivery stack.",
      },
      {
        question: "Do you also help teams adopt the new workflow?",
        answer:
          "Yes. We document the setup and support team onboarding so the improvements actually stick after implementation.",
      },
    ],
  },
};

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return HOME_SERVICES.map((service) => ({ slug: toSlug(service.title) }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = HOME_SERVICES.find((item) => toSlug(item.title) === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <PageHeroSection eyebrow="SERVICE DETAIL" title={service.title} breadcrumb stash />

      <section className="relative py-14 lg:py-20">
        <Container>
          <Link
            href="/#services"
            className={buttonVariants({ variant: "outline", className: "h-10 rounded-full px-4" })}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <article className="rounded-3xl bg-card p-6 shadow-soft lg:col-span-7 lg:p-8">
              <p className="text-sm leading-8 text-muted-foreground sm:text-base">{content.intro}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-background p-5">
                  <h2 className="text-lg font-semibold tracking-tight">Who this is for</h2>
                  <ul className="mt-4 space-y-3">
                    {content.whoItsFor.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                        <Target className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-background p-5">
                  <h2 className="text-lg font-semibold tracking-tight">Problems we solve</h2>
                  <ul className="mt-4 space-y-3">
                    {content.problems.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">What we deliver</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {content.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl bg-background px-4 py-4 text-sm leading-7 text-muted-foreground">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
                  <div className="mt-4 grid gap-4">
                    {content.process.map((step, index) => (
                      <div key={step} className="flex gap-4 rounded-2xl border border-border/70 px-4 py-4">
                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-soft lg:p-8">
                <h2 className="text-2xl font-semibold tracking-tight">Expected outcomes</h2>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/80">
                  Our engagements are shaped around business impact, not just output or activity.
                </p>
                <ul className="mt-6 space-y-3">
                  {content.outcomes.map((item) => (
                    <li key={item} className="rounded-2xl bg-white/10 px-4 py-4 text-sm leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "secondary", className: "w-full rounded-full" })}
                  >
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className={buttonVariants({ variant: "outline", className: "w-full rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-primary" })}
                  >
                    View related work
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-card p-6 shadow-soft lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Why BoffinBlocks</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">A delivery partner built for momentum</h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Clear execution from strategy through launch",
                    "Design, development, and automation in one workflow",
                    "Business-first recommendations, not generic deliverables",
                    "Support that continues beyond the first release",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-8 lg:py-12">
        <Container>
          <div className="rounded-[2rem] bg-card p-6 shadow-soft lg:p-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Frequently asked questions</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Things clients usually ask before we begin</h2>
            </div>

            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {content.faq.map((item, index) => (
                  <AccordionItem key={item.question} value={`service-faq-${index + 1}`} className="border-b border-border/70">
                    <AccordionTrigger className="py-5 text-left font-mono text-base hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
