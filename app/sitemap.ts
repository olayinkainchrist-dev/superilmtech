import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://superilmtech.com",
      lastModified: new Date(),
    },
  ]
}