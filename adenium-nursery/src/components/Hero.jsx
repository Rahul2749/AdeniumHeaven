import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const badgeRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const els = [badgeRef.current, headlineRef.current, subRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 180)
    })

    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.12)'
      imageRef.current.style.transition = 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)'
      setTimeout(() => {
        imageRef.current.style.transform = 'scale(1)'
      }, 100)
    }

    const onScroll = () => {
      const scrollY = window.scrollY
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(1) translateY(${scrollY * 0.25}px)`
      }
      if (overlayRef.current) {
        overlayRef.current.style.opacity = Math.min(scrollY / 600, 0.7)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div ref={imageRef} className="hero-image-wrap">
          <div className="hero-image-placeholder">
            <div className="hero-plant-art">
              <div className="plant-silhouette" />
              <div className="petal p1" />
              <div className="petal p2" />
              <div className="petal p3" />
              <div className="petal p4" />
              <div className="petal p5" />
              <div className="stem" />
              <div className="roots" />
            </div>
          </div>
        </div>
        <div ref={overlayRef} className="hero-overlay" />
        <div className="hero-noise" />
      </div>

      <div className="hero-content">
        <div ref={badgeRef} className="hero-badge">
          <span className="badge-dot" />
          Est. 2019 · Nagpur, India
          <span className="badge-dot" />
        </div>

        <h1 ref={headlineRef} className="hero-headline">
          <span className="line-wrap"><span className="line">Living Art</span></span>
          <span className="line-wrap italic"><span className="line">From Desert</span></span>
          <span className="line-wrap"><span className="line">to Doorstep</span></span>
        </h1>

        <p ref={subRef} className="hero-sub">
          Hand-cultivated Adenium specimens — where ceramic artistry meets<br />
          the ancient beauty of desert rose.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Collection
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-arrow">→</span>
            Our Story
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="hero-stats">
        {[
          { num: '500+', label: 'Rare Varieties' },
          { num: '12K+', label: 'Happy Growers' },
          { num: '8+', label: 'Years Cultivating' },
        ].map(stat => (
          <div key={stat.label} className="stat">
            <span className="stat-num">{stat.num}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}