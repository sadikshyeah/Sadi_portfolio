import { portfolio } from '../data/portfolio'

export function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container section__grid">
        <div className="section__label-col">
          <p className="eyebrow">Experience</p>
          <h2 className="section__title">Where I&apos;ve worked</h2>
        </div>
        <ul className="timeline">
          {portfolio.experience.map((item) => (
            <li key={item.title} className="timeline__item">
              <span className="timeline__period">{item.period}</span>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__company">{item.company}</p>
              <p className="timeline__desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
