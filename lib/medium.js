import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "medium-posts.json");

export function getMediumPosts() {
  if (!fs.existsSync(DATA_FILE)) return [];

  const posts = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  return posts;
}
