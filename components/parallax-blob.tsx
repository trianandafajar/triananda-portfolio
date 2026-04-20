"use client"

import { useEffect, useRef } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type ParallaxBlobProps = {
  className?: string
  speed?: number
}

export function ParallaxBlob({ className = "", speed = 0.15 }: ParallaxBlobProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const el = ref.current
    if (!el) return

    let frameId = 0

    const onScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        const rect = el.parentElement?.getBoundingClientRect()
        if (rect) {
          const offset = (rect.top * -1 + window.innerHeight / 2) * speed
          el.style.transform = `translate3d(0, ${offset}px, 0)`
        }
        frameId = 0
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [reducedMotion, speed])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute will-change-transform ${className}`}
    />
  )
}
