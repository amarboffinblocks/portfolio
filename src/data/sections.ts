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

export type TechStackItem = {
  name: string;
  category: "AI" | "Automation" | "Frontend" | "Backend" | "Database" | "Infrastructure";
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

export type VideoTestimonialItem = {
  thumbnail: string;
  videoUrl: string;
  title: string;
  clientName: string;
  clientRole: string;
  quote: string;
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
    image: "https://picsum.photos/seed/boffinblocks-project/1400/900",
    slug: "/projects/boffinblocks",
  },
  {
    title: "Lead qualification automation for inbound pipeline",
    company: "Northlane Labs",
    category: "automation",
    summary:
      "Built an AI-assisted qualification layer that scores inbound leads and routes priority accounts in real time.",
    impact: "31% faster lead response time",
    image: "https://picsum.photos/seed/lead-qualification-automation/1400/900",
    slug: "/projects/lead-qualification-automation",
  },
  {
    title: "Client onboarding portal with workflow orchestration",
    company: "Vertex Advisers",
    category: "platform",
    summary:
      "Designed a self-serve onboarding portal that reduced manual follow-ups and improved setup consistency.",
    impact: "46% reduction in onboarding operations effort",
    image: "https://picsum.photos/seed/client-onboarding-portal/1400/900",
    slug: "/projects/client-onboarding-portal",
  },
  {
    title: "AI-first knowledge base for support teams",
    company: "Helix Support",
    category: "product",
    summary:
      "Centralized fragmented documentation into an assistant-ready knowledge system for faster customer support.",
    impact: "2.2x support resolution throughput",
    image: "https://picsum.photos/seed/ai-knowledge-base-support/1400/900",
    slug: "/projects/ai-knowledge-base-support",
  },
  {
    title: "Revenue operations dashboard modernization",
    company: "OrbitMetrics",
    category: "analytics",
    summary:
      "Rebuilt reporting workflows and dashboard architecture for clearer KPI visibility and faster decisions.",
    impact: "54% faster reporting turnaround",
    image: "https://picsum.photos/seed/revops-dashboard-modernization/1400/900",
    slug: "/projects/revops-dashboard-modernization",
  },
  {
    title: "Multi-step approval automation for finance ops",
    company: "FinPath",
    category: "automation",
    summary:
      "Implemented policy-aware approval flows with exception handling and audit-ready event tracking.",
    impact: "63% reduction in approval bottlenecks",
    image: "https://picsum.photos/seed/finance-approval-automation/1400/900",
    slug: "/projects/finance-approval-automation",
  },
  {
    title: "Internal copilot rollout for delivery teams",
    company: "SprintForge",
    category: "ai systems",
    summary:
      "Launched role-based copilots to improve task execution quality and reduce repeat manual coordination.",
    impact: "38% increase in team delivery velocity",
    image: "https://picsum.photos/seed/internal-copilot-rollout/1400/900",
    slug: "/projects/internal-copilot-rollout",
  },
  {
    title: "Content operations system for multi-brand publishing",
    company: "ScaleMedia",
    category: "content",
    summary:
      "Built a reusable publishing workflow with review gates and distribution-ready metadata templates.",
    impact: "3x increase in publishing cadence",
    image: "https://picsum.photos/seed/content-ops-system/1400/900",
    slug: "/projects/content-ops-system",
  },
  {
    title: "Conversational assistant for sales enablement",
    company: "QuotaWorks",
    category: "sales",
    summary:
      "Delivered an AI assistant that surfaced pitch assets, objection handling, and context-aware responses.",
    impact: "27% lift in demo-to-proposal conversion",
    image: "https://picsum.photos/seed/sales-enablement-assistant/1400/900",
    slug: "/projects/sales-enablement-assistant",
  },
  {
    title: "Operational alerting and triage automation",
    company: "PulseGrid",
    category: "operations",
    summary:
      "Automated incident triage and team routing to reduce response delays across distributed operations teams.",
    impact: "41% faster incident acknowledgment",
    image: "https://picsum.photos/seed/alerting-triage-automation/1400/900",
    slug: "/projects/alerting-triage-automation",
  },
  {
    title: "Self-serve client reporting workspace",
    company: "Blueframe Studio",
    category: "platform",
    summary:
      "Created a client reporting workspace with export-ready summaries and configurable insight modules.",
    impact: "52% decrease in manual report requests",
    image: "https://picsum.photos/seed/client-reporting-workspace/1400/900",
    slug: "/projects/client-reporting-workspace",
  },
  {
    title: "Workflow intelligence layer for service delivery",
    company: "Axis Collective",
    category: "ai systems",
    summary:
      "Implemented workflow intelligence to detect blockers, recommend next actions, and improve SLA reliability.",
    impact: "29% improvement in on-time delivery rate",
    image: "https://picsum.photos/seed/workflow-intelligence-layer/1400/900",
    slug: "/projects/workflow-intelligence-layer",
  },
];

export const featured = caseStudies.slice(0, 3);
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

export const techStack: TechStackItem[] = [
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "n8n", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Supabase", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "GitHub Actions", category: "Infrastructure" },
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

export const videoTestimonials: VideoTestimonialItem[] = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "From manual ops to automated delivery",
    clientName: "Mike",
    clientRole: "Founder, GrowthAxis",
    quote:
      "BoffinBlocks helped us automate repetitive team workflows and cut turnaround time in half.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    title: "Launching an AI assistant in six weeks",
    clientName: "Samite",
    clientRole: "COO, Northlane Labs",
    quote:
      "They translated our business processes into a practical AI system the whole team now depends on.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    title: "An AI copilot that scaled our support",
    clientName: "Lauren",
    clientRole: "Head of CX, Helix Support",
    quote:
      "The copilot felt natural to our team from day one and reduced our backlog significantly.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=2vjPBrBU-TM",
    title: "A cleaner dashboard that improved decisions",
    clientName: "Kaity",
    clientRole: "Fashion Director, Atelier 9",
    quote:
      "The new product experience gave leadership instant clarity and reduced reporting bottlenecks.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=hY7m5jjJ9mM",
    title: "From spreadsheet chaos to clean systems",
    clientName: "Oakes",
    clientRole: "Director of Ops, Vertex Advisers",
    quote:
      "BoffinBlocks turned a tangled set of spreadsheets into a clean, observable operating system.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    title: "Building intelligent client onboarding",
    clientName: "Ryan",
    clientRole: "CEO, Axis Collective",
    quote:
      "Onboarding new clients went from a multi-week burden to a focused, mostly-automated flow.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
    title: "Internal tools the team actually loves",
    clientName: "Ritika",
    clientRole: "Head of Ops, Blueframe Studio",
    quote:
      "Adoption was the easy part. The team picked up the tools without any internal change-management effort.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=L_jWHffIx5E",
    title: "Scaling revenue ops with intelligent automation",
    clientName: "Priya",
    clientRole: "VP Revenue, OrbitMetrics",
    quote:
      "Pipeline visibility and forecasting that used to take days now happens automatically every morning.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    title: "Finance approvals that finally make sense",
    clientName: "Arjun",
    clientRole: "CFO, FinPath",
    quote:
      "Policy-aware approval flows removed an entire layer of manual coordination from our finance team.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
    title: "Content operations at 3x publishing speed",
    clientName: "Maya",
    clientRole: "Editorial Lead, ScaleMedia",
    quote:
      "We went from publishing weekly to publishing daily without adding a single person to the team.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    title: "AI agents that understand our domain",
    clientName: "Daniel",
    clientRole: "CTO, SprintForge",
    quote:
      "The agents shipped feel native to our product. They understand context the way our senior engineers do.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=RgKAFK5djSk",
    title: "From prototype to production in weeks",
    clientName: "Sofia",
    clientRole: "Head of Product, QuotaWorks",
    quote:
      "BoffinBlocks helped us cross the chasm from a clever prototype to a system our sales org now relies on daily.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
    title: "Operational alerts that route themselves",
    clientName: "Marcus",
    clientRole: "Director of Engineering, PulseGrid",
    quote:
      "Incident triage time dropped by nearly half. The team trusts the routing because the signals are clean.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    title: "A self-serve reporting workspace for clients",
    clientName: "Eva",
    clientRole: "Founder, Blueframe Studio",
    quote:
      "Our clients now answer their own reporting questions and we spend that time on strategy instead.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=CevxZvSJLk8",
    title: "Workflow intelligence for service delivery",
    clientName: "Ishaan",
    clientRole: "COO, Axis Collective",
    quote:
      "We can finally see blockers before they slip SLA. The intelligence layer pays for itself every week.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=hT_nvWreIhg",
    title: "Knowledge that scales with our support team",
    clientName: "Hannah",
    clientRole: "Head of Support, Helix Support",
    quote:
      "Onboarding new support reps is twice as fast because the assistant carries our institutional knowledge.",
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