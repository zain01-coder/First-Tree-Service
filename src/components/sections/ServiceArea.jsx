import { motion } from 'framer-motion'
import { business, serviceAreas } from '../../data/business'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import PhoneLink from '../ui/PhoneLink'
import { useStagger, useStaggerItem } from '../../lib/motion'

function AreaChip({ city }) {
  const item = useStaggerItem({ y: 10 })
  return (
    <motion.li
      className="flex items-center gap-2 rounded-lg border border-forest-100 bg-white px-3 py-2 text-sm font-semibold text-forest-800"
      {...item}
    >
      <Icon name="pin" className="h-4 w-4 shrink-0 text-clay-600" strokeWidth={2} />
      {city}
    </motion.li>
  )
}

export default function ServiceArea() {
  const group = useStagger({ stagger: 0.04, amount: 0.15 })

  return (
    <section id="service-area" className="bg-forest-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Where we work"
            title={`Serving ${business.cityState} and surrounding areas`}
            intro="Crews run out of [City] daily. If your town isn't listed, call — if it's within our normal run we'll schedule it, and if it isn't we'll tell you instead of wasting your time."
          />

          <motion.ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3" {...group}>
            {serviceAreas.map((city) => (
              <AreaChip key={city} city={city} />
            ))}
          </motion.ul>

          <Reveal as="p" className="mt-4 text-sm text-forest-600">
            …and surrounding areas within [SERVICE RADIUS] of {business.city}.
          </Reveal>

          <Reveal className="mt-6">
            <PhoneLink variant="solid" label={`Call ${business.phone}`} />
          </Reveal>
        </div>

        <Reveal
          delay={0.06}
          className="overflow-hidden rounded-xl border border-forest-200 bg-white shadow-sm"
        >
          {/* Replace with a real Google Maps embed for the service area:
              <iframe title="Service area map" src="[GOOGLE MAPS EMBED URL]" ... /> */}
          <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#e0ebe3_25%,transparent_25%,transparent_50%,#e0ebe3_50%,#e0ebe3_75%,transparent_75%,transparent)] bg-[length:18px_18px] p-6 text-center">
            <Icon name="pin" className="h-10 w-10 text-forest-500" strokeWidth={1.6} />
            <p className="text-base font-bold text-forest-800">[SERVICE AREA MAP EMBED]</p>
            <p className="max-w-xs text-sm text-forest-600">
              Drop in a Google Maps embed centered on {business.cityState} to replace this
              block.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
