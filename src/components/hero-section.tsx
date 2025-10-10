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

        {/* Moving Tech Stack */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex space-x-8 whitespace-nowrap items-center">
              {/* First set */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#61DAFB" strokeWidth="2"/>
                    <path d="M8 12l2 2 4-4" stroke="#61DAFB" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 4.088 4.088 0 0 1-1.512-.493v-2.63a5.25 5.25 0 0 0 3.237 1.067c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 4.56 4.56 0 0 0-.807-.444 8.92 8.92 0 0 0-1.01-.385 13.16 13.16 0 0 0-1.197-.3 15.33 15.33 0 0 1-1.385-.443 3.731 3.731 0 0 1-1.1-.793 2.36 2.36 0 0 1-.463-1.007c-.03-.4-.03-.87 0-1.406a3.947 3.947 0 0 1 .43-1.52 3.18 3.18 0 0 1 1.1-1.085 4.38 4.38 0 0 1 1.485-.596c.566-.12 1.163-.18 1.79-.18zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#339933"/>
                    <path d="M2 17L12 22L22 17" stroke="#339933" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="#339933" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47A248">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-7.828-.26-.394-.53-.53-.846-.53h-.163c-.315 0-.585.136-.846.53-.32.414-3.31 2.248-4.573 7.828C5.91 10.365 5.92 11.305 5.92 11.999c0 .69-.01 1.628.238 2.443 1.264 5.58 4.252 7.414 4.573 7.828.26.394.53.53.846.53h.163c.315 0 .585-.136.846-.53.32-.414 3.31-2.248 4.573-7.828.238-.815.238-1.753.238-2.443 0-.69 0-1.628-.238-2.444zM12 15.312c-1.75 0-3.16-1.41-3.16-3.16s1.41-3.16 3.16-3.16 3.16 1.41 3.16 3.16-1.41 3.16-3.16 3.16z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#336791">
                    <path d="M23.111 4.5c-.3-.2-.7-.2-1 0L12 9.5 1.889 4.5c-.3-.2-.7-.2-1 0-.4.2-.6.6-.6 1v13c0 .4.2.8.6 1 .3.2.7.2 1 0L12 14.5l10.111 5c.3.2.7.2 1 0 .4-.2.6-.6.6-1v-13c0-.4-.2-.8-.6-1zM12 13.5L2.5 8.5 12 3.5l9.5 5-9.5 5z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Tailwind</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0055">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#FF0055"/>
                    <path d="M8 12h8M8 8h8M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Framer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2D3748">
                    <path d="M21.807 10.484L12 2.5 2.193 10.484c-.5.3-.5.9 0 1.2l9.807 7.984 9.807-7.984c.5-.3.5-.9 0-1.2zM12 19.5l-8.5-6.9L12 4.5l8.5 8.1L12 19.5z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Prisma</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#635BFF">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.613-1.305 2.466-3.27 2.466-5.555 0-4.33-2.5-6.157-6.532-7.482z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Stripe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M8 9L12 12L16 9" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M8 15L12 18L16 15" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Vercel</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF9900">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF9900"/>
                    <path d="M2 17L12 22L22 17" stroke="#FF9900" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="#FF9900" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="7" r="1" fill="#FF9900"/>
                    <circle cx="12" cy="12" r="1" fill="#FF9900"/>
                    <circle cx="12" cy="17" r="1" fill="#FF9900"/>
                    <path d="M8 9L12 12L16 9" stroke="#FF9900" strokeWidth="1" fill="none"/>
                    <path d="M8 15L12 18L16 15" stroke="#FF9900" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">AWS</span>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#61DAFB" strokeWidth="2"/>
                    <path d="M8 12l2 2 4-4" stroke="#61DAFB" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 4.088 4.088 0 0 1-1.512-.493v-2.63a5.25 5.25 0 0 0 3.237 1.067c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 4.56 4.56 0 0 0-.807-.444 8.92 8.92 0 0 0-1.01-.385 13.16 13.16 0 0 0-1.197-.3 15.33 15.33 0 0 1-1.385-.443 3.731 3.731 0 0 1-1.1-.793 2.36 2.36 0 0 1-.463-1.007c-.03-.4-.03-.87 0-1.406a3.947 3.947 0 0 1 .43-1.52 3.18 3.18 0 0 1 1.1-1.085 4.38 4.38 0 0 1 1.485-.596c.566-.12 1.163-.18 1.79-.18zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#339933"/>
                    <path d="M2 17L12 22L22 17" stroke="#339933" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="#339933" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47A248">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-7.828-.26-.394-.53-.53-.846-.53h-.163c-.315 0-.585.136-.846.53-.32.414-3.31 2.248-4.573 7.828C5.91 10.365 5.92 11.305 5.92 11.999c0 .69-.01 1.628.238 2.443 1.264 5.58 4.252 7.414 4.573 7.828.26.394.53.53.846.53h.163c.315 0 .585-.136.846-.53.32-.414 3.31-2.248 4.573-7.828.238-.815.238-1.753.238-2.443 0-.69 0-1.628-.238-2.444zM12 15.312c-1.75 0-3.16-1.41-3.16-3.16s1.41-3.16 3.16-3.16 3.16 1.41 3.16 3.16-1.41 3.16-3.16 3.16z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#336791">
                    <path d="M23.111 4.5c-.3-.2-.7-.2-1 0L12 9.5 1.889 4.5c-.3-.2-.7-.2-1 0-.4.2-.6.6-.6 1v13c0 .4.2.8.6 1 .3.2.7.2 1 0L12 14.5l10.111 5c.3.2.7.2 1 0 .4-.2.6-.6.6-1v-13c0-.4-.2-.8-.6-1zM12 13.5L2.5 8.5 12 3.5l9.5 5-9.5 5z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Tailwind</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0055">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#FF0055"/>
                    <path d="M8 12h8M8 8h8M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Framer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2D3748">
                    <path d="M21.807 10.484L12 2.5 2.193 10.484c-.5.3-.5.9 0 1.2l9.807 7.984 9.807-7.984c.5-.3.5-.9 0-1.2zM12 19.5l-8.5-6.9L12 4.5l8.5 8.1L12 19.5z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Prisma</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#635BFF">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.613-1.305 2.466-3.27 2.466-5.555 0-4.33-2.5-6.157-6.532-7.482z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Stripe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M8 9L12 12L16 9" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M8 15L12 18L16 15" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">Vercel</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF9900">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF9900"/>
                    <path d="M2 17L12 22L22 17" stroke="#FF9900" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="#FF9900" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="7" r="1" fill="#FF9900"/>
                    <circle cx="12" cy="12" r="1" fill="#FF9900"/>
                    <circle cx="12" cy="17" r="1" fill="#FF9900"/>
                    <path d="M8 9L12 12L16 9" stroke="#FF9900" strokeWidth="1" fill="none"/>
                    <path d="M8 15L12 18L16 15" stroke="#FF9900" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm font-medium">AWS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
