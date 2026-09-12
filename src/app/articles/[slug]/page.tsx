import Link from "next/link";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return;
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/articles/${article.slug}/`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return;
  }

  // JSON-LD Structured Data for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/${article.slug}/`,
    },
  };

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
        <Link href="/articles/" className="text-text-muted hover:text-accent-primary transition-colors">
          مقالات
        </Link>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-text-primary font-medium line-clamp-1">{article.title}</span>
      </nav>

      {/* Article Content */}
      <article className="card p-6 sm:p-8 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
          {article.title}
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-1 text-xs font-medium bg-accent-secondary/10 text-accent-secondary rounded-md">
            {article.category}
          </span>
          <span className="text-xs text-text-muted">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("fa-IR") : ""}</span>
        </div>

        <p className="text-text-secondary text-lg leading-relaxed mb-6">
          {article.content}
        </p>

        {/* Share */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${article.title} - ${siteConfig.url}/articles/${article.slug}/`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
          >
            واتس‌اپ
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(`${siteConfig.url}/articles/${article.slug}/`)}&text=${encodeURIComponent(article.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            تلگرام
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/articles/${article.slug}/`)}&text=${encodeURIComponent(article.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/20 transition-colors"
          >
            X
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-6 pt-6 border-t border-border">
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            ← بازگشت به آرشیو مقالات
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </article>

      {/* JSON-LD Structured Data for Article */}
      <script type="application/ld+json">
        {JSON.stringify(articleJsonLd, null, 2)}
      </script>
    </div>
  );
}