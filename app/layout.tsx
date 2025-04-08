import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"
import type { Metadata } from "next"
import { Inter, Montserrat, Poppins } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ludriano Washington | Fullstack Developer & Digital Entrepreneur",
  description:
    "Experienced fullstack developer and entrepreneur specializing in scalable solutions, SaaS development, and purposeful automation.",
  keywords: "Fullstack Developer, Digital Entrepreneur, React, Next.js, Java, Spring Boot, Node.js, SaaS Development",
  openGraph: {
    title: "Ludriano Washington | Fullstack Developer & Digital Entrepreneur",
    description:
      "Experienced fullstack developer and entrepreneur specializing in scalable solutions, SaaS development, and purposeful automation.",
    url: "https://ludrianowashington.vercel.app",
    siteName: "Ludriano Washington Portfolio",
    images: [
      {
        url: "https://github.com/ludrianowashington.png",
        width: 1200,
        height: 630,
        alt: "Ludriano Washington - Fullstack Developer & Entrepreneur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludriano Washington | Fullstack Developer & Digital Entrepreneur",
    description:
      "Experienced fullstack developer and entrepreneur specializing in scalable solutions, SaaS development, and purposeful automation.",
    images: ["https://github.com/ludrianowashington.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
