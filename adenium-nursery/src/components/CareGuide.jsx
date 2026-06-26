import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CareGuide.css'
import LuxuryDecor from './LuxuryDecor'
import careBannerImg from '../assets/care_banner.png'

gsap.registerPlugin(ScrollTrigger)

const careSteps = [
  {
    title: 'Sunlight',
    icon: '☀️',
    desc: 'Adeniums are desert natives. They require at least 6 hours of bright, direct sunlight daily to thrive and produce vibrant blooms.',
    tip: 'South-facing windows or open terraces work best. Rotate the pot weekly for even growth.',
  },
  {
    title: 'Watering',
    icon: '💧',
    desc: 'The golden rule is "less is more." Allow the soil to dry out completely between waterings. Overwatering is the leading cause of root rot.',
    tip: 'Stick your finger 2 inches into the soil \u2014 if it\'s dry, water thoroughly. If damp, wait another day.',
  },
  {
    title: 'Potting Mix',
    icon: '🪴',
    desc: 'Use a fast-draining, cactus-like mix. A blend of cinder, perlite, coarse sand, and a small amount of compost works best to prevent waterlogging.',
    tip: 'Ideal ratio: 40% cinder, 30% perlite, 20% coarse sand, 10% compost. Never use garden soil alone.',
  },
  {
    title: 'Fertilizer',
    icon: '🌱',
    desc: 'During active growth in spring and summer, use a phosphorus-heavy liquid fertilizer once a month to encourage massive blooms and a thick caudex.',
    tip: 'Look for NPK ratios like 10-30-20. Avoid fertilizing during winter dormancy entirely.',
  },
  {
    title: 'Seasons',
    icon: '🍂',
    desc: 'Growth slows in winter. Reduce watering significantly during dormancy and protect the plant from frost or temperatures below 10°C (50°F).',
    tip: 'Leaf drop in winter is normal \u2014 don\'t panic! Resume regular watering when new buds appear in spring.',
  },
  {
    title: 'Pruning',
    icon: '✂️',
    desc: 'Prune branches in early spring before new growth starts. This encourages a thicker caudex and a bushier, more visually appealing canopy.',
    tip: 'Use sharp, sterilized tools. Let the cut dry for 2-3 days before watering to prevent rot.',
  },
  {
    title: 'Pest Control',
    icon: '🐛',
    desc: 'Inspect regularly for aphids and mealybugs. Treat early infestations gently with neem oil or insecticidal soap to protect the foliage.',
    tip: 'Mix 5ml neem oil + 1 litre water + a drop of dish soap. Spray in the evening to avoid leaf burn.',
  },
]

export default function CareGuide() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.care-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.care-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo('.care-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.care-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="care" className="care-guide" ref={sectionRef} aria-label="Adenium Care Guide">
      <LuxuryDecor type="flower" variant={1} left="-10%" top="5%" opacity={0.1} scale={1.5} rotation={-15} parallaxSpeed={0.02} />
      <LuxuryDecor type="petal" variant={2} right="10%" bottom="10%" opacity={0.12} scale={0.8} rotation={30} parallaxSpeed={0.03} />

      <div className="care-inner">
        <div className="care-banner">
          <img src={careBannerImg} alt="Adenium desert rose in warm sunlight" className="care-banner-img" loading="lazy" decoding="async" />
          <div className="care-banner-overlay"></div>
        </div>

        <div className="care-header" style={{ opacity: 0 }}>
          <div className="section-eyebrow">The Art of Cultivation</div>
          <h2 className="care-headline">
            Desert Rose <br />
            <em>Care Guide</em>
          </h2>
          <p className="care-subtitle">
            Master the essentials of Adenium care to ensure your desert rose develops a magnificent caudex and blooms beautifully year-round.
          </p>
        </div>

        <div className="care-grid">
          {careSteps.map((step, i) => (
            <div key={i} className="care-card" style={{ opacity: 0 }}>
              <div className="care-card-icon">{step.icon}</div>
              <h3 className="care-card-title">{step.title}</h3>
              <p className="care-card-desc">{step.desc}</p>
              <div className="care-card-tip">
                <span className="tip-label">💡 Pro Tip</span>
                <p className="tip-text">{step.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
