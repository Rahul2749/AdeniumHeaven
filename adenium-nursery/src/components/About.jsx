import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'
import pinkAdenium1 from '../assets/pink_adenium_1.png'
import pinkAdenium2 from '../assets/pink_adenium_2.png'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side - slide in from left
      gsap.fromTo('.about-left',
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-container',
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Right side - slide in from right
      gsap.fromTo('.about-right',
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-container',
            start: 'top 75%',
            end: 'top 35%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Stats bar
      gsap.fromTo('.about-stats',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Feature items stagger
      gsap.fromTo('.feature-item',
        { opacity: 0, x: 20 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-features',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-left" style={{ opacity: 0 }}>
          <div className="about-image-grid">
            <div className="img-card img-card--large">
              <div className="img-placeholder main-plant" style={{ background: '#F9F9F6' }}>
                <img src={pinkAdenium1} alt="Adenium Obesum Ruby" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', padding: '10%' }} />
              </div>
              <div className="img-label">Adenium Obesum 'Ruby'</div>
            </div>
            <div className="img-card img-card--small">
              <div className="img-placeholder ceramic-pots">
                <img src={pinkAdenium2} alt="Ceramic Collection" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', padding: '10%' }} />
              </div>
              <div className="img-label">Ceramic Collection</div>
            </div>
            <div className="about-badge-float">
              <span>✦</span>
              <span>Curator's Pick</span>
            </div>
          </div>
        </div>

        <div className="about-right" style={{ opacity: 0 }}>
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
              <div key={f.title} className="feature-item" style={{ opacity: 0 }}>
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

      <div className="about-stats" style={{ opacity: 0 }}>
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