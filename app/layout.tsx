import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mupparaju Hemanth Kumar - Portfolio",
  description:
    "Aspiring Data Science Professional | B.Tech AI & Data Science Student | Python Developer | Cloud Enthusiast",
  generator: "v0.dev",
  keywords: ["Hemanth Kumar", "Data Science", "AI", "Python", "Portfolio", "Developer"],
  authors: [{ name: "Mupparaju Hemanth Kumar" }],
  creator: "Mupparaju Hemanth Kumar",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Mupparaju Hemanth Kumar - Portfolio",
    description: "Aspiring Data Science Professional | B.Tech AI & Data Science Student",
    url: "https://your-portfolio-url.com",
    siteName: "Hemanth Kumar Portfolio",
    images: [
      {
        url: "/images/hemanth-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mupparaju Hemanth Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mupparaju Hemanth Kumar - Portfolio",
    description: "Aspiring Data Science Professional | B.Tech AI & Data Science Student",
    images: ["/images/hemanth-profile.jpg"],
  },
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
