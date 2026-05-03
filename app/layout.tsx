import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://superilmtech.com"),

  title: {
    default: "SuperILM Tech | Software, SaaS & AI Solutions",
    template: "%s | SuperILM Tech",
  },

  description:
    "SuperILM Tech builds scalable software, SaaS platforms, AI tools, POS systems, cloud solutions, and enterprise software for modern businesses.",

  keywords: [
    "SuperILM Tech",
    "SuperILM Technologies",
    "software development",
    "SaaS development",
    "AI solutions",
    "POS systems",
    "Nigeria tech company",
    "web development",
    "enterprise software",
    "cloud software",
    "business automation",
    "custom software development",
  ],

  authors: [{ name: "SuperILM Tech" }],
  creator: "SuperILM Tech",
  publisher: "SuperILM Tech",

  alternates: {
    canonical: "https://superilmtech.com",
  },

  openGraph: {
    title: "SuperILM Tech | Software, SaaS & AI Solutions",
    description:
      "Building production-ready software, SaaS platforms, AI systems, POS solutions, and enterprise technology for modern businesses.",
    url: "https://superilmtech.com",
    siteName: "SuperILM Tech",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuperILM Tech - Software, SaaS and AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SuperILM Tech | Software, SaaS & AI Solutions",
    description:
      "Scalable software, SaaS platforms, AI systems, POS solutions, and enterprise technology for modern businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}