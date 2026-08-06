"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  delay?: number
  className?: string
  children: React.ReactNode
}

export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  )
}
