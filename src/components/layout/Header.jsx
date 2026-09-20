import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { business, navLinks, services } from '../../data/business'
import Icon from '../ui/Icon'
import SiteLink from '../ui/SiteLink'
import PhoneLink from '../ui/PhoneLink'
import Button from '../ui/Button'
import { DURATION, EASE_OUT } from '../../lib/motion'

const serviceLinks = [
  { href: '/services', label: 'All Services' },
  ...services.map((service) => ({ href: `/services/${service.slug}`, label: service.name })),
]

/**
 * Desktop "Services" nav item: a click-to-open dropdown (not hover) listing
 * every service pulled from the centralized service data, plus "All
 * Services". Closes on outside click, Escape, or selecting an item.
 */
function DesktopServicesMenu({ isCurrent }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (open) menuRef.current?.querySelector('a')?.focus()
  }, [open])

  const onItemKeyDown = (e) => {
    const items = Array.from(menuRef.current?.querySelectorAll('a') ?? [])
    const index = items.indexOf(e.currentTarget)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(index + 1) % items.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(index - 1 + items.length) % items.length]?.focus()
    } else if (e.key === 'Tab' && ((e.shiftKey && index === 0) || (!e.shiftKey && index === items.length - 1))) {
      setOpen(false)
    }
  }

  const menuMotion = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION.reduced },
      }
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: DURATION.base, ease: EASE_OUT },
      }

  const active = serviceLinks.some((item) => isCurrent(item.href))

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
          }
        }}
        aria-expanded={open}
        aria-current={active ? 'page' : undefined}
        className="flex items-center gap-1 text-sm font-semibold text-forest-800 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-clay-600 aria-[current=page]:text-clay-600"
      >
        Services
        <Icon
          name="chevron"
          className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={menuRef}
            aria-label="Services"
            className="absolute left-0 top-full z-10 mt-2 w-64 overflow-hidden rounded-xl border border-forest-100 bg-white py-2 shadow-lg"
            {...menuMotion}
          >
            {serviceLinks.map((item, index) => (
              <li key={item.href} className={index === 0 ? 'mb-1 border-b border-forest-50 pb-1' : ''}>
                <SiteLink
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  onKeyDown={onItemKeyDown}
                  className="flex min-h-[44px] items-center px-4 text-sm font-semibold text-forest-800 hover:bg-forest-50 hover:text-clay-600 aria-[current=page]:text-clay-600"
                >
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Mobile "Services" nav item: an accordion inside the hamburger menu — tap to
 * expand the service list inline, tap again to collapse. Hover dropdowns
 * don't make sense with no pointer, so this is a distinct pattern from the
 * desktop menu above, sourced from the same service data.
 */
function MobileServicesAccordion({ isCurrent, closeMenu }) {
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()

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

  const active = serviceLinks.some((item) => isCurrent(item.href))

  return (
    <li className="border-b border-forest-50">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls="mobile-services-panel"
        aria-current={active ? 'page' : undefined}
        className="flex min-h-[48px] w-full items-center justify-between text-base font-semibold text-forest-800 aria-[current=page]:text-clay-600"
      >
        Services
        <Icon
          name="chevron"
          className={`h-5 w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${expanded ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div id="mobile-services-panel" className="overflow-hidden" {...panelMotion}>
            <ul className="pb-2 pl-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <SiteLink
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                    className="flex min-h-[44px] items-center text-sm font-semibold text-forest-700 aria-[current=page]:text-clay-600"
                  >
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

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
          {navLinks.map((link) =>
            link.href === '/services' ? (
              <DesktopServicesMenu key={link.href} isCurrent={isCurrent} />
            ) : (
              <SiteLink
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                className="text-sm font-semibold text-forest-800 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-clay-600 aria-[current=page]:text-clay-600"
              >
                {link.label}
              </SiteLink>
            ),
          )}
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
              {navLinks.map((link) =>
                link.href === '/services' ? (
                  <MobileServicesAccordion
                    key={link.href}
                    isCurrent={isCurrent}
                    closeMenu={() => setOpen(false)}
                  />
                ) : (
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
                ),
              )}
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
