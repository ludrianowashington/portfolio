import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ludriano Washington da Silva - Fullstack Developer Portfolio",
  description:
    "Experienced fullstack developer specializing in Java, Spring Boot, Node.js, React, and Next.js. Building scalable and high-performance digital solutions.",
  keywords: ["Fullstack Developer, Web Developer, Frontend Developer, Backend Developer, React, Java, Spring Boot, Node.js, Next.js",
    "Tailwind CSS, PostgreSQL, MySQL, Redis, Docker, AWS, Programador Fullstack, Desenvolvedor Fullstack, Desenvolvedor Frontend",
    "Desenvolvedor Backend, React Native, Android, Mobile Developer, Desenvolvedor Mobile, Ludriano Washington, Ludriano Silva",
    "Programador Pernambuco, Programador Recife, Programador Olinda, Programador web, Pessoa Desenvolvedora, Pessoa Programadora"],
  openGraph: {
    title: "Ludriano Washington da Silva - Fullstack Developer Portfolio",
    description:
      "Experienced fullstack developer specializing in React,  Next.js, Node.js, Java, Spring Boot. Building scalable and high-performance digital solutions.",
    url: "https://ludrianowashington.vercel.app",
    siteName: "Ludriano Washington da Silva Portfolio",
    images: [
      {
        url: "https://ludrianowashington.vercel.app/ludriano-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ludriano Washington da Silva - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludriano Washington da Silva - Fullstack Developer Portfolio",
    description:
      "Experienced fullstack developer specializing in Java, Spring Boot, Node.js, React, and Next.js. Building scalable and high-performance digital solutions.",
    images: ["https://ludrianowashington.vercel.app/ludriano-profile.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
        <Analytics/>
      </body>
    </html>
  )
}
