// lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

// ================= TYPES =================

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  image?: string;
  slug: string;
  translations?: {
    ar?: { title: string; description: string };
    en?: { title: string; description: string };
  };
};

export type Post = PostMeta & {
  contentHtml: string; // Default/Original content
  contentHtmlAr?: string; // Explicit Arabic section
  contentHtmlEn?: string; // Explicit English section
};

// ================= GET ALL POSTS =================

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    const meta = data as Omit<PostMeta, "slug">;

    return {
      slug,
      ...meta,
    };
  });
}

// ================= GET SINGLE POST =================

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  // --- CONTENT PARSING: MULTILINGUAL SECTIONS ---
  // We look for <!-- CONTENT:ar --> and <!-- CONTENT:en --> tags.
  const arMatch = content.match(/<!-- CONTENT:ar -->([\s\S]*?)(?=<!-- CONTENT:en -->|$)/);
  const enMatch = content.match(/<!-- CONTENT:en -->([\s\S]*?)(?=<!-- CONTENT:ar -->|$)/);

  const arContent = arMatch ? arMatch[1].trim() : content.trim();
  const enContent = enMatch ? enMatch[1].trim() : "";

  // Process both sections to HTML
  const processedAr = await remark().use(html).process(arContent);
  const processedEn = await remark().use(html).process(enContent);

  const contentHtmlAr = processedAr.toString();
  const contentHtmlEn = processedEn.toString();

  const meta = data as Omit<PostMeta, "slug">;

  return {
    slug,
    contentHtml: contentHtmlAr || contentHtmlEn, // Fallback to whatever is available
    contentHtmlAr,
    contentHtmlEn,
    ...meta,
  };
}
