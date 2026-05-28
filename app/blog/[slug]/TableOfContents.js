"use client";

import { useEffect, useRef, useState } from "react";

export default function TableOfContents({ headings, mobile = false }) {
  const [collapsed, setCollapsed] = useState(mobile); // mobile starts collapsed
  const [activeId, setActiveId] = useState(null);
  const listRef = useRef(null);
  const activeRef = useRef(null);

  // Intersection observer to track which heading is in view
  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Scroll the active link into view inside the TOC list
  useEffect(() => {
    if (activeRef.current && listRef.current && !mobile) {
      const list = listRef.current;
      const item = activeRef.current;
      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      if (itemRect.top < listRect.top || itemRect.bottom > listRect.bottom) {
        item.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [activeId, mobile]);

  if (!headings.length) return null;

  if (mobile) {
    return (
      <nav className="lg:hidden mb-10 border border-border rounded-xl bg-card overflow-hidden">
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="w-full flex items-center justify-between px-5 py-4 text-left"
          aria-expanded={!collapsed}
        >
          <span className="text-xs font-semibold text-foreground uppercase tracking-widest">
            Table of Contents
          </span>
          <svg
            className={`w-4 h-4 text-muted transition-transform duration-200 ${collapsed ? "" : "rotate-180"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {!collapsed && (
          <ul className="px-5 pb-5 space-y-1 border-t border-border pt-3">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
                <a
                  href={`#${heading.id}`}
                  onClick={() => setCollapsed(true)}
                  className={`text-sm leading-snug block py-1 transition-colors ${
                    activeId === heading.id
                      ? "text-accent font-medium"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {heading.level === 2 && (
                    <span className="mr-2 text-accent/30">—</span>
                  )}
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 flex flex-col" style={{ maxHeight: "calc(100vh - 7rem)" }}>

        {/* Header row with collapse toggle */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-xs font-semibold text-foreground uppercase tracking-widest">
            On this page
          </span>
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="p-1 -mr-1 text-muted hover:text-foreground transition-colors rounded"
            aria-label={collapsed ? "Expand table of contents" : "Collapse table of contents"}
            title={collapsed ? "Expand" : "Collapse"}
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {!collapsed && (
          <>
            {/* Scrollable list */}
            <nav
              ref={listRef}
              className="overflow-y-auto flex-1 min-h-0 pr-1 toc-scroll"
            >
              <ul className="space-y-0.5">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <li key={heading.id} ref={isActive ? activeRef : null}>
                      <a
                        href={`#${heading.id}`}
                        className={`block leading-snug py-1 border-l-2 transition-all duration-150 ${
                          heading.level === 3
                            ? "pl-6 text-xs"
                            : "pl-3 text-sm"
                        } ${
                          isActive
                            ? "border-accent text-accent font-medium"
                            : "border-transparent text-muted hover:text-foreground hover:border-border"
                        }`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Back to top — always visible below the list */}
            <a
              href="#"
              className="mt-5 flex-shrink-0 flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group pt-4 border-t border-border"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
              Back to top
            </a>
          </>
        )}
      </div>
    </aside>
  );
}
