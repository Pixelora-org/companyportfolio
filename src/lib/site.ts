const phoneE164 = "919591020880"

export const siteConfig = {
  name: "Pixelora",
  url: "https://www.pixelora.org",
  email: "abhishekvaidya.work@gmail.com",
  phone: "+91 9591020880",
  phoneE164,
  /** Set in .env.local, e.g. https://calendly.com/your-name/30min */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "",
  whatsappUrl: `https://wa.me/${phoneE164}?text=${encodeURIComponent(
    "Hi Pixelora, I'd like to talk about a project."
  )}`,
  locale: "en_US",
  title: "Pixelora | AI Product Design & Development Agency",
  description:
    "Pixelora is a design and development agency that builds AI-ready websites, apps, and intelligent product features with sharp UI, modern engineering, and practical AI that ships.",
  keywords: [
    "AI product agency",
    "AI web development",
    "web design agency",
    "AI-powered apps",
    "Next.js development",
    "UI UX design",
    "LLM product development",
    "custom AI features",
    "Pixelora",
  ],
  // PNG kept for broader social crawler support; page uses WebP via next/image
  ogImage: "/moviefy.png",
} as const


export function getPrimaryBookingUrl() {
  return siteConfig.calendlyUrl || siteConfig.whatsappUrl
}

export function getPrimaryBookingLabel() {
  return siteConfig.calendlyUrl ? "Book a call" : "Chat on WhatsApp"
}
