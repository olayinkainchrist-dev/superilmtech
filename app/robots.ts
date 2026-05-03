import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://superilmtech.com/sitemap.xml",
    host: "https://superilmtech.com",
  }
}