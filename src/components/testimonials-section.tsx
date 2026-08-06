"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"
import Reveal from "@/components/reveal"
import MagneticButton from "@/components/magnetic-button"
import {
  feedbackSchema,
  type FeedbackInput,
} from "@/lib/feedback-schema"
import { cn } from "@/lib/utils"

type SubmitState = "idle" | "loading" | "success" | "error"

const TestimonialsSection = () => {
  const [status, setStatus] = useState<SubmitState>("idle")
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { name: "", email: "", comment: "" },
  })

  const onSubmit = async (data: FeedbackInput) => {
    setStatus("loading")
    setServerError(null)

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus("error")
        setServerError(
          json.error ||
            "Something went wrong. Please try again or email us directly."
        )
        return
      }

      setStatus("success")
      reset()
    } catch {
      setStatus("error")
      setServerError("Network error. Check your connection and try again.")
    }
  }

  return (
    <section
      aria-labelledby="feedback-heading"
      className="relative py-16 sm:py-24 lg:py-32"
      id="feedback"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Feedback
          </p>
          <h2
            id="feedback-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl"
          >
            Tell us how
            <br />
            <span className="text-muted-foreground">we did.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Honest notes from clients help us ship sharper work next time.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="feedback-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Name
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  autoComplete="name"
                  className={cn(
                    "w-full rounded-xl border bg-background px-3 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-lime focus:ring-2 focus:ring-lime/30 sm:py-2.5 sm:text-sm",
                    errors.name ? "border-destructive" : "border-input"
                  )}
                  placeholder="Enter your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="feedback-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="feedback-email"
                  type="email"
                  autoComplete="email"
                  className={cn(
                    "w-full rounded-xl border bg-background px-3 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-lime focus:ring-2 focus:ring-lime/30 sm:py-2.5 sm:text-sm",
                    errors.email ? "border-destructive" : "border-input"
                  )}
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="feedback-comment"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your Feedback
              </label>
              <textarea
                id="feedback-comment"
                rows={4}
                className={cn(
                  "w-full resize-y rounded-xl border bg-background px-3 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-lime focus:ring-2 focus:ring-lime/30 sm:py-2.5 sm:text-sm",
                  errors.comment ? "border-destructive" : "border-input"
                )}
                placeholder="Share your experience working with us..."
                {...register("comment")}
              />
              {errors.comment && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <MagneticButton
              type="submit"
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Submit Feedback
                </>
              )}
            </MagneticButton>

            <div aria-live="polite" className="min-h-[1.25rem]">
              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks — your feedback was saved.
                </p>
              )}
              {status === "error" && serverError && (
                <p className="flex items-center justify-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {serverError}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default TestimonialsSection
