import { useEffect, useState } from 'react'
import './Navbar.css'

const links = ['Collection', 'About', 'Process', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-mark">✦</span>
          <span className="logo-text">Adenium <em>Heaven</em></span>
        </div>

        <nav className="navbar-links">
          {links.map(link => (
            <button key={link} className="nav-link" onClick={() => handleNav(link)}>
              {link}
            </button>
          ))}
          <button className="nav-cta" onClick={() => handleNav('Collection')}>
            Shop Now
          </button>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link, i) => (
          <button
            key={link}
            className="mobile-link"
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => handleNav(link)}
          >
            {link}
          </button>
        ))}
        <button className="nav-cta mobile-cta" onClick={() => handleNav('Collection')}>
          Shop Now
        </button>
      </div>
    </header>
  )
}