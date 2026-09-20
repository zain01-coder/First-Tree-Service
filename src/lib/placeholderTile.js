/**
 * Builds a data-URI SVG stand-in for a job photo that hasn't been supplied yet.
 *
 * The DriftWall tiles render an <img>, so the striped placeholder <div> used in
 * the home-page grid can't be dropped in. This draws the same thing — forest
 * diagonal stripes plus the bracketed label — as an image, so the gallery still
 * says plainly that real photos are missing instead of showing stock imagery.
 *
 * Once a real photo is set on a gallery item's `src` in data/business.js, that
 * photo is used and this is never called for it.
 */

const STRIPE_DARK = '#e0ebe3' // forest-100
const STRIPE_LIGHT = '#f3f7f4' // forest-50
const TEXT = '#264a36' // forest-700

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Greedy wrap so long labels don't run off the tile. */
function wrap(text, maxChars = 22) {
  const lines = []
  let line = ''

  for (const word of text.split(/\s+/)) {
    if (!line) line = word
    else if (`${line} ${word}`.length <= maxChars) line += ` ${word}`
    else {
      lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)

  return lines.slice(0, 4)
}

export default function placeholderTile(label, { width = 600, height = 400 } = {}) {
  const lines = wrap(label)
  const lineHeight = 30
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2

  const text = lines
    .map(
      (line, i) =>
        `<text x="${width / 2}" y="${startY + i * lineHeight}" fill="${TEXT}" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" dominant-baseline="middle">${escapeXml(line)}</text>`,
    )
    .join('')

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="presentation">` +
    `<defs><pattern id="s" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">` +
    `<rect width="24" height="24" fill="${STRIPE_LIGHT}"/><rect width="12" height="24" fill="${STRIPE_DARK}"/>` +
    `</pattern></defs>` +
    `<rect width="${width}" height="${height}" fill="url(#s)"/>` +
    text +
    `</svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
