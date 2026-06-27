import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './LuxuryDecor.css'

import petal1 from '../assets/processed/petal_1.png'
import petal2 from '../assets/processed/petal_2.png'
import petal3 from '../assets/processed/petal_3.png'
import petal4 from '../assets/processed/petal_4.png'

import flower1 from '../assets/processed/flower_1.png'
import flower2 from '../assets/processed/flower_2.png'
import flower3 from '../assets/processed/flower_3.png'

import floralDust from '../assets/processed/floral_dust.png'

const assets = {
  petal: [petal1, petal2, petal3, petal4],
  flower: [flower1, flower2, flower3],
  dust: [floralDust]
}

export default function LuxuryDecor({ 
  type = 'petal', 
  variant = 1, 
  top, left, right, bottom, 
  opacity = 0.05, 
  scale = 1, 
  rotation = 0,
  zIndex,
  parallaxSpeed = 0.03,
  className = ''
}) {
  const elementRef = useRef(null)
  
  // High-performance parallax perfectly synced with Lenis via GSAP ticker
  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const onTick = () => {
      // Lenis overrides window scrolling, but GSAP ticker perfectly tracks the frame
      const yMove = window.scrollY * parallaxSpeed
      el.style.setProperty('--scroll-y', `${yMove}px`)
    }

    gsap.ticker.add(onTick)
    onTick() // Initial set

    return () => gsap.ticker.remove(onTick)
  }, [parallaxSpeed])

  const assetList = assets[type] || assets.petal
  // ensure variant is within bounds (1-indexed)
  const imageSrc = assetList[(variant - 1) % assetList.length]

  const style = {
    top, left, right, bottom,
    zIndex,
    '--base-opacity': opacity,
    '--base-scale': scale,
    '--base-rotation': `${rotation}deg`
  }

  return (
    <div 
      ref={elementRef}
      className={`luxury-decor ${className}`}
      style={style}
      aria-hidden="true"
    >
      <img src={imageSrc} alt="Decorative adenium plant element" className="luxury-decor-img" loading="lazy" />
    </div>
  )
}
