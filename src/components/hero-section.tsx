"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowDownRight, ArrowRight, Calendar, MessageCircle } from "lucide-react"
import MagneticButton from "@/components/magnetic-button"
import ProjectImage from "@/components/project-image"
import { techStack } from "@/lib/tech-stack"
import { projects } from "@/lib/projects"
import {
  getPrimaryBookingLabel,
  getPrimaryBookingUrl,
  siteConfig,
} from "@/lib/site"

const rotatingWords = ["design", "build", "ship", "scale"]

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [glow, setGlow] = useState({ x: 60, y: 35, visible: false })
  const [enablePointerFx, setEnablePointerFx] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnablePointerFx(fine && !reduce)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el || !enablePointerFx) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setGlow({ x, y, visible: true })
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 28)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 36)
    }
    const onLeave = () => {
      setGlow((g) => ({ ...g, visible: false }))
      mouseX.set(0)
      mouseY.set(0)
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [enablePointerFx, mouseX, mouseY])

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
  }

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const primaryBookingUrl = getPrimaryBookingUrl()
  const primaryBookingLabel = getPrimaryBookingLabel()
  const hasCalendly = Boolean(siteConfig.calendlyUrl)

  const items = [...techStack, ...techStack]
  const preview = projects.filter((p) => p.featured).slice(0, 2)

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-[100svh] items-center overflow-x-clip overflow-y-visible"
    >
      <div className="hero-mesh" aria-hidden="true">
        <div className="blob" />
      </div>
      <div className="site-grid absolute inset-0" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: glow.visible ? 1 : 0,
          background: `radial-gradient(520px circle at ${glow.x}% ${glow.y}%, hsl(var(--lime) / 0.16), transparent 55%)`,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-[14%] z-0 select-none opacity-70 sm:left-0 sm:top-[18%] sm:opacity-100"
        style={enablePointerFx ? { x: springX, y: springY } : undefined}
      >
        <p className="brand-watermark text-[28vw] leading-none sm:text-[18vw]">
          PIXELORA
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 px-4 pb-[5.5rem] pt-[calc(4.5rem+env(safe-area-inset-top))] sm:gap-10 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex max-w-full items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mb-6 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="truncate">AI product design &amp; engineering</span>
          </motion.div>

          <h1 className="font-display text-[clamp(2rem,9vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground sm:text-[clamp(2.15rem,9.5vw,5.6rem)] sm:leading-[0.92]">
            <span className="block">
              We{" "}
              <span className="relative inline-block min-w-[5ch] align-bottom text-lime sm:min-w-[3em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-90%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="mt-1 block">AI-ready products,</span>
            <span className="mt-1 block text-muted-foreground">
              websites, apps &amp;{" "}
              <span className="text-foreground underline decoration-hot decoration-[0.1em] underline-offset-[0.18em] sm:underline-offset-4">
                intelligent systems
              </span>
              .
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
          >
            Pixelora is a design &amp; development agency that builds sharp
            interfaces and practical AI like copilots, automation, and LLM features
            that feel native to the product, not bolted on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55 }}
            className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <MagneticButton
              onClick={() => openExternal(primaryBookingUrl)}
              className="w-full sm:w-auto"
            >
              {hasCalendly ? (
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
              ) : (
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              )}
              {primaryBookingLabel}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            {hasCalendly ? (
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-lime touch-manipulation sm:min-h-0 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            ) : (
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-lime touch-manipulation sm:min-h-0 sm:w-auto"
              >
                See the work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            )}
            {hasCalendly && (
              <button
                type="button"
                onClick={scrollToWork}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline touch-manipulation sm:min-h-0"
              >
                See the work
                <ArrowDownRight className="h-3.5 w-3.5" />
              </button>
            )}
          </motion.div>

          {/* Mobile project strip; desktop uses floating cards */}
          {preview.length > 0 && (
            <div className="mt-6 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mt-8 lg:hidden [&::-webkit-scrollbar]:hidden">
              {preview.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={scrollToWork}
                  className="w-[82%] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-card text-left touch-manipulation sm:w-[60%]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.alt}
                      className="absolute inset-0 h-full w-full"
                      sizes="(max-width: 1024px) 78vw, 280px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between gap-2">
                      <span className="truncate font-display text-sm font-bold text-foreground">
                        {project.title}
                      </span>
                      <span className="shrink-0 rounded-md bg-hot/90 px-1.5 py-0.5 font-mono text-[9px] font-medium text-white">
                        {project.status === "In Development" ? "Soon" : project.status}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative hidden min-h-[340px] lg:block">
          {preview.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={scrollToWork}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -4 : 5 }}
              animate={{ opacity: 1, y: 0, rotate: i === 0 ? -3 : 4 }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={enablePointerFx ? { x: springX, y: springY } : undefined}
              className={
                i === 0
                  ? "group absolute left-0 top-4 w-[78%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
                  : "group absolute bottom-2 right-0 w-[72%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              }
            >
              <div className="sheen relative aspect-[16/10] overflow-hidden">
                <ProjectImage
                  src={project.image}
                  alt={project.alt}
                  className="absolute inset-0 h-full w-full"
                  imageClassName="transition-transform duration-700 will-change-transform group-hover:scale-105"
                  sizes="(min-width: 1024px) 28vw, 400px"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <span className="font-display text-sm font-bold text-foreground">
                    {project.title}
                  </span>
                  <span
                    className={
                      project.status === "Live"
                        ? "rounded-md bg-lime px-2 py-0.5 font-mono text-[10px] font-medium text-lime-foreground"
                        : "rounded-md bg-hot/90 px-2 py-0.5 font-mono text-[10px] font-medium text-white"
                    }
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/70 bg-background/50 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
        <div
          className="marquee-track marquee-mask overflow-hidden py-2.5 sm:py-3"
          aria-label="Technologies we use"
        >
          <div className="animate-marquee flex w-max will-change-transform" aria-hidden="true">
            {items.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="mx-3 inline-flex items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:mx-4 sm:text-xs sm:tracking-[0.18em]"
              >
                <span className="text-lime">◇</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
