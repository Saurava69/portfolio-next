"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState({ routes: [], posts: [] });
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  useEffect(() => {
    if (open && index.routes.length === 0) {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
      fetch(`${basePath}/search-index.json`)
        .then((r) => r.json())
        .then(setIndex)
        .catch(() => {});
    }
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const q = query.toLowerCase().trim();

  const filteredRoutes = q
    ? index.routes.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.content.includes(q)
      )
    : index.routes;

  const filteredPosts = q
    ? index.posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    : index.posts.slice(0, 5);

  const modal = open ? (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div ref={modalRef} className="relative w-full max-w-lg mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <svg className="w-5 h-5 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, blogs, skills..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted text-sm focus:outline-none"
          />
          <kbd className="hidden sm:inline text-xs text-muted border border-border px-1.5 py-0.5 rounded">ESC</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredRoutes.length > 0 && (
            <div className="mb-2">
              <p className="text-xs text-muted px-2 py-1 uppercase tracking-wider">Pages</p>
              {filteredRoutes.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-card transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm text-foreground">{r.title}</span>
                </a>
              ))}
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div>
              <p className="text-xs text-muted px-2 py-1 uppercase tracking-wider">Blog Posts</p>
              {filteredPosts.slice(0, 8).map((p) => (
                <a
                  key={p.slug || p.url}
                  href={p.source === "local" ? `/blog/${p.slug}` : p.url}
                  target={p.source === "medium" ? "_blank" : undefined}
                  rel={p.source === "medium" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-card transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-sm text-foreground truncate">{p.title}</p>
                    <p className="text-xs text-muted">{p.date}{p.source === "medium" ? " · Medium" : ""}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {filteredRoutes.length === 0 && filteredPosts.length === 0 && (
            <p className="text-sm text-muted text-center py-8">No results found.</p>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-muted hover:text-foreground transition-colors p-1"
        aria-label="Search"
        title="Search (Ctrl+K)"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}
