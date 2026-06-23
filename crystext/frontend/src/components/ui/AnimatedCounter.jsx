import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

/**
 * Counts up to `value` once it scrolls into view. Used by the Statistics section.
 */
export default function AnimatedCounter({ value, suffix = '', duration = 2, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest))
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="font-display text-4xl md:text-5xl font-semibold gradient-text">
        {count.toLocaleString()}
        {suffix}
      </span>
      {label && <span className="font-mono text-xs uppercase tracking-wider text-[#6F6257]">{label}</span>}
    </div>
  )
}
