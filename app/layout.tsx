import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tshirtfactory Is Best T Shirt Manufacturing In Ahmedabad",
  description:
    "Leading manufacturer of custom t-shirts, caps, aprons, bags, and promotional items. High-quality printing and embroidery services for businesses worldwide.",
  icons: {
    icon: "/images/logo t sirt.png",
  },
  keywords:
    "custom t-shirts, caps manufacturing, promotional items, bulk apparel, custom printing, embroidery services",
  authors: [{ name: "T-Shirt Manufacturing" }],
  openGraph: {
    title: "T-Shirt Manufacturing | Tshirtfactory Is Best T Shirt Manufacturing In Ahmedabad",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WRGX5482');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CQS96S8Z27"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQS96S8Z27');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRGX5482"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
