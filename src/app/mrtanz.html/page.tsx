import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "درباره مستر طنز",
  description:
    "درباره مستر طنز — سایت خنده، سرگرمی و استندآپ کمدی برای ایرانیان داخل و خارج از کشور. اهمیت خنده و شادی برای سلامت جسم و روح.",
  alternates: {
    canonical: `${siteConfig.url}/mrtanz.html`,
  },
  openGraph: {
    title: "درباره مستر طنز",
    description:
      "درباره مستر طنز — سایت خنده، سرگرمی و استندآپ کمدی برای ایرانیان داخل و خارج از کشور",
    type: "website",
    url: `${siteConfig.url}/mrtanz.html`,
  },
};

export default function MrTanzLegacyPage() {
  return (
    <div className="container-main py-8 md:py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-6">
        درباره مستر طنز
      </h1>

      <div className="space-y-8">
        <section className="card p-6 sm:p-8">
          <p className="text-text-secondary text-base leading-relaxed">
            شاید چون خندیدن رایگانه کسی پی به اهمیت حیاتی اون نمی‌ره! و ما در{" "}
            <strong className="text-text-primary">سایت مستر طنز</strong> اومدیم تا از
            اهمیت خنده بر جسم و روح و روان بگیم. اونم در عمل. یعنی با کلیپ‌های طنز و
            خنده‌دار و گاهی تو فکر بر... پس لطفاً www.MrTanz.ir رو از یاد نبرید تا
            خنده از یادتون نره!
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">ماموریت مستر طنز</h2>
          <p className="text-text-secondary text-base leading-relaxed">
            سایت مستر طنز اومده تا از اهمیت شادی و شاد بودن بگه، اومده تا بهترین
            کلیپ‌ها رو برای ارزشمندترین حس دنیا یعنی خندیدن ارائه بده.
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            اهمیت خندیدن در زندگی
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            مستر طنز شاید اولین رسانه جهان باشه که گاهی کلیپ‌های عاشقانه و غمگین هم
            می‌ذاره! چون تا وقتی غم نباشه ارزش شادی و خندیدن و خندوندن روشن نمیشه!
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            و این خیلی مهمه که به اهمیت و ارزش لبخند برای یک جامعه شاد پی ببریم و
            اگه یادمون بره یک ملت میشن مردم ماتم‌زده.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            اگرچه خیلیا آرزوشونه مردم غمگین و ماتم‌زده باشن! چون از غمگین بودن
            آدما پول در میارن و هرچه غم مردم بیشتر باشه پول بیشتر!
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            شادی و شاد بودن بهترین داروی بی‌ضرر برای مغزه، البته تا زمانی که در
            زمان مناسب باشه. استرس، وسواس فکری و نشخوار فکری باعث میشن ذهن مریض و
            افسرده بشه و توی این شلوغی‌های زندگی اگه اهمیت خنده و شادی رو درک
            نکنید و فکر کنید چون رایگانه پس بی‌ارزشه، بدجور باختید.
          </p>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-accent-primary mb-4">
            خنده رو فراموش نکن
          </h2>
          <ul className="space-y-3 text-text-secondary text-base">
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>از ته دل خندیدن خیلی بهتره</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>با دیگران خندیدن زندگیتو عوض می‌کنه</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-primary mt-1 shrink-0">✦</span>
              <span>
                حتی خنده الکی هم مغز رو خوشحال می‌کنه! پس وقتی حتی خیلی غمگین
                هستی الکی بخند تا مغز سکته نکنه!
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
