import { VideoCard } from "@/components/YouTubeEmbed";
import { PlaylistCard, ArticleCard } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
import { YouTubeCTA } from "@/components/YouTubeCTA";
import { featuredVideo, popularVideos } from "@/data/videos";
import { featuredPlaylists } from "@/data/playlists";
import { articles } from "@/data/articles";
import { getFeaturedJoke } from "@/data/jokes";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: `${siteConfig.name} - سایت خنده و استندآپ کمدی`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated/50 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-primary)_0%,_transparent_50%)] opacity-[0.07]" />

        <div className="relative container-main py-16 sm:py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yt animate-pulse" />
            <span className="text-xs text-text-secondary font-medium">پخش جدید هر هفته</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-tight">
            مستر
            <span className="text-accent-primary"> طنز</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            بهترین کلیپ‌های طنز فارسی، استندآپ کمدی، و جوک‌های خنده‌دار
            <br className="hidden sm:block" />
            از کانال یوتیوب مستر طنز
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://youtube.com/iraniandiaspora?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-sm font-bold bg-yt text-white hover:bg-yt/90 transition-all duration-200 shadow-lg shadow-yt/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              سابسکرایب یوتیوب
            </a>

            <Link
              href="/videos/"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold bg-surface-elevated text-text-primary border border-border hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              مشاهده ویدیوها
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 sm:gap-8 text-text-muted text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>طنز تمیز و سالم</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>بروزرسانی هفتگی</span>
            </div>
          </div>
        </div>
      </section>

      {/* === TOP AD === */}
      <AdSlot slot="TOP_AD" className="my-4 mx-auto container-main" />

      {/* === FEATURED VIDEO === */}
      {featuredVideo && (
        <section className="container-main py-8 md:py-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">ویدیوی منتخب</h2>
              <p className="text-text-muted text-sm">جدیدترین کلیپ طنز مستر طنز</p>
            </div>
            <Link
              href="/videos/"
              className="text-xs sm:text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors"
            >
              همه ویدیوها ←
            </Link>
          </div>
          <VideoCard video={featuredVideo} />
        </section>
      )}

      {/* === POPULAR VIDEOS === */}
      <section className="container-main py-8 md:py-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">ویدیوهای محبوب</h2>
            <p className="text-text-muted text-sm">پربازدیدترین کلیپ‌های طنز</p>
          </div>
          <Link
            href="/videos/"
            className="text-xs sm:text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors"
          >
            همه ویدیوها ←
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {popularVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* === PLAYLISTS === */}
      <section className="container-main py-8 md:py-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">پلی‌لیست‌ها</h2>
            <p className="text-text-muted text-sm">مجموعه‌های موضوعی طنز</p>
          </div>
          <Link
            href="/playlists/"
            className="text-xs sm:text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors"
          >
            همه پلی‌لیست‌ها ←
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* === FEATURED JOKE === */}
      {getFeaturedJoke() && (
        <section className="container-main py-8 md:py-12">
          <div className="card p-6 sm:p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl sm:text-7xl text-accent-primary/10 font-extrabold select-none pointer-events-none" aria-hidden="true">
              ؟
            </div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-primary text-xs font-bold">
                  ✦ جوک روز
                </span>
                <Link
                  href="/jokes/"
                  className="text-xs sm:text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors"
                >
                  آرشیو جوک ←
                </Link>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-3 leading-relaxed">
                {getFeaturedJoke()?.title}
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                {getFeaturedJoke()?.content}
              </p>
              <Link
                href={`/jokes/${getFeaturedJoke()?.slug}/`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
              >
                مشاهده کامل
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* === FEATURED ARTICLES === */}
      <section className="container-main py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">مقالات</h2>
            <p className="text-text-muted text-sm">مقالات انتخاب شده مستر طنز</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* === INLINE AD === */}
      <AdSlot slot="VIDEO_INLINE_AD" className="my-6 mx-auto container-main" />

      {/* === YOUTUBE CTA === */}
      <section className="container-main py-8 md:py-12">
        <div className="card p-6 sm:p-8 md:p-10 text-center">
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-yt/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-yt" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-2">
            مستر طنز در یوتیوب
          </h2>
          <p className="text-text-muted text-sm sm:text-base mb-6 max-w-lg mx-auto">
            برای تماشای تمام کلیپ‌های طنز و استندآپ کمدی، کانال یوتیوب ما را سابسکرایب کنید
          </p>
          <YouTubeCTA />
        </div>
      </section>
    </>
  );
}
