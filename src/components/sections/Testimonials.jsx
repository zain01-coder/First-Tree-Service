import { testimonials } from '../../data/business'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import LogoLoop from '../ui/LogoLoop'

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
  return (
    <blockquote className="flex h-full w-80 flex-col rounded-xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg sm:w-95">
      <Stars count={review.stars} />
      <p className="mt-3 flex-1 text-base leading-relaxed text-forest-800">“{review.quote}”</p>
      <footer className="mt-4 border-t border-forest-50 pt-3 text-sm">
        <span className="font-bold text-forest-900">{review.name}</span>
        <span className="block text-forest-600">
          {review.location} · {review.source}
        </span>
      </footer>
    </blockquote>
  )
}

const rowFade = '#f3f7f4' // matches the section's bg-forest-50

export default function Testimonials() {
  const rowOne = testimonials.map((review) => ({
    node: <ReviewCard review={review} />,
    ariaLabel: `Review from ${review.name}`,
  }))
  const rowTwo = [...testimonials].reverse().map((review) => ({
    node: <ReviewCard review={review} />,
    ariaLabel: `Review from ${review.name}`,
  }))

  return (
    <section id="reviews" className="bg-forest-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What [City] homeowners say"
          intro="Pull these straight from your Google Business Profile — real names, real wording. The cards below are placeholders until then."
        />

        <Reveal className="mt-10 flex flex-col gap-5">
          <LogoLoop
            logos={rowOne}
            direction="left"
            speed={40}
            gap={20}
            pauseOnHover
            fadeOut
            fadeOutColor={rowFade}
            ariaLabel="Customer reviews, scrolling left"
          />
          <LogoLoop
            logos={rowTwo}
            direction="right"
            speed={40}
            gap={20}
            pauseOnHover
            fadeOut
            fadeOutColor={rowFade}
            ariaLabel="Customer reviews, scrolling right"
          />
        </Reveal>

        <Reveal as="p" className="mt-6 text-sm text-forest-600">
          [PLACEHOLDER REVIEWS — replace all three with real customer reviews and link to
          the Google Business Profile listing.]
        </Reveal>
      </div>
    </section>
  )
}
