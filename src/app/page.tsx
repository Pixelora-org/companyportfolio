import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}