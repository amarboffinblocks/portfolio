export type BlogPostIconKey = "calendar" | "book" | "clock";

export type BlogPostSection = {
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  author: string;
  image: string;
  iconKey: BlogPostIconKey;
  takeaways: string[];
  sections: BlogPostSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-automation-roi-playbook",
    category: "Strategy",
    title: "How AI automation creates compounding growth for service businesses",
    summary:
      "A practical framework to identify automation opportunities, prioritize quick wins, and scale without operational friction.",
    publishedAt: "May 2026",
    readTime: "8 min read",
    author: "BoffinBlocks Strategy Team",
    image: "/case-studies/finflow.svg",
    iconKey: "calendar",
    takeaways: [
      "Identify repetitive, low-variance workflows before automating.",
      "Measure ROI in time saved, quality gains, and turnaround speed.",
      "Keep human review in place for exceptions and compliance-sensitive steps.",
    ],
    sections: [
      {
        title: "Why service businesses feel the pressure first",
        paragraphs: [
          "Service businesses often feel the squeeze between rising client expectations and flat operational capacity. AI automation is not about replacing people - it is about removing repetitive work so your team can focus on judgment, relationships, and delivery quality.",
          "The most valuable automation opportunities are usually hidden in the day-to-day operational work that teams have normalized: manual updates, status chasing, repetitive approvals, and handoffs between tools.",
        ],
      },
      {
        title: "Where to find the highest-return automation opportunities",
        paragraphs: [
          "Start by mapping workflows end-to-end: intake, scheduling, billing, reporting, and follow-ups. Look for steps that are rule-heavy, high-volume, and low-variance. Those are your best candidates for a first automation wave with clear ROI.",
          "When the same action happens across multiple clients, team members, or service lines, the value compounds quickly because one improvement removes friction from the entire operating system.",
        ],
      },
      {
        title: "How to prioritize automation without overbuilding",
        paragraphs: [
          "Prioritize quick wins that free hours per week for multiple roles, then iterate toward deeper integrations across CRM, accounting, and support tools. Measure impact in time saved, error reduction, and client turnaround - not only in cost.",
          "Teams get better results when they sequence automation in layers: remove obvious manual work first, stabilize the workflow, then add intelligence where it actually improves decisions.",
        ],
      },
      {
        title: "What sustainable AI automation looks like",
        paragraphs: [
          "As automation expands, keep humans in the loop for exceptions and compliance-sensitive moments. A compounding model pairs reliable automation with clear ownership, so growth does not create more operational chaos.",
          "The goal is not to automate everything. The goal is to build a delivery system where your team spends more time on high-value work and less time pushing information between tools.",
        ],
      },
    ],
  },
  {
    slug: "internal-tools-adoption-guide",
    category: "Product",
    title: "Designing internal tools your team actually adopts",
    summary:
      "Learn workflow-first UX patterns that increase adoption, reduce manual handoffs, and improve team execution speed.",
    publishedAt: "March 2026",
    readTime: "7 min read",
    author: "BoffinBlocks Product Team",
    image: "/case-studies/opsgrid.svg",
    iconKey: "book",
    takeaways: [
      "Internal tools should be designed around tasks, not database objects.",
      "Context and next actions matter more than raw data density.",
      "Adoption improves when rollout happens in small, feedback-driven slices.",
    ],
    sections: [
      {
        title: "Why internal tools get ignored",
        paragraphs: [
          "Internal tools fail when they optimize for the database instead of the day-to-day job. Adoption starts with observing real workflows: where people context-switch, duplicate data entry, or work around the system with spreadsheets.",
          "If the tool adds friction at critical moments, teams will quietly rebuild their own process outside the product no matter how much functionality you ship.",
        ],
      },
      {
        title: "Design around tasks, not entities",
        paragraphs: [
          "Design screens around tasks, not entities. A single action - approve, dispatch, reconcile - should be reachable in one coherent flow with obvious next steps and safe defaults.",
          "Users should feel guided through the work, not forced to reconstruct the process from scattered data tables and disconnected forms.",
        ],
      },
      {
        title: "Give teams the context they need to move",
        paragraphs: [
          "Reduce handoffs by surfacing the right context at the right time: linked records, recent activity, and clear status. Pair that with lightweight notifications so teams trust the tool instead of bypassing it.",
          "The best internal systems lower the amount of remembering required. They bring relevant history, dependencies, and responsibility into one working surface.",
        ],
      },
      {
        title: "Treat adoption like an ongoing product outcome",
        paragraphs: [
          "Roll out in slices with champions in each team. Collect friction early, ship small improvements weekly, and document the happy path. Adoption is a product problem, not a training memo.",
          "A tool becomes sticky when people see that feedback turns into visible improvements quickly. That creates trust in the system and in the team behind it.",
        ],
      },
    ],
  },
  {
    slug: "maintainable-ai-features",
    category: "Engineering",
    title: "Building maintainable AI features in modern web applications",
    summary:
      "Architecture and delivery principles that keep AI features reliable, observable, and easy for teams to evolve.",
    publishedAt: "February 2026",
    readTime: "9 min read",
    author: "BoffinBlocks Engineering Team",
    image: "/case-studies/metriclane.svg",
    iconKey: "clock",
    takeaways: [
      "Treat AI features like service boundaries with versioned contracts.",
      "Observability should cover latency, usage, failures, and quality signals.",
      "Separate experimentation from production with rollbacks and guardrails.",
    ],
    sections: [
      {
        title: "Do not hide the AI layer inside frontend code",
        paragraphs: [
          "AI features age quickly if prompts, context windows, and model choices live only in frontend code. Treat the AI layer like any other service boundary: versioned prompts, structured outputs, and explicit fallbacks when confidence is low.",
          "That separation makes the system easier to debug, safer to evolve, and much less fragile when providers, pricing, or model behavior change over time.",
        ],
      },
      {
        title: "Observability is part of the feature, not an afterthought",
        paragraphs: [
          "Observability matters from day one. Log request metadata, latency, token usage, and outcome labels without storing content you should not retain. That data tells you when drift or regressions appear.",
          "Without visibility into quality and failure patterns, teams often discover issues only after customers lose trust in the feature.",
        ],
      },
      {
        title: "Protect production from experimentation",
        paragraphs: [
          "Separate experimentation from production paths. Use feature flags and shadow runs to compare model behavior before flipping traffic. Your team should be able to roll back a model change without redeploying the entire app.",
          "This keeps iteration speed high without turning every prompt or model adjustment into a hidden production risk.",
        ],
      },
      {
        title: "Maintainability comes from boring engineering discipline",
        paragraphs: [
          "Document the contract: expected inputs, output schema, and human review rules. Maintainable AI is boring engineering - clear interfaces, tests around parsing, and a path to swap providers when pricing or quality shifts.",
          "The teams that keep AI features healthy are usually the ones that make the system more explicit, not more magical.",
        ],
      },
    ],
  },
];
