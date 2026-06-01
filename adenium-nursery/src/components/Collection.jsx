import { useState, useEffect, useRef } from 'react'
import './Collection.css'

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
  },
]

const tagColors = {
  pink: '#D81B60',
  gold: '#D4AF37',
  cobalt: '#1A457B',
  pine: '#5E7153',
  terracotta: '#C85A32',
}

function PlantCard({ plant, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) ref.current.classList.add('in-view')
          }, index * 100)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className="plant-card reveal-card">
      <div className="card-visual" style={{ background: plant.bg }}>
        <div className="card-bloom">
          {plant.petals.map((color, i) => (
            <div
              key={i}
              className={`bloom-petal bp${i + 1}`}
              style={{ background: `radial-gradient(ellipse at 40% 30%, ${color}, ${color}88)` }}
            />
          ))}
          <div className="bloom-center" />
        </div>
        <div className="card-tag" style={{ background: tagColors[plant.tagColor] }}>
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
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Collection() {
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="collection" className="collection">
      <div className="collection-header reveal-section" ref={titleRef}>
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