import React from "react"
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GeistPixelLine } from 'geist/font/pixel'
import '@/styles/globals.css'
import { HashScroll } from "@/components/hash-scroll"
import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import LenisScrollProvider from "@/providers/lenis-scroll-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${GeistPixelLine.variable} font-sans antialiased bg-white `}>
        <LenisScrollProvider>
          <Header />
          <HashScroll />
          {children}
          <Footer />
        </LenisScrollProvider>
      </body>
    </html>
  )
}
