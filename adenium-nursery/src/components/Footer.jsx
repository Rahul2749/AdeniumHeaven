import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">✦</span>
              <span>Adenium <em>Heaven</em></span>
            </div>
            <p className="footer-tagline">
              Hand-cultivated desert roses.<br />
              Tumsar, Maharashtra, India.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/adeniumheaven?igsh=MWZyaXJoYmIwODBuNg==" target="_blank" rel="noopener noreferrer" className="social-link">Ig</a>
              <a href="https://www.facebook.com/profile.php?id=100085840031712" target="_blank" rel="noopener noreferrer" className="social-link">Fb</a>
              <a href="https://youtube.com/@adeniumheaven?si=PkakAH3qaGjS87GJ" target="_blank" rel="noopener noreferrer" className="social-link">Yt</a>
            </div>
          </div>

          <div className="footer-nav">
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
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 Adenium Heaven. All rights reserved.
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