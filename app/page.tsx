import AboutMe from "@/components/about-me"
import ContactSection from "@/components/contact-section"
import FeaturedProjects from "@/components/featured-projects"
import HeroSection from "@/components/hero-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ludriano Washington | Fullstack Developer & Digital Entrepreneur",
  description:
    "Experienced fullstack developer and entrepreneur specializing in scalable solutions, SaaS development, and purposeful automation.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <FeaturedProjects />
      <ContactSection />
    </>
  )
}
