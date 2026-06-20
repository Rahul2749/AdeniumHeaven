import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ 
  children, 
  type = 'text', // 'text', 'button', 'card', 'image'
  delay = 0,
  stagger = 0,
  className = '' 
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let animation;
    
    // Select children for staggering if requested, otherwise animate container
    const targets = stagger > 0 ? el.children : el

    if (type === 'text' || type === 'heading' || type === 'paragraph') {
      gsap.set(targets, { opacity: 0, y: 15 })
      animation = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
    } else if (type === 'button') {
      gsap.set(targets, { opacity: 0, scale: 0.98 })
      animation = gsap.to(targets, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
    } else if (type === 'card') {
      gsap.set(targets, { opacity: 0, y: 15 })
      animation = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        stagger: 0.1, // Requested 0.1s delay between cards
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
    } else if (type === 'image') {
      gsap.set(targets, { opacity: 0 })
      animation = gsap.to(targets, {
        opacity: 1,
        duration: 1.2,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      })
      
      // Slight parallax on image container
      gsap.to(targets, {
        y: -15, // slight parallax upwards
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    return () => {
      if (animation) animation.kill()
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [type, delay, stagger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
