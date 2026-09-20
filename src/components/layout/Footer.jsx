import { business, navLinks, services, serviceAreas } from '../../data/business'
import Icon from '../ui/Icon'
import PhoneLink from '../ui/PhoneLink'
import SiteLink from '../ui/SiteLink'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 pb-24 pt-14 text-forest-100 md:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* NAP block — keep the name, address and phone consistent with the
              Google Business Profile for local SEO. */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <Icon name="tree" className="h-7 w-7 text-forest-300" strokeWidth={1.8} />
              <span className="text-lg font-extrabold tracking-tight">{business.name}</span>
            </div>
            <address className="mt-4 not-italic leading-relaxed">
              {business.address.street}
              <br />
              {business.address.cityState} {business.address.zip}
            </address>
            <div className="mt-3 space-y-1">
              <PhoneLink variant="light" iconClassName="h-4 w-4" />
              <p className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-forest-300" strokeWidth={2} />
                <a href={`mailto:${business.email}`} className="hover:text-clay-400">
                  {business.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <SiteLink href="/#services" className="hover:text-clay-400">
                    {service.name}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Service area
            </h2>
            <ul className="mt-4 space-y-2">
              {serviceAreas.slice(0, 6).map((city) => (
                <li key={city}>{city}</li>
              ))}
              <li className="text-forest-300">and surrounding areas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white">Hours</h2>
            <ul className="mt-4 space-y-2">
              {business.hours.map((h) => (
                <li key={h.days}>
                  <span className="block font-semibold text-white">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-forest-800 pt-6 text-sm font-semibold"
        >
          {navLinks.map((link) => (
            <SiteLink key={link.href} href={link.href} className="hover:text-clay-400">
              {link.label}
            </SiteLink>
          ))}
        </nav>

        <div className="mt-6 space-y-2 text-sm text-forest-300">
          <p>{business.licensing}</p>
          <p>{business.certification}</p>
          <p>
            © {year} {business.name}. Tree removal, trimming and stump grinding in{' '}
            {business.cityState}.
          </p>
        </div>
      </div>
    </footer>
  )
}
