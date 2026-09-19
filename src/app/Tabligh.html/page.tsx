import type { Metadata } from "next";
import { siteConfig, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "تبلیغات در مستر طنز",
  description:
    "سفارش تبلیغات و اسپانسری در مستر طنز — ساخت کلیپ و ترانه تبلیغاتی برای برند شما. تبلیغات در ویدیوها و کلیپ‌های طنز",
  alternates: {
    canonical: `${siteConfig.url}/Tabligh.html`,
  },
  openGraph: {
    title: "تبلیغات در مستر طنز",
    description:
      "سفارش تبلیغات و اسپانسری در مستر طنز — ساخت کلیپ و ترانه تبلیغاتی برای برند شما",
    type: "website",
    url: `${siteConfig.url}/Tabligh.html`,
  },
};

export default function TablighLegacyPage() {
  return (
    <div className="container-main py-8 md:py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-6">
        تبلیغات در مستر طنز
      </h1>

      <div className="space-y-8">
        <section className="card p-6 sm:p-8">
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            اگر به دنبال تبلیغات مؤثر و خلاقانه برای برند خود هستید، مستر طنز با
            مخاطبان میلیونی خود در یوتیوب، آپارات و اینستاگرام آماده همکاری
            با شماست.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            مهم‌ترین راز موفقیت در تبلیغات و بازاریابی قانع کردن مشتری به روش منطقی
            نیست، بلکه ایجاد رابطه احساسی با مشتری پیش از هر نوع رابطه دیگه‌ای هست!
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">انواع تبلیغات</h2>
          <ul className="space-y-3 text-text-secondary text-base">
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>اسپانسری کلیپ با موضوعات مختلف</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>معرفی برند در ابتدا یا انتهای کلیپ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>ساخت کلیپ و ترانه تبلیغاتی</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>تبلیغات بنری در سایت</span>
            </li>
          </ul>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">چرا مستر طنز؟</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            مستر طنز با محتوای طنز و خنده‌دار خود توانسته مخاطبان زیادی را در
            پلتفرم‌های مختلف جذب کند. تبلیغات در محیطی شاد و مثبت، تأثیر بسیار
            بیشتری نسبت به تبلیغات سنتی دارد.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            مخاطبان ما ایرانیان داخل و خارج از کشور هستند که به دنبال محتوای با
            کیفیت و سالم می‌گردند.
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">تماس</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            برای شروع و مشاوره لطفاً در واتساپ پیام ارسال بفرمایید.
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold bg-success text-white hover:bg-success/90 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ارسال پیام در واتساپ
          </a>
        </section>
      </div>
    </div>
  );
}
