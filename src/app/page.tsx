import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AiCapabilitiesSection from "@/components/ai-capabilities-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <AiCapabilitiesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
