import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

// Keep at least one post here: `output: export` refuses to build a dynamic
// route whose generateStaticParams() comes back empty. Files prefixed with "_"
// are skipped, so they work as drafts.
export function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string) {
  const mod = await import(`../../content/blog/${slug}.mdx`);
  return { Content: mod.default, meta: mod.meta as PostMeta };
}

export async function getAllPosts() {
  const posts = await Promise.all(
    getSlugs().map(async (slug) => ({ slug, ...(await getPost(slug)) })),
  );
  return posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
