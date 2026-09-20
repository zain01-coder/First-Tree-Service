import { useEffect } from 'react'

/**
 * Per-page <title> and meta description.
 *
 * With client-side routing the document head no longer changes on its own, and
 * both matter for local search: each page needs its own local-intent title.
 * Small enough that it doesn't justify a helmet-style dependency.
 */
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (!description) return
    const tag = document.querySelector('meta[name="description"]')
    if (!tag) return

    const previous = tag.getAttribute('content')
    tag.setAttribute('content', description)
    return () => tag.setAttribute('content', previous)
  }, [title, description])
}
