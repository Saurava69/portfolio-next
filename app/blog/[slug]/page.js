import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `https://www.sauravx.com/blog/${slug}/`;

  return {
    title: `${post.title} | Saurav Kumar`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Saurav Kumar"],
      siteName: "Saurav Kumar",
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function extractHeadings(html) {
  const headings = [];
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[3].replace(/<[^>]+>/g, "");
    headings.push({ level: parseInt(match[1]), id: match[2], text });
  }
  return headings;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-muted">Post not found.</p>
      </div>
    );
  }

  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(post.content);

  const htmlContent = result.toString();
  const headings = extractHeadings(htmlContent);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Saurav Kumar",
      url: "https://www.sauravx.com",
    },
    publisher: {
      "@type": "Person",
      name: "Saurav Kumar",
    },
    url: `https://www.sauravx.com/blog/${slug}/`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        &larr; Back to blog
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm text-muted">{post.date}</span>
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted border border-border px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {headings.length > 0 && (
        <nav className="mb-10 p-5 border border-border rounded-lg bg-card">
          <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
                <a
                  href={`#${heading.id}`}
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
