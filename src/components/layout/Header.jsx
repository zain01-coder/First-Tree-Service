import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { business, navLinks } from '../../data/business'
import Icon from '../ui/Icon'
import SiteLink from '../ui/SiteLink'
import PhoneLink from '../ui/PhoneLink'
import Button from '../ui/Button'
import { DURATION, EASE_OUT } from '../../lib/motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const { pathname, hash } = useLocation()
  const currentPath = `${pathname}${hash}`

  // `/services` stays the current nav item while you're on a service detail
  // page (`/services/stump-grinding`), which an exact match would miss.
  const isCurrent = (href) =>
    href === currentPath || (href !== '/' && !href.includes('#') && pathname.startsWith(`${href}/`))

  // Close the mobile menu on Escape so keyboard users aren't trapped.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const panelMotion = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION.reduced },
      }
    : {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: DURATION.base, ease: EASE_OUT },
      }

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-forest-800">
          <Icon name="tree" className="h-8 w-8 shrink-0 text-forest-600" strokeWidth={1.8} />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight sm:text-xl">
              {business.name}
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-forest-500 sm:block">
              {business.tagline} · {business.cityState}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <SiteLink
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className="text-sm font-semibold text-forest-800 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-clay-600 aria-[current=page]:text-clay-600"
            >
              {link.label}
            </SiteLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone stays reachable on mobile without opening the menu. */}
          <PhoneLink
            className="text-sm sm:text-base"
            iconClassName="h-5 w-5 text-clay-600"
            label={<span className="hidden sm:inline">{business.phone}</span>}
          />
          <Button as={Link} to="/#quote" className="hidden px-4 text-sm md:inline-flex">
            Get a Free Quote
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-forest-200 text-forest-800 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="overflow-hidden border-t border-forest-100 bg-white lg:hidden"
            {...panelMotion}
          >
            <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(link.href) ? 'page' : undefined}
                    className="flex min-h-[48px] items-center border-b border-forest-50 text-base font-semibold text-forest-800 aria-[current=page]:text-clay-600"
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
              <li className="py-3">
                <Button as={Link} to="/#quote" onClick={() => setOpen(false)} className="w-full">
                  Get a Free Quote
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
