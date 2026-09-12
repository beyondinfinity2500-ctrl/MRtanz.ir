import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "ویدیوها",
  description:
    "تمام ویدیوهای طنز، استندآپ کمدی، دوبله طنز و کلیپ‌های خنده‌دار مستر طنز",
  alternates: {
    canonical: `${siteConfig.url}/videos/`,
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
