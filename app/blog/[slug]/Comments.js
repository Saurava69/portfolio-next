"use client";

import { useState, useEffect } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { CommentSkeleton } from "@/app/components/Skeleton";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  increment,
} from "firebase/firestore";

export default function Comments({ slug, title }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [replySubmitting, setReplySubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [optimisticLikes, setOptimisticLikes] = useState({});
  const [animatingId, setAnimatingId] = useState(null);
  const likeTimers = useState({})[0];

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const { auth } = getFirebaseAuth();
      const unsubscribe = onAuthStateChanged(auth, (u) => {
        setUser(u);
      });
      return unsubscribe;
    } catch {
      return () => {};
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const { db } = getFirebaseAuth();
      const q = query(
        collection(db, "comments"),
        where("slug", "==", slug),
        orderBy("createdAt", "asc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(data);
        setOptimisticLikes({});
        setLoading(false);
      });
      return unsubscribe;
    } catch {
      return () => {};
    }
  }, [slug]);

  async function handleGoogleLogin() {
    try {
      const { auth, googleProvider } = getFirebaseAuth();
      await signInWithPopup(auth, googleProvider);
    } catch {
    }
  }

  async function handleLogout() {
    const { auth } = getFirebaseAuth();
    await signOut(auth);
    setUser(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user || !content.trim()) return;

    setSubmitting(true);
    try {
      const { db } = getFirebaseAuth();
      await addDoc(collection(db, "comments"), {
        slug,
        parentId: null,
        content: content.trim(),
        name: user.displayName || "Anonymous",
        email: user.email || "",
        photoURL: user.photoURL || "",
        likes: {},
        createdAt: serverTimestamp(),
      });
      setContent("");
    } catch {
    } finally {
      setSubmitting(false);
    }
  }

  async function handleReply(e, parentId) {
    e.preventDefault();
    if (!user || !replyContent.trim()) return;

    setReplySubmitting(true);
    try {
      const { db } = getFirebaseAuth();
      await addDoc(collection(db, "comments"), {
        slug,
        parentId,
        content: replyContent.trim(),
        name: user.displayName || "Anonymous",
        email: user.email || "",
        photoURL: user.photoURL || "",
        likes: {},
        createdAt: serverTimestamp(),
      });
      setReplyTo(null);
      setReplyContent("");
    } catch {
    } finally {
      setReplySubmitting(false);
    }
  }

  async function handleEdit(e, commentId) {
    e.preventDefault();
    if (!user || !editContent.trim()) return;
    try {
      const { db } = getFirebaseAuth();
      await updateDoc(doc(db, "comments", commentId), {
        content: editContent.trim(),
        edited: true,
      });
      setEditingId(null);
      setEditContent("");
    } catch {
    }
  }

  async function handleDelete(commentId) {
    if (!confirm("Delete this comment?")) return;
    try {
      const { db } = getFirebaseAuth();
      await deleteDoc(doc(db, "comments", commentId));
    } catch {
    }
  }

  async function handleLike(commentId, likes) {
    if (!user) {
      try {
        const { auth, googleProvider } = getFirebaseAuth();
        await signInWithPopup(auth, googleProvider);
      } catch {
      }
      return;
    }
    const emailKey = user.email.replace(/\./g, "_");
    const dbCount = (likes && likes[emailKey]) || 0;
    const currentCount = optimisticLikes[commentId] !== undefined ? optimisticLikes[commentId] : dbCount;
    if (currentCount >= 50) return;

    const newCount = currentCount + 1;
    setOptimisticLikes((prev) => ({ ...prev, [commentId]: newCount }));
    setAnimatingId(commentId);
    setTimeout(() => setAnimatingId(null), 150);

    if (likeTimers[commentId]) clearTimeout(likeTimers[commentId]);
    likeTimers[commentId] = setTimeout(async () => {
      try {
        const { db } = getFirebaseAuth();
        await updateDoc(doc(db, "comments", commentId), {
          [`likes.${emailKey}`]: newCount,
        });
      } catch {
      }
    }, 500);
  }

  function getTotalLikes(likes) {
    if (!likes || typeof likes !== "object") return 0;
    return Object.values(likes).reduce((sum, n) => sum + (Number(n) || 0), 0);
  }

  function formatDate(timestamp) {
    if (!timestamp) return "";
    const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return isNaN(d) ? "" : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  const topLevel = comments.filter((c) => !c.parentId);
  const replies = comments.filter((c) => c.parentId);

  function formatContent(text) {
    const parts = [];
    const blockRegex = /```([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = blockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...formatInline(text.slice(lastIndex, match.index), parts.length));
      }
      parts.push(
        <pre key={`block-${parts.length}`} className="my-2 p-3 bg-background border border-border rounded-lg overflow-x-auto">
          <code className="text-xs text-foreground">{match[1].trim()}</code>
        </pre>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(...formatInline(text.slice(lastIndex), parts.length));
    }

    return parts;
  }

  function formatInline(text, keyOffset) {
    const parts = [];
    const inlineRegex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`)/g;
    let lastIndex = 0;
    let match;

    while ((match = inlineRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={`t-${keyOffset}-${parts.length}`}>{text.slice(lastIndex, match.index)}</span>);
      }
      if (match[2]) {
        parts.push(<strong key={`bi-${keyOffset}-${parts.length}`} className="font-bold italic">{match[2]}</strong>);
      } else if (match[3]) {
        parts.push(<strong key={`b-${keyOffset}-${parts.length}`} className="font-bold">{match[3]}</strong>);
      } else if (match[4]) {
        parts.push(<em key={`em-${keyOffset}-${parts.length}`} className="italic">{match[4]}</em>);
      } else if (match[5]) {
        parts.push(
          <code key={`i-${keyOffset}-${parts.length}`} className="px-1.5 py-0.5 bg-background border border-border rounded text-xs text-accent">
            {match[5]}
          </code>
        );
      }
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={`t-${keyOffset}-${parts.length}`}>{text.slice(lastIndex)}</span>);
    }

    return parts;
  }

  function getReplies(parentId) {
    return replies.filter((r) => r.parentId === parentId);
  }

  function renderComment(comment, depth = 0) {
    const commentReplies = getReplies(comment.id);
    const isOwner = user && user.email === comment.email;
    const isAdmin = user && user.email === "sauravx25@gmail.com";

    return (
      <div key={comment.id} className={depth > 0 ? "ml-4 sm:ml-6 mt-4" : ""}>
        <div className="border border-border rounded-lg p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              {comment.photoURL && (
                <img src={comment.photoURL} alt="" className="w-5 h-5 rounded-full" referrerPolicy="no-referrer" />
              )}
              <span className="text-sm font-medium text-foreground">{comment.name}</span>
              {comment.email === "sauravx25@gmail.com" && (
                <span className="text-xs bg-accent text-white px-1.5 py-0.5 rounded">Author</span>
              )}
              <span className="text-xs text-muted">{formatDate(comment.createdAt)}</span>
              {comment.edited && (
                <span className="text-xs text-muted italic">(edited)</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {isOwner && (
                <button
                  onClick={() => {
                    setEditingId(editingId === comment.id ? null : comment.id);
                    setEditContent(comment.content);
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors"
                >
                  {editingId === comment.id ? "Cancel" : "Edit"}
                </button>
              )}
              {isAdmin && (
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-xs text-muted hover:text-red-500 transition-colors"
                >
                  Delete
                </button>
              )}
              {user && (
                <button
                  onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                  className="text-xs text-muted hover:text-accent transition-colors"
                >
                  {replyTo === comment.id ? "Cancel" : "Reply"}
                </button>
              )}
            </div>
          </div>

          {editingId === comment.id ? (
            <form onSubmit={(e) => handleEdit(e, comment.id)} className="space-y-3">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs bg-foreground text-background rounded-lg hover:bg-accent hover:text-white transition-colors"
              >
                Save
              </button>
            </form>
          ) : (
            <div className="text-sm text-muted leading-relaxed whitespace-pre-wrap">{formatContent(comment.content)}</div>
          )}

          <div className="mt-3 flex items-center gap-1">
            {(() => {
              const emailKey = user ? user.email.replace(/\./g, "_") : null;
              const dbCount = emailKey && comment.likes ? (comment.likes[emailKey] || 0) : 0;
              const myCount = optimisticLikes[comment.id] !== undefined ? optimisticLikes[comment.id] : dbCount;
              const dbTotal = getTotalLikes(comment.likes);
              const total = dbTotal + (optimisticLikes[comment.id] !== undefined ? optimisticLikes[comment.id] - dbCount : 0);
              return (
                <button
                  onClick={() => handleLike(comment.id, comment.likes)}
                  className="flex items-center gap-1 text-xs text-muted hover:text-red-500 transition-colors"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${animatingId === comment.id ? "scale-125" : "scale-100"}`}
                    viewBox="0 0 24 24"
                    fill={myCount > 0 ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>{total || ""}</span>
                </button>
              );
            })()}
          </div>
        </div>

        {replyTo === comment.id && (
          <form onSubmit={(e) => handleReply(e, comment.id)} className="ml-4 sm:ml-6 mt-3 space-y-3">
            <div className="border border-border rounded-lg overflow-hidden focus-within:border-accent transition-colors">
              <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-background">
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById(`reply-textarea-${comment.id}`);
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = replyContent.slice(start, end);
                    setReplyContent(replyContent.slice(0, start) + "**" + selected + "**" + replyContent.slice(end));
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded font-bold"
                  title="Bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById(`reply-textarea-${comment.id}`);
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = replyContent.slice(start, end);
                    setReplyContent(replyContent.slice(0, start) + "*" + selected + "*" + replyContent.slice(end));
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded italic"
                  title="Italic"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById(`reply-textarea-${comment.id}`);
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = replyContent.slice(start, end);
                    if (selected.includes("\n") || selected.length > 40) {
                      setReplyContent(replyContent.slice(0, start) + "```\n" + selected + "\n```" + replyContent.slice(end));
                    } else {
                      setReplyContent(replyContent.slice(0, start) + "`" + selected + "`" + replyContent.slice(end));
                    }
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded"
                  title="Insert code"
                >
                  &lt;/&gt;
                </button>
              </div>
              <textarea
                id={`reply-textarea-${comment.id}`}
                placeholder="Write a reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                onInput={(e) => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"; }}
                required
                rows={3}
                className="w-full px-3 py-2 bg-card text-foreground placeholder:text-muted text-sm focus:outline-none resize-none overflow-hidden"
              />
            </div>
            <button
              type="submit"
              disabled={replySubmitting}
              className="px-4 py-2 text-xs bg-foreground text-background rounded-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
            >
              {replySubmitting ? "Submitting..." : "Reply"}
            </button>
          </form>
        )}

        {commentReplies.map((reply) => renderComment(reply, depth + 1))}
      </div>
    );
  }

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <h2 className="text-lg font-semibold text-foreground mb-6">Comments</h2>

      {loading ? (
        <div className="space-y-4 mb-10">
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
      ) : topLevel.length > 0 ? (
        <div className="space-y-4 mb-10">
          {topLevel.map((c) => renderComment(c))}
        </div>
      ) : null}

      {!user ? (
        <div className="border border-border rounded-lg p-6 space-y-4">
          <p className="text-sm text-muted">Sign in to leave a comment</p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 px-4 py-2.5 text-sm border border-border rounded-lg hover:border-muted transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
              )}
              <span className="text-sm text-foreground">{user.displayName}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Sign out
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden focus-within:border-accent transition-colors">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-background">
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById("comment-textarea");
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = content.slice(start, end);
                    setContent(content.slice(0, start) + "**" + selected + "**" + content.slice(end));
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded font-bold"
                  title="Bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById("comment-textarea");
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = content.slice(start, end);
                    setContent(content.slice(0, start) + "*" + selected + "*" + content.slice(end));
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded italic"
                  title="Italic"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById("comment-textarea");
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const selected = content.slice(start, end);
                    if (selected.includes("\n") || selected.length > 40) {
                      const newContent = content.slice(0, start) + "```\n" + selected + "\n```" + content.slice(end);
                      setContent(newContent);
                    } else {
                      const newContent = content.slice(0, start) + "`" + selected + "`" + content.slice(end);
                      setContent(newContent);
                    }
                  }}
                  className="text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded"
                  title="Insert code"
                >
                  &lt;/&gt;
                </button>
              </div>
              <textarea
                id="comment-textarea"
                placeholder="Write a comment... (use `code` for inline, ```code``` for blocks)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onInput={(e) => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"; }}
                required
                rows={3}
                className="w-full px-4 py-2.5 bg-card text-foreground placeholder:text-muted text-sm focus:outline-none resize-none overflow-hidden"
              />
            </div>
            {content && (
              <div className="border border-border rounded-lg p-4 bg-card">
                <p className="text-xs text-muted mb-2">Preview</p>
                <div className="text-sm text-muted leading-relaxed whitespace-pre-wrap">{formatContent(content)}</div>
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2.5 text-sm bg-foreground text-background rounded-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Post Comment"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
