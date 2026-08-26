import { useState } from 'react'
import { portfolio } from '../data/portfolio'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = portfolio.social.email

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section contact" id="contact" data-reveal>
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title contact__title">
          Let&apos;s connect
        </h2>
        <p className="contact__text">
          I&apos;d love to connect about internship opportunities.
          Email me, reach out on LinkedIn, or browse my code on GitHub.
        </p>

        <div className="contact__cta">
          <a href={`mailto:${email}`} className="contact__email">
            {email}
          </a>
          <div className="contact__actions">
            <a href={`mailto:${email}`} className="btn btn--primary">
              Send email
            </a>
            <button type="button" className="btn btn--ghost" onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
        </div>

        <div className="contact__social">
          <a href={portfolio.resume} download>
            Download CV
          </a>
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
