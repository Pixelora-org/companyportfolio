"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/reveal"

const capabilities = [
  {
    index: "01",
    title: "LLM product features",
    description:
      "Chat, copilots, and generation flows that feel native to your product — not a bolted-on chatbot widget.",
    tags: ["OpenAI", "Anthropic", "Streaming UX"],
  },
  {
    index: "02",
    title: "RAG & knowledge systems",
    description:
      "Search and answer over your docs, FAQs, and internal data with grounded responses and clear citations.",
    tags: ["Embeddings", "Pinecone", "Supabase"],
  },
  {
    index: "03",
    title: "AI UX that people trust",
    description:
      "Loading states, editable outputs, undo, and human-in-the-loop controls so AI feels reliable, not random.",
    tags: ["Product design", "Eval loops", "Safety"],
  },
  {
    index: "04",
    title: "Automation that ships",
    description:
      "Agents and workflows that cut busywork — triage, summaries, routing — wired into real backend systems.",
    tags: ["LangChain", "APIs", "Observability"],
  },
]

const AiCapabilitiesSection = () => {
  return (
    <section
      aria-labelledby="ai-heading"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="ai"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              AI capabilities
            </p>
            <h2
              id="ai-heading"
              className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl"
            >
              Practical AI.
              <br />
              <span className="text-muted-foreground">Built into the product.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              We don&apos;t sell AI hype. We design and engineer features that use
              models where they earn their keep — clearer UX, faster ops, and
              outcomes you can measure.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid list-none gap-0 border-t border-border p-0 sm:mt-16 lg:mt-20">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <li className="group border-b border-border">
                <div className="grid gap-3 py-6 sm:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)] sm:items-start sm:gap-8 sm:py-8">
                  <span className="font-mono text-xs tabular-nums tracking-wider text-lime sm:text-sm">
                    {item.index}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-foreground sm:text-2xl md:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <ul className="mt-3 flex list-none flex-wrap gap-1.5 p-0">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.p
                    initial={{ opacity: 0.7 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm leading-relaxed text-muted-foreground sm:pt-1 sm:text-[0.95rem]"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AiCapabilitiesSection
