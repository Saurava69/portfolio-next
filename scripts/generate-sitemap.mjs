import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://www.sauravx.com";
const BLOG_DIR = path.join(process.cwd(), "content/blog");

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/experience/", priority: "0.8", changefreq: "monthly" },
  { path: "/education/", priority: "0.7", changefreq: "yearly" },
  { path: "/projects/", priority: "0.8", changefreq: "monthly" },
  { path: "/skills/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact/", priority: "0.6", changefreq: "yearly" },
  { path: "/blog/", priority: "0.8", changefreq: "weekly" },
];

function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const content = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(content);
      return { slug, date: data.date || "" };
    });
}

function generateSitemap() {
  const posts = getBlogPosts();

  const urls = staticPages.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`
  );

  for (const post of posts) {
    urls.push(`  <url>
    <loc>${SITE_URL}/blog/${post.slug}/</loc>${post.date ? `\n    <lastmod>${post.date}</lastmod>` : ""}
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);
  console.log(`Sitemap generated with ${urls.length} URLs`);
}

generateSitemap();
