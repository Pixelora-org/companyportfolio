"use client"

import { ExternalLink } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "VD Cafe - Restaurant Management",
      description: "Complete restaurant management system with menu ordering, table management, and payment processing.",
      image: "/hotelmanagement.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://www.vinayakadarshini.com/",
      githubUrl: "https://github.com/pixelora/hotel-ordering",
      featured: true,
      status: "Live"
    },
    {
      title: "Chore Management App",
      description: "Smart chore management system for households with automatic assignment and progress tracking.",
      image: "/choremnagament.png",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/pixelora/chore-management",
      featured: true,
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing Pixelora's projects and services.",
      image: "/prajwalportoflio.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/pixelora/portfolio",
      featured: false,
      status: "In Development"
    },
    {
      title: "College ERP System",
      description: "Comprehensive college management system with class scheduling, bus routes, and canteen management.",
      image: "/collegeERP.png",
      tech: ["React", "Express", "MySQL", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/pixelora/college-erp",
      featured: false,
      status: "In Development"
    },
    {
      title: "Furniture Store Website",
      description: "E-commerce platform for furniture store with product catalog, ordering system, and dealer management.",
      image: "/koradafurniture.png",
      tech: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/pixelora/furniture-store",
      featured: false,
      status: "In Development"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-black" id="product">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Our Projects
          </h2>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Showcasing our expertise in modern software development and innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Project Content */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex items-center space-x-2">
                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Project Content */}
              <div className="p-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-1 py-0.5 text-xs rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-xs mb-1 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex items-center space-x-2">
                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
