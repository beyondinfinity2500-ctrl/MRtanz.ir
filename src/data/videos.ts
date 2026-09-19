import type { Video } from "./types";

export const videos: Video[] = [
  {
    id: "1",
    slug: "پخش-زنده-فیلم-صدا-سیما",
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
    slug: "کلیپ-طنز-جدید-میثاقی",
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
    slug: "فیلم-دوبله-طنز-دروازه-بان-استقلال",
    youtubeId: "c1Y5k_Aq2CI",
    title: "کلیپ طنز دوبله",
    description: "کلیپ طنز دوبله شده از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/c1Y5k_Aq2CI/hqdefault.jpg",
    duration: "",
    category: "دوبله طنز",
    featured: false,
    popular: true,
    tags: ["طنز", "دوبله"],
  },
  {
    id: "4",
    slug: "فیلم-دکتر-بازی-زمان-شاه",
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
    slug: "فیلم-طنز-رونالدو",
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
  {
    id: "6",
    slug: "فیلم-نوستالژی",
    youtubeId: "gTfXg1vTnTY",
    title: "نوستالژی",
    description: "کلیپ نوستالژی از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/gTfXg1vTnTY/hqdefault.jpg",
    duration: "",
    category: "نوستالژی",
    featured: false,
    popular: false,
    tags: ["نوستالژی", "طنز"],
  },
  {
    id: "7",
    slug: "فیلم-شوهر-کاربلد-سیاستمدار",
    youtubeId: "FMo8Vt4U4A0",
    title: "شوهر کاربلد و سیاستمدار ایرانی یعنی ایشون",
    description: "کلیپ کوتاه طنز از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/FMo8Vt4U4A0/hqdefault.jpg",
    duration: "",
    category: "ویدیوهای کوتاه",
    featured: false,
    popular: false,
    tags: ["طنز", "کوتاه", "ایرانی"],
  },
  {
    id: "8",
    slug: "فیلم-گاگول-گوگل",
    youtubeId: "lr27B_KicdA",
    title: "یک گاگول در گوگل!",
    description: "کلیپ کوتاه طنز از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/lr27B_KicdA/hqdefault.jpg",
    duration: "",
    category: "ویدیوهای کوتاه",
    featured: false,
    popular: false,
    tags: ["طنز", "کوتاه", "گوگل"],
  },
  {
    id: "9",
    slug: "فیلم-تعریف-ترکیه‌ای-عروس-ایرانی",
    youtubeId: "0p-6I0Etiaw",
    title: "تعریف ترکیه ای ها از عروس ایرانی",
    description: "کلیپ کوتاه طنز از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/0p-6I0Etiaw/hqdefault.jpg",
    duration: "",
    category: "ویدیوهای کوتاه",
    featured: false,
    popular: false,
    tags: ["طنز", "کوتاه", "ترکیه"],
  },
  {
    id: "10",
    slug: "فیلم-مشکل-آموزش-دختر-ایرانی",
    youtubeId: "ucAvte7RJlM",
    title: "مشکل آموزش به دختر ایرانی",
    description: "کلیپ کوتاه طنز از مستر طنز",
    thumbnail: "https://img.youtube.com/vi/ucAvte7RJlM/hqdefault.jpg",
    duration: "",
    category: "ویدیوهای کوتاه",
    featured: false,
    popular: false,
    tags: ["طنز", "کوتاه", "آموزش"],
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
