import { siteConfig } from "@/lib/site"
import { projects } from "@/lib/projects"

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: "English",
    },
  }

  const creativeWorks = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: `${siteConfig.url}${project.image}`,
    url: project.liveUrl ?? `${siteConfig.url}/#work`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.services.join(", "),
    ...(project.status === "Live" && project.liveUrl
      ? { mainEntityOfPage: project.liveUrl }
      : {}),
  }))

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  }

  const schemas = [organization, website, ...creativeWorks]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
