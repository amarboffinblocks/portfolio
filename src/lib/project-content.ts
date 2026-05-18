import { readFile } from "node:fs/promises";
import path from "node:path";

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectKpi = {
  label: string;
  value: string;
};

export type ProjectMarkdownContent = {
  challenge: string[];
  solution: string[];
  outcomes: string[];
  deliverables: string[];
  kpis: ProjectKpi[];
  gallery: ProjectGalleryItem[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

const PROJECTS_DIR = path.join(process.cwd(), "src/data/projects");

function parseParagraphs(body: string): string[] {
  return body
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/\n+/g, " "));
}

function parseBullets(body: string): string[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
    .filter(Boolean);
}

function parseGallery(body: string): ProjectGalleryItem[] {
  return parseBullets(body)
    .map((line) => {
      const [src, caption] = line.split("|").map((part) => part.trim());
      if (!src) return null;
      return {
        src,
        caption: caption ?? "Project image",
      };
    })
    .filter((item): item is ProjectGalleryItem => item !== null);
}

function parseKpis(body: string): ProjectKpi[] {
  return parseBullets(body)
    .map((line) => {
      const [label, ...rest] = line.split(":");
      const value = rest.join(":").trim();
      if (!label || !value) return null;
      return { label: label.trim(), value };
    })
    .filter((item): item is ProjectKpi => item !== null);
}

export function parseProjectMarkdown(raw: string): ProjectMarkdownContent {
  const normalized = raw.replace(/\r\n/g, "\n").trim();
  const blocks = normalized.split(/\n(?=##\s)/);

  const content: ProjectMarkdownContent = {
    challenge: [],
    solution: [],
    outcomes: [],
    deliverables: [],
    kpis: [],
    gallery: [],
    sections: [],
  };

  for (const block of blocks) {
    if (!block.startsWith("## ")) continue;

    const [headingLine, ...rest] = block.split("\n");
    const title = headingLine.replace(/^##\s+/, "").trim();
    const body = rest.join("\n").trim();
    const heading = title.toLowerCase();

    if (!title || !body) continue;

    if (heading === "gallery") {
      content.gallery = parseGallery(body);
      continue;
    }

    if (heading === "kpis") {
      content.kpis = parseKpis(body);
      continue;
    }

    if (heading === "outcomes") {
      content.outcomes = parseBullets(body);
      continue;
    }

    if (heading === "deliverables") {
      content.deliverables = parseBullets(body);
      continue;
    }

    if (heading === "challenge") {
      content.challenge = parseParagraphs(body);
      continue;
    }

    if (heading === "solution") {
      content.solution = parseParagraphs(body);
      continue;
    }

    const paragraphs = parseParagraphs(body);
    if (paragraphs.length > 0) {
      content.sections.push({
        title,
        paragraphs,
      });
    }
  }

  return content;
}

export async function getProjectMarkdownBySlug(
  slug: string,
): Promise<ProjectMarkdownContent | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug.toLowerCase()}.md`);

  try {
    const raw = await readFile(filePath, "utf8");
    return parseProjectMarkdown(raw);
  } catch {
    return null;
  }
}

export function normalizeProjectSlug(slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  const segments = clean.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? slug;
}
