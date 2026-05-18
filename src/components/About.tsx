import { portfolio } from '../data/portfolio'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container section__grid">
        <div className="section__label-col">
          <p className="eyebrow">About</p>
          <h2 className="section__title">A bit about me</h2>
        </div>
        <div className="section__content-col">
          <p className="about__text">{portfolio.about}</p>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__value">3+</span>
              <span className="stat__label">Years experience</span>
            </div>
            <div className="stat">
              <span className="stat__value">20+</span>
              <span className="stat__label">Projects shipped</span>
            </div>
            <div className="stat">
              <span className="stat__value">100%</span>
              <span className="stat__label">Client focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
