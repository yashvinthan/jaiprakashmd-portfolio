import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsapConfig'

export default function useScrollReveal(
  selector = '.floating-section',
  { offset = 80, stagger = 0.08 } = {}
) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((section, index) => {
        gsap.fromTo(
          section,
          { y: offset, opacity: 0, rotateX: -8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            ease: 'power3.out',
            duration: 1,
            delay: index * stagger * 0.4,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [offset, selector, stagger])
}
