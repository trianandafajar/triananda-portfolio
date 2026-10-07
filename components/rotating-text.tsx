"use client"

import { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type RotatingTextProps = {
  words: string[]
  /** Static text shown before every word, inheriting the parent's color. */
  prefix?: string
  /** Applied to the rotating word only. */
  className?: string
  interval?: number
}

// The leaving word exits quickly, then the incoming one eases in after a short
// delay so the two never sit on top of each other for long. A waiting word is
// repositioned instantly (it is already invisible) to start the next entrance.
// Tailwind v4 emits the standalone `translate` property, not `transform`.
const TRANSITION = "transition-[opacity,translate,filter]"
const STATE_CLASSES = {
  active: `${TRANSITION} translate-y-0 opacity-100 blur-[0px] delay-200 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`,
  leaving: `${TRANSITION} -translate-y-[0.4em] opacity-0 blur-[6px] duration-[450ms] ease-in`,
  waiting: "translate-y-[0.4em] opacity-0 blur-[6px] transition-none",
} as const

export function RotatingText({
  words,
  prefix,
  className = "",
  interval = 2800,
}: RotatingTextProps) {
  const [{ index, prev }, setState] = useState({ index: 0, prev: -1 })
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || words.length < 2) {
      return
    }

    const timer = window.setInterval(() => {
      setState((s) => ({ index: (s.index + 1) % words.length, prev: s.index }))
    }, interval)

    return () => window.clearInterval(timer)
  }, [reducedMotion, words.length, interval])

  // All words share one grid cell so the box always fits the longest one and
  // the surrounding layout never shifts when the word changes.
  return (
    <span className="inline-grid">
      {words.map((word, i) => {
        const state = i === index ? "active" : i === prev ? "leaving" : "waiting"

        return (
          <span
            key={word}
            aria-hidden={state !== "active"}
            className={`col-start-1 row-start-1 will-change-[translate,opacity,filter] motion-reduce:transition-none ${STATE_CLASSES[state]}`}
          >
            {prefix && `${prefix} `}
            <span className={className}>{word}</span>
          </span>
        )
      })}
    </span>
  )
}
