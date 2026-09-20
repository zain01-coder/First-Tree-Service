import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StickyMobileCallBar from '../components/layout/StickyMobileCallBar'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PhoneLink from '../components/ui/PhoneLink'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { business, galleryItems, galleryPage } from '../data/business'
import { useStagger, useStaggerItem } from '../lib/motion'
import usePageMeta from '../lib/usePageMeta'

/**
 * One gallery tile.
 *
 * Entrance is a fade + scale-in driven by the parent stagger group, so it fires
 * once per tile as the row scrolls in. The hover zoom and the caption overlay
 * are CSS transitions on transform/opacity — GPU-composited, and switched off
 * by the reduced-motion block in index.css along with everything else.
 *
 * The caption sits visible under a gradient on small screens and is revealed on
 * hover from `sm:` up: touch devices have no hover state, so a caption that only
 * appears on hover would simply never be readable on a phone.
 */
function GalleryTile({ item }) {
  const reveal = useStaggerItem({ y: 22, scale: 0.97 })

  return (
    <motion.figure
      className="group relative isolate overflow-hidden rounded-xl border border-forest-100 bg-forest-50 shadow-sm"
      {...reveal}
    >
      <div className="aspect-4/3 overflow-hidden">
        {item.src ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
          />
        ) : (
          <div
            role="img"
            aria-label={item.alt}
            className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(45deg,#e0ebe3_0_12px,#f3f7f4_12px_24px)] p-4 text-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
          >
            <Icon name="tree" className="h-8 w-8 text-forest-400" strokeWidth={1.6} />
            <span className="text-sm font-bold leading-snug text-forest-700">{item.label}</span>
          </div>
        )}
      </div>

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-forest-900/90 via-forest-900/60 to-transparent px-4 pb-3 pt-10 text-base font-bold text-white transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:opacity-0 sm:group-hover:opacity-100">
        {item.caption}
      </figcaption>
    </motion.figure>
  )
}

export default function Gallery() {
  usePageMeta({
    title: `Tree Work Gallery in ${business.cityState} | ${business.name}`,
    description: `Photos of recent tree removals, storm damage cleanup, pruning and stump grinding in ${business.cityState}. Licensed and insured, free on-site estimates — call ${business.phone}.`,
  })

  const group = useStagger({ stagger: 0.13, amount: 0.12 })
  const heroGroup = useStagger({ stagger: 0.16, delayChildren: 0.08, scroll: false })
  const heroItem = useStaggerItem({ y: 20 })

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-forest-900"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Same dark page-header band as /services and /about. */}
        <section id="top" className="bg-forest-800 text-white">
          <motion.div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20" {...heroGroup}>
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm font-semibold text-forest-200"
              {...heroItem}
            >
              <Link to="/" className="hover:text-clay-400">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-forest-400">
                /
              </span>
              <span className="text-white">Gallery</span>
            </motion.nav>

            <motion.p
              className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-clay-400"
              {...heroItem}
            >
              {galleryPage.eyebrow}
            </motion.p>
            <motion.h1
              className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
              {...heroItem}
            >
              {galleryPage.title}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-100"
              {...heroItem}
            >
              {galleryPage.intro}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              {...heroItem}
            >
              <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <PhoneLink
                variant="button"
                className="w-full sm:w-auto"
                label={`Call ${business.phone}`}
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="sr-only">Project photos</h2>

            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              {...group}
            >
              {galleryItems.map((item) => (
                <GalleryTile key={item.id} item={item} />
              ))}
            </motion.div>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-forest-600">
              {galleryPage.note}
            </p>
          </div>
        </section>

        {/* Closing CTA — every page keeps a conversion path visible. */}
        <section className="bg-forest-900 py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              tone="light"
              eyebrow="Free estimates"
              title="Want your yard to be the next one on this page?"
              intro="Send a photo of the tree or the stump and we'll tell you what the job takes. On-site estimates are free, the price is firm in writing before we start, and the site gets raked clean before the trucks leave."
            />
            <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <PhoneLink
                variant="button"
                className="w-full sm:w-auto"
                label={`Call ${business.phone}`}
              />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCallBar />
    </>
  )
}
