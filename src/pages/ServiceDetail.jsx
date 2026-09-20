import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StickyMobileCallBar from '../components/layout/StickyMobileCallBar'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PhoneLink from '../components/ui/PhoneLink'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { business, services } from '../data/business'
import { useCardHover, useStagger, useStaggerItem } from '../lib/motion'
import usePageMeta from '../lib/usePageMeta'

/**
 * Shared detail-page template for every service.
 *
 * One route (/services/:slug) and one component render all six services from
 * `services` in data/business.js — adding a service there adds its detail page
 * with no new file. Nothing here is hardcoded to a particular service.
 */
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  // Hooks must run before the early return, so they sit above it.
  const includedGroup = useStagger({ stagger: 0.12, amount: 0.15 })
  const includedItem = useStaggerItem({ y: 18 })
  const signsGroup = useStagger({ stagger: 0.12, amount: 0.15 })
  const signsItem = useStaggerItem({ y: 18 })
  const processGroup = useStagger({ stagger: 0.15, amount: 0.15 })
  const processItem = useStaggerItem({ y: 20 })
  const relatedGroup = useStagger({ stagger: 0.15, amount: 0.15 })
  const relatedItem = useStaggerItem({ y: 20 })
  const relatedHover = useCardHover()
  const heroGroup = useStagger({ stagger: 0.16, delayChildren: 0.08, scroll: false })
  const heroItem = useStaggerItem({ y: 20 })

  usePageMeta({
    title: service
      ? `${service.name} in ${business.cityState} | ${business.name}`
      : `Tree Services in ${business.cityState} | ${business.name}`,
    description: service
      ? `${service.summary} Licensed and insured, free on-site estimates in ${business.cityState} — call ${business.phone}.`
      : undefined,
  })

  // An unknown slug goes to the services overview rather than a dead end.
  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-forest-900"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Page header band — matches /services and /about. */}
        <section id="top" className="bg-forest-800 text-white">
          <motion.div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20" {...heroGroup}>
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm font-semibold text-forest-200"
              {...heroItem}
            >
              <Link to="/" className="hover:text-clay-400">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-forest-400">
                /
              </span>
              <Link to="/services" className="hover:text-clay-400">
                Services
              </Link>
              <span aria-hidden="true" className="px-2 text-forest-400">
                /
              </span>
              <span className="text-white">{service.name}</span>
            </motion.nav>

            <motion.p
              className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-clay-400"
              {...heroItem}
            >
              <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.8} />
              {service.name}
            </motion.p>
            <motion.h1
              className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
              {...heroItem}
            >
              {service.heading}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-100"
              {...heroItem}
            >
              {service.summary}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              {...heroItem}
            >
              <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <PhoneLink
                variant="button"
                className="w-full sm:w-auto"
                label={`Call ${business.phone}`}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Description + what's included */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
              <div>
                <SectionHeading eyebrow="What it is" title={`About our ${service.name.toLowerCase()} work`} />
                <Reveal as="p" delay={0.24} className="mt-6 text-lg leading-relaxed text-forest-700">
                  {service.description}
                </Reveal>

                <Reveal
                  as="h3"
                  delay={0.3}
                  className="mt-10 text-sm font-bold uppercase tracking-[0.12em] text-forest-600"
                >
                  What's included
                </Reveal>
                <motion.ul className="mt-4 grid gap-2.5 sm:grid-cols-2" {...includedGroup}>
                  {service.details.map((line) => (
                    <motion.li
                      key={line}
                      className="flex gap-2.5 text-base leading-relaxed text-forest-700"
                      {...includedItem}
                    >
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-clay-600" strokeWidth={2.4} />
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="space-y-6">
                <Reveal delay={0.18} className="overflow-hidden rounded-xl border border-forest-100">
                  <div className="aspect-4/3">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={service.imageAlt}
                        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(45deg,#e0ebe3_0_12px,#f3f7f4_12px_24px)] p-4 text-center"
                      >
                        <Icon name={service.icon} className="h-8 w-8 text-forest-400" strokeWidth={1.6} />
                        <span className="text-sm font-bold leading-snug text-forest-700">
                          [PHOTO — {service.name}]
                        </span>
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.3} className="rounded-xl border border-forest-100 bg-forest-50 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-forest-600">
                    At a glance
                  </h3>
                  <dl className="mt-5 space-y-5">
                    {[
                      { term: 'Service area', detail: `${business.city} and surrounding areas` },
                      { term: 'Estimates', detail: 'Free and on site, with a firm written price' },
                      { term: 'Licensing', detail: business.licensing },
                      { term: 'Cleanup', detail: 'Brush chipped, wood hauled, work area raked and blown' },
                    ].map((row) => (
                      <div key={row.term}>
                        <dt className="text-sm font-bold uppercase tracking-[0.1em] text-forest-500">
                          {row.term}
                        </dt>
                        <dd className="mt-1 text-base font-semibold leading-relaxed text-forest-900">
                          {row.detail}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* When you need it */}
        <section className="bg-forest-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="When you need it"
              title={`Signs it's time to call about ${service.name.toLowerCase()}`}
              intro="None of these mean a tree is definitely coming down — they mean it's worth having someone look before the weather decides for you."
            />
            <motion.ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" {...signsGroup}>
              {service.signs.map((sign) => (
                <motion.li
                  key={sign}
                  className="flex h-full gap-3 rounded-xl border border-forest-100 bg-white p-5 shadow-sm"
                  {...signsItem}
                >
                  <Icon name="leaf" className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" strokeWidth={1.8} />
                  <span className="text-base font-semibold leading-relaxed text-forest-800">{sign}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* How the job runs */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="How it works"
              title="What the job looks like start to finish"
              intro="No surprises on the day: you'll know the price and the sequence before anyone starts a saw."
            />
            <motion.ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" {...processGroup}>
              {service.process.map((step, i) => (
                <motion.li
                  key={step.title}
                  className="flex h-full flex-col rounded-xl border border-forest-100 bg-forest-50 p-6"
                  {...processItem}
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-700 text-base font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-forest-900">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-forest-700">{step.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* Related services */}
        <section className="bg-forest-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Also available"
              title="Other services we handle"
              intro={`Most jobs end up being more than one thing — a removal that needs the stump ground, or a storm call that turns into clearance pruning. ${business.name} does all of it, so you're not chasing a second contractor.`}
            />
            <motion.ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" {...relatedGroup}>
              {related.map((other) => (
                <motion.li key={other.slug} className="h-full" {...relatedItem}>
                  <motion.article
                    className="flex h-full flex-col rounded-xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg"
                    {...relatedHover}
                  >
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-100 text-forest-600">
                      <Icon name={other.icon} className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-forest-900">{other.name}</h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-forest-700">{other.summary}</p>
                    <Link
                      to={`/services/${other.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-clay-600 hover:text-clay-700"
                    >
                      Learn More
                      <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
                    </Link>
                  </motion.article>
                </motion.li>
              ))}
            </motion.ul>

            <Reveal delay={0.24} className="mt-8">
              <Link
                to="/services"
                className="inline-flex min-h-[48px] items-center gap-1.5 text-base font-bold text-clay-600 hover:text-clay-700"
              >
                See all services
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA — every page keeps a conversion path visible. */}
        <section className="bg-forest-900 py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="flex flex-col items-start gap-5 rounded-xl border border-forest-800 bg-forest-800/60 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-xl font-bold tracking-tight text-white">
                Need {service.name.toLowerCase()} in {business.city}?
                <span className="mt-1 block text-base font-normal leading-relaxed text-forest-100">
                  We'll come look at the tree, tell you honestly what it needs, and give you a firm
                  written price before any work starts. Free, no obligation.
                </span>
              </p>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
                <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                  Get a Free Quote
                </Button>
                <PhoneLink
                  variant="button"
                  className="w-full sm:w-auto"
                  label={`Call ${business.phone}`}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCallBar />
    </>
  )
}
