"use client";

export function Skeleton({ className = "" }) {
  return <div className={`animate-pulse bg-border rounded ${className}`} />;
}

export function CommentSkeleton() {
  return (
    <div className="border border-border rounded-lg p-3 sm:p-4 space-y-3">
      <div className="flex items-center gap-2">
        <Skeleton className="w-5 h-5 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="border border-border rounded-lg overflow-hidden flex">
      <div className="w-32 sm:w-44 shrink-0 bg-card">
        <Skeleton className="w-full h-full min-h-[120px]" />
      </div>
      <div className="p-4 sm:p-6 flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-14" />
        </div>
      </div>
    </div>
  );
}

export function PostLikeSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="w-5 h-5 rounded-full" />
      <Skeleton className="h-4 w-16" />
    </div>
  );
}
