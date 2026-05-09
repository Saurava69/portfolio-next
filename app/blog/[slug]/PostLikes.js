"use client";

import { useState, useEffect, useRef } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

import { PostLikeSkeleton } from "@/app/components/Skeleton";

export default function PostLikes({ slug }) {
  const [likes, setLikes] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [optimistic, setOptimistic] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const { auth } = getFirebaseAuth();
      return onAuthStateChanged(auth, (u) => setUser(u));
    } catch {
      return () => {};
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const { db } = getFirebaseAuth();
      return onSnapshot(doc(db, "postLikes", slug), (snap) => {
        setLikes(snap.exists() ? snap.data().likes || {} : {});
        setOptimistic(null);
        setLoading(false);
      });
    } catch {
      return () => {};
    }
  }, [slug]);

  const emailKey = user ? user.email.replace(/\./g, "_") : null;
  const dbCount = emailKey ? (likes[emailKey] || 0) : 0;
  const myCount = optimistic !== null ? optimistic : dbCount;
  const total = Object.values(likes).reduce((sum, n) => sum + (Number(n) || 0), 0) + (optimistic !== null ? optimistic - dbCount : 0);

  async function handleLike() {
    if (!user) {
      try {
        const { auth, googleProvider } = getFirebaseAuth();
        await signInWithPopup(auth, googleProvider);
      } catch {
      }
      return;
    }
    if (myCount >= 50) return;

    const newCount = myCount + 1;
    setOptimistic(newCount);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 150);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      try {
        const { db } = getFirebaseAuth();
        await setDoc(doc(db, "postLikes", slug), {
          likes: { ...likes, [emailKey]: newCount },
        }, { merge: true });
      } catch {
      }
    }, 500);
  }

  if (loading) return <PostLikeSkeleton />;

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 text-sm text-muted hover:text-red-500 transition-colors"
    >
      <svg
        className={`w-5 h-5 transition-transform ${animating ? "scale-125" : "scale-100"}`}
        viewBox="0 0 24 24"
        fill={myCount > 0 ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span>{total || 0} {total === 1 ? "clap" : "claps"}</span>
    </button>
  );
}
