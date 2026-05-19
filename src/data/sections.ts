import { CheckCircle2, Compass, LucideIcon, Rocket, ShieldCheck } from "lucide-react";

export type CaseStudy = {
  title: string;
  company: string;
  category: string;
  summary: string;
  impact: string;
  image: string;
  slug: string;
};

export type CoreValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export type ServiceItem = {
  number: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
};

export type ProcessPoint = {
  title: string;
  icon: string;
  description: string;
};

export type ChoosePoint = {
  title: string;
  icon: string;
  description: string;
};

export type StatItem = {
  number: string;
  label: string;
};

export type TestimonialItem = {
  image: string;
  name: string;
  handle: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProjectItem = {
  title: string;
  company: string;
  category: string;
  summary: string;
  impact: string;
  image: string;
  slug: string;
}
export type BlogItem = {
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  category: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Automated customer onboarding with AI workflows",
    company: "boffinblocks",
    category: "service business",
    summary:
      "Replaced manual verification steps with AI-assisted flows to speed approvals and reduce operational overhead.",
    impact: "42% faster onboarding cycle",
    image: "/projects/boffinblocks/banner.png",
    slug: "/projects/boffinblocks",
  },
];

export const featured = caseStudies;
export const projects = caseStudies;

export const services: ServiceItem[] = [
  {
    number: "001",
    title: "Agentic AI Development",
    slug: "agentic-ai-development",
    icon: "code",
    description:
      "We build intelligent AI agents capable of reasoning, automation, task execution, and business workflow orchestration.",
  },
  {
    number: "002",
    title: "AI Workflow Automation",
    slug: "ai-workflow-automation",
    icon: "mobile",
    description:
      "We design AI-powered workflows that automate repetitive operations, approvals, notifications, and internal business processes.",
  },
  {
    number: "003",
    title: "Custom AI Solutions",
    slug: "ai-development",
    icon: "ai",
    description:
      "We develop tailored AI systems aligned with your operational workflows, data infrastructure, and business goals.",
  },
  {
    number: "004",
    title: "AI Integrations",
    slug: "data-engineering",
    icon: "data-engineering",
    description:
      "We integrate OpenAI, Claude, APIs, CRMs, databases, and third-party platforms into unified AI-powered systems.",
  },
  {
    number: "005",
    title: "Business Process Automation",
    slug: "devops",
    icon: "devops",
    description:
      "We automate manual operations using intelligent systems that improve scalability, efficiency, and operational consistency.",
  },
  {
    number: "006",
    title: "AI Chatbots & Assistants",
    slug: "ai-chatbots-assistants",
    icon: "search",
    description:
      "We create AI assistants and conversational systems trained on your business knowledge, workflows, and documentation.",
  },
  {
    number: "007",
    title: "Web & Platform Development",
    slug: "web-platform-development",
    icon: "palette",
    description:
      "We build scalable websites, dashboards, internal tools, and AI-enabled web applications for modern businesses.",
  },
  {
    number: "008",
    title: "Data & AI Infrastructure",
    slug: "data-ai-infrastructure",
    icon: "branding",
    description:
      "We build secure AI-ready infrastructure, databases, vector systems, and scalable backend architectures.",
  },
  {
    number: "009",
    title: "SEO & AI Content Systems",
    slug: "seo-ai-content-systems",
    icon: "marketing",
    description:
      "We create AI-assisted SEO content workflows, optimization systems, and search-focused content strategies.",
  },
  {
    number: "010",
    title: "AI Consulting & Strategy",
    slug: "ai-consulting-strategy",
    icon: "content",
    description:
      "We help businesses identify automation opportunities, design AI roadmaps, and implement scalable AI transformation strategies.",
  },
];

export const processPoints: ProcessPoint[] = [
  {
    title: "Discovery & Strategy",
    icon: "Compass",
    description:
      "We analyze your workflows, operational challenges, and business goals to identify high-impact AI automation opportunities.",
  },
  {
    title: "Architecture & Planning",
    icon: "Layers3",
    description:
      "We design the AI systems, integrations, workflows, and technical infrastructure required for scalable implementation.",
  },
  {
    title: "Development & Automation",
    icon: "Code2",
    description:
      "We build AI agents, automation workflows, integrations, dashboards, and intelligent systems tailored to your business.",
  },
  {
    title: "Deployment & Optimization",
    icon: "Rocket",
    description:
      "We deploy production-ready AI solutions, monitor performance, and continuously optimize workflows for long-term scalability.",
  },
];

export const choosePoints: ChoosePoint[] = [
  {
    title: "Automation-First Approach",
    icon: "Workflow",
    description:
      "We design intelligent workflows and AI-powered systems that automate repetitive operations and improve business efficiency.",
  },
  {
    title: "Custom AI Systems",
    icon: "Bot",
    description:
      "Every AI solution is tailored to your workflows, business goals, infrastructure, and operational requirements.",
  },
  {
    title: "Scalable AI Infrastructure",
    icon: "Gauge",
    description:
      "Our systems are built for scalability, reliability, maintainability, and long-term business growth.",
  },
  {
    title: "Modern AI & Integration Stack",
    icon: "Network",
    description:
      "We integrate AI models, APIs, databases, CRMs, and automation platforms into unified intelligent systems.",
  },
  {
    title: "Fast & Reliable Execution",
    icon: "ShieldCheck",
    description:
      "We deliver production-ready AI and automation solutions with strong engineering practices and rapid deployment cycles.",
  },
  {
    title: "Business-Focused AI Strategy",
    icon: "BriefcaseBusiness",
    description:
      "We focus on measurable operational impact, helping businesses automate processes, optimize workflows, and scale efficiently.",
  },
];

export const stats: StatItem[] = [
  { number: "24/7", label: "AI-Powered Operations" },
  { number: "10x", label: "Workflow Efficiency" },
  { number: "100+", label: "Automated Processes" },
  { number: "99%", label: "System Reliability" },
];

export const blogs: BlogItem[] = [
  {
    title: "Top Ecommerce Trends in 2026",
    slug: "top-ecommerce-trends-2026",
    description: "Discover the latest ecommerce trends shaping online businesses in 2026.",
    author: "Admin",
    date: "2026-05-18",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "AI Workflow Automation Playbook for Small Teams",
    slug: "ai-workflow-automation-playbook",
    description: "A practical guide to finding and automating repetitive workflows without overbuilding systems.",
    author: "BoffinBlocks Team",
    date: "2026-05-20",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "How Service Businesses Can Use Internal AI Copilots",
    slug: "internal-ai-copilots-service-business",
    description: "Design patterns for building role-based copilots that improve operational throughput.",
    author: "BoffinBlocks Product Team",
    date: "2026-05-24",
    category: "Product",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "Designing Better Client Dashboards for Decision Speed",
    slug: "designing-client-dashboards-decision-speed",
    description: "Key UX and data principles to make dashboards useful for day-to-day decision-making.",
    author: "BoffinBlocks Design Team",
    date: "2026-05-28",
    category: "Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "From Manual Ops to Scalable Systems in 90 Days",
    slug: "manual-ops-to-scalable-systems",
    description: "A phased roadmap to replace fragile manual processes with scalable operating workflows.",
    author: "BoffinBlocks Ops Team",
    date: "2026-06-01",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "Choosing the Right Stack for AI-Enabled Web Products",
    slug: "right-stack-ai-enabled-web-products",
    description: "How to select frameworks and infrastructure for maintainable AI-powered web applications.",
    author: "BoffinBlocks Engineering",
    date: "2026-06-04",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "Improving Team Adoption of New Internal Tools",
    slug: "improving-team-adoption-internal-tools",
    description: "Rollout and feedback loops that help teams adopt internal products faster.",
    author: "BoffinBlocks Product Team",
    date: "2026-06-08",
    category: "Product",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "How to Measure ROI of AI Features in Production",
    slug: "measure-roi-ai-features-production",
    description: "Metrics and instrumentation patterns to evaluate AI feature performance in real environments.",
    author: "BoffinBlocks Strategy Team",
    date: "2026-06-12",
    category: "Strategy",
    image: "/projects/boffinblocks/banner.png"
  },
  {
    title: "Building Content Systems That Actually Scale",
    slug: "building-content-systems-that-scale",
    description: "A system-first approach to publishing, maintaining, and optimizing high-quality content.",
    author: "BoffinBlocks Content Team",
    date: "2026-06-15",
    category: "Content",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "Common Mistakes in Automation Projects (and Fixes)",
    slug: "common-mistakes-automation-projects",
    description: "Frequent delivery mistakes teams make in automation initiatives and how to avoid them.",
    author: "BoffinBlocks Team",
    date: "2026-06-19",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=1400&auto=format&fit=crop&q=80"
  },
  {
    title: "Shipping Faster Without Breaking Delivery Quality",
    slug: "shipping-faster-without-breaking-quality",
    description: "Execution habits that help teams increase speed while protecting product quality and trust.",
    author: "BoffinBlocks Engineering",
    date: "2026-06-22",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1400&auto=format&fit=crop&q=80"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Avery Johnson",
    handle: "@averywrites",
  },
];

export const questions: FaqItem[] = [
  {
    question: "What services does Boffinblocks provide?",
    answer:
      "Boffinblocks specializes in agentic AI development, AI workflow automation, AI integrations, intelligent business systems, custom AI solutions, and scalable automation infrastructure.",
  },
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to intelligent AI systems capable of reasoning, decision-making, task execution, and workflow automation with minimal human intervention.",
  },
  {
    question: "Can you automate our existing business workflows?",
    answer:
      "Yes. We analyze your current operations and build AI-powered workflows that automate repetitive tasks, approvals, notifications, data processing, and business operations.",
  },
  {
    question: "Which AI models and technologies do you work with?",
    answer:
      "We work with modern AI technologies including OpenAI, Claude, LangChain, vector databases, n8n, Supabase, APIs, and custom AI infrastructure.",
  },
  {
    question: "Do you build custom AI agents for businesses?",
    answer:
      "Yes. We build custom AI agents tailored to your workflows, operational requirements, internal systems, and business objectives.",
  },
  {
    question: "Can your AI systems integrate with our existing tools?",
    answer:
      "Absolutely. We integrate AI systems with CRMs, databases, APIs, internal dashboards, payment systems, communication platforms, and third-party business tools.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes. We provide ongoing optimization, monitoring, maintenance, workflow improvements, and scaling support after deployment.",
  },
  {
    question: "How long does an AI automation project usually take?",
    answer:
      "Project timelines vary based on complexity, integrations, and workflow requirements. Most AI automation systems can be delivered within a few weeks after the discovery and planning phase.",
  },
];





export const coreValues: CoreValueItem[] = [
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
];