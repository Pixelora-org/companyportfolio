"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "AI", href: "#ai" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null
    if (element) {
      const navOffset = window.matchMedia("(min-width: 640px)").matches
        ? 80
        : 68
      window.scrollTo({
        top: element.offsetTop - navOffset,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled || isOpen
          ? "border-b border-border bg-background/95 backdrop-blur-md dark:bg-background/85 dark:backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-[4.25rem]">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-foreground sm:gap-2.5 sm:text-xl"
            onClick={() => setIsOpen(false)}
          >
            <span
              aria-hidden="true"
              className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-foreground text-[11px] font-bold text-background"
            >
              <span className="absolute inset-0 bg-lime opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">Px</span>
            </span>
            Pixelora
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <ul className="m-0 flex list-none items-center p-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link px-3 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle className="ml-3" />
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="flex max-h-[min(70svh,28rem)] flex-col pb-[max(1rem,env(safe-area-inset-bottom))]">
                <ul className="m-0 flex-1 list-none space-y-1 overflow-y-auto p-0 py-3">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="flex min-h-12 w-full items-center rounded-lg px-2 text-left font-display text-2xl font-bold tracking-tight text-foreground touch-manipulation active:bg-muted/50"
                      >
                        <span className="mr-3 font-mono text-xs text-lime">
                          0{i + 1}
                        </span>
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="mx-2 mb-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-lime px-4 text-sm font-semibold text-lime-foreground touch-manipulation"
                >
                  Start a project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
