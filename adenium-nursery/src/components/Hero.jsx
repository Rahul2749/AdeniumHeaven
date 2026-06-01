import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'
import heroImage from '../assets/light_pink_multipetal_hero.png'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const badgeRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const actionsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations - staggered fade-in
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(imageRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.8, ease: 'power2.out' }
      )
      .fromTo(badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.3
      )
      .fromTo(headlineRef.current?.querySelectorAll('.line'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        0.45
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.0
      )

      // Parallax on scroll - GPU accelerated via GSAP
      gsap.to(imageRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })

      // Overlay darkens on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.65,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
      })

      // Content fades up and out on scroll
      gsap.to('.hero-content', {
        y: -60,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '20% top',
          end: '60% top',
          scrub: 0.5,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div ref={imageRef} className="hero-image-wrap">
          <div className="hero-image-placeholder">
            <img
              src={heroImage}
              alt="Adenium Desert Rose"
              loading="eager"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            />
          </div>
        </div>
        <div ref={overlayRef} className="hero-overlay" />
        <div className="hero-noise" />
      </div>

      <div className="hero-content">
        <div ref={badgeRef} className="hero-badge" style={{ opacity: 0 }}>
          <span className="badge-dot" />
          Est. 2020 · Tumsar, India
          <span className="badge-dot" />
        </div>

        <h1 ref={headlineRef} className="hero-headline">
          <span className="line-wrap"><span className="line" style={{ opacity: 0 }}>Living Art</span></span>
          <span className="line-wrap italic"><span className="line" style={{ opacity: 0 }}>From Desert</span></span>
          <span className="line-wrap"><span className="line" style={{ opacity: 0 }}>to Doorstep</span></span>
        </h1>

        <p ref={subRef} className="hero-sub" style={{ opacity: 0 }}>
          Hand-cultivated Adenium specimens — where ceramic artistry meets<br />
          the ancient beauty of desert rose.
        </p>

        <div ref={actionsRef} className="hero-actions" style={{ opacity: 0 }}>
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
        <div className="scroll-flower">✿</div>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="hero-stats">
        {[
          { num: '500+', label: 'Rare Varieties' },
          { num: '12K+', label: 'Happy Growers' },
          { num: '5+', label: 'Years Cultivating' },
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