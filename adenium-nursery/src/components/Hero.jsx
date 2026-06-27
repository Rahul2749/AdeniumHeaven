import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'
import LuxuryDecor from './LuxuryDecor'
import hero1 from '../assets/light_pink_multipetal_hero.png'
import hero2 from '../assets/ruby_red.png'
import hero3 from '../assets/desert_snow.png'
import hero4 from '../assets/golden_sunset.png'

const heroImages = [hero1, hero2, hero3, hero4]
// Dark moody ambient colors corresponding to each flower
const moodColors = ['#1a0a10', '#1c0505', '#101311', '#1c1105']

const marqueeItems = [
  "Shipped Pan India",
  "Expert Care Included",
  "Since 2020",
  "Desert Rose Adenium",
  "Rare Thai Hybrids",
  "Ceramic Pot Collections"
]

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const [currentIdx, setCurrentIdx] = useState(0)

  // Mouse tracking light reflection removed for performance.

  // Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length)
    }, 8000) // 8s transition as requested
    return () => clearInterval(timer)
  }, [])

  // Update CSS mood color dynamically
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.setProperty('--mood-color', moodColors[currentIdx])
    }
  }, [currentIdx])

  // GSAP Opening Sequence, Focus Breathing & Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Opening Cinematic Sequence
      const tl = gsap.timeline()

      // Initial state is pitch black, then spotlight expands
      tl.to('.hero-spotlight', {
        background: 'radial-gradient(circle at center, transparent 40%, #000 120%)',
        duration: 3,
        ease: 'power2.inOut'
      })
      .to('.hero-spotlight', {
        opacity: 0, // Fade out spotlight overlay completely after reveal
        duration: 2,
        ease: 'power2.inOut'
      }, "-=1.5")
      
      // Stagger in the UI elements only after bloom finishes
      .to('.hero-badge', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=1")
      .to('.line', { 
        opacity: 1, 
        y: 0, 
        letterSpacing: '-0.03em', // Contraction animation
        duration: 1.4, 
        stagger: 0.2, 
        ease: 'power3.out' 
      }, "-=0.8")
      .to('.hero-sub', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.8")
      .to('.hero-actions', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.6")
      .to('.stat-card', { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: 'power3.out' 
      }, "-=0.8")


      // Continuous Focus Breathing Animation removed for performance (CSS Masks are highly expensive)

      // 3. Advanced Scroll Storytelling
      
      // Deep zoom into the flower on scroll
      gsap.to('.hero-image-wrap', {
        scale: 3, // Massive zoom
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      })
      
      // Darken overlay
      gsap.to('.hero-overlay', {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })

      // Particle Dissolve effect (opacity increases as you scroll)
      gsap.to('.hero-particles', {
        opacity: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '30% top',
          end: 'bottom top',
          scrub: 1.5,
        }
      })

      // Content fades upward into the "portal"
      gsap.to('.hero-content', {
        y: -150,
        opacity: 0,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef} aria-label="Hero — Luxury Botanical Fashion">
      
      {/* Background & Effects */}
      <div className="hero-bg">
        <div className="hero-image-wrap">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIdx}
              className="hero-slide"
              style={{ backgroundImage: `url(${heroImages[currentIdx]})` }}
              initial={{ 
                opacity: 0, 
                scale: 1.05 
              }}
              animate={{ 
                opacity: 1, 
                scale: [1.05, 1.0, 1.03, 1.0], // Organic breathing motion
                rotateZ: [0, 0.5, -0.5, 0] // Subtle twist
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.1,
                transition: { duration: 1.5, ease: 'easeInOut' }
              }}
              transition={{
                opacity: { duration: 1.5, ease: 'easeInOut' },
                scale: { duration: 25, ease: 'easeInOut', times: [0, 0.3, 0.7, 1], repeat: Infinity },
                rotateZ: { duration: 25, ease: 'easeInOut', repeat: Infinity }
              }}
            />
          </AnimatePresence>
        </div>
        
        {/* Particle Dissolve Layer (Scroll) */}
        <div className="hero-particles" />
        {/* Cinematic Spotlight (Opening sequence) */}
        <div className="hero-spotlight" />
        {/* Static CSS Effects */}
        <div className="hero-bloom" />
        <div className="hero-vignette" />
        <div className="hero-overlay" />
        <div className="hero-noise" />

        {/* Subtle Edge Petals */}
        <LuxuryDecor type="petal" variant={1} top="15%" right="5%" opacity={0.15} scale={0.8} rotation={15} parallaxSpeed={0.05} zIndex={3} blur={0} />
        <LuxuryDecor type="petal" variant={2} bottom="20%" left="5%" opacity={0.15} scale={0.7} rotation={-25} parallaxSpeed={0.04} zIndex={3} blur={0} />
      </div>

      {/* Typography & Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          EST. 2020 • TUMSAR, INDIA
          <span className="badge-dot" />
        </div>

        <h1 className="hero-headline">
          <span className="line-wrap"><span className="line">Living Art</span></span>
          <span className="line-wrap italic"><span className="line">From Desert</span></span>
          <span className="line-wrap"><span className="line">to Doorstep</span></span>
        </h1>

        <p className="hero-sub">
          Buy premium hand-cultivated Adenium plants online. Where ceramic artistry meets the ancient beauty of the Desert Rose. Discover rare Thai grafted hybrids and exquisite collections.
        </p>

        <div className="hero-actions">
          <button
            className="btn-luxury"
            onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Collection
          </button>
          <button
            className="btn-ghost-luxury"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </button>
        </div>

        <aside className="hero-stats" aria-label="Nursery statistics">
          {[
            { num: '500+', label: 'Rare Varieties' },
            { num: '12K+', label: 'Happy Growers' },
            { num: '5+', label: 'Years Cultivating' },
          ].map(stat => (
            <div key={stat.label} className="stat-card">
              <span className="stat-num">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </aside>
      </div>

      {/* Marquee Bar */}
      <div className="hero-marquee">
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="marquee-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}