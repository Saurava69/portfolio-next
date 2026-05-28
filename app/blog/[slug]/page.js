import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeFigure from "rehype-figure";
import rehypeStringify from "rehype-stringify";
import Link from "next/link";
import Comments from "./Comments";
import PostLikes from "./PostLikes";
import Tags from "./Tags";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import MermaidDiagrams from "./MermaidDiagrams";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `https://www.sauravx.com/blog/${slug}/`;
  const ogImage = `https://www.sauravx.com/og-blog.png`; // fallback OG image

  return {
    title: `${post.title} | Saurav Kumar`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Saurav Kumar", url: "https://www.sauravx.com" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["https://www.sauravx.com"],
      siteName: "Saurav Kumar",
      tags: post.tags,
      images: [
        {
          url: post.image || ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@sauravkumar25",
      images: [post.image || ogImage],
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

function estimateReadingTime(content) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
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
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeFigure)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(post.content);

  const htmlContent = result.toString();
  const headings = extractHeadings(htmlContent);
  const readingTime = estimateReadingTime(post.content);

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <MermaidDiagrams />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 xl:grid-cols-[1fr_300px]">

          {/* Main content column */}
          <div className="min-w-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>

            {/* Post header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-accent/30 text-accent bg-accent/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {post.title}
              </h1>

              {post.description && (
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {post.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                    S
                  </div>
                  <span className="text-sm text-foreground font-medium">Saurav Kumar</span>
                </div>

                <span className="text-muted text-sm">{post.date}</span>

                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} min read
                </span>

                <PostLikes slug={slug} />
              </div>
            </header>

            {/* Mobile TOC */}
            <TableOfContents headings={headings} mobile={true} />

            {/* Article body */}
            <article
              id="blog-article"
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div className="mt-16 pt-8 border-t border-border">
              <Comments slug={slug} title={post.title} />
            </div>
          </div>

          {/* Sidebar — desktop TOC */}
          <TableOfContents headings={headings} />
        </div>
      </div>
    </>
  );
}
