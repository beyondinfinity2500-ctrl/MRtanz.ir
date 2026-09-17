export interface Video {
  id: string;
  slug: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  category: string;
  publishedAt?: string;
  playlistId?: string;
  featured: boolean;
  popular: boolean;
  tags: string[];
}

export interface Playlist {
  id: string;
  slug: string;
  youtubePlaylistId: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  featured: boolean;
  order: number;
  videoCount?: number;
}

export type JokeSourceType =
  | "original"
  | "user-submitted"
  | "public-domain"
  | "licensed"
  | "curated-link";

export interface Joke {
  id: string;
  slug: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  sourceType?: JokeSourceType;
  sourceName?: string;
  sourceUrl?: string;
  author?: string;
  attribution?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export type AdSlotName =
  | "HEADER_AD"
  | "TOP_AD"
  | "VIDEO_INLINE_AD"
  | "JOKE_INLINE_AD"
  | "CONTENT_AD"
  | "FOOTER_AD";
