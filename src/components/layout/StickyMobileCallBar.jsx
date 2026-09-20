import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { business } from '../../data/business'
import Icon from '../ui/Icon'
import { DURATION, EASE_OUT } from '../../lib/motion'

/**
 * Mobile-only call bar. Slides up once the visitor has scrolled past the hero
 * (where the hero's own call CTA has left the screen).
 *
 * Scroll is read through Framer's rAF-batched useScroll rather than a raw
 * scroll listener, and only a transform animates — no layout work on scroll.
 */
export default function StickyMobileCallBar() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const past = latest > (typeof window !== 'undefined' ? window.innerHeight * 0.75 : 600)
    setVisible((prev) => (prev === past ? prev : past))
  })

  const barMotion = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION.reduced },
      }
    : {
        initial: { y: '110%' },
        animate: { y: 0 },
        exit: { y: '110%' },
        transition: { duration: DURATION.base, ease: EASE_OUT },
      }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-forest-800 bg-forest-700 px-3 pb-[env(safe-area-inset-bottom)] pt-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] md:hidden"
          {...barMotion}
        >
          <div className="flex items-center gap-2 pb-2">
            <a
              href={business.telHref}
              aria-label={`Call ${business.name} at ${business.phone}`}
              className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-lg bg-clay-500 px-4 text-base font-bold text-white active:bg-clay-600"
            >
              <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
              Call {business.phone}
            </a>
            <a
              href="#quote"
              className="flex min-h-[52px] items-center justify-center rounded-lg border-2 border-white/70 px-4 text-sm font-bold text-white"
            >
              Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
