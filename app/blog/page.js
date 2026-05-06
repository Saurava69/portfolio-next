import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

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
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted">Coming soon.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg p-6 hover:border-muted transition-colors">
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-muted mt-1 sm:mt-0">{post.date}</span>
                </div>
                {post.description && (
                  <p className="text-muted text-sm leading-relaxed">{post.description}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted border border-border px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
