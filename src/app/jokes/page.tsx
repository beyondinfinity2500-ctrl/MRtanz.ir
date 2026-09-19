import type { Metadata } from "next";
import { JokeCard } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
import { jokes, getFeaturedJoke, getJokeCategories } from "@/data/jokes";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "آرشیو جوک",
  description: `جوک‌های طنز کوتاه و خنده‌دار از مستر طنز — ${jokes.length} جوک گلچین‌شده`,
  alternates: {
    canonical: `${siteConfig.url}/jokes/`,
  },
};

export default function JokesPage() {
  const featured = getFeaturedJoke();
  const categories = getJokeCategories();

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
        <span className="text-text-primary text-sm font-medium">آرشیو جوک</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">آرشیو جوک</h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
          {jokes.length} جوک طنز کوتاه و خنده‌دار گلچین‌شده از مستر طنز
        </p>
      </div>

      {/* Featured Joke of the Day */}
      {featured && (
        <section className="mb-8 card p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-6xl sm:text-7xl text-accent-primary/10 font-extrabold select-none pointer-events-none" aria-hidden="true">
            ؟
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-primary text-xs font-bold">
                ✦ جوک امروز
              </span>
              {featured.category && (
                <span className="text-xs text-text-muted">{featured.category}</span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-3 leading-relaxed">
              {featured.title}
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
              {featured.content}
            </p>
            <Link
              href={`/jokes/${featured.slug}/`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
            >
              مشاهده کامل
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Category Pills */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1.5 text-xs font-medium bg-surface-elevated text-text-secondary rounded-full border border-border"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Joke Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {jokes.slice(0, 25).map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}

        {/* Promotional Block 1 */}
        <a
          href="https://www.tr90.ir"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group border border-border"
        >
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">تبلیغات</span>
          <span className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            راهنمای سفر به ترکیه
          </span>
          <span className="text-xs text-text-muted leading-relaxed">
            اطلاعات کامل سفر، هتل، ویزا و راهنمای گردشگری ترکیه
          </span>
          <span className="text-[10px] text-accent-primary mt-auto">tr90.ir</span>
        </a>

        {jokes.slice(25, 50).map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}

        {/* Promotional Block 2 */}
        <a
          href="https://www.adim.top"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group border border-border"
        >
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">تبلیغات</span>
          <span className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            کاریابی در ترکیه
          </span>
          <span className="text-xs text-text-muted leading-relaxed">
            فرصت‌های شغلی، راهنمای کاریابی و استخدام در ترکیه
          </span>
          <span className="text-[10px] text-accent-primary mt-auto">adim.top</span>
        </a>

        {jokes.slice(50, 70).map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}

        {/* Promotional Block 3 */}
        <a
          href="https://www.newsiq.top/fa"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group border border-border"
        >
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">تبلیغات</span>
          <span className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            تحلیل مالی اخبار ترند جهان
          </span>
          <span className="text-xs text-text-muted leading-relaxed">
            تحلیل بازارهای مالی، اخبار اقتصادی و ترندهای جهانی
          </span>
          <span className="text-[10px] text-accent-primary mt-auto">newsiq.top</span>
        </a>

        {jokes.slice(70).map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </div>

      <AdSlot slot="JOKE_INLINE_AD" className="my-8 mx-auto" />

      {/* Share / Contact */}
      <div className="mt-8 card p-4">
        <h3 className="text-sm font-bold text-text-primary mb-3">اشتراک‌گذاری</h3>
        <div className="flex flex-wrap gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`آرشیو جوک مستر طنز — ${jokes.length} جوک خنده‌دار`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
          >
            واتس‌اپ
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(`${siteConfig.url}/jokes/`)}&text=${encodeURIComponent("آرشیو جوک مستر طنز")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            تلگرام
          </a>
        </div>
      </div>
    </div>
  );
}
