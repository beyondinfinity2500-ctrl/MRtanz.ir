import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const DIGIKALA_AFFILIATE_URL = "https://dgkl.io/api/v1/Click/vu2dt";

export const metadata: Metadata = {
  title: "حمایت از مستر طنز با خرید از دیجی‌کالا",
  description:
    "حمایت از مستر طنز با خرید از دیجی‌کالا از طریق لینک همکاری در فروش. بدون هزینه اضافه، به ادامه فعالیت مستر طنز کمک کنید.",
  alternates: {
    canonical: `${siteConfig.url}/digikala.html`,
  },
  openGraph: {
    title: "حمایت از مستر طنز با خرید از دیجی‌کالا",
    description:
      "حمایت از مستر طنز با خرید از دیجی‌کالا از طریق لینک همکاری در فروش. بدون هزینه اضافه.",
    type: "website",
    url: `${siteConfig.url}/digikala.html`,
  },
};

export default function DigikalaLegacyPage() {
  return (
    <div className="container-main py-8 md:py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-6">
        حمایت از مستر طنز
      </h1>

      <div className="space-y-8">
        <section className="card p-6 sm:p-8">
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            درود به شما دوستان گرامی
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            ساخت محتوای با کیفیت و رایگان نیاز به حمایت شما عزیزان دارد.
            یکی از ساده‌ترین راه‌ها برای حمایت از مستر طنز، خرید از دیجی‌کالا
            از طریق لینک همکاری در فروش ماست.
          </p>
          <p className="text-text-primary font-bold text-base">
            خرید بعدی‌ات از دیجی‌کالا را از لینک ما انجام بده.
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">چطور کار می‌کنه؟</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            خرید از طریق لینک مستر طنز هیچ هزینه اضافه‌ای برای کاربر ندارد.
            این لینک از سیستم همکاری در فروش دیجی‌کالا استفاده می‌کند.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            خرید کاربر می‌تواند از فعالیت مستر طنز حمایت کند — بدون اینکه
            یک ریال بیشتر پرداخت کند.
          </p>
          <a
            href={DIGIKALA_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold bg-accent-primary text-background hover:bg-accent-primary/90 transition-all duration-200"
          >
            خرید از دیجی‌کالا
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            چرا دیجی‌کالا این کار را می‌کند؟
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            دیجی‌کالا به جای هزینه تبلیغات گسترده، به افرادی که در جذب مشتری
            کمک می‌کنند کمیسیون پرداخت می‌کند. این روش به نفع همه طرف‌هاست.
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            آیا برای من هزینه اضافه‌ای دارد؟
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            خیر. چه مستقیم از دیجی‌کالا خرید کنید و چه از طریق لینک مستر طنز،
            هیچ تفاوت قیمتی وجود ندارد.
          </p>
          <p className="text-accent-primary font-bold text-base">
            اما با خرید از لینک ما، از طنز و شادی و خندوندن رایگان آدم‌ها حمایت می‌کنید!
          </p>
        </section>
      </div>
    </div>
  );
}
