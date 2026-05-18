import { portfolio } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {portfolio.name}. Crafted with care.
        </p>
        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
