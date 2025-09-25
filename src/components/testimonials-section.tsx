"use client"

import { Star, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Stripe",
      avatar: "SC",
      content: "Pixelora has completely transformed how we manage our product roadmap. The AI suggestions are incredibly accurate and save us hours every week.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Engineering Lead",
      company: "Figma",
      avatar: "MJ",
      content: "The speed and efficiency of Pixelora is unmatched. We've reduced our planning time by 60% while improving our product quality.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      company: "Notion",
      avatar: "ER",
      content: "Finally, a tool that understands how modern product teams work. The collaborative features are game-changing.",
      rating: 5
    }
  ]

  const companies = [
    { name: "Stripe", logo: "S" },
    { name: "Figma", logo: "F" },
    { name: "Notion", logo: "N" },
    { name: "Linear", logo: "L" },
    { name: "Vercel", logo: "V" },
    { name: "GitHub", logo: "G" }
  ]

  return (
    <section className="py-10 bg-gray-900" id="customers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Trusted by industry leaders
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
            From next-gen startups to established enterprises.
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 border border-gray-700"
              >
                <span className="text-sm font-bold text-gray-300">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-3">
                <Quote className="w-4 h-4 text-gray-400 mb-2" />
                <p className="text-gray-300 text-xs leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs mr-2">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-xs">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
