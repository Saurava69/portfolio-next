"use client";

import { useState, useEffect } from "react";

export default function TypeWriter({ strings, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[currentIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, strings]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink ml-0.5 text-accent">|</span>
    </span>
  );
}
