/**
 * Shared motion config.
 *
 * Rules this file enforces for the whole site:
 *  - Entrance durations sit in the 0.5s–0.8s band: slow enough to read as calm,
 *    short enough that nothing feels stalled. Nothing bouncy.
 *  - Reveals fire once (`viewport.once`), so scrolling back up never re-animates.
 *  - Staggered groups read as a *reveal*: each item is wiped in from behind a
 *    mask (`clip-path: inset()`) while it rises into place, so content appears
 *    to be uncovered rather than to fade in. Self-triggered reveals (`useReveal`)
 *    fade and rise without the clip — see the mask constants for why. Only
 *    opacity/transform/clip-path animate — none of them trigger layout, so
 *    scrolling stays smooth on mid-range phones.
 *  - When the visitor prefers reduced motion, movement is dropped entirely and
 *    only a very short opacity fade remains.
 *  - Nothing gates content: every element's `initial` state is reachable and all
 *    text/links are in the DOM and clickable from first paint. The phone number
 *    and CTAs are deliberately excluded from any entrance animation delay chain
 *    long enough to matter (longest chain is the hero's, ~0.7s of delay).
 */
import { useReducedMotion } from 'framer-motion'

export const EASE_OUT = [0.16, 1, 0.3, 1]

/** CSS equivalent of EASE_OUT, for Tailwind arbitrary `ease-[...]` values. */
export const EASE_OUT_CSS = 'cubic-bezier(0.16, 1, 0.3, 1)'

/**
 * The wipe that gives every entrance its "revealed" feel: the element starts
 * clipped to a zero-height sliver at its own top edge and is uncovered
 * downwards, like a curtain being drawn off it.
 *
 * Both states are `inset()` with four percentage arguments so Framer Motion can
 * interpolate between them. The sides/bottom sit at -10% throughout so a card's
 * box-shadow is never clipped mid-wipe, and `MASK_END` drops the clip entirely
 * via `transitionEnd` once the reveal lands — a lingering `clip-path` would keep
 * clipping hover shadows and would make the element a containing block for any
 * fixed-position descendant.
 *
 * IMPORTANT: only ever put this wipe on an element whose entrance is triggered
 * by *another* element — i.e. a `useStaggerItem()` child driven by its
 * `useStagger()` parent. Chrome folds an element's own `clip-path` into what
 * IntersectionObserver reports, so an element that both carries MASK_HIDDEN and
 * waits on its own `whileInView` reports an intersection ratio of 0, never
 * trips the threshold, and stays clipped — permanently invisible. That is why
 * `useReveal` below does a plain fade + rise.
 */
export const MASK_HIDDEN = 'inset(0% -10% 100% -10%)'
export const MASK_SHOWN = 'inset(-10% -10% -10% -10%)'
export const MASK_END = { clipPath: 'none' }

export const DURATION = {
  /** Reduced-motion fades only — deliberately short, do not raise. */
  reduced: 0.15,
  /** Hover / tap feedback. */
  fast: 0.35,
  /** Staggered item entrances, accordion + panel open/close. */
  base: 0.5,
  /** Scroll reveals and hero entrance. */
  slow: 0.7,
}

/**
 * Scroll-triggered reveal props. Spread onto any `motion.*` element:
 *   <motion.div {...reveal} />
 *
 * Fade + rise only. This element triggers its own entrance, so it must never
 * carry the MASK_HIDDEN clip — see the note on the mask constants above.
 */
export function useReveal({ delay = 0, y = 24, amount = 0.2 } = {}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount },
      transition: { duration: DURATION.reduced, delay: 0 },
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
export function useStagger({ stagger = 0.15, delayChildren = 0.08, amount = 0.2, scroll = true } = {}) {
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

/**
 * `scale` is opt-in: pass e.g. 0.97 for a scale-in on top of the wipe (gallery
 * tiles). Left at 1 it produces the mask wipe + rise every other group uses.
 * `mask: false` drops the wipe for the plain rise.
 */
export function useStaggerItem({ y = 20, scale = 1, mask = true } = {}) {
  const reduced = useReducedMotion()

  const variants = reduced
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: DURATION.reduced } },
      }
    : {
        hidden: { opacity: 0, y, scale, ...(mask && { clipPath: MASK_HIDDEN }) },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          ...(mask && { clipPath: MASK_SHOWN, transitionEnd: MASK_END }),
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
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  }
}

export { useReducedMotion }
