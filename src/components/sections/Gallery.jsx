import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryItems } from '../../data/business'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import { useStagger, useStaggerItem } from '../../lib/motion'

/**
 * Hover zoom is done in CSS (transform on the inner layer) rather than in JS:
 * it's a GPU-composited transform, costs nothing on scroll, and is switched off
 * automatically by the reduced-motion block in index.css.
 */
function GalleryTile({ item }) {
  const reveal = useStaggerItem({ y: 14 })

  return (
    <motion.figure
      className="group relative overflow-hidden rounded-xl border border-forest-100 bg-forest-50 shadow-sm"
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
      <figcaption className="flex items-center justify-between gap-2 border-t border-forest-100 bg-white px-4 py-3 text-sm font-semibold text-forest-800">
        {item.caption}
      </figcaption>
    </motion.figure>
  )
}

export default function Gallery() {
  const group = useStagger({ stagger: 0.13, amount: 0.12 })

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recent work"
          title="Jobs from around [City, State]"
          intro="Removals over roofs, storm cleanup, stumps ground below grade. Every photo here should be your own crew's work — placeholder blocks below mark where to drop real job photos."
        />

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          {...group}
        >
          {/* The home page shows a sample; the full set lives on /gallery. */}
          {galleryItems.slice(0, 6).map((item) => (
            <GalleryTile key={item.id} item={item} />
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/gallery"
            className="inline-flex min-h-[48px] items-center gap-2 self-start text-base font-bold text-clay-600 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-clay-700"
          >
            See more of our work
            <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
          <p className="text-sm text-forest-600">
            [PROJECT PHOTOS NEEDED — replace the blocks above with real before/after job
            photos. Never use stock photography here.]
          </p>
        </div>
      </div>
    </section>
  )
}
