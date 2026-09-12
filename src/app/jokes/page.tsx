import type { Metadata } from "next";
import { JokeCard } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
import { jokes, getRandomJoke } from "@/data/jokes";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "آرشیو جوک",
  description: "۳۰ جوک طنز کوتاه و خنده‌دار از مستر طنز",
  alternates: {
    canonical: `${siteConfig.url}/jokes/`,
  },
};

export default function JokesPage() {
  const randomJoke = getRandomJoke();

  return (
    <>
      <div className="container-main py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
              خانه
            </Link>
            <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-text-primary text-sm font-medium">آرشیو جوک</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">آرشیو جوک</h1>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
            ۳۰ جوک طنز کوتاه و خنده‌دار از مستر طنز
          </p>
        </div>

        {/* Random Joke Entry Point */}
        <section className="mb-8 card p-6 text-center">
          <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center">
            <svg className="w-8 h-8 text-yt" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">جوک تصادفی</h2>
          <p className="text-text-muted text-sm mb-4">
            ضحك برای سلامتی جسم و روح
          </p>
          <Link
            href="/jokes/"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold bg-accent-primary text-background hover:bg-accent-primary/90 transition-all duration-200"
          >
            مشاهده همه جوک‌ها
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </section>

        {/* Joke Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {jokes.map((joke) => (
            <JokeCard key={joke.id} joke={joke} />
          ))}
        </div>

        <AdSlot slot="JOKE_INLINE_AD" className="my-8 mx-auto" />

        {/* Share / Contact */}
        <div className="mt-8 card p-4">
          <h3 className="text-sm font-bold text-text-primary mb-3">اشتراک‌گذاری</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`جوک جدید از مستر طنز: ${randomJoke.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
            >
              واتس‌اپ
            </a>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(`${siteConfig.url}/jokes/${randomJoke.slug}/`)}&text=${encodeURIComponent(randomJoke.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              تلگرام
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/jokes/${randomJoke.slug}/`)}&text=${encodeURIComponent(randomJoke.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-12 border-t border-border py-8 text-center text-text-muted">
        <p>مستر طنز - آرشیو جوک</p>
      </footer>
    </>
  );
}