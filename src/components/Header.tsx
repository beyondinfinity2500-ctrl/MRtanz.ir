"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationItems, youtubeConfig } from "@/data/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrollY > 100 ? "shadow-md" : "shadow-sm";

  return (
    <header
      className={`sticky top-0 z-50 bg-${scrollY > 50 ? "surface-elevated" : "surface"} border-b border-${scrollY > 50 ? "border" : "surface-900"} transition-colors ${navClass} `}
    >
      <div className="container-main flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-extrabold text-accent-primary">طنز</span>
          <span className="text-xl font-extrabold text-text-primary">مستر</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-${scrollY > 100 ? "secondary" : "text-text-secondary"} hover:text-${scrollY > 100 ? "accent-primary" : "accent-primary"} transition-colors ${
                item.href === "/"
                  ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent-primary after:after:rounded-md after:after:after:content-['']"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={youtubeConfig.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-youtube btn-primary text-xs px-3 py-1.5 hidden sm:flex items-center gap-2 ${scrollY > 100 ? "opacity-90" : ""} transition-opacity`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            سابسکرایب
          </a>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-surface-elevated">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 text-text-secondary text-sm hover:text-accent-primary hover:bg-surface-accent transition-colors ${
                item.href === "/" ? "after:after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent-primary after:after:rounded-md"
                : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={youtubeConfig.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-3 text-sm text-yt hover:bg-surface-accent transition-colors`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            سابسکرایب یوتیوب
          </a>
        </nav>
      )}
    </header>
  );
}