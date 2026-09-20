/**
 * Single source of truth for everything client-specific on this site.
 * Reskinning for the next tree service = editing this file only.
 *
 * Anything in [ALL CAPS BRACKETS] is a placeholder that must be replaced with
 * real, verified information before the site goes live. Nothing here is invented.
 */

import treeRemovalPhoto from '../assets/image1.jpeg'
import trimmingPhoto from '../assets/image2.jpeg'
import stumpPhoto from '../assets/image3.jpeg'
import stormPhoto from '../assets/storm.jpeg'
import landClearingPhoto from '../assets/lot and land.jpeg'
import treeHealthPhoto from '../assets/footer.jpeg'

import treeRemovalHero from '../assets/tree removal2.jpeg'
import trimmingHero from '../assets/triming.jpeg'
import stumpHero from '../assets/removal2.jpeg'
import emergencyHero from '../assets/emergency.jpeg'
import landClearingHero from '../assets/lotclearing2.jpeg'
import treeHealthHero from '../assets/tree health.jpeg'

import oakOverRoofPhoto from '../assets/tree health and risk assessment.jpeg'
import poleSawPruningPhoto from '../assets/hero.jpg'

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

/**
 * Services.
 *
 * `slug` drives the shared detail route at /services/:slug — one template
 * component renders every service from this data, so adding a seventh service
 * here gives you a seventh detail page with no new component.
 *
 * Per service:
 *   summary     — one-line card blurb (home + services overview grid)
 *   description — the one-paragraph description on the overview and detail page
 *   details     — "What's included": the concrete line items of the job
 *   signs       — "When you need it": symptoms a homeowner can actually observe
 *   process     — how the job runs, step by step
 */
export const services = [
  {
    id: 'tree-removal',
    slug: 'tree-removal',
    name: 'Tree Removal',
    icon: 'tree',
    image: treeRemovalPhoto,
    imageAlt: 'Arborist removing a large tree near a house',
    heroImage: treeRemovalHero,
    heading: `Tree Removal in ${business.cityState}`,
    summary:
      'Safe takedown of dead, diseased, storm-damaged or badly leaning trees — including tight removals over roofs, fences and driveways.',
    description:
      'Most removals we get called for aren\'t open-field drops — they\'re trees with a house on one side, a fence on the other and a septic field underneath. Those come down in sections: a climber sets rigging, limbs and trunk pieces are roped and lowered under control, and nothing free-falls where it can do damage. Where the trunk is hollow, storm-split or leaning over a structure, we\'ll bring in a lift or a crane rather than put a climber in a tree that can\'t be trusted. Before any of that, we walk the tree with you — root flare, lean, decay pockets, targets underneath — and give you a firm written price, so the only surprise on the day is how little mess is left behind.',
    details: [
      'Rigging and sectional removal where a tree can\'t be felled whole',
      'Crane- and lift-assisted removals on large or hazardous trees',
      'Ground protection over lawns, beds and driveways',
      'Wood cut down and hauled away — or left stove-length if you want the firewood',
      'Brush chipped on site, work area raked and blown',
      'Stump grinding available on the same visit',
    ],
    signs: [
      'Dead, dying or largely bare canopy',
      'A lean that has changed, or soil lifting at the root flare',
      'Cracks, cavities, fungal conks or soft, punky wood at the base',
      'Storm-split trunk or a major leader hanging in the canopy',
      'Roots into a foundation, septic line or driveway slab',
    ],
    process: [
      {
        title: 'On-site assessment',
        text: 'We look at the tree, the access, and what sits under it, then quote a firm written price — free, no obligation.',
      },
      {
        title: 'Site setup',
        text: 'Drop zone cleared, ground protection down, and the utility contacted first if your service drop has to be covered or dropped.',
      },
      {
        title: 'Controlled takedown',
        text: 'Felled whole where there\'s room; roped and lowered in sections where there isn\'t.',
      },
      {
        title: 'Cleanup and haul-away',
        text: 'Brush chipped, wood loaded, yard raked and blown before we pull out of the driveway.',
      },
    ],
  },
  {
    id: 'trimming-pruning',
    slug: 'tree-trimming-pruning',
    name: 'Trimming & Pruning',
    icon: 'shears',
    image: trimmingPhoto,
    imageAlt: 'Crew pruning branches on a residential tree',
    heroImage: trimmingHero,
    heading: `Tree Trimming & Pruning in ${business.cityState}`,
    summary:
      'Species-appropriate pruning that keeps trees structurally sound: crown thinning, crown raising, crown reduction and deadwooding.',
    description:
      'Pruning is where a tree is either set up for the next twenty years or quietly ruined. We prune to the species and the structure in front of us — thinning to let wind through the canopy instead of against it, raising the crown for clearance over a drive or roofline, reducing long end-weighted limbs back to a suitable lateral, and taking out deadwood before it drops on its own. What we don\'t do is top trees: cutting a canopy back to stubs forces weak, fast regrowth and leaves you with a more dangerous tree and a bigger bill in five years. Timing matters too — most hardwoods are best pruned in the late dormant season, and oaks and elms should stay untouched during the active season where oak wilt or Dutch elm disease is a concern.',
    details: [
      'Crown thinning to reduce wind load and let light through',
      'Crown raising for clearance over roofs, drives and walkways',
      'Crown reduction back to suitable laterals — never topping',
      'Deadwooding to remove limbs likely to drop',
      'Structural pruning on young trees to prevent future failures',
      'Clearance pruning around your overhead service drop, coordinated with the utility',
    ],
    signs: [
      'Limbs touching the roof, siding, gutters or a service line',
      'Dead limbs visible in an otherwise healthy canopy',
      'Long, heavy end-weighted limbs over a drive, patio or play area',
      'A canopy so dense that wind hits it like a sail',
      'Two competing leaders with a tight, included-bark union',
    ],
    process: [
      {
        title: 'Walk the canopy',
        text: 'We identify the species, the structural issues and what the tree actually needs — not a blanket percentage off the top.',
      },
      {
        title: 'Agree on the objective',
        text: 'Clearance, thinning, deadwooding or reduction. You\'ll know what will be cut and roughly what the tree will look like after.',
      },
      {
        title: 'Prune to standard',
        text: 'Proper cuts at the branch collar, back to suitable laterals, with climbing lines set to avoid damaging the bark.',
      },
      {
        title: 'Clean up',
        text: 'Brush chipped on site and the work area raked and blown — same as any other job.',
      },
    ],
  },
  {
    id: 'stump-grinding',
    slug: 'stump-grinding',
    name: 'Stump Grinding & Removal',
    icon: 'stump',
    image: stumpPhoto,
    imageAlt: 'Stump grinder removing a tree stump below grade',
    heroImage: stumpHero,
    heading: `Stump Grinding & Removal in ${business.cityState}`,
    summary:
      'Grinding stumps below grade so you can re-seed, replant or lay sod — not just cutting the stump flush with the ground.',
    description:
      'A stump cut flush with the ground is still a stump: it sprouts, it attracts carpenter ants and it stops you mowing over it. Grinding chews it into mulch several inches below grade and takes the surface roots with it, so the spot can be raked level, backfilled and seeded or sodded. That\'s the right call for most yards — it\'s faster, cheaper and far less disruptive than excavation. Full stump removal, where the stump and major roots are dug out, is what you want when you\'re pouring concrete, setting footings or replanting a tree in the exact same spot; it leaves a sizeable hole that has to be backfilled. We\'ll tell you which one your project actually needs, and we call 811 before the grinder starts so nobody finds a buried line the hard way.',
    details: [
      'Ground several inches below grade so the spot can be planted over',
      'Surface-root grinding for trip hazards along walkways and lawns',
      'Grindings hauled away or backfilled and raked level — your choice',
      'Full excavation removal where footings or a replant demand it',
      'Utility locate called before grinding',
      'Old and weathered stumps handled, not just fresh cuts',
    ],
    signs: [
      'A stump left behind by another contractor or a storm',
      'Suckers and shoots sprouting around the base year after year',
      'A stump in the way of mowing, a fence line, a shed or a patio',
      'Surface roots lifting a walkway or catching the mower deck',
      'You want to replant or lay sod over the spot',
    ],
    process: [
      {
        title: 'Measure and quote',
        text: 'Stump diameter, root spread and access set the price. We quote before we start.',
      },
      {
        title: 'Locate utilities',
        text: '811 is called and the area is marked before the wheel touches the ground.',
      },
      {
        title: 'Grind below grade',
        text: 'The stump and surface roots are ground down several inches below ground level.',
      },
      {
        title: 'Backfill or haul',
        text: 'Grindings are raked back in and leveled, or loaded out and taken away.',
      },
    ],
  },
  {
    id: 'emergency',
    slug: 'emergency-tree-service',
    name: 'Emergency Tree Services',
    icon: 'storm',
    image: stormPhoto,
    imageAlt: 'Crew clearing a storm-damaged tree off a driveway',
    heroImage: emergencyHero,
    heading: `Emergency Tree Service in ${business.cityState}`,
    summary:
      'Trees and limbs down after a storm — on a roof, across a driveway, or tangled in a service line. Call and we\'ll tell you what we can get to and when.',
    description:
      'After a storm the phone doesn\'t stop, so we work worst-first: trees on houses, limbs on service lines, and drives blocked for emergency access come before general cleanup. A tree resting on a structure is a different job from a tree on the lawn — the load is held in tension, and cutting it in the wrong order drops the rest of it through the roof. We rig the weight off before anything is cut free. Hangers and split leaders sitting up in a canopy get taken down the same visit, because that\'s what falls on somebody a day later in the next gust. Call rather than email, and we\'ll tell you honestly where you land in the queue. [EMERGENCY RESPONSE TIME — confirm before publishing].',
    details: [
      'Trees and limbs removed off roofs, vehicles, fences and outbuildings',
      'Driveways and access routes cleared first',
      'Hangers and split leaders taken down before they drop',
      'Tensioned and uprooted trees cut in a controlled sequence',
      'Photos and an itemized scope for your insurance claim',
      'Utility contacted where the service drop is involved — we don\'t work energized lines',
    ],
    signs: [
      'A tree or limb on your house, garage, vehicle or fence',
      'A limb hung up in the canopy after a storm',
      'A trunk split or a leader torn out',
      'A tree uprooting — soil heaving or lifting on one side',
      'A drive or walkway blocked by storm debris',
    ],
    process: [
      {
        title: 'Call us',
        text: 'Tell us what\'s down and what it\'s on. Storm work is triaged by risk, not by who called first.',
      },
      {
        title: 'Make it safe',
        text: 'The scene is assessed for tension, hangers and line contact before a saw runs.',
      },
      {
        title: 'Remove the hazard',
        text: 'Weight is rigged off structures and lowered under control, then the rest comes down.',
      },
      {
        title: 'Document and clean up',
        text: 'Photos and an itemized scope for your carrier, debris hauled, area cleared.',
      },
    ],
  },
  {
    id: 'land-clearing',
    slug: 'land-clearing',
    name: 'Lot & Land Clearing',
    icon: 'lot',
    image: landClearingPhoto,
    imageAlt: 'Cleared lot ready for building or landscaping',
    heroImage: landClearingHero,
    heading: `Lot & Land Clearing in ${business.cityState}`,
    summary:
      'Clearing overgrown lots, fence lines and building pads — brush chipped on site, trees removed, ground left workable.',
    description:
      'Whether it\'s a half-acre that\'s gone to brush or a building pad that needs to be clear before the excavator shows up, land clearing is mostly a question of how much you want left. We\'ll take a lot down to bare workable ground, or selectively clear and leave the mature hardwoods you actually want to keep — which is usually the better call, because a specimen oak is worth more standing than the cost of working around it. Brush is chipped on site, merchantable wood is cut and stacked or hauled, and stumps are ground or excavated depending on what you\'re building. Tell us the end use — fence, driveway, pasture, pad — and we\'ll clear to that spec rather than guessing.',
    details: [
      'Selective clearing that keeps the mature trees worth saving',
      'Fence line and property line clearing',
      'Brush and undergrowth chipped on site',
      'Building pad, driveway and utility run clearing',
      'Stumps ground or excavated to suit the end use',
      'Debris hauled off or piled where you want it',
    ],
    signs: [
      'A lot too overgrown to walk, let alone build on',
      'A fence or property line disappearing into brush',
      'A build site, driveway or utility run that has to be cleared first',
      'Pasture or field reverting to scrub and saplings',
      'Undergrowth crowding out the mature trees you want to keep',
    ],
    process: [
      {
        title: 'Walk the property',
        text: 'We mark what stays and what goes, and flag anything — wetland, easement, protected tree — worth checking before work starts.',
      },
      {
        title: 'Confirm permits',
        text: 'Clearing rules vary by municipality. We\'ll tell you what to verify with the county before we mobilize.',
      },
      {
        title: 'Clear in stages',
        text: 'Undergrowth and brush first, then trees, then stumps — so equipment always has room to work.',
      },
      {
        title: 'Leave it workable',
        text: 'Ground graded back as agreed, debris chipped, hauled or piled to your spec.',
      },
    ],
  },
  {
    id: 'tree-health',
    slug: 'tree-health-assessment',
    name: 'Tree Health & Risk Assessment',
    icon: 'leaf',
    image: treeHealthPhoto,
    imageAlt: 'Arborist inspecting a tree trunk for decay',
    heroImage: treeHealthHero,
    heading: `Tree Health & Risk Assessment in ${business.cityState}`,
    summary:
      'A straight answer on whether a tree can be saved: decay, root damage, storm cracks, canopy dieback and what it means for the tree\'s stability.',
    description:
      'Not every tree that looks bad needs to come down, and some that look fine shouldn\'t be standing. An assessment is the part where somebody who does this for a living walks the tree properly — root flare and buttress roots, trunk for cavities, cracks and fungal fruiting bodies, unions for included bark, canopy for dieback and deadwood — and tells you what\'s actually going on and what sits underneath it if it fails. Sometimes the answer is cabling and a reduction pruning; sometimes it\'s removal; often it\'s "watch it and re-inspect after next season." We\'ll put it in writing, which is what a buyer, an HOA or an insurer generally wants to see. [CERTIFICATION — confirm ISA Certified Arborist on crew].',
    details: [
      'Visual inspection of root flare, trunk, unions and canopy',
      'Decay, cavity, crack and fungal indicator identification',
      'Target assessment — what the tree would hit if it failed',
      'Cabling and bracing recommendations where a tree is worth keeping',
      'Pruning or removal recommendation with reasoning, not just a verdict',
      'Written assessment for homeowners, buyers, HOAs and insurers',
    ],
    signs: [
      'Thinning canopy, early leaf drop or dieback at the branch tips',
      'Mushrooms or conks at the base or along the trunk',
      'A cavity, seam or vertical crack in the trunk',
      'Construction, trenching or grade change near the root zone',
      'A tree you\'re unsure about that overhangs the house',
    ],
    process: [
      {
        title: 'Inspection',
        text: 'A systematic look from root flare to canopy — and at what the tree would hit if it came down.',
      },
      {
        title: 'Diagnosis',
        text: 'What we found, what it means structurally, and how urgent it is.',
      },
      {
        title: 'Options',
        text: 'Retain and monitor, prune, cable and brace, or remove — with the reasoning behind each.',
      },
      {
        title: 'Written report',
        text: 'Findings and recommendations in writing for your records, buyer, HOA or insurer.',
      },
    ],
  },
]

/** Copy for the /services overview page. */
export const servicesPage = {
  eyebrow: 'Our services',
  title: `Tree services in ${business.cityState}`,
  intro: `From a single limb over a driveway to a full lot clear, ${business.name} handles the whole job — removal, pruning, stump grinding, storm work and cleanup — with the rigging and equipment to do it without tearing up your yard. Every job starts with a free on-site estimate and a firm written price.`,
}

/** Reasons homeowners pick this crew over the competition. */
export const whyChooseUs = [
  {
    id: 'licensed-insured',
    icon: 'shield',
    title: 'Licensed & Insured',
    description:
      'Full coverage on every job, so a falling limb or a driveway scratch is never your liability. [LICENSE #] · [INSURED — confirm coverage details].',
  },
  {
    id: 'free-estimates',
    icon: 'clipboard',
    title: 'Free, No-Obligation Estimates',
    description:
      'We look at the tree, give you a firm price on the spot, and never pressure you to sign before you\'re ready.',
  },
  {
    id: 'experienced-crew',
    icon: 'calendar',
    title: 'Experienced Local Crew',
    description: `${business.name} has been removing and maintaining trees in ${business.city} — [X YEARS IN BUSINESS].`,
  },
  {
    id: 'emergency-response',
    icon: 'storm',
    title: 'Fast Emergency Response',
    description:
      'Storm took a tree down on your house or driveway? Call and we\'ll tell you honestly where you land in the queue. [EMERGENCY RESPONSE TIME — confirm before publishing].',
  },
  {
    id: 'full-cleanup',
    icon: 'check',
    title: 'Full Cleanup, Every Time',
    description:
      'Wood hauled, brush chipped, yard raked and blown before we leave — the job isn\'t done until your property looks better than we found it.',
  },
  {
    id: 'reviews',
    icon: 'star',
    title: 'Rated by Local Homeowners',
    description: '[X.X★ FROM X GOOGLE REVIEWS] — real feedback from real jobs in [City, State].',
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
    src: oakOverRoofPhoto,
    label: '[PROJECT PHOTO — large oak removal over a roof]',
    alt: 'Bucket truck cutting sections from a large tree beside a house roof',
    caption: 'Sectional removal, [City]',
  },
  {
    id: 2,
    src: emergencyHero,
    label: '[PROJECT PHOTO — storm-damaged limb on a garage]',
    alt: 'Crew removing a storm-fallen tree from a house roof',
    caption: 'Storm damage cleanup',
  },
  {
    id: 3,
    src: stumpHero,
    label: '[PROJECT PHOTO — stump ground below grade]',
    alt: 'Stump grinder chewing through a stump in a front yard',
    caption: 'Stump grinding in progress',
  },
  {
    id: 4,
    src: poleSawPruningPhoto,
    label: '[PROJECT PHOTO — crown reduction before/after]',
    alt: 'Crew member pruning a tree with a pole saw in a backyard',
    caption: 'Pruning a shade tree',
  },
  {
    id: 5,
    src: trimmingPhoto,
    label: '[PROJECT PHOTO — power-line clearance pruning]',
    alt: 'Three climbers roped into a large oak, pruning branches with a chipper truck below',
    caption: 'Climbing crew pruning a mature oak',
  },
  {
    id: 6,
    src: landClearingHero,
    label: '[PROJECT PHOTO — cleared fence line]',
    alt: 'Forestry mulcher clearing brush and undergrowth near a house',
    caption: 'Brush and overgrowth cleared',
  },
  {
    id: 7,
    src: treeRemovalPhoto,
    label: '[PROJECT PHOTO — crane-assisted removal]',
    alt: 'Crew in a bucket truck cutting down a large tree in a residential backyard',
    caption: 'Bucket truck removal, backyard',
  },
  {
    id: 8,
    src: stumpPhoto,
    label: '[PROJECT PHOTO — deadwooding a mature oak]',
    alt: 'Two climbers working a mature oak near a house, one in a bucket truck',
    caption: 'Removing a mature oak',
  },
  {
    id: 9,
    src: landClearingPhoto,
    label: '[PROJECT PHOTO — yard raked clean after a removal]',
    alt: 'Two arborists limbing and bucking a felled tree in a front yard',
    caption: 'Cutting up a fallen limb',
  },
]

/** Copy for the /gallery page. */
export const galleryPage = {
  eyebrow: 'Recent work',
  title: `Tree work around ${business.cityState}`,
  intro: `Sectional removals over roofs, storm cleanup, stumps ground below grade and yards raked clean afterwards — this is the kind of work ${business.name} does week to week. Every photo here should be your own crew's; the blocks below mark where real job photos go.`,
  note: '[PROJECT PHOTOS NEEDED — replace every block on this page with real job photos from your own crew. Never use stock photography in a gallery; homeowners recognise it and it costs you the call.]',
}

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

/**
 * Site navigation.
 *
 * Hrefs are route-absolute (`/#services`, not `#services`) so every link works
 * from any page — a bare `#services` on /about would only scroll within /about.
 * Rendered through react-router <Link>, so hash links stay client-side.
 */
/**
 * About page content.
 *
 * Nothing here states a fact about this business that wasn't supplied. Founding
 * year, founder name, crew size, certifications and insurance details are all
 * bracketed placeholders and must be replaced with verified information before
 * launch. The surrounding copy is tree-work reality that's true of the trade,
 * not a claim about this company's history.
 */
export const about = {
  eyebrow: 'About us',
  title: `The crew behind ${business.name}`,
  intro: `Tree work is one of the few trades where a bad decision shows up as a hole in someone's roof. That's the standard we hold ourselves to on every job in ${business.cityState} — from a single deadwooding to an eighty-foot removal with no room to drop it.`,

  story: {
    heading: 'How we got started',
    paragraphs: [
      `${business.name} was founded in [FOUNDING YEAR] by [FOUNDER NAME], and we've been working trees in ${business.cityState} ever since — [X YEARS IN BUSINESS].`,
      'We started the way most tree companies do: one truck, one chipper, and a phone number handed around by neighbors after a storm. What kept the phone ringing wasn’t advertising — it was showing up when we said we would, giving people a straight answer about whether a tree could be saved, and leaving the yard cleaner than we found it.',
      `Everything we take on is still local. We're not a franchise routing calls to a subcontractor two counties over — when you call, you're talking to the crew that will be standing in your yard. Serving ${business.city} and the surrounding areas.`,
    ],
  },

  crew: {
    heading: 'Our crew',
    intro:
      'Climbers, ground crew and equipment operators who do this full-time — not a seasonal side business. [CREW SIZE — confirm]. [CERTIFICATION — confirm ISA Certified Arborist on crew].',
    points: [
      {
        id: 'training',
        icon: 'shield',
        title: 'Trained for the work, not just the weather',
        description:
          'Rigging, aerial rescue and chainsaw safety are things our climbers train on and keep current, because the day you need them is the day nothing is going to plan.',
      },
      {
        id: 'assessment',
        icon: 'leaf',
        title: 'Every job starts with an assessment',
        description:
          'Before a saw comes out we walk the tree: root flare, lean, decay pockets, targets underneath, and where the limbs actually want to go. That walk is what keeps the removal boring.',
      },
      {
        id: 'accountable',
        icon: 'check',
        title: 'The same crew, start to finish',
        description:
          'The person who quotes your job is the person running it. No handoffs, no surprise subcontractors showing up in an unmarked truck.',
      },
    ],
  },

  equipment: {
    heading: 'Equipment & approach',
    intro:
      'The right gear is what turns a risky removal into a routine one. We match the equipment to the tree and the access, not the other way around.',
    points: [
      {
        id: 'rigging',
        icon: 'tree',
        title: 'Climbing and rigging for tight removals',
        description:
          'When a tree can’t be felled whole, it comes down in sections — roped, lowered and controlled piece by piece over roofs, fences and flower beds.',
      },
      {
        id: 'lift',
        icon: 'storm',
        title: 'Lift and crane-assisted work where it’s safer',
        description:
          'Compromised trunks, storm-split leaders and heavy overhangs are often safer picked apart from a bucket or lifted out by crane than climbed. [EQUIPMENT LIST — confirm owned vs. rented].',
      },
      {
        id: 'ground-care',
        icon: 'clipboard',
        title: 'Ground protection and full cleanup',
        description:
          'Mats and plywood under heavy equipment, brush chipped on site, wood hauled, and the work area raked and blown before we pull out of the driveway.',
      },
      {
        id: 'utility',
        icon: 'shears',
        title: 'Work near service lines, done properly',
        description:
          'Clearance pruning around your overhead service drop is coordinated with the utility when the line needs to be dropped or covered. We don’t work energized lines ourselves — anyone who offers to is a liability to you.',
      },
    ],
  },

  credentials: {
    heading: 'Licensed, insured and accountable',
    intro:
      'Ask any tree company for proof of insurance before they start. If they hesitate, that’s your answer. Here’s ours — and we’ll hand you the certificates in writing, on request, before work begins.',
    items: [
      {
        id: 'license',
        icon: 'shield',
        title: 'Licensed',
        description: '[LICENSED — confirm license #] — issued in [State].',
      },
      {
        id: 'liability',
        icon: 'check',
        title: 'General liability insurance',
        description:
          '[INSURED — confirm coverage details]. Damage to your home, fence or vehicle during the job is our liability, not yours.',
      },
      {
        id: 'workers-comp',
        icon: 'clipboard',
        title: 'Workers’ compensation',
        description:
          '[WORKERS’ COMP — confirm coverage]. Without it, an injury in your yard can become a claim against your homeowner’s policy.',
      },
      {
        id: 'certification',
        icon: 'leaf',
        title: 'Arborist certification',
        description:
          '[CERTIFICATION — confirm ISA Certified Arborist on crew]. Certification is what separates tree care from tree cutting.',
      },
    ],
  },
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#quote', label: 'Contact' },
]

export default business
