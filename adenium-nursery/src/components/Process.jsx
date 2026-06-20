import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'
import LuxuryDecor from './LuxuryDecor'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Browse & Select',
    desc: 'Explore our curated collection of Adenium varieties, each with detailed care profiles and origin stories.',
    icon: '◈',
    color: '#1A457B',
  },
  {
    num: '02',
    title: 'Ceramic Pairing',
    desc: 'Choose from our hand-thrown ceramic vessels. Our artisans match each plant to its ideal pot aesthetically and functionally.',
    icon: '◉',
    color: '#5E7153',
  },
  {
    num: '03',
    title: 'Expert Preparation',
    desc: 'Your plant is inspected, pruned if needed, and potted using our custom well-draining adenium mix.',
    icon: '◐',
    color: '#C85A32',
  },
  {
    num: '04',
    title: 'Secure Shipping',
    desc: 'Custom packaging protects blooms and caudex. Most deliveries across India arrive within 4–7 business days.',
    icon: '◎',
    color: '#D81B60',
  },
  {
    num: '05',
    title: 'Lifetime Support',
    desc: 'A care guide tailored to your specific specimen arrives with every plant. Our team is available via WhatsApp always.',
    icon: '✦',
    color: '#D4AF37',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.process-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Steps stagger animation
      gsap.fromTo('.process-step',
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-steps',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Quote visual
      gsap.fromTo('.process-visual',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-visual',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="process" ref={sectionRef} aria-label="How ordering works" style={{ position: 'relative' }}>
      {/* Subtle luxury decor */}
      <LuxuryDecor type="flower" variant={3} right="-5%" top="10%" opacity={0.02} scale={1.2} rotation={15} blur={4} parallaxSpeed={0.01} className="desktop-only" />
      <LuxuryDecor type="petal" variant={4} left="5%" bottom="15%" opacity={0.03} scale={0.6} rotation={-20} parallaxSpeed={0.03} className="tablet-hide" />

      <div className="process-inner">
        <div className="process-header" style={{ opacity: 0 }}>
          <div className="section-eyebrow">How It Works</div>
          <h2 className="process-headline">
            From Our Nursery<br />
            <em>to Your Garden</em>
          </h2>
        </div>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.num} className="process-step" style={{ opacity: 0 }}>
              <div className="step-connector">
                <div className="step-line" style={{ background: `linear-gradient(to bottom, ${step.color}, transparent)` }} />
              </div>
              <div className="step-num" style={{ color: step.color }}>{step.num}</div>
              <div className="step-icon" style={{ color: step.color }}>{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
              <div className="step-tag" style={{ borderColor: `${step.color}40`, color: step.color }}>
                Step {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="process-visual" style={{ opacity: 0 }}>
        <div className="pv-content">
          <div className="pv-quote">
            "We pour the same devotion into every shipment as we do into cultivating the plants themselves."
          </div>
          <div className="pv-author">
            — Adenium Heaven, Tumsar
          </div>
          <div className="pv-decoration">
            <div className="dec-circle c1" />
            <div className="dec-circle c2" />
            <div className="dec-circle c3" />
            <div className="dec-petals">
              {['#D81B60','#E91E8C','#C2185B','#D4AF37','#FF8A65'].map((c,i) => (
                <div key={i} className="dec-petal" style={{
                  background: c,
                  '--r': `${i * 72}deg`,
                  animationDelay: `${i * 0.3}s`
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}