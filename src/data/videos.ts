import type { Video } from "./types";

export const videos: Video[] = [
  {
    id: "1",
    slug: "live-broadcast-cinema-tv",
    youtubeId: "E9XNlQCvdrU",
    title: "پخش زنده فیلم سوپر در صدا و سیما",
    description: "کلیپ طنز از مستر طنز درباره اتفاقات خنده‌دار صدا و سیما",
    thumbnail: "https://img.youtube.com/vi/E9XNlQCvdrU/hqdefault.jpg",
    duration: "۳:۲۴",
    category: "طنز ایرانی",
    featured: true,
    popular: true,
    tags: ["طنز", "ایرانی", "صدا و سیما"],
  },
  {
    id: "2",
    slug: "new-comedy-clip-mousavi",
    youtubeId: "",
    title: "نسخه تازه کلیپ طنز: آبش رو هم آقای میثاقی بخوره!",
    description: "کلیپ طنز جدید از مستر طنز",
    thumbnail: "",
    duration: "۲:۴۵",
    category: "طنز ایرانی",
    featured: false,
    popular: true,
    tags: ["طنز", "ایرانی"],
  },
  {
    id: "3",
    slug: "dubbing-goalkeeper-comedy",
    youtubeId: "",
    title: "دوبله طنز وقت کشی دروازه بان استقلال",
    description: "کلیپ طنز دوبله شده درباره دروازه بان استقلال",
    thumbnail: "",
    duration: "۱:۵۸",
    category: "دوبله طنز",
    featured: false,
    popular: true,
    tags: ["طنز", "فوتبال", "استقلال"],
  },
  {
    id: "4",
    slug: "doctor-game-shah-era",
    youtubeId: "",
    title: "کلیپ طنز: دکتربازی تو زمان شاه!",
    description: "کلیپ طنز تاریخی از مستر طنز",
    thumbnail: "",
    duration: "۴:۱۲",
    category: "طنز ایرانی",
    featured: false,
    popular: false,
    tags: ["طنز", "تاریخی"],
  },
  {
    id: "5",
    slug: "ronaldo-comedy-clip",
    youtubeId: "",
    title: "کلیپ طنز رونالدو",
    description: "کلیپ طنز ورزشی درباره رونالدو",
    thumbnail: "",
    duration: "۲:۳۰",
    category: "طنز ورزشی",
    featured: false,
    popular: true,
    tags: ["طنز", "ورزشی", "رونالدو"],
  },
];

export const featuredVideo = videos.find((v) => v.featured) ?? videos[0];
export const popularVideos = videos.filter((v) => v.popular);

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getVideosByCategory(category: string): Video[] {
  return videos.filter((v) => v.category === category);
}

export function getVideoCategories(): string[] {
  return [...new Set(videos.map((v) => v.category))];
}

export function getRelatedVideos(video: Video, limit = 3): Video[] {
  return videos
    .filter((v) => v.id !== video.id && (v.category === video.category || v.tags.some((t) => video.tags.includes(t))))
    .slice(0, limit);
}
