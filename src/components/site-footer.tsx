import { siteConfig } from "@/lib/site"

export default function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-border bg-background px-4 py-6 text-center text-xs text-muted-foreground sm:py-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
        reserved.
      </p>
    </footer>
  )
}
