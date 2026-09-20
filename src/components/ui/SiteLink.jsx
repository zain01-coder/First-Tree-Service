import { Link } from 'react-router-dom'

/**
 * Navigation link used by the header and footer.
 *
 * Every nav href in data/business.js is route-absolute (`/`, `/about`,
 * `/#services`), so routing them all through react-router keeps page changes
 * and section jumps client-side — no full reload when jumping from /about back
 * to a section of the home page.
 */
export default function SiteLink({ href, className = '', children, ...props }) {
  return (
    <Link to={href} className={className} {...props}>
      {children}
    </Link>
  )
}
