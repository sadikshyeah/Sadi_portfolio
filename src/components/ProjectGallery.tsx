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
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const openImage = openIndex === null ? null : images[openIndex]

  const openLightbox = (index: number) => {
    setOpenIndex(index)
    dialogRef.current?.showModal()
  }

  const closeLightbox = () => dialogRef.current?.close()

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const updateActive = () => {
      const slides = Array.from(scroller.querySelectorAll<HTMLElement>('.project-card__slide'))
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

    const slides = scroller.querySelectorAll<HTMLElement>('.project-card__slide')
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
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            className="project-card__slide"
            aria-label={`Enlarge screenshot: ${image.alt}`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt=""
              className="project-card__image"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${title} screenshot`}
        onClose={() => setOpenIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox()
        }}
      >
        {openImage ? (
          <figure className="lightbox__figure">
            <img src={openImage.src} alt={openImage.alt} className="lightbox__image" />
            <figcaption className="lightbox__caption">{openImage.alt}</figcaption>
          </figure>
        ) : null}
        <button
          type="button"
          className="lightbox__close"
          aria-label="Close screenshot"
          onClick={closeLightbox}
        >
          ×
        </button>
      </dialog>

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
            <div className="project-card__dots" role="group" aria-label={`${title} slides`}>
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  className={`project-card__dot${index === activeIndex ? ' project-card__dot--active' : ''}`}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
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
