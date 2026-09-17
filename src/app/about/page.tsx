import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "درباره مستر طنز",
  description:
    "درباره مستر طنز — سایت خنده، سرگرمی و استندآپ کمدی برای ایرانیان داخل و خارج از کشور",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="container-main py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-extrabold text-text-primary mb-2">
        درباره مستر طنز
      </h1>

      <div className="space-y-6 mt-6">
        <section className="card p-5">
          <p className="text-text-secondary text-sm leading-relaxed">
            شاید چون خندیدن رایگانه کسی پی به اهمیت حیاتی اون نمی‌ره! و ما در{" "}
            <strong className="text-text-primary">سایت مستر طنز</strong> اومدیم تا از
            اهمیت خنده بر جسم و روح و روان بگیم. اونم در عمل. یعنی با کلیپ‌های طنز و
            خنده‌دار و گاهی تو فکر بر... پس لطفاً www.MrTanz.ir رو از یاد نبرید تا
            خنده از یادتون نره!
          </p>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">ماموریت مستر طنز</h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            سایت مستر طنز اومده تا از اهمیت شادی و شاد بودن بگه، اومده تا بهترین
            کلیپ‌ها رو برای ارزشمندترین حس دنیا یعنی خندیدن ارائه بده.
          </p>
        </section>

        <section className="card p-5">
          <h2 className="font-bold text-text-primary mb-3">اهمیت خندیدن در زندگی</h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            شادی و شاد بودن بهترین داروی بی‌ضرر برای مغزه. استرس، وسواس فکری و
            نشخوار فکری باعث میشه ذهن مریض و افسرده بشه. اگه اهمیت خنده و شادی رو
            درک نکنید و فکر کنید چون رایگانه پس بی‌ارزشه، بدجور باختید.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            <li>خنده رو فراموش نکن</li>
            <li>از ته دل خندیدن خیلی بهتره</li>
            <li>با دیگران خندیدن زندگیتو عوض می‌کنه</li>
            <li>
              حتی خنده الکی هم مغز رو خوشحال می‌کنه! پس وقتی حتی خیلی غمگین هستی
              الکی بخند تا مغز سکته نکنه!
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
