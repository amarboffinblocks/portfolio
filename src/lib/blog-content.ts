import { readFile } from "node:fs/promises";
import path from "node:path";

export type BlogMarkdownContent = {
  takeaways: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

const BLOGS_DIR = path.join(process.cwd(), "src/data/blogs");

function parseSectionBody(body: string): string[] {
  return body
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.replace(/\n+/g, " "));
}

export function parseBlogMarkdown(raw: string): BlogMarkdownContent {
  const normalized = raw.replace(/\r\n/g, "\n").trim();
  const blocks = normalized.split(/\n(?=##\s)/);

  const takeaways: string[] = [];
  const sections: BlogMarkdownContent["sections"] = [];

  for (const block of blocks) {
    if (!block.startsWith("## ")) {
      continue;
    }

    const [headingLine, ...rest] = block.split("\n");
    const title = headingLine.replace(/^##\s+/, "").trim();
    const body = rest.join("\n").trim();

    if (!title || !body) {
      continue;
    }

    if (title.toLowerCase() === "key takeaways") {
      for (const line of body.split("\n")) {
        const item = line.replace(/^\s*[-*]\s+/, "").trim();
        if (item) takeaways.push(item);
      }
      continue;
    }

    const paragraphs = parseSectionBody(body);
    if (paragraphs.length > 0) {
      sections.push({ title, paragraphs });
    }
  }

  return { takeaways, sections };
}

export async function getBlogMarkdownBySlug(
  slug: string,
): Promise<BlogMarkdownContent | null> {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);

  try {
    const raw = await readFile(filePath, "utf8");
    return parseBlogMarkdown(raw);
  } catch {
    return null;
  }
}
