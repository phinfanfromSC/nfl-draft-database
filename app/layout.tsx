import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
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
  description: "The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and access the data that matters most for draft day.",
  metadataBase: new URL("https://www.nfldraftdatabase.com"),
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
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 NFL Draft Database. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
