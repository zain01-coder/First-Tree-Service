import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StickyMobileCallBar from '../components/layout/StickyMobileCallBar'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PhoneLink from '../components/ui/PhoneLink'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { about, business } from '../data/business'
import { useStagger, useStaggerItem } from '../lib/motion'
import usePageMeta from '../lib/usePageMeta'

function PointCard({ point, tone = 'default' }) {
  const item = useStaggerItem({ y: 14 })
  const surface =
    tone === 'muted'
      ? 'border-forest-100 bg-white'
      : 'border-forest-100 bg-forest-50'

  return (
    <motion.li className={`flex h-full flex-col rounded-xl border p-6 shadow-sm ${surface}`} {...item}>
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-100 text-forest-600">
        <Icon name={point.icon} className="h-7 w-7" strokeWidth={1.7} />
      </span>
      <h3 className="text-lg font-bold tracking-tight text-forest-900">{point.title}</h3>
      <p className="mt-2 text-base leading-relaxed text-forest-700">{point.description}</p>
    </motion.li>
  )
}

export default function About() {
  usePageMeta({
    title: `About ${business.name} | Tree Service in ${business.cityState}`,
    description: `Who we are: a local tree removal, trimming and stump grinding crew serving ${business.cityState}. Licensed, insured, and straight with you about what a tree needs. Free estimates.`,
  })

  const crewGroup = useStagger({ stagger: 0.15, amount: 0.15 })
  const equipmentGroup = useStagger({ stagger: 0.15, amount: 0.15 })
  const credentialGroup = useStagger({ stagger: 0.15, amount: 0.15 })
  const credentialItem = useStaggerItem({ y: 14 })

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
        {/* Page header band — mirrors the home hero's dark treatment without
            repeating the photo, so About reads as a second page, not a reskin. */}
        <section id="top" className="bg-forest-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-forest-200">
              <Link to="/" className="hover:text-clay-400">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-forest-400">
                /
              </span>
              <span className="text-white">About</span>
            </nav>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-clay-400">
              {about.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {about.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-100">{about.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <PhoneLink
                variant="button"
                className="w-full sm:w-auto"
                label={`Call ${business.phone}`}
              />
            </div>
          </div>
        </section>

        {/* Company story */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
              <div>
                <SectionHeading eyebrow="Our story" title={about.story.heading} />
                <div className="mt-6 space-y-5">
                  {about.story.paragraphs.map((paragraph, i) => (
                    <Reveal
                      as="p"
                      key={paragraph.slice(0, 32)}
                      delay={0.12 * i}
                      className="text-lg leading-relaxed text-forest-700"
                    >
                      {paragraph}
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal
                delay={0.24}
                className="h-full rounded-xl border border-forest-100 bg-forest-50 p-6 sm:p-8"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-forest-600">
                  At a glance
                </h3>
                <dl className="mt-5 space-y-5">
                  {[
                    { term: 'Founded', detail: '[FOUNDING YEAR] · [X YEARS IN BUSINESS]' },
                    { term: 'Owner', detail: '[FOUNDER NAME]' },
                    { term: 'Based in', detail: business.cityState },
                    {
                      term: 'Service area',
                      detail: `${business.city} and surrounding areas`,
                    },
                    { term: 'Licensing', detail: business.licensing },
                    { term: 'Certification', detail: business.certification },
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
        </section>

        {/* Crew */}
        <section className="bg-forest-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Who does the work"
              title={about.crew.heading}
              intro={about.crew.intro}
            />
            <motion.ul
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              {...crewGroup}
            >
              {about.crew.points.map((point) => (
                <PointCard key={point.id} point={point} tone="muted" />
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Equipment & approach */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="How we work"
              title={about.equipment.heading}
              intro={about.equipment.intro}
            />
            <motion.ul
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
              {...equipmentGroup}
            >
              {about.equipment.points.map((point) => (
                <PointCard key={point.id} point={point} />
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Licensing & insurance */}
        <section className="bg-forest-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Credentials"
              tone="light"
              title={about.credentials.heading}
              intro={about.credentials.intro}
            />
            <motion.ul
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              {...credentialGroup}
            >
              {about.credentials.items.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex h-full flex-col rounded-xl border border-forest-800 bg-forest-800/60 p-6"
                  {...credentialItem}
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-700 text-forest-100">
                    <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-forest-100">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Closing CTA — every page keeps a conversion path visible. */}
        <section className="bg-forest-50 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="flex flex-col items-start gap-5 rounded-xl bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-xl font-bold tracking-tight text-forest-900">
                Got a tree you're unsure about?
                <span className="mt-1 block text-base font-normal leading-relaxed text-forest-700">
                  We'll come look at it, tell you honestly whether it needs to come down, and
                  give you a firm written price before any work starts. Free, no obligation.
                </span>
              </p>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
                <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                  Get a Free Quote
                </Button>
                <PhoneLink
                  variant="solid"
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
