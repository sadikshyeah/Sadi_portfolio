import { portfolio } from '../data/portfolio'
import { ProjectGallery } from './ProjectGallery'

export function Projects() {
  const work = portfolio.professionalWork

  return (
    <section className="section" id="projects" data-reveal>
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section__title">Projects I&apos;ve built</h2>
        <p className="section__subtitle">
          Production work at Okhati, plus coursework and a team project from my
          studies at Haaga-Helia.
        </p>
        <article className="work-feature">
          <div className="work-feature__main">
            <div className="project-card__meta">
              <span className="project-card__badge">Professional work</span>
            </div>
            <p className="project-card__context">{work.context}</p>
            <h3 className="work-feature__title">{work.title}</h3>
            <p className="work-feature__outcome">{work.outcome}</p>
            <p className="project-card__desc">{work.description}</p>
          </div>
          <div className="work-feature__side">
            <ul className="work-feature__list">
              {work.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="project-card__tags">
              {work.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </article>
        <div className="projects__grid">
          {portfolio.projects.map((project, index) => {
            const isFeatured = 'featured' in project && project.featured

            return (
              <article
                key={project.title}
                className={`project-card${isFeatured ? ' project-card--featured' : ''}`}
              >
                {'images' in project && project.images?.length ? (
                  <ProjectGallery title={project.title} images={project.images} />
                ) : null}
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {isFeatured ? (
                      <span className="project-card__badge">Featured</span>
                    ) : null}
                  </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
