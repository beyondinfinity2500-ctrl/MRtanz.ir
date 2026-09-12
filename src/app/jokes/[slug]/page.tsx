import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JokeCard } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
import { jokes, getJokeBySlug, getRelatedJokes, getRandomJoke } from "@/data/jokes";
import Link from "next/link";
import { siteConfig } from "@/data/site";

interface JokePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jokes.map((joke) => ({
    slug: joke.slug,
  }));
}

export async function generateMetadata({ params }: JokePageProps): Promise<Metadata> {
  const { slug } = await params;
  const joke = getJokeBySlug(slug);
  if (!joke) {
    return { title: "جوک یافت نشد" };
  }

  return {
    title: joke.title,
    description: joke.content.length > 100 ? joke.content.substring(0, 100) + "..." : joke.content,
    alternates: {
      canonical: `${siteConfig.url}/jokes/${joke.slug}/`,
    },
    openGraph: {
      title: joke.title,
      description: joke.content.length > 100 ? joke.content.substring(0, 100) + "..." : joke.content,
      type: "article",
      url: `${siteConfig.url}/jokes/${joke.slug}/`,
      images: [],
    },
  };
}

export default async function JokePage({ params }: JokePageProps) {
  const { slug } = await params;
  const joke = getJokeBySlug(slug);
  if (!joke) {
    notFound();
  }

  const relatedJokes = getRelatedJokes(joke, 3);
  const randomJoke = getRandomJoke();

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
        <Link href="/jokes/" className="text-text-muted hover:text-accent-primary transition-colors">
          جوک‌ها
        </Link>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-text-primary font-medium line-clamp-1">{joke.title}</span>
      </nav>

      {/* Joke Content */}
      <div className="card p-6 sm:p-8 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
          {joke.title}
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-1 text-xs font-medium bg-accent-secondary/10 text-accent-secondary rounded-md">
            {joke.category}
          </span>
        </div>

        <p className="text-text-secondary text-lg leading-relaxed mb-6">
          {joke.content}
        </p>

        <AdSlot slot="JOKE_INLINE_AD" className="mb-6 mx-auto" />

        {/* Share Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${joke.title} - ${siteConfig.url}/jokes/${joke.slug}/`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
          >
            واتس‌اپ
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(`https://mrtanz.ir/jokes/${joke.slug}/`)}&text=${encodeURIComponent(joke.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            تلگرام
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://mrtanz.ir/jokes/${joke.slug}/`)}&text=${encodeURIComponent(joke.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors"
          >
            X
          </a>
        </div>

        {/* Related Jokes */}
        {relatedJokes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-text-primary mb-3">جوک‌های مرتبط</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedJokes.map((relatedJoke) => (
                <JokeCard key={relatedJoke.id} joke={relatedJoke} />
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 pt-6 border-t border-border">
          <Link
            href="/jokes/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            ← بازگشت به آرشیو جوک
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Random Joke Sidebar */}
      <section className="mt-8">
        <div className="card p-6 text-center">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-yt/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-yt" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-text-primary mb-2">جوک تصادفی</h3>
          <p className="text-text-muted text-sm mb-4">
            ضحك برای سلامتی جسم و روح
          </p>
          <a
            href={`/jokes/${randomJoke.slug}/`}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold bg-yt text-white hover:bg-yt/90 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            تماشای این جوک تصادفی
          </a>
        </div>
      </section>
    </div>
  );
}