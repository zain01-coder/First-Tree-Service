import { motion } from 'framer-motion'
import { useReveal } from '../../lib/motion'

/**
 * Scroll-triggered reveal wrapper: fade + slight upward slide, once per element.
 * Content is always in the DOM and interactive — only opacity/transform animate.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 16,
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
