import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BonsaiTechniques.css'
import LuxuryDecor from './LuxuryDecor'
import bonsaiDiskImg from '../assets/bonsai_disk.png'
import bonsaiLiftingImg from '../assets/bonsai_lifting.png'
import bonsaiPruningImg from '../assets/bonsai_pruning.png'
import bonsaiShallowImg from '../assets/bonsai_shallow.png'

gsap.registerPlugin(ScrollTrigger)

const techniques = [
  {
    num: '01',
    title: 'The Flat Disk Technique',
    desc: 'When repotting a young seedling, the main taproot is completely severed. A flat plastic or ceramic disk is placed directly beneath the cut to force new roots to grow horizontally, creating a spectacular, wide root base (Nebari).',
    image: bonsaiDiskImg,
    timeline: 'Year 1',
    align: 'left',
  },
  {
    num: '02',
    title: 'Lifting the Caudex',
    desc: 'Every 1 to 2 years, the plant is carefully repotted and lifted 1 to 2 inches higher out of the soil. This exposes the thick, twisted roots that were growing underground, gradually building that ancient, majestic look.',
    image: bonsaiLiftingImg,
    timeline: 'Year 1–3',
    align: 'right',
  },
  {
    num: '03',
    title: 'Hard Pruning (Ramification)',
    desc: 'To prevent long, leggy branches, aggressive pruning is required. Cutting a branch forces the plant to sprout 2 or 3 new branches from the cut site. Done repeatedly, this creates a dense, umbrella-like canopy of leaves and blooms.',
    image: bonsaiPruningImg,
    timeline: 'Ongoing',
    align: 'left',
  },
  {
    num: '04',
    title: 'Shallow Potting',
    desc: 'Once the horizontal root system is established, the plant is moved into a shallow ceramic bonsai pot. This restricts downward growth, pushing all the plant\'s energy into thickening the caudex and producing brilliant blooms.',
    image: bonsaiShallowImg,
    timeline: 'Year 3+',
    align: 'right',
  },
]

export default function BonsaiTechniques() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bonsai-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bonsai-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      techniques.forEach((tech, index) => {
        gsap.fromTo(`.bonsai-item-${index}`,
          { opacity: 0, x: tech.align === 'left' ? -60 : 60 },
          {
            opacity: 1, x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.bonsai-item-${index}`,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="bonsai" className="bonsai-techniques" ref={sectionRef} aria-label="Bonsai Development Techniques">
      <LuxuryDecor type="petal" variant={4} left="5%" top="20%" opacity={0.15} scale={1.2} rotation={45} parallaxSpeed={0.04} />
      <LuxuryDecor type="flower" variant={3} right="-5%" bottom="15%" opacity={0.12} scale={1.5} rotation={-15} parallaxSpeed={0.02} />

      <div className="bonsai-inner">
        <div className="bonsai-header" style={{ opacity: 0 }}>
          <div className="section-eyebrow">The Master's Craft</div>
          <h2 className="bonsai-headline">
            Developing a <br />
            <em>Bonsai Masterpiece</em>
          </h2>
          <p className="bonsai-subtitle">
            Because of their naturally swollen caudex and thick branches, Adeniums (especially the Arabicum species) are practically made for bonsai. Here is how experts transform them over the years.
          </p>
        </div>

        <div className="bonsai-timeline">
          <div className="timeline-line"></div>
          {techniques.map((tech, index) => (
            <div key={tech.num} className={`bonsai-item bonsai-item-${index} align-${tech.align}`}>
              <div className="bonsai-item-content">
                <div className="bonsai-item-image">
                  <img src={tech.image} alt={tech.title} loading="lazy" decoding="async" />
                </div>
                <div className="bonsai-item-text">
                  <div className="bonsai-item-top">
                    <h3 className="bonsai-item-title">
                      <span className="bonsai-item-num">{tech.num}.</span> {tech.title}
                    </h3>
                    <span className="bonsai-timeline-badge">{tech.timeline}</span>
                  </div>
                  <p className="bonsai-item-desc">{tech.desc}</p>
                </div>
              </div>
              <div className="bonsai-item-node"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
