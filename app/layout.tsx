import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TRAXELO - Premium Vehicle Rentals in Wayanad | Travel Solutions",
  description:
    "Your Ride, Your Way — Explore Wayanad in Comfort. Reliable vehicle rentals, clean vehicles, 24/7 support, and local expertise.",
  keywords: "vehicle rental wayanad, car rental wayanad, travel wayanad, SUV rental, tempo traveller wayanad",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background text-foreground motion-safe:animate-page-in">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
