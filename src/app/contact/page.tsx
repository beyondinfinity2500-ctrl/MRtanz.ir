import type { Metadata } from "next";
import { siteConfig, contactInfo, socialLinks } from "@/data/site";
import { AdSlot } from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباطی با مستر طنز — پیام در واتساپ، اینستاگرام و یوتیوب",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="container-main py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-extrabold text-text-primary mb-2">تماس با ما</h1>
      <p className="text-text-muted text-sm mb-8">
        برای پیشنهادات، انتقادات و همکاری با ما در ارتباط باشید
      </p>

      <div className="space-y-6">
        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">واتساپ</h2>
          <p className="text-sm text-text-muted mb-3">
            سریع‌ترین راه ارتباطی با ما
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-green-600 text-white hover:bg-green-700 text-sm"
          >
            ارسال پیام در واتساپ
          </a>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">شبکه‌های اجتماعی</h2>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-primary hover:text-accent-primary/80 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">تبلیغات و همکاری</h2>
          <p className="text-sm text-text-muted mb-3">
            برای سفارش تبلیغات و اسپانسری کلیپ از طریق واتساپ یا اینستاگرام با ما تماس بگیرید.
          </p>
          <Link
            href="/advertise/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            اطلاعات تبلیغات
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">حمایت مالی</h2>
          <p className="text-sm text-text-muted mb-3">
            با خرید از دیجی‌کالا از طریق لینک همکاری در فروش، بدون هزینه اضافه از مستر طنز حمایت کنید.
          </p>
          <Link
            href="/digikala.html"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            خرید از دیجی کالا و حمایت از مستر طنز
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </section>
      </div>

      <AdSlot slot="CONTENT_AD" className="my-8 mx-auto" />
    </div>
  );
}
