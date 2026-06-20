import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import LuxuryDecor from './LuxuryDecor'

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'The Ruby Red arrived beautifully packaged and is already blooming on my balcony. The ceramic pot it came in is a work of art. Absolutely worth every rupee.',
    plant: 'Ruby Red Obseum',
    initials: 'PS',
    color: '#D81B60',
  },
  {
    name: 'Arjun Mehta',
    location: 'Pune',
    rating: 5,
    text: 'I was nervous ordering a plant online but they included a detailed care guide specific to my specimen. The WhatsApp support is genuinely excellent.',
    plant: 'Thai Grafted Multi',
    initials: 'AM',
    color: '#1A457B',
  },
  {
    name: 'Lakshmi Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'The Desert Snow hybrid is extraordinary. I have never seen white adenium blooms like this. My guests always ask where I got it from.',
    plant: 'Desert Snow',
    initials: 'LR',
    color: '#5E7153',
  },
  {
    name: 'Rohit Desai',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Purchased the Cobalt Ceramic Set as a gift for my mother. She was completely enchanted. The plant arrived in perfect health three days later.',
    plant: 'Cobalt Ceramic Set',
    initials: 'RD',
    color: '#C85A32',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const review = reviews[active]

  return (
    <section className="testimonials section-reveal" ref={sectionRef} aria-label="Customer testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-eyebrow">Grower Stories</div>
          <h2 className="testimonials-headline">
            Loved by<br />
            <em>Plant Enthusiasts</em>
          </h2>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-main" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            {/* Faint botanical watermark */}
            <LuxuryDecor type="flower" variant={1} right="-5%" top="-15%" opacity={0.12} scale={1.5} rotation={15} blur={1} zIndex={-1} parallaxSpeed={0.01} />
            <div className="quote-mark">"</div>
            <div className="testimonial-text" key={active} aria-live="polite" aria-atomic="true">
              {review.text}
            </div>

            <div className="testimonial-author">
              <div
                className="author-avatar"
                style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}88)` }}
              >
                {review.initials}
              </div>
              <div className="author-info">
                <div className="author-name">{review.name}</div>
                <div className="author-location">{review.location} · {review.plant}</div>
              </div>
              <div className="author-stars">
                {'★'.repeat(review.rating)}
              </div>
            </div>

            <div className="testimonial-nav">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`nav-dot ${i === active ? 'active' : ''}`}
                  style={i === active ? { background: review.color } : {}}
                  onClick={() => setActive(i)}
                  aria-label={`Show review ${i + 1} of ${reviews.length} by ${reviews[i].name}`}
                />
              ))}
            </div>
          </div>

          <div className="testimonials-grid-side">
            {reviews.map((r, i) => (
              <button
                key={i}
                className={`review-pill ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={i === active ? { borderColor: r.color } : {}}
              >
                <span className="pill-avatar" style={{ background: `${r.color}22`, color: r.color }}>
                  {r.initials}
                </span>
                <div>
                  <div className="pill-name">{r.name}</div>
                  <div className="pill-plant">{r.plant}</div>
                </div>
                <span className="pill-stars" style={{ color: r.color }}>★★★★★</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}