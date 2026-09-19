import { motion } from 'framer-motion'
import { business, whyChooseUs } from '../../data/business'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import PhoneLink from '../ui/PhoneLink'
import { useStagger, useStaggerItem } from '../../lib/motion'

function ReasonCard({ reason }) {
  const item = useStaggerItem({ y: 14 })

  return (
    <motion.li
      className="flex h-full flex-col rounded-xl border border-forest-100 bg-white p-6 shadow-sm"
      {...item}
    >
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-50 text-forest-600">
        <Icon name={reason.icon} className="h-7 w-7" strokeWidth={1.7} />
      </span>
      <h3 className="text-lg font-bold tracking-tight text-forest-900">{reason.title}</h3>
      <p className="mt-2 text-base leading-relaxed text-forest-700">{reason.description}</p>
    </motion.li>
  )
}

export default function WhyChooseUs() {
  const group = useStagger({ stagger: 0.06, amount: 0.15 })

  return (
    <section id="why-choose-us" className="bg-forest-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why homeowners choose us"
          title={`The team ${business.cityState} calls first`}
          intro={`There's no shortage of trucks with a chainsaw logo. Here's what actually sets ${business.name} apart on the jobs that matter.`}
        />

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          {...group}
        >
          {whyChooseUs.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </motion.ul>

        <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-forest-900">
            See the difference for yourself.
            <span className="block text-base font-normal text-forest-700">
              Get a free, no-obligation quote from a crew that shows up when they say they will.
            </span>
          </p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#quote" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <PhoneLink variant="solid" className="w-full sm:w-auto" label={`Call ${business.phone}`} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
