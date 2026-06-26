import { useEffect, useState } from 'react'
import logoWithoutBg from '../assets/logo_withoutbg.png'
import './Navbar.css'

const links = ['Collection', 'About', 'Process', 'Care', 'Contact']

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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} role="button" tabIndex={0} aria-label="Adenium Heaven — Back to top">
          <img src={logoWithoutBg} alt="Adenium Heaven Logo" className="logo-image" />
        </div>

        <nav className="navbar-links" aria-label="Main navigation">
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
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span /><span /><span />
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
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
      </nav>
    </header>
  )
}