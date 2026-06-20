import LogoMark from './LogoMark'
import './Footer.css'
import LuxuryDecor from './LuxuryDecor'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <LuxuryDecor type="flower" variant={2} right="-10%" bottom="-20%" opacity={0.15} scale={1.8} rotation={25} parallaxSpeed={0.01} />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <LogoMark className="logo-mark-svg" />
              <span>Adenium <em>Heaven</em></span>
            </div>
            <p className="footer-tagline">
              Hand-cultivated desert roses.<br />
              Tumsar, Maharashtra, India.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/adeniumheaven?igsh=MWZyaXJoYmIwODBuNg==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100085840031712" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@adeniumheaven?si=PkakAH3qaGjS87GJ" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48"/>
                </svg>
              </a>
              <a href="https://maps.app.goo.gl/YTm2ZmVoVLyTNQ7B8" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <div className="footer-col-title">Shop</div>
              {['All Adeniums', 'Rare Varieties', 'Ceramic Sets', 'Starter Packs', 'Gift Cards'].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Learn</div>
              {['Care Guides', 'Propagation', 'Troubleshooting', 'Blog', 'Video Tutorials'].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              {['About Us', 'Process', 'Sustainability', 'Press', 'Contact'].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Adenium Heaven. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
            <span>·</span>
            <a href="#">Shipping Policy</a>
          </div>
          <div className="footer-made">
            Crafted with ✦ in Tumsar
          </div>
        </div>
      </div>
    </footer>
  )
}