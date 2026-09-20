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
import { business, services, servicesPage } from '../data/business'
import { useStagger, useStaggerItem } from '../lib/motion'
import usePageMeta from '../lib/usePageMeta'

/**
 * One service block on the overview page: name, one-paragraph description,
 * what's included, and a Learn More link to the shared detail route.
 *
 * Rows alternate image side on desktop so six blocks don't read as one long
 * column; on mobile the image always sits above the copy.
 */
function ServiceBlock({ service, flip }) {
  const listGroup = useStagger({ stagger: 0.12, amount: 0.15 })
  const listItem = useStaggerItem({ y: 10 })

  return (
    <article
      id={service.slug}
      className="scroll-mt-24 border-b border-forest-100 py-12 first:pt-0 last:border-b-0 last:pb-0 sm:py-16"
    >
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal
          className={`overflow-hidden rounded-xl border border-forest-100 ${
            flip ? 'lg:order-last' : ''
          }`}
        >
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

        <div>
          <Reveal className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest-600">
              <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.7} />
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-forest-900 sm:text-3xl">
              {service.name}
            </h2>
          </Reveal>

          <Reveal as="p" delay={0.12} className="mt-5 text-lg leading-relaxed text-forest-700">
            {service.description}
          </Reveal>

          <Reveal as="h3" delay={0.18} className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-forest-600">
            What's included
          </Reveal>
          <motion.ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" {...listGroup}>
            {service.details.map((line) => (
              <motion.li key={line} className="flex gap-2.5 text-base leading-relaxed text-forest-700" {...listItem}>
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-clay-600" strokeWidth={2.4} />
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.24} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} to={`/services/${service.slug}`} className="w-full sm:w-auto">
              Learn More
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
            </Button>
            <Link
              to="/#quote"
              className="inline-flex min-h-[48px] items-center justify-center gap-1.5 text-base font-bold text-clay-600 hover:text-clay-700"
            >
              Get a free quote for {service.name.toLowerCase()}
            </Link>
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  usePageMeta({
    title: `Tree Services in ${business.cityState} | ${business.name}`,
    description: `Tree removal, trimming and pruning, stump grinding, emergency storm response and land clearing in ${business.cityState}. Licensed and insured, free on-site estimates — call ${business.phone}.`,
  })

  const jumpGroup = useStagger({ stagger: 0.12, amount: 0.2 })
  const jumpItem = useStaggerItem({ y: 10 })

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
        {/* Page header band — same dark treatment as /about, so the site reads
            as one system rather than a set of separately-designed pages. */}
        <section id="top" className="bg-forest-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-forest-200">
              <Link to="/" className="hover:text-clay-400">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-forest-400">
                /
              </span>
              <span className="text-white">Services</span>
            </nav>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-clay-400">
              {servicesPage.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {servicesPage.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest-100">
              {servicesPage.intro}
            </p>

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

        {/* In-page jump links — six long blocks is a lot to scroll past on a
            phone when you already know which service you came for. */}
        <section className="border-b border-forest-100 bg-forest-50 py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="sr-only">Jump to a service</h2>
            <motion.ul className="flex flex-wrap gap-2" {...jumpGroup}>
              {services.map((service) => (
                <motion.li key={service.slug} {...jumpItem}>
                  <a
                    href={`#${service.slug}`}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-forest-200 bg-white px-4 text-sm font-bold text-forest-800 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-clay-400 hover:text-clay-600"
                  >
                    <Icon name={service.icon} className="h-4 w-4 text-forest-500" strokeWidth={1.8} />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {services.map((service, i) => (
              <ServiceBlock key={service.slug} service={service} flip={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Closing CTA — every page keeps a conversion path visible. */}
        <section className="bg-forest-900 py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              tone="light"
              eyebrow="Free estimates"
              title="Not sure which service you need?"
              intro="Describe the tree and we'll tell you straight — whether it needs to come down, whether pruning buys it another decade, and what either one costs. On-site estimates are free and there's no obligation."
            />
            <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/#quote" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <PhoneLink
                variant="button"
                className="w-full sm:w-auto"
                label={`Call ${business.phone}`}
              />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCallBar />
    </>
  )
}
