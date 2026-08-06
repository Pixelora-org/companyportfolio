"use client"

import { Calendar, Mail, MessageCircle, Phone } from "lucide-react"
import Reveal from "@/components/reveal"
import MagneticButton from "@/components/magnetic-button"
import {
  getPrimaryBookingLabel,
  getPrimaryBookingUrl,
  siteConfig,
} from "@/lib/site"

const CTASection = () => {
  const primaryBookingUrl = getPrimaryBookingUrl()
  const primaryBookingLabel = getPrimaryBookingLabel()
  const hasCalendly = Boolean(siteConfig.calendlyUrl)

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      id="contact"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl"
          >
            Got an idea?
            <br />
            <span className="text-lime">Let&apos;s make it real.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] text-muted-foreground sm:mt-5 sm:text-base">
            Book a call or ping us on WhatsApp — tell us what you&apos;re
            building and we&apos;ll help you design, ship, and add AI where it
            counts.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center"
        >
          <MagneticButton
            className="w-full sm:w-auto"
            onClick={() =>
              window.open(primaryBookingUrl, "_blank", "noopener,noreferrer")
            }
          >
            {hasCalendly ? (
              <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {primaryBookingLabel}
          </MagneticButton>
          {hasCalendly && (
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-lime touch-manipulation sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4">
            {hasCalendly && (
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-lime"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lime">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-sm font-bold text-foreground">
                  Book a call
                </h3>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  Pick a time on Calendly
                </p>
              </a>
            )}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-lime"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lime">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">
                WhatsApp
              </h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {siteConfig.phone}
              </p>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-lime"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lime">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Email us
              </h3>
              <p className="mt-1 break-all font-mono text-[11px] text-muted-foreground">
                {siteConfig.email}
              </p>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-lime"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-lime">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Call us
              </h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {siteConfig.phone}
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTASection
