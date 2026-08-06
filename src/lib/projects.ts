export type ProjectStatus = "Live" | "In Development"
export type ProjectKind = "product" | "client"

export type Project = {
  id: string
  title: string
  description: string
  image: string
  alt: string
  width: number
  height: number
  tech: string[]
  liveUrl: string | null
  githubUrl: string | null
  featured: boolean
  status: ProjectStatus
  kind: ProjectKind
  problem?: string
  solution?: string
}

export const projects: Project[] = [
  {
    id: "moviefy",
    title: "Moviefy",
    description:
      "AI-assisted movie discovery that learns your taste and delivers a high-confidence pick in seconds — playlists, rankings, and daily recommendations without the endless scroll.",
    image: "/moviefy.webp",
    alt: "Moviefy homepage with movie posters and taste-based recommendation messaging",
    width: 1400,
    height: 875,
    tech: ["Next.js", "TypeScript", "AI recommendations", "Tailwind CSS"],
    liveUrl: "https://moviefy-gules.vercel.app/",
    githubUrl: null,
    featured: true,
    status: "Live",
    kind: "product",
    problem:
      "Streaming libraries are huge, but finding something you’ll actually watch still takes forever.",
    solution:
      "Built Moviefy as a Pixelora product — taste profiles, ranked lists, and fast daily picks that feel closer to a DJ than a dump of titles.",
  },
  {
    id: "chirayu-health",
    title: "Chirayu Health Centre",
    description:
      "Nonprofit site for Chirayu Health Awareness & Research Centre — programs, impact metrics, and donation/get-involved paths for community health work in Dharwad.",
    image: "/chirayu-health.webp",
    alt: "Chirayu Health Awareness & Research Centre homepage with community health messaging",
    width: 1400,
    height: 875,
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ngowebsite-zeta.vercel.app/",
    githubUrl: null,
    featured: true,
    status: "Live",
    kind: "client",
    problem:
      "A community health NGO needed a credible site to explain programs and invite support.",
    solution:
      "Shipped a warm, accessible site with clear mission storytelling, program areas, and donate/get-involved CTAs.",
  },
  {
    id: "korada-furniture",
    title: "Korada Furniture",
    description:
      "Marketing site for Korada Furniture Co. — office cabinets, lockers, and wardrobes with product categories, catalogue access, and enquiry flows for Karnataka buyers.",
    image: "/korada-furniture.webp",
    alt: "Korada Furniture website hero promoting premium office cabinets",
    width: 1400,
    height: 875,
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://korada-furniture.vercel.app/",
    githubUrl: null,
    featured: false,
    status: "Live",
    kind: "client",
    problem:
      "A traditional furniture manufacturer needed a clean digital storefront that matched product quality.",
    solution:
      "Designed and shipped a fast brand site with category browsing, trust signals, and clear enquiry CTAs.",
  },
  {
    id: "dasara-developers",
    title: "Dasara Developers",
    description:
      "Premium real-estate presence for Dasara Developers — project showcase, testimonials, and venture companies presented with a luxury, conversion-minded layout.",
    image: "/dasara-developers.webp",
    alt: "Dasara Developers projects page showcasing premium real estate listings",
    width: 1400,
    height: 875,
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://realestate-lac-three.vercel.app/",
    githubUrl: null,
    featured: false,
    status: "Live",
    kind: "client",
    problem:
      "A developer brand needed a sharper digital front for projects, trust, and related ventures.",
    solution:
      "Built a project-led site structure that highlights inventory, social proof, and partner companies.",
  },
  {
    id: "durgoji-studios",
    title: "Durgoji Studios",
    description:
      "Photography studio site for Durgoji Studios — weddings, product, maternity, and event services with booking-forward CTAs and a modern creative brand feel.",
    image: "/durgoji-studios.webp",
    alt: "Durgoji Studios homepage with photography services and book-now call to action",
    width: 1400,
    height: 875,
    tech: ["Next.js", "React", "Framer Motion", "Vercel"],
    liveUrl: "https://studioproejcts.vercel.app/",
    githubUrl: null,
    featured: false,
    status: "Live",
    kind: "client",
    problem:
      "A creative studio needed a portfolio-ready web presence that books enquiries, not just shows photos.",
    solution:
      "Crafted a cinematic marketing site with service clarity and prominent Book Now paths.",
  },
  {
    id: "college-erp",
    title: "College ERP System",
    description:
      "Comprehensive college management system with class scheduling, bus routes, and canteen management.",
    image: "/collegeERP.webp",
    alt: "College ERP system screens for class schedules, bus routes, and campus services",
    width: 1400,
    height: 683,
    tech: ["React", "Express", "MySQL", "Node.js"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    status: "In Development",
    kind: "client",
    problem:
      "Campus operations were fragmented across paper processes and disconnected tools.",
    solution:
      "Building a unified ERP covering schedules, transport, and campus services in one system.",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website showcasing creative work and professional services.",
    image: "/prajwalportoflio.webp",
    alt: "Personal portfolio website homepage with project showcase layout",
    width: 1400,
    height: 682,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    status: "In Development",
    kind: "client",
    problem:
      "Needed a clean personal brand site that showcased work without feeling like a template.",
    solution:
      "Designed and built a motion-rich portfolio with clear hierarchy and project storytelling.",
  },
]

export const productProjects = projects.filter((p) => p.kind === "product")
export const clientProjects = projects.filter((p) => p.kind === "client")
