"use client";

import { useState } from "react";
import type { Video } from "@/data/types";

interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ youtubeId, title, className = "" }: YouTubeEmbedProps) {
  if (!youtubeId) {
    return (
      <div className={`aspect-video bg-surface-900 flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-surface-400 text-sm">ویدیو موجود نیست</span>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden bg-black ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

interface YouTubeThumbnailProps {
  youtubeId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export function YouTubeThumbnail({ youtubeId, title, thumbnail, className = "" }: YouTubeThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailSrc = thumbnail || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "");

  if (!youtubeId) {
    return (
      <div className={`aspect-video bg-surface-900 flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-surface-400 text-sm">ویدیو موجود نیست</span>
      </div>
    );
  }

  if (isPlaying) {
    return (
      <div className={`relative aspect-video rounded-lg overflow-hidden bg-black ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className={`relative aspect-video rounded-lg overflow-hidden bg-black group cursor-pointer ${className}`}
      aria-label={`پخش ویدیو: ${title}`}
    >
      {thumbnailSrc ? (
        <img
          src={thumbnailSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-900">
          <span className="text-surface-400 text-sm">تصویر موجود نیست</span>
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 rounded-full bg-yt/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

interface VideoCardProps {
  video: Video;
  className?: string;
  href?: string;
}

export function VideoCard({ video, className = "", href }: VideoCardProps) {
  const thumbnailSrc =
    video.thumbnail || (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : "");

  return (
    <article className={`card ${className} group hover:shadow-md transition-shadow cursor-pointer`}>
      <a href={href || `/videos/${video.slug}/`} className="block">
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yt/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <svg className="w-5 h-5 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {video.duration && (
              <div className="absolute bottom-2 right-2 bg-surface/80 text-xs text-text-muted px-2 py-1 rounded-bl backdrop-blur-sm">
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
      </a>
    </article>
  );
}
