import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://superilmtech.com"),

  title: {
    default: "SuperILM Tech | Software, SaaS, AI & POS Solutions",
    template: "%s | SuperILM Tech",
  },

  description:
    "SuperILM Tech builds scalable software, SaaS platforms, AI tools, POS systems, cloud solutions, business automation, and enterprise software for modern businesses.",

  keywords: [
    "SuperILM Tech",
    "SuperILM Technologies",
    "software development company",
    "SaaS development company",
    "AI solutions company",
    "POS systems",
    "retail POS software",
    "Nigeria tech company",
    "software company in Nigeria",
    "web development",
    "enterprise software",
    "cloud software",
    "business automation",
    "custom software development",
    "FastAPI development",
    "Next.js development",
  ],

  authors: [{ name: "SuperILM Tech", url: "https://superilmtech.com" }],
  creator: "SuperILM Tech",
  publisher: "SuperILM Tech",
  applicationName: "SuperILM Tech",

  alternates: {
    canonical: "https://superilmtech.com",
  },

  openGraph: {
    title: "SuperILM Tech | Software, SaaS, AI & POS Solutions",
    description:
      "Building production-ready software, SaaS platforms, AI systems, POS solutions, dashboards, cloud tools, and enterprise technology for modern businesses.",
    url: "https://superilmtech.com",
    siteName: "SuperILM Tech",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuperILM Tech - Software, SaaS, AI and POS Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SuperILM Tech | Software, SaaS, AI & POS Solutions",
    description:
      "Scalable software, SaaS platforms, AI systems, POS solutions, and enterprise technology for modern businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  )
}