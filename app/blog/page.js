import { getAllPosts } from "@/lib/blog";
import { getMediumPosts } from "@/lib/medium";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog | Saurav Kumar",
  description: "Thoughts on backend engineering, distributed systems, and software development.",
  alternates: { canonical: "https://www.sauravx.com/blog/" },
  openGraph: {
    title: "Blog | Saurav Kumar",
    description: "Thoughts on backend engineering, distributed systems, and software development.",
    url: "https://www.sauravx.com/blog/",
    type: "website",
    siteName: "Saurav Kumar",
  },
  twitter: { card: "summary", title: "Blog | Saurav Kumar" },
};

export default function Blog() {
  const localPosts = getAllPosts().map((p) => ({ ...p, source: "local" }));
  const mediumPosts = getMediumPosts().map((p) => ({ ...p, source: "medium" }));

  const allPosts = [...localPosts, ...mediumPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Blog</h1>
      <BlogList posts={allPosts} />
    </div>
  );
}
