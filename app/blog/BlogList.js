"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const POSTS_PER_PAGE = 6;

export default function BlogList({ posts }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter((post) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={search}
          onChange={handleSearch}
          className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {paginated.length === 0 ? (
        <p className="text-muted">No posts found.</p>
      ) : (
        <div className="space-y-6">
          {paginated.map((post) => (
            <article
              key={post.slug || post.url}
              className="border border-border rounded-lg overflow-hidden hover:border-muted transition-colors"
            >
              {post.source === "local" ? (
                <Link href={`/blog/${post.slug}`} className="flex group">
                  <PostCard post={post} />
                </Link>
              ) : (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex group"
                >
                  <PostCard post={post} external />
                </a>
              )}
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm border border-border rounded-lg hover:border-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-muted">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm border border-border rounded-lg hover:border-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

function PostCard({ post, external }) {
  return (
    <>
      {post.image && (
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-card">
          {post.source === "local" ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
      <div className="p-4 sm:p-6 flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
          <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
            {post.title}
            {external && (
              <svg
                className="w-3.5 h-3.5 text-muted shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </h2>
          <span className="text-xs text-muted mt-1 sm:mt-0">{post.date}</span>
        </div>
        {post.description && (
          <p className="text-muted text-sm leading-relaxed line-clamp-2">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted border border-border px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
