import { getAllPosts } from "@/lib/blog";
import { getMediumPosts } from "@/lib/medium";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog | Saurav Kumar",
  description: "Deep dives into backend engineering, distributed systems, system design, and software development by Saurav Kumar.",
  keywords: ["system design", "distributed systems", "backend engineering", "Redis", "software development"],
  authors: [{ name: "Saurav Kumar", url: "https://www.sauravx.com" }],
  alternates: { canonical: "https://www.sauravx.com/blog/" },
  openGraph: {
    title: "Blog | Saurav Kumar",
    description: "Deep dives into backend engineering, distributed systems, system design, and software development.",
    url: "https://www.sauravx.com/blog/",
    type: "website",
    siteName: "Saurav Kumar",
  },
  twitter: {
    card: "summary",
    title: "Blog | Saurav Kumar",
    description: "Deep dives into backend engineering and distributed systems.",
    creator: "@sauravkumar25",
  },
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
