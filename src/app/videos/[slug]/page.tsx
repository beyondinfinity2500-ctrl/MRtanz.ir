import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { YouTubeThumbnail, VideoCard } from "@/components/YouTubeEmbed";
import { AdSlot } from "@/components/AdSlot";
import { videos, getVideoBySlug, getRelatedVideos } from "@/data/videos";
import { getPlaylistBySlug } from "@/data/playlists";
import { siteConfig } from "@/data/site";
import Link from "next/link";

interface VideoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(decodeURIComponent(slug));
  if (!video) {
    return { title: "ویدیو یافت نشد" };
  }

  return {
    title: video.title,
    description: video.description,
    alternates: {
      canonical: `${siteConfig.url}/videos/${video.slug}/`,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      url: `${siteConfig.url}/videos/${video.slug}/`,
      images: video.thumbnail ? [{ url: video.thumbnail, width: 1280, height: 720, alt: video.title }] : [],
    },
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(decodeURIComponent(slug));
  if (!video) {
    notFound();
  }

  const relatedVideos = getRelatedVideos(video);
  const playlist = video.playlistId ? getPlaylistBySlug(video.playlistId) : null;

  return (
    <div className="container-main py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <Link href="/" className="text-text-muted hover:text-accent-primary transition-colors">
          خانه
        </Link>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <Link href="/videos/" className="text-text-muted hover:text-accent-primary transition-colors">
          ویدیوها
        </Link>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-text-primary font-medium line-clamp-1">{video.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="mb-6">
            <YouTubeThumbnail
              youtubeId={video.youtubeId}
              title={video.title}
              thumbnail={video.thumbnail}
              className="rounded-xl overflow-hidden"
            />
          </div>

          {/* Video Info */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
              {video.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-primary font-medium">
                {video.category}
              </span>
              {video.duration && (
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {video.duration}
                </span>
              )}
            </div>

            <p className="text-text-secondary leading-relaxed mb-4">
              {video.description}
            </p>

            {video.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {video.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-surface-elevated text-text-muted rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <AdSlot slot="VIDEO_INLINE_AD" className="my-8 mx-auto" />

          {/* Playlist Link */}
          {playlist && (
            <div className="card p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-muted mb-0.5">این ویدیو در پلی‌لیست</p>
                  <Link href={`/playlists/${playlist.slug}/`} className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors line-clamp-1">
                    {playlist.title}
                  </Link>
                </div>
                <Link href={`/playlists/${playlist.slug}/`} className="text-xs text-accent-primary hover:text-accent-primary/80 font-medium transition-colors">
                  مشاهده ←
                </Link>
              </div>
            </div>
          )}

          {/* Share */}
          <div className="card p-4 mb-6">
            <h3 className="text-sm font-bold text-text-primary mb-3">اشتراک‌گذاری</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${video.title} - ${siteConfig.url}/videos/${video.slug}/`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
              >
                واتس‌اپ
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(`${siteConfig.url}/videos/${video.slug}/`)}&text=${encodeURIComponent(video.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                تلگرام
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/videos/${video.slug}/`)}&text=${encodeURIComponent(video.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Videos */}
          {relatedVideos.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">ویدیوهای مرتبط</h3>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <VideoCard key={relatedVideo.id} video={relatedVideo} />
                ))}
              </div>
            </div>
          )}

          <AdSlot slot="CONTENT_AD" className="my-8 mx-auto" />

          {/* YouTube CTA */}
          <div className="card p-4">
            <div className="text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-yt/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-yt" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-text-primary mb-2">سابسکرایب کنید</h4>
              <p className="text-xs text-text-muted mb-3">برای تماشای تمام کلیپ‌ها</p>
              <a
                href="https://youtube.com/iraniandiaspora?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-yt text-white rounded-lg hover:bg-yt/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                سابسکرایب
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
