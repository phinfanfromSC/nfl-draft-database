import Link from "next/link"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NFL Draft Database - Complete Prospect Analysis & Draft Coverage",
  description:
    "The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and access the data that matters most for draft day.",
  keywords: "NFL Draft, prospects, draft analysis, mock draft, NFL teams, college football",
  authors: [{ name: "NFL Draft Database" }],
  creator: "NFL Draft Database",
  publisher: "NFL Draft Database",
  metadataBase: new URL("https://www.nfldraftdatabase.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NFL Draft Database - Complete Prospect Analysis & Draft Coverage",
    description:
      "The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and access the data that matters most for draft day.",
    url: "https://www.nfldraftdatabase.com",
    siteName: "NFL Draft Database",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFL Draft Database - Complete Prospect Analysis & Draft Coverage",
    description:
      "The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and access the data that matters most for draft day.",
    creator: "@nfldraftdatabase",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image src="/logo.svg" alt="NFL Draft Database" width={32} height={32} className="w-8 h-8" />
                  <span className="font-bold text-xl">NFL Draft Database</span>
                </div>
                <p className="text-gray-400 mb-4">
                  The most comprehensive NFL Draft resource for prospects, analysis, and draft coverage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/prospects" className="hover:text-white">
                      Prospects
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/mock-draft" className="hover:text-white">
                      Mock Draft
                    </Link>
                  </li>
                  <li>
                    <Link href="/teams" className="hover:text-white">
                      Teams
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 NFL Draft Database. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
