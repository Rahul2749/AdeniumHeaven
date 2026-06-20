import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Collection.css'

import rubyRedImg from '../assets/ruby_red.png'
import desertSnowImg from '../assets/desert_snow.png'
import thaiMultiImg from '../assets/realistic_thai_multi.png'
import giantCaudexImg from '../assets/giant_caudex_bonsai.png'
import cobaltSetImg from '../assets/cobalt_set.png'
import bonsaiImg from '../assets/bonsai.png'
import goldenSunsetImg from '../assets/golden_sunset.png'
import LuxuryDecor from './LuxuryDecor'

const plants = [
  {
    id: 1,
    name: 'Ruby Red Obseum',
    species: 'Adenium obesum',
    price: '₹2,400',
    tag: 'Bestseller',
    tagColor: 'pink',
    desc: 'Deep crimson double blooms with a bonsai-shaped caudex. Perfect centrepiece.',
    petals: ['#D81B60', '#E91E8C', '#C2185B'],
    bg: '#1A2010',
    accent: '#D81B60',
    image: rubyRedImg,
  },
  {
    id: 2,
    name: 'Desert Snow',
    species: 'Adenium socotranum',
    price: '₹3,800',
    tag: 'Rare',
    tagColor: 'gold',
    desc: 'Pure white blooms with delicate pink veining. Extremely rare Socotra hybrid.',
    petals: ['#F8F0F5', '#FBECF5', '#F5E6F0'],
    bg: '#1A1A2A',
    accent: '#D4AF37',
    image: desertSnowImg,
  },
  {
    id: 3,
    name: 'Thai Grafted Multi',
    species: 'Adenium hybrid',
    price: '₹5,200',
    tag: 'Premium',
    tagColor: 'cobalt',
    desc: 'Multi-colour blooms on a single trunk. Traditional Thai grafting technique.',
    petals: ['#FF6B35', '#D81B60', '#FFD54F'],
    bg: '#201505',
    accent: '#C85A32',
    image: thaiMultiImg,
  },
  {
    id: 4,
    name: 'Cobalt Ceramic Set',
    species: 'Adenium + Vessel',
    price: '₹4,600',
    tag: 'Limited',
    tagColor: 'pine',
    desc: 'Our signature cobalt-glazed ceramic vessel paired with a curated specimen.',
    petals: ['#95B4A3', '#D81B60', '#5E7153'],
    bg: '#0A1520',
    accent: '#1A457B',
    image: cobaltSetImg,
  },
  {
    id: 5,
    name: 'Miniature Bonsai',
    species: 'Adenium arabicum',
    price: '₹1,800',
    tag: 'Starter',
    tagColor: 'terracotta',
    desc: 'Compact arabicum variety. Ideal for apartments and office spaces.',
    petals: ['#FF8A65', '#D81B60', '#FFCC02'],
    bg: '#1A0A0A',
    accent: '#C85A32',
    image: bonsaiImg,
  },
  {
    id: 6,
    name: 'Golden Sunset',
    species: 'Adenium hybrid',
    price: '₹3,200',
    tag: 'Seasonal',
    tagColor: 'gold',
    desc: 'Warm amber-orange blooms that deepen to red at centre. Breathtaking.',
    petals: ['#FF8C00', '#FF6B35', '#D4AF37'],
    bg: '#201000',
    accent: '#D4AF37',
    image: goldenSunsetImg,
  },
  {
    id: 7,
    name: 'Grand Arabicum Specimen',
    species: 'Adenium arabicum',
    price: '₹8,500',
    tag: 'Masterpiece',
    tagColor: 'pine',
    desc: 'An awe-inspiring specimen with a massive, bulbous caudex and numerous branching arms. Truly a collector\'s dream.',
    petals: ['#D81B60', '#A1A89D', '#8C9A8E'],
    bg: '#121A15',
    accent: '#5E7153',
    image: giantCaudexImg,
  },
]

const tagColors = {
  pink: '#D81B60',
  gold: '#D4AF37',
  cobalt: '#1A457B',
  pine: '#5E7153',
  terracotta: '#C85A32',
}

gsap.registerPlugin(ScrollTrigger)

function PlantCard({ plant, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index])

  return (
    <article ref={ref} className="plant-card" style={{ opacity: 0 }} aria-label={`${plant.name} — ${plant.price}`}>
      <div className="card-visual" style={{ background: plant.bg, position: 'relative', overflow: 'hidden' }}>
        {/* Subtle botanical watermark inside card */}
        <LuxuryDecor type="petal" variant={(index % 4) + 1} left="5%" top="5%" opacity={0.16} scale={1.2} rotation={25 * index} blur={0} zIndex={1} parallaxSpeed={0.01} />
        <img src={plant.image} alt={`${plant.name} — ${plant.species} desert rose plant, ${plant.desc}`} className="plant-image" loading="lazy" decoding="async" style={{ position: 'relative', zIndex: 2 }} />
        <div className="card-tag" style={{ background: tagColors[plant.tagColor], position: 'relative', zIndex: 3 }}>
          {plant.tag}
        </div>
      </div>

      <div className="card-info">
        <div className="card-species">{plant.species}</div>
        <div className="card-name">{plant.name}</div>
        <div className="card-desc">{plant.desc}</div>

        <div className="card-footer">
          <div className="card-price">{plant.price}</div>
          <button
            className="card-btn"
            style={{ '--accent': plant.accent }}
            aria-label={`Add ${plant.name} to cart for ${plant.price}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Collection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.collection-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.collection-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="collection" className="collection" ref={sectionRef} aria-label="Adenium plant collection" style={{ position: 'relative' }}>
      {/* Decorative elements are now strictly integrated into the product cards */}

      <div className="collection-header" style={{ opacity: 0 }}>
        <div className="section-eyebrow">The Collection</div>
        <h2 className="collection-headline">
          Every Plant,<br />
          <em>A Masterpiece</em>
        </h2>
        <p className="collection-sub">
          Curated specimens paired with hand-thrown ceramic vessels. Each one unique, each one alive.
        </p>
      </div>

      <div className="collection-grid">
        {plants.map((plant, i) => (
          <PlantCard key={plant.id} plant={plant} index={i} />
        ))}
      </div>

      <div className="collection-cta">
        <button className="view-all-btn">
          View Full Catalogue
          <span className="arrow-right">→</span>
        </button>
      </div>
    </section>
  )
}