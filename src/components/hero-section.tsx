"use client"

import { ArrowRight, Play } from "lucide-react"

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
            onClick={() => window.open('https://app.pixelora.com', '_blank')}
            className="bg-white text-black hover:bg-gray-100 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            Start building
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button 
            onClick={() => window.open('https://demo.pixelora.com', '_blank')}
            className="border border-gray-600 text-white hover:bg-gray-900 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            <Play className="mr-2 w-4 h-4" />
            Watch demo
          </button>
        </div>

        {/* Customer Avatars */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">
            Powering the world&#39;s best product teams.
            <br />
            From next-gen startups to established enterprises.
          </p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs shadow-lg"
                style={{ marginLeft: i > 0 ? "-2px" : "0" }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
