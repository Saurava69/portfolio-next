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

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Blog</h1>

      {localPosts.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-foreground mb-6">Posts</h2>
          <BlogList posts={localPosts} />
        </>
      )}

      {mediumPosts.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-foreground mb-6 mt-16">Medium</h2>
          <BlogList posts={mediumPosts} />
        </>
      )}
    </div>
  );
}
