"use client"

import { useEffect, useState } from "react"
import { NavContent } from "@/components/nav-content"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function StickyNavigation() {
  const [visible, setVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    let frameId = 0

    const onScroll = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        const next = window.scrollY > 200
        setVisible((prev) => (prev === next ? prev : next))
        frameId = 0
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm ${
        reducedMotion ? "transition-none" : "transition-transform duration-200"
      } ${visible ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <NavContent compact />
      </div>
    </nav>
  )
}
