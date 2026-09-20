import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Client-side routing doesn't scroll for you. This restores the two behaviours
 * a visitor expects:
 *  - changing page starts you at the top, instantly, regardless of scroll position
 *    on the page navigated away from
 *  - a `/#services`-style link scrolls to that section, from any page
 *
 * scrollIntoView() is called with no options on purpose so it inherits the
 * `scroll-behavior` / `scroll-padding-top` set in index.css — which means it
 * clears the sticky header and turns instant under `prefers-reduced-motion`.
 *
 * The top-of-page reset below passes `behavior: 'instant'` explicitly: without
 * it, `html { scroll-behavior: smooth }` in index.css would also apply to
 * plain page-to-page navigation, animating the reset instead of snapping it.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
