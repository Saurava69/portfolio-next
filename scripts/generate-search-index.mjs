import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content/blog");
const MEDIUM_FILE = path.join(ROOT, "data/medium-posts.json");
const OUTPUT = path.join(ROOT, "public/search-index.json");

function getLocalPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const content = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(content);
      return {
        title: data.title || slug,
        slug,
        date: data.date || "",
        tags: data.tags || [],
        source: "local",
      };
    });
}

function getMediumPosts() {
  if (!fs.existsSync(MEDIUM_FILE)) return [];
  return JSON.parse(fs.readFileSync(MEDIUM_FILE, "utf-8")).map((p) => ({
    title: p.title,
    url: p.url,
    date: p.date,
    tags: p.tags,
    source: "medium",
  }));
}

function extractTextFromJSX(filePath) {
  if (!fs.existsSync(filePath)) return "";
  const content = fs.readFileSync(filePath, "utf-8");

  const strings = [];

  // Extract string literals (quoted text)
  const stringRegex = /["'`]([^"'`]{2,})["'`]/g;
  let match;
  while ((match = stringRegex.exec(content)) !== null) {
    const s = match[1];
    if (
      s.includes("className") ||
      s.includes("text-") ||
      s.includes("flex") ||
      s.includes("border-") ||
      s.includes("hover:") ||
      s.includes("rounded") ||
      s.includes("space-") ||
      s.includes("gap-") ||
      s.includes("grid") ||
      s.includes("mx-") ||
      s.includes("px-") ||
      s.includes("py-") ||
      s.includes("mt-") ||
      s.includes("mb-") ||
      s.includes("sm:") ||
      s.includes("from") ||
      s.includes("http") ||
      s.includes("/") ||
      s.includes("{") ||
      s.length < 3
    )
      continue;
    strings.push(s.toLowerCase());
  }

  // Extract array items like ["Java", "Spring Boot"].map
  const arrayRegex = /\[([^\]]+)\]\.map/g;
  while ((match = arrayRegex.exec(content)) !== null) {
    const items = match[1].match(/["']([^"']+)["']/g);
    if (items) {
      items.forEach((item) => strings.push(item.replace(/["']/g, "").toLowerCase()));
    }
  }

  // Extract JSX text content (text between > and <)
  const jsxTextRegex = />\s*([A-Za-z][^<>{}"']{3,})\s*</g;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    const text = match[1].trim();
    if (text.length > 3 && !text.includes("className")) {
      strings.push(text.toLowerCase());
    }
  }

  return [...new Set(strings)].join(" ");
}

const routes = [
  { title: "Experience", url: "/experience", file: "app/experience/page.js" },
  { title: "Education", url: "/education", file: "app/education/page.js" },
  { title: "Projects", url: "/projects", file: "app/projects/page.js" },
  { title: "Skills", url: "/skills", file: "app/skills/page.js" },
  { title: "Contact", url: "/contact", file: "app/contact/page.js" },
].map((r) => ({
  title: r.title,
  url: r.url,
  content: extractTextFromJSX(path.join(ROOT, r.file)),
  type: "page",
}));

const posts = [...getLocalPosts(), ...getMediumPosts()].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const index = { routes, posts };

fs.writeFileSync(OUTPUT, JSON.stringify(index));
console.log(`Search index generated: ${routes.length} pages, ${posts.length} posts`);
