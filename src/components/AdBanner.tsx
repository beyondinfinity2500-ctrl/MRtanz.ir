import { activeAdvertisements } from "@/data/ads";

interface AdBannerProps {
  index?: number;
  className?: string;
}

export function AdBanner({ index = 0, className = "" }: AdBannerProps) {
  if (activeAdvertisements.length === 0) {
    return null;
  }

  const ad = activeAdvertisements[index % activeAdvertisements.length];

  return (
    <aside
      className={className}
      role="complementary"
      aria-label="تبلیغات"
    >
      <a
        href={ad.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="card p-5 flex flex-col gap-2 hover:shadow-md transition-shadow group border border-border"
      >
        <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
          تبلیغات
        </span>
        <span className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors">
          {ad.title}
        </span>
        <span className="text-xs text-text-muted leading-relaxed">
          {ad.description}
        </span>
        <span className="text-[10px] text-accent-primary mt-auto">
          {ad.domain}
        </span>
      </a>
    </aside>
  );
}