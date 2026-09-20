import { useState } from 'react'
import { motion } from 'framer-motion'
import { business, services } from '../../data/business'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import PhoneLink from '../ui/PhoneLink'
import { useStagger, useStaggerItem } from '../../lib/motion'
import footerPhoto from '../../assets/footer.jpeg'

const field =
  'w-full min-h-[48px] rounded-lg border border-forest-200 bg-white px-3 py-3 text-base text-forest-900 placeholder:text-forest-300 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-300'
const labelClass = 'block text-sm font-bold text-forest-900'

function Field({ children }) {
  const item = useStaggerItem({ y: 10 })
  return (
    <motion.div className="space-y-1.5" {...item}>
      {children}
    </motion.div>
  )
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const group = useStagger({ stagger: 0.12, amount: 0.15 })

  // [FORM HANDLER NEEDED — wire to the client's email service, CRM or form
  // endpoint (Formspree, Netlify Forms, etc.) before launch.]
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="relative isolate overflow-hidden bg-forest-800 py-16 text-white sm:py-20">
      <img
        src={footerPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-forest-800/50"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Reveal
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-clay-400"
          >
            Free estimates
          </Reveal>
          <Reveal
            as="h2"
            delay={0.12}
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Get a free quote on your tree work
          </Reveal>
          <Reveal as="p" delay={0.24} className="mt-4 text-lg leading-relaxed text-forest-100">
            Tell us what's going on with the tree and where it is. We'll come look at it,
            walk you through the options, and give you a written price before any work
            starts.
          </Reveal>

          <Reveal delay={0.3} className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-clay-400" strokeWidth={2} />
              <div>
                <p className="font-bold">Tree down or on a structure? Call, don't email.</p>
                <PhoneLink variant="light" showIcon={false} className="text-lg" />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-clay-400" strokeWidth={2} />
              <div>
                <p className="font-bold">Hours</p>
                <ul className="text-forest-100">
                  {business.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.18}
          className="rounded-xl bg-white p-6 text-forest-900 shadow-lg sm:p-8"
        >
          {submitted ? (
            <div className="py-6 text-center">
              <Icon name="check" className="mx-auto h-10 w-10 text-forest-600" strokeWidth={2.5} />
              <h3 className="mt-3 text-xl font-extrabold">Request received</h3>
              <p className="mt-2 text-forest-700">
                [FORM HANDLER NEEDED — this form does not send anywhere yet. Connect it to
                the business's email or CRM before launch.] For anything urgent, call{' '}
                {business.phone}.
              </p>
            </div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="space-y-4" {...group}>
              <Field>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={field}
                  placeholder="First and last name"
                />
              </Field>

              <Field>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  className={field}
                  placeholder="Best number to reach you"
                />
              </Field>

              <Field>
                <label className={labelClass} htmlFor="address">
                  Service address or city
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  className={field}
                  placeholder="Where the tree is"
                />
              </Field>

              <Field>
                <label className={labelClass} htmlFor="service">
                  What do you need?
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${field} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                    <option value="not-sure">Not sure — need someone to look at it</option>
                  </select>
                  <Icon
                    name="chevron"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-500"
                    strokeWidth={2}
                  />
                </div>
              </Field>

              <Field>
                <label className={labelClass} htmlFor="details">
                  Details <span className="font-normal text-forest-600">(optional)</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className={field}
                  placeholder="Size and species if you know it, how close it is to the house, whether it's leaning or dropping limbs"
                />
              </Field>

              <Field>
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-clay-500 px-6 py-3 text-base font-bold text-white shadow-sm transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-clay-600 hover:shadow-md active:bg-clay-700"
                >
                  Get My Free Quote
                </button>
                <p className="pt-1 text-center text-sm text-forest-600">
                  We use your details to quote your job — no spam, no selling your
                  information.
                </p>
              </Field>
            </motion.form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
