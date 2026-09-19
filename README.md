# [Business Name] — Tree Service Site

Single-page marketing site for a tree removal & trimming company in [City, State].
React + Vite + Tailwind CSS v4, animations with Framer Motion.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint     # oxlint
```

## Editing business data

Everything client-specific lives in **`src/data/business.js`** — name, phone, email,
address, hours, services, service-area cities, gallery items, testimonials, FAQs and
trust-bar signals. Components import from it; no business strings are hardcoded in JSX.
Reskinning for another tree service means editing that one file (plus real photos).

Anything written as `[ALL CAPS IN BRACKETS]` is a placeholder that renders visibly on
the page so it can't be missed. Nothing in this site invents a fact about the business.

### Before launch

1. `src/data/business.js` — real phone (`phoneDisplay`), email, address, hours, licence
   and insurance lines, service-area cities.
2. Trust bar — set `count` on the `years` and `reviews` entries to real numbers; that
   also switches those slots from static placeholder text to the count-up animation.
3. Testimonials — replace all three placeholder reviews with real ones.
4. Gallery — drop job photos into `src/assets/` and set `src` on each gallery item.
5. `index.html` — title, meta description, canonical/OG URLs, and the LocalBusiness
   JSON-LD block (replace every bracketed value, or delete the block).
6. Quote form — wire `handleSubmit` in `src/components/sections/QuoteForm.jsx` to a real
   endpoint; it currently only shows a confirmation state.
7. Service-area map — replace the placeholder block with a Google Maps embed.

## Animation

All motion config lives in `src/lib/motion.js` (durations, easing, reveal/stagger/hover
variants). Durations are kept in the 0.15s–0.4s band, reveals fire once per element, and
only opacity/transform animate. `prefers-reduced-motion` is respected in two places:
Framer Motion via `useReducedMotion()` in `src/lib/motion.js`, and CSS transitions via
the reduced-motion block at the bottom of `src/index.css`.
