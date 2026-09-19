import { motion } from 'framer-motion'
import { testimonials } from '../../data/business'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { useCardHover, useStagger, useStaggerItem } from '../../lib/motion'

function Stars({ count }) {
  // Never render a rating that wasn't supplied — show the placeholder instead.
  if (count == null) {
    return (
      <p className="text-xs font-bold uppercase tracking-wide text-clay-600">
        [X.X★ — add real star rating]
      </p>
    )
  }

  return (
    <p className="flex items-center gap-0.5 text-clay-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" strokeWidth={1.5} />
      ))}
    </p>
  )
}

function ReviewCard({ review }) {
  const item = useStaggerItem({ y: 14 })
  const hover = useCardHover()

  return (
    <motion.li className="h-full" {...item}>
      <motion.blockquote
        className="flex h-full flex-col rounded-xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg"
        {...hover}
      >
        <Stars count={review.stars} />
        <p className="mt-3 flex-1 text-base leading-relaxed text-forest-800">
          “{review.quote}”
        </p>
        <footer className="mt-4 border-t border-forest-50 pt-3 text-sm">
          <span className="font-bold text-forest-900">{review.name}</span>
          <span className="block text-forest-600">
            {review.location} · {review.source}
          </span>
        </footer>
      </motion.blockquote>
    </motion.li>
  )
}

export default function Testimonials() {
  const group = useStagger({ stagger: 0.06, amount: 0.15 })

  return (
    <section id="reviews" className="bg-forest-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What [City] homeowners say"
          intro="Pull these straight from your Google Business Profile — real names, real wording. The cards below are placeholders until then."
        />

        <motion.ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" {...group}>
          {testimonials.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.ul>

        <Reveal as="p" className="mt-6 text-sm text-forest-600">
          [PLACEHOLDER REVIEWS — replace all three with real customer reviews and link to
          the Google Business Profile listing.]
        </Reveal>
      </div>
    </section>
  )
}
