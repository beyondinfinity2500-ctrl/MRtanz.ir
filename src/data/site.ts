export const siteConfig = {
  name: "مستر طنز",
  nameEn: "MrTanz",
  url: "https://mrtanz.ir",
  description:
    "مستر طنز | سایت خنده، سرگرمی، استندآپ کمدی، کلیپ‌های خنده‌دار و چالشی از کانال یوتیوب و آپارات",
  shortDescription: "خنده و سرگرمی و استندآپ کمدی",
  ogImage: "/og-default.png",
  locale: "fa-IR",
  language: "fa",
  dir: "rtl" as const,
};

export const youtubeConfig = {
  channelUrl: "https://youtube.com/iraniandiaspora",
  channelId: "UCiraniandiaspora",
  subscribeUrl: "https://youtube.com/@iraniandiaspora?sub_confirmation=1",
};

export const socialLinks = [
  {
    name: "یوتیوب",
    url: "https://youtube.com/iraniandiaspora",
    icon: "youtube" as const,
  },
  {
    name: "اینستاگرام",
    url: "https://www.instagram.com/y22.ir",
    icon: "instagram" as const,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1EtBzLyYWt/",
    icon: "facebook" as const,
  },
  {
    name: "فیلیمو",
    url: "https://www.ifilo.net/www.y22.ir",
    icon: "ifilo" as const,
  },
];

export const navigationItems = [
  { label: "خانه", href: "/" },
  { label: "ویدیوها", href: "/videos/" },
  { label: "پلی‌لیست‌ها", href: "/playlists/" },
  { label: "آرشیو جوک", href: "/jokes/" },
  { label: "دیجی کالا", href: "/digikala.html" },
  { label: "تماس با ما", href: "/contact/" },
];

export const contactInfo = {
  whatsapp: "09120233665",
  email: null,
  instagram: "https://www.instagram.com/y22.ir",
};
