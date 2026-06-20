import { useEffect, useRef } from 'react'
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
  blur = 0,
  zIndex,
  parallaxSpeed = 0.03,
  className = ''
}) {
  const elementRef = useRef(null)
  
  // High-performance rAF parallax scroll
  useEffect(() => {
    let animationFrameId
    const el = elementRef.current
    if (!el) return

    const updateParallax = () => {
      const scrollY = window.scrollY
      // The user requested: max 15px movement. We can clamp it if needed, 
      // but standard parallax is fine as long as the multiplier is extremely small (0.01 - 0.03).
      const yMove = scrollY * parallaxSpeed
      
      // We only animate the translateY via JS, and we let CSS handle the rotation and scale via the luxuryDrift animation if we combine them.
      // Actually, since CSS keyframes override inline transforms if they use `transform`, we should use CSS Custom Properties for the scroll offset.
      el.style.setProperty('--scroll-y', `${yMove}px`)
      
      animationFrameId = requestAnimationFrame(updateParallax)
    }

    updateParallax()

    return () => cancelAnimationFrame(animationFrameId)
  }, [parallaxSpeed])

  const assetList = assets[type] || assets.petal
  // ensure variant is within bounds (1-indexed)
  const imageSrc = assetList[(variant - 1) % assetList.length]

  const style = {
    top, left, right, bottom,
    zIndex,
    '--base-opacity': opacity,
    '--base-scale': scale,
    '--base-rotation': `${rotation}deg`,
    filter: blur > 0 ? `blur(${blur}px)` : undefined
  }

  return (
    <div 
      ref={elementRef}
      className={`luxury-decor ${className}`}
      style={style}
      aria-hidden="true"
    >
      <img src={imageSrc} alt="" className="luxury-decor-img" loading="lazy" />
    </div>
  )
}
