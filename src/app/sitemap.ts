import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { videos } from "@/data/videos";
import { playlists } from "@/data/playlists";
import { articles } from "@/data/articles";
import { jokes } from "@/data/jokes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const videoEntries: MetadataRoute.Sitemap = videos.map((video) => ({
    url: `${baseUrl}/videos/${video.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const playlistEntries: MetadataRoute.Sitemap = playlists.map((playlist) => ({
    url: `${baseUrl}/playlists/${playlist.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/videos/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...videoEntries,
    {
      url: `${baseUrl}/playlists/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...playlistEntries,
    {
      url: `${baseUrl}/jokes/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...jokes.map((joke) => ({
      url: `${baseUrl}/jokes/${joke.slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}/`,
      lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/advertise/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
