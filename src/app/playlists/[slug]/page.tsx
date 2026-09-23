import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VideoCard } from "@/components/YouTubeEmbed";
import { AdSlot } from "@/components/AdSlot";
import { playlists, getPlaylistBySlug, getRelatedPlaylists } from "@/data/playlists";
import { videos } from "@/data/videos";
import { siteConfig } from "@/data/site";
import Link from "next/link";

interface PlaylistPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return playlists.map((playlist) => ({
    slug: playlist.slug,
  }));
}

export async function generateMetadata({ params }: PlaylistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playlist = getPlaylistBySlug(decodeURIComponent(slug));
  if (!playlist) {
    return { title: "پلی‌لیست یافت نشد" };
  }

  return {
    title: playlist.title,
    description: playlist.description,
    alternates: {
      canonical: `${siteConfig.url}/playlists/${playlist.slug}/`,
    },
    openGraph: {
      title: playlist.title,
      description: playlist.description,
      type: "website",
      url: `${siteConfig.url}/playlists/${playlist.slug}/`,
    },
  };
}

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { slug } = await params;
  const playlist = getPlaylistBySlug(decodeURIComponent(slug));
  if (!playlist) {
    notFound();
  }

  const relatedPlaylists = getRelatedPlaylists(playlist);
  const playlistVideos = videos.filter(
    (v) => v.category === playlist.category || v.tags.some((t) => playlist.category.includes(t))
  );

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
        <Link href="/playlists/" className="text-text-muted hover:text-accent-primary transition-colors">
          پلی‌لیست‌ها
        </Link>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-text-primary font-medium line-clamp-1">{playlist.title}</span>
      </nav>

      {/* Playlist Header */}
      <div className="card p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-full sm:w-48 aspect-video sm:aspect-square rounded-xl bg-surface-elevated flex items-center justify-center overflow-hidden">
            {playlist.thumbnail ? (
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-4">
                <svg className="w-12 h-12 text-accent-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-xs text-text-muted">{playlist.category}</span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-medium bg-accent-secondary/10 text-accent-secondary rounded-md">
                {playlist.category}
              </span>
              {playlist.featured && (
                <span className="px-2.5 py-1 text-xs font-medium bg-accent-primary/10 text-accent-primary rounded-md">
                  ویژه
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
              {playlist.title}
            </h1>

            <p className="text-text-secondary leading-relaxed mb-4">
              {playlist.description}
            </p>

            {playlist.youtubePlaylistId && (
              <a
                href={`https://www.youtube.com/playlist?list=${playlist.youtubePlaylistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-yt text-white rounded-lg hover:bg-yt/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                مشاهده در یوتیوب
              </a>
            )}
          </div>
        </div>
      </div>

      <AdSlot slot="TOP_AD" className="mb-8 mx-auto" />

      {/* Videos in this playlist */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-text-primary mb-4">ویدیوهای مرتبط</h2>
        {playlistVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {playlistVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center">
              <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">ویدیویی موجود نیست</h3>
            <p className="text-text-muted text-sm">هنوز ویدیویی در این پلی‌لیست اضافه نشده است</p>
          </div>
        )}
      </div>

      <AdSlot slot="VIDEO_INLINE_AD" className="my-8 mx-auto" />

      {/* Related Playlists */}
      {relatedPlaylists.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">پلی‌لیست‌های مرتبط</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedPlaylists.map((relatedPlaylist) => (
              <Link
                key={relatedPlaylist.id}
                href={`/playlists/${relatedPlaylist.slug}/`}
                className="card p-4 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-text-primary line-clamp-2 mb-2 group-hover:text-accent-primary transition-colors">
                  {relatedPlaylist.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2 mb-2">
                  {relatedPlaylist.description}
                </p>
                <span className="text-xs text-accent-secondary font-medium">{relatedPlaylist.category}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Share */}
      <div className="card p-4 mb-6">
        <h3 className="text-sm font-bold text-text-primary mb-3">اشتراک‌گذاری</h3>
        <div className="flex flex-wrap gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${playlist.title} - ${siteConfig.url}/playlists/${playlist.slug}/`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
          >
            واتس‌اپ
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(`${siteConfig.url}/playlists/${playlist.slug}/`)}&text=${encodeURIComponent(playlist.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            تلگرام
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/playlists/${playlist.slug}/`)}&text=${encodeURIComponent(playlist.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors"
          >
            X
          </a>
        </div>
      </div>

      {/* YouTube CTA */}
      <div className="card p-6 text-center">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-yt/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-yt" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <h2 className="text-xl font-extrabold text-text-primary mb-2">
          مستر طنز در یوتیوب
        </h2>
        <p className="text-text-muted text-sm mb-4 max-w-md mx-auto">
          برای تماشای تمام کلیپ‌ها، کانال یوتیوب ما را سابسکرایب کنید
        </p>
        <a
          href="https://youtube.com/iraniandiaspora?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold bg-yt text-white hover:bg-yt/90 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          سابسکرایب کانال یوتیوب
        </a>
      </div>
    </div>
  );
}
