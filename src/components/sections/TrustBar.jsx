import { motion } from 'framer-motion'
import { trustSignals } from '../../data/business'
import Icon from '../ui/Icon'
import CountUp from '../ui/CountUp'
import { useStagger, useStaggerItem } from '../../lib/motion'

/**
 * Trust bar. Numeric signals (years in business, review count) count up the
 * first time the bar scrolls into view — see data/business.js: set `count` to a
 * real number to switch a slot from static placeholder to animated counter.
 */
export default function TrustBar() {
  const group = useStagger({ stagger: 0.15, amount: 0.4 })
  const item = useStaggerItem({ y: 12 })

  return (
    <section aria-label="Why homeowners hire us" className="border-b border-forest-100 bg-forest-50">
      <motion.ul
        className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
        {...group}
      >
        {trustSignals.map((signal) => (
          <motion.li
            key={signal.id}
            className="flex items-start gap-3 px-2 py-3 sm:px-4"
            {...item}
          >
            <Icon
              name={signal.icon}
              className="mt-0.5 h-6 w-6 shrink-0 text-clay-600"
              strokeWidth={1.8}
            />
            <div>
              <p className="text-base font-extrabold leading-tight tracking-tight text-forest-900">
                {signal.count != null ? (
                  <>
                    <CountUp to={signal.count} suffix={signal.suffix ?? ''} /> {signal.value}
                  </>
                ) : (
                  signal.value
                )}
              </p>
              <p className="mt-1 text-sm leading-snug text-forest-600">{signal.label}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
