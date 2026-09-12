import { socialLinks, youtubeConfig } from "@/data/site";

export function YouTubeBanner() {
  return (
    <div className="bg-yt text-white text-center py-2">
      <a
        href={youtubeConfig.subscribeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-90 transition-opacity"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        مستر طنز در یوتیوب — سابسکرایب کنید!
      </a>
    </div>
  );
}

export function SocialBar() {
  return (
    <div className="flex items-center justify-center gap-4 py-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-surface-400 hover:text-brand-500 transition-colors text-sm"
          aria-label={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
