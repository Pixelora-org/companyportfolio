"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export default function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [canMagnet, setCanMagnet] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setCanMagnet(fine && !reduce)
  }, [])

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canMagnet) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setOffset({ x: x * 0.32, y: y * 0.32 })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 240, damping: 16, mass: 0.35 }}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-xl bg-lime px-5 py-3.5 text-sm font-semibold text-lime-foreground will-change-transform sm:min-h-0 sm:px-6",
        "shadow-[0_0_0_0_hsl(var(--lime)/0.35)] transition-[color,box-shadow] hover:text-background hover:shadow-[0_0_32px_0_hsl(var(--lime)/0.35)]",
        "disabled:pointer-events-none disabled:opacity-50",
        "touch-manipulation",
        className
      )}
      whileTap={{ scale: 0.97 }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-y-full bg-foreground transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </motion.button>
  )
}
