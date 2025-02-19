import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutMe from "@/components/about-me"
import TechnicalSkills from "@/components/technical-skills"
import ProfessionalExperience from "@/components/professional-experience"
import PersonalProjects from "@/components/personal-projects"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Ludriano Washington da Silva - Fullstack Developer Portfolio",
  description:
    "Experienced fullstack developer specializing in Java, Spring Boot, Node.js, React, and Next.js. Building scalable and high-performance digital solutions.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
      <ProfessionalExperience />
      <PersonalProjects />
      <ContactSection />
    </>
  )
}

