import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "پلی‌لیست‌ها",
  description:
    "پلی‌لیست‌های طنز مستر طنز شامل استندآپ، دوربین مخفی، صداگذاری و کلیپ‌های کوتاه",
  alternates: {
    canonical: `${siteConfig.url}/playlists/`,
  },
};

export default function PlaylistsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
