import Image from "next/image"
import { cn } from "@/lib/utils"

type ProjectImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}

export default function ProjectImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 640px",
}: ProjectImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  )
}
