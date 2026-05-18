import { portfolio } from '../data/portfolio'

export function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section__title section__title--center">
          Tools & technologies I work with
        </h2>
        <ul className="skills__grid">
          {portfolio.skills.map((skill) => (
            <li key={skill} className="skill-card">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
