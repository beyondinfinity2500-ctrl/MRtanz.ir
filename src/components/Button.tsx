"use client";

interface ButtonProps {
  variant: "primary" | "secondary" | "youtube" | "ghost" | "icon";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, onClick, disabled = false, children }: ButtonProps) {
  // Semantic color classes based on the globals.css tokens
  const variantClasses = {
    primary: "bg-accent-primary text-background hover:bg-accent-primary/90 active:bg-accent-primary/80 shadow-sm",
    secondary: "bg-transparent text-text-primary hover:bg-surface-elevated active:bg-surface-elevated/80 transition-colors",
    youtube: "bg-yt text-white hover:bg-yt-hover active:bg-yt-hover/90 shadow-sm",
    ghost: "bg-transparent text-text-primary hover:bg-surface-elevated active:bg-surface-elevated/80 transition-colors",
    icon: "bg-transparent text-text-primary hover:bg-surface-elevated active:bg-surface-elevated/80 transition-colors w-10 h-10 rounded-md flex items-center justify-center",
  };

  const baseClasses = "inline-flex items-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant as keyof typeof variantClasses]} ${className || ""}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}