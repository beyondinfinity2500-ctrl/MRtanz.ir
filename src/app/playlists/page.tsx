"use client";

import { useSearchParams } from "next/navigation";
import { PlaylistCard } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
import { playlists, getPlaylistCategories } from "@/data/playlists";
import Link from "next/link";
import { Suspense } from "react";

function PlaylistsContent() {
  const searchParams = useSearchParams();
  const categories = getPlaylistCategories();
  const activeCategory = searchParams.get("category") || undefined;
  const filteredPlaylists = activeCategory
    ? playlists.filter((p) => p.category === activeCategory)
    : playlists;

  return (
    <div className="container-main py-8 md:py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Link href="/" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
            خانه
          </Link>
          <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-text-primary text-sm font-medium">پلی‌لیست‌ها</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">پلی‌لیست‌ها</h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
          مجموعه کلیپ‌ها بر اساس موضوع و دسته‌بندی
        </p>
      </div>

      <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 min-w-max sm:flex-wrap sm:min-w-0">
          <Link
            href="/playlists/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !activeCategory
                ? "bg-accent-primary text-background"
                : "bg-surface-elevated text-text-secondary hover:text-text-primary border border-border hover:border-accent-primary/50"
            }`}
          >
            همه ({playlists.length})
          </Link>
          {categories.map((category) => {
            const count = playlists.filter((p) => p.category === category).length;
            return (
              <Link
                key={category}
                href={`/playlists/?category=${encodeURIComponent(category)}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent-primary text-background"
                    : "bg-surface-elevated text-text-secondary hover:text-text-primary border border-border hover:border-accent-primary/50"
                }`}
              >
                {category} ({count})
              </Link>
            );
          })}
        </div>
      </div>

      <AdSlot slot="TOP_AD" className="mb-8 mx-auto" />

      {filteredPlaylists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center">
            <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2">پلی‌لیستی یافت نشد</h3>
          <p className="text-text-muted text-sm mb-4">در این دسته‌بندی پلی‌لیستی موجود نیست</p>
          <Link
            href="/playlists/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            مشاهده همه پلی‌لیست‌ها
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      )}

      <AdSlot slot="CONTENT_AD" className="my-8 mx-auto" />

      <section className="mt-8">
        <div className="card p-6 sm:p-8 text-center">
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
      </section>
    </div>
  );
}

export default function PlaylistsPage() {
  return (
    <Suspense>
      <PlaylistsContent />
    </Suspense>
  );
}
