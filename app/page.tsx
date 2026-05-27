import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TechStackSection from "@/components/TechStackSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import GitHubStats from "@/components/GitHubStats"
import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground"
import CustomCursor from "@/components/CustomCursor"
import ScrollToTop from "@/components/ScrollToTop"
import ClientOnly from "@/components/ClientOnly"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ClientOnly>
        <AnimatedBackground />
        <CustomCursor />
      </ClientOnly>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubStats />
      <ContactSection />
      <Footer />
      <ClientOnly>
        <ScrollToTop />
      </ClientOnly>
    </main>
  )
}
