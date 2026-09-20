/** Shared CTA button. Renders an <a> when `href` is given, otherwise a <button>. */

const styles = {
  primary:
    'bg-clay-500 text-white hover:bg-clay-600 shadow-sm hover:shadow-md active:bg-clay-700',
  secondary:
    'bg-forest-700 text-white hover:bg-forest-800 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-forest-700 text-forest-800 hover:bg-forest-50',
  ghostLight:
    'border-2 border-white/80 text-white hover:bg-white hover:text-forest-800',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as ?? (href ? 'a' : 'button')

  return (
    <Tag
      href={href}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold tracking-tight transition-[background-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
