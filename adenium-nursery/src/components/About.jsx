import { useEffect, useRef } from 'react'
import './About.css'

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
              <div className="img-placeholder main-plant">
                <div className="plant-icon-lg">
                  <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="200" rx="30" ry="60" fill="#4A3520"/>
                    <ellipse cx="100" cy="220" rx="55" ry="18" fill="rgba(196,164,132,0.3)"/>
                    <ellipse cx="100" cy="140" rx="65" ry="80" fill="#3D5A2E" opacity="0.9"/>
                    <ellipse cx="100" cy="120" rx="55" ry="70" fill="#4A7A35" opacity="0.8"/>
                    <ellipse cx="80" cy="80" rx="42" ry="55" fill="#D81B60" opacity="0.9" transform="rotate(-15 80 80)"/>
                    <ellipse cx="120" cy="75" rx="40" ry="52" fill="#E91E8C" opacity="0.85" transform="rotate(15 120 75)"/>
                    <ellipse cx="100" cy="65" rx="35" ry="48" fill="#FF4081" opacity="0.8"/>
                    <ellipse cx="78" cy="95" rx="30" ry="42" fill="#C2185B" opacity="0.7" transform="rotate(-40 78 95)"/>
                    <ellipse cx="122" cy="90" rx="28" ry="40" fill="#AD1457" opacity="0.7" transform="rotate(40 122 90)"/>
                    <circle cx="100" cy="72" r="18" fill="#FFD54F" opacity="0.6"/>
                    <circle cx="100" cy="72" r="10" fill="#FFF9C4" opacity="0.8"/>
                  </svg>
                </div>
              </div>
              <div className="img-label">Adenium Obesum 'Ruby'</div>
            </div>
            <div className="img-card img-card--small">
              <div className="img-placeholder ceramic-pots">
                <div className="pot-art">
                  <div className="pot p1" />
                  <div className="pot p2" />
                  <div className="pot p3" />
                </div>
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
          <div className="section-eyebrow">About the Atelier</div>
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