"use client";

export function ShareButton({
  platform,
  href,
  onCopy,
}: {
  platform: "whatsapp" | "telegram" | "x" | "facebook" | "copy";
  href?: string;
  onCopy?: () => void;
}) {
  const platformLabels = {
    whatsapp: "واتس‌اپ",
    telegram: "تلگرام",
    x: "X",
    facebook: "فیسبوک",
    copy: "کپی کردن لینک",
  };

  if (platform === "copy") {
    return (
      <button
        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-text-primary hover:bg-surface-elevate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
        onClick={onCopy}
        aria-label="کپی کردن لینک"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4h1v2h-1V4zm3 7h1v2h-1V11zm3 7h1v2h-1v-2zm3 7h1v2h-1v-2zm-7 4h1v2h-1V15zm3 7h1v2h-1v-2zm-7 4h-2v-2h2V7zm3 7v2h2V7zm3 7v2h2V11zm3-10v2h2V7h-2zm3 4v2h2V11h-2zm3 4v2h2V11h-2zm-7-4h-2v-2h2V7zm-3 4h-2v-2h2V11zm-3 4h-2v-2h2V15z" />
        </svg>
        {platformLabels[platform]}
      </button>
    );
  }

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-text-primary hover:bg-surface-elevate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 aria-label="${platformLabels[platform]}"`}
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M16 4h1v2h-1V4zm3 7h1v2h-1V11zm3 7h1v2h-1v-2zm3 7h1v2h-1v-2zm-7 4h1v2h-1V15zm3 7h1v2h-1v-2zm-7 4h-2v-2h2V7zm3 7v2h2V7zm3 7v2h2V11zm3-10v2h2V7h-2zm3 4v2h2V11h-2zm3 4v2h2V11h-2zm-7-4h-2v-2h2V7zm-3 4h-2v-2h2V11zm-3 4h-2v-2h2V15z" />
      </svg>
      {platformLabels[platform]}
    </a>
  );
}