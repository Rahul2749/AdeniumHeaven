import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AdeniumTypes.css'
import LuxuryDecor from './LuxuryDecor'
import obesumImg from '../assets/obesum_type.png'
import arabicumImg from '../assets/arabicum_type.png'

gsap.registerPlugin(ScrollTrigger)

const typesData = [
  {
    title: 'Adenium',
    titleEm: 'Obesum',
    image: obesumImg,
    desc: 'Often referred to as the quintessential "Desert Rose," the Obesum is celebrated globally for its spectacular floral displays. It produces an endless variety of vibrant, multi-layered flowers in shades of pink, red, white, and even bi-colour combinations.',
    features: [
      { icon: '✿', text: 'Famous for huge, colorful multi-petal blooms' },
      { icon: '⇡', text: 'Grows taller (up to 3 ft), branches higher up' },
      { icon: '✦', text: 'The most common rootstock for Thai hybrids' },
    ],
    specs: [
      { label: 'Typical Height', value: '1–3 ft' },
      { label: 'Caudex Shape', value: 'Classic bottle' },
      { label: 'Bloom Season', value: 'Spring–Autumn' },
      { label: 'Best For', value: 'Flower lovers' },
    ],
  },
  {
    title: 'Adenium',
    titleEm: 'Arabicum',
    image: arabicumImg,
    desc: 'The Arabicum is the undisputed king of form. It is cultivated primarily for its massive, squat, bonsai-like caudex and wild, structural branching. While its flowers are simpler, its sculptural beauty is unmatched in the plant world.',
    features: [
      { icon: '⛰', text: 'Massive, wide, low squat caudex' },
      { icon: '🌿', text: 'Larger, slightly fuzzy, leathery leaves' },
      { icon: '🌸', text: 'Elegant single-petal pink flowers' },
    ],
    specs: [
      { label: 'Typical Height', value: '0.5–1.5 ft' },
      { label: 'Caudex Shape', value: 'Wide & squat' },
      { label: 'Bloom Season', value: 'Summer' },
      { label: 'Best For', value: 'Bonsai collectors' },
    ],
  },
]

export default function AdeniumTypes() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.types-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.types-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo('.type-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.types-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="adenium-types" className="adenium-types" ref={sectionRef} aria-label="Types of Adenium">
      <LuxuryDecor type="flower" variant={1} right="-5%" top="10%" opacity={0.08} scale={1.5} rotation={15} parallaxSpeed={0.02} />
      <LuxuryDecor type="petal" variant={2} left="5%" bottom="10%" opacity={0.12} scale={1.2} rotation={-30} parallaxSpeed={0.03} />

      <div className="types-inner">
        <div className="types-header" style={{ opacity: 0 }}>
          <div className="section-eyebrow">Discover the Species</div>
          <h2 className="types-headline">
            Two Masterpieces of <br />
            <em>Nature</em>
          </h2>
          <p className="types-subtitle">
            While there are many species in the Adenium genus, two stand out as the absolute crown jewels of cultivation. Understanding their differences will help you choose the perfect centerpiece for your collection.
          </p>
        </div>

        <div className="types-grid">
          {typesData.map((type, i) => (
            <div key={i} className="type-card" style={{ opacity: 0 }}>
              <div className="type-card-visual">
                <img src={type.image} alt={`${type.title} ${type.titleEm}`} className="type-card-img" loading="lazy" decoding="async" />
              </div>
              <div className="type-card-content">
                <h3 className="type-title">{type.title} <em>{type.titleEm}</em></h3>
                <div className="type-divider"></div>
                <p className="type-desc">{type.desc}</p>

                <ul className="type-features">
                  {type.features.map((f, j) => (
                    <li key={j}><span>{f.icon}</span> {f.text}</li>
                  ))}
                </ul>

                <div className="type-specs">
                  {type.specs.map((spec, k) => (
                    <div key={k} className="type-spec">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
