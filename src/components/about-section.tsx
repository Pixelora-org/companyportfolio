"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Creative Design",
    tag: "Brand + UI",
    description:
      "Interfaces with taste: sharp hierarchy, motion, and brand that sticks in someone’s head after one scroll.",
  },
  {
    title: "Technical Excellence",
    tag: "Engineering",
    description:
      "Clean architecture and modern stacks that stay fast, readable, and maintainable as your product grows.",
  },
  {
    title: "Performance Focused",
    tag: "Speed",
    description:
      "Obsessed with load time and feel: smooth interactions, lean bundles, and shipping quality that reads premium.",
  },
  {
    title: "Security First",
    tag: "Trust",
    description:
      "Hardened flows and sensible defaults so users, data, and your business stay protected by design.",
  },
]

const AboutSection = () => {
  const [active, setActive] = useState(0)

  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="about"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Who we are
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl"
            >
              About
              <br />
              <span className="text-lime">Pixelora</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:space-y-4 sm:text-base md:text-lg">
              <p>
                We bring ideas to life through design and technology: sleek,
                responsive websites and dynamic apps that don&apos;t just look
                good. They perform.
              </p>
              <p>
                Every project blends creativity, strategy, and engineering with
                a hard focus on performance, security, and reliability.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12 sm:mt-16 lg:mt-20">
          <LayoutGroup>
            <ul className="m-0 list-none border-t border-border p-0" role="list">
              {features.map((feature, index) => {
                const isActive = active === index
                const number = String(index + 1).padStart(2, "0")

                return (
                  <motion.li
                    key={feature.title}
                    layout
                    className="border-b border-border"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className="relative grid w-full grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 text-left touch-manipulation sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-6 sm:py-6"
                      aria-expanded={isActive}
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-2 left-0 w-px rounded-full bg-lime sm:inset-y-3"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scaleY: isActive ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originY: 0.5 }}
                      />

                      <span
                        className={cn(
                          "pl-2.5 pt-1 font-mono text-[11px] tabular-nums tracking-wider transition-colors duration-300 sm:pl-3 sm:pt-0 sm:text-sm",
                          isActive ? "text-lime" : "text-muted-foreground/70"
                        )}
                      >
                        {number}
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1">
                          <h3
                            className={cn(
                              "font-display text-lg font-bold tracking-[-0.02em] transition-colors duration-300 sm:text-2xl md:text-[1.75rem]",
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground"
                            )}
                          >
                            {feature.title}
                          </h3>
                          <span
                            className={cn(
                              "font-mono text-[10px] uppercase tracking-[0.16em] transition-opacity duration-300",
                              isActive
                                ? "text-muted-foreground opacity-100"
                                : "text-muted-foreground opacity-50"
                            )}
                          >
                            {feature.tag}
                          </span>
                        </div>

                        <AnimatePresence initial={false} mode="wait">
                          {isActive && (
                            <motion.div
                              key={`${feature.title}-desc`}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[0.95rem]">
                                {feature.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "hidden select-none self-center font-display text-3xl font-bold tabular-nums tracking-tight transition-all duration-300 sm:block md:text-4xl",
                          isActive ? "text-lime/25" : "text-foreground/[0.04]"
                        )}
                      >
                        {number}
                      </span>
                    </button>
                  </motion.li>
                )
              })}
            </ul>
          </LayoutGroup>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection
