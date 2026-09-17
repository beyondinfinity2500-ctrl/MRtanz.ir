import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "حمایت از مستر طنز با خرید از دیجی‌کالا",
  description:
    "حمایت از مستر طنز، بدون پرداخت یک ریال! با خرید از دیجی‌کالا از طریق لینک همکاری در فروش مستر طنز",
  alternates: {
    canonical: `${siteConfig.url}/digikala/`,
  },
};

export default function DigikalaPage() {
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
            همون‌طور که می‌دونید ساخت کار با کیفیت هزینه داره، مخصوصاً ساخت کلیپ طنز
            که در این تورم و گرانی بتونه انرژی و روحیه بده!
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            ما در مستر طنز یه راهکار خیلی ساده، اما بسیار مهم رو پیاده کردیم که
            شما عزیزان بدون پرداخت حتی یک ریال، چه بصورت مستقیم و چه غیر مستقیم!
            از مستر طنز و خندیدن و شاد بودن حمایت مالی کنید.
          </p>
          <p className="text-text-primary font-bold text-base">
            و راهکار بسیار ساده هست:
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">چطور کار می‌کنه؟</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            سایت دیجی‌کالا بزرگ‌ترین فروشگاه اینترنتی خاورمیانه هست و ایرانیان بسیار
            زیادی از این فروشگاه اینترنتی خرید می‌کنند.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            در واقع کافیه شما یا دوستانتان هربار که از سایت دیجی‌کالا خرید دارید،
            آدرس سایت مستر طنز یعنی www.MrTanz.ir رو وارد کنید و روی بنر دیجی‌کالا
            کلیک کنید و هر محصولی رو که دوست دارید سفارش بدید!
          </p>
          <a
            href="https://www.digikala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold bg-accent-primary text-background hover:bg-accent-primary/90 transition-all duration-200"
          >
            برای ورود به دیجی‌کالا اینجا کلیک کنید
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
            در واقع دیجی‌کالا به جای اینکه بیاد هزینه هنگفت تبلیغات ماهانه و سالانه
            بده که تاثیر اون روی افزایش فروش مشخص نیست، میاد به افرادی که در کار فروش
            به دیجی‌کالا کمک می‌کنند (همکاری در فروش) پورسانت میده!
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            آیا برای حمایت از من پولی کم می‌شود؟
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            پس همون‌طور که مشاهده می‌فرمایید، دیجی‌کالا هزینه تبلیغات رو بابت
            کمیسیون فروش به مستر طنز پرداخت می‌کنه، بدون اینکه یک ریال تفاوت
            قیمتی برای شما وجود داشته باشه!
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            پس چه شما مستقیم از دیجی‌کالا خرید کنید و چه از طریق سایت مستر طنز،
            یک ریال هزینه اضافه پرداخت نخواهید کرد!
          </p>
          <p className="text-accent-primary font-bold text-base">
            اما یه تفاوت داره که از طنز و شادی و خندوندن رایگان آدم‌ها حمایت
            می‌کنید!
          </p>
        </section>
      </div>
    </div>
  );
}
