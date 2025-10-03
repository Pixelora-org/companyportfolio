"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

const TestimonialsSection = () => {
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission here
    console.log({ name, email, comment })
    setComment("")
    setName("")
    setEmail("")
  }

  return (
    <section className="py-10 bg-black" id="customers">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Share Your Experience
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            We&apos;d love to hear from our clients. Share your feedback and help us improve our services.
          </p>
        </div>

        {/* Comment Form */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Your Feedback
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                placeholder="Share your experience working with us..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
