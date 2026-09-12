import type { AdSlotName } from "./types";

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
