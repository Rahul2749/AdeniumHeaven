import { useEffect, useRef } from 'react'
import './About.css'
import pinkAdenium1 from '../assets/pink_adenium_1.png'
import pinkAdenium2 from '../assets/pink_adenium_2.png'

export default function About() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = [leftRef.current, rightRef.current, statsRef.current]
    els.forEach(el => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div ref={leftRef} className="about-left reveal-left">
          <div className="about-image-grid">
            <div className="img-card img-card--large">
              <div className="img-placeholder main-plant" style={{ background: '#F9F9F6' }}>
                <img src={pinkAdenium1} alt="Adenium Obesum Ruby" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', padding: '10%' }} />
              </div>
              <div className="img-label">Adenium Obesum 'Ruby'</div>
            </div>
            <div className="img-card img-card--small">
              <div className="img-placeholder ceramic-pots">
                <img src={pinkAdenium2} alt="Ceramic Collection" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', padding: '10%' }} />
              </div>
              <div className="img-label">Ceramic Collection</div>
            </div>
            <div className="about-badge-float">
              <span>✦</span>
              <span>Curator's Pick</span>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="about-right reveal-right">
          <div className="section-eyebrow">About Adenium Heaven</div>
          <h2 className="about-headline">
            Where Science Meets<br />
            <em>the Art of Growing</em>
          </h2>
          <p className="about-body">
            Nestled in the heart of Nagpur, our nursery is devoted to cultivating some of India's most extraordinary Adenium specimens. We believe each plant carries a unique story — from the arid deserts of Arabia to your living room window.
          </p>
          <p className="about-body">
            Every plant leaves our care with hand-selected ceramic vessels, personalised care guidance, and the promise of decades of bloom. We don't just sell plants — we begin relationships between growers and their living art.
          </p>

          <div className="about-features">
            {[
              { icon: '◈', title: 'Hand Grafted', desc: 'Each specimen grafted by our master horticulturalists' },
              { icon: '◉', title: 'Ethically Grown', desc: 'Zero synthetic hormones, sustainable practices throughout' },
              { icon: '◐', title: 'Expert Support', desc: 'Lifetime care consultation included with every purchase' },
            ].map(f => (
              <div key={f.title} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={statsRef} className="about-stats reveal-up">
        {[
          { number: '500+', label: 'Adenium Varieties' },
          { number: '12,000+', label: 'Plants Delivered' },
          { number: '98%', label: 'Survival Rate' },
          { number: '4.9★', label: 'Customer Rating' },
        ].map(s => (
          <div key={s.label} className="about-stat">
            <div className="about-stat-num">{s.number}</div>
            <div className="about-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}