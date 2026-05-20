import { portfolio } from '../data/portfolio'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">{portfolio.role}</p>
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__name">{portfolio.name}</span>
          </h1>
          <p className="hero__tagline">{portfolio.tagline}</p>
          <p className="hero__location">{portfolio.location}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact me
            </a>
          </div>
          <div className="hero__scroll" aria-hidden="true">
            <span>Scroll</span>
            <div className="hero__scroll-line" />
          </div>
        </div>
        <div className="hero__profile">
          <div className="profile-photo profile-photo--hero">
            <img
              src={portfolio.profilePhoto}
              alt={portfolio.profilePhotoAlt}
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
