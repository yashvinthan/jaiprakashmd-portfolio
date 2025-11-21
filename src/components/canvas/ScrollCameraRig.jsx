import { useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react'
import { gsap } from '../../lib/gsapConfig'

export default function ScrollCameraRig() {
  const camera = useThree((state) => state.camera)
  const controls = useThree((state) => state.controls)

  useLayoutEffect(() => {
    if (!camera || !controls) return undefined

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '#scroll-sections',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
        onUpdate: () => controls.update(),
      })

      timeline
        .to(camera.position, { x: 0.6, y: 1.1, z: 4.8 }, 0)
        .to(camera.position, { x: -1.2, y: 0.7, z: 4.5 }, 0.33)
        .to(camera.position, { x: 0.15, y: -0.3, z: 4.2 }, 0.66)

      timeline
        .to(controls.target, { x: 0.1, y: 0.2, z: 0 }, 0)
        .to(controls.target, { x: -0.35, y: 0.5, z: 0.1 }, 0.33)
        .to(controls.target, { x: 0, y: -0.15, z: 0 }, 0.66)
    })

    return () => ctx.revert()
  }, [camera, controls])

  return null
}
