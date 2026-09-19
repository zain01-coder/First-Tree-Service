/**
 * Shared motion config.
 *
 * Rules this file enforces for the whole site:
 *  - Durations stay in the 0.15s–0.4s band. Nothing slow, nothing bouncy.
 *  - Reveals fire once (`viewport.once`), so scrolling back up never re-animates.
 *  - Everything animates opacity/transform only — no layout-triggering properties,
 *    so scrolling stays smooth on mid-range phones.
 *  - When the visitor prefers reduced motion, movement is dropped entirely and
 *    only a very short opacity fade remains.
 *  - Nothing gates content: every element's `initial` state is reachable and all
 *    text/links are in the DOM and clickable from first paint. The phone number
 *    and CTAs are deliberately excluded from any entrance animation delay chain
 *    long enough to matter (max stagger below is 0.24s).
 */
import { useReducedMotion } from 'framer-motion'

export const EASE_OUT = [0.22, 1, 0.36, 1]

export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.35,
}

/**
 * Scroll-triggered reveal props. Spread onto any `motion.*` element:
 *   <motion.div {...reveal} />
 */
export function useReveal({ delay = 0, y = 16, amount = 0.2 } = {}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount },
      transition: { duration: DURATION.fast, delay: 0 },
    }
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount, margin: '0px 0px -8% 0px' },
    transition: { duration: DURATION.slow, ease: EASE_OUT, delay },
  }
}

/**
 * Staggered group. Put `useStagger()` on the parent and `useStaggerItem()` on
 * each child; the parent drives the timing.
 */
export function useStagger({ stagger = 0.08, delayChildren = 0.04, amount = 0.2, scroll = true } = {}) {
  const reduced = useReducedMotion()

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  }

  return scroll
    ? { variants, initial: 'hidden', whileInView: 'show', viewport: { once: true, amount } }
    : { variants, initial: 'hidden', animate: 'show' }
}

export function useStaggerItem({ y = 14 } = {}) {
  const reduced = useReducedMotion()

  const variants = reduced
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: DURATION.fast } },
      }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.base, ease: EASE_OUT },
        },
      }

  return { variants }
}

/** Services card hover: lift + scale. Falls back to no transform when reduced. */
export function useCardHover() {
  const reduced = useReducedMotion()

  if (reduced) return {}

  return {
    whileHover: { y: -6, scale: 1.02 },
    whileTap: { scale: 0.995 },
    transition: { duration: DURATION.base, ease: EASE_OUT },
  }
}

export { useReducedMotion }
