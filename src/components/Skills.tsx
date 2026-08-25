import { portfolio } from '../data/portfolio'

export function Skills() {
  return (
    <section className="section section--alt" id="skills" data-reveal>
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section__title section__title--center">
          Tools & technologies I work with
        </h2>
        <div className="skills__categories">
          {portfolio.skillCategories.map((category) => (
            <div key={category.title} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <ul className="skills__grid">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-card">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
