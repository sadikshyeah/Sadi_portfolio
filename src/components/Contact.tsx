import { portfolio } from '../data/portfolio'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title contact__title">
    
        </h2>
        <p className="contact__text">
          I&apos;d love to connect about internship opportunities.
           Reach out on LinkedIn or browse my code on GitHub.
        </p>
        <a
          href={portfolio.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact__email"
        >
          Connect on LinkedIn
        </a>
        <div className="contact__social">
          <a href={portfolio.social.github} target="_blank" rel="noreferrer">
            GitHub — @sadikshyeah
          </a>
          <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
