"use client"

import { Code, Palette, Shield, Zap } from "lucide-react"

const AboutSection = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Sleek, modern interfaces that captivate and engage your audience"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Clean, efficient code that powers exceptional user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Lightning-fast applications optimized for speed and reliability"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Robust security measures to protect your business and users"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-black" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pixelora</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-base text-gray-300 leading-relaxed">
              At Pixelora, we bring ideas to life through design and technology. We create sleek, responsive websites and dynamic apps that don&apos;t just look good — they perform.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Our mission is to help businesses grow, connect, and shine online with experiences that feel modern, human, and impactful. Every project we take on blends creativity, innovation, and strategy with a strong focus on performance, security, and reliability.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              We ensure that every digital solution we deliver not only stands out but also stays safe and trusted in today&apos;s evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
            >
              <div className="text-blue-400 mb-3 group-hover:text-purple-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
