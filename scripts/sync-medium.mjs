import { XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "..", "data", "medium-posts.json");
const MEDIUM_FEED_URL = "https://medium.com/feed/@sauravx25";

async function fetchRSS() {
  const res = await fetch(MEDIUM_FEED_URL);
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const feed = parser.parse(xml);

  const items = feed?.rss?.channel?.item;
  if (!items) return [];

  return (Array.isArray(items) ? items : [items]).map((item) => {
    const categories = item.category
      ? Array.isArray(item.category)
        ? item.category
        : [item.category]
      : [];

    const content = item["content:encoded"] || "";
    const description = content
      .replace(/<[^>]+>/g, "")
      .slice(0, 160)
      .trim() + "...";

    const imgMatch = content.match(
      /<img[^>]+src="(https:\/\/cdn-images-1\.medium\.com[^"]+)"/
    );
    const image = imgMatch ? imgMatch[1] : null;

    const guid = typeof item.guid === "object" ? item.guid["#text"] : item.guid;

    return {
      id: guid || item.link,
      title: item.title,
      url: item.link,
      date: new Date(item.pubDate).toISOString().split("T")[0],
      tags: categories,
      description,
      image,
    };
  });
}

async function sync() {
  console.log("Fetching Medium RSS...");
  const freshPosts = await fetchRSS();
  console.log(`Fetched ${freshPosts.length} posts from RSS`);

  let existing = [];
  if (existsSync(DATA_FILE)) {
    existing = JSON.parse(readFileSync(DATA_FILE, "utf-8"));
    console.log(`Existing posts in data file: ${existing.length}`);
  }

  const existingIds = new Set(existing.map((p) => p.id));
  const newPosts = freshPosts.filter((p) => !existingIds.has(p.id));

  if (newPosts.length === 0) {
    console.log("No new posts found.");
    return;
  }

  const merged = [...newPosts, ...existing].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2));
  console.log(`Added ${newPosts.length} new posts. Total: ${merged.length}`);
}

sync().catch((err) => {
  console.error("Sync failed:", err.message);
  process.exit(1);
});
