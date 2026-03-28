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
};

export type Post = PostMeta & {
  contentHtml: string;
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

  const meta = data as Omit<PostMeta, "slug">;

  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...meta,
  };
}
