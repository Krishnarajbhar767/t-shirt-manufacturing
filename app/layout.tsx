import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "T-Shirt Manufacturing | Premium T-Shirts, Caps & Custom Apparel",
  description:
    "Leading manufacturer of custom t-shirts, caps, aprons, bags, and promotional items. High-quality printing and embroidery services for businesses worldwide.",
  keywords:
    "custom t-shirts, caps manufacturing, promotional items, bulk apparel, custom printing, embroidery services",
  authors: [{ name: "T-Shirt Manufacturing" }],
  openGraph: {
    title: "T-Shirt Manufacturing | Premium Custom Apparel",
    description: "Leading manufacturer of custom t-shirts, caps, and promotional items",
    type: "website",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
