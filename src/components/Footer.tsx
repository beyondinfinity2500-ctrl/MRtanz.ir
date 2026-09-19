import Link from "next/link";
import { navigationItems, socialLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-surface-elevated mt-auto py-10"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-extrabold text-text-primary">مستر</span>
              <span className="text-xl font-extrabold text-accent-primary"> طنز</span>
            </Link>
            <p className="text-sm leading-relaxed text-text-muted">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-text mb-4">لینک‌ها</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-text-muted hover:text-accent-primary transition-colors cursor-pointer`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-text mb-4">شبکه‌های اجتماعی</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-text-muted hover:text-accent-primary transition-colors cursor-sm flex items-center gap-1`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. تمامی حقوق محفوظ است.
          </p>
          <p>
            <a href="https://www.y22.ir" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">
              طراحی توسط سایت راهنمای تهران
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}