import { motion } from 'framer-motion'
import { services, business } from '../../data/business'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import PhoneLink from '../ui/PhoneLink'
import Reveal from '../ui/Reveal'
import { useCardHover, useStagger, useStaggerItem } from '../../lib/motion'

function ServiceCard({ service }) {
  const item = useStaggerItem({ y: 14 })
  const hover = useCardHover()

  return (
    <motion.li
      className="h-full"
      {...item}
    >
      <motion.article
        className="flex h-full flex-col rounded-xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg"
        {...hover}
      >
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-50 text-forest-600">
          <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.7} />
        </span>
        <h3 className="text-xl font-bold tracking-tight text-forest-900">{service.name}</h3>
        <p className="mt-2 text-base leading-relaxed text-forest-700">{service.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-forest-600">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 shrink-0 text-clay-600"
                strokeWidth={2.5}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <a
          href="#quote"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-clay-600 hover:text-clay-700"
        >
          Get a quote for {service.name.toLowerCase()}
          <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
        </a>
      </motion.article>
    </motion.li>
  )
}

export default function Services() {
  const group = useStagger({ stagger: 0.06, amount: 0.15 })

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Tree services for homes and businesses in [City]"
          intro={`From a single limb over a driveway to a full lot clear, ${business.name} handles the whole job — removal, pruning, stump grinding and cleanup — with the rigging and equipment to do it without tearing up your yard.`}
        />

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          {...group}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.ul>

        <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-forest-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-forest-900">
            Not sure whether a tree needs to come down or just needs pruning?
            <span className="block text-base font-normal text-forest-700">
              We'll look at it and tell you straight — estimates are free.
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
