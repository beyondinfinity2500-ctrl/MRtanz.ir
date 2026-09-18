"use client";

import Link from "next/link";
import { Video, Playlist, Joke, Article } from "@/data/types";

interface CardProps {
  className?: string;
  shadow?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function Card({ className, shadow = "md", children }: CardProps) {
  const shadowMap = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <article
      className={`card ${shadowMap[shadow]} border border-border overflow-hidden transition-shadow ${className}`}
    >
      {children}
    </article>
  );
}

/* Video Card - premium YouTube video card using thumbnails */
export function VideoCard({ video, className }: { video: Video; className?: string }) {
  const thumbnailSrc =
    video.thumbnail || (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : "");

  return (
    <article
      className={`card ${className || ""} group hover:shadow-md transition-shadow cursor-pointer`}
    >
      {video.youtubeId || video.thumbnail ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-border">
          {thumbnailSrc ? (
            <img
              src={thumbnailSrc}
              alt={video.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-border/50">
              <span className="text-text-muted text-sm">تصویر موجود نیست</span>
            </div>
          )}

          {video.youtubeId && (
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-surface/80 backdrop-blur-sm rounded-full px-2 py-1">
              <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              تماشا کنید
            </div>
          )}

          {video.duration && (
            <div className="absolute bottom-2 right-2 bg-surface/80 text-xs text-text-muted px-2 py-1 rounded-bl">
              {video.duration}
            </div>
          )}
        </div>
      ) : (
        <div className="relative aspect-[16/9] bg-border/50 flex items-center justify-center">
          <span className="text-text-muted text-sm">ویدیو موجود نیست</span>
        </div>
      )}

      <div className="p-4">
        <h3 className="font-bold text-text-primary line-clamp-2 mb-2">{video.title}</h3>
        {video.category && (
          <div className="text-xs text-text-muted mb-2">
            {video.category}
          </div>
        )}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 text-xs">
            {video.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-border/50 text-text-muted px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/* Joke Card */
export function JokeCard({ joke, className }: { joke: Joke; className?: string }) {
  return (
    <Link href={`/jokes/${joke.slug}/`} className="block">
      <article
        className={`card ${className} group-hover:shadow-md transition-shadow cursor-pointer border-y border-border`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-border rounded px-1.5 py-0.5">{joke.category}</span>
          </div>

          <h2 className="font-bold text-text-primary line-clamp-2 mb-3">{joke.title}</h2>

          <p className="text-text-muted line-clamp-3 text-sm mb-4">
            {joke.content}
          </p>

          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>•</span>
            <span>خواندن</span>
            <span>•</span>
            <span>اشتراک</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* Playlist Card */
export function PlaylistCard({ playlist, className }: { playlist: Playlist; className?: string }) {
  return (
    <article
      className={`card ${className} group hover:shadow-md transition-shadow cursor-pointer`}
    >
      <Link href={`/playlists/${playlist.slug}/`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden rounded-md">
          {playlist.thumbnail ? (
            <img
              src={playlist.thumbnail}
              alt={playlist.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-surface-elevated flex items-center justify-center">
              <svg className="w-12 h-12 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          )}
          {playlist.youtubePlaylistId && (
            <div className="absolute top-2 left-2 bg-surface/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-accent-primary">
              ← یوتیوب
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="font-bold text-text-primary line-clamp-2 mb-1 group-hover:text-accent-primary transition-colors">{playlist.title}</h2>
          <p className="text-text-muted text-sm line-clamp-2 mb-2">
            {playlist.description}
          </p>
          <span className="text-xs text-accent-secondary font-medium">{playlist.category}</span>
        </div>
      </Link>
    </article>
  );
}

/* Article Card */
export function ArticleCard({ article, className }: { article: Article; className?: string }) {
  return (
    <article
      className={`card ${className} group-hover:shadow-md transition-shadow cursor-pointer`}
    >
      <div className="relative overflow-hidden rounded-md">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-48 object-cover transition-opacity group-hover:opacity-90"
          />
        )}
        {!article.image && (
          <div className="h-48 bg-border/50 flex items-center justify-center text-text-muted">
            هیچ تصویر پست
          </div>
        )}

        <div className="absolute top-2 left-2 flex items-center gap-1 bg-surface/80 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-xs text-accent-primary">
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("fa-IR") : ""}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-text-primary line-clamp-2 mb-2">{article.title}</h2>
        <p className="text-text-muted text-sm line-clamp-3 mb-3">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span>{article.category}</span>
          {article.tags && article.tags.length > 0 && (
            <span>•</span>
          )}
          {article.tags && article.tags.length > 0 && (
            <span className="capitalize text-capitalize">{article.tags[0]}</span>
          )}
        </div>

        {article.cta && (
          <a href={article.cta.href} className="mt-2 inline-flex items-center gap-1 text-xs text-accent-primary hover:underline">
            {article.cta.label}
          </a>
        )}
      </div>
    </article>
  );
}