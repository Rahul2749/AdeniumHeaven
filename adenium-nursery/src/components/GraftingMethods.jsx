import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './GraftingMethods.css'
import LuxuryDecor from './LuxuryDecor'
import graftFlatImg from '../assets/graft_flat.png'
import graftVImg from '../assets/graft_v.png'
import graftHoleImg from '../assets/graft_hole.png'

gsap.registerPlugin(ScrollTrigger)

const graftingMethods = [
  {
    title: 'Flat Grafting',
    subtitle: '(Table Graft)',
    image: graftFlatImg,
    desc: 'The most popular and successful method for Adeniums. It involves making a clean, flat cut on both the rootstock and scion, then securing them tightly together. Over time, it provides a completely seamless and invisible union.',
    difficulty: 'Beginner',
    successRate: '90%',
    bestSeason: 'Spring–Summer',
  },
  {
    title: 'V-Grafting',
    subtitle: '(Cleft Graft)',
    image: graftVImg,
    desc: 'This technique involves cutting a deep "V" shape into the rootstock and a matching wedge on the scion. It is highly recommended when the scion is slightly thinner than the rootstock, providing an incredibly strong mechanical bond.',
    difficulty: 'Intermediate',
    successRate: '85%',
    bestSeason: 'Late Spring',
  },
  {
    title: 'Hole Grafting',
    subtitle: '(Core Graft)',
    image: graftHoleImg,
    desc: 'An advanced precision technique where a small hole is carved directly into the rootstock and a pointed scion is inserted. This method creates a highly secure fit and beautiful aesthetic healing over the years.',
    difficulty: 'Advanced',
    successRate: '75%',
    bestSeason: 'Early Summer',
  },
]

const difficultyColors = {
  'Beginner': '#5E7153',
  'Intermediate': '#D4AF37',
  'Advanced': '#D81B60',
}

export default function GraftingMethods() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.grafting-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.grafting-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo('.grafting-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.grafting-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="grafting" className="grafting-methods" ref={sectionRef} aria-label="Grafting Methods">
      <LuxuryDecor type="petal" variant={1} left="-5%" top="40%" opacity={0.15} scale={1.2} rotation={20} parallaxSpeed={0.03} />
      <LuxuryDecor type="flower" variant={2} right="-10%" bottom="-10%" opacity={0.1} scale={1.8} rotation={-45} parallaxSpeed={0.01} />

      <div className="grafting-inner">
        <div className="grafting-header" style={{ opacity: 0 }}>
          <div className="section-eyebrow">Expert Techniques</div>
          <h2 className="grafting-headline">
            The 3 Methods of <br />
            <em>Grafting</em>
          </h2>
          <p className="grafting-subtitle">
            Grafting allows us to combine the robust, beautiful caudex of a hardy rootstock with the spectacular, multi-petaled blooms of a rare hybrid. Here are the three main techniques we use at our nursery.
          </p>
        </div>

        <div className="grafting-grid">
          {graftingMethods.map((method, i) => (
            <div key={i} className="grafting-card" style={{ opacity: 0 }}>
              <div className="grafting-card-image">
                <img src={method.image} alt={`${method.title} technique illustration`} loading="lazy" decoding="async" />
              </div>
              <div className="grafting-card-content">
                <h3 className="grafting-card-title">{method.title}</h3>
                <span className="grafting-card-subtitle">{method.subtitle}</span>
                <div className="grafting-card-divider"></div>
                <p className="grafting-card-desc">{method.desc}</p>

                <div className="grafting-meta">
                  <div className="meta-badge">
                    <span className="meta-label">Difficulty</span>
                    <span className="meta-value" style={{ color: difficultyColors[method.difficulty] }}>{method.difficulty}</span>
                  </div>
                  <div className="meta-badge">
                    <span className="meta-label">Success Rate</span>
                    <span className="meta-value">{method.successRate}</span>
                  </div>
                  <div className="meta-badge">
                    <span className="meta-label">Best Season</span>
                    <span className="meta-value">{method.bestSeason}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
