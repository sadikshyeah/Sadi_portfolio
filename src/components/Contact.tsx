import { portfolio } from '../data/portfolio'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title contact__title">
          Let&apos;s build something together
        </h2>
        <p className="contact__text">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>
        <a href={`mailto:${portfolio.email}`} className="contact__email">
          {portfolio.email}
        </a>
        <div className="contact__social">
          <a href={portfolio.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={portfolio.social.twitter} target="_blank" rel="noreferrer">
            X / Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
