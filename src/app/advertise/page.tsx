import type { Metadata } from "next";
import { siteConfig, contactInfo } from "@/data/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "تبلیغات",
  description:
    "سفارش تبلیغات و اسپانسری در مستر طنز — ساخت کلیپ و ترانه تبلیغاتی برای برند شما",
  alternates: {
    canonical: `${siteConfig.url}/advertise/`,
  },
};

export default function AdvertisePage() {
  return (
    <div className="container-main py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-extrabold text-text-primary mb-2">تبلیغات</h1>
      <p className="text-text-muted text-sm mb-8">
        سفارش تبلیغات و حمایت مالی از مستر طنز
      </p>

      <div className="space-y-6">
        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">انواع تبلیغات</h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>اسپانسری کلیپ با موضوعات مختلف</li>
            <li>معرفی برند در ابتدا یا انتهای کلیپ</li>
            <li>ساخت کلیپ و ترانه تبلیغاتی</li>
            <li>تبلیغات بنری در سایت</li>
          </ul>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">چرا مستر طنز؟</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            مهم‌ترین راز موفقیت در تبلیغات و بازاریابی قانع کردن مشتری به روش منطقی
            نیست، بلکه ایجاد رابطه احساسی با مشتری پیش از هر نوع رابطه دیگه‌ای هست!
          </p>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">تماس</h2>
          <p className="text-sm text-text-muted mb-3">
            برای شروع و مشاوره لطفاً در واتساپ پیام ارسال بفرمایید
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold bg-success text-white hover:bg-success/90 transition-all duration-200"
          >
            ارسال پیام در واتساپ
          </a>
        </section>
      </div>

      <AdSlot slot="CONTENT_AD" className="my-8 mx-auto" />
    </div>
  );
}
