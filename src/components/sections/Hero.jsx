import { motion } from 'framer-motion'
import { business } from '../../data/business'
import Button from '../ui/Button'
import PhoneLink from '../ui/PhoneLink'
import Icon from '../ui/Icon'
import { useStagger, useStaggerItem } from '../../lib/motion'
import heroPhoto from '../../assets/footer2.jpeg'

/**
 * Hero entrance: headline, subtext and CTA fade/slide in staggered on load.
 * Total sequence runs ~1.2s end to end (0.16s between items, 0.5s each), and
 * every element is already in the DOM and clickable — the animation never gates
 * the phone number or the CTA.
 */
export default function Hero() {
  const group = useStagger({ stagger: 0.16, delayChildren: 0.08, scroll: false })
  const item = useStaggerItem({ y: 20 })

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-forest-800 text-white"
    >
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-linear-to-b from-forest-900/55 via-forest-800/45 to-forest-900"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <motion.div className="max-w-3xl" {...group}>
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-forest-500 bg-forest-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-forest-100"
            {...item}
          >
            <Icon name="pin" className="h-4 w-4" strokeWidth={2} />
            Serving {business.cityState} and surrounding areas
          </motion.p>

          <motion.h1
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            {...item}
          >
            Tree Removal &amp; Trimming in {business.cityState}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-100 sm:text-xl"
            {...item}
          >
            {business.name} takes down dead, storm-damaged and badly leaning trees —
            including tight removals over roofs and fences — and prunes the ones worth
            keeping. [X YEARS IN BUSINESS] in {business.city}. Free on-site estimates,
            full cleanup, wood and brush hauled away.
          </motion.p>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" {...item}>
            <Button href="#quote" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <PhoneLink
              variant="button"
              className="w-full sm:w-auto"
              label={`Call ${business.phone}`}
            />
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-forest-100"
            {...item}
          >
            {[
              '[LICENSED — confirm license #]',
              '[INSURED — confirm coverage]',
              'Storm damage response',
              'Full cleanup included',
            ].map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-clay-400" strokeWidth={2.5} />
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
