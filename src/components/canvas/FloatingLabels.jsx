import { Html } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsapConfig'

const labelData = [
  { text: 'Genome Story', position: [-1.2, 1.2, 0], trigger: '#hero' },
  { text: 'About Lab', position: [1.4, 0.6, 0], trigger: '#about' },
  { text: 'Skill Markers', position: [-1.4, -0.4, 0], trigger: '#skills' },
  { text: 'Projects Dock', position: [1.1, -1.2, -0.5], trigger: '#projects' },
  { text: 'Neon Uplink', position: [-1, -2, 0.2], trigger: '#contact' },
]

export default function FloatingLabels() {
  const labelRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      labelRefs.current.forEach((el, idx) => {
        if (!el) return
        gsap.set(el, { opacity: 0, y: 12 })
        gsap.timeline({
          scrollTrigger: {
            trigger: labelData[idx].trigger,
            start: 'top center+=150',
            end: 'bottom center',
            scrub: true,
          },
        })
          .to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
          .to(el, { opacity: 0.15, duration: 0.6, ease: 'power1.in' }, '+=0.4')
      })
    })

    return () => ctx.revert()
  }, [])

  return labelData.map((label, index) => (
    <Html
      key={label.text}
      position={label.position}
      center
      distanceFactor={8}
      transform
      sprite
      zIndexRange={[0, 0]}
    >
      <div
        className="floating-label"
        ref={(el) => {
          labelRefs.current[index] = el
        }}
      >
        {label.text}
      </div>
    </Html>
  ))
}
