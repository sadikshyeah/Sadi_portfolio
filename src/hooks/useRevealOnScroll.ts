import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!elements.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
