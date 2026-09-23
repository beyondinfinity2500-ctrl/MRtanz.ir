import type { AdSlotName } from "./types";

export interface Advertisement {
  id: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  active: boolean;
}

export const advertisements: Advertisement[] = [
  {
    id: "tr90",
    title: "راهنمای سفر به ترکیه",
    description: "اطلاعات کامل سفر، هتل، ویزا و راهنمای گردشگری ترکیه",
    url: "https://www.tr90.ir",
    domain: "tr90.ir",
    active: true,
  },
  {
    id: "adim",
    title: "کاریابی در ترکیه",
    description: "فرصت‌های شغلی، راهنمای کاریابی و استخدام در ترکیه",
    url: "https://www.adim.top",
    domain: "adim.top",
    active: true,
  },
  {
    id: "newsiq",
    title: "تحلیل مالی اخبار ترند جهان",
    description: "تحلیل بازارهای مالی، اخبار اقتصادی و ترندهای جهانی",
    url: "https://www.newsiq.top/fa",
    domain: "newsiq.top",
    active: true,
  },
];

export const activeAdvertisements: Advertisement[] = advertisements.filter(
  (ad) => ad.active
);

interface AdSlotConfig {
  name: AdSlotName;
  label: string;
  width: string;
  height: string;
  enabled?: boolean;
}

export const adSlots: Record<AdSlotName, AdSlotConfig> = {
  HEADER_AD: {
    name: "HEADER_AD",
    label: "تبلیغات هدر",
    width: "468px",
    height: "60px",
    enabled: false,
  },
  TOP_AD: {
    name: "TOP_AD",
    label: "تبلیغات بالا",
    width: "728px",
    height: "90px",
    enabled: true,
  },
  VIDEO_INLINE_AD: {
    name: "VIDEO_INLINE_AD",
    label: "تبلیغات بین ویدیوها",
    width: "100%",
    height: "90px",
    enabled: true,
  },
  JOKE_INLINE_AD: {
    name: "JOKE_INLINE_AD",
    label: "تبلیغات بین جوک‌ها",
    width: "100%",
    height: "90px",
    enabled: true,
  },
  CONTENT_AD: {
    name: "CONTENT_AD",
    label: "تبلیغات محتوا",
    width: "100%",
    height: "90px",
    enabled: true,
  },
  FOOTER_AD: {
    name: "FOOTER_AD",
    label: "تبلیغات پا",
    width: "728px",
    height: "90px",
    enabled: false,
  },
};
