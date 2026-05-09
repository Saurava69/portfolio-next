"use client";

import { useState } from "react";

export default function Tags({ tags }) {
  const [showAll, setShowAll] = useState(false);
  if (!tags || tags.length === 0) return null;

  const visible = showAll ? tags : tags.slice(0, 3);
  const hiddenCount = tags.length - 3;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tag) => (
        <span key={tag} className="text-xs text-muted border border-border px-2 py-0.5 rounded">
          {tag}
        </span>
      ))}
      {hiddenCount > 0 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-xs text-accent hover:text-foreground transition-colors"
        >
          +{hiddenCount} more
        </button>
      )}
      {showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(false)}
          className="text-xs text-accent hover:text-foreground transition-colors"
        >
          show less
        </button>
      )}
    </div>
  );
}
