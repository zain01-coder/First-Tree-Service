import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  id,
}) {
  const alignment = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
  const titleTone = tone === 'light' ? 'text-white' : 'text-forest-900'
  const introTone = tone === 'light' ? 'text-forest-100' : 'text-forest-700'
  const eyebrowTone = tone === 'light' ? 'text-clay-400' : 'text-clay-600'

  return (
    <div className={alignment}>
      {eyebrow && (
        <Reveal
          as="p"
          className={`mb-2 text-sm font-bold uppercase tracking-[0.14em] ${eyebrowTone}`}
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.12}
        id={id}
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${titleTone}`}
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.24} className={`mt-4 text-lg leading-relaxed ${introTone}`}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
