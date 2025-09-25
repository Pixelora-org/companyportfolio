import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pixelora - Purpose-built tool for planning and building products",
  description: "Meet the system for modern software development. Streamline issues, projects, and product roadmaps with AI assistance.",
  keywords: ["product management", "project planning", "AI", "software development", "team collaboration"],
  authors: [{ name: "Pixelora Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Pixelora - Purpose-built tool for planning and building products",
    description: "Meet the system for modern software development. Streamline issues, projects, and product roadmaps with AI assistance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelora - Purpose-built tool for planning and building products",
    description: "Meet the system for modern software development. Streamline issues, projects, and product roadmaps with AI assistance.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}