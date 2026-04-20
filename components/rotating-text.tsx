"use client"

import { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

const ROTATING_TEXTS = [
  "AI-powered web apps",
  "SaaS platforms",
  "scalable full-stack systems",
]

export function RotatingText() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const interval = window.setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length)
        setVisible(true)
      }, 180)
    }, 2500)

    return () => window.clearInterval(interval)
  }, [reducedMotion])

  return (
    <span
      className={`inline-block text-indigo-600 transition-opacity duration-200 motion-reduce:transition-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {ROTATING_TEXTS[index]}
    </span>
  )
}
