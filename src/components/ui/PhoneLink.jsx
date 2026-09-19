import { business } from '../../data/business'
import Icon from './Icon'

/**
 * The one click-to-call element used in the header, hero, footer and sticky bar.
 * Number and href both come from data/business.js.
 *
 * Deliberately not animated anywhere it appears: the phone number is the highest
 * intent action on the site and must be tappable the instant the page paints.
 */
export default function PhoneLink({
  variant = 'inline',
  className = '',
  label,
  showIcon = true,
  iconClassName = 'h-5 w-5',
}) {
  const variants = {
    inline:
      'inline-flex items-center gap-2 font-semibold text-forest-800 hover:text-clay-600 transition-colors duration-150',
    light:
      'inline-flex items-center gap-2 font-semibold text-white hover:text-clay-400 transition-colors duration-150',
    button:
      'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3 text-base font-bold text-white hover:bg-white hover:text-forest-800 transition-colors duration-150',
    solid:
      'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-forest-700 px-6 py-3 text-base font-bold text-white hover:bg-forest-800 transition-colors duration-150',
  }

  return (
    <a
      href={business.telHref}
      className={`${variants[variant]} ${className}`}
      aria-label={`Call ${business.name} at ${business.phone}`}
    >
      {showIcon && <Icon name="phone" className={iconClassName} strokeWidth={2} />}
      <span>{label ?? business.phone}</span>
    </a>
  )
}
