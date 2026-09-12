"use client";

export function EmptyState({
  icon,
  title,
  description,
  button,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  button?: {
    label: string;
    href: string;
    asChild?: boolean;
    children?: React.ReactNode;
  };
  className?: string;
}) {
  return (
    <div className={`text-center py-16 ${className || ""}`}>
      {icon && <div className="mx-auto mb-6">{icon}</div>}
      <h2 className="text-2xl font-extrabold text-text-primary mb-2">{title}</h2>
      <p className="text-text-muted text-lg mb-6">{description}</p>

      {button && (
        <a
          href={button.href}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-accent-primary hover:bg-surface-elevate transition-colors"
        >
          {button.asChild ? button.children : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h2.77a5.5 5.5 0 0 1 .7 1.4h-2.05a3.2 3.2 0 0 0-.5 2.1 3.2 3.2 0 0 0 .4 1.4h2.15a5.5 5.5 0 0 1 1.33 1.38A11.96 11.96 0 0 1 21.5 12c0-3.16-1.39-5.96-3.8-8.15a5.5 5.5 0 0 1 1.33-1.38h2.15a3.2 3.2 0 0 0 .4-2.1 3.2 3.2 0 0 0-.5-2.1h-2.05a5.5 5.5 0 0 1-.7-1.4H15.5z" />
              </svg>
              {button.label}
            </>
          )}
        </a>
      )}
    </div>
  );
}