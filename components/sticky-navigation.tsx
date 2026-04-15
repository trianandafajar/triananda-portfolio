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
        const next = window.scrollY > 300
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
      className={`fixed left-0 top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)] ${
        reducedMotion ? "transition-none" : "transition-transform duration-200"
      } ${visible ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <NavContent compact />
      </div>
    </nav>
  )
}
