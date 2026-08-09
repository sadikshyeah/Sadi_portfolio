import { useEffect, useRef, useState } from 'react'

type GalleryImage = {
  src: string
  alt: string
}

type ProjectGalleryProps = {
  title: string
  images: readonly GalleryImage[]
}

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const updateActive = () => {
      const slides = Array.from(scroller.querySelectorAll<HTMLElement>('.project-card__image'))
      if (!slides.length) return

      const scrollLeft = scroller.scrollLeft
      let closest = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scrollLeft)
        if (distance < closestDistance) {
          closestDistance = distance
          closest = index
        }
      })

      setActiveIndex(closest)
    }

    updateActive()
    scroller.addEventListener('scroll', updateActive, { passive: true })
    return () => scroller.removeEventListener('scroll', updateActive)
  }, [images])

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const slides = scroller.querySelectorAll<HTMLElement>('.project-card__image')
    const target = slides[index]
    if (!target) return

    scroller.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  }

  const goPrev = () => scrollToIndex(Math.max(activeIndex - 1, 0))
  const goNext = () => scrollToIndex(Math.min(activeIndex + 1, images.length - 1))

  return (
    <div className="project-card__media">
      <div
        ref={scrollerRef}
        className="project-card__gallery"
        aria-label={`${title} screenshots`}
      >
        {images.map((image) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className="project-card__image"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="project-card__nav project-card__nav--prev"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label={`Previous ${title} screenshot`}
          >
            ‹
          </button>
          <button
            type="button"
            className="project-card__nav project-card__nav--next"
            onClick={goNext}
            disabled={activeIndex === images.length - 1}
            aria-label={`Next ${title} screenshot`}
          >
            ›
          </button>

          <div className="project-card__controls">
            <p className="project-card__hint">Swipe for more</p>
            <div className="project-card__dots" role="tablist" aria-label={`${title} slides`}>
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  role="tab"
                  className={`project-card__dot${index === activeIndex ? ' project-card__dot--active' : ''}`}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-selected={index === activeIndex}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
