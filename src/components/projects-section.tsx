"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import Reveal from "@/components/reveal"
import ProjectImage from "@/components/project-image"
import { projects, type Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

type Filter = "All" | "Products" | "Client Work"

const filters: { id: Filter; label: string; short: string }[] = [
  { id: "All", label: "All", short: "All" },
  { id: "Products", label: "Products", short: "Products" },
  { id: "Client Work", label: "Client Work", short: "Clients" },
]

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project) => void
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left touch-manipulation"
        aria-label={`Open case study for ${project.title}`}
      >
        <div className="relative aspect-[16/10] sm:aspect-video">
          <ProjectImage
            src={project.image}
            alt={project.alt}
            className="absolute inset-0 h-full w-full"
            imageClassName="transition-transform duration-500 will-change-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 to-transparent opacity-70"
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute left-3 top-3 rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide",
              project.kind === "product"
                ? "bg-lime text-lime-foreground"
                : "bg-background/85 text-foreground backdrop-blur"
            )}
          >
            {project.kind === "product" ? "Product" : "Client"}
          </span>
        </div>
      </button>

      <div className="p-3.5 sm:p-4">
        <div className="mb-2 flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="font-display text-[0.95rem] font-semibold leading-snug text-card-foreground sm:text-lg">
            {project.title}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px]",
              project.status === "Live"
                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
                : "bg-amber-500/15 text-amber-700 dark:text-amber-300"
            )}
          >
            <span className="sm:hidden">
              {project.status === "In Development" ? "Soon" : project.status}
            </span>
            <span className="hidden sm:inline">{project.status}</span>
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <ul className="mt-3 flex list-none flex-wrap gap-1.5 p-0">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="min-h-10 text-sm font-medium text-foreground underline-offset-4 hover:underline touch-manipulation sm:min-h-0"
          >
            Case study
          </button>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center text-sm font-medium text-lime touch-manipulation sm:min-h-0"
            >
              <ExternalLink className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
              View Project
              <span className="sr-only"> (opens {project.title} in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function ProjectGrid({
  items,
  onOpen,
}: {
  items: Project[]
  onOpen: (project: Project) => void
}) {
  return (
    <motion.ul
      layout
      className="grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5"
    >
      <AnimatePresence mode="popLayout">
        {items.map((project) => (
          <motion.li
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="will-change-transform"
          >
            <ProjectCard project={project} onOpen={onOpen} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("All")
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [active])

  const filtered = useMemo(() => {
    if (filter === "Products") return projects.filter((p) => p.kind === "product")
    if (filter === "Client Work") return projects.filter((p) => p.kind === "client")
    return projects
  }, [filter])

  const products = filtered.filter((p) => p.kind === "product")
  const clients = filtered.filter((p) => p.kind === "client")
  const showGrouped = filter === "All"

  return (
    <section
      aria-labelledby="work-heading"
      className="relative py-16 sm:py-24 lg:py-32"
      id="work"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col gap-5 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Products &amp; client work
            </p>
            <h2
              id="work-heading"
              className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl"
            >
              What we&apos;re
              <br />
              <span className="text-muted-foreground">building &amp; shipping.</span>
            </h2>
          </Reveal>

          <LayoutGroup>
            <div
              className="-mx-4 flex items-center gap-1.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Filter projects"
            >
              {filters.map((item) => {
                const selected = filter === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      "relative shrink-0 rounded-lg px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors touch-manipulation sm:px-3.5 sm:py-1.5 sm:tracking-[0.14em]",
                      selected
                        ? "text-lime-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-lg bg-lime"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 sm:hidden">{item.short}</span>
                    <span className="relative z-10 hidden sm:inline">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </LayoutGroup>
        </div>

        <div className="mt-8 space-y-12 sm:mt-12 sm:space-y-16">
          {showGrouped ? (
            <>
              {products.length > 0 && (
                <div>
                  <Reveal>
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">
                          Pixelora products
                        </p>
                        <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                          Our own products
                        </h3>
                      </div>
                      <p className="hidden max-w-xs text-right text-xs text-muted-foreground sm:block">
                        AI-native tools we&apos;re designing, building, and shipping in-house.
                      </p>
                    </div>
                  </Reveal>
                  <ProjectGrid items={products} onOpen={setActive} />
                </div>
              )}
              {clients.length > 0 && (
                <div>
                  <Reveal>
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Client engagements
                        </p>
                        <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                          Selected client work
                        </h3>
                      </div>
                      <p className="hidden max-w-xs text-right text-xs text-muted-foreground sm:block">
                        Brand sites and product experiences shipped for real businesses.
                      </p>
                    </div>
                  </Reveal>
                  <ProjectGrid items={clients} onOpen={setActive} />
                </div>
              )}
            </>
          ) : (
            <ProjectGrid items={filtered} onOpen={setActive} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-background/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.28 }}
              className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-card shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex justify-center bg-card/80 py-2 backdrop-blur sm:hidden">
                <span className="h-1 w-10 rounded-full bg-border" aria-hidden="true" />
              </div>

              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-video">
                <ProjectImage
                  src={active.image}
                  alt={active.alt}
                  className="absolute inset-0 h-full w-full"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur touch-manipulation"
                  aria-label="Close case study"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-5 p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime">
                      {active.kind === "product" ? "Pixelora product" : "Client work"}
                    </p>
                    <h3
                      id="project-modal-title"
                      className="mt-1 font-display text-xl font-semibold text-card-foreground sm:text-2xl"
                    >
                      {active.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                      active.status === "Live"
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
                        : "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                    )}
                  >
                    {active.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="rounded-xl border border-border bg-muted/40 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Problem
                    </h4>
                    <p className="mt-2 text-sm text-foreground">
                      {active.problem ??
                        "Business needed a modern digital product to replace outdated workflows."}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/40 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Solution
                    </h4>
                    <p className="mt-2 text-sm text-foreground">
                      {active.solution ??
                        "Pixelora designed and engineered a tailored web experience focused on speed, clarity, and conversion."}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Tech used
                  </h4>
                  <ul className="mt-2 flex list-none flex-wrap gap-1.5 p-0">
                    {active.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {active.liveUrl ? (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-lime hover:text-lime-foreground touch-manipulation sm:w-auto"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    View live project
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Live link coming soon — currently in development.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
