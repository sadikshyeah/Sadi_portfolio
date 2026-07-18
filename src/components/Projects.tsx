import { portfolio } from '../data/portfolio'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section__title">Projects I&apos;ve built</h2>
        <p className="section__subtitle">
          Coursework and a team project from my studies at Haaga-Helia — backend,
          frontend, and collaborative Scrum delivery.
        </p>
        <div className="projects__grid">
          {portfolio.projects.map((project, index) => (
            <article key={project.title} className="project-card">
              {'images' in project && project.images?.length ? (
                <div className="project-card__gallery" aria-label={`${project.title} screenshots`}>
                  {project.images.map((image) => (
                    <img
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      className="project-card__image"
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : null}
              <div className="project-card__body">
                <span className="project-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="project-card__context">{project.context}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live site →
                  </a>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Source code
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
