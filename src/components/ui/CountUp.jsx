import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts from `from` to `to` once, the first time it scrolls into view.
 *
 * `to` is null until real numbers are supplied in data/business.js — in that
 * case the bracketed placeholder is rendered as plain static text and nothing
 * animates. Set a real number (e.g. `count: 18`) and the count-up turns on.
 */
export default function CountUp({
  to = null,
  from = 0,
  duration = 0.4,
  prefix = '',
  suffix = '',
  decimals = 0,
  placeholder = null,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = useReducedMotion()
  const [value, setValue] = useState(to == null ? null : from)

  // Reduced motion: the final number is derived during render, never animated.
  const display = reduced ? to : value

  useEffect(() => {
    if (to == null || !inView || reduced) return

    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(latest),
    })

    return () => controls.stop()
  }, [inView, to, from, duration, reduced])

  if (to == null) {
    return (
      <span ref={ref} className={className}>
        {placeholder}
      </span>
    )
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {Number(display ?? from).toFixed(decimals)}
      {suffix}
    </span>
  )
}
