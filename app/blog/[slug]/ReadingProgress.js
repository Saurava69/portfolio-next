"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.getElementById("blog-article");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleHeight = article.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(100, (scrolled / articleHeight) * 100);
      setProgress(pct);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent transition-all duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
