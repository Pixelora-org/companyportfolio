"use client"

import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          <span className="block">Pixelora is a</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            purpose-built tool
          </span>
          <span className="block">for planning and building products</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-white text-black hover:bg-gray-100 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            Start building
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
