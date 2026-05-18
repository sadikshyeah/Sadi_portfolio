import { portfolio } from '../data/portfolio'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section__title">Selected projects</h2>
        <p className="section__subtitle">
          A few things I&apos;ve built — swap these with your real projects in{' '}
          <code>src/data/portfolio.ts</code>.
        </p>
        <div className="projects__grid">
          {portfolio.projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <span className="project-card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-card__links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live demo →
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
