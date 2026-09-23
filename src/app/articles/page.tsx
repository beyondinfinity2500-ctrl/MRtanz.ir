import type { Metadata } from "next";
import { ArticleCard } from "@/components/Card";
import { articles } from "@/data/articles";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "مقالات و نوشته‌ها",
  description: "مقالات و نوشته‌های آموزنده و سرگرم‌کننده از مستر طنز",
  alternates: {
    canonical: `${siteConfig.url}/articles/`,
  },
};

export default function ArticlesPage() {
  return (
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
          <span className="text-text-primary text-sm font-medium">مقالات و نوشته‌ها</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">مقالات و نوشته‌ها</h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
          مقالات و نوشته‌های آموزنده و سرگرم‌کننده از مستر طنز
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* CTA / Navigation */}
        <div className="mt-8 card p-6 text-center">
          <h3 className="text-lg font-bold text-text-primary mb-3">آرشیو مقالات</h3>
          <p className="text-text-muted mb-4">
            مقالات بیشتری به تازگی به آرشیو اضافه می‌شود
          </p>
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold bg-accent-primary text-background hover:bg-accent-primary/90 transition-all duration-200"
          >
            مشاهده همه مقالات
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}