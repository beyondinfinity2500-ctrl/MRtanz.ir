import type { Playlist } from "./types";

export const playlists: Playlist[] = [
  {
    id: "1",
    slug: "iranian-diaspora-comedy",
    youtubePlaylistId: "PLLvRCj3YSoGMQ_4CO1dpQ12djpU1vudQt",
    title: "طنز ایرانیان خارج از میهن",
    description: "بهترین کلیپ‌های طنز ایرانیان خارج از کشور",
    thumbnail: "",
    category: "طنز ایرانی",
    featured: true,
    order: 1,
  },
  {
    id: "2",
    slug: "stand-up-comedy",
    youtubePlaylistId: "",
    title: "استندآپ کمدی",
    description: "برترین استندآپ کمدی‌های مستر طنز",
    thumbnail: "",
    category: "استندآپ",
    featured: true,
    order: 2,
  },
  {
    id: "3",
    slug: "hidden-camera",
    youtubePlaylistId: "",
    title: "دوربین مخفی",
    description: "کلیپ‌های دوربین مخفی خنده‌دار",
    thumbnail: "",
    category: "دوربین مخفی",
    featured: false,
    order: 3,
  },
  {
    id: "4",
    slug: "dubbing-comedy",
    youtubePlaylistId: "",
    title: "صداگذاری طنز",
    description: "دوبله و صداگذاری طنز روی کلیپ‌ها",
    thumbnail: "",
    category: "صداگذاری",
    featured: false,
    order: 4,
  },
  {
    id: "5",
    slug: "short-clips",
    youtubePlaylistId: "",
    title: "کلیپ‌های کوتاه",
    description: "کلیپ‌های کوتاه و خنده‌دار",
    thumbnail: "",
    category: "کلیپ کوتاه",
    featured: false,
    order: 5,
  },
  {
    id: "6",
    slug: "weekly-picks",
    youtubePlaylistId: "",
    title: "منتخب هفته",
    description: "بهترین کلیپ‌های هفته از مستر طنز",
    thumbnail: "",
    category: "منتخب",
    featured: true,
    order: 6,
  },
];

export const featuredPlaylists = playlists
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export function getPlaylistBySlug(slug: string): Playlist | undefined {
  return playlists.find((p) => p.slug === slug);
}

export function getPlaylistsByCategory(category: string): Playlist[] {
  return playlists.filter((p) => p.category === category);
}

export function getPlaylistCategories(): string[] {
  return [...new Set(playlists.map((p) => p.category))];
}

export function getRelatedPlaylists(playlist: Playlist, limit = 3): Playlist[] {
  return playlists
    .filter((p) => p.id !== playlist.id && p.category === playlist.category)
    .slice(0, limit);
}
