import { motion } from 'framer-motion'
import { useReveal } from '../../lib/motion'

/**
 * Scroll-triggered reveal wrapper: fade + rise, once per element. Content is
 * always in the DOM and interactive — only opacity/transform animate. The mask
 * wipe used by staggered groups deliberately does not apply here: this element
 * triggers its own entrance, and a clipped element reports no intersection, so
 * it would never un-clip itself (see src/lib/motion.js).
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 24,
  amount = 0.2,
  className = '',
  children,
  ...props
}) {
  const reveal = useReveal({ delay, y, amount })
  const Tag = motion[as] ?? motion.div

  return (
    <Tag className={className} {...reveal} {...props}>
      {children}
    </Tag>
  )
}
