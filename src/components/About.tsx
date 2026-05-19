import { portfolio } from '../data/portfolio'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container section__grid section__grid--about">
        <div className="section__label-col about__aside">
          <div className="profile-photo profile-photo--about">
            <img
              src={portfolio.profilePhoto}
              alt={portfolio.profilePhotoAlt}
              width={320}
              height={400}
            />
          </div>
          <p className="eyebrow">About</p>
          <h2 className="section__title">A bit about me</h2>
        </div>
        <div className="section__content-col">
          <p className="about__school">
            <strong>{portfolio.degree}</strong>
            <br />
            {portfolio.school}
          </p>
          <p className="about__text">{portfolio.about}</p>
          <div className="about__stats">
            {portfolio.highlights.map((item) => (
              <div key={item.label} className="stat">
                <span className="stat__value">{item.value}</span>
                <span className="stat__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
