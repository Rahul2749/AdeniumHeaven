import { useEffect, useRef, useState } from 'react'
import './CTA.css'

export default function CTA() {
  const ref = useRef(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="cta-section section-reveal" ref={ref} aria-label="Contact and newsletter signup">
      <div className="cta-inner">
        <div className="cta-decoration">
          <div className="cta-flower">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="cta-petal"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-50px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <div className="cta-center" />
          </div>
        </div>

        <div className="cta-content">
          <div className="section-eyebrow">Join Our Community</div>
          <h2 className="cta-headline">
            Be the First to Know<br />
            <em>About Rare Arrivals</em>
          </h2>
          <p className="cta-body">
            Join over 12,000 adenium enthusiasts receiving our monthly newsletter —
            new variety alerts, care tips, and exclusive offers.
          </p>

          {submitted ? (
            <div className="success-msg">
              <span className="success-icon">✦</span>
              Thank you! You will receive our next newsletter shortly.
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit} aria-label="Newsletter subscription">
              <label htmlFor="cta-email" className="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="cta-input"
                required
                aria-required="true"
                autoComplete="email"
              />
              <button type="submit" className="cta-submit" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </form>
          )}

          <div className="cta-trust">
            <span>✦ No spam, ever</span>
            <span>✦ Unsubscribe anytime</span>
            <span>✦ Free care guides</span>
          </div>
        </div>

        <div className="cta-contact">
          <div className="contact-label">Or reach us directly</div>
          <a href="https://wa.me/917775077637" className="whatsapp-btn" data-cursor>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.014.523 3.906 1.44 5.551L0 24l6.602-1.414A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.021-1.379l-.36-.213-3.719.796.845-3.637-.232-.374A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
            </svg>
            WhatsApp Us
          </a>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">◈</span>
              <a href="https://maps.app.goo.gl/YTm2ZmVoVLyTNQ7B8" target="_blank" rel="noopener noreferrer">Tumsar, Maharashtra, India</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">◉</span>
              <a href="tel:+917775077637">+91 77750 77637</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">◎</span>
              <span>Open Mon–Sat, 9 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}