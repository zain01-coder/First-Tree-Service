import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { faqs, business } from '../../data/business'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import PhoneLink from '../ui/PhoneLink'
import { DURATION, EASE_OUT } from '../../lib/motion'

function FaqItem({ item, index, open, onToggle }) {
  const id = useId()
  const reduced = useReducedMotion()

  const panelMotion = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION.reduced },
      }
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: 'auto', opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: DURATION.base, ease: EASE_OUT },
      }

  return (
    <Reveal
      as="div"
      delay={Math.min(index * 0.12, 0.36)}
      className="border-b border-forest-100"
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold tracking-tight text-forest-900 hover:text-clay-600"
        >
          {item.q}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: reduced ? 0 : DURATION.base, ease: EASE_OUT }}
            className="shrink-0 text-clay-600"
          >
            <Icon name="chevron" className="h-5 w-5" strokeWidth={2.2} />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            className="overflow-hidden"
            {...panelMotion}
          >
            <p className="pb-5 pr-8 text-base leading-relaxed text-forest-700">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="Questions"
            title="What homeowners ask before hiring a tree service"
            intro="Permits, insurance, cost drivers, stump grinding versus removal — the things people are usually unsure about before the first call."
          />
          <Reveal className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="#quote">Get a Free Quote</Button>
            <PhoneLink variant="solid" label={`Call ${business.phone}`} />
          </Reveal>
        </div>

        <div>
          {faqs.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
