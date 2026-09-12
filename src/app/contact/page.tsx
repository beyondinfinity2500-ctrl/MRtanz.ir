import type { Metadata } from "next";
import { siteConfig, contactInfo, socialLinks } from "@/data/site";
import { AdSlot } from "@/components/AdSlot";

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
      <h1 className="text-2xl font-extrabold text-surface-900 mb-2">تماس با ما</h1>
      <p className="text-surface-500 text-sm mb-8">
        برای پیشنهادات، انتقادات و همکاری با ما در ارتباط باشید
      </p>

      <div className="space-y-6">
        <section className="card p-5">
          <h2 className="font-bold text-surface-800 mb-3">واتساپ</h2>
          <p className="text-sm text-surface-500 mb-3">
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
          <h2 className="font-bold text-surface-800 mb-3">شبکه‌های اجتماعی</h2>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-surface-800 mb-3">تبلیغات و همکاری</h2>
          <p className="text-sm text-surface-500">
            برای سفارش تبلیغات و اسپانسری کلیپ از طریق واتساپ یا اینستاگرام با ما تماس بگیرید.
          </p>
        </section>
      </div>

      <AdSlot slot="CONTENT_AD" className="my-8 mx-auto" />
    </div>
  );
}
