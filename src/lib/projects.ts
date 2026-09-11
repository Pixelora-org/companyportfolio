export type ProjectStatus = "Live" | "In Development"
export type ProjectKind = "product" | "client"

export type Project = {
  id: string
  title: string
  clientLabel: string
  description: string
  image: string
  alt: string
  width: number
  height: number
  services: string[]
  liveUrl: string | null
  githubUrl: string | null
  featured: boolean
  status: ProjectStatus
  kind: ProjectKind
  brief: string
  delivery: string
}

export const projects: Project[] = [
  {
    id: "moviefy",
    title: "Moviefy",
    clientLabel: "Pixelora product",
    description:
      "An AI movie discovery product from Pixelora: taste-aware picks, ranked lists, and daily recommendations that cut the endless scroll.",
    image: "/moviefy.webp",
    alt: "Moviefy homepage with movie posters and taste-based recommendation messaging",
    width: 1400,
    height: 875,
    services: ["Product design", "AI feature design", "Full-stack build"],
    liveUrl: "https://moviefy-gules.vercel.app/",
    githubUrl: "https://github.com/Pixelora-org/moviefy",
    featured: true,
    status: "Live",
    kind: "product",
    brief:
      "People waste time browsing huge streaming libraries and still struggle to choose something worth watching.",
    delivery:
      "Pixelora designed and shipped Moviefy end to end: taste profiles, confidence-ranked picks, and a fast daily recommendation experience.",
  },
  {
    id: "pipeline",
    title: "Pipeline",
    clientLabel: "Pixelora product",
    description:
      "An AI-powered job search command center from Pixelora: paste a posting or cold email, AI fills the record, and a daily plan keeps score across every application.",
    image: "/jobtracker.webp",
    alt: "Pipeline dashboard with AI-assisted job application tracking, status lanes, and daily planning interface",
    width: 1400,
    height: 875,
    services: ["Product design", "AI feature design", "Full-stack build"],
    liveUrl: "https://jobtracker-kohl-mu.vercel.app",
    githubUrl: "https://github.com/Pixelora-org/JobTracker",
    featured: true,
    status: "Live",
    kind: "product",
    brief:
      "Job seekers waste time copying details between tabs, lose track of what they applied to, and never follow up because there's no system to keep score.",
    delivery:
      "Pixelora designed and launched Pipeline: paste a job link or cold outreach, the AI extracts title/company/location, organize by status, and a daily view that turns scattered effort into trackable momentum.",
  },
  {
    id: "safaisetu",
    title: "SafaiSetu",
    clientLabel: "Pixelora product",
    description:
      "A live, map-centered hub for India's civic cleanup movement: track river health, discover cleanup organizations, and join this weekend's drives.",
    image: "/safaisetu.webp",
    alt: "SafaiSetu homepage hero with live statistics and map access call to action",
    width: 1400,
    height: 875,
    services: ["Product design", "Interactive mapping", "Full-stack build"],
    liveUrl: "https://safaisetu-peach.vercel.app",
    githubUrl: "https://github.com/Pixelora-org/SafaiSetu",
    featured: false,
    status: "Live",
    kind: "product",
    brief:
      "People want to help with environmental cleanup but don't know where to start, who's organizing, or how their efforts fit the bigger picture.",
    delivery:
      "Pixelora shipped SafaiSetu as a national clearinghouse: live stats, organization directory, featured stories, and a this-weekend CTA that turns intent into action.",
  },
  {
    id: "chirayu-health",
    title: "Chirayu Health Centre",
    clientLabel: "Chirayu Health Awareness & Research Centre",
    description:
      "A public-facing digital presence for a Dharwad community health nonprofit: programs, impact, and clear paths to donate or get involved.",
    image: "/chirayu-health.webp",
    alt: "Chirayu Health Awareness & Research Centre homepage with community health messaging",
    width: 1400,
    height: 875,
    services: ["Brand web design", "Content structure", "Frontend engineering"],
    liveUrl: "https://ngowebsite-zeta.vercel.app/",
    githubUrl: null,
    featured: true,
    status: "Live",
    kind: "client",
    brief:
      "The organization needed a credible web presence that could explain programs clearly and convert visitors into supporters.",
    delivery:
      "Pixelora led design and engineering for a warm, accessible site with mission storytelling, program areas, and donation / get-involved flows.",
  },
  {
    id: "korada-furniture",
    title: "Korada Furniture",
    clientLabel: "Korada Furniture Co.",
    description:
      "A conversion-focused brand site for a Karnataka furniture manufacturer: product categories, catalogue access, and enquiry-ready CTAs.",
    image: "/korada-furniture.webp",
    alt: "Korada Furniture website hero promoting premium office cabinets",
    width: 1400,
    height: 875,
    services: ["UI/UX", "Brand site build", "Lead capture UX"],
    liveUrl: "https://korada-furniture.vercel.app/",
    githubUrl: null,
    featured: false,
    status: "Live",
    kind: "client",
    brief:
      "A traditional manufacturer needed a digital storefront that matched product quality and made B2B enquiries easy.",
    delivery:
      "Pixelora designed and launched a fast marketing site with category browsing, trust signals, and clear enquiry paths for buyers.",
  },
  {
    id: "dasara-developers",
    title: "Dasara Developers",
    clientLabel: "Dasara Developers",
    description:
      "A premium real-estate web experience for project showcase, social proof, and related venture companies.",
    image: "/dasara-developers-new.webp",
    alt: "Dasara Developers website showcasing premium real estate projects and ventures",
    width: 1400,
    height: 875,
    services: ["Experience design", "Web engineering", "Conversion UX"],
    liveUrl: "https://dasara-web.vercel.app",
    githubUrl: "https://github.com/Pixelora-org/DasraraDevelopers",
    featured: false,
    status: "Live",
    kind: "client",
    brief:
      "The developer brand needed a sharper digital front that could present inventory, build trust, and surface related ventures.",
    delivery:
      "Pixelora shipped a project-led site architecture with luxury visual language, testimonials, and clear paths into each venture.",
  },
  {
    id: "durgoji-studios",
    title: "Durgoji Studios",
    clientLabel: "Durgoji Studios",
    description:
      "A booking-forward studio site for weddings, product, maternity, and event photography with a modern creative brand system.",
    image: "/durgoji-studios.webp",
    alt: "Durgoji Studios homepage with photography services and book-now call to action",
    width: 1400,
    height: 875,
    services: ["Creative direction", "UI design", "Frontend build"],
    liveUrl: "https://studioproejcts.vercel.app/",
    githubUrl: null,
    featured: false,
    status: "Live",
    kind: "client",
    brief:
      "The studio needed a web presence that books enquiries, not just a gallery of past work.",
    delivery:
      "Pixelora crafted a cinematic marketing experience with clear service categories and prominent booking CTAs.",
  },
  {
    id: "portfolio-website",
    title: "Creator Brand Site",
    clientLabel: "Independent creative client",
    description:
      "A motion-rich personal brand website for a creative professional: project storytelling, services, and a polished first impression.",
    image: "/prajwalportoflio.webp",
    alt: "Personal brand website homepage with project showcase layout",
    width: 1400,
    height: 682,
    services: ["Brand UX", "Motion design", "Frontend engineering"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    status: "In Development",
    kind: "client",
    brief:
      "The client needed a personal brand site that felt custom and premium, not like a recycled portfolio template.",
    delivery:
      "Pixelora is designing and building a motion-led brand site with clear hierarchy, project narratives, and service positioning.",
  },
]

export const productProjects = projects.filter((p) => p.kind === "product")
export const clientProjects = projects.filter((p) => p.kind === "client")
