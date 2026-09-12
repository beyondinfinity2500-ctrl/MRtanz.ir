"use client";

/* Badge/Tag system - compact, consistent, limited colors */
export function Badge({ variant = "default", className, children }: { variant?: "default" | "featured" | "new" | "video" | "playlist"; className?: string; children: React.ReactNode }) {
  const badgeVariants = {
    default: "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium text-text-muted border border-border",
    featured: "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium text-white bg-accent-primary",
    new: "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium text-white bg-warning",
    video: "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium text-white bg-yt",
    playlist: "inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium text-white bg-accent-secondary",
  };

  return (
    <span className={`${badgeVariants[variant as keyof typeof badgeVariants]} ${className || ""}`}>{children}</span>
  );
}

/* Tag component for categories */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium text-text-muted border border-border ${className || ""}`}>{children}</span>
  );
}