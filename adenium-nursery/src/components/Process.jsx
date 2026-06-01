import { useEffect, useRef } from 'react'
import './Process.css'

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
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = containerRef.current?.querySelectorAll('.process-step')
    cards?.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.12}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="process">
      <div className="process-inner">
        <div className="process-header">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="process-headline">
            From Our Nursery<br />
            <em>to Your Garden</em>
          </h2>
        </div>

        <div ref={containerRef} className="process-steps">
          {steps.map((step, i) => (
            <div key={step.num} className="process-step">
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

      <div className="process-visual">
        <div className="pv-content">
          <div className="pv-quote">
            "We pour the same devotion into every shipment as we do into cultivating the plants themselves."
          </div>
          <div className="pv-author">
            — Adenium Atelier, Nagpur
          </div>
          <div className="pv-decoration">
            <div className="dec-circle c1" />
            <div className="dec-circle c2" />
            <div className="dec-circle c3" />
            <div className="dec-petals">
              {['#D81B60','#E91E8C','#C2185B','#D4AF37','#FF8A65'].map((c,i) => (
                <div key={i} className="dec-petal" style={{
                  background: c,
                  transform: `rotate(${i * 72}deg) translateY(-40px)`,
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