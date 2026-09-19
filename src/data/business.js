/**
 * Single source of truth for everything client-specific on this site.
 * Reskinning for the next tree service = editing this file only.
 *
 * Anything in [ALL CAPS BRACKETS] is a placeholder that must be replaced with
 * real, verified information before the site goes live. Nothing here is invented.
 */

const phoneDisplay = '[PHONE NUMBER]'

export const business = {
  name: '[Business Name]',
  tagline: 'Tree Removal & Trimming',
  city: '[City]',
  state: '[State]',
  cityState: '[City, State]',

  // Replace phoneDisplay with the real number — telHref is derived from it, so
  // the header, hero, footer and sticky call bar all update from this one edit.
  phone: phoneDisplay,
  get telHref() {
    const digits = phoneDisplay.replace(/[^0-9+]/g, '')
    return digits ? `tel:${digits}` : 'tel:'
  },
  email: '[EMAIL]',
  address: {
    street: '[STREET ADDRESS]',
    cityState: '[City, State]',
    zip: '[ZIP]',
  },

  hours: [
    { days: 'Monday – Friday', time: '[OPEN – CLOSE]' },
    { days: 'Saturday', time: '[OPEN – CLOSE]' },
    { days: 'Sunday', time: '[OPEN – CLOSE / Closed]' },
    { days: 'Emergency storm calls', time: '[EMERGENCY HOURS — confirm]' },
  ],

  licensing: '[LICENSED — confirm license #] · [INSURED — confirm coverage details]',
  certification: '[CERTIFICATION — confirm ISA Certified Arborist on crew]',
}

/**
 * Trust bar.
 *
 * `count` drives the scroll-into-view count-up animation. It is null here because
 * no real numbers were supplied — the bracketed placeholder renders as static
 * text instead. Fill in the real figures and the counters turn on, e.g.:
 *
 *   { id: 'years',   count: 18,  value: 'Years in Business', suffix: '' }
 *   { id: 'reviews', count: 247, value: 'Google Reviews',    suffix: '+' }
 */
export const trustSignals = [
  {
    id: 'years',
    count: null,
    value: '[X YEARS IN BUSINESS]',
    label: `Removing and maintaining trees in ${business.city}`,
    suffix: '',
    icon: 'calendar',
  },
  {
    id: 'reviews',
    count: null,
    value: '[X.X★ FROM X GOOGLE REVIEWS]',
    label: 'Rated by local homeowners',
    suffix: '',
    icon: 'star',
  },
  {
    id: 'licensed',
    count: null,
    value: 'Licensed & Insured',
    label: '[LICENSE #] · [INSURED — confirm coverage details]',
    icon: 'shield',
  },
  {
    id: 'estimates',
    count: null,
    value: 'Free Estimates',
    label: 'On-site quotes at no cost, no obligation',
    icon: 'clipboard',
  },
]

export const services = [
  {
    id: 'tree-removal',
    name: 'Tree Removal',
    icon: 'tree',
    summary:
      'Safe takedown of dead, diseased, storm-damaged or badly leaning trees — including tight removals over roofs, fences and driveways.',
    details: [
      'Rigging and sectional removal where a tree can\'t be felled whole',
      'Crane-assisted removals on large or hazardous trees',
      'Full cleanup and haul-away of wood and brush',
    ],
  },
  {
    id: 'trimming-pruning',
    name: 'Trimming & Pruning',
    icon: 'shears',
    summary:
      'Species-appropriate pruning that keeps trees structurally sound: crown thinning, crown raising, crown reduction and deadwooding.',
    details: [
      'Clearance pruning away from roofs, siding and power lines',
      'Deadwooding to remove limbs that are likely to drop',
      'Young-tree structural pruning to prevent future failures',
    ],
  },
  {
    id: 'stump-grinding',
    name: 'Stump Grinding',
    icon: 'stump',
    summary:
      'Grinding stumps below grade so you can re-seed, replant or lay sod — not just cutting the stump flush with the ground.',
    details: [
      'Ground below grade so the spot can be planted over',
      'Surface-root grinding for trip hazards along walkways',
      'Grindings hauled away or backfilled, your choice',
    ],
  },
  {
    id: 'emergency',
    name: 'Emergency Storm Response',
    icon: 'storm',
    summary:
      'Trees and limbs down after a storm — on a roof, across a driveway, or tangled in a service line. Call and we\'ll tell you what we can get to and when.',
    details: [
      'Limbs and whole trees removed off structures and vehicles',
      'Hangers and split leaders taken down before they drop',
      'Documentation and photos for insurance claims',
      '[EMERGENCY RESPONSE TIME — confirm before publishing]',
    ],
  },
  {
    id: 'land-clearing',
    name: 'Lot & Land Clearing',
    icon: 'lot',
    summary:
      'Clearing overgrown lots, fence lines and building pads — brush chipped on site, trees removed, ground left workable.',
    details: [
      'Fence line and property line clearing',
      'Brush chipping and overgrowth removal',
      'Build-site and driveway clearing',
    ],
  },
  {
    id: 'tree-health',
    name: 'Tree Health & Risk Assessment',
    icon: 'leaf',
    summary:
      'A straight answer on whether a tree can be saved: decay, root damage, storm cracks, canopy dieback and what it means for the tree\'s stability.',
    details: [
      'Visual inspection of trunk, root flare and canopy',
      'Cabling and bracing recommendations where a tree is worth keeping',
      'Written assessment for homeowners, buyers and HOAs',
    ],
  },
]

/** Named cities the business serves. Replace each with a real city/town. */
export const serviceAreas = [
  '[City]',
  '[NEARBY CITY 1]',
  '[NEARBY CITY 2]',
  '[NEARBY CITY 3]',
  '[NEARBY CITY 4]',
  '[NEARBY CITY 5]',
  '[NEARBY CITY 6]',
  '[NEARBY CITY 7]',
]

/**
 * Gallery placeholders. Drop real job photos into src/assets/ and set `src`
 * on each item — the component renders a labeled placeholder block until then.
 */
export const galleryItems = [
  {
    id: 1,
    src: null,
    label: '[PROJECT PHOTO — large oak removal over a roof]',
    alt: 'Arborist sectioning a large oak above a house roof using rigging lines',
    caption: 'Sectional removal, [City]',
  },
  {
    id: 2,
    src: null,
    label: '[PROJECT PHOTO — storm-damaged limb on a garage]',
    alt: 'Storm-damaged limb resting on a garage roof before removal',
    caption: 'Storm damage cleanup',
  },
  {
    id: 3,
    src: null,
    label: '[PROJECT PHOTO — stump ground below grade]',
    alt: 'Stump ground below grade with grindings backfilled and raked level',
    caption: 'Stump ground below grade',
  },
  {
    id: 4,
    src: null,
    label: '[PROJECT PHOTO — crown reduction before/after]',
    alt: 'Maple canopy before and after a crown reduction pruning',
    caption: 'Crown reduction on a maple',
  },
  {
    id: 5,
    src: null,
    label: '[PROJECT PHOTO — power-line clearance pruning]',
    alt: 'Crew pruning branches back for clearance from an overhead service line',
    caption: 'Service line clearance',
  },
  {
    id: 6,
    src: null,
    label: '[PROJECT PHOTO — cleared fence line]',
    alt: 'Overgrown fence line cleared of brush and small trees',
    caption: 'Fence line clearing',
  },
]

/** Never invent review text, names or ratings. Replace with real reviews only. */
export const testimonials = [
  {
    id: 1,
    quote: '[PLACEHOLDER REVIEW — replace with real customer review]',
    name: '[CUSTOMER NAME]',
    location: '[City]',
    stars: null,
    source: '[REVIEW SOURCE — Google / Facebook]',
  },
  {
    id: 2,
    quote: '[PLACEHOLDER REVIEW — replace with real customer review]',
    name: '[CUSTOMER NAME]',
    location: '[NEARBY CITY]',
    stars: null,
    source: '[REVIEW SOURCE — Google / Facebook]',
  },
  {
    id: 3,
    quote: '[PLACEHOLDER REVIEW — replace with real customer review]',
    name: '[CUSTOMER NAME]',
    location: '[NEARBY CITY]',
    stars: null,
    source: '[REVIEW SOURCE — Google / Facebook]',
  },
]

/** General tree-care education + process answers — safe to state, no invented claims. */
export const faqs = [
  {
    q: 'What does tree removal usually cost?',
    a: 'Price comes down to size, species, and access. A 30-foot pine in an open backyard is a different job from an 80-foot oak leaning over a roof with no room to drop it. Decay, power lines, and whether a crane or a climber is needed all move the number. We give you a firm written price on site before any work starts — [PRICING — confirm typical range].',
  },
  {
    q: 'Do I need a permit to take down a tree?',
    a: 'It depends on where the tree sits and what it is. Many towns regulate removals in the right-of-way, on protected species, or above a certain trunk diameter, and HOAs often have their own rules. We\'ll tell you during the estimate whether your removal likely needs a permit in [City, State] and what the process looks like — confirm current local requirements with your municipality before scheduling.',
  },
  {
    q: 'How fast can you get out after a storm?',
    a: 'After a major storm we work worst-first: trees on houses, limbs on power service lines, and drives blocked for emergency access come before cleanup work. Call rather than email — we\'ll tell you honestly where you land in the queue. [EMERGENCY RESPONSE TIME — confirm before publishing].',
  },
  {
    q: 'Will my homeowner\'s insurance cover this?',
    a: 'Generally, insurers cover removal when a tree has hit a covered structure — a house, garage, fence or vehicle — and often not when a healthy tree simply falls in the yard. Preventive removal of a risky tree is usually the owner\'s cost. We photograph the damage and itemize the work so you have documentation to file with. Your carrier makes the final call.',
  },
  {
    q: 'What\'s the difference between stump grinding and stump removal?',
    a: 'Grinding chews the stump into mulch below grade and leaves the root system to decay in the ground — faster, cheaper, and far less disruption to your lawn. Full removal excavates the stump and major roots, which leaves a large hole but is what you want if you\'re building, pouring concrete, or replanting a tree in the same spot.',
  },
  {
    q: 'When is the best time of year to prune?',
    a: 'Late dormant season — winter into very early spring — is best for most hardwoods: the structure is visible, the tree heals fast heading into spring, and disease pressure is low. Oaks and elms in particular should not be pruned in the active season where oak wilt or Dutch elm disease is a concern. Dead, broken and hazardous limbs are the exception; those come off whenever we find them.',
  },
  {
    q: 'Do you clean up, or do I have to deal with the wood?',
    a: 'Cleanup is part of the job. Brush is chipped, wood is cut down and hauled away, and we rake and blow the work area before we leave. If you want the wood left cut to stove length for firewood, tell us at the estimate and we\'ll stack it instead of loading it.',
  },
  {
    q: 'Can you take down a tree close to my house or power lines?',
    a: 'Yes — that\'s most of our removal work. Trees with no room to fall come down in sections, roped and lowered piece by piece. Work near your overhead service drop is coordinated with the utility when the line needs to be dropped or covered first; we don\'t work energized lines ourselves.',
  },
]

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#service-area', label: 'Service Area' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#quote', label: 'Contact' },
]

export default business
